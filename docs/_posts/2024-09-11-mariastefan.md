---
layout: post
title:  "Stefan's Law"
date:   2024-09-11 06:00:01 +0100
categories: HamiltonMechanics
---

I wrote up one essay about Josef Stefan's T^4 law. The idea has been to translate the original paper into an executable notebook (reference [1]).

While I usually use my own notebook implementation (as in other posts of category "HamiltonMechanics" and also in [2]), this time I have used the splendid maria.cloud platform.

One innovation lies in the presentation of the formulae. I tried to render them in a way where one can read them out loud, even if one does not understand them. Note that the formulae are all rendered AND executed out of the same underlying notation.

For example, Stefan's law looks and reads like this:

---
<div class="aside">
<p><p><div><span style="border: 1px solid gray; padding: 14px;"><span style="border: 1px solid gray; padding: 11px;"><span style="border: 1px solid gray; padding: 8px;"><span style="border: 1px solid gray; padding: 5px;"> T  plus  x </span> hoch  4 </span> minus <span style="border: 1px solid gray; padding: 5px;"> T  hoch  4 </span></span> mal  B </span></div></p><p><div> mit </div></p><p><div><span style="border: 1px solid gray; padding: 5px;"> x  in  Celsius </span></div></p><p><div> und </div></p><p><div><span style="border: 1px solid gray; padding: 11px;"><span style="border: 1px solid gray; padding: 8px;"> Ein <span style="border: 1px solid gray; padding: 5px;"> 6  Milliard </span> stel </span> für  B </span></div></p><p><div> und </div></p><p><div><span style="border: 1px solid gray; padding: 5px;"> 273  für  T </span></div></p></p>
</div>

---
The inspiration for this came from the "Biggest Ideas" audiobooks by Sean Carroll and "Everything and More: A Compact History of Infinity" by David Foster Wallace. Especially the second book presents formulas that are not intended to be understood by the reader, more to be understood in a literary way, formulae as a fest for the eye.

Admittedly it is a daring approach. But I think by making the formulas first readable as plain text and second execute them in the browser, both in front of the eye of the beholder so to say, the approach of Wallace and Carroll is taken a step in some direction.

[1] <https://2.maria.cloud/gist/39e81f931737ea7032991c796f93c020>  
[2] <https://kloimhardt.github.io/blog/html/sicmutils-as-js-book-part1.html>  
