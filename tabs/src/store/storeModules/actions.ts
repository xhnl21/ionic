// metodos de actions
export default {
    accessDimenu (context: { commit: (arg0: string, arg1: any) => void; }, accessDimenu: any) {
        context.commit("IngresoDimenu", accessDimenu);
    },
    getCurrency () {
        return new Promise((resolve, reject) => {
            if(localStorage.getItem("currency")===null) {
                localStorage.setItem("currency", "$");
            }
            // window.master.get("menu/information/GetCurrency/"+window.localAccountID+"/"+window.localorgdata)
            //     .then((response: { data: { status: any; currency: string; }; }) => {
            //         if(response.data.status) {
            //             localStorage.setItem("currency", response.data.currency);
            //             resolve(true);
            //         }else{
            //             reject(false);
            //         }
            //     })
            //     .catch((error: any) => {
            //         console.log(error);
            //         reject(false);
            //     });
        });
    },
    getCategories (context: any, i: { id: string; }) {
        return new Promise((resolve, reject) => {
            // window.master.get("categories/"+window.localuserdata+"/"+i.id)
            //     .then((response: { data: { result: unknown; }; }) => {
            //         resolve(response.data.result);
            //     }).catch((error: any) => {
            //         console.log(error);
            //         reject(false);
            //     });
        });
    }
};
