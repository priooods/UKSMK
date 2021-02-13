import Vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
// import SecureLS from "secure-ls";
import router from '../router/index';

Vue.use(Vuex);
const instance = axios.create({
    baseURL: "https://digitalsystemindo.com/api/v1/"
  });

// const secureLS = new SecureLS({
//     encodingType: 'aes',
//     encryptionSecret: 'token'
//   });

const res = createPersistedState({
    key: 'data',
    paths: ['response','myprofile', 'userDetail', 'ukone', 'uktwo',
     'ukthree', 'karyawanBaru', 'karyawanUser'],
    // storage: {
    //     getItem: (key) => localStorage.getItem(key),
    //     setItem: (key, value) => localStorage.setItem(key, value),
    //     removeItem: (key) => localStorage.removeItem(key),
    //   },
});


export default new Vuex.Store({
    state:{
        response: [] ,
        urlImages: 'https://digitalsystemindo.com/api/public/',
        loginForm: [],
        karyawanBaru: null,
        userDetail: [],
        users: [],
        myprofile: null,
        ukone: [],
        uktwo: [],
        ukthree: [],
        byuk: [],
        karyawanForm: [],
        karyawanUser: []
    },
    plugins:[res],
    mutations:{
        log (state, payload) {
            state.response == payload;
        },
        dat(state,payload){
            state.myprofile == payload;
        },
        kar(state, payload){
            state.karyawanBaru == payload;
        },
        all(state,payload){
            state.karyawanUser == payload;
        },
        id(state, userDetail){
            state.userDetail = userDetail;
        },
        ukone(state, payload){
            state.ukone == payload;
        },
        uktwo(state,payload){
            state.uktwo == payload;
        },
        ukthree(state, payload){
            state.ukthree = payload;
        }
    },
    actions:{
        async login({commit}){
            const loading = this._vm.$vs.loading({
                text: 'Loading...'
              })
            await instance.post('login',this.state.loginForm).then((data)=>{
                if(data.data.error_code == 1){
                    loading.close();
                    return this._vm.$vs.notification({
                        color: 'danger',
                        duration: 6000,
                        position: 'top-left',
                        title: 'Opps... Login Failure !',
                        text: 'Account yang anda masukan tidak ditemukan ! Pastikan anda memasukan nama dan password yang benar'
                      })
                } else{
                    this.state.response = data.data;
                    commit('log', data.data);
                    loading.close();
                    router.push({ path: "home" }, () => {
                        this.dispatch("myprofile");
                    });
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        async myprofile({commit}){
            await instance.post('myprofile', {token: this.state.response.token}).then((data)=>{
                this.state.myprofile = data.data;
                console.log(this.state.myprofile);
                commit('dat',this.state.myprofile)
            }).catch(err=>{
                console.log(err);
            })
        },
        async newkaryawan({commit}){
            const loading = this._vm.$vs.loading({
                text: 'Loading...'
              })
            await instance.post('register',this.state.karyawanForm).then((data)=>{
                if(data.data.error_code == 1){
                    loading.close();
                    return this._vm.$vs.notification({
                        color: 'danger',
                        duration: 6000,
                        position: 'top-left',
                        title: 'Opps... Gagal menambahkan Karyawan !',
                        text: data.data.error_message
                      })
                }
                commit('kar', this.state.karyawanBaru )
                loading.close();
            }).catch(err=>{
                console.log(err);
            });
        },
        async allUsers({commit}){
            await instance.post('alluser',{token: this.state.response.token}).then((data)=>{
                this.state.karyawanUser = data.data.data;
                commit('all', data.data.data)
                return true;
            }).catch(()=>{
                return false;
            });
        },
        async find({commit},id){
            await instance.post('finduser/'+ id,{token: this.state.response.token}).then((data)=>{
                this.state.userDetail = data.data.data;
                commit('id', data.data.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        async byukOne({commit}){
            await instance.post('byuk',{token: this.state.response.token, uk: 'I'}).then((data)=>{
                this.state.ukone = data.data.data;
                commit('ukone', data.data.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        async byukTwo({commit}){
            await instance.post('byuk',{token: this.state.response.token, uk: 'II'}).then((data)=>{
                this.state.uktwo = data.data.data;
                commit('uktwo', data.data.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        async byukThree({commit}){
            await instance.post('byuk',{token: this.state.response.token, uk: 'III'}).then((data)=>{
                this.state.ukthree = data.data.data;
                commit('ukthree', data.data.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        async updateuser(id,form){
            await instance.post('updateuser/' + id,form).then((data)=>{
                data
                // if(data.data.error_code == 1){
                //     } else{
                //     return notification.success({
                //         message: "Data karyawan berhasil di update !",
                //         placement: 'topRight',
                //         description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                // }
            }).catch(err=>{
                console.log(err);
            });
        },
        async deleteUser(id){
            await instance.post('deleteuser/' + id,{token: this.state.response.token}).then((data)=>{
                // if(data.data.error_code == 1){
                //     return notification.error({
                //         message: "Ooops.. Failure Update Data !",
                //         placement: 'topLeft',
                //         description: "Opps... Data karyawan gagal ditambahkan ! periksa kembali internet anda atau data karyawan"})
                // } else{
                //     return notification.success({
                //         message: "Data karyawan berhasil di update !",
                //         placement: 'topRight',
                //         description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                // }
                data
            }).catch(err=>{
                console.log(err);
            });
        },
        async findoperator(){
            await instance.post('findoperator/',{token: this.state.response.token}).then((data)=>{
                // if(data.data.error_code == 1){
                //     return notification.error({
                //         message: "Ooops.. Failure Update Data !",
                //         placement: 'topLeft',
                //         description: "Opps... Data karyawan gagal ditambahkan ! periksa kembali internet anda atau data karyawan"})
                // } else{
                //     // commit.
                //     return notification.success({
                //         message: "Data karyawan berhasil di update !",
                //         placement: 'topRight',
                //         description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                // }
                data
            }).catch(err=>{
                console.log(err);
            });
        },
    },
    getters:{
        getData: state => state.response,
        users: state => state.myprofile,
        allkaryawan: state => state.karyawanUser,
        userDetail: state => state.userDetail,
        karyawanTerbaru: state => state.karyawanBaru
    },
    modules:{},
});

//     Route::post('login', [AuthController::class, 'login']);
//     Route::post('logout', [AuthController::class, 'logout']);
//     Route::post('register', [AuthController::class, 'register']);
//     Route::post('myprofile', [AuthController::class, 'myprofile']);
//     Route::post('alluser', [AuthController::class, 'alluser']);
//     Route::post('updateuser/{id}', [AuthController::class, 'updateUser']);
//     Route::post('finduser/{id}', [AuthController::class, 'findOneUser']);
//     Route::post('deleteuser/{id}', [AuthController::class, 'deleteUser']);
//     Route::post('byuk', [AuthController::class, 'ByUK']);
//     Route::post('findoperator', [AuthController::class, 'findoperator']);
//     Route::post('useractive', [AuthController::class, 'useractive']);
//     Route::post('addgaji', [DataGajiController::class, 'SaveData']);
//     Route::post('carigaji', [DataGajiController::class, 'findGaji']);