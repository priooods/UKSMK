<template>
  <div class="one">
    <div class="row">
      <div class="col-md-3 col mb-4">
        <div class="xe">
          <h3>Tambah Data Karyawan Baru</h3>
          <div
            class="d-flex justify-content-start align-content-center ic"
            @click="collapse = !collapse"
          >
            <p class="font-weight-bold my-auto my-auto">Informasi Form Data</p>
            <i
              class="bx bx-plus bx-sm bx-tada ml-auto"
              style="color: #f70000"
              v-if="collapse"
            ></i>
            <i
              v-else
              class="bx bx-minus bx-sm bx-tada ml-auto"
              style="color: #f70000"
            ></i>
          </div>
          <p class="mt-1">
            Harap langkapi semua form yang diberi tanda bintang (
            <span>*</span> ).
          </p>
          <div class="d-block" v-if="!collapse">
            <p class="mt-2">
              Dalam pengisian form, anda dapat mengisi semua form menggunakan
              huruf kecil saja. Semua data akan di proses automatis oleh sistem.
            </p>
            <p class="mt-2">
              Dalam mengisi form data berupa number. anda dapat mengisi nilai
              number saja. Semua format number yang di input akan diproses
              automatis oleh sistem.
            </p>
          </div>

          <div class="d-none d-md-block d-lg-block">
            <vs-button class="w-100 ml-n1 p-0 mt-4" @click="clickSave">
              Save Data
            </vs-button>
            <vs-button
              class="w-100 ml-n1 p-0 mt-2"
              danger
              config
              @click="Cancels"
            >
              Cancel
            </vs-button>
            <!-- <vs-button
              success
              class="w-100 ml-n1 p-0 mt-2"
            >
              Kembali
            </vs-button> -->
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <a-form-model
          class="row"
          ref="form"
          :model="form"
          layout="vertical"
          :rules="rules"
        >
          <h4 class="mb-5 font-weight-bold col-md-12">Informasi Umum</h4>
          <a-form-model-item
            class="col-md-5 mt-n2 fs"
            has-feedback
            prop="nama"
            label="Nama Lengkap"
          >
            <a-input
              v-model="form.nama"
              placeholder="ex : Edward Hoven Ramsey"
              allow-clear
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            prop="password"
            label="Password"
          >
            <a-input-password
              placeholder="Minimum 6 Char"
              v-model="form.password"
            >
            </a-input-password>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            prop="nama_panggilan"
            label="Nama Panggilan"
            has-feedback
          >
            <a-input
              placeholder="ex : Edward"
              allow-clear
              v-model="form.nama_panggilan"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-3 mt-n2"
            label="Status"
            has-feedback
            prop="status"
          >
            <a-input
              placeholder="ex : Kontrak Tetap 1"
              allow-clear
              v-model="form.status"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-2 mt-n2"
            label="Tanggal Lahir"
            prop="tanggal_lahir"
            has-feedback
          >
            <a-date-picker
              v-decorator="['date-picker']"
              @change="onChange"
              format="DD/MM/YYYY"
            />
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="Gender"
            prop="gender"
          >
            <a-select v-model="form.gender" placeholder="Pilih Gender">
              <a-select-option value="M"> Man </a-select-option>
              <a-select-option value="F"> Female </a-select-option>
            </a-select>
          </a-form-model-item>
          <h4 class="font-weight-bold mb-5 col-md-12">Informasi Details</h4>
          <a-form-model-item
            class="col-md-2 mt-n2"
            has-feedback
            label="UK"
            prop="uk"
          >
            <a-select v-model="form.uk" placeholder="Pilih UK">
              <a-select-option value="I"> I </a-select-option>
              <a-select-option value="II"> II </a-select-option>
              <a-select-option value="III"> III </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            prop="jabatan"
            label="Jabatan"
          >
            <a-input
              placeholder="Example: Cleaning Service"
              allow-clear
              v-model="form.jabatan"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-3 mt-n2"
            has-feedback
            label="Gaji"
            prop="gaji"
          >
            <a-input
              prefix="Rp"
              type="number"
              placeholder="  ex 3000000"
              allow-clear
              @change="handlechange(form.uang_makan, form.gaji)"
              v-model="form.gaji"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            prop="uang_makan"
            label="Uang Makan"
          >
            <a-input
              prefix="Rp"
              type="number"
              placeholder="  ex 1000000"
              allow-clear
              @change="handlechange(form.uang_makan, form.gaji)"
              v-model="form.uang_makan"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="Total Gaji + Uang Makan"
          >
            <a-input
              prefix="Rp"
              placeholder="  ex 1000000"
              type="number"
              readOnly
              :value="form.gaji_total"
              v-model="form.gaji_total"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-3 mt-n2"
            has-feedback
            label="BPJS Kesehatan"
          >
            <a-input
              prefix="Rp"
              placeholder="  ex 1000000"
              allow-clear
              type="number"
              v-model="form.bpjs_kesehatan"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="BPJS Ketenaga Kerjaan"
          >
            <a-input
              prefix="Rp"
              v-model="form.bpjs_tenagakerja"
              type="number"
              placeholder="  ex 1230000"
              allow-clear
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-3 mt-n2"
            has-feedback
            label="Status BPJS Kesehatan"
          >
            <a-select
              v-model="form.status_kesehatan"
              default-value="Belum"
              placeholder="Default belum"
            >
              <a-select-option value="Belum" selected> Belum </a-select-option>
              <a-select-option value="Sudah"> Sudah </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-3 mt-n2"
            label="Status BPJS KetenagaKerjaan"
            has-feedback
          >
            <a-select
              default-value="Belum"
              v-model="form.status_tenagakerja"
              placeholder="Default belum"
            >
              <a-select-option value="Belum"> Belum </a-select-option>
              <a-select-option value="Sudah"> Sudah </a-select-option>
            </a-select>
          </a-form-model-item>
          <h4 class="font-weight-bold mb-5 col-md-12">Bank Account</h4>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="NIK"
            prop="nik"
          >
            <a-input
              placeholder="ex 1234567890"
              allow-clear
              type="number"
              v-model="form.nik"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item class="col-md-4 mt-n2" has-feedback label="No ID">
            <a-input
              placeholder="ex 1234567890"
              allow-clear
              type="number"
              v-model="form.no_id"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-2 mt-n2"
            has-feedback
            label="Tipe ID"
          >
            <a-select v-model="form.tipe_id" default-value="KTP">
              <a-select-option value="KTP"> KTP </a-select-option>
              <a-select-option value="SIM"> SIM </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="Nama Pada Rekening"
          >
            <a-input
              :placeholder="'ex ' + form.nama"
              allow-clear
              v-model="form.nama_rekening"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-4 mt-n2"
            has-feedback
            label="No Rekening"
          >
            <a-input
              placeholder="ex 1234567890"
              allow-clear
              type="number"
              v-model="form.no_rekening"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item class="col-md-4 mt-n2" has-feedback label="CIF">
            <a-input
              placeholder="ex 1234567890"
              allow-clear
              type="number"
              v-model="form.cif"
            ></a-input>
          </a-form-model-item>
          <a-form-model-item
            class="col-md-5 mt-n2"
            has-feedback
            label="Nama Perusahaan"
          >
            <a-input
              allow-clear
              type="text"
              v-model="form.nama_perusahaan"
            ></a-input>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="d-block d-lg-none d-md-none d-xl-none col-md-3 pr-4">
        <a-button type="primary" block class="mt-1" @click.native="clickSave">
          Save Data
        </a-button>
        <a-button type="danger" block class="mt-3" @click.native="Cancels">
          Cancel
        </a-button>
        <!-- <a-button
          type="success"
          block
          class="mt-3"
        >
          Kembali
        </a-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "tambah_karyawan",
  data() {
    return {
      collapse: true,
      form: {
        token: null,
        nama: "",
        password: "",
        nama_panggilan: "",
        jabatan: "",
        nik: "",
        status: "",
        bpjs_kesehatan: "0",
        bpjs_tenagakerja: "0",
        status_kesehatan: "",
        status_tenagakerja: "",
        gaji: "",
        no_id: "",
        nama_perusahaan: "CV MEGA LINES BERSAUDARA",
        nama_rekening: "",
        uk: "",
        cif: "",
        tipe_id: "",
        no_rekening: "",
        uang_makan: "",
        tanggal_lahir: "",
        gaji_total: "",
        level: "4",
        gender: "",
      },
      rules: {
        uk: [
          {
            required: true,
            message: "Harap Pilih UK",
            trigger: "change",
          },
        ],
        nama: [
          {
            required: true,
            message: "Harap lengkapi nama lengkap karyawan",
            trigger: "blur",
          },
        ],
        status: [
          {
            required: true,
            message: "Status karyawan saat ini harus diisi",
          },
        ],
        password: [
          {
            message: "Password minimum harus 6 Char",
            min: 6,
          },
          {
            required: true,
            message: "Harap lengkapi password akun karyawan",
          },
        ],
        nama_panggilan: [
          {
            required: true,
            message: "Harap lengkapi nama panggilan karyawan",
            trigger: "blur",
          },
        ],
        tanggal_lahir: [
          {
            required: true,
            message: "Masukan tanggal lahir",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "Harap pilih Gender",
            trigger: "change",
          },
        ],
        jabatan: [
          {
            required: true,

            message: "Harap masukan jabatan karyawan saat ini",
            trigger: "change",
          },
        ],
        gaji: [
          {
            required: true,

            message: "Harap masukan gaji karyawan",
            trigger: "change",
          },
        ],
        uang_makan: [
          {
            required: true,
            message: "Harap masukan uang makan karyawan",
            trigger: "change",
          },
        ],
        nik: [
          {
            required: true,
            message: "Harap masukan NIK karyawan",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    // if (this.find()) {
    // }
  },
  methods: {
    ...mapActions({
      addData: "newkaryawan",
      find: "find",
    }),
    onChange(date, dateString) {
      this.form.tanggal_lahir = dateString;
    },
    handlechange(handleChange, change2) {
      var sumi = parseInt(handleChange) + parseInt(change2);
      this.form.gaji_total = sumi;
    },
    clickSave() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.form.token = this.$store.getters.getData.token;
          this.addData(this.form);
          this.$refs.form.resetFields();
        } else {
          return false;
        }
      });
    },
    Cancels() {
      this.$route.push({ path: '/karyawan' }, () => {})
    },
  },
};
</script>

<style lang="scss">
.one {
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
  .xe {
    span {
      color: red;
    }
  }
  .ic {
    cursor: pointer;
  }
}
.mt-n2 {
  margin-right: 15px !important;
}
@media screen and (max-widht: 700px) {
  .mt-n2 {
    margin-right: 0 !important;
  }
}
</style>