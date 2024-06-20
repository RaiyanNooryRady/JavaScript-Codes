/**
 * Two Point Distance
Problem Statement
Write a program to calculate distance between two points.

Input
The input consists of four double numbers. the first two numbers indicate the co-ordinate of first point and the second two numbers indicate the co-ordinates of second point.

Output
Output is the distance of two points.

Constraints
The program should print the number with exactly two decimal points.
Example:
Enter the co-ordinates of two points.

Input:
0 0
2 2

Note: use Ctrl+D to end input

Output:
Distance: 2.83

 */

function main(input) {
  let a = ["", "", "", ""];
  let j = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " " && input[i] != "\n") {
      a[j] += input[i];
    } else j++;
  }
  let x1 = Number(a[0]);
  let y1 = Number(a[1]);
  let x2 = Number(a[2]);
  let y2 = Number(a[3]);
  let res = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  res = Math.sqrt(res);
  res = res.toFixed(2);
  console.log(`Distance: ${res}`);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
