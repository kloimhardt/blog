---
layout: post
title:  "Vorteile des Istgleichzeichens ="
date:   2022-11-15 00:00:01 +0100
categories: Software
---
Der folgende Programmcode, den du nicht weiter verstehen musst, liefert als Ergebnis die Zahl 120. Falls dich Programmcode abschreckt, lies einfach nur den restlichen Text, dieser Post ist ausserdem ziemlich kurz.

Wenn du grad neugierig bist, lass das Programm selber in deinem Browser laufen (in Firefox geht das über Tools -> Browser Tools -> Web Developer Tools und Copy/Paste).

{% highlight JS %}
x=2;
i=3;

while (i<6) {
 x=x*i;
 i=i+1;
 console.log(x);
}

x;
{% endhighlight %}

Da ich das Zeichen = im Code nicht mag, hab ich das Programm umgeschrieben, in eine andere Form übersetzt. Es kommen keine = mehr vor:

{% highlight JS %}
f(2,
  3);
function f(x,i) {
 return i<6 ?
  f(x*i,
    i+1) :
  console_log(x);
}
function console_log(x) {
 return x;
}
{% endhighlight %}

Ohne viel verstehen zu müssen, sieht du rein formell, das die Zeilen sich nicht viel verändert haben. Ich musste nur zwei neue Zeilen mit function einfügen. Aber die = sind weg! Gut so. Und es kommt am Ende die selbe Zahl raus: 120.

Nun der Kernpunkt: du kannst im ersten Beispiel alle jene Zeilen weglöschen, in denen ein x steht, und du hast trotzdem ein lauffähiges Programm. Das ist gut. Im zweiten Fall geht das nicht, die Zeilen sind sozusagen miteinander verwurstelt. Das ist nicht so gut.

Und trotzdem: Ich bin bereit diesen Nachteil in Kauf zu nehmen, weil ich die = so gar nicht mag. Im Übrigen spuckt der Rechner im zweiten Beispiel nur mehr eine einzige Zahl aus, anstatt vier (auch nicht so gut, schluck ich trotzdem).

PS: damit das Löschen der x-Zeilen im ersten Beispiel funktionierte, musste ich der geschwungenen Klammer } eine eigene Zeile spendieren. Das machte in dem Fall ja auch Sinn.

PPS: Neuerdings spendier ich den } keine eigene Zeile mehr. Wen schon kein =, denn schon keine eigene }-Zeile mehr.

PPPS: Nach einem langen Spaziergang hab ich beschlossen, das verwurstelte Beispiel aufzuräumen. Dafür gibt’s Vorbilder in den Schulbüchern, geschrieben von schlauen Leuten, die mit der entstandenen Verwurstelung unzufrieden sind. Das Ergebnis ist:

{% highlight JS %}
reduce(2,
       range(3,6),
       (function(x, i) {
        return x*i;}));
{% endhighlight %}

Sieht doch ganz aufgeräumt aus, oder? Die beiden Wörter reduce und range sind allseitsbekannte Allzweckwaffen in jedem Arsenal eines = Vermeiders. Nur die Klammern am Ende häufen sich, was nicht so gut ist (dafür hat aber noch niemand eine Lösung gefunden).

(Bitte den Rest der jetzt noch kommt ignorieren.)

<span style="font-size:10px">
Na gut, nachdem du bis hierher gelesen hast: ich geb zu, ich hab nicht die ganze Wahrheit abgedruckt. Das ist aber jetzt wirklich nur mehr für Spezialisten, also für die Leute, die den Code tatsächlich im Browser laufen lassen wollen. Die müssen vorher noch folgenden Code in die Console reinkopieren (ist für die Allzweckwaffen reduce und range):
</span>

<span style="font-size:10px">
function range(s, e) { return Array.from({length: e-s}, (function(_, i) { return s+i;}))}  
function reduce(r, c, f) { return c.length < 1 ? r : reduce(f(r, c[0]), c.slice(1), f)}
</span>

So jetzt hab ich aber wirklich fertig.
