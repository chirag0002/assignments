function clock() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
}

setInterval(clock, 1000);