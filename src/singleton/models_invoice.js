import store from '../store/index';
import moment from 'moment-timezone';

var gajitotalUK1 = 0; 
var gajitotalUK2 = 0;
var gajitotalUK3 = 0;
var bpjskesehatan1 = 0;
var bpjstenagakerja1 = 0;
var bpjskesehatan2 = 0;
var bpjstenagakerja2 = 0;
var bpjskesehatan3 = 0;
var bpjstenagakerja3 = 0;
var sehat_uk1;
var sehat_uk2;
var sehat_uk3;
var kerja_uk1;
var kerja_uk2;
var kerja_uk3;
//UK I
store.state.ukone.forEach(e=>{
    return gajitotalUK1 += parseInt(e.gaji_total)
});

store.state.ukone.forEach((e) => {
    return bpjskesehatan1 += parseInt(e.bpjs_kesehatan);
});

store.state.ukone.forEach((e) => {
    return bpjstenagakerja1 += parseInt(e.bpjs_tenagakerja);
  });

sehat_uk1 = store.state.ukone.filter((user) => {
    return user.bpjs_kesehatan != "0";
  });
kerja_uk1 = store.state.ukone.filter((user) => {
    return user.bpjs_tenagakerja != "0";
  });

//UK II
store.state.uktwo.forEach(e=>{
    return gajitotalUK2 += parseInt(e.gaji_total)
});

store.state.uktwo.forEach((e) => {
    return bpjskesehatan2 += parseInt(e.bpjs_kesehatan);
});

store.state.uktwo.forEach((e) => {
    return bpjstenagakerja2 += parseInt(e.bpjs_tenagakerja);
  });
sehat_uk2 = store.state.uktwo.filter((user) => {
    return user.bpjs_kesehatan != "0";
  });
kerja_uk2 = store.state.uktwo.filter((user) => {
    return user.bpjs_tenagakerja != "0";
  });
  //UK III
store.state.ukthree.forEach(e=>{
    return gajitotalUK3 += parseInt(e.gaji_total)
});

store.state.ukthree.forEach((e) => {
    return bpjskesehatan3 += parseInt(e.bpjs_kesehatan);
});

store.state.ukthree.forEach((e) => {
    return bpjstenagakerja3 += parseInt(e.bpjs_tenagakerja);
  });
sehat_uk3 = store.state.ukthree.filter((user) => {
    return user.bpjs_kesehatan != "0";
  });
kerja_uk3 = store.state.ukthree.filter((user) => {
    return user.bpjs_tenagakerja != "0";
  });

var bulans = moment.tz("Asia/Jakarta").format('MMM');
var data = [
    {
        index: "A",
        uraian: "P E L A K S A N A",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "a",
        uraian: "Karyawan Tambak UK I",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "1",
        uraian: "Gaji Karyawan + Uang Makan",
        volume: store.state.ukone.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: gajitotalUK1,
        
    },
    {
        index: "2",
        uraian: "BPJS Kesehatan",
        volume: sehat_uk1.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjskesehatan1,
    },
    {
        index: "3",
        uraian: "BPJS Ketenagakerjaaan",
        volume: kerja_uk1.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjstenagakerja1,
    },
    {
        index: null,
        uraian: "Jumlah A",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: gajitotalUK1 + bpjskesehatan1 + bpjstenagakerja1,
    },
    {
        index: null,
        uraian: "Fee Management UK I",
        volume: null,
        satuan: null,
        bulan: null,
        persen: "9%",
        upah: null,
        jumlah: gajitotalUK1 * 9/100,
    },
    //Data Rows
    
    {
        index: "b",
        uraian: "Karyawan Tambak UK II",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "1",
        uraian: "Gaji Karyawan + Uang Makan",
        volume: store.state.uktwo.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: gajitotalUK2,
    },
    {
        index: "2",
        uraian: "BPJS Kesehatan",
        volume: sehat_uk2.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjskesehatan2,
    },
    {
        index: '3',
        uraian: 'BPJS Ketenagakerjaaan',
        volume: kerja_uk2.length,
        satuan: 'Karyawan',
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjstenagakerja2,
    },
    {
        index: null,
        uraian: "Jumlah B",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: gajitotalUK2 + bpjskesehatan2 + bpjstenagakerja2,
    },
    {
        index: null,
        uraian: 'Fee Management UK II',
        volume: null,
        satuan: null,
        bulan: null,
        persen: '9%',
        upah: null,
        jumlah: gajitotalUK2 * 9/100,
    },
    //row uk 3
    {
        index: "c",
        uraian: "Karyawan Tambak UK III",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "1",
        uraian: "Gaji Karyawan + Uang Makan",
        volume: store.state.ukthree.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: gajitotalUK3,
    },
    {
        index: "2",
        uraian: "BPJS Kesehatan",
        volume: sehat_uk3.length,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjskesehatan3,
    },
    {
        index: '3',
        uraian: 'BPJS Ketenagakerjaaan',
        volume: kerja_uk3.length,
        satuan: 'Karyawan',
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: bpjstenagakerja3,
    },
    {
        index: null,
        uraian: "Jumlah C",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: gajitotalUK3 + bpjskesehatan3 + bpjstenagakerja3,
    },
    {
        index: null,
        uraian: 'Fee Management UK III',
        volume: null,
        satuan: null,
        bulan: null,
        persen: '9%',
        upah: null,
        jumlah: gajitotalUK3 * 9/100,
    },
    //staff
    {
        index: "B",
        uraian: "S T A F F  M A N A G E M E N T",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "1",
        uraian: "Gaji Pokok Admin/HRD & Supervisor",
        volume: null,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "2",
        uraian: "Gaji Pokok Pengawas",
        volume: null,
        satuan: "Karyawan",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: '3',
        uraian: 'BPJS Kesehatan',
        volume: null,
        satuan: 'Karyawan',
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: '3',
        uraian: 'BPJS Ketenagakerjaaan',
        volume: null,
        satuan: 'Karyawan',
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: null,
        uraian: "Jumlah B",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    //ATK
    {
        index: "C",
        uraian: "ATK & TRANSPORTASI",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "1",
        uraian: "ATK",
        volume: null,
        satuan: "Lot",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: "2",
        uraian: "Transportasi",
        volume: null,
        satuan: "Kali",
        bulan: bulans,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: null,
        uraian: "Jumlah C",
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: null,
        uraian: null,
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
    {
        index: null,
        uraian: null,
        volume: null,
        satuan: null,
        bulan: null,
        persen: null,
        upah: null,
        jumlah: null,
    },
]
let subtotal1 = data[5].jumlah + data[11].jumlah + data[17].jumlah;
let subtotal2 = (subtotal1 * 9/100 + (subtotal1)) + (((subtotal1) * 9/100) * 10/100);
var itemTotal = [
    {
        index: null,
        title: 'Jumlah A dari a,b,c',
        jumlah: null,
        persen: null,
        subtotal: subtotal1,
    },
    {
        index: null,
        title: 'Fee Management',
        jumlah: subtotal1,
        persen: '9%',
        subtotal:(subtotal1) * 9/100,
    },
    {
        index: null,
        title: 'Total',
        jumlah: null,
        persen: null,
        subtotal: subtotal1 * 9/100 + (subtotal1),
    },
    {
        index: null,
        title: 'PPn',
        jumlah: (subtotal1) * 9/100,
        persen: '10%',
        subtotal: ((subtotal1) * 9/100) * 10/100,
    },
    {
        index: null,
        title: 'Total',
        jumlah: null,
        persen: null,
        subtotal: subtotal2,
    },
    {
        index: null,
        title: 'PPh',
        jumlah: (subtotal1) * 9/100,
        persen: '2%',
        subtotal: ((subtotal1) * 9/100) * 2/100,
    },
    {
        index: null,
        title: 'Total',
        jumlah: null,
        persen: null,
        subtotal: subtotal2 - (((subtotal1) * 9/100) * 2/100),
    },
]
export default ({data, itemTotal})