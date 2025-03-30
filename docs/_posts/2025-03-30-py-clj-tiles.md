---
layout: post
title:  "Graphical code exploration"
date:   2025-03-30 06:00:01 +0100
categories: Software
---
In the following we compare graphical code representations between Python and Clojure.

## Python
If in [BlockPy](https://think.cs.vt.edu/blockpy/load) you type

```
(pow(x, 4) for x in (1, 2, 3))
```

you see

![Python-for](/blog/images/python_for_block.png)

## Clojure
If in [clj-tiles](https://kloimhardt.github.io/cljtiles.html) you type

```
(->> (pow x 4) (for [x [1 2 3]]))
```

you see

![Clojure-for](/blog/images/clojure_for_block.png)

## Discussion

The advantage of the Clojure representation is that there are only two types of blocks. The first one represents a list, e.g. `(for ...)`, the other a vector `[... ...]`:

![Clojure-for](/blog/images/clojure_lv_block.png).

In the case of the list, it does not matter if it begins with `for` or `pow`, the type of block is the same. Also the number of parameters or slots for a list or vector does not matter, the type is the same.

One advantage of having only two types of blocks to represent code is that the Clojure representation does not need any parentheses within the graphics.

It is often said that Lisp languages are awkward because of the wrong place of the `()`. And arguably, the Python text is easier to read because `for` is a reserved word  which does not have any `()` attached to it.

But for graphical representations, reserved words are a disadvantage. Because Python distinguishes syntactically between functions and statements, one needs, as opposed to Clojure, many different types of blocks. This means that eventual parentheses need to show up explicitly. This makes the graphics for Python comparably cluttered.

Because in Clojure, on the other hand, one can write almost any program with the minimal syntax of vectors and lists, its graphical representation can for all practical purposes be held very clean.

## Higher order functions
The Python code
```
this_returns_a_function("three=")(3)
```
renders neatly in BlockPy

![Python-higher](/blog/images/python_higher_block.png)

For the respective Clojure code

```
((this-returns-a-function "three=") 3)
```
we actually had to introduce a third type of block showing the pipe symbol `|` so that confusions with vectors are avoided:

![Clojure-higher](/blog/images/clojure_higher_block.png)

We think this is neat too, also because of the unique beige colour.

## Let blocks and maps in Clojure

![Clojure-higher](/blog/images/clojure_let_block.png)

Because the standard `(let [x 2 y (pow x 3)] y)` does not look great in graphics (left side), I'd suggest to introduce some `let-p` macro which reads as `(let-p (x 2) (y (pow x 3)) y)`. We think that the respective graphics on the right hand side indeed looks nice.

Concerning hash-maps, there certainly can be found one solution or another. One could maybe think along the lines of the presented solution for higher order functions, another one can be found hidden in the clj-tiles pages. The question here is if one really wants to do keyword destructuring within blocks. My answer is that this should be avoided. Unless having a really good reason, using a list starting with `hash-map` should be sufficient.

## Conclusion

I would go as far as to say: if the graphical representation of a program cannot be held clean, it has no practical purpose and one should either simplify the code snipped to be presented or switch language altogether. Thus I suggest to avoid striving for completeness of syntax coverage but keep the block representation of Clojure as simple as presented with all in all just three types of blocks.
