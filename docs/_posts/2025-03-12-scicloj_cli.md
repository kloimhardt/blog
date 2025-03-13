---
layout: post
title:  "The SciCloj CLI and the return of the REPL-prompt"
date:   3025-03-12 06:00:01 +0100
categories: Software
---

by Markus Agwin Kloimwieder

## Make SciCloj independent of any IDE
All software developers use integrated IDEs, and that day to day. Scientists, on the other hand are not software developers, they are spaghetti-coders. They spend weeks in their labs gathering data. After they reappear from the basement, their brains are completely reset. Muscle memory from day to day usage of an IDE? Nada. Remembering keystrokes? Nope.

Seasoned Clojure developers will not give the IDE away. Quote:

> My take on this is that tooling is much more important on Clojure (and Lisps in general) than say on Python, specially because of interactive programming and s-expressions which is a big part of its super power. So I would be careful when removing tooling to appeal to beginners in the same way I wouldn't write imperative code in Clojure so it is easier for Python data scientists to get.

So should the Clojure Community provide tooling, provide IDEs for scientists? By all means. And the community already does via Slack channels and youtube videos. The problem really is that scientists are not in those channels, nor do they have the time to be there. They are certainly not the chat guys. They need a written user's guide to follow, and nothing else (please).

So should SciCloj provide more videos and manuals for IDE usage? My answer is: certainly not.
The reason is: time. It takes a lot of effort to produce videos and manuals. Time spent on presenting IDEs is not well spent, because scientists do not want to spend the time to learn an IDE anyway. It does not improve their self-efficacy enough. This is why Python is so successful, it does not need an IDE.

So my suggestion is to accept that Clojure has a disadvantage over Python in that Python is easy to use in Notepad++. But instead of trying to coerce scientists into IDEs, I will henceforth suggest to use the Figwheel way pioneered by Clojure. In other words: present SciCloj and Noj using live-reolad via the CLI, and write code in Notepad++. This argument is abominable to Clojurians and therefore needs explanation and most of all the presentation of a counterweight to that deliberately accepted no-IDE disadvantage over Python in science.

## SciCloj caters for smart beginners
Despite dispensing IDEs, our message still is: Clojure is the best and most natural language for science and to this aim, the SciCloj community provides Noj as a  framework for data science in Clojure.

The target audience for Noj are scientists. That means we deal with people who are beginners with Clojure. But as much as any software developer, scientists are highly trained in logical thinking. Beginners, yes, rookies, no. This makes scientists a special bunch to cater for.

Scientist will eventually understand that Clojure is best. Because in their role as logicians they will appreciate that Clojure is a functional language. In Clojure, programs have minimum side-effects. As opposed to imperative languages, Clojure programs are like mathematical formulas. That Clojure is mathy is the first counterweight to Python and the main reason to use Clojure in science.

In communicating this, it is important to realize that not every Lisp is functional, i.e. S-expression does not necessarily mean "functional". It is important to have that in mind when communicating but it is not helpful for SciCloj to argue and dwell on the topic "functional not necessarily S-expressions". The message must be: "Clojure is a functional language on the JVM".

## Make SciCloj visible among Clojurians
Most Clojurians are software developers, working on REST, say. To the typical Clojurian, what SciCloj does is alien. Let's face it, to them we are boffins. As things stand at 2025, because we are aliens, we are not visible within the Clojure community. The goal is to become visible.

My purpose is to draw attention to the idea that when we cater for Python scientists, SciCloj will become more visible within the Clojure community.  The argument is that id we can draw more users to Clojure, Clojurians will notice. If there are biologists who give biology talks using Clojure, the community will notice.

There is also another view, and that I am opposed to: Let's evangelise Lisp, preach S-expressions to scientists. The reason I am opposed to this approach is that with such a  Lispy talk, SciCloj would not add any value. Lots of Lisp people, software developers, already talk about the superiority of S-expressions. They do a great job, SciCloj cannot add anything here but reference those great Lisp figures. And it is not a good strategy to talk about the greatness of Lisp when wanting to become visible among Lispers.

My proposal for becoming visible is to become good at hammering through one message: "Clojure is a functional language on the JVM".

This serves two aims: The first aim is  indeed to become visible among Pythonists through this message. And next to the already mentioned functional argument, the JVM is central. Fact is that the Java machine is stronger than the Python VM, the JVM is meant for science, the JVM is the second counterweight to Python.

While all attempts to impress Pythonists with the JVM will become noticed, Clojurians will become even more interested when we show that, in order to deliver the message "Clojure is functional on the JVM", the most perfect Clojure use-case is indeed the SciCloj use-case. So the second aim, next to impress Pythonists, is to show to Clojurians how to use SciCloj. Not as a way to do science but as a way to isolate and present with simple examples the functional part of Clojure.

And here I humbly put forward that dispensing with the IDE and using Notepad++ can be turned into an advantage. Notepad++ isolates the functional part of Clojure.

## The two ways of Clojure
Noj makes Notepad++ viable because it supports a live reload feature via the CLI. Here, it needs to be clearly recognised that the live-reload feature of Noj/Clay is in full Clojure tradition, i.e. that of Figwheel/shadow-cljs. Not only does this need to be recognised by the SciCloj community, it needs to be communicated when presenting the functional parts of Clojure. This is not to alienate the people who rightly say that giving up the IDE puts Clojure into a disadvantage. Yes, it does, but it also highlights a Clojure tradition.

What is this tradition? It is that Bruce Hauman, the inventor of Figwheel, started to put the file as the primitive notion of Clojure-coding. This is opposed to the usual way of Clojure which puts not the "file" but the "namespace" front and center. But Bruce says: "When we have a workflow where our files are being watched ... as we work on them, we have an opportunity to detect syntax/compile errors earlier".

So switching to a file perspective is not only a makeshift, because next to serving as a method to highlight the functional part, it also has the potential of tackling the problem of error messages in Clojure. While this is a long lasting topic with Clojurians, and even more important for Pythonists, this long lasting and potentially highly fruitful place for SciCloj is not the topic of this post.

Within this file-tradition, the REPL turns into the background.  [Thomas Heller](https://code.thheller.com/blog/shadow-cljs/2024/10/18/fullstack-cljs-workflow-with-shadow-cljs.html): "I personally only switch to the CLJS REPL occasionally, since most of the time hot-reload is enough." [Bruce Hauman](https://figwheel.org/docs/hot_reloading.html) was keen not to "take your focus out of the file you are editing."

As opposed to that file-tradition, the first Clojure tradition is to navigate namespaces with the REPL. The file turns into the background - with the REPL, what is on disk in not what is in memory. While Clay was designed with the REPL in mind from the beginning, my argument also says that SciCloj should in a first step put the file front and center.

## What is on disc is in memory
With the Figwheel approach, one can make sure that what it on disc is always what is in memory. I know that in Clojure this disc=memory equation never holds exactly, but with "tools.namespace" and libraries like "cljs-reload" this memory=disc can be achieved for all practical purposes.

In communication from SciCloj to the wider Clojure community, this requirement memory=disc can be labeled as the Figwheel-reloaded approach. To Python people it does not need a name, memory=disc is the normal situation. This is the reason we provide the Noj-CLI with live-reload as default.

Now some Clojurians will say: "I would never work like this". Other Clojurians can relate to this, because they use IntelliJ with the "sync the file" feature. In any case, all Clojurians will agree, that Figwheel-reload is a tradition within Clojure, whether a particular person lives within this tradition or not.

"But you are giving away the superpower of Lisp!", I hear. My answer is: The role of SciCloj cannot be to evangelise S-expressions. SciCloj should never speak of "Superpower" because amongst scientists, anyone who speaks of magic will meet condemnation. Rather it is the role of SciCloj is to hammer through  the fact that Clojure is a functional language on the JVM, if that argument does not convince some scientist, no other will.

## Outtakes
I think with the decisions made in this thread, ScCloj made sure that Clay connects both Clojure traditions 1) Repl-namespace and 2) reload-file within one new symbol ,,. I think it is very important for SciClojurians to have clearly in mind that Clay is not some "boffin idea" but reflects the roots of Clojure.
