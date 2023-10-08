const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    const jsondata = JSON.parse(data);
    const outdata = jsondata.map((obj) => `${obj.exchangedate}:${obj.rate}\n`);
    fs.writeFile('output.txt', outdata.join(''), (err) => {
        if (err===null) {
            console.log('File was succesfully created!');
        } else {
            console.log(err);
        }
    });
});


