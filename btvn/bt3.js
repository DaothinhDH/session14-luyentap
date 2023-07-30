// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

let kyTu = ["n", "0", "g", "6", "3"];

// cach 1
for (i = 0; i < kyTu.length; i++) {
    if (parseInt(kyTu[i]) === 0) {
        console.log(kyTu[i]);
    } else if (!parseInt(kyTu[i])) {
        continue;
    } else {
        console.log(kyTu[i]);
    }
}

// cach 2
for (let i = 0; i < kyTu.length; i++) {
    if (kyTu[i] < 0 || kyTu[i] >= 0) {
        console.log(kyTu[i]);
    }
}