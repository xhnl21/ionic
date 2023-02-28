// metodos de actions
export default {
    accessDimenu (context: any, accessDimenu: any) {
        context.commit("IngresoDimenu", accessDimenu);
    },
    // getCurrency () {
    //     return new Promise((resolve, reject) => {
    //         if(localStorage.getItem("currency")===null) {
    //             localStorage.setItem("currency", "$");
    //         }
    //         window.master.get("menu/information/GetCurrency/"+window.localAccountID+"/"+window.localorgdata)
    //             .then ((response: any) => {
    //                 if(response.data.status) {
    //                     localStorage.setItem("currency", response.data.currency);
    //                     resolve(true);
    //                 }else{
    //                     reject(false);
    //                 }
    //             })
    //             .catch ((error: any) => {
    //                 console.log(error);
    //                 reject(false);
    //             });
    //     });
    // },
    // getCategories (context: any, i: any) {
    //     return new Promise((resolve, reject) => {
    //         window.master.get("categories/"+window.localuserdata+"/"+i.id)
    //             .then ((response: any) => {
    //                 resolve(response.data.result);
    //             })
    //             .catch ((error: any) => {
    //                 console.log(error);
    //                 reject(false);
    //             });
    //     });
    // }
};
