---
layout: post
title:  "Draft: A functional scripting interface to an object oriented C++ Library"
date:   2023-07-28 06:00:01 +0100
categories: Literatur
---
## Exposition
The following example to plot a function with ROOT using Python is taken from  [1]:

```
import ROOT

class Linear:
    def __call__(self, arr, par):
        return par[0] + arr[0]*par[1]

# create a linear function with offset 5, and pitch 2
l = Linear()
f = ROOT.TF1('pyf2', l, -1., 1., 2)
f.SetParameters(5., 2.)

# plot the function
c = ROOT.TCanvas()
f.Draw()
```

We will convert this Python code into the Lisp dialect Clojure [2] using the Ferret [3] transpiler.

### Header
On the left hand side is the original Python version, on the right we see the Lisp code:

```
import ROOT                           | (native-header "ROOT.h")
                                      | (require '[cxx :as ROO])
```

`import ROOT`: "The entry point to PyROOT is the ROOT module, which you must import first". "With PyROOT you can access the full ROOT C++ functionality from Python while benefiting from the performance of the ROOT C++ libraries." [1]

`(native-header "ROOT.h")`: Ferret can import arbitrary C++ header files. In C++ one would write the statement `#include "ROOT.h"` to access the ROOT functionality within own programs.

Already here we see the ubiquitous parentheses of all Lisp languages, every statement starts with a `(`.

`(require '[cxx :as ROO])`: Here, the interop functionality underlying this article is imported. The code is free and open source [4] and can be found in the file `cxx.clj` which is only some 350 lines of self contained Ferret code, i.e. it does not import anything.

The interface is intended to be usable for any C++ library, not only ROOT. However, it is only made for the purposes of this article, hence a prototype and by no means feature complete or even remotely quality tested.

The alias name `ROO` might seem awkward, but this results in the name `ROO/T` for calling the interface, as seen blow. This is as close as we could get.

### Defining the function to be plot

```
class Linear:                    | (defn Linear [[x] [d k]]
 def __call__(self, arr, par):   |   (+ d (* x k)))
  return par[0] + arr[0]*par[1]  |
                                 |
l = Linear()                     |
```

`class Linear ...`: Already here we encounter the bedrock of object oriented programming, namely the definition of a class. The main reason this article was written is that we believe that a scientist should not be required to define classes as it takes a lot of space to explain their rationale. In practice, one is led to just accept that the line

`l = Linear()` defines a mathematical function named `l` which we describe now at hands of the Lisp code.

`(defn Linear ...)` defines the most useful and almost simplest mathematical function in existence: the straight line. From grammar school we know it to be written as `y = d + k * x`.

One does not have to completely understand the following university level notation for mathematical functions, it looks something like this:

`Linear: R^1 X R^2 -> R; ((x), (d, k)) -> d + k * x`.

The Lisp notation is a bit simpler than this, because it omits the middle part. The most disturbing element is probably the prefix notation: `(+ d (* x k))` instead of `d + k * x`. Although most people do not like prefix notation, this example already suffices to explain it.

The notation for the signature of the function, `[[x] [d k]]` is also easily explained: `Linear` expects two parameters which are both vectors (in C++ a vector is called array). The elements of the vectors are picked and named for further use. That the first parameter is a vector of only one dimension seems superfluous (why not just a number?), but needs to be accepted for now.

### Setting up the canvas
```
c = ROOT.TCanvas()               | (def c (ROO/T (new TCanvas)))
```

Here is our first contact with ROOT proper. A canvas object is registered in the internal state of the ROOT system, every `Draw` command will resort to this instance.

The observant reader might have noticed that the statement appears earlier than in the original Python code.

One has to admit the drawback of this approach: computer memory is allocated earlier than necessary, resources that other programs might have better use for. The reason for this tradeoff will become clear soon.

The Lisp code introduces `new`. The reason is that in contrast to Python, Ferret has the cycle source-file -> transpile -> C++-file -> compile -> binary executable. In this cycle, `ROO/T` is responsible for generating all ROOT interop C++ code at transpile time. That means that when the C++ code has been generated and thus is ready to be compiled to an executable,`ROO/T` has already completely disappeared. In contrast, `new` transferres over to C++ code.

Python always is present at runtime, it does not have the above mentioned cycle. For interop, an "automatic, run-time, Python-C++ bindings generator" [5] is used. This allows for great flexibility and feature richness, but does not allow for compact executable binaries.

Looking at the code, the left side is simpler and easier to read. Not least because of the three-level nested parentheses on the right side. Lisp is just not made for statements like this: the definition of auxilary one letter variables taking just one line. Python is.

### Drawing the function
```
f = ROOT.TF1('f', l, -1., 1., 2) | (ROO/T ((new TF1 :XR2) "f" Linear -1. 1.)
f.SetParameters(5., 2.)          |        (SetParameters 5. 2.)
f.Draw()                         |        Draw)
```

A ROOT TF1 object is created. "A TF1 object is a 1-Dim function defined between a lower and upper limit." [6]. The TF1 warps the functions `Linear` which was created before. This enables the Parameters `d` and `k` to be set and the function to be drawn on the canvas.

Statements in Lisp usually span several lines and are thus better called "top level forms". This is in contrast to Phython where most of the time there is one statement per line.

[1] https://root.cern/manual/python/#passing-python-callables-to-c  
[2] https://www.clojure.org  
[3] https://ferret-lang.org  
[4] https://github.com/kloimhardt/LisRoot  
[5] https://cppyy.readthedocs.io/en/latest/  
[6] https://root.cern.ch/doc/master/classTF1.html

## Development

## Recapitulation

## Coda
### Execution

```
java -jar ferret.jar -i foo.clj
clang++ foo.cpp $(root-config --glibs --cflags --libs) -o foo
```

 The first line transfiles the source file `foo.clj` to C++. The second line, being independent from Ferret, is the standard call to compile code with the ROOT library.

Ferret is a Java program and distributed as one single .jar file. So besides Java, nothing needs to be installed or buildt on the local machine. The C++ code generated is self contained, it does not import anything in addition to the libraries imported by the user (which of course is ROOT in this case).

## Random
fist make lots of one letter variables and get rid of them. Use Clojure not Fettet directly to write code.

## Blabla

The authors have created a functional scripting interface to a mature data analysis framework used by high energy physics. The interface gives users a direct, light-weight handle on the framework only using a human readable text-file to duplicate the function signatures of the underlying number-crunching code. The authors also discuss design issues and the advantages of the functional programming paradigm.

Object-oriented programming is the mainstream in almost all computing fields. Although functional programming is gaining momentum, in computational physics its use has been quite modest until recently.

One reason for this lag is the perceived lack of self efficacy of the physics student when not using a mainstream language. Another reason is the dominant focus on speed and a common disregard for succinct notation of underlying theoretical ideas.

This situation is gradually changing as performant implementations of functional programming languages become available [1-3].

```
1 https://cisco.github.io/ChezScheme/
2 https://opengoal.dev
3 https://jank-lang.org
```

This article describes how we created an interface to a mature data analysis framework used by high energy physics. Other researchers have created OO interfaces in the same context [1] but our approach differs because we don’t create sophisticated bridge software. Instead, we use Lisp's compile-time feature to directly generate C++ code where a seperate textfile defines the necessary function signatures as a human readable data-schema. An approach that shows how to interface to a host language using type hints intermingled in code appears elsewhere [2]. Also the practical use of data schemas have been shown [3]. Both our interface and its underlying code are available free under the MIT license.

```
1 https://root.cern/manual/python/ https://root-forum.cern.ch/t/cling-and-pyroot-python/18059
2 https://clojure.org/reference/java_interop#typehints
3 https://github.com/metosin/malli
```
## ROOT
The ROOT code was developed at CERN, the international research center for particle physics. The code’s applications cover a broad spectrum ranging from function minimization to plotting. The ROOT code originated in the 1990s and is written in C++. Recent modernization brings in a Python interface.

### From OO to functional

The most comon way to plot a function in ROOT is by using object oriented Python code:

```
import ROOT

class Linear:
    def __call__(self, arr, par):
        return par[0] + arr[0]*par[1]

# create a linear function with offset 5, and pitch 2
l = Linear()
f = ROOT.TF1('pyf2', l, -1., 1., 2)
f.SetParameters(5., 2.)

# plot the function
c = ROOT.TCanvas()
f.Draw()
```

For comparison, our functional code is:

```
(native-header "ROOT.h")
(require 'cxx)

(defn Linear [[x] [d k]]
  (+ d (* x k)))

(def c (cxx_> (new TCanvas)))

(cxx_> ((new TF1) "pyf2" Linear -1. 1. 2)
       (SetParameters 5. 2.)
       Draw)
```

A side by side comparison:

```
import ROOT                           | (native-header "ROOT.h")
                                      | (require '[cxx :as ROO])
```

```
class Linear:                         | (defn Linear [[x] [d k]]
    def __call__(self, arr, par):     |   (+ d (* x k)))
        return par[0] + arr[0]*par[1] |
                                      |
l = Linear()                          |
```

```
c = ROOT.TCanvas()                    | (def c (ROO/T (new TCanvas)))
```

```
f = ROOT.TF1('pyf2', l, -1., 1., 2)   | (ROO/T ((new TF1) "pyf2" Linear -1 1 2)
f.SetParameters(5., 2.)               |        (SetParameters 5. 2.)
f.Draw()                              |        Draw)
```

ROO/T is the Clojure doto.

Do not introduce letters and use as little parantheses as possible.

OO creates objects just before they are needed in the procedure of the step-by-step computation. The result is a flow of objects which are created and changed as needed by the processor.

Functional programmers try to immediately make all possible changes to an object when it is created. This means that the Canvas allocates memory earlier than needed, becuase it is only until the "Draw" that it is needed. Use as few of those single letter variables as possible.

This also means that sometimes objects are created new instead of using already existing ones, all at the cost of runtime and memory. Only when speed is needed is it given precedence.

A single type hint should be sufficient to deduce all types in one expression. Scientific code is usually not very interactive, only script character. A sophisticated type inference system is not needed and results in more expressive code mathematic textbook style.

First, a class called "Linear" is defined. Then an instance of this class, the object named "l", is created. Through the reserved name "\_\_call\_\_" in the class definition, any instance of the class, hence especially "l", can act as a function. Up to now, we only dealt with Python.

Now ROOT comes into play. The Object-Function "l" is fed as argument into ROOTs own function representing class, TF1, thus constructiong the object named "f". This ROOT object is in the next line mutated with the method "SetParameters". This is very typical for OO style programming: creating objects using a set of parameters and then change the state of objects in a next step to manipulate their behaviour.

In the final step, "f" is drawn to a canvas.

The most important difference is that we do not introduce intermediate objects "l" and "f". The function "Linear" is fed as argument into ROOTs TF1 class, thus constructing an object which is immediately drawn to a canvas. All the necessary information is already specified at object construction, there is no need to mutate anything after creation.

Although object oriented code is operating behind the scenes, the writer of the script does not have to specify any classes. The user purly stays in the functional paradigm.

Especially, compared to the object oriented approach, the functional definition of "Linear" looks quite similar to definitions appearing in Mathematics Textbooks. We are aware that one can also omit the intermediate objects "l" and "f" also in Python, but first such an omission is seldom seen in practice, and second in that case the definition of "Linear" needs more knowledge of how to implement class constructors and the resulting code for "Linear" then looks even less like a simple function definition.

We observe that the mathematical notation in typical physics textbooks does not include mutation of mathematical objects. Those are only defined once. Thus we argue that the functional style is more suited to computational physics.

## Runtime type check
Like Python, Ferret does not have static typing. This makes it suitable for scripting purposes.

But there is another feature in Clojure: runtime data-scheme validation.

We have two schemas for SetParameters: :default and :double_int. The call is
```
((cxx_> SetParameters TF1 :double_int) 5. 2)
```

and checks wheather the second parameter is indeed an integer value. Nevertheless, to the function SetParameters, a double value is passed on.

