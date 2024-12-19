let overral = 'x ';
for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
        if(i == 0 && k > 0){
          overral += '{' + k + '}';
        }
        else if (k == 0 && i > 0){
          overral += '{' + i + '}';
        }
        else if(i > 0 && k > 0){
        overral += (i * k) + ' ';
        }
    }
    overral += '\n'
}

console.log(overral);