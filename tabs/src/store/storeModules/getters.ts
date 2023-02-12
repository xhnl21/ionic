// metodos para consultas de status
export default {
    // language (state) {
    //     return state.language[window.langLocal];
    // },
    // apis (state) {
    //     return state.apis;
    // },
    GetRefreshLaguage (state: { refreshLaguage: any; }) {
        return state.refreshLaguage;
    },
    GethttpResques (state: { httpResques: any; }) {
        return state.httpResques;
    },
    GetEventMenu (state: { eventMenu: any; }) {
        // console.log("GetEventMenu:");
        // console.log(state.eventMenu[0]);
        return state.eventMenu;
    },
};
