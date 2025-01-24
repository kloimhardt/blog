---
layout: post
title:  "In search for a special physical dialogue"
date:   2025-01-22 06:00:00 +0100
categories: Physik
---
Recently, a [reddit post](https://www.reddit.com/r/Physics/comments/1i61wk2/books_of_historial_importance_for_physics/) got my attention. It was a request for seminal works (books, papers) in physics, "books or articles that were often used for the study of physics in the beginning of each area", that enable "to enter the minds of these scientists and make sense of the dialogue going on in each era":

---
The post goes the following:

I am trying to compile a list of books or articles that were often used for the study of physics in the beginning of each area. For example, it seems to me that the work "On Floating Bodies" authored by Archimedes is the foundation of hydrostatic and hydrodynamic, the work "Physics" by Aristotle is the very work where the discussion of nature became serious (one could argue for other greeks, still, it took Newton to take the crown of Aristotle), Opticks by Newton appears to be the foundation of optics as we understand today, with some debated happening against Huygens' Traté de la Lumière, some contributions coming from De vi Centrifuga and Horologium Oscillatorium, the Principia is the foundation of classical physics as we understand today. From thermodynamics and onwards, however, things becomes unclear, because the works are all scattered. Einstein is the father of relativity, Max Planck introduced the concept of quanta to explain the ultraviolet catastrophe, but he did not formalize quantum physics, that was done by Heinsenberg later on (there is a small book called "The Physical Principles of the Quantum Theory". Dirac published a book that appears to attempt to compile all the findings in quantum physics called "The Principles of Quantum Mechanics", but i don't know if i would call it a modern equivalent of the Principia. I am not sure whether Dirac is the foundation for quantum field theory. To be clear, my main objective is to be able to enter the minds of these scientists and make sense of the dialogue going on in each era, that is, the history of physics.

---
One answer to this post was:

I once tried to do what you are attempting, and found it unviable. For example, Archimedes does not deal with hydrodynamics (fluid motion) at all, and it is difficult to point to the "beginning" of modern hydrodynamics, as each candidate book or paper (say, from Mariotte 1686 to Prandtl 1904) has deficiencies that were addressed by later writers. Rather, our understanding grew gradually over time. Similar with E&M, thermo & stat mech, and even classical mechanics (you could add Galileo's Two New Sciences, Euler's papers on rigid bodies, Lagrange's Analytical Mechanics, and the papers of Hamilton and Jacobi to Newton's Principia as foundational documents). For optics, one could argue the real foundation of today's understanding is Maxwell's Treatise of Electricity and Magnetism...
However, between the 2 publishers Dover and Prometheus, you can find paperback reprints of many foundational works on par with those you mentioned, and you could build an impressive survey of the history of physics by starting with those classics.

---
My answer was:
I also attempted something like this. To this aim, I started reading "A History of Mechanics" by Rene Dugas, then "A History of the Theories of Aether and Electricity" by E.T. Whittaker, "The Sleepwalkers" by Arthur Koestler. Could not pinpoint the beginnings really.

Concerning QM, I read Dirac's "Principles of QM" and I think it is really a beginning of QM. But so is Heisenbergs "Quantum-Theoretical Re-interpretation of Kinematic and Mechanical Relations" and Schrödingers  "Quantisierung als Eigenwertproblem"-series (careful, the beautiful derivation of his equation is in the second paper, the first just states his equation with a to me complete unintelligible reasoning). But that is all predated by deBroglie's Doctoral Thesis. Very helful are the volumes "Historical Development of QT" by Jagish Mehra and H. Rechenberg.

Statistical Mechanics: maybe Boltzmanns ["Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen"](https://galileo-unbound.blog/wp-content/uploads/2020/05/boltzmann-1872.pdf) ist a beginning, but then maybe Gibb's book "Elementary Principles in Statistical Mechanics" really is.

Optics: In geometrical Optics, arguably it is really Hamilton who made the groundbraking work. Wave Optics, is it Huygens, Fresnel or Maxwell? A hint might be in Max Born's "Principles of Optics: Electromagnetic Theory of Propagation ... of Light", the earliest comprehensive book I found on the subject (but that does not mean much here).Then I tried to narrow the focus on the notion of "Photon" specifically. Skimmed "The lesser known Albert Einstein" by Luis Navarro Veguillas, "Photons, The History and Mental Models of Light Quanta", by Klaus Hentschel, where it is made clear that "Photon" changed meaning over time and is not unambiguously defined even today. After some time, I found a personal solution to the origin of the Photon: the last of Einstein's three papers on statistical mechanics, it pre-dates his famous Nobel-winning "On a heuristic point of view ...". The Photon is invented on the last two pages of the following paper, they are simple and more than well worth a read: [GENERAL MOLECULAR THEORY OF HEAT](https://einsteinpapers.press.princeton.edu/vol2-trans/90).

---
What I did not write for reasons of brevity:
I think one has to tackle that subject from the point of view of questions and peroblems: 1) "When was the value of the absolute Zero Temperature discovered?" or "What were the steps to Planck's formula for the tempreature-wavelength relation".

---
Concerning 1), the absolute zero, the Wikipedia article about the law now named after Gay-Lussac is illuminating:

In two of a series of four essays presented between 2 and 30 October 1801, John Dalton demonstrated by experiment that all the gases and vapours that he studied expanded by the same amount between two fixed points of temperature. The French natural philosopher Joseph Louis Gay-Lussac confirmed the discovery in a presentation to the French National Institute on 31 Jan 1802, although he credited the discovery to unpublished work from the 1780s by Jacques Charles. The basic principles had already been described by Guillaume Amontons and Francis Hauksbee a century earlier.

Guy-Lussac's value was -266°C for the absolute zero temperature. Today's value is -273,15°C. However, a very interesting work was published by a German guy named Johann Heinrich Lambert in his 1777 book "Pyrometrie", where he already came to a value which now reads as -272°C. I have reproduced this value based on the data in his respective book "Pyrometrie" in a [Jupyter notebook](https://github.com/kloimhardt/babashka-snipets/blob/master/Jupyter-notebooks/lambert.ipynb).

---
Conerning 2), on step towards Planck was Stefans T^4 power law. Also have a [notebook for this power law](https://github.com/kloimhardt/babashka-snipets/blob/master/Jupyter-notebooks/stefan.ipynb).

---
Another milestone was deBroglie. His relation between momentum and wavelength was a breakthrough. The formula still holds. But the thing is: his reasoning played no role in the further development of QM. His physical intuition was ingenious: the electron moving around the nucleus is accomanied by a wave whose wavelength must be an integer multiple of the radius. It is often drawn on blackboards for students of QM. But no more.

I wander why the "waves must fit" idea never got anywhere further than to his derivation of momentum-wavelength relation and calculation of Bohr's radius. Something must be true about this. But it could not be developped further. Quantisation comes from bound solutions to the wave equation, or from the algebraic properies of the Hamilton operator. However you want to see it. DeBroglie's idea plays no role in quantisation.

Maybe he did the right calculation, but calculated in reality something else, the letters in his formula need other interpretations? But what was he really calculating then? Just in case, I made [notebook on deBroglie](https://kloimhardt.github.io/blog/hamiltonmechanics/2024/09/13/debroglie.html).

