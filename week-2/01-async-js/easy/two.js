let counter = 0;

function call() {
  console.log(counter);
  counter++;

  setTimeout(call, 1000);
}

call();
