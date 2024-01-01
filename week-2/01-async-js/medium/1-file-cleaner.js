const fs = require('fs');

fs.readFile('/home/chirag0002/Projects/assignments/week-2/01-async-js/medium/test.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
    data1= data.replace(/\s+/g, ' ');
    fs.writeFile('/home/chirag0002/Projects/assignments/week-2/01-async-js/medium/test.txt', data1, (err) => {
        if (err){
            console.log(err);
            return;
        }
    });
    console.log(data1);
});
