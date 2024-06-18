function myF(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
  console.log(arguments);
  for (let i = 0; i < args.length; i++) {
    console.log("value is " + args[i]);
  }
}
myF("a", "b", "c", 1, 3, 2, 4, 5, 6);
