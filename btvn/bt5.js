//5. Viết một chương trình nhập vào 2 chuỗi, 
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

let chuoi1 = prompt("Nhập vào chuỗi 1");
let chuoi2 = prompt("Nhập vào chuỗi 2");
console.log(chuoi1);
console.log(chuoi2);

// cach 1:
// if (chuoi1 === chuoi2) {
//     console.log("hai chuỗi giống nhau");
// } else {
//     console.log("hai chuỗi không giống nhau");
// }

// cach 2
if (chuoi1.length !== chuoi2.length) {
    console.log("Hai chuoi khong giong nhau");
} else {
    let check = true
    for (let i = 0; i < chuoi1.length; i++) {
        if (chuoi1[i] != chuoi2[i]) {
            check = false
            break
        }
    }
    let mess = check ? "Hai chuoi giong nhau" : "Hai chuoi khong giong nhau"
    console.log(mess);
}