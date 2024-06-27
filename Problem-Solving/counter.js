let count=-1;
var createCounter = function(n) {
    
    return function() {
        count++;
       return n+count;
    };
};

  const counter = createCounter(-2)
  console.log(counter()) // 10
  console.log(counter()) // 11
  console.log(counter()) // 12
  console.log(counter())
  console.log(counter())
  console.log(counter())
