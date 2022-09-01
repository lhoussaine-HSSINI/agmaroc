<template>
  <section class="section-services">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">Nos <span>partenaires</span></h2>
            <p class="description">les associations marocaines reconnues d'utilité publique présente des associations de ce type classées par
              domaine d'activité et ne prétend pas être exhaustive.</p>
          </div>
        </div>
      </div>
  <swiper
      :centeredSlides="true"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
      :breakpoints="swiperOptions.breakpoints"
  >

    <swiper-slide class="mt-4"
                  v-for="ass  in latestAssociations"
                  v-bind:key="ass.id"
    >
      <div class="card">
<!--      <img :src="`/images/associations/`+index+`.png`" class="card-img-top" alt="...">-->
        <img :src="ass.logoassociation" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">{{ass.nameassociation}} </h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
     </div>
    </swiper-slide>
  </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

// import axios
import axios from "axios";
export default {
  name: `sliderassoc`,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data(){
    return {
      i:1,
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          1000: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      },
      latestAssociations:[]
    }
  },

  mounted() {
    this.getLatestAssociations();
  },
  methods: {
    getLatestAssociations(){
      axios
          .get('/Add_AMO_API/Association/')
          .then(response => {
            this.latestAssociations = response.data.filter((el)=>  el.is_association_accepted==false);
            console.log(this.latestAssociations)
          })
          .catch(error =>{
            console.log(error)
            console.log(this.latestAssociations)
          })
    }
  }

}
</script>

<style scoped>
@import '../style/sectionstyle.css';
img.card-img-top {
  height: 100PX;
  width: 100px;
  margin: auto;
}
button{
  border-radius: 20px;
}
h1{
  font-weight: bold;
  font-size: 15px;
  color: black;

}
.card{
  border-radius: 8px;
  border: 1px solid #cccccc;
  display: flex;
  box-sizing: border-box;
  transition: all linear 200ms;
  font-family: 'Poppins', sans-serif;

}
</style>