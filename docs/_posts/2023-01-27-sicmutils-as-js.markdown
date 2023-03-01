---
layout: post
title:  "Sicmutils as JavaScript library (1)"
date:   2023-01-27 00:00:01 +0100
categories: Software
---
## Summary
This post ist the first in a series, all with the same title. I argue that it is a good idea to use [Sicmutils](https://github.com/sicmutils/sicmutils) as a JavaScript library. The reason is that Sicmutils(JS) along with a parsimonious Scheme-to-JavaScript compiler is by comparison the most direct entry to the underlying [SICMechanics book](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip/book.html) (also avalable in [different formatting](https://tgvaughan.github.io/sicm/)).

An implementation of such a Scheme-to-JavaScript compiler along with all 109 executed examples of the first part of the SICMechanics book is given on [this Web page](https://kloimhardt.github.io/blog/html/sicmutils-as-js-book-part1.html).

Disclaimer: If you do not know what Sicmutils is, it will be hard to understand this text. So maybe you take a quick look, here I only say that Sicmutils is a package for doing Algebra on the Computer.

## Excerpt of Post
### Platforms
Physicists do not like to share code on online platforms. They are used to published papers, which are immutable. Despite all "open data" policies. This attitude is in contrast to software developers who like to share code. Physicists stick to locally installed Windows software they know everyone uses day to day.

### Books
Physicists love books. The books SICMechanics and [SICP](https://sourceacademy.org/sicpjs) are a good selling arguments for trying out symbolic physics on the computer. The turnoff is the Scheme language used in the books. The fact that SICP now exists in a JavaScript version vindicates this point. If a physicist nevertheless buys the SICMechanics book, installing MIT-Scheme on Windows is no option. Sicmutils works on Windows, but is Clojure based, being only similar to Scheme. The user wants to do the examples exactly as in the just reluctantly bought SICMechanics book, not in Clojure. Thus Sicmutils in Clojure is hard to sell, JavaScript comes to the rescue.

### Fundamentals
Sicmutils can be demonstrated as (1) a JavaScript library (2) in a blog post, both formats which are widely known and also work offline. The connection to the SICMechanics book is made by showing how to build a Scheme-to-JavaScript compiler, building compilers also being a topic elaborated further in SICP. The drawback is that the user has to learn JavaScript. But physicists rather learn and use something general (=JS) to derive something special (= Scheme) instead of just accepting a special notation. Going back to fundamentals is their method in physics. SICP in the Javascript version ideally supports this road.

### Conclusion
Using Sicmutils as JavaScript library, the SICMechanics book in its published paper form (with MIT-Scheme language) would become interactive and online, opening a direct road to the material. Html + JS  can be the basis for readers' own blog posts. One could imagine to wet Matlab users' appetite by also providing another suitable compiler.

## Full Post

### Platforms

[Maria.cloud](https://www.maria.cloud) is a notebook platform, an ingenious one, but a platform, an online service. A Physicist, that is typically a male in his role at a university, does not like platforms. He shies away from uploading code and data to a cloud service.

The professional role of a physicist is to produce paper and pdf documents to be published in some paper journal. Motto: "this is my publication, this is the result of my research, I vouch for it with my reputation, it is meant to be read and criticised in exactly this form, certainly not to be changed and (god forbid) then republished under my name". The intermediate data processing is always done under time pressure, the code never undergoes a review, it is messy by its very nature. Certainly nothing to be published in the name of the university and research group.

Yes, I do know about all the discussions of "open science" and "open data" policies. But those can only be taken seriously as guiding ideas, given the working circumstances of the average scientist. He is glad to get the next paper through peer review before being crushed in the mills of the system and perish.

For a software developer this "keep code secret" attitude is hard to understand. In his professional role he is used to be forced to publish buggy software. Only the most foolish of managers or customers expect his code to work properly. He happily uses Microsoft's Github online platform for open source work, it is there for everyone to mix and match. The one who blames him for bugs is shunned by the whole community ("do not criticise, send a bugfix"). Should the code eventually be used professionally, GitLab is installed on a private server, the code is migrated and off we go.

The physicist, even when ready to share semi-professional doodles, does not see this backdoor of migrating to a private platform. Should the necessity arise, he does not have the resources to migrate. With every platform he ever started to learn, he also learned that he will be tied to this specific service forever. And even the most sanguine of scientists knows that keeping things secret can turn into a hard legal necessity for getting funds from private companies. Thus he decides for the thing everyone else uses day to day: Matlab with code stored locally on his Windows laptop, shared by producing zip files sent via e-mail.

## Books

Physicists do not like platforms but they love books in paper form. After all, these are immutable publications open to merciless criticism by everyone and can therefore be given the benefit of the doubt. Because the book's author put on the line his reputation in the community. The very reason to keep code secret leads to trust in published paper.

And this is the great advantage of Sicmutils: it is based on the SICP and SICMechanics books. SICP is a standard textbook of computer science. A seminal work. As SICMechanics is by the same author, physicists will at least listen up when confronted with it. One only has to state the fact that it is the logical extension of the SICP book. Both books exist as physical versions from MIT-press leading to increased trustability.

The problem with both books to reach a wider audience is the Scheme language. This language is not widely known. A physicist always looks for self-efficacy (hence the use of Matlab). "Why should I carry the mental load for learning Scheme?", he asks. "Because it is a simple language", is the answer. "Well yea, but I cannot use it anywhere else". A version of the "do not want to be tied to an unknown platform" argument again.

There is a reason why the SICP book now exists in a JavaScript version (SICMechanics does not). Because learning JavaScript is perceived to increase self-efficacy. JavaScript drives the Internet after all, a property Scheme does not share.

In any case, maybe some physicist can be convinced to buy and read SICMechanics despite its ample use of the Scheme language. After all, this book by a famous author solves the problem of arbitrariness of notation found in so many (if not all) physics textbooks. A situation which surely made him suffer more than one time in his life. Maybe he gets to share my belief that Classical Mechanics can nowhere else be understood so thoroughly and fast as with SICMechanics, once one has taken the decision to learn Scheme in an afternoon.

Ok, now that the physicist is reading the SICMechanics book, he wants to enjoy the single most big benefit it offers: code some simple example on his computer to understand it better. Maybe derive the centripedal force by rotating an observer (an example which happened to open my eyes). Looking for a possibility to hone his programming skills, he first of all concludes that installing MIT-Scheme is out of the question. This is because he uses a Windows machine (it took me more than a day to get it up and running on my Windows laptop, I hated it).

Fortunately, we have Sicmutils, it works online. On Maria.cloud. As sure as a stone falls downward, the question will come up: "Is Maria.cloud mandatory? Am I tied to it?". "No, No", the answer comes, "lots of people use Clojure locally on their windows laptops". An eyebrow is raised.

"Clojure? What has that to do with anything and what is that now". "Ah, do not worry, it is the same as Scheme except more modern, the syntax is almost the same". "Well", comes the answer "I agreed to learn Scheme, because it is used in this SICMechanics book by the author of a seminal book in computer science and now you tell me to use something slightly different. I want to do the exact same exercises as in the book I bought and trust, and you tell me I cannot do them as described?". "Well, with a bit of elbow grease, you know, all easy, there is Maria.cloud and Github and Clojure and really cool ...".

I think one has to anticipate a conversation like the above before endorsing SICMechanics to someone. It needs lots of verbal arguments to justify investing one's time into Sicmutils in its Clojure form. And this is the reason why I think it is a good idea to use Sicmutils as a JavaScript library. The reason is that the use of JavaScript does not need lots of verbal arguments. Html + JavaScript is the pure "show, don't tell" method of arguing the good cause of worldwide improvement of notation in programming and physics. Let me use lots of verbal arguments to tell you, the already converted Sicmutils disciple, why this is.

### Fundamentals

First of all one can show a simple demo of Sicmutils in a blog post by just using Html + JavaScript. The code will not look nice, but with a few JavaScript helper functions defined beforehand this can be mitigated at least a bit. With such a blog post, one has neutralised the "no tie to unknown stuff" argument. It is all Html and Javascript, technology which is amply demonstrated to run locally and offline without ceremony. The physicist does not feel tied in to something and his self-efficacy is catered for by JavaScript.

Agreed, by introducing JavaScript one is in this first step farther away from the SICMechanics book than when introducing Clojure, but Clojure is not there exactly either. My proposal to connect Sicmutils to the SICMechanics book is by building up a Scheme-to-JavaScript compiler. In a blog post, along the way of presenting one physics example to the next, a Scheme compiler is developed. In this way SICMechanics is not only tied to Sicmutils but also to its famous predecessor SICP. Although the proposed Scheme-to-JS compiler is conceived to be very limited, SICP serves as the authoritative source that building up a compiler is a feasible and fruitful task.

Following this road, the reader has to learn basic JavaScript in order to understand SICMechanics. Now maybe the question comes up: "Why would a physicist learn JS and bother to write a Scheme compiler in the first place? It is so much easier to just use an existing Scheme compiler and do physics examples immediately". I hope that the answer is already partly clear from what I wrote up to now. But let me expand a bit.

Writing a Scheme compiler means to learn that Scheme is a consequence of JavaScript. Scheme becomes a notation of JS which is better suited to solve physics problems. There is an analogue in Classical Mechanics (CM), the very subject of the SICMechanics book: one can solve the movement of planets using either the Lagrangian notation or using the Hamiltonian notation. Both get the job done. But when it comes to complicated planet systems, the Hamiltonian notation lets one understand them more easily. Nevertheless, the Hamiltonian follows from the Lagrangian. The Lagrangian ist the most fundamental beast in all theories of physics (treating space and time on equal footing), the Hamiltonian is more special (singles out the time variable). Physicists rather take the pain of deriving a special notation from general principles than just accept a new notation. It is this self-efficacy again: wanting to know the general thing which is applicable to everything in the field.

Forgive me when I muse further a bit (despite I think you got the point). As said, it is easier to understand complicated stuff in Hamiltonian form. But in theoretical physics it is well known that it is not possible to see whether calculations in this form comply to Einsteins relativity conditions. For that one needs to look to the according Lagrangian. This can be compared to debugging: sometimes one is not sure whether the written Scheme code really does work the way intended, and thus one wants to have the possibility to go back to the fundamental JavaScript.

Physicists care about the fundamentals. I personally know people who program spaghetti Matlab code and would like to know what real programming means. They do not know that no one knows how to program, but Matlab already leans itself to a lightweight functional method, a paradigm which is thoroughly presented, discussed and compared in the SICP book. Remember that SICP also exists in a JavaScript version, the version I would recommend for reference. We want to start with JavaScript after all and work our way up by building a compiler and physics examples both in parallel as needed.

### Conclusion and Outlook

I want to sum up with the main conclusion: In a series of blog posts using Sicmutils as JavaScript library, the SICMechanics book in its published paper form (with MIT-Scheme language) would become interactive and online. This is the most direct entry to the material. Understanding how all this comes about requires considerable time and effort by the reader, because he has to write a compiler and learn physics in parallel. But the guarding rails for this journey are two books by a renowned author.

This blog post series and [all 109 executed examples](https://kloimhardt.github.io/blog/html/sicmutils-as-js-book-part1.html) of the first part of SICMechanics serve as a start of such a journey.

After having completed the journey, people are prepared to write their own blog posts, or at least send around HTML files by e-mail to be opened locally.

One could also imagine to continue and cater for another type of reader: present a chapter of SICMechanics with a Matlab-to-JS compiler. Matlab users could then try out SICMechanics in their long-known familiar language before deciding whether to give it a go.
