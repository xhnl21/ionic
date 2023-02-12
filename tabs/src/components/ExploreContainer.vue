<template>
  <ion-content  :fullscreen="true" class="ion-padding" style="z-index:-9999; position: relative;">
    <ion-list v-if="event === false" style="z-index:-9999; position: relative;" lines="full">
      <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
        <ion-item>        
          <ion-label>
            <ion-icon slot="start" :ios="mailOutline" :md="mailSharp"></ion-icon>
              Pokémon Yellow
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
            Mega Man X
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="heartOutline" :md="heartSharp"></ion-icon>
            The Legend of Zelda
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="archiveOutline" :md="archiveSharp"></ion-icon>
            Pac-Man
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="paperPlaneOutline" :md="paperPlaneSharp"></ion-icon>
            Super Mario World
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      </ion-reorder-group>
    </ion-list>      
    <ion-list v-else style="z-index:-9999;" lines="full">
      <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
        <ion-item>        
          <ion-label>
            <ion-icon slot="start" :ios="mailOutline" :md="mailSharp"></ion-icon>
              Pokémon Yellow
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
            Mega Man X
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="heartOutline" :md="heartSharp"></ion-icon>
            The Legend of Zelda
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="archiveOutline" :md="archiveSharp"></ion-icon>
            Pac-Man
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
        <ion-item>
          <ion-label>
            <ion-icon slot="start" :ios="paperPlaneOutline" :md="paperPlaneSharp"></ion-icon>
            Super Mario World
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      </ion-reorder-group>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExploreContainer',
  props: {
    name: String
  },
  data () {
    return {
        event:false,
        info:[],
        infoA:[]
    };
  },  
  setup() { 
      const handleReorder = (event: CustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      }       
      return {
        handleReorder,
        archiveOutline, 
        archiveSharp, 
        bookmarkOutline, 
        bookmarkSharp, 
        heartOutline, 
        heartSharp, 
        mailOutline, 
        mailSharp, 
        paperPlaneOutline, 
        paperPlaneSharp, 
        trashOutline, 
        trashSharp, 
        warningOutline, 
        warningSharp
      }
  },
  computed: {
        ...mapGetters(["GetEventMenu"])
  },
  watch: {
      GetEventMenu: function () {
          if (this.GetEventMenu) {      
              const fun = this.GetEventMenu[0].function;
              const method = this.GetEventMenu[0].method;
              const data = this.GetEventMenu[0].data;
              if (fun === "demo") {
                // console.log(this.GetEventMenu[0]);
                this.event = true;   
                  if (method === "initA") {
                      this.info = data.data.bpi;
                  }
                  if (method === "initB") {
                      this.infoA = data.data.data;
                  }
              }
          }
      }
  }   
});
</script>

<style scoped>
</style>
