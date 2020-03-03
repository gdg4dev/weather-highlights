

const add = (a, b, fnc) => {
    setTimeout(() => {
        const c = a + b;
        fnc(c);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})