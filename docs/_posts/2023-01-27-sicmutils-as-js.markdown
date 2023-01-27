---
layout: post
title:  "Sicmutils as JavaScript library"
date:   2023-01-27 00:00:01 +0100
categories: Software
---
In this blog post I argue that it is vital to market Sicmutils as a JavaScript library. If you do not know what Sicmutils is, most probably this text will not make any sense to you.

Maria-cloud is a Notebook framework, an ingenious one, but a framework. Physicists do not like to upload their code to a cloud service using some framework. Even if the cloud service is GitHub. It is indeed the case that often PhD students are not allowed to upload their data anywhere. This is especially true for Technical Universities which get a significant share of their funding from private companies. One consequence is that, even in cases when in principle they are allowed to use frameworks, they are not used to trust them.

This is in contrast to a software developer who is used to a local setup of Git in their company for sensitive data. He happily uses Microsofts Github for open source work. He knows how to circumvent the off the shelf on-line services (like Maria-cloud + Github) when the necessity arises (install GitLab).

The usual physicist does not have this backdoor a software engineers has. He is tied to a framework once he decides for it. So he decides for the thing everyone uses: Matlab with code stored locally on his laptop, shared by producing zip files sent via e-mail.

But of course physicists are used to read books. And if they buy a book as paperback, they also read it online. That a physical version exists is important insofar, as they only trust reliable sources. They are used to journals that exist as physical paper-journals and indeed the most prestigious ones exist as physical issues that any respectable university holds in stock in their library. Of course in practice journals are read on-line most of the time.

Now, this is the great advantage of the SICP and SICMechanics books. SICP is *the* standard textbook of computer science. A seminal work. As SICMechanics is by the same author, physicists will at least listen up when confronted with it. One only has to state the fact that it is the logical extension of the seminal SICP book. Both books exist as physical versions (MIT-press), a necessary condition for trustability.

The problem with both books to reach a wider audience is the Scheme language. This language is not widely known. A physicist always looks for self-efficacy (hence the use of Matlab). "Why should I carry the mental load for learning Scheme?", he asks. "Because it is a simple language", is the answer. "Well yea, but I cannot use it anywhere else".

There is a reason why SICP now exists in a JavaScript version. Because learning JavaScript is perceived to increase self-efficacy, it drives the Internet after all. Scheme does not share this property.

In any case, maybe some physicist can be convinced to buy and read SICMechanics. After all, the book solves the problem of arbitrariness of notation found in so many (if not all) physics textbooks. A situation which surely made him suffer more than one time in his life. Fact is, Classical Mechanics can nowhere else be understood so thoroughly and quick as with SICMechanics, once one has took the decision to learn Scheme in an afternoon.

Ok, now that the physicist is reading the SICMechanics book, he wants to enjoy the single most big benefit it offers: code some simple example on the computer to understand it better (maybe derive the centripedal force by rotating an observer).

Used to read books on-line, he looks on-line for a possibility to hone his programming skills. He concludes that installing MIT-scheme is out of the question. This is because he uses a Windows machine (it took me more than a day to get it up and running on my Windows laptop, I hated it). Fortunately, we have Sicmutils, it works online. On Maria-Cloud.

Of course, the question will come up: "Is Maria-Cloud mandatory? Am I tied to it?". "No, No", the answer comes, "you can install Clojure locally on your laptop". An eyebrow is raised.

"Clojure? What has that to do with anything and what is that now". "Ah, do not worry, it is the same as Scheme except more modern, the syntax is almost the same". "Well", comes the answer "I agreed to learn Scheme, because it is used in this SICMechanics book by the author of a seminal book in computer science and now you tell me to use something slightly different. I want to do the exact same exercises as in the book I bought and trust, and you tell me I cannot do them as described?". "Well, with a bit of elbow grease, you know, all easy, Maria-Cloud is cool and Github ..." (now start again at the beginning of this post for the topic frameworks).

I think one has to be honest and anticipate a conversation like the above before endorsing SICMechanics to someone. I think it is important to be frank about this. And this is the reason why I think it is vital to market Sicmutils as a JavaScript library.

First of all one can show a simple demo of Sicmutils in a blog post by just using JavaScript. Agreed, the code will not look nice, but with a few JavaScript helper functions defined beforehand this can be mitigated at least a bit. With such a blog post, one has already neutralised two roadblocks in one stroke: first there is no framework and second there is no Scheme. The physicist does not feel tied in to something and his self-efficacy is catered for by JavaScript.

Agreed, by introducing JavaScript one is in this first step farther away from the SICMechanics book than when introducing Clojure, but Clojure is not there exactly either. My proposal to connect Sicmutils to the books is by building up a Scheme-to-JavaScript compiler along the way of going from one example to the next in a blog post. In this way SICMechanics is not only tied to Sicmutils but also to its famous predecessor SICP. Because SICP is all about building up a Scheme compiler.

Following this road, the physicist has to learn basic JavaScript in order to understand SICMechanics. I think for people not willing to learn basic JS, there is no hope ever for them to do physics SICMechanics style. But on the other hand, I personally know people who program spaghetti Matlab code and would like to know what real programming means. They do not know that no one knows how to program, but at least there is the functional method of the seminal SICP book. This combination of SICP+SICM can be whole heartedly recommended to anyone out there. Remember that SICP also exists in the JavaScript version, the version I would recommend for reference to a physicist. We want to start with JavaScript after all and work our way up by building a compiler and physics examples both in parallel as needed.

In such a series of blog posts, I want to emphasise, the original SICMechanics book (= MIT-Scheme language) would come to life for the first time. Think restoration of an old Chapel to its originally bright colours. It requires effort by the reader, but all he learns is timeless and universal (at least for an earthly human life span): Classical Mechanics and JavaScript. Maybe people then start to write their own blog posts, or at least send around HTML files by e-mail to be opened locally.

One could even imagine to present SICMechanics with a Matlab-to-JS compiler in a series of blog posts. This would be the holy grail of self-efficacy for a spaghetti Matlab coder who is curious to learn how to program. Instead of building up a Scheme compiler while working his way through the material, he builds up a Matlab compiler and then uses the already long-known familiar syntax to do the examples of SICMechanics.
