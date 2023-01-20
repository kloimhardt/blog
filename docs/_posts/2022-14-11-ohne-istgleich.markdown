---
layout: post
title:  "Programme ohne Istgleichzeichen ="
date:   2022-11-14 00:00:01 +0100
categories: Software
---
Hier dreht sich alles um die Fakultät von fünf. Falls du dich nicht dran erinnern kannst, dass du 5! irgendwie schon mal auf deinem Laptop programmiert hast, muss ich ehrlich sein und zugeben, dass der Text für dich nicht gut verständlich sein wird.

Ich stelle fest, dass 5! wie folgt berechnet wird:

```javascript
2*3*4*5
```

zwei mal drei ist sechs, mal vier ist 24, mal fünf ist 120.

In Javascript kann man die Sache in folgenden Programmzeilen codieren:

```javascript
x=2;
i=3;
while (i<6) { x=x*i; i=i+1; }
x;
```

Das lässt sich leicht überprüfen, in meinem Firefox gehe ich auf Tools->Browser Tools->Web Developer Tools und kopiere die obigen Programmzeilen rein. Drücke Enter und voilà: hundertzwanzig steht da.

Falls du obigen Programmzeilen so halbwegs verstehst, dann ist da eine Sache, die du irgendwann mal schlucken musstest. Diese Sache ist mittendrin:

```javascript
i=3;
i=i+1;
```

Das i=3 geht ja noch, aber beim i=i+1 stellt’s jedem beim erstenmal Hinschauen die Haare auf. Weil das i links vom Istgleich steht und rechts davon auch das i. Natürlich weisst du, dass hinterher i gleich 3+1 also 4 ist, du hast dich schon so dran gewöhnt, aber am Anfang wars schwer zu kapieren was da vor sich geht.

Es ist so: das i ist wie eine Art Eimer, der am Anfang die Zahl drei enthält, die der Computer da rausnimmt, sodass der Eimer kurz leer ist. Dann wird, quasi in der Luft, eins dazugezählt und die resultierende vier wieder in den Eimer reingestopft. Ein bisschen Dings das Ganze.

Der Kernpunkt ist dieses Istgleichzeichen =. Wenn man das = loswerden könnt, dann wär die Sache nicht mehr so Dings. So haben sich das ein paar schlaue Leute gedacht. Und ich stimme denen voll zu, ich bin auch gegen = im Code. Die Gründe könnte man weiter ausbreiten, aber im Grunde läufts drauf hinaus, dass es keine Eimer geben soll.

So Code wie oben, mit = drin, nennen wir übrigens prozeduralen Code. Nochmal zur Erinnerung:

```javascript
x=2;
i=3;
while (i<6) { x=x*i; i=i+1; }
x;
```

Der neue Code der schlauen Leute, du musst ihn nicht verstehen, sieht so aus:

```javascript
function f(x,i) {
 return i<6 ? f(x*i, i+1) : x;
}
f(2,3);
```

Dieser Code, wir nennen ihn ab jetzt rekursiv, sieht etwas kompliziert aus. Aber er hat kein = mehr drin. Und er gibt genau das Ergebnis 120, probier’s am Besten selbst aus.

Der Punkt ist der: hat man diese zwei obigen neuen und alten Programmzeilen mal gleichzeitig vor Augen (und du hast sie ja jetzt von mir vor die Augen gekriegt und auch selbst gesehen dass immer 120 rauskommt …)

Also: hat man die obigen Programmzeilen mal vor Augen. Und hat man eine bestimmte Aufgabe erstmal in prozeduraler Form gelöst. Dann lässt sich im Allgemeinen eine rekursive Form recht leicht herstellen. Und zwar ohne wirkliches Verständnis der rekursiven Dinge. Und zwar für sehr sehr viele praktische Beispiele.

Der Trick ist, dass man die x und i und die Zahlen neu umgruppieren muss. Aus while wird return u.s.w. Und der Zweck der Übung: das = wird durch function f ersetzt. Hast du schon rausgekriegt, was wo hingeschoben werden muss? Mit der Zeit kriegt man Übung darin.

Zur Illustration variieren wir die Fakultät von fünf:

```javascript
5*4*3*2
```

Hat man mal die prozedurale Form ausgetüftelt,

```javascript
x=5;
i=4;
while (i>1) { x=x*i; i=i-1; }
x;
```

gelangt man leicht zur rekursiven Form, hat man erst die Umgruppierung geschnallt:

```javascript
function f(x,i) {
 return i>1 ? f(x*i, i-1) : x;
}
f(5,4);
```


Und selbst wenn du die Umgruppierung jetzt nicht sofort aus dem Stand nachvollziehen willst (life is short), so wirst du doch merken, dass es keine Hexerei ist, das = loszuwerden. Und natürlich wird es nach einiger Übung irgendwann mal passieren, dass du dich eines schönen Nachmittags hinsetzt um die Rekursion zu verstehen. Aber selbst das ist dann Babyleicht, wegen der Geübtheit im Umgang.

Zum Abschluss will ich noch den Sündenfall nennen, den all die schlauen Leute begehen, welche die Rekursion erklären. Sie beginnen, so wie ich, mit der Fakultät. Das ist gut. Aber sie präsentieren gleich am Anfang einen Code der folgenden Form:

```javascript
function f(x) {
 return x>1 ? x*f(x-1) : x;
}
f(5);
```

Ich seh schon ein, dass das geil ist, weil man in dieser genialen Form auch gleich noch das i losgeworden ist. Es kommt auch 120 raus, Gottseidank. Und wenn einer das so hinschreibt, kommt er sich gleich selber genial vor, obwohl er sich das sicher nie und nimmer selbst ausgedacht hat.

Nur erweist dieser Hirni der Mission, nämlich das = loszuwerden, einen Bärendienst! Denn diese hyper-rekursive Form hat keine Analogie zur prozeduralen Form! Sie ist furchtbar schwer zu verstehen. Da ist nix mit Umgruppieren. Das schachtelt wie Irrsinn, unverständlich. Und vor allem keine Allzweckwaffe, im Gegensatz zur Form mit dem i. Sollte verboten werden, diese Hyper-Rekursion. Das i tut nicht weh, das = schon.
