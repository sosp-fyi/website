---
title: "CS Lecture 6"
date: 2026-01-30 00:00:00 -0400
class: CS1021
---

Class: CS 1021C - Computer Science 1 - Lecture<br>
Subject/Topics: Computer Science<br> Computer Science 1<br>
Date: 01/30/2026
Teacher: William Hawkins<br>

# Rules for Programmer Defined Identifiers
1. Must start with a letter or underscores
2. Can contain number, letters, and underscores
3. Cannot overlap reserved/keywords 

Reserved/keywords - words whose meaning is fixed by the language.

# Types
Type (informally): category

| Name        | Can Hold              | Examples                 |
| ----------- | --------------------- | ------------------------ |
| int         | whole numbers (+ & -) | 5, -6                    |
| double      | decimals              | 9.5, -22.3               |
| bool        |                       | true, false              |
| char        | single characters     | 'a', '!'                 |
| std::string | strings               | "string", "Hello, World" |
The first four are fundamental (primitive) types. They are built into the language. String is not.

Type (formally):
1. range of valid values
2. range of valid operations

Categorizing programming languages and their type systems:
- Strongly typed - All errors of incorrect operations on types are detected 100% of the time
- Weakly typed - A not strongly typed language