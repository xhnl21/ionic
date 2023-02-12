<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="openCloseMenu" color="primary"></ion-menu-button>
        </ion-buttons>                
        <ion-title>Tab 2 _{{ $route.name }}_ </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <menuSide />
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
// import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import menuSide from '@/components/menuSide/menu.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { 
    ExploreContainer, 
    menuSide
  },
  // setup() {
  //   const openCloseMenu = async () => {           
  //       array('demo','demo1','demo2');
  //       // return this.array('demo','demo1','demo2');
  //   };
    
  //   const array = async (name: any, method: any, data: any ) => {
  //       console.log(name, method, data);
        
  //       const store = useStore();
  //       const k = [];
  //       k.push({ function:name, method:method, data:data });
  //       store.commit("SetEventMenu", k);
  //   };

  //   return {
  //     openCloseMenu,
  //     array,
  //   };            
  // },
  methods: {
      created () {
          // this.$store.getters.language;
          console.log(this.$store.getters);
          
      },
      openCloseMenu () {           
        this.array('demo','demo1','demo2');
      },
      array (name,method,data) {          
            const k = [];
            k.push({ function:name, method:method, data:data });
            this.$store.commit("SetEventMenu", k);
      }      
    },  
});
</script>
