let sttCounter = 1;
const tbodyCPU = document.getElementById('tbodyCPU');

const txtTenVXL = document.getElementById('txtTenVXL');
const txtHang = document.getElementById('txtHang');
const txtNgayramat = document.getElementById('txtNgayramat');
const txtGia = document.getElementById('txtGia');
const btnThem = document.getElementById('btnThem');
const btnHuy = document.getElementById('btnHuy');

// them 1 dong du lieu 
function themDongDuLieu(tenVXL, hang, ngayRaMat, gia) {
    let giaDinhDang = Number(gia).toLocaleString('vi-VN');
    let tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${sttCounter}</td>
        <td>${tenVXL}</td>
        <td>${hang}</td>
        <td>${ngayRaMat}</td>
        <td>${giaDinhDang}</td>
    `;

    tbodyCPU.appendChild(tr);
    
    sttCounter++;
}

themDongDuLieu("Core i3 7100", "Intel", "20/11/2011", 3450000);
themDongDuLieu("Core i5 4430", "Intel", "21/08/2012", 4530000);

// kiem tra ngay 
function kiemTraNgayHopLe(ngayChuoi) {
    let parts = ngayChuoi.split('/');
    if (parts.length !== 3) return false;

    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);

    let inputDate = new Date(year, month, day);
    let today = new Date();

    if (inputDate.getFullYear() !== year || inputDate.getMonth() !== month || inputDate.getDate() !== day) {
        return false;
    }

    today.setHours(0, 0, 0, 0); 
    if (inputDate > today) {
        return false;
    }

    return true;
}

// them 
btnThem.addEventListener('click', function() {
    let tenVXL = txtTenVXL.value.trim();
    let hang = txtHang.value.trim();
    let ngay = txtNgayramat.value.trim();
    let gia = txtGia.value.trim();

    if (tenVXL === '' || hang === '' || ngay === '' || gia === '') {
        alert("Vui lòng điền đầy đủ thông tin vào các ô!");
        return;
    }

    if (isNaN(gia) || Number(gia) < 0) {
        alert("Giá tiền phải hợp lệ ");
        txtGia.focus();
        return;
    }

    if (!kiemTraNgayHopLe(ngay)) {
        alert("Ngày ra mắt không hợp lệ hoặc lớn hơn ngày hiện tại! Vui lòng nhập đúng định dạng dd/mm/yyyy.");
        txtNgayramat.focus();
        return;
    }

    themDongDuLieu(tenVXL, hang, ngay, gia);

    btnHuy.click(); 
});

// huy 
btnHuy.addEventListener('click', function() {
    txtTenVXL.value = '';
    txtHang.value = '';
    txtNgayramat.value = '';
    txtGia.value = '';
    txtTenVXL.focus();
});