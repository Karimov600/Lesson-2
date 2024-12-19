const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((i) => {
    arr.forEach((j) => {
        console.log(`${i} * ${j} = ${i * j}`);
    });
});
