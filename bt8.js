// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

// let chuoi = prompt("Hãy nhập 10 số nguyên bất kì  cách nhau bằng dấu phẩy")
// let arrlnt = chuoi.split(",")

// let ketqua = arrlnt.sort(function (a, b) {
//     return b - a;
// })
// console.log(ketqua);


// let arr = []
// for (i = 0; i < 10; i++) {
//     let number = +prompt("Hãy nhập số nguyên bất kì")
//     arr.push(number)
// }
// let ketqua = arr.sort(function (a, b) {
//     return b - a;
// })
// console.log(ketqua);




let arr = []
for (i = 0; i < 10; i++) {
    let number = +prompt(`Hãy nhập số nguyên tu thu ${i+1} đến thứ 10 `)
    arr.push(number)

}
for (i = 0; i < arr.length -1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j+1]) {
            let a = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = a
        }

    }
}
console.log(arr);

