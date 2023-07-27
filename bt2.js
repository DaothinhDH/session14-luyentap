// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
let arr = [];
let max = 0;
let vitri = 0;
for (i = 0; i < 10; i++) {
    let number = +prompt(`Hãy nhập số nguyên theo thứ tự ${i + 1}`)
    arr.push(number)
}
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        vitri = i;
    }

}
console.log(`số lớn nhất trong mảng là ${max}`);
console.log(`Vị trí trong mảng là ${vitri}`);
