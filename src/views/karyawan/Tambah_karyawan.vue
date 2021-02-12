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
              @click="$router.go(-1)"
            >
              Cancel
            </vs-button>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <v-form ref="form" v-model="valid" lazy-validation class="row">
          <h3 class="col-md-10 mb-4">Informasi Umum</h3>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nama"
              :rules="nameRules"
              required
              outlined
              background-color="white"
              dense
              label="Nama Lengkap"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.password"
              :rules="passwordRules"
              label="Password"
              outlined
              background-color="white"
              required
              dense
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nama_panggilan"
              :rules="nameRules"
              outlined
              background-color="white"
              required
              dense
              label="Nama Panggilan"
            ></v-text-field>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-text-field
              v-model="form.status"
              :rules="passwordRules"
              label="Status"
              outlined
              hint="example: Tetap Kontrak 3"
              dense
              background-color="white"
              required
            ></v-text-field>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              :items="items.gender"
              v-model="form.gender"
              label="Gender"
              item-text="state"
              item-value="abbr"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              v-model="form.uk"
              :items="items.uk"
              label="UK"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <h3 class="col-md-10 mb-4 mt-n4">Informasi Details</h3>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.jabatan"
              :rules="nameRules"
              outlined
              required
              dense
              background-color="white"
              label="Jabatan"
            ></v-text-field>
          </div>
          <div class="field col-md-3 mt-n5">
            <vuetify-money
              v-model="form.gaji"
              label="Gaji"
              required
              v-bind:readonly="false"
              v-bind:disabled="false"
              v-bind:outlined="true"
              v-bind:dense="true"
              v-bind:valueWhenIsEmpty="''"
              v-bind:options="options"
            />
          </div>
          <div class="field col-md-3 mt-n5">
            <vuetify-money
              v-model="form.uang_makan"
              label="Uang Makan"
              required
              v-bind:readonly="false"
              v-bind:disabled="false"
              v-bind:outlined="true"
              v-bind:dense="true"
              v-bind:valueWhenIsEmpty="''"
              v-bind:options="options"
            />
          </div>
          <p>{{ form.gaji }}</p>
        </v-form>
      </div>
      <div class="d-block d-lg-none d-md-none d-xl-none col-md-3 pr-4">
        <a-button type="primary" block class="mt-1" @click.native="clickSave">
          Save Data
        </a-button>
        <a-button
          type="danger"
          block
          class="mt-3"
          @click.native="$router.go(-1)"
        >
          Cancel
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import model from "../../singleton/index";
import { mapActions } from "vuex";
export default {
  name: "tambah_karyawan",
  data() {
    return {
      show: false,
      options: {
        prefix: "Rp. ",
        length: 9,
        precision: 0,
      },
      items: {
        gender: [
          { state: "Man", abbr: "M" },
          { state: "Female", abbr: "F" },
        ],
        uk: ["I", "II", "III"],
      },
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
    model.users("upload Users");
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
      console.log(this.form.nama_panggilan);
      // this.$refs.form.validate((valid) => {
      //   if (valid) {
      //     this.form.token = this.$store.getters.getData.token;
      //     this.addData(this.form);
      //     this.$refs.form.resetFields();
      //   } else {
      //     return false;
      //   }
      // });
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
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
    .mt-2,
    .mt-1 {
      font-size: 13px;
    }
  }
  .ic {
    cursor: pointer;
  }
}
</style>