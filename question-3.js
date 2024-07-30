/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
The Big O notation for findStudentById is O(n) because the function has to iterate through every members (n) of the students array to find the student with the given id.

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
The Big O notation for findProductPrice is O(log n) because the function uses binary search to find the product which divides the search interval in half at each step.

*/

/* 
Which function is more efficient and why?
Answer:
It depends on the input array, if it is sorted, findProductPrice is more efficient with O(log n) time complexity. However, it cannot function properly if the input array is not sorted. On the other hand, findStudentById has O(n) time complexity which is less efficient than findProductPrice. However, findStudentById can function properly regardless of the input array is sorted or not.

*/
