---
layout: post
title:  "Link Assortment"
date:   2026-11-19 06:00:00 +0100
categories: Crônica
---

## [Jolt native regions](https://github.com/jolt-lang/jolt-lang.github.io/pull/80/files) 21.Nov26

Jolt, Yogthos' Clojure Dialekt, hat "block of numeric code that `jolt build` compiles to C and links into the binary". Es ist eine ähnliche Idee wie mein [LisRoot](https://github.com/kloimhardt/LisRoot). Aber nicht ganz, weil Jolt ANSI-C (und zwar memory-safe) macht und LisRoot zwar volles C++ aber komplett ohne memory management.

Die Idee ähnelt eher mehr dem Ansatz von [Bun](https://bun.com/blog/compile-and-run-c-in-js), jener JavaScript runtime die Einbundung von C code in JS erlaubt. Bun wurde Dez25 von Anthripic gekauft, woraufhin die 1Mio Loc Codebase im May26 agentic innerhalb von 11 Tagen von Zig-lang nach Rust-lang portiert wurde. Mit einem pre-release von Claude Fable 5. "Just a total shit show, from an employment perspective", sagt die Zig Software Foundation.

### Details
Ich kann LisRoot nicht direkt vom Ferret-dialekt nach Jolt portieren, weil Jolt gar keinen Code direkt als String akzeptiert, also auch keinen C++ Code im Speziellen. Er will memory-safety. Er hat seine starre DSL die nach Ansi C transpiliert.  Kommunikation diesbezüglich mit Yogthos:

And for writing C code directly, I prefer simply adding it in `native` folder and then having a task in `deps.edn` to compile it instead of interleaving it as strings directly in Clojure. It’s kind of similar approach as hugsql where you write your SQL in its own file and then have functions to call it from Clojure which in this case are the FFI wrappers.

Ich hatte LisRoot ja zugunsten [jank+CppInterOp](https://compiler-research.org/assets/presentations/Aaron_CHEP2026_ROOT_Python_CppInterOp.pdf) aufgegeben bzw. LisRoot war eh als Vorläufer gedacht. Yogthos:

I actually looked at Jank approach a little while back, but as I recall it’s tied to LLVM magic. It’s more powerful because Jank can generate code at runtime, and with Jolt it’s a compile time mechanic which needs a C compiler on the system.

The flip side is that Jank basically has a DSL to write C style semantics in Clojure where Jolt DSL is a region inside which you write regular Clojure and can use functions like map or reduce directly.

it has a natural fallback to getting compiled as regular Jolt forms during dev.

I’m limiting it to numeric computations since that tends to be where most of the benefit is. Making a full language DSL here would be a much bigger lift for little practical gain I suspect.

In Summe bleibt für mein LisRoot übrig, dass zumindest auch Yogthos jenes Konzept gut findet welches ich "statically compiled layer" und er "compile time mechanic" nennt. Es ist aber wohl so dass wenn schon C++ (und nicht nur ANSI-C), denn schon die "powerful LLVM magic" von jank+CppInterOp.

## [2012 TED talk des Futurologen Tapscott](https://www.youtube.com/watch?v=jfqwHT3u1-8) 20.Nov26

Hab das Video in meiner allzukurzen Mittagspause gesehen, ach dieses Hobbymaxing. Don war euphorisch bezüglich Internet und KI, und ich bin das Ende 2026 genauso. Wir müssen aber seit der Steinzeit (seit 2025) ein paar Schädlinge managen um die Früchte zu ernten.

Don Quote: "Think about the kids today in the Arab spring" mit ihren mobilmachenden Vernetzhandys. Was der gute Don nichtmal in seiner Vergangenheit gesehen hatte war dass dann am Tahrir Platz richtig schön die Mädls vollorganisiert gruppenbegrapscht und gruppenvergewaltigt wurden als Vorglühparty der bärtigen Migrations(not-so)kids zu Köln Silvester 2015. Don, you must be kidding me, schau jetzt zumindest das Sammad Video unten.

Don Quote: "Could we go beyond just sharing information ... Could we create some kind of collective Intelligence that goes beyond an individual or a team". Dazu [Terry Tao in Math 2.0](https://www.youtube.com/watch?v=aHpPoNNTOKY) "in fact now mathematicians are hiding their problems you used to share very openly all their promising research directions and now they are afraid that someone with an AI will input their idea into a frontier model before they can finish their work".

## Link assortment 19.Nov26

[Drei Stunden Video mit Hamed Abdel Sammad](https://www.youtube.com/watch?v=QxMuH1bjMwo)
Die Fatwa hat diesen Aufklärer aus Ägypten raufgespült zum Kontinent der frühen Aufklärung. Scheisse für ihn, gut für Europa. Migration und Sozialstaat gehen nicht zusammen, nach 2 Jahren Kohle sollte Schluss sein für unsere Gäste, so eines seiner Statements gegen unsere europäischen Glaubensdogmen und Tabus. Hart aber mein intellektuell unerreichbarer Leitstern.

[Ein Standardartikel zum Ruanda Returnhub](https://www.derstandard.at/story/3000000349718/abschiebung-illegaler-migranten-ist-wichtiger-teil-gemeinsamer-eu-migrationspolitik) ist ein seltener Beitrag zum bisher wenig diskutierten historischen Schritt.

[Bruno Buchberger](https://www.youtube.com/watch?v=WLYW6BPkkIk)
Der Weltmathematiker aus Linz, Mastermind of Hagenberg. Zuerst Formalisierung dann LMM, genauso wie Ken Ono von [Axiommath](https://axiommath.ai/), in Tradition natürlich der beiden Antagonisten Steve Wolfram und Gery Sussman. Mit 85 Jahren noch mal loslegen, Chapeau. Ich halluziniere auch Emmi's Johannes Brandstetter geht mit Mistral in die Richtung, da ist aber [wenig bekannt über Flare](https://flarephysicsai.com).

[Federico Faggin](https://www.youtube.com/watch?v=zZvswwFsgxU) hat sein Buch jetzt in Amerika rausgebracht. Er zeigt dass Harari keine Ahnung hat von Buddhismus und freiem Willen, den es natürlich gibt im Schopenhauer'schen Sinn.  Bei uns ist sein Buch schon lange verfügbar, liegt auch daran dass (wo die Amis alles in China drucken lassen) wir unsere eigenen Pressen haben.

## Standards KI

[Shtetl-Optimized](https://scottaaronson.blog/) mit Videos von Scott Aaronson kennt sowieso schon jeder. Er ist halt nicht grad begeistert von "keffiyeh-clad revolutionaries", an der Stelle sag ich mit Gerhard Polt "bitte, es ist nicht meine Meinung, es ist dem Scott seine Meinung, aber ich tolerier's."

[Terry Tao](https://terrytao.wordpress.com/2026/11/11/lean-grimoire/) ist weidum bekannt für die gute Mathematik aus'm Outback. Mein Kommentar zu seinem Puzzlespiel auf [Hackernews](https://news.ycombinator.com/item?id=50462375): "I feel like a Fields Medalist".

Zum Thema schriftlich vs. mündlich hat mich beeindruckt [Scott Alexander](https://www.astralcodexten.com/p/your-book-review-orality-and-literacy). Auch weil er kurz Paul Graham den grossen Hackernews-Lisper ins Spiel bringt.

Mustafa (kennt Harari, ich nicht) Suleyman, CEO von Microsoft AI, ist Standard in Punkto AI Alignement.

## Meinung Migration

Es gibt keine moralische Pflicht zur Selbstaufgabe. Jeder Staat hat das Recht zu bestimmen wer auf seinem Gebiet sich aufhält. Jetzt werden die de-jure Kriminellen ausgewiesen, ich sehe das Hope Hostel als Real-Option auf Ausbau und hoffentlich einen Swap gegen die jetzig noch nur de-factos. Wie wir alle wissen bewerten sich Realoptionen nicht nach dem üblichen Discounted-Cashflow Modell sondern eben nach Black-Scholes und damit ist das Kigali-Ressort auch im Geld.

Kann mir jemand sagen was der Arab spring nicht einigen Familienclans sondern den Leuten dort aus heutiger Sicht gebracht hat? Jedenfalls nicht die Früchte die sich der Futurologe von damals erwartet hatte. Mit Hilfe der EU können Serbiens Studenten vielleicht ein paar der Schädlinge vermeiden in Zukunft.

Insgesamt zeigt Tapscott's Talk zumindest eines auf: zwei der grossen Fehler die wir westlichen Intellektuellen in den 10er Jahren gemacht haben, Fehler die ein Zerbrechen der EU durch den kleinen Bully Russland möglicher machen.

Erstens die faktisch unzulänglich belegte Euphorie für den arabischen Raum. In 2012 völliges Verschweigen der Warnung vor Islamismus. Die Warnung war prinzipiell vorhanden seit 9/11, Islamismusgefahr hat man sehr wohl damals schon gesehen und also weggeschaut. Putin sagte sich "Hey, lass uns Aleppo bombardieren damit die Syrer migrieren, let's put their EU welcome-welcome Geschwurbel to the test".

Und zweitens der Sharingglaube an die US Softwareindustrie ohne auf eine eigene Software für die EU Verwaltung zu pochen. Putin sagt "Hey, die drohnenbomben meine Raffinerien, drosselt Starlink sonst wird's Öl um noch einiges teurer für euch Amis". Zugegeben, dass US+Russkis Buddies werden hat keiner sehen können in 2012.

Symbolpolitik muss nichts Schlechtes sein. Wichtig ist, dass das Symbol eine klare Bedeutung trägt. Der Signifikant braucht ein Signifikat. Das Ruanda Treffen von Dk, Nl, Gl, D und Ö symbolisiert eine verschärfte Migrationspolitik und gibt bis jetzt ein solides Bild ab. Im Gegensatz dazu ist mir nicht klar was das Dreiertreffen Xi-Putin-Trump (für wen?) symbolisiert haben soll. Für jeden wohl was anderes, was  den Westen (durch unseren wichtigsten POTUS Politiker) armselig aussehen lässt. Den Westen gibt's, er zeichnet sich durch Meinungsfreiheit aus und kann darum nicht gar so einfach verlassen werden.
