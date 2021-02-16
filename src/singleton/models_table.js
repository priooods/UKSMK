var headersBPJS = [ 
    {
      text: "No",
      filterable: false,
      sortable: false,
      width: "1%",
      value: "index",
      label: "No",
      field: "index",
      class: "head",
    },
    {
      text: "NIK",
      value: "nik",
      sortable: false,
      width: "1%",
      align: "center",
      label: "NIK",
      field: "nik",
      class: "head",
    },
    {
      text: "Nama Lengkap",
      value: "nama",
      sortable: false,
      label: "Nama",
      field: "nama",
      width: "8%",
      class: "head",
    },
    {
      text: "Nama Panggilan",
      value: "nama_panggilan",
      sortable: false,
      align: "center",
      label: "Nama Panggilan",
      field: "nama_panggilan",
      class: "head",
      width: "1%",
    },
    {
      text: "Jabatan",
      label: "Jabatan",
      field: "jabatan",
      value: "jabatan",
      sortable: false,
      class: "head",
      width: "5%",
    },
    {
      text: "Status",
      width: "1%",
      value: "status",
      label: "Status",
      field: "status",
      sortable: false,
      class: "head",
    },
    {
      text: "RPH",
      value: "gaji",
      label: "RPH",
      field: "gaji",
      sortable: false,
      class: "head",
      align: "center",
      width: "9%",
    },
    {
      text: "BPJS Kesehatan",
      class: "head",
      value: "bpjs_kesehatan",
      label: "BPJS Kesehatan",
      field: "bpjs_kesehatan",
      sortable: false,
      align: "center",
      width: "9%",
    },
    {
      text: "BPJS TenagaKerja",
      value: "bpjs_tenagakerja",
      sortable: false,
      label: "BPJS Tenagakerja",
      field: "bpjs_tenagakerja",
      class: "head",
      align: "center",
      width: "1%",
    },
    {
      text: "Status Kesehatan",
      value: "status_kesehatan",
      sortable: false,
      align: "center",
      width: "1%",
      class: "head",
      label: "Status Kesehatan",
      field: "status_kesehatan",
    },
    {
      text: "Status TenagaKerja",
      value: "status_tenagakerja",
      sortable: false,
      class: "head",
      label: "Status KeTenagaKerjaan",
      field: "status_tenagakerja",
      width: "1%",
      align: "center",
    },
    {
      text: "Masa Kerja",
      value: "gaji",
      label: "Masa Kerja",
      field: "gaji",
      sortable: false,
      width: "9%",
      class: "head",
      align: "center",
    },
  ];
var head = [
    {
      text: "No",
      filterable: false,
      label: "No",
      field: "no",
      sortable: false,
      width: "1%",
      value: "no",
    },
    {
      text: "Ket",
      filterable: false,
      sortable: false,
      label: "Keterangan",
      field: "title",
      width: "80%",
      value: "title",
    },
    {
      text: "Jumlah",
      filterable: false,
      sortable: false,
      label: "Jumlah",
      field: "sum",
      width: "50%",
      value: "sum",
    },
  ];
var headerKaryawan = [
  {
    text: "No",
    filterable: false,
    sortable: false,
    width: "1%",
    value: "index",
    label: "No",
    field: "index",
    class: "head",
  },
  {
    text: "NIK",
    value: "nik",
    sortable: false,
    width: "1%",
    align: "center",
    label: "NIK",
    field: "nik",
    class: "head",
  },
  {
    text: "Nama Lengkap",
    value: "nama",
    sortable: false,
    label: "Nama",
    field: "nama",
    width: "8%",
    class: "head",
  },
  {
    text: "Nama Panggilan",
    value: "nama_panggilan",
    sortable: false,
    align: "center",
    label: "Nama Panggilan",
    field: "nama_panggilan",
    class: "head",
    width: "1%",
  },
  {
    text: "Jabatan",
    label: "Jabatan",
    field: "jabatan",
    value: "jabatan",
    sortable: false,
    class: "head",
    width: "5%",
  },
  {
    text: "Status",
    width: "1%",
    value: "status",
    label: "Status",
    field: "status",
    sortable: false,
    class: "head",
  },
  {
    text: "Jumlah RPH",
    value: "gaji",
    label: "Jumlah RPH",
    field: "gaji",
    sortable: false,
    class: "head",
    align: "center",
    width: "9%",
  },
  {
    text: "BPJS Kesehatan",
    class: "head",
    value: "bpjs_kesehatan",
    label: "BPJS Kesehatan",
    field: "bpjs_kesehatan",
    sortable: false,
    align: "center",
    width: "9%",
  },
  {
    text: "BPJS TenagaKerja",
    class: "head",
    value: "bpjs_tenagakerja",
    label: "BPJS TenagaKerja",
    field: "bpjs_tenagakerja",
    sortable: false,
    align: "center",
    width: "9%",
  },
  {
    text: "Uang Makan",
    value: "uang_makan",
    sortable: false,
    align: "center",
    width: "9%",
    class: "head",
    label: "Uang Makan",
    field: "uang_makan",
  },
  {
    text: "Total Diterima",
    value: "gaji_total",
    sortable: false,
    class: "head",
    label: "Total 7 + 10",
    field: "gaji_total",
    width: "9%",
    align: "center",
  },
  {
    text: "Gaji Diterima",
    value: "gaji",
    label: "Gaji Yang Diterima",
    field: "gaji",
    sortable: false,
    width: "9%",
    class: "head",
    align: "center",
  },
]
var expoExcelUK = headerKaryawan.concat(head);
var exportExcel = headersBPJS.concat(head);
export default ({headersBPJS, head, exportExcel,expoExcelUK, headerKaryawan})