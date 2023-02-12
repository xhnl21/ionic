// metodos de mutations
export default {
    SetRefreshLaguage (state: { refreshLaguage: any; }, val: any) {
        state.refreshLaguage = val;
    },
    SethttpResques (state: { httpResques: any; }, val: any) {
        state.httpResques = val;
    },
    SetEventMenu (state: { eventMenu: any; }, val: any) {
        // console.log("SetEventMenu:");
        // console.log(state.eventMenu[0]);        
        state.eventMenu = val;
    }
};
