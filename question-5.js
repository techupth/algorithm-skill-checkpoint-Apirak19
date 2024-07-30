/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:
The Big O notation for sortProductsByPrice is O(n^2) because the function has two nested loops. The outer loop iterates through every member of the products array (n), and in every outer loop iteration, the inner loop iterates through every member of the products array (n-1). Therefore, the Big O notation is n * (n-1), equal to n^2 - n, which is O(n^2).

*/
