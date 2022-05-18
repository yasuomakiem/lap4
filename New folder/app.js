var hocsinh = /** @class */ (function () {
    function hocsinh(ten, tuoi, diachi, sex, colat) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diachi = diachi;
        this.sex = sex;
        this.colat = colat;
    }
    hocsinh.prototype.showStudent = function () {
        var _br = "\n        <tr>            \n            <th>".concat(this.ten, "</td>\n            <th>").concat(this.tuoi, "</td>\n            <th>").concat(this.diachi, "</td>\n            <th>").concat(this.sex, "</td>\n            <th>").concat(this.colat, "</td>\n    </tr>\n        ");
        document.getElementById('cccc').innerHTML += _br;
    };
    return hocsinh;
}());
var hs1 = new hocsinh('A', 18, 'HN', true, "B1");
var hs2 = new hocsinh('A', 18, 'HN', true, "B1");
var hs3 = new hocsinh('A', 18, 'HN', true, "B1");
hs1.showStudent();
hs2.showStudent();
hs3.showStudent();
