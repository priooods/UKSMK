import Vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";
import { notification } from 'ant-design-vue';
import router from '../router/index';

Vue.use(Vuex);
const instance = axios.create({
    baseURL: "https://digitalsystemindo.com/api/v1/"
  });

const secureLS = new SecureLS({
    encodingType: 'aes',
    encryptionSecret: 'token'
  });

const res = createPersistedState({
    key: 'res',
    paths: ['response','usersData', 'karyawanBaru','karyawanUser'],
    storage: {
        getItem: (key) => secureLS.get(key),
        setItem: (key, value) => secureLS.set(key, value),
        removeItem: (key) => secureLS.remove(key),
      },
});


export default new Vuex.Store({
    state:{
        response: null ,
        urlImages: 'https://digitalsystemindo.com/api/public/',
        loginForm: [],
        karyawanBaru: null,
        userDetail: null,
        users: [],
        myprofile: null,
        byuk: null,
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
        }
    },
    actions:{
        async login({commit}){
            await instance.post('login',this.state.loginForm).then((data)=>{
                this.state.response = data.data;
                if(this.state.response.error_code == 1){
                    return notification.error({
                        message: "Ooops.. Failure Log in !",
                        placement: 'topLeft',
                        description: "Opps... Login gagal ! Periksa kembali account anda"})
                }
                commit('log', this.state.response);
                return router.push({ path: "home" }, () => {
                    this.dispatch("myprofile");
                  });
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
        async newkaryawan({commit}, body){
            await instance.post('register',body).then((data)=>{
                this.state.karyawanBaru = data.data;
                if (data.data.error_code == 1) {
                    return notification.error({
                        message: "Ooops.. Failure Add Data !",
                        placement: 'topLeft',
                        description: "Opps... Data baru gagal ditambahkan ! periksa kembali data anda"})
                } else{
                    notification.success({
                        message: "Data karyawan baru berhasil ditambahkan !",
                        placement: 'topRight',
                        description: "Karyawan baru berhasil ditambahkan, kembali ke halaman karyawan untuk melihat data terbaru "})
                    commit('kar', this.state.karyawanBaru )
                    
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        async allUsers({commit}){
            await instance.post('alluser',{token: this.state.response.token}).then((data)=>{
                this.state.karyawanUser = data.data.data;
                commit('all', this.state.karyawanUser)
            }).catch(err=>{
                console.log(err);
            });
        },
        async find({commit},id){
            await instance.post('finduser/'+ id,{token: this.state.response.token}).then((data)=>{
                this.state.userDetail = data.data.data;
                commit('id', this.state.userDetail);
            }).catch(err=>{
                console.log(err);
            });
        },
        async byuk({commit},uk){
            await instance.post('byuk',{token: this.state.response.token, uk: uk}).then((data)=>{
                this.state.karyawanUser = data.data.data;
                commit('all', this.state.karyawanUser);
            }).catch(err=>{
                console.log(err);
            });
        },
        async updateuser(id,form){
            await instance.post('updateuser/' + id,form).then((data)=>{
                if(data.data.error_code == 1){
                    return notification.error({
                        message: "Ooops.. Failure Update Data !",
                        placement: 'topLeft',
                        description: "Opps... Data karyawan gagal ditambahkan ! periksa kembali internet anda atau data karyawan"})
                } else{
                    return notification.success({
                        message: "Data karyawan berhasil di update !",
                        placement: 'topRight',
                        description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        async deleteUser(id){
            await instance.post('deleteuser/' + id,{token: this.state.response.token}).then((data)=>{
                if(data.data.error_code == 1){
                    return notification.error({
                        message: "Ooops.. Failure Update Data !",
                        placement: 'topLeft',
                        description: "Opps... Data karyawan gagal ditambahkan ! periksa kembali internet anda atau data karyawan"})
                } else{
                    return notification.success({
                        message: "Data karyawan berhasil di update !",
                        placement: 'topRight',
                        description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        async findoperator(){
            await instance.post('findoperator/',{token: this.state.response.token}).then((data)=>{
                if(data.data.error_code == 1){
                    return notification.error({
                        message: "Ooops.. Failure Update Data !",
                        placement: 'topLeft',
                        description: "Opps... Data karyawan gagal ditambahkan ! periksa kembali internet anda atau data karyawan"})
                } else{
                    // commit.
                    return notification.success({
                        message: "Data karyawan berhasil di update !",
                        placement: 'topRight',
                        description: "Karyawan berhasil di update, kembali ke halaman karyawan untuk melihat data terbaru "})  
                }
            }).catch(err=>{
                console.log(err);
            });
        },
    },
    getters:{
        getData: state => state.response,
        users: state => state.myprofile,
        allkaryawan: state => state.karyawanUser,
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