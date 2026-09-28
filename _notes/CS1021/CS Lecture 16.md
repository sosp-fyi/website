---
title: "CS Lecture 16"
date: 2026-03-11 00:00:00 -0400
class: CS1021
---

Class: CS 1021C - Computer Science 1 - Lecture<br>
Subject/Topics: Computer Science<br> Computer Science 1<br>
Date: 03/11/2026
Teacher: Yizong Cheng<br>

I skipped a bunch of lectures, but pointers!

# Pointers
## Addresses
- Each byte of memory has a unique address.
	- `cout << myarray` prints the address of the first byte of the first element of the array with the name myarray.
- Every variable is allocated a section of memory. The compiler translates the variable name to the address when the variable is used in an expression as a rvalue or in an assignment as a lvalue
## The Address Operator &
- The address operator & is a unary operator that returns the memory address of the operand.
	- & has very high precedence and right-to-left associativity

Just look up a video. This was incredibly hard to follow