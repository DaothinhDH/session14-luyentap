//   Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//         Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không ? Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
//         gợi ý: việc xóa ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó

        const a = 10;
        let arr = [];
        let arrDelete = [];
        for (let i = 0; i < a; i++) {
            let n = +prompt(`Nhap phan tu thu ${i} cua mang 10 phan tu`);
            arr.push(n);
        }
        let num = +prompt(`Nhap 1 so nguyen de kiem tra`);
        let check = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == num) {
                check = false;
            } else {
                arrDelete.push(arr[j]);
            }
        }
        if (!check) {
            arr = arrDelete;
        } else {
            alert(`Gia tri ${num} ko ton tai`);
        }
        console.log(arrDelete);