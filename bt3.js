// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
let arr = []
let value = 0;
for (i = 0; i < 10; i++) {
    let number = +prompt(`Hãy nhập số nguyên theo thứ tự ${i + 1}`)
    arr.push(number)
}
let max = arr[0];
for (i = 0; i < arr.length; i++) {
    value += arr[i]
    if (arr[i] > max) {
        max = arr[i];
    }
}
let tb = value / (arr.length + 1)
console.log(`giá trị lớn nhất trong mảng là ${max} `);
console.log(`giá trị trung bình của các phần tử trong mảng là ${tb}`);
