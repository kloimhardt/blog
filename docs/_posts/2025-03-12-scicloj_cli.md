---
layout: post
title:  "The SciCloj CLI and the return of the REPL-prompt"
date:   2025-03-12 06:00:01 +0100
categories: Software
---

An opinionated approach to SciCloj by Markus Agwin Kloimwieder ([source](https://github.com/kloimhardt/blog/blob/main/docs/_posts/2025-03-12-scicloj_cli.md))

## SciCloj caters for a subset of beginners
One possible message of SciCloj is: "Clojure is the best and most natural language for science and to this aim, the SciCloj community provides Noj as a  framework for data science in Clojure."

The target audience for Noj are scientists. That means we deal with people who are beginners with Clojure. But as much as any software developer, scientists are highly trained in logical thinking. Beginners, yes, rookies, no. This makes scientists a special bunch to cater for.

Scientist will eventually understand that Clojure is best. Because in their role as logicians they will appreciate that Clojure is a functional language. In Clojure, programs have minimum side-effects. As opposed to imperative languages, Clojure programs are like mathematical formulas. That Clojure is mathy poses the main reason to use Clojure in science.

## Make SciCloj visible among Clojurians
Most Clojurians are software developers, working on REST, say. To the typical Clojurian, what SciCloj does is alien. As things stand in 2025, because we are aliens, we are not exactly invisible but also not seen in the best possible light within the Clojure community. My goal here is to make SciCloj visible in a new light.

I'd like to draw attention to the idea that in order to become more visible within the Clojure community, SciCloj needs to cater for Python scientists. The argument here is that if we can draw more users to Clojure, Clojurians will notice. If there are biologists who give biology talks using Clojure, the community will notice.

There is also another view, and that I am opposed to: Let's evangelise Lisp, preach S-expressions to scientists. The reason I am opposed to this approach is that in employing such a lispy talk, SciCloj would not add any value. Lots of Lisp people, software developers, already talk about the superiority of S-expressions. They do a great job, SciCloj cannot add anything here but reference those great Lisp figures. And it is not a good strategy to talk about the greatness of Lisp when wanting to become visible among Lispers. They know that already.

My proposal for becoming visible is to become good at one thing: hammering through the message: "Clojure is a functional language on the JVM". Please notice that the JVM is central. Fact is that the Java machine is stronger than the Python VM, the JVM is meant for science. While this JVM argument is very important, it is so simple that I cannot say anything more than repeat that the JVM is central to SciCloj.

Over time, Clojurians will realise that for delivering the message "Clojure is functional", SciCloj is the perfect use-case. We need to show to Clojurians how to use SciCloj not to do science but as the way to isolate and present the functional part of Clojure.

And here I humbly put forward that, in order to present Noj, we should dispense with the IDE. That is because the IDE's bells and whistles draw attention away from the simplicity of the Clojure syntax. The IDE does not serve the message of SciCloj, which is: "Clojure is functional". The argument is that when talking to beginners, an unknown IDE draws away attention form the functional design of Clojure.

Taking this proposal to its end means to present Noj with Notepad++. This no-IDE approach is abominable to Clojurians. The following thoughts try to put further weight behind Notepad++, not for general Clojure developers, but only for the narrow field of presenting "science without Python", for presenting SciCloj.

## SciCloj without the IDE
All software developers use integrated IDEs, and that day to day. Scientists, on the other hand are not software developers, they are spaghetti-coders. They spend weeks in their labs gathering data. After they reappear from the basement, their brains are completely reset. Muscle memory from day to day usage of an IDE? Nada. Remembering keystrokes? Nope.

Seasoned Clojure developers will not give the IDE away. Quote:

> My take on this is that tooling is much more important on Clojure (and Lisps in general) than say on Python, specially because of interactive programming and s-expressions which is a big part of its super power. So I would be careful when removing tooling to appeal to beginners in the same way I wouldn't write imperative code in Clojure so it is easier for Python data scientists to get.

So should the Clojure Community provide tooling, provide IDEs for scientists? By all means. And the community already does via Slack channels and youtube videos. The problem really is that scientists are not in those channels, nor do they have the time to be there. They are certainly not the chat guys. They need a written user's guide to follow, and nothing else (please).

So should SciCloj provide more videos and manuals for IDE usage? My answer is: certainly not.
The reason is: time. While it is easy to refer to existing content of the wider community, it takes a lot of effort to produce new videos and manuals. Time spent on presenting IDEs is not well spent, because scientists do not want to spend the time to learn an IDE anyway. It does not improve their self-efficacy enough. This is why Python is so successful, it does not need an IDE.

So my suggestion is to accept that Clojure has a disadvantage over Python in that Python is easy to use in Notepad++. But instead of trying to coerce scientists into the IDEs of general software engineering, I suggest to choose the Figwheel way described below for conveying the single one argument that I think holds currency for scientists: "Clojure is mathy, Clojure is functional".

## The two ways of Clojure
That Notepad++ is viable for Noj at all is because Noj/Clay supports a live reload feature via the CLI. Here, it needs to be clearly recognised that the live-reload feature of Noj/Clay is in full Clojure tradition, i.e. that of Figwheel/shadow-cljs.

What is this tradition? It is that Bruce Hauman, the inventor of Figwheel, started to put the file as the primitive notion of Clojure-coding. This is opposed to the usual way of Clojure, which puts not the "file" but the "namespace" front and center. But Bruce says: "When we have a workflow where our files are being watched ... as we work on them, we have an opportunity to detect syntax/compile errors earlier".

So switching to a file perspective is not only a makeshift. Next to putting the spotlight on Clojure's simplicity, it also has the potential of tackling the problem of error messages. This old Clojure topic will certainly become more pronounced for Pythonists and is a highly fruitful place for SciCloj to tackle. More on that further below.

As opposed to that file-tradition, the original Clojure tradition has been to navigate namespaces with the REPL. The file turns into the background - with the REPL, what is on disk in not what is in memory. While, from the beginning on, Clay was designed with the REPL in mind, my argument is that SciCloj should put the file front and center.

Within this file-tradition, the REPL turns into the background.  [Thomas Heller](https://code.thheller.com/blog/shadow-cljs/2024/10/18/fullstack-cljs-workflow-with-shadow-cljs.html): "I personally only switch to the CLJS REPL occasionally, since most of the time hot-reload is enough." [Bruce Hauman](https://figwheel.org/docs/hot_reloading.html) was keen not to "take your focus out of the file you are editing."

## What is on disk is in memory
Although not being the standard in Clojure, with libraries like `cljs-reload`, one can always make sure that what it on disk is what is in memory. In communication to the wider Clojure community, this requirement memory=disk can be labeled the "Figwheel-reload" approach. In talking to Python people, it does not need a name, memory=disk is the normal situation.

Now some Clojurians will say: "I would never work like this". Other Clojurians on the other hand would not say that in this strong form, because they use IntelliJ with the "sync the file" feature. In any case, all Clojurians will agree that Figwheel-reload has a certain tradition within Clojure, whether a particular person lives within this tradition or not.

"But you are giving away the superpower of Lisp!", I hear. My answer is: The role of SciCloj cannot be to evangelise the REPL because this is done enough by other great Lisp figures. Moreover, SciCloj should never speak of "superpower" because amongst scientists anyone who speaks of magic will meet condemnation. Rather, while not every Lisp is functional, the role of SciCloj is to hammer through  the fact that "Clojure is functional".

## Error Messages
Improving the error messages of Clojure is a prominent topic in every user survey. I am not sure how serious the survey participants are when they chip in this topic. Because when discussed in chats and forums, this topic is riddled with ambiguity.

On the one hand there are voices who say "I want the whole stacktrace as it is" (probably being happy with their IDE middleware formatting those stacktraces). On the other hand there is the opinion "you do not need error messages", because learning REPL driven development meant starting to think in a kind of Sherlock Holmes way which would supposedly be impaired by focusing on error messages.

In one sense or another, there have been attempts to improve error messages. Figwheel, with its focus on the file, was pioneering the "heads up" display. Another interesting project is "Babel" form Uni Minnesota, because it connects this "error message" topic back to academia, fitting SciCloj perfectly. Also "maria.cloud" has its innovative approach and there is "virhe" by Metosin.

No effort has gained wider traction. This opens a possible role for SciCloj, a role that has been hinted at in the most recent [Clj-together survey](https://www.clojuriststogether.org/news/call-for-proposals.-feb.-2025-member-survey/): "consensus as to how to create “quickstart” applications for various usecases ... Otherwise, we risk fragmenting the efforts ... more usable error messages".

With its narrow use-case and a file-based Figwheel-reload approach, SciCloj could tailor customize linters like clj-kondo. This linting will mellow the problem of unbalanced parentheses. It will not go away and will always be a problem for beginners and a disadvantage over Python. Within SciCloj, I argue this to accept and trust that users will eventually master slurping and barfing within an IDE later on.

Clay's browser window offers lots of space for additional linting information, e.g. statically inferred types. Also a sophisticated debugger like Flowstorm could be part of the Clay experience.

## Printline debgging
Despite all sorts of sophisticated debugging tools, the hallmark of the file-based approach is printline debugging. For this, S-expressions are cumbersome. But Clojure since long has a solution: reader conditionals. I call this the "double-comma" solution to printline debugging. Bypassing S-expressions for printline debugging with the double-comma approach is a great idea.

Sometimes "slow calculations" are held against executing whole files. I think the chances of creating something slow are greatly overestimated and one can always store away pre-calculated data. Also, science already has its own more sophisticated solution for this problem: Jupyter notebooks. And SciCloj provides a Jupyter kernel.

At this point, I'd like to warn against a certain kind of REPL-ish concept that must never be introduced within Clay and the Figwheel-reload approach.

This is the concept of earmarking some part of the code as "special", so that only this part of the code is evaluated when the full source file is read and processed. I call this the "triple-comma fallacy", which is a monstrosity.

That monstrosity is outright harmful to SciCloj. Because any teacher coming from Python, maybe even a professor, sees this approach in some obscure video and finds it valuable. And then, as any user of the proper REPL method knows, he will make a complete mess. And then he remembers that he likes Python better anyway and demonstrates this monstrosity as an argument against Clojure. And then the wider Clojure community will rightly shake their heads and say: "we condemn those SciCloj boffins, we never understood those aliens and their crazy ideas anyway". SciCloj must stick to Clojure tradition to become visible within the Clojure community.

## The REPL prompt
In order to introduce the REPL concept (after having presented Noj using the Figwheel-reload approach), it is best to show Noj in a Jupyter notebook. That means to dispense with Clay for introducing the REPL. This might be a tough step but it serves the purpose of using an already established tradition for introducing the notion of the REPL.

Nonetheless, a Lisper will never leave the podium without having presented his own concept of the REPL. And there, the urge is to show his cherished workflow based on his preferred IDE connected to the REPL. He wants to show his superpower. This is a good thing.

I argue that SciCloj's core task is to refer to already existing videos and blogs of the wider Clojure community. Also, encourage the wider Clojure community to watch Clay videos. Of course within the Clay window we have nicely formatted, code-highlighted, colour and all, line numbers, indentation, linted code with wiggled underlining, light- and dark-mode (because we can), FiraCode font (look at that thread-first!), fifty shades of grey. Never would we expect Clojurians to look into the bleak window of a plain editor, instead our Perseus shield of Clay will prevent him from turning into stone. In this way, the existing Clay examples themselves will become little stones in the powers users' mosaic of videos that flash out their IDEs and Clojure's superpowers. SciCloj should leave that open space, generously leave the fun to acquaintances from the wider Clojure community.

That said, SciCloj best uses the REPL in its plain form: the prompt. It has been neglected up to now. The prompt is well known to Python users and has nothing to do with an IDE.

The REPL is awesome and awful both at the same time. This is because when using the REPL, what is on disk is not what is in memory. The equation "disk=memory", the cornerstone of the Figwheel-reload approach, does not hold anymore. In other words: one can make a complete mess.

But that is ok, because one can use the REPL also to great advantage. And to show both the awesome and awful aspects of the REPL, it can make sense to use the REPL prompt to override the behaviour of the above described double-comma. This double-comma, which was described as a means for printline debugging, should be seen as an earmark and be allowed to change its behaviour.

This is the concept of earmarking some part of the code as "special", so that only this part of the code is evaluated when the full source file is read and processed. I call this the "rich-comment comprehension", which is a great invention.

The astute reader will now undoubtedly say: Hang on a minute! Not long ago you were condemning this "earmarking of code as special". You were calling it a fallacy. You were calling it the "triple-comma fallacy". Now you are praising this same "earmarking of code as special". You call it comprehension, the "rich-comment comprehension". Just renaming things does not make them better. Thus your argument is not understandable.

The all important difference between the "rich-comment comprehension" and the "triple-comma fallacy" is that the latter fallacy is committed in the Figwheel-reload mindset. Technically, the two concepts "rich-comment" and "triple-comma" are one an the same, the two names denote the same technical fact. But the "triple-comma" fallacy is committed by mentally working within the Figwheel-reload tradition. The lapse is the following: not to leave the Figwheel-reload tradition before using "rich-comment comprehension", thereby committing the "triple-comma fallacy".

Naive users will find the "triple-comma" fallacy convenient, make a mess and blame Clojure the language for that. And the Clojure community will rightly blame the SciCloj boffins for befouling Clojure by giving naive users the possibility to make a mess in Clojure.

In order to activate the "rich-comment comprehension", a user must be able to open the REPL prompt, thereby acknowledging to leave the file-based Figwheel-reload tradition and enter the namespace-based REPL tradition. He demonstrates that he is not a naive user anymore. He knows and shows - by typing at the REPL prompt - that the equation "disk=memory" does not hold anymore and is willing to take full responsibility. When making a mess, which he undoubtedly will, he cannot blame Clojure the language but has to admit that he has been using the REPL in a wrong way. And that not only is perfectly ok amongst Clojurians, but indeed messing with the REPL is the way to actually become a Clojurian.
