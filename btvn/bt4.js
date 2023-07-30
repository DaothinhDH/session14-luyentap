// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
let chuoi = prompt(`nhap mot chuoi`); // VD:chuoi = "    nguyen   van        w"

let count = 0
chuoi = chuoi.split(" ") // chuoi = ["", "", "", "", "nguyen", "", "", "", "van", "", "w"]
console.log(chuoi);
// vòng lặp đếm số từ đón nhận được sau khi split(" ")
for (let i = 0; i < chuoi.length; i++) {
    // nếu không phải chuỗi trống thì tăng count lên
    if (chuoi[i] != "") {
        count++
    }
}
console.log(count);