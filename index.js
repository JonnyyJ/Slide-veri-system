//Entrance

window.veri = {
    start: (para, callback =()=>{}) =>{
        window.veri.onverified = callback;
        //If lack of argument do nothing
        if(para.id === undefined || para.conn === undefined){
            return null;
        }
        if(para.id === null || para.conn === null){
            return null
        }
        //Initialization
        require('./src/initialize/initialize').init(para.id,para.conn);
    },
    //Model data storage
    data:require('./src/model/data'),

    //API for getting the result of captcha
    isVerified: () =>{
        if(window.veri.data.result !== undefined){
            return window.veri.data.result === 1;
        }else{
            return false;
        }
    }
}