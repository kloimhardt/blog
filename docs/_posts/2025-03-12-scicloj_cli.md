---
layout: post
title:  "The SciCloj CLI and the return of the REPL-prompt"
date:   2025-03-12 06:00:01 +0100
categories: Software
---

a post by Markus Agwin Kloimwieder

## Preface: the aim of SciCloj
The SciCloj community puts a lot of effort into being inclusive and making the [SciCloj](https://scicloj.github.io) website talk to the target audience -- anybody who has some data to explore.

The following post does not talk to the SciCloj target audience. It talks about SciCloj. For this, I use a blank slate called SciKloj which is assumed to have no target audience yet. I also assume that this SciKloj is not yet established within the Clojure community either.

To whom, finally, does the essay talk to? I assume my reader to be, like me, an early adopter of SciKloj who intends to present SciKloj to some curious outside audience.

## An essay à clef

### SciKloj caters for a subset of beginners
The message of SciKloj is: "Clojure is the best and most natural language for science and to this aim, the SciKloj community provides Noj as a  framework for data science in Clojure."

The target audience for Noj are data analysts. Most data analysts out there have never heard of Clojure which means we deal with people who are most probably beginners with Clojure. But we can assume that they are highly trained in logical inference. Beginners, yes, rookies, no.

Data analysts will eventually understand that Clojure is best. Because in their role as logicians they will appreciate that Clojure is a functional language. In Clojure, programs have minimum side-effects. As opposed to imperative languages, Clojure programs are like mathematical formulas. That Clojure is mathy poses the main reason to use Clojure in science.

### Make SciKloj visible among Clojurians
Most Clojurians are software developers, working on REST, say. To the typical Clojurian, what SciKloj does is alien. We are not exactly invisible but also not seen in the best possible light within the Clojure community. My goal here is to make SciKloj visible in its best light.

For this, I'd like to draw the attention to Python, the most popular language out there. My argument is that if we can draw some of the many Python users to Clojure, Clojurians will notice.

Informed by this argument, I make the following proposal: in order to become more visible within the Clojure community, SciKloj should mainly cater for Python scientists.

My proposal for becoming visible is to become good at one thing: hammering through the message "Clojure is a functional language on the JVM". Please notice that the JVM is central. The Java machine is stronger than the Python VM. While this JVM argument is very important, it is so simple that I cannot say anything more than repeat that the JVM is central to SciKloj.

There is a related view which I am opposed to: Let's evangelise Lisp, preach S-expressions to scientists. The reason I am opposed to this approach is that in employing such a lispy talk, SciKloj would not add any value because lots of Lisp people, software developers, already talk about the superiority of S-expressions. They do a great job, SciKloj cannot add anything here but reference those great Lisp figures. And it is not a good strategy to talk about the greatness of Lisp when wanting to become visible among Lispers. They know that already.

So SciKloj will tell Pythonists that "Clojure is functional". And by so doing, the whole Clojure community will realise that for delivering this message "Clojure is functional", SciKloj is the perfect use-case.

Notice the two fold effect: By showing simple SciCloj examples, we first show Pythonists a way to do science and second give Clojurians a way to demonstrate functional programming to the world, e.g. also PHP users.

So the idea is to become visible within Clojure by successfully introducing SciKloj to Pythonists. And here I humbly put forward that, in order to present Noj, we should dispense with the IDE. That is because the IDE's bells and whistles draw attention away from the simplicity of the Clojure syntax. The IDE does not serve the message of SciKloj, which is: "Clojure is functional". The argument is that when talking to beginners, an unknown IDE draws away attention form the functional design of Clojure.

Taking this proposal to its end means to present Noj with Notepad++. This no-IDE approach is abominable to Clojurians. The following thoughts try to put further weight behind Notepad++, not for general Clojure developers, but only for the narrow field of presenting "science without Python", for presenting SciKloj.

### SciKloj without the IDE
All software developers use integrated IDEs, and that day to day. Scientists, on the other hand are not software developers, they are spaghetti-coders. They spend weeks in their labs gathering data. After they reappear from the basement, their brains are completely reset. Muscle memory from day to day usage of an IDE? Nada. Remembering keystrokes? Nope.

Seasoned Clojure developers will not give the IDE away. Quote:

> My take on this is that tooling is much more important on Clojure (and Lisps in general) than say on Python, specially because of interactive programming and s-expressions which is a big part of its super power. So I would be careful when removing tooling to appeal to beginners in the same way I wouldn't write imperative code in Clojure so it is easier for Python data scientists to get.

So should the Clojure Community provide tooling, provide IDEs for scientists? By all means. And the community already does via Slack channels and youtube videos. The problem is that scientists are not in those channels, nor do they have the time to be there. They are certainly not the chat guys. They need a written user's guide to follow, and nothing else (please).

So should SciKloj provide more videos and manuals for IDE usage? My answer is: certainly not.
The reason is: time. While it is easy to refer to existing content of the wider community, it takes a lot of effort to produce new videos and manuals. Time spent on presenting IDEs is not well spent, because scientists do not want to spend the time to learn an IDE anyway. It does not improve their self-efficacy enough. This is why Python is so successful, it does not need an IDE.

So my suggestion is to accept that Clojure has a disadvantage over Python in that Python is easy to use in Notepad++. But instead of trying to coerce scientists into the IDEs of general software engineering, I suggest to choose the Figwheel way described below for conveying the single one argument that I think holds currency for scientists: "Clojure is mathy, Clojure is functional".

### The two ways of Clojure
That Notepad++ is viable at all for Noj is because Noj/Clay supports a live reload feature via the CLI. Here, it needs to be clearly recognised that the live-reload feature of Noj/Clay is in full Clojure tradition, i.e. that of Figwheel/shadow-cljs.

What is this tradition? It is that Bruce Hauman, the inventor of Figwheel, started to put the file as the primitive notion of Clojure-coding. This is opposed to the usual way of Clojure, which puts not the "file" but the "namespace" front and center. But Bruce says: "When we have a workflow where our files are being watched ... as we work on them, we have an opportunity to detect syntax/compile errors earlier".

So switching to a file perspective is not only a makeshift. Next to putting the spotlight on Clojure's mathy, simple functional language design, it also has the potential of tackling the problem of error messages. This old Clojure topic will certainly become more pronounced for Pythonists and is a highly fruitful place for SciKloj to tackle. More on that further below.

As opposed to that file-tradition, the original Clojure tradition has been to navigate namespaces with the REPL. The file turns into the background - with the REPL, what is on disk in not what is in memory. While, from the beginning on, Clay was designed with the REPL in mind, my argument is that SciKloj should put the file front and center.

Within this file-tradition, the REPL turns into the background.  [Thomas Heller](https://code.thheller.com/blog/shadow-cljs/2024/10/18/fullstack-cljs-workflow-with-shadow-cljs.html): "I personally only switch to the CLJS REPL occasionally, since most of the time hot-reload is enough." [Bruce Hauman](https://figwheel.org/docs/hot_reloading.html) was keen not to "take your focus out of the file you are editing."

### What is on disk is in memory
Although not being the standard in Clojure, with libraries like `cljs-reload`, one can always make sure that what it on disk is what is in memory. In communication to the wider Clojure community, this requirement memory=disk can be labeled the "Figwheel-reload" approach. In talking to Python people, it does not need a name, memory=disk is the normal situation.

Now some Clojurians will say: "I would never work like this". Other Clojurians on the other hand would not say that in this strong form, because they use IntelliJ with the "sync the file" feature. In any case, all Clojurians will agree that Figwheel-reload has a certain tradition within Clojure, whether a particular person lives within this tradition or not.

"But you are giving away the superpower of Lisp!", I hear. My answer is: The role of SciKloj cannot be to evangelise the REPL because this is done enough by other great Lisp figures. Moreover, SciKloj should never speak of "superpower" because amongst scientists anyone who speaks of magic will meet condemnation. Rather, while not every Lisp is functional, the role of SciKloj is to hammer through  the fact that "Clojure is functional".

### Error Messages
Improving the error messages of Clojure is a prominent topic in every user survey. I am not sure how serious the survey participants are when they chip in this topic. Because when discussed in chats and forums, this topic is riddled with ambiguity.

On the one hand there are voices who say "I want the whole stacktrace as it is" (probably being happy with their IDE middleware formatting those stacktraces). On the other hand there is the opinion "you do not need error messages", because learning REPL driven development meant starting to think in a kind of Sherlock Holmes way which would supposedly be impaired by focusing on error messages.

In one sense or another, there have been attempts to improve error messages. Figwheel, with its focus on the file, was pioneering the "heads up" display. Another interesting project is "Babel" form Uni Minnesota, because it connects this "error message" topic back to academia, fitting SciKloj perfectly. Also "maria.cloud" has its innovative approach and there is "virhe" by Metosin.

No effort has gained wider traction. This opens a possible role for SciKloj, a role that has been hinted at in the most recent [Clj-together survey](https://www.clojuriststogether.org/news/call-for-proposals.-feb.-2025-member-survey/): "consensus as to how to create “quickstart” applications for various usecases ... Otherwise, we risk fragmenting the efforts ... more usable error messages".

With its narrow use-case and a file-based Figwheel-reload approach, SciKloj could tailor customize linters like clj-kondo. This linting will mellow the general Lisp problem of unbalanced parentheses. It will not go away and will always be a problem for beginners and a disadvantage over Python. Within SciKloj, I argue this to accept and trust that users will eventually master slurping and barfing within an IDE later on.

Clay's browser window offers lots of space for additional linting information, e.g. statically inferred types. Also a sophisticated debugger like Flowstorm could be part of the Clay experience.

### Printline debugging
Despite all sorts of sophisticated debugging tools, the hallmark of the file-based approach is printline debugging. For this, S-expressions are cumbersome. But Clojure since long has a solution: reader conditionals. I call this the "double-comma" solution to printline debugging. Bypassing S-expressions for printline debugging with the double-comma approach is a great idea.

Sometimes "slow calculations" are held against executing whole files. I think the chances of creating something slow are greatly overestimated. Just in case, the first advice should be to use temporary data-files. In case of further problems, maybe there is a bug in Clay so a minimal use-case is needed. Or maybe a switch to Jupyter notebooks is best (next to Clay, SciKloj also provides a Jupyter kernel).

There is a certain other idea for dealing with "slow calculations" which I am opposed to. It is a certain kind of REPL-ish concept that must never be introduced within Clay and the Figwheel-reload approach.

This is the concept of earmarking some part of the code as "special", so that only this part of the code is evaluated when the full source file is read and processed. I call this the "triple-comma fallacy", which is a monstrosity.

That monstrosity is outright harmful to SciKloj. Because any teacher coming from Python, maybe even a professor, sees this approach in some obscure video and finds it valuable. And then, as any user of the proper REPL method knows, he will eventually make a complete mess. And then he remembers that he likes Python better anyway and demonstrates this monstrosity as an argument against Clojure.

When being immediately enabled via the CLI to earmark code, naive users will make a mess and blame Clojure the language for that. And the Clojure community will rightly blame the SciKloj boffins for befouling Clojure by giving naive users the possibility to make a mess in Clojure.

### Against the REPL
For Clay, the REPL is not needed because of its file reload capabilities. There are many advocates of REPL driven development for good reasons. Here, I present three reasons why I think it makes sense to avoid the REPL in a first step:

1) The main reason for using Clojure in science is because it is a functional language on the JVM. Often, the REPL and functional programming are mentioned in the same breath. Nothing could be more misleading. Functional programming is about immutable data. A pure function does not change the data it is given to, it calculates new data, functional programming is mathy. REPL driven development, on the contrary, is based on mutation of code and data, which is exactly the opposite of demonstrating immutability. For this reason, the REPL is confusing for any beginner trying to understand Clojure.

2) The REPL has its own learning curve. The replacing or adding of code in a running program, because of being mutation, needs advanced knowledge and care. One can easily get to a state where what's in memory does not match up to what's on disk. As a result, a perfectly well functioning program can refuse to work after restart. A frustration to be avoided in a first step.

3) The REPL is in development practice not used without a properly configured development environment. As said in this influential [video](https://www.youtube.com/watch?v=Qx0-pViyIDU&feature=youtu.be&t=740) on the topic: "you work in your favourite tool", i.e. IntelliJ, Calva, Chlorine or Cider. This last tool is presented [here](https://www.youtube.com/watch?v=NDrpclY54E0), which demonstrates that one has to prepare a few things before using the REPL in its intended way.

Now that I argued that one should avoid the REPL in a first step, I continue to describe how to introduce this important concept in the SciKloj context.

### The REPL prompt
In order to introduce the REPL concept (after having presented Noj using the Figwheel-reload approach), it is best to show Noj in a Jupyter notebook. That means to dispense with Clay for introducing the REPL. This might be a tough step. But to introduce the new notion of the REPL, Jupyter is great because (as an integral part of Python) it is well known especially in science.

Nonetheless, a Lisper will never leave the podium without having presented his own concept of the REPL. And there, the urge is to show his cherished workflow based on his preferred IDE connected to the REPL. He wants to show his superpower. And, to the great advantage of SciKloj, that has already been done before. I argue that it's best for SciKloj to refer to already existing videos and blogs.

Instead, when for whatever reason Jupyter notebooks are not an option, show the REPL in its plain form: the prompt. The concept of a prompt is well known to Python users and has nothing to do with an IDE.

The REPL is awesome and awful both at the same time. This is, again, because the equation "disk=memory", the cornerstone of the Figwheel-reload approach, does not hold anymore.

To show both the awesome and awful aspects of the REPL, it can make sense to use an innovative trick: to use the REPL prompt to override the behaviour of the above described double-comma. This double-comma, which was described as a means for printline debugging, now becomes an earmark whose interpretation can be changed via the REPL. And, crucially important, changed via the REPL only, and especially not via the CLI of Noj.

This is the concept of earmarking some part of the code as "special", so that only this part of the code is evaluated when the full source file is read and processed. I call this the "rich-comment comprehension", which is a great invention.

The astute reader will now undoubtedly say: Hang on a minute! Not long ago you were condemning this "earmarking of code as special". You were calling it a fallacy. You were calling it the "triple-comma fallacy". Now you are praising this same "earmarking of code as special". You call it comprehension, the "rich-comment comprehension". Just renaming things does not make them better. Thus your argument is not understandable.

The all important difference is that the latter fallacy would have been committed via the CLI, in the Figwheel-reload mindset. The lapse lies in staying within the Figwheel-reload tradition, to avoid starting the REPL-prompt before "earmarking code as special".

When being immediately enabled via the CLI to earmark code, naive users will make a mess and blame Clojure the language for that. And the Clojure community will rightly blame the SciKloj boffins for befouling Clojure by giving naive users the possibility to make a mess in Clojure.

In order to activate the "rich-comment comprehension", a user must be able to open the REPL prompt, thereby acknowledging to leave the file-based Figwheel-reload tradition and enter the namespace-based REPL tradition. He demonstrates that he is not a naive user anymore. He knows and shows - by typing at the REPL prompt - that the equation "disk=memory" does not hold anymore and is willing to take full responsibility. When making a mess, which he undoubtedly will, he cannot blame Clojure the language but has to admit that he has been using the REPL in a wrong way. And that not only is perfectly ok amongst Clojurians, but indeed messing with the REPL is the way to actually become a Clojurian.

## Afterword
This concludes my essay à clef about SciKloj, a fiction that can be seen as one aspect of the whole multifaceted SciCloj project.
