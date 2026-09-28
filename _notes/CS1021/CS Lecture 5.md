---
title: "CS Lecture 5"
date: 2026-01-28 00:00:00 -0400
class: CS1021
---

Class: CS 1021C - Computer Science 1 - Lecture<br>
Subject/Topics: Computer Science<br> Computer Science 1<br>
Date: 01/28/2026
Teacher: William Hawkins<br>

```cpp
#include <iostream>

int main() {
	float mealPrice;
	double tipAmount;
	
	std::cout << "What is the price of the meal? ";
	std::cin >> mealPrice;
	std::cout << "\nWhat is the tip amount? ";
	std::cin >> tipAmount;
	
	int tip = mealPrice * tipAmount;
	
	std::cout << "\nA " << (tipAmount * 100) << "% tip on a $" << mealPrice << " meal is $" << tip << ".\n";
	
	return 0;
}
```

- Literals are anything written in the program that will appear in the compiled code.
- Operators designate what operation to perform.
- Operands are the data for the operation.
- << are stream insertion operators. 
- >> are stream extraction operators.