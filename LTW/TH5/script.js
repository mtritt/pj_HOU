let danhSachHang = ['intel' , 'AMD' ,'Apple Silicon'];
const ddlDanhsachhangsx = document.getElementById('ddlDanhsachhangsx');

function HienThiDanhSach(){
    ddlDanhsachhangsx.innerHTML = '';
    for (let i = 0; i < danhSachHang.length;i++){
        let option = document.createElement('option');
        option.value = danhSachHang[i];
        option.text = danhSachHang[i];
        ddlDanhsachhangsx.appendChild(option);
    }
}

HienThiDanhSach();

const btnThem = document.getElementById('btnThem');
const btnXoa = document.getElementById('btnXoa');
const btnLuu = document.getElementById('btnLuu');
const rowThemmoi = document.getElementById('rowThemmoi');
const txtHang = document.getElementById('txtHang');

// 1.them
btnThem.addEventListener('click', function(){
    rowThemmoi.style.display = 'flex';
    btnLuu.style.display = 'inline-block';
    btnThem.style.display = 'none';
    txtHang.focus();
});

// 2.luu 
btnLuu.addEventListener('click', function(){
    let tenHangMoi = txtHang.value.trim();
    if (tenHangMoi === ''){
        alert('nhap du lieu');
        txtHang.focus();
        return;
    }
    danhSachHang.push(tenHangMoi);
    HienThiDanhSach();
    ddlDanhsachhangsx.value = tenHangMoi;

    // cap nhat 
    resetGiaoDien();
});

// 3.huy 
btnHuy.addEventListener("click", function() {
    resetGiaoDien();
});

function resetGiaoDien(){
    rowThemmoi.style.display = 'none';
    btnLuu.style.display = 'none';
    btnThem.style.display = 'inline-block';
    txtHang.value = '';
}