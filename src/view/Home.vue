<template>
<Navbar></Navbar>
  <Header></Header>
  <!-- Page section example for content below the video header -->
<servicecards></servicecards>
<sliderassoc></sliderassoc>

  <!-- Page section example for content below the video section -->
  <!-- c'est la partie des postes  -->
  <posts></posts>
  <!-- c'est la partie des about  -->
  <aboutus></aboutus>

<!--  <comment></comment>-->
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import sliderassoc from "@/components/sliderassoc";
import Footer from "@/components/Footer";
import posts from "@/components/posts";
import servicecards from "@/components/servicecards";
import Aboutus from "@/components/Aboutus";
// import comment from "@/components/comment";
export default {
  name: `Home`,
  components: {
    // comment,
    Navbar,
    Header,
    sliderassoc,
    Footer,
    posts,
    servicecards,
    Aboutus,
  },
  mounted(){
    document.title =  'Association maroc'
  },

}
</script>
<style scoped>


</style>