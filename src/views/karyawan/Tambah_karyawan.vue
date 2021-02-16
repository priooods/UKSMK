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
            <v-btn
              class="w-100 ml-n1 p-0 mt-4"
              depressed
              color="primary"
              block
              @click="clickSave"
            >
              <span>Save Data</span>
            </v-btn>
            <v-btn
              class="w-100 ml-n1 p-0 mt-2"
              depressed
              color="error"
              block
              @click="$router.go(-1)"
            >
              <span>Cancel</span>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <v-form lazy-validation class="row" ref="form">
          <h3 class="col-md-10 mb-4">Informasi Umum</h3>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nama"
              required
              outlined
              :rules="rules.nama"
              background-color="white"
              dense
              label="Nama Lengkap"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.password"
              label="Password"
              outlined
              :rules="rules.password"
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
              outlined
              background-color="white"
              required
              :rules="rules.nama_panggilan"
              dense
              label="Nama Panggilan"
            ></v-text-field>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-text-field
              v-model="form.status"
              label="Status"
              :rules="rules.status"
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
              :rules="rules.gender"
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              v-model="form.uk"
              :rules="rules.uk"
              :items="items.uk"
              label="UK"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-dialog
              ref="menu"
              v-model="menu2"
              :return-value.sync="form.tanggal_lahir"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.tanggal_lahir"
                  label="Tanggal Lahir"
                  readonly
                  required
                  dense
                  v-bind="attrs"
                  outlined
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="form.tanggal_lahir" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(form.tanggal_lahir)"
                >
                  OK
                </v-btn></v-date-picker
              >
            </v-dialog>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nik"
              outlined
              required
              dense
              :rules="rules.nik"
              type="number"
              background-color="white"
              label="NIK"
            ></v-text-field>
          </div>
          <h3 class="col-md-10 mb-4 mt-n4">Informasi Details</h3>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.jabatan"
              outlined
              :rules="rules.jabatan"
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
              v-on:input="handle"
              v-bind:outlined="true"
              :rules="rules.gaji"
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
              :rules="rules.uang_makan"
              v-on:input="handle"
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
              label="Gaji Total"
              required
              v-bind:readonly="true"
              v-bind:disabled="false"
              v-bind:outlined="true"
              v-bind:dense="true"
              v-bind:value="form.gaji_total"
              v-bind:valueWhenIsEmpty="''"
              v-bind:options="options"
            />
          </div>
          <div class="field col-md-3 mt-n5">
            <vuetify-money
              label="BPJS Kesehatan"
              required
              v-bind:readonly="false"
              v-bind:disabled="false"
              v-bind:outlined="true"
              v-bind:dense="true"
              v-model="form.bpjs_kesehatan"
              v-bind:valueWhenIsEmpty="''"
              v-bind:options="options"
            />
          </div>
          <div class="field col-md-3 mt-n5">
            <vuetify-money
              label="BPJS Tenagakerja"
              required
              v-bind:readonly="false"
              v-bind:disabled="false"
              v-bind:outlined="true"
              v-bind:dense="true"
              v-model="form.bpjs_tenagakerja"
              v-bind:valueWhenIsEmpty="''"
              v-bind:options="options"
            />
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              v-model="form.status_kesehatan"
              :items="items.status"
              label="Status BPJS Kesehatan"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              v-model="form.status_tenagakerja"
              :items="items.status"
              label="Status BPJS Tenagakerja"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <h3 class="col-md-10 mb-4 mt-n4">Bank Account</h3>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nama_rekening"
              outlined
              required
              dense
              background-color="white"
              label="Nama Rekening"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.no_rekening"
              outlined
              required
              dense
              type="number"
              background-color="white"
              label="No Rekening"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.no_id"
              outlined
              required
              dense
              type="number"
              background-color="white"
              label="No ID"
            ></v-text-field>
          </div>
          <div class="field col-md-3 mt-n5">
            <v-select
              v-model="form.tipe_id"
              :items="items.tipe"
              label="Tipe ID"
              required
              dense
              background-color="white"
              outlined
            ></v-select>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.cif"
              outlined
              required
              dense
              type="number"
              background-color="white"
              label="CIF"
            ></v-text-field>
          </div>
          <div class="field col-md-4 mt-n5">
            <v-text-field
              v-model="form.nama_perusahaan"
              outlined
              required
              dense
              background-color="white"
              label="Nama Perusahaan"
            ></v-text-field>
          </div>
        </v-form>
      </div>
      <div class="d-block d-lg-none d-md-none d-xl-none col-md-3 pr-4">
        <v-btn
          class="w-100 ml-n1 p-0 mt-4"
          depressed
          color="primary"
          block
          @click="clickSave"
        >
          <span>Save Data</span>
        </v-btn>
        <v-btn
          class="w-100 ml-n1 p-0 mt-2"
          depressed
          color="error"
          block
          @click="$router.go(-1)"
        >
          <span>Cancel</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      show: false,
      collapse: true,
      menu2: false,
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
        status: ["Belum", "Sudah"],
        tipe: ["KTP", "SIM"],
      },
      form: {
        token: null,
        nama: "",
        password: "user123",
        nama_panggilan: "",
        jabatan: "",
        nik: "",
        status: "",
        bpjs_kesehatan: "137945",
        bpjs_tenagakerja: "14850",
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
        uang_makan: "1350000",
        tanggal_lahir: "",
        gaji_total: 0,
        level: "4",
        gender: "",
      },
      rules: {
        uk: [(v) => !!v || "Harap pilih UK"],
        nama: [(v) => !!v || "Masukan nama lengkap karyawan"],
        status: [(v) => !!v || "Masukan status saryawan"],
        password: [
          (v) => !!v || "Masukan password karyawan",
          (v) => v.length >= 6 || "Min 6 characters",
        ],
        nama_panggilan: [(v) => !!v || "Masukan nama panggilan"],
        tanggal_lahir: [(v) => !!v || "Harap pilih tanggal lahir"],
        gender: [(v) => !!v || "Harap pilih gender"],
        jabatan: [(v) => !!v || "Masukan jabatan karyawan"],
        gaji: [(v) => !!v || "Masukan gaji karyawan"],
        uang_makan: [(v) => !!v || "Masukan biaya uang makan"],
        nik: [(v) => !!v || "Masukan NIK karyawan"],
      },
    };
  },
  methods: {
    handle() {
      var sumi = parseInt(this.form.gaji) + parseInt(this.form.uang_makan);
      this.form.gaji_total = sumi;
    },
    ...mapActions({
      addData: "newkaryawan",
      find: "find",
    }),
    clickSave() {
      this.token = this.$store.state.response.token;
      this.$store.state.karyawanForm = this.form;
      if (!this.$refs.form.validate()) {
        return false;
      } else {
        this.$store.dispatch("newkaryawan");
        this.$refs.form.reset();
      }
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