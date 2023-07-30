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
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (i = 0; i < arr.length; i++) {
    console.log(`row ${i}`)
    for (j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}