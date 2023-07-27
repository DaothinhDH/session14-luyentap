// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.()
//         Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không?
//         Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
        
        let arr = [];
        let number = 10;
        for (i = 1; i <= number; i++) {
            let element = +prompt(`nhập vào số phần tử thứ ${i}: `);
            arr.push(element);
        }
        console.log(arr);
        let num = +prompt("Nhập vào 1 số bất kì:");
        let check = false;
        for (j = 0; j < arr.length; j++) {
            if (num == arr[j]) {
                check = true; //tồn tai trong mảng
                break;
            }
        }
        if (check) {
                alert("Number X is in the array");
            } else {
                alert("Number X is not in the array");
            }