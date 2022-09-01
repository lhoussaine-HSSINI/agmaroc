<template>
  <section class="section-services">

      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">Les <span>Activités</span></h2>
            <p class="description">les associations marocaines reconnues d'utilité publique présente des associations de ce type classées par domaine d'activité et ne prétend pas être exhaustive.</p>
          </div>
        </div>
      </div>

  <div class="row ">
    <div class="col-12 col-sm-6 col-lg-4  mt-4" v-for="post  in posts"
         v-bind:key="post.id" >
      <div class="card ">
        <img :src="`/images/posts/`+post.id+`.jpg`" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="card-text">
            <h2> {{post.title}}</h2>
          </div>
          <button class="btn btn-sm btn-dark rounded-5 details" type="button">Plus Détails <FAIFatma   :icon="['fas' ,'circle-arrow-right']" class="icon alt read" /></button>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{last_created(post.created_at)}}</small>
        </div>
      </div>
    </div>

  </div>
  <div class="col text-center">
    <router-link to="/Activites"> <button class="btn btn-dark rounded-5" id="postbtn" type="button">Plus des activités</button> </router-link>
  </div>
  </section>
</template>
<script>
import moment from 'moment'
import axios from "axios";
export default {
  name: `posts`,
  data(){
    return {
      posts:[],

    }},
  mounted() {
    this.getLatestposts();

  },
  methods: {
    getLatestposts(){
      axios
          .get('/Add_AMO_API/post/')
          .then(response => {
            this.posts = response.data.filter((el)=>  el.id <4);
          })
          .catch(error =>{
            console.log(error)
            console.log(this.posts)
          })
    },
    last_created(a){
      let date = moment(a, "YYYY-MM-DD");
      return date.fromNow();
    }
  },

}
</script>

<style scoped>
@import '../style/sectionstyle.css';
/* Style the counter cards */
section{
background-color: #f5f5f5;
}
.card {
  border-radius: 8px;
  border: 1px solid #cccccc;
  display: flex;
  box-sizing: border-box;
  transition: all linear 200ms;
  font-family: 'Poppins', sans-serif;
;
}
.card:hover{
  transform: scale(1.1);
  transition: all linear 200ms;
  z-index: 1;
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
  cursor: pointer;
}
#postbtn{
  margin-top: 80px;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  padding: 10px 20px;
}
.read{
  color: white;
  font-size: inherit;
}

.details{
  background-color: darkslategrey;
  font-size: 14px;
}
.card-text h2 {
  font-size: 1em !important;
  font-weight: 700 !important;
  padding: 10px 0 !important;
}
.card, .card-img-top {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
.card{
  height: 330px !important;
}
.card-img-top{
  height: 160px !important;
}
</style>