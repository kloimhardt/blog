---
layout: post
title:  "Competence before Comprehension (3)"
date:   2023-03-24 06:00:01 +0100
categories: Literatur
---

# Introduction

My background is physics, I did particle physics when I was a student. That was mostly computational physics. I developed in C++ but in the end translated all my programs to Fortran 77. Then I got a job in banking, where I worked as a quant. That is mostly making software calculate correctly. After that I did trading for 10 years. So I was using the models myself. Lately I worked on a few freelance Clojure gigs at startups.

I gave a presentation at re-clojure 2021 about graphical programming. The keynote speaker at that re-Clojure was Gerarld Sussman. I am particularly obessed with his book about Classical Mechanics. Because as said, originally I studies Physics.

The presentation at re-clojure was about presenting this Mechanis book as graphical blocks. And I will show that afterwards. And go from there.

# Cljtiles

Most of presentation in visual tools group are tools for Clojure developers. Calva Notebook and Portal, Clerk.
General purpose for data science of any kind.

My goal is specifically working through SICM for Matlab/Python users. For Clojure users it is a piece of cake to use immediately. It is harder to make Scheme accessible to MAtlab useres than to Clojure users.

As said before, I present the SICM book as graphical blocks. The idea is that you can work with the book. To do something with it without understanding it at first. Let me show you what I mean.

[Competence before Comprehension (2)](https://kloimhardt.github.io/blog/literatur/2023/03/16/competence-comprehesion-2.html)

# Blogging about SICM

Now after solving a few puzzles, one wants to run the examples.

I wanted them to run fully online. Run without any platform. Run them as they are in the SICM book, that is not in Clojure but in MIT Scheme.

The big takeaway message is that I am not using Clojure for this. I am using nothing of the Clojure stack. I am using a compiled ClojureScript namespace as a JavaScript library.

The library is Sicmutils, which was started by Colin Smith and substantially extended by Sam Richie.

That is because the examples of the SICM book are in MIT Scheme. They have noting to do with Clojure.

MIT Scheme does not work in the browser. Out of the box at least. So I wrote a small Scheme syntax to JavaScript compiler. And got the first part of the SICM book to run on-line.

[Executable part 1](http://kloimhardt.github.io/blog/html/sicmutils-as-js-book-part1.html)

* over 100 examples
* Scheme syntax compiler 160 loc
* html file is written manually, not generated
* can load html-file locally (is very copy paste friendly)
* can compare to code in the book
* can see that is executes

As far as I know, this is the first time we have the Scheme code exectured on-line.

This is possible, because we have the Sicmutils library, which is written Clojure. They are cljc files, so they run on both hosts, Java and JavaScript. And using only simple optimization, every ClojureScript namespace is a Javascript library. I developed the compiler in the form of a few blog posts to show this.

The other componen is Klipse. It is a polyglot blogging tool. One can include code in a blog post. It supports many languages like Python or C++ or Ruby. I hooked in my own Scheme compiler.

The whole idea of this html file is for people who read the SICM book and want to execute the examples as they are. And the examples of the book are written in Scheme. I think it is already very hard to understand the new notation of the SICM book. And introducing Clojure on top is a complication. And it is not necessary in the first step.

It is just one single html file. This means that there is no Repl connection. For Clojure pros, this might be a no go. But for people just starting, I think it is an advantage to use Klipse instead of a full Repl. I am thinking of Matlab users.

Moreover, it means it is just html. There is no platform involved, like Roam for example. Also no local installation is involved. You do not need Emacs. Which is very important for Matlab users. But you can edit the html file locally and add stuff.

# Specialities

* blank to start calculation
* Compiler lives in html, so its source code is inlcuded as an IFrame.
[Blog No7](https://kloimhardt.github.io/blog/software/2023/03/01/sicmutils-as-js-7.html)
* Part1 covered as html, blog, org
* Started with part3 (source, blog, cljtiles)
* develop the tools as I write about SICM

## Location in the Ecosystem
Calva-Notebooks: edit a clj file in Calva and execute locally and display within Calva
Klipse: edit a html-file in any editor, execute and display and modify in the browser
