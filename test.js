let n = 5;

let triangle = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n - i; j++) {
        triangle +=" ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        triangle += "*";
    }
    triangle += "\n";
}
console.log(triangle);











