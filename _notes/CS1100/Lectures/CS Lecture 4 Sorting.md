---
title: "CS Lecture 4 Sorting"
date: 2025-09-22 00:00:00 -0400
class: CS1100
---

Class: CS 1100 - Intro To Computer Science<br>
Subject/Topics: Computer Science<br>
Date: 09/22/2025
Teacher: Raj Bhatnagar<br>

# Complexity

## Sorting

It's everywhere. i.e. Google or Amazon. Gives each item returned by a query a score and then sorts them by which will be most useful.

Ascending - smallest to largest
Descending - largest to smallest

### Selection Sort

Take the numbers and find the smallest value and bring it to the front of the list.
Assume that the first value is the smallest value and then check whether the next one is smaller if so it is now the smallest if not it moves on to the next one.
Once it finds the smallest one the first index is swapped with the smallest value. They take each others index.
This process goes on for the next index in the array until the array is fully sorted.
Take note of # of comparisons and # of moves.

### Insertion Sort

It assumes that there is only one number in the list and it is already sorted. Then it adds the second value to the list and compares the first and second value and moves them if needed.
Picking up an initial number counts as a move.
Once there is a number that is smaller than the list it moves all that are larger to the right and then inserts it into the correct position.

## Bubble Sort

It compares in groups of two i.e. the first two are compared and if they are correct they are left alone. If they aren't in the right order then they are swapped it then takes the second one and compares it to the second one. It then goes through the whole list. It then starts over and does the process again with the new list until the whole array is sorted (it knows this if no swaps happen on that iteration). Bubble sort is good when the list is fully sorted or mostly sorted. If not it will take a long time compared to other algorithms.

<div class="note-pdf-embed">
	<iframe class="note-pdf-frame" src="/assets/attachments/Lec6-sorting-classNotes.pdf" title="Lec6-sorting-classNotes.pdf"></iframe>
	<p><a href="/assets/attachments/Lec6-sorting-classNotes.pdf" target="_blank" rel="noopener">Open Lec6-sorting-classNotes.pdf in a new tab</a></p>
</div>
