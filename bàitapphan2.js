// 1. Viết chương trình khởi tạo mảng 2 chiều,
// gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
//  ];
//  "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// Gợi ý: Sử dụng vòng lặp for lồng nhau
// ======================================
// let arr = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (i = 0; i < arr.length; i++) {
//     console.log(`row ${i}`)
//     for (j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }
// ========================================
// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự [ 'c', 's', 'c', '2', '6', '1' ]
// sau khi thực hiện đảo ngược sẽ là "162csc".
// ==========================================
// let n = ['c', 's', 'c', '2', '6', '1']
// //cach 1:
// // console.log(n.reverse().join(""));
// // ket qua khi: n.reverse() : ['1', '6', '2', 'c', 's', 'c']
// // ket qua khi: .join(""): "162csc"

// // cach 2:
// let ketqua = ""
// for (let i = n.length - 1; i >= 0; i--) {
//     ketqua += n[i]
// }
// console.log(ketqua);
// ==========================================

// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.
// ===========================================
// let kyTu = ["n", "0", "g", "6", "3"];
// for (i = 0; i < kyTu.length; i++) {
//     if (parseInt(kyTu[i]) === 0) {
//         console.log(kyTu[i]);
//     } else if (!parseInt(kyTu[i])) {
//         continue;
//     } else {
//         console.log(kyTu[i]);
//     }
// }

// // cach 2
// for (let i = 0; i < kyTu.length; i++) {
//     if (kyTu[i] < 0 || kyTu[i] >= 0) {
//         console.log(kyTu[i]);
//     }
// }
// ===========================================

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let chuoi = prompt(`nhap mot chuoi`); // VD:chuoi = "    nguyen   van        w"

// let count = 0
// chuoi = chuoi.split(" ") // chuoi = ["", "", "", "", "nguyen", "", "", "", "van", "", "w"]
// console.log(chuoi);
// // vòng lặp đếm số từ đón nhận được sau khi split(" ")
// for (let i = 0; i < chuoi.length; i++) {
//     // nếu không phải chuỗi trống thì tăng count lên
//     if (chuoi[i] != "") {
//         count++
//     }
// }
// console.log(count);

// ===========================================

//5. Viết một chương trình nhập vào 2 chuỗi,
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// let chuoi1 = prompt("Nhập vào chuỗi 1");
// let chuoi2 = prompt("Nhập vào chuỗi 2");
// console.log(chuoi1);
// console.log(chuoi2);

// // cach 1:
// // if (chuoi1 === chuoi2) {
// //     console.log("hai chuỗi giống nhau");
// // } else {
// //     console.log("hai chuỗi không giống nhau");
// // }

// // cach 2
// if (chuoi1.length !== chuoi2.length) {
//     console.log("Hai chuoi khong giong nhau");
// } else {
//     let check = true
//     for (let i = 0; i < chuoi1.length; i++) {
//         if (chuoi1[i] != chuoi2[i]) {
//             check = false
//             break
//         }
//     }
//     let mess = check ? "Hai chuoi giong nhau" : "Hai chuoi khong giong nhau"
//     console.log(mess);
// }
// ====================================================

// Bài 6: Viết chương trình nhập vào một mảng ký tự, 
// tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
// let arr = ["a", "b", "-", "c", "-", "d"];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//         arr[i] = "_";
//     }
// }
// console.log(arr.join(""));
// =============================================