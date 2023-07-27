//Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
//Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
//Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.
//Hiển thị mảng c.
const x = 10;
let a = [];
let b = [];
let c = [];
for (i = 0; i < x; i++) {
    let num1 = +prompt("Nhập 10 số vào mảng a:");
    a.push(num1);
}
for (j = 0; j < x; j++) {
    let num2 = +prompt("Nhập 10 số vào mảng b:");
    b.push(num2);
}
for (k = 0; k < 10; k++) {
    c.push(b[k]);
    c.push(a[k]);
    // c = a;
}
// c = a.concat(b);
console.log(c);
    </script >