<template>
  <div class="dialog">
    <vs-dialog
      blur
      prevent-close
      not-center
      scroll
      overflow-hidden
      v-model="active"
    >
      <!-- <template #header>
        <h4 class="m-3 text-center">Tambah Karyawan Baru</h4>
      </template>

      <div class="row">
        <div class="col">
          <p>Users Information</p>
          <div class="row">
            <vs-input
              class="col mt-4"
              type="text"
              v-model="formUser.nama"
              label="Nama Lengkap"
              placeholder="Hallo World"
            />
            <vs-input
              class="col-lg-5 mt-5"
              type="password"
              v-model="formUser.password"
              :visiblePassword="visible"
              icon-after
              @click-icon="visible = !visible"
              label="Password"
              placeholder="Min characther 6"
            >
              <template #icon>
                <i v-if="!visible" class="bx bx-hide"></i>
                <i v-else class="bx bx-show-alt"></i> </template
            ></vs-input>
            <vs-input
              class="col-lg-6 mt-5"
              type="text"
              v-model="formUser.nama_panggilan"
              label="Nama Panggilan"
              placeholder="Hallo"
            />
            <vs-select
              label="Gender"
              v-model="formUser.gender"
              class="col-md-3 mt-5"
              ><vs-option label="Pria" value="L"> Pria </vs-option>
              <vs-option label="Wanita" value="P">
                Wanita
              </vs-option></vs-select
            >
            <vs-input
              type="date"
              class="mt-5 col-md-3"
              v-model="formUser.tanggal_lahir"
              label="Tanggal Lahir"
            />
            <vs-input
              type="text"
              :readonly="true"
              class="mt-5 col-md-5"
              v-model="formUser.status"
              label="Status"
            />
          </div>
          <p class="mt-4">Users Details</p>
          <div class="row">
            <vs-input
              class="col-lg-5 mt-4"
              type="number"
              v-model="formUser.gaji"
              label="Gaji"
              placeholder="example 3.000.000"
            />
            <vs-input
              class="col-lg-5 mt-4"
              type="text"
              v-model="formUser.nama_panggilan"
              label="Nama Panggilan"
              placeholder="Hallo"
            />
          </div>
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col">
          <p class="mt-3">Users Details</p>
          <div class="row">
            <vs-input
              class="col-lg-5 mt-5"
              type="password"
              v-model="formUser.password"
              label="Password"
              placeholder="Min characther 6"
            />
            <vs-input
              class="col-lg-6 mt-5"
              type="text"
              v-model="formUser.nama_panggilan"
              label="Nama Panggilan"
              placeholder="Hallo"
            />
          </div>
        </div>
      </div> -->
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      visible: false,
      formUser: {
        nama: "",
        password: "",
        nama_panggilan: "",
        gender: "",
        tanggal_lahir: "",
        status: "Karyawan",
        level: "3",
        gaji: "",
      },
    };
  },
  mounted() {
    console.log(this.formUser.gender);
  },
  methods: {
    open() {
      return (this.active = true);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");
// .vs-dialog {
//   h4 {
//     font-family: "Source Sans Pro", sans-serif;
//     font-weight: 700;
//   }
//   .vs-input {
//     width: 100%;
//   }
// }
</style>