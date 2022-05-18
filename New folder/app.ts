var bcs = ''
class hocsinh {
    ten: string;
    tuoi: number;
    diachi: string;
    sex: boolean;
    colat: string;
    constructor(ten: string, tuoi: number, diachi: string, sex: boolean, colat: string) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diachi = diachi;
        this.sex = sex;
        this.colat = colat;

    }
    showStudent(): void {
        bcs +=
        `
        <tr>            
            <th>${this.ten}</td>
            <th>${this.tuoi}</td>
            <th>${this.diachi}</td>
            <th>${this.sex}</td>
            <th>${this.colat}</td>
    </tr>
        `
       
    }
}

var hs1 = new hocsinh('A', 18, 'HN', true, "B1");
var hs2 = new hocsinh('A', 18, 'HN', true, "B1");
var hs3 = new hocsinh('A', 18, 'HN', true, "B1");

hs1.showStudent();
hs2.showStudent();
hs3.showStudent();
var aaaa = document.querySelector('#cccc');
 aaaa.innerHTML = bcs;



