class ModelData{
    constructor(){
        if(ModelData.instance == null){
            this.data = [];
            this.tables = {}
            
            ModelData.instance = this;
        }
        return ModelData.instance;
    }

    users(data){
        this.data.push(data);
    }


    // import model from '../model'
    //Kalau mau setting data cukup jalankan ini di script js component
    // create(){ mounted
    //     model.users('Masukan body data disini');
    //     console.log(model.users); Keluarin data yang udah diset ke log print. bebas di component mana aja
    // }
    //
    // Catatan. ini kalau di refresh page akan hilang semua datanya . 
    // model.data
    // bila data yang memang harus disave terus , maka gunakan store vuex
    // 

    gettingUser(){
        console.log(`${this.data}`);
    }
    // gettingTab(){
    //     console.log(this.models);
    // }
}

const model = new ModelData();
Object.freeze(model)
export default model;