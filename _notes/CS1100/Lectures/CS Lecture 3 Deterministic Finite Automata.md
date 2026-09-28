---
title: "CS Lecture 3 Deterministic Finite Automata"
date: 2025-09-15 00:00:00 -0400
class: CS1100
---

Class: CS 1100 - Intro To Computer Science<br>
Subject/Topics: Computer Science<br>
Date: 09/15/2025
Teacher: Raj Bhatnagar<br>

Deterministic Finite Automata (DFA) - a finite state machine that either accepts or rejects a string

Non-deterministic is a percent chance of going to a different state whereas deterministic is seeing a symbol and going to only one state.

30,000 states for java 
Finite because the amount of symbols is non-infinite.
Double circle is the accepted state

The language of the DFA is every accepted string.

![Basic DFA Diagram.png](/assets/attachments/Basic%20DFA%20Diagram.png)

![DFA With Trap State.png](/assets/attachments/DFA%20With%20Trap%20State.png)
This allows for infinite a's but a b appears its accepted if an a or b appears then it will always be rejected
L = {a $^n$ b : n $>=$ 0}

![Example of DFA Even Odd Input.png](/assets/attachments/Example%20of%20DFA%20Even%20Odd%20Input.png)
All even numbers are accepted.

If looking for a virus you can scan the binary of the exe and if there are matches with known virus then it goes into an accepted state.

### Formal Definition
![Formal Definition of DFA.png](/assets/attachments/Formal%20Definition%20of%20DFA.png)

