---
layout: post
title:  "Graphical code exploration"
date:   2025-03-30 06:00:01 +0100
categories: Software
---

With [clj-tiles](https://github.com/kloimhardt/clj-tiles) of 2021, I made my own choice of graphical code representation. The following is a side-by-side comparison with [BlockPy](https://think.cs.vt.edu/blockpy/load).

## The Loop

Two versions of the same `for` loop:


![Python-for](/blog/images/python_for_block.png)

![Clojure-for](/blog/images/clojure_for_block.png)

### A First Analysis
Usually, visual tools are seen as a means to teach coding. A beginner assembles simple Python programs and the graphical blocks are meant to help learning the syntax.

I see graphical blocks in a different way. They are meant to convey ideas, to show essential code snippets to an audience.

In that respect, I think my choice of graphical representation is much cleaner. Can you guess which one of the above two is mine?

### Python and Clojure Code

The graphics on top is generated from the following Python code:

```
(pow(x, 4) for x in (1, 2, 3))
```

The second graphic represents the following valid Clojure syntax:

```
(->> (pow x 4) (for [x [1 2 3]]))
```

I deliberately chose this `for` example because in this case, the Python and Clojure syntax are  basically the same. Admittedly, in the text representations the parentheses are distributed differently, but the graphical clj-tiles representation does not involve parentheses at all.

I see this lack of parentheses as a crucial advantage. With blocks the parentheses become superfluous.

## The Function

![Python-fun](/blog/images/python_fun_block.png)

![Clojure-fun-1](/blog/images/clojure_fun_block_1.png)

The clj-tiles graphics was generated using the following text:

```
(define myfunction
        (parameters x
                    base)
        (return (log x base)))
```

Any Clojurian will protest as this is not valid Clojure code. Indeed the text was chosen to resemble the BlockPy graphics as much as possible. But with suitable Clojure-macros this text can be made executable code. Remember that the `for` above is also a Clojure macro, albeit a standard one.

### clj-tiles for Python

The above cyan-coloured BlockPy graphics represents the following Python code for a function definition:
```
def myfunction(x, base):
    return log(x, base)
```

I do not know why the BlockPy creators were choosing to change `def` to `define`. In any case, I find the following clj-tiles graphics much more suitable for this Python code:

![Clojure-fun-1](/blog/images/clojure_fun_block_2.png)

Naturally, the according generating text is basically Python (with the usual parentheses caveat which, as stressed, only pertains to the text and not to the graphics):

```
(def (myfunction x base)
     (return (log x base)))
```

So my claim is that for some simple Python cases, clj-tiles graphics are more suitable than BlockPy. The reason is that BlockPy, being a learning tool, needs to cover all Python constructs. clj-tiles graphics, on the other hand, use only two types of blocks, the list and the vector:

![Clojure-for](/blog/images/clojure_lv_block.png).

Hence clj-tiles does not aspire to cover every syntax construct. It is rather meant to present selected code snippets, it is a tool to present ideas.

## Musings on Jupyter and other Notebooks

clj-tiles graphics can be executed as Clojure programs within the [clj-tiles website]([clj-tiles website](https://kloimhardt.github.io/cljtiles.html?page=SICM001):). The website can read source code text from any given web address, so everyone can use clj-tiles out of the box. Below is an example featuring the [Emmy](https://github.com/mentat-collective/emmy) library.

![cljtiles_harmonic](/blog/images/cljtiles_harmonic.png)

 But executing clj-tiles graphics need not be restricted to its website. With tools like  [hylang](http://hylang.org), [Basilisp](https://basilisp.readthedocs.io) or [Hissp](https://hissp.readthedocs.io), all the above clj-tiles graphics can be made executable (not only with Clojure but also) in a Python environment. A prototype for a Jupyter notebook is shown below.

![jupyter_blockly](/blog/images/jupyter_blockly.png)


In the above Jupyter example, not only Python and Hissp, but also JavaScript is used. In another context, Emmy is accessed via JavaScript within a plain html file, as shown below with [this online notebook](https://kloimhardt.github.io/blog/html/sicmutils-as-js-book-part1.html).

![scheme150_harmonic](/blog/images/scheme150_harmonic.png)

From all this follows that code snippets written in the different languages of JavaScript, ClojureScript and Python could (in principle) be presented within one Jupyter notebook in a uniform graphical manner. If implemented, this would especially facilitate a transition from Python to Clojure.

## Special Topics

This section can be omitted in a first read.

### Higher order functions
The Python code
```
this_returns_a_function("three=")(3)
```
renders neatly in BlockPy

![Python-higher](/blog/images/python_higher_block.png)

For the respective Clojure code

```
((this-returns-a-function "three=") 3)
```
we actually had to introduce a third type of block showing the pipe symbol `|` so that confusions with vectors are avoided:

![Clojure-higher](/blog/images/clojure_higher_block.png)

We think this is neat too, also because of the unique beige colour.

### Let blocks and maps in Clojure

![Clojure-higher](/blog/images/clojure_let_block.png)

Because the standard `(let [x 2 y (pow x 3)] y)` does not look great in graphics (left side), I'd suggest to introduce some macro, call it `let-p`, which reads as `(let-p (x 2) (y (pow x 3)) y)`. We think that the respective graphics on the right hand side indeed looks nice.

Concerning hash-maps, there certainly can be found one solution or another. One could maybe think along the lines of the presented solution for higher order functions, another one can be found hidden in the clj-tiles pages. The question here is if one really wants to do keyword destructuring within blocks. My answer is that this should be avoided. Unless having a really good reason, using a list starting with `hash-map` should be sufficient.

### Remark

I would go as far as to say: if the graphical representation of a program cannot be held clean, it has no practical purpose and one should either simplify the code snipped to be presented or switch language altogether. Thus I suggest to avoid striving for completeness of syntax coverage but keep the block representation of Clojure as simple as presented with all in all just three types of blocks.

## Summary and Outlook
For some simple Python cases, clj-tiles graphics are more suitable than BlockPy. In the future, clj-tiles graphics might be made executable (not only with Clojure but also) in a Python environment. This would allow to present code snippets written in the different languages of  JavaScript, ClojureScript and Python in a uniform graphical manner.
