// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. 
// Ví dụ, nếu một mảng chứa các ký tự [ 'c', 's', 'c', '2', '6', '1' ]
// sau khi thực hiện đảo ngược sẽ là "162csc".

let n = ['c', 's', 'c', '2', '6', '1']
//cach 1:
// console.log(n.reverse().join(""));  
// ket qua khi: n.reverse() : ['1', '6', '2', 'c', 's', 'c']
// ket qua khi: .join(""): "162csc"

// cach 2:
let ketqua = ""
for (let i = n.length - 1; i >= 0; i--) {
    ketqua += n[i]
}
console.log(ketqua);