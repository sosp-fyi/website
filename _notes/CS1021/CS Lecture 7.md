---
title: "CS Lecture 7"
date: 2026-02-02 00:00:00 -0400
class: CS1021
---

Class: CS 1021C - Computer Science 1 - Lecture<br>
Subject/Topics: Computer Science<br> Computer Science 1<br>
Date: 02/02/2026
Teacher: William Hawkins<br>

```cpp
#include <iostream>

int main() {
	double meal_price{ 0 };
	int tip_percentage{ 0 };
	double tip_amount;

	std::cout << "Enter the meal price: ";
	std::cin >> meal_price;

	std::cout << "Enter the tip percentage: ";
	std::cin >> tip_percentage;

	tip_amount = meal_price * (tip_percentage / 100);
	std::cout << "The tip amount for a $" << meal_price << " with a " << tip_percentage << "% is " << tip_amount << std::endl;

	return 0;
}
```

Expression - any type with a value.