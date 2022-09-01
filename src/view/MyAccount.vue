<template>
  <Navbar></Navbar>
      <h4 class=" m-3 p-3"></h4>
      <h4 class="text-center mt-5 px-5 pt-5"> <strong> Bonjour :  </strong> {{firstName}} {{lastName}}</h4>
      <div class="alert alert-dark p-5 mx-5" role="alert">
        Nous nous excusons, votre demande sera traitée par l'administration  et nous vous répondrons dans la plus proche  délais.
      </div>
      <div class="px-5">
        <button @click="logout()" type="button" class="btn btn-danger">Log out</button>
      </div>

  <hr>
      <h4 class=" m-3 p-3"></h4>
  <footer class="footer-section ">
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
export default {
  name: "MyAccount",
    components:{
    Navbar,
    Footer,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
    }
  },
mounted() {
  this.firstName = localStorage.getItem('firstName')
  this.lastName = localStorage.getItem('lastName')

  console.log(this.firstName, this.lastName)
},
  methods: {
    async logout(){
        console.log('logout')
        const token=this.$store.state.user.token
        axios
            .post('/api/v1/token/logout/', {
              headers: {
                'Authorization': `Token ${token}`
              }
            })
            .then(response => {
              console.log(response.status)
            })
            .catch(error =>{
              console.log(error)
            })
        axios.defaults.headers.common["Authorization"] = ""
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem('is_admin_assoc')
        localStorage.removeItem('is_member_assoc')
        localStorage.removeItem('is_admin_orga')
        localStorage.removeItem('firstName')
        localStorage.removeItem('lastName')
        this.$store.commit('removeToken')
        this.$router.push('/')

    }
  }

}
</script>

<style>
.footer-section {
  background: #24252a;
  position: relative;
}
a,p,h1,h2,h3,h4,ul {
  margin: 0;
  padding: 0;
}
</style>