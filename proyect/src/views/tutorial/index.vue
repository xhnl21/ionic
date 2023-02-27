<template>
  <ion-page>
    <ion-content class="no-scroll">
      <swiper :slides-per-view="1" :options="{ slidesPerView: true, loop: true }">
        <swiper-slide v-bind:style="{ height: height }" v-for="(item, key) in dataSlider" :key="item">
          <ion-grid>
            <ion-row>
              <ion-img 
                :src="item.img"
                alt="The Wisconsin State Capitol building in Madison, WI at night">             
              </ion-img>
            </ion-row>
            <ion-row>
              <p style="text-align: justify;">{{ item.text }}</p>
            </ion-row>
            <ion-button v-if="key === (dataSlider.length - 1)" color="medium" shape="round" router-link="/Login">Got it</ion-button>
            <!-- <ion-buttons v-if="key === (dataSlider.length - 1)" color="medium" slot="end" router-link="/Login">
              Got it
            </ion-buttons>  -->
            <ion-row class="indicators">
              <div v-for="(items, keys) in dataSlider" :key="items">
                <ion-button class="btnSlider" v-if="keys === key" color="danger" shape="round" expand="full"></ion-button>
                <ion-button class="btnSlider" v-else color="medium" shape="round" expand="full"></ion-button>
              </div>
            </ion-row>
          </ion-grid>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';
  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide
    },
    data: () => ({
      height: window.innerHeight+"px",
      dataSlider: [
          {"text":"En el bosque vivían tres cerditos con su madre, que decidieron construir sus casas para protegerse del lobo feroz. El menor la hizo de paja, el hermano del medio la construyó de madera y el hermano mayor, que era muy trabajador, usó ladrillos para elaborarla. Aprovechando que han terminado sus casas, los cerditos menor y mediano aprovecharon para ir al bosque ignorando a su hermano mayor, que les decía que no habrá escapatoria del lobo. Se burlaban de él cantando", "img":process.env.BASE_URL+"assets/tutorial/a.jpg"},
          {"text":"En el bosque vivían tres cerditos con su madre, que decidieron construir sus casas para protegerse del lobo feroz. El menor la hizo de paja, el hermano del medio la construyó de madera y el hermano mayor, que era muy trabajador, usó ladrillos para elaborarla. Aprovechando que han terminado sus casas, los cerditos menor y mediano aprovecharon para ir al bosque ignorando a su hermano mayor, que les decía que no habrá escapatoria del lobo. Se burlaban de él cantando", "img":process.env.BASE_URL+"assets/tutorial/b.jpg"},
          {"text":"En el bosque vivían tres cerditos con su madre, que decidieron construir sus casas para protegerse del lobo feroz. El menor la hizo de paja, el hermano del medio la construyó de madera y el hermano mayor, que era muy trabajador, usó ladrillos para elaborarla. Aprovechando que han terminado sus casas, los cerditos menor y mediano aprovecharon para ir al bosque ignorando a su hermano mayor, que les decía que no habrá escapatoria del lobo. Se burlaban de él cantando", "img":process.env.BASE_URL+"assets/tutorial/c.jpg"},
      ]
    }),
    created() {
    
      // console.log(this.dataSlider);
      
      // this.setup()
    },
    // methods: {
    //   setup() {
    //     const slideOpts = {
    //       initialSlide: 1,
    //       speed: 400
    //     };
    //     return { slideOpts }
    //   }
    // }

  });
</script>
<style scoped>
.indicators {
    margin: auto;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    display: flex;
  }
.btnSlider {
    padding: 1px;
    height: 15px;
}
  .space {
    height: 25px;
  }
  .no-scroll {
    --overflow: hidden;
  }
  #container {
    position: absolute;
    left: 10%;
    margin: -25px 0 0 0;
    width: 80%;
  }
</style>