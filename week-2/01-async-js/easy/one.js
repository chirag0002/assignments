let counter = 0;

function call() {
  console.log(counter);
  counter++;
}

setInterval(call, 1000);
