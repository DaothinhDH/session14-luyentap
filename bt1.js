// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

let arr = [];
let cout =0;
for (i = 0; i < 10; i++) {
    let number = +prompt(`Hãy nhập số nguyên theo thứ tự ${i + 1}`)
    arr.push(number)
}
for (i = 0; i < arr.length; i++) {
    if (arr [i] >= 10) {
        cout++;
    }
}
console.log("có tất cả những số lớn hơn 10 là:"+cout);