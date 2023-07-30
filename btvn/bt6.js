// Bài 6: Viết chương trình nhập vào một mảng ký tự, 
// tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
let arr = ["a", "b", "-", "c", "-", "d"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
        arr[i] = "_";
    }
}
console.log(arr.join(""));