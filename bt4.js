// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên
//  và đảo ngược các phần tử trong mảng đó.

let arr = ["21","22","23","24","25","26","27","28"];
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}
console.log(arr);
