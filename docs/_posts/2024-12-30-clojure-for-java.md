---
layout: post
title:  "Classic Talk: Clojure for Java Programmers"
date:   2024-12-30 06:00:01 +0100
categories: Software
---
## Intro
This blog is an excerpt of the talk "Clojure for Java Programmers" [part 1](https://www.youtube.com/watch?v=P76Vbsk_3J0and)  and [part 2](https://www.youtube.com/watch?v=hb3rurFxrZ8). It is taken from [the full transcript](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/ClojureForJavaProgrammers.md). In a nutshell the talk says: "Clojure is the better Java", which I think is true. Nevertheless, at the end of this blog, I deliver the opinion that this can only be argued in good faith by the creator of Clojure, Rich Hickey.

## Excerpt from: Clojure for Java Programmers
[0:10] This talk is oriented towards people who program in Java or C or C++. In particular I'm not going to presume any knowledge of Lisp.

[0:40] This talk is going to be an introduction to the Clojure language. A fly by tour of some of its features.

[4:10] Clojure is a dynamic programming language. Dynamic has a lot of different meanings. In particular it's dynamically typed. That would be an expectation you'd have of Python or Ruby or Groovy. It achieves that dynamic nature by being a Lisp and I'll talk more about that.

[4:30] I don't see a lot of people who know Lisp here, but that doesn't mean there isn't a bias against Lisp. How many people have seen Lisp and said "oh my God I can't believe the parentheses". I would say I'd hope you'd put that bias aside for the purposes of this talk.

[5:20] Clojure is a very different Lisp. It's syntactically much leaner than a lot of Lisps, it has fewer parentheses, it uses more than one data structure in its syntax. That means it has more than the singly linked List.

[6:20] There are also ports of languages other than Clojure that sort of just sit on the JVM. There are ports of for instance Common-Lisp that sit on the JVM. But they don't really connect very well for a number of reasons. One is they're implementing a standard that was written before Java was written. And second there's just no merging of its type systems onto the other.

[6:40] Clojure was written for the JVM and so it's very heavily integrated with it. So not only does it reside there which is a benefit because you can run it as if that's your environment. But it embraces the JVM which means the integration is good and it's pretty transparent to go back and forth.

[8:00] Of the people in this room who are programming Java, how many are happy about that, they like Java, they have no complaints? Okay not too many. It ends up that I think many Java programmers look at people who are using Python or Ruby and being very productive. I think justifiably they envy their productivity, the succinctness, the flexibility they have. And in particular how quickly they can get things done. It ends up that, and that is a fact of the static languages (especially the ones like Java), that they're inherently slower because of the amount of - well some people call it ceremony.

[9:00] Another key point is interactivity. Again this goes back to Lisp which has pretty much always been an interactive language. That means a lot of things. In particular it means that when you got a Lisp up and running you feel like you are engaged with an environment as opposed to, you know, shovelling your text through a compiler phase to produce something else out the other end. So that interactivity is kind of a deep thing.

[9:30] Dynamic languages tend to be more concise. That doesn't mean that static languages can't be. Haskell in particular is very concise. But the curly brace languages are not concise. Java is probably a great example of a language that's not concise. And that's just not a matter of tedium it's a matter of: where is your logic? how far apart is your logic? how spread out? can you see what you're thinking about? or is it in pieces? is it spread out by a bunch of things that are not about your problem?

[10:00]
There's a certain aspect in which static languages are like concrete. And that's a good aspect. Concrete is going to be more resilient to change, it's more structured and it's rigid.

[10:20] On the other hand that's not necessarily the kind of material you want to be working with when you're trying to figure out what your structure should look like in the first place. So dynamic languages are better for exploration. In particular what I like about dynamic languages and Lisp fundamentally (I think in a way other languages don't achieve) is that it lets you focus on your problem. You can with Lisp and its ability to do syntactic abstraction suck everything out of the way except the problem.

[10:30] There are many dynamic languages available for the JVM and dynamic languages are supported as a concept in in the Java community. At Java 1 there was plenty of presentations on Jython and JRuby and Groovy and these other languages.

[12:00]
You can categorize languages in one dimension pretty straightforward. Are they a port of a language that exists somewhere else or were they written for the JVM. Ports have a bunch of challenges, e.g. is there is a canonic version out there? Because most of these languages are not defined by a specification but by a canonic implementation. So
there's CRuby, there's CPython. Those are really the languages and the other things are ports which have to struggle to follow along with the C version.

[12:50]
An effort to port Python to Java means having to replicate those libraries. So I would say the main appeal to a ported language is in that you already have an investment in Python. Or you really love the language design, that's a good way to go.

[13:10]
If you're just starting from scratch you may find that a language that's native to the JVM is going to give you better integration. You know the canonic version of Groovy is a JVM language, the canonic version of Clojure is a JVM language.

[13:30] Within the native JVM group, Groovy is going to let you do what you do in Java. Except a little bit more easily. Fewer semicolons, more dynamic. There are some builders. There are some idioms. Groovy is sort of the fun of dynamic programming with a lot of the similar syntax to Java. So I think if you're just interested in dynamic and want to continue to write programs that are like your Java programs, Groovy can can't be touched (is unbeatable).

[14:00] Clojure is not about writing programs like your Java programs. Clojure is about realizing what's wrong with your Java programs and doing something different. There's a certain mathematical purity to Lambda calculus and in the way it's realized in Lisp, the uniformity of the syntax is elegant.

[16:10] The nice thing about Java is that it has a wide range. Clojure has direct wrapper free access to Java. Some of the ported languages have to use wrappers because those languages have their own object systems that imply a bunch of dynamic features that they have to glue on top of Java objects when you interoperate with them. Clojure was designed to provide direct access to Java.

[17:50] A feature of all Lisps, if they want to be a Lisp, is that code is represented as data.

[18:10] Being a Lisp means having an extremely small core. You'll find when you contrast Clojure to other languages, even languages that are theoretically lightweight like Python or Ruby, Clojure has way less syntax than those languages. There is far less complexity in Clojure in spite of the fact that Python appears easy.

[20:50] Clojure has Integers that have arbitrary precision, they can get as large as your memory can support. And the promotion of small integers to larger integers while arithmetic is going on is automatic.

[23:10] It supports doubles as the floating point format. The Clojure doubles are the Java Doubles with capital D. One of the things you're going to see about Clojure is everything is a Java object. That means all numbers are boxed at least until you get inside a loop where I can unbox them. But it's a language in which numbers are boxed unlike Common-Lisp where you have access under the hood to use tagged integers and tagged numbers which is more efficient than allocating them on the heap.

[24:20] You have big decimal literals. You have ratios: 22 over 7 is something. It's not divide 22 by 7 it's a number that's not going to lose any information versus dividing 22 by 7 and either truncating or converting into a floating point format, so ratios are first class.

[24:40] String literals are in double quotes. They are Java strings, same thing. Immutable, no conversions, no mapping being again a native JVM language means I can just adopt the semantics of Java literals. I don't have to take strings from a language spec that said for instance they could be mutable and have to force that on the JVM by having my own type and conversions to and from so because I'm an immutability oriented language I'm very happy with Java's definition of a string being an immutable thing so Clojure strings are Java strings.

[27:00] Symbols are used as identifiers. They're first class objects like strings. Symbols are something you would use for a variable. You could make the symbol "Fred" be equivalent to the number five.

[28:50]
nil means nothing. It also is the same thing in Clojure as Java null. Didn't have to be but it is. So you can rely on that. So nil means nothing and it's the same value as Java null. So when you get back nulls from Java they're going to say nil. nil is a traditional Lisp word.

[32:00] There are composite or aggregate data structures. In Clojure they're kind of the core abstractions of computer science. One is the list, parentheses separated by spaces, there's no need for commas. You'll see some commas, commas are white space in Clojure, they're completely ignored. You can put them in if it makes you feel better or makes things somewhat more readable. But they're not actually syntax, they're not considered by the evaluator.

[36:10] Heterogenous collections are supported in all cases. It's not a list of something, it's a list that can contain anything and any mix of things.

[36:20] The next thing is a vector. It uses square brackets. That should imply, for Java programmers, the notion of an array. Square brackets mean arrays, so a vector is like an array, in particular it supports efficient indexed access.

[46:50] So what's the syntax of Clojure? We just did it! I'm not going to talk about semicolons, curly braces, when you have to have a new line or anything else because the structure of a Clojure program is a data structure. Or better: a series of (self-contained) data structures. There is no other stuff. There are no rules about where things go, there are no precedence rules, there's nothing else. You write a Clojure program by writing the data structures I just showed you. That's it. Which means you write a program by writing data structures. The data structures are the code.

[47:50] There's a fancy name for it called homo iconicity. It means that the representation of the program is done in the core data structures of the program which means that programs are amenable to processing by other programs, because they are data structures.

[48:20] So I'm not going to talk anymore about text based syntax because there is no more. Now many people claim of Lisps that Lisp has no syntax and that's not really true. It doesn't have all this little fiddly character syntax necessarily. There is syntax to the interpretation of the data structures. We are going to see a lot of lists, they have different things at the front. The thing at the front will tell you the meaning of the rest.

[48:40] So let's talk a little bit about evaluation. So how does this all work? We know the traditional way from Java or many other languages like Java. We type our program into a text file and we save it and then we we send those characters of that text to the compiler who has a very involved abstract syntax tree and parser and lexer that interpret the rules of the language. And then it will turn it into something that can run. In the case of java that something will be bytecode.

[51:00] A developer seeing it run with this procedure maybe says: "O that was bad I wonder what happened, I wish I had run it in debug mode, I wish I had put a breakpoint somewhere interesting, and I'm really sad that I spent an hour calculating that data and dropped it on the floor because I have to do it again with the breakpoint in". That's not a good experience.

[51:30] In fact, that's a lot different experience than keeping your program around, which happens in Clojure. Having that data stay loaded and fixing your function and running it again without starting over so that's what happens in Clojure.

[52:30] What comes out of the reader are a series of data structures. And what's unique about a Lisp and Clojure is that the compiler compiles data structures. It does not compile text. It never sees text. What the compiler gets handed is maybe a list with three symbols in it or a vector with five numbers in it that's actually what the compiler has. It has a data structure in hand with actual data in it, not text. And it compiles it.

In the case of Clojure it is indeed a compiler. There are actually many Lisps that are interpreters and many people believe that Lisp is always interpreted. It's certainly easy to make an interpreter for Lisp that would take those data structures and on the fly produce the values they imply. But Clojure is a compiler which compiles those data structures to Java bytecode right away, there's no interpretation in Clojure. So it's a compiler it produces bytecode just like Java and C does and because it's an interactive environment it presents that bytecode right away to the JVM to execute and and it executes right away. Data-structure by Data-structure, list by list, vector by vector.

[54:00] Your environment is your program, your compiler is in your program. I mean some commercial lists give you tools to take out the compiler in production. In Clojure there's no "strip out the compiler" option.

[56:10] It's quite possible to write a program that generates the data structures that the compiler wants to see and have it send them to the compiler to be evaluated. So programs generating programs are a common thing in this kind of an environment, whereas this kind of stuff when you're doing it with text is really messy.

[1:00:40] In other languages, you could theoretically write something and if the compiler could hand me the abstract syntax tree I could navigate it with some custom API and do whatever. It's not nearly the same though. What the Clojure compiler is handing you are those lists and vectors I just showed you that every program knows how to manipulate and has a wildly huge library that directly can manipulate.

[1:01:10] Unlike Java, in Clojure everything is an expression. So you know in Java there's a difference between declarations and statements and expressions. There's no distinction in Clojure. Everything is an expression, everything has a value, everything gets evaluated.

[1:01:50] All those data literals I showed you, numbers, strings, vectors, are all evaluated by the compiler to represent themselves. Except lists and symbols. Lists and symbols by default are treated specially by the evaluator so when it reads a list of symbols in particular, it's going to do some work. It's not just going to return the list of symbols to your program it's going to try to understand them as an operation. So the compiler is going to try to map the symbols to values, like variables. Like you know in Java you can say "n equals 5" and later in your program you say "n" and Java is going to try to figure out "oh that's five that's the n you set up there". Same thing in Clojure. When you use a symbol in your data structure Clojure is going to try to find a value that's been associated with that symbol.

[1:03:10] If it's a list and it's going to say this is an operation of some sort, I have to figure out what to do with a list. So how does that work? From the evaluator standpoint all that matters is the first thing. The first thing is the operator  that's going to determine what to do. Whatever value that yields I'm going to treat as a function and attempt to call with the calling mechanism of Clojure.

[1:27:48] The first thing about functions you need to know is that they're first class values. They're values like any other. Methods in Java are not first class. You can't put a method into a variable. You can't pass a method to a function. These are special things. In Lisps and in fact in most dynamic languages today, functions are first class which means the function is a value.

[1:31:12] In general, the things that in Java would be declarations or control structures or function calls or operators, in Clojure they all are uniform in that there are lists where the operator is the first thing in the list. So we've reduced all of this variation here to something uniform.

[1:34:47] There's a lot of value to that uniformity. I know a lot of programming languages. And every time I have to learn the "whatever the rules are" syntax -- and this thing next to that means that and this character means this and you can have a semicolon here but not there and it better be indented by the same amount or whatever it is -- I really get angry now because there is no reason for that. It is certainly not better than Clojure data structures.

[1:35:59]
One of the things that is typical about Lisp is that a Lisp has a rich library for manipulating lists. In my opinion it's a shortcoming of Lisps traditionally that those functions are limited to a particular data structure which is the singly linked list

[2-0:00:00] Let's look at Java Interop because one of the great things about Clojure is it sort of solves the library problem by adopting the library of Java. You know all new languages have this problem. If they're implemented on a C basis they're starting from nothing they're writing their own runtimes their own garbage collectors their own libraries etc etc. This is a tremendous amount of wheel reinvention so Clojure's approach is to say: you know these libraries are already written, if you could leverage them in an idiomatic way you would be done.

[2-0:01:10] You can use Java directly in Clojure, no wrappers. You don't have to write your own library. It shouldn't make you feel too dirty if you like Lisp.

[2-0:01:30] You can build on top of it if you need to. But when you see how Clojure both lets you access Java and how Clojure brings Java things into its world, you'll see that you often don't need to do that.

[2-0:01:47] For interop, Clojure has this symbol "dot". It is a special operator that is included in the Clojure compiler. It says we're going to treat the rest of the list like it's a Java method along with its class.

[2-0:02:50] Concerning concatenated calls: you know in Java you can say "this dot that dot that" and you could say the same in Clojure too. By saying "dot this whatever" and then surrounding that with "dot the next thing whatever". And doing the list kind of thing with growing shells of calls. But I know most Java programmers would not be happy with that. And that's where macros come to play because there it was really easy for me to write a macro called "dotdot".

[56:10 [sic]] A macro is a program that generates a data structure that is sent to the compiler to be evaluated. Programs generating programs are a common thing in Lisp.

[2-0:04:20] The symbol "dotdot" is just a macro. There's no language thing. It's not in the compiler, it's not special syntax. It takes those forms coming after it and turns them into a nested list all starting with "dot". The first thing "dot" is the only primitive Java member access thing that exists in Clojure. That "dot" upfront in the top is the only special operator.

[2-0:03:40] If you have other patterns that you like, you can write macros for those too. But this one comes included: "dotdot".

[1:24:52 [sic]] Propagating up from macros to the source of the problem in the macro is something that's being worked on. Some compilers do it pretty well for Common-Lisp. It's an area I hope to enhance Clojure but a macro will always be more challenging than a function. That's why macro writing is not for newcomers or the inexperienced part of the team.

[2-0:05:30] One of the nice things about Clojure is to let you fix Java. One other example of this is for example a macro called "doto".

[2-0:05:30] Think about what you could do, if you could do this in Java. You could make abstractions for all those patterns that you can't get rid of automatically. Closing files and things like that. Exception handling patterns that you want to put in logging policies. You can encode them all in macros and they're going to be uniformly applied everywhere and when they need to fix them you can fix them in one place as opposed to everywhere where you put them manually. This is a better way to write Java.

[2-0:08:20] At a higher level, the integration with Java is very good. You know I said before Clojure strings are Java strings. The numbers are big N Java Numbers. The Clojure collections all implement the Java collection interface. The collection library in Java is particularly good.

[2-0:08:30]
And one of the nice things about it is that the Java interfaces are defined as optional, i.e. all of the non read-only functions of the collection interface are optional. So Clojure implements the read-only part of the collection interface. Which you can. You cannot implement the mutating operations of the collection interface within Clojure because its data structures are immutable. So if you want to take the Clojure vector and pass it to Java, something like "copy from" or any of the job functions that take collections, it will do it.

Also all Clojure collections are iterable. They are that, because they are collections.

Concerning Clojure functions: when you say defn, that yields a Java object that implements Callable and Runnable. So you can pass them directly to the executives framework, to Swing callbacks, directly usable in Java and by calls to Java that need objects and implement particular interfaces.

There's much more of that but you can just presume that if I could make it work and the semantics were correct, I've done it.

If you wanted to extend Clojure you can do it.  Like I've shown you lists and vectors and some other things. Most of them are written in Java. You might have some really cool data structure you want to implement "seq" on, there is an interface for "seq". It's called "ISeq". If you implement that interface "ISeq" and in addition "first" and "rest", every function in the Clojure library will work on your data structure. You implement an interface with just three functions, and you're done.

You interoperate with Clojure, that's what it takes to add a data structure to Clojure. And you can do it. You don't need to ask me.

Similarly there are interfaces for everything else. IPersistentCollection, IPersistentList, IPersistentMap and everything else. Interfaces for everything. You can extend Clojure yourself.

Concerning the other way: the Clojure sequence library already works on a lot of Java stuff with no work. For instance that "seq" "first" "rest" and all those functions work on anything that's Java iterable. Which is all the collections in Java. They work on strings - directly. And they work on Java arrays - of both objects and native types. So all of that Clojure library is there for you. You want to call "partition" on a Java hash map or Java lists, all those Clojure functions will work on Java stuff.

You can implement and extend Java interfaces and classes in Clojure. Clojure does not really advocate treating Clojure like Java, like the creation of classes with members and things like that. Clojure likes interfaces and emphasizes implementing interfaces. Extending a concrete Java class in Clojure is not recommended. It is possible though, mostly because there are "unfortunately defined" Java libraries that force you to do that. So I had to support it. As a design thing I don't recommend it but you can do it because you have to.

It's funny, you know, the guys who did java.util.Collection, they're awesome. You look e.g. at "stream" - all the concrete classes in there, no interfaces. It's terrible. But you have to deal with that stuff and I accept that so you can do that.

[2-0:18:30] I've recently added primitive support where the speed is exactly the same as Java. The performance is stunning, it's the fastest Lisp I can find.

[2-0:18:48] That gives you a taste of what it's like to do Java programming in Clojure. I find it a lot more fun than Java programming.

[2-0:19:10] Clojure supports functional programming and concurrency and they sort of go together. Although there's a lot of value in functional programming without the concurrency, I don't really think there's valid concurrency without the functional programming. So what do I mean by functional programming? I mean in this case mostly two things. I think the term functional programming is erroneously applied to some languages including sometimes to Scala. That's just meaning having first-class functions. Functions as values you can pass to other functions. Or returning functions from functions.

[2-0:19:50] But real functional programming is about side-effect free functions and immutable data. It's about saying every function is literally a function of its arguments that produces a new value and nothing changes. In the function nothing has past changes and nothing in the outside world changes. Now obviously we can call Java from Clojure and do all kinds of side effects. So what I'm talking about here is what Clojure provides in addition to allowing you to make a mess in Java. Clojure gives you the recipe for doing functional programming correctly. So by functional programming we mean those two things: immutable data and the first-class functions.

[2-0:20:30] Could you do this in Java, just by sticking to conventions? A little bit, yes. One of the problems here is having data be immutable isn't enough. You need the ability to efficiently create things that appear to be modifications. Like you can make immutable data by copying everything. Just we will never change this, I'll make a full copy every time I need to make a change. That's not practical and it's not going to perform well. So the immutable data is trickier than you think.

There are a couple of flavours of functional languages. There's some that are very strongly statically typed, they have very intricate type systems. In particular Haskell, they're not for everybody. Some people love it I think if you're mathematically oriented and your programs are like calculations, this is a tremendous fit in a language like Haskell. If your program has to talk to a database, and a screen, and the web and all this other stuff, I don't know that's as good a fit. People do web programming in Haskell but I don't see it. In addition I think there are expressivity problems to type systems. Until you become omniscient, which is not going to be anytime soon.

Then there is dynamic functional languages which are actually very rare. I think Erlang certainly led the way here. And Clojure is another example of a dynamic language that's functional. So now you're combining dynamic typing with immutability - that's a different pairing.

Why do this? Why Functional Programming? Because it makes your programs better. Much better. Concurrency completely aside, I have completely changed over to functional style programming even when I'm stuck in something like C# or Java. Because your programs are better. You can look at them, you understand what they do. This function, it takes these things, it produces that, you don't have to look anywhere else to understand what's happening. And as you scale up that property becomes incredibly valuable. Versus being in the method of some class that has a bunch of fields, you trying to figure out how you got there or how to get back there in order to test it.

I think functional programming is essential for concurrency. How many people have read "Java Concurrency in Practice"? A fantastic book, absolutely fantastic. How many times as he mentioned immutable in that book? Tons! The problem is it's hard to take that advice in Java because there are no immutable classes and there are no persistent immutable classes like I'll describe. So it's hard advice to follow. He's not advocating functional programming but his advice about immutability works for functional programming. If your data is immutable you don't have concurrency issues. They can't exist because you're not changing something that's being shared.

There are other benefits to functional programming that, however, don't accrue to Clojure. Because Clojure is not purely functional, because you can't prove something about Clojure, you can't prove it never calls Java. Some of the things you can do with Haskell you can't do with Clojure.

On JVM, there's a couple of functional language choices but not very many. CAL would be one that's going to give you the Haskell like experience. I don't know too much about it except it's functional and on the JVM. Scala I think gets a lot of talk in this area but I'm not sure their immutability story is consistent enough to deliver here. I'll go easy because I don't know.

Clojure, however, is a functional language. All those data structures I showed you are immutable and persistent.

[2-0:20:30] All the data structures in Clojure are persistent, they have these characteristics that they maintain their performance characteristics across quote "modifications" and they have some interesting implementations which I don't have time to talk about. If you wanted to look up how I did it, you could look up "array mapped hash tries" by Bagwell. And you can see the implementation underneath.

[2-0:30:55] These were hard data structures to write. These took me years of research and work. But the performance is good and the benefits are unbelievable. Being able to just freely give somebody something and they can use it in any thread they want and nothing bad could ever happen. And they could make incremental changes for minimal cost. This just puts you in a completely different world in terms of the way you can look at designing systems.

I think even if you set concurrency aside, using those kinds of data structures and taking a functional approach to writing your programs is going to give you much much better programs. Much more reliable, much easier to test and understand and maintain. But when you put concurrency in the loop there is no longer any contest. Nothing compares to using this kind of a strategy in designing your program.

[2-0:33:00] It is my opinion that object-oriented programming as delivered by Java etc is not a good default way to structure your program. Believe me. I'm not sitting on the outside saying that. I was one of the first people who programmed in C++ and I've worked in that language for lots of years and was expert in it, done tons of stuff in C# and Java and I have had it. It is not right. And there are many reasons why.

One is: it is spaghetti code. Encapsulation does not change that. Encapsulation just means I'm in charge of the spaghetti code. It does not change it from being spaghetti code, which is: all the side effects, the inability to look at a function and understand what it means, or to look at a piece of data and understand how it got there, it's hard to understand, it's hard to test. All of these testing frameworks, is that about an inherent problem of programming? Or is it about a problem of the programming languages? I think to a large extent it's the latter. All these mock objects, all these things you need just to get back into the same place so you could try to execute a test. It is all built around the fact that these languages are not really giving you a good default.

Object-oriented programming was born in simulation. You know it's pretty good for that. Then it was used by framework designers, who had to provide interfaces to staple things like the disk or the screen or sockets. Well guess what, object-oriented programming is pretty good for that too because there is actually really state that corresponds to these objects. So they wrote these nice frameworks. Then they gave you a language that lets you do that screens and sockets.

But now: what does every application programmer do? They don't have to abstract the screen, that's in the library. They don't have to do the disk or the sockets. What are they doing? Information! Well guess what. That isn't a good object at all. A person class or an account class, that's a ridiculous thing! You can't change an account anymore than you can change the day of the week. Tomorrow, that's another day. It's a different day, it's not today's date CHANGED with an additional day.

The whole Java language implies: here's your class, here are your fields. And, to make things worse, by default they are all final. You're set up to do the wrong thing, so it's hard to test, understand and reason about. From a concurrency standpoint, it's a complete catastrophe. It's a disaster. It's unworkable. Eventually you will die with locks. You'll either die trying to make them work, trying to understand them or just (from the stress) it's not going to work.

So as a default architecture for a program, I think OO is not very good. But: doing the right thing, taking the advice of "gets" and making the stuff immutable, it's really hard because it's not idiomatic in Java. Everything in the language is telling you to do something else.

[2-0:36:40] I agree there is a need in real programs to have things appear to change. Absolutely. In that scenario, I think Clojure disagrees with Haskell, where they're trying to say well you know we really don't want to change that thing. And you know, if your program is fundamentally a calculation, I think you can get away with that. But most programs I've written are not calculations. I've written broadcast automation systems that run 24 hours a day and there's all kinds of state and all kinds of things that have to appear to have state. But there's a difference between appearing to have state and having state.

[2-0:37:20] In traditional object-oriented languages, you have references to objects and those objects can change. You have a direct reference to a mutable thing. As soon as somebody else can have that same kind of a reference, they could be changing it. And the only way is to stop the world from touching that thing while you either touch it yourself or read it yourself. There's no other way.

[2-0:39:20] The other model, Clojure's model, the one that makes it appear that things are changing in your program, is that you have indirect references to immutable data structures that are persistent. And you have concurrency semantics for those references. In other words you can say: the only thing I'll let you change is the reference held in this box. The box is going to point to something that can't change and you can change this box only by atomically making it point to something else that can't change. [note: read atomically, like in hydrogen atom, not to be confused with automatically].

[2-0:40:30] The Clojure way is indirect references to immutable data. So we have this box, it has the reference to some data of a person. The thing of a person, that's a mutable persistent data structure, ain't never going to change. So now let's say, I'm the user, I need to read it. I can look in this box, I get a reference to it. Am I worrying? No!  Cannot change. There's never an inconsistent object.

So how do we fake change? We know it's a persistent data structure. I am trying to do an edit, I am making a new version using the structural sharing feature of persistent data structures. Everybody that's looking at that box is still seeing the old thing. Then atomically we update. Which means we change the box from referring to the old thing to referring to the new thing. And if that atomic change of the inside of the box is controlled with concurrency semantics, you're done.

[2-0:40:30] Clojure, I think, is a pretty nice Java library too. All the data structures are written in Java, the atomic update is in Java. You can use it all. I mean when I was building it, I had to test it, and before I had Clojure the language I had Clojure the library.

## Personal Note
The talk seems to be from 2008. The year 2025 is different. For example the popular JVM language [Kotlin](https://kotlinlang.org) appeared. Concurrency did not turn out to be the big thing. There is popular [Go](https://go.dev).

But here I want to specifically mention two points that make the talk hard to replicate: 1) the authentic voice of the language-creator and 2) his deep knowledge of both Java and Lisp.

In other words: the proposition here is that no one else but Rich Hickey can give such a talk. Which means it cannot serve as a blueprint to present Clojure to Java programmers. Let me expand on this.

There is this creator's verve in the presentation that, if replicated by a mere Clojure user, would sound ridiculous. There is a difference between just saying "I am using Clojure because the Repl is so intimate" or on the other hand saying "I CREATED Clojure because ...".  The former leads to think (depending on the particular Java audience) "well, good for you, everyone has his fetish", while the latter one provokes a "wow, the Repl thing must really be something".

A creator is at an advantage to spread enthusiasm. I do agree with Eric Normand ([Defn podcast 00:35:40](https://zencastr.com/z/t7QDS4kE)) that Elixir's adoption is helped by its creator who "talks at every single conference. He talks at the American one, he talks at the European one. He's just always talking about something. It's not [necessary to give] one of these Rich Hickey talks that's gonna stand the test of time".

This brings in the second point. Only a Java guru can testify that Java is broken. "One of the nice things about Clojure is to let you fix Java", "This is a better way to write Java".

Also in the talk, there is a caveat on Clojure. "So I think if you're just interested in dynamic and want to continue to write programs that are like your Java programs, Groovy can't be touched". An endorsement of Groovy over Clojure adds to credibility, but only when combined with the necessary personal stature.

So: is the talk inspiring, a must see, a classic? Yes, watch it, watch it again, watch it a third time. But can anyone else do it? I don't think so. Certainly not everyone.

"Clojure is about realizing what's wrong with your Java programs and doing something different". This can easily be read as "Clojure is about what's wrong with you" and I think hardly anyone else can have the audacity to talk like that to seasoned Java programmers. At least such a statement needs a lot of tongue-in-cheek, the old post-modern method of irony which also needs great skill to be authentically delivered.

Now [Rich Hickey says in 2024](https://www.youtube.com/watch?v=Earx_BjvgO0&t=260s) that Clojure enthusiasts should go out there and talk in person to Java groups. Well, enthusiasm alone will not do. I think that giving enthusiastic AND good, fruitful talks is not so simple when you are just a Clojure user and not a language expert.

Certainly not everyone can give this talk, but everyone can hear Rich Hickeys personal suffering of year long Java usage. The style reminds me of our national writer, Bernhard, who understood Austria so well that his suffering led to the creation of virtually a new language. Maybe there is a reason why Clojure is popular in Europe.

After watching the talk, my take away messages are the following:
* Explain Macros with interop as the concrete use case
* Explain side-effect-free functions with concurrency as the concrete use case
* Introduce persistent data structures as a means to write those pure functions

And: I only testify to things I really know well enough to defend publicly and hope that other people will cover the rest in a competent way.
