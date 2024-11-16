---
layout: post
title:  "genlisroot"
date:   2024-11-16 06:00:01 +0100
categories: Software
---
## Journal on writing a scientific paper
I wrote a scientific paper about [Clojure](https://www.clojure.org), the functional programming language ([arXiv](https://arxiv.org/abs/2312.13295), [github](https://github.com/kloimhardt/LisRoot)). It has never been published in a peer reviewed journal. Although I am not its sole author, I refer to "my paper" throughout, because this is a personal report.

### Why the paper
I wrote the paper because I wanted to raise awareness for Clojure at [CERN](https://home.cern), the particle accelerator facility. I saw an opportunity because the upcoming [jank](https://jank-lang.org), a Clojure-C++ compiler, was using CERN's own C++ interpreter.

As jank's author, Jeaye Wilkerson, was all on his own in heavy [discussion with CERN](https://github.com/kloimhardt/LisRoot/blob/main/paper/lisroot/jank_talk_transcript.md), I thought, well, academics need a paper to justify their work and was hoping to perhaps plant a seed for a masters thesis. After all, in the US there is the [IRIS-HEP](https://iris-hep.org) initiative, which is funded to innovate data processing in high energy physics. So, having worked at CERN in the [90's](https://cds.cern.ch/record/687164), I wrote a paper about the then more feature complete [Clojure-Ferret](https://ferret-lang.org) compiler, which I eventually presented in December '23 in [CERN's Root forum](https://root-forum.cern.ch/t/developed-a-prototype-to-access-root-from-lisp/57633).

At that time, I considered Ferret a close predecessor of jank. This assumption turned out to be wrong because by abandoning CERN's C++ interpreter, [jank moved to LLVM IR in October '24](https://jank-lang.org/blog/2024-10-14-llvm-ir/).

### Trying to publish the paper
In the August before the forum post, I sent the paper manuscript to the journal [Computing in Science and Engineering](https://www.computer.org/csdl/magazines/cs). I had to idly wait for three weeks, but the editors summarised my paper quite accurately:

> The manuscript provides a detailed description of the work you performed to develop a functional programing interface to C++ library.

But, whereas my intention was to show off Lisp syntax (and Macros only as the special example case), to the outside reader, the paper has two distinct topics: A) Clojure's functional syntax is better than Python's, B) C++ interop can be easily done with Macros.

The response for topic A) was:

> The premise that functional code is more accessible to scientist is a good starting point. However, the paper should better emphasize this point and it should include and discuss more references to support this point.

So in a paper praising Clojure, they wanted more citations of papers praising Lisp. I am not a computer scientist, so I cannot provide that in a sincere way. I also cannot praise the functional style more than I already did.

According to topic B), i.e. C++ interop, they asked back two questions, the first being:

>  It is not clear from the current version of the paper, whether this work can be used to generate a functional interface for any arbitrary C++ library. Is the proposal here that C++ library developers will use this capability to provide functional interfaces to their users?

The answer to this question is: yes, indeed Clojure Macros are a great tool for any C++ author to provide interop to his library. But I struggle to highlight this more, not least because the paper was intended about Lisp syntax in general, not only Macros.

The second question on interop was:

> Or, if you have the capability of automating the process of creating functional interfaces, then make sure to present and discuss how it is done for different libraries.

And again, yes, in my (admittedly "ambitious") outlook section of the paper, I propose to generate C++ interop layers in an automated way. However, automation would be a research project entirely on it own, indeed it seems to be the holy grail of C++ ecosystems.

Aside: while automation is out of my scope, I think the key is to provide a "datafied version of the library API", as also advocated by [clong](https://github.com/phronmophobic/clong). If the world could agree on a standard how to "datafy" a C++ header, this would be a huge step.

All in all, I figured that nobody seemed to be interested in the specific topic of "Clojure syntax is great" (my main topic), but in automation in general (regardless of the syntax used).

### Choosing a journal
I am not a computer scientist, so I did not know which journals exist in this field. I just scouted the internet. For example, in the [Journal of Open Source Software](https://joss.theoj.org/about) submission requirements, it says: "no thin API clients". So they would not accept my paper which describes a Clojure wrapper for a specific C++ library. But maybe there is a journal out there which accepts my paper. Who knows.

What I learned is that a paper is not only written for an audience but also for editors. It is good to know people in the field having experience in publishing in a targeted journal, thus knowing for example how ambitious an "outlook" section should be written. It safes time and energy for all people involved.

### YAMLScript
In writing my paper, in which I wanted (and failed) to show the merits of Lisp syntax, I found out that infix within mathematical formulas is a hard sell. Infix, at least for simple cases, is not essential, but explaining this fact takes up space that should be used to solve the problem at hand. I was not happy, I wanted to explain the notion of "code as data", not explaining away infix.

In looking for a way to write a simpler paper, I discovered the newly proposed language [YAMLScript](https://yamlscript.org). It looks like Python but compiles to Clojure. Being dynamic like Clojure, YAMLScript opens the JVM to science.

To me it seems ideal to program in Clojure, but when citing code snippets in papers, it is better to show YAMLScript. This is because it is more readable for the average scientist and needs no explaining away of infix syntax.

### Aftermath

My motivation for the paper was the enthusiasm to magically spark a series of other Clojure papers, written by people of the [FIROS-HEP](https://fairos-hep.org) community, standing for "findable, accessible, interoperable, reusable open science in high energy physics".

I since came to think that one needs to secure funding, target a specific journal and write one's own series of papers.

While being on arXiv, the paper has not been cited anywhere. Note that, however, one cannot publish on arXiv without affiliation (thank you, my star-dust sprinkling co-author).

Concerning the forum post, I got some attention (500+ clicks), but no direct feedback was given.

jank became part of the [SciCloj mentoring program](https://scicloj.github.io/docs/community/groups/open-source-mentoring/), so by now Jeaye is firmly embedded in the Clojure community.

Ferret continues to be a great Clojure-to-C++ compiler.

The author of YAMLScript mentioned my paper in a [PERL conference talk](https://www.youtube.com/watch?v=RFIukRdFe1o&t=2303s) but I did not find the steam for a rewrite.

In discussions on [SciCloj Zulip chat](https://scicloj.github.io/docs/community/contact/), a [Clojure paper about biology](https://academic.oup.com/bioinformatics/article/30/17/2537/2748169?login=false) from 2014 came up. Here I see a problem with citations in English language (the currency in academia). According to Google scholar, the paper is cited 5 times (2015 x1, 2016 x2, 2018 x2). It is never cited by the original authors. So, no matter what the paper says about how great Clojure is, this lack of self-citation means one thing: according to the publicly available data, it seems that Clojure has been abandoned by the very people who know it best. Whenever you write a  paper about Clojure, make sure to keep citing it.

In closing, I'd like to mention that FAIROS-HEP is purely US based and (most importantly) funded. Europe, hosting the accelerator in Geneva, plays no part whatsoever in this important initiative. I think we Europeans, if not the world, need some "findable, accessible, interoperable" counterweight to Silicon Valley and European based CERN is one readily available opportunity in that endeavour.

### Conclusions
* Know which journals you have in mind when writing a paper
* Know people who already published in those journals
* In academia, be prepared for slow feedback cycles in the order of weeks
* Make sure that only one single topic can be read into a paper
* Use Clojure on the JVM but hide its Lisp syntax
* Write a series of papers
* Make sure to cite your own papers
