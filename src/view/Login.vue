<template>
  <Navbar></Navbar>
  <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-lg-5 mx-auto mt-xl-5 my-5 my-l-0 py-5 py-6">
    <div class="card card0 border-0">
      <div class="row d-flex">
        <div class="col-lg-6" id="back">
          <div class="card1 pb-5">
            <div class="row">

            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <form  @submit.prevent="Login" method="post">

            <div class="card2 card border-0 px-4 py-5">
              <img src="~@/assets/images/logoassoc.svg" class="logo">
              <div class="row px-3 mb-4">
                <label class="mb-1 ">
                  <h6 class="mb-0 text-sm">Adresse Email</h6>
                </label>
                <input  type="text" name="email" placeholder="Entrer Adresse Email" v-model="email">

                <span class="error-feedback  text-danger" v-if="errors.length > 0">
                     {{errors[0]}}
                  </span>
              </div>
              <div class="row px-3 mb-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Mode passe</h6>
                </label>
                <input type="password" name="password" placeholder="Entrer mode passe" v-model="password">

                <span class="error-feedback  text-danger" v-if="errors.length > 0">
                     {{errors[1]}}
                  </span>
              </div>
              <div class="alert alert-primary" v-if="errors_response.length">
                <p class="text-danger text-center" v-for="e in errors_response" v-bind:key="e">
                  {{e}}
                </p>
              </div>

              <div class="row mb-3 px-3">
                <button type="submit" class="btn btn-blue text-center bg-danger">Login</button>
              </div>
              <div class="row mb-4 px-3">
                <small class="font-weight-bold">Don't have an account? <router-link to="/Signup"  class="text-danger"> Register</router-link></small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer-section">
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbaruse";
import Footer from "@/components/Footer";
import axios from 'axios';
import store from "@/store";
export default {
  name: `Login`,
  components:{
    Navbar,
    Footer,
  },
  data(){
    return {
      email: "",
      password: "",
      errors:[],
      errors_response:[],
    }
  },
  mounted(){
    document.title =  'Log in | Association maroc'
    if(store.state.user.isAuthenticated){
      this.$router.push({path:'/MyAccount'});
    }
  },
  methods: {
    async Login(){
      this.errors = []
      axios.defaults.headers.common['Authorization']=""
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      var regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.errors=[]
      this.errors_response = []
      if(!regEmail.test(this.email)){
        this.errors[0]=' Invalid email given ';
      }
      if(this.password === '' || this.password.length < 8 || this.password.length > 20){
        this.errors[1]='The number of symbols must not exceed 20 or less than 8 symbols, The password is missing!';
      }
      if(!this.errors.length){
        const formData={
          username :this.email,
          password :this.password,
        }
        await axios
            .post('/api/loginAMA/', formData)
            .then( response => {
              if (response.data.is_authenticated){
                const token=response.data.token
                const id = response.data.user_id
                const is_admin_assoc = response.data.is_admin_assoc
                const is_member_assoc = response.data.is_member_assoc
                const is_admin_orga = response.data.is_admin_orga
                const firstName = response.data.first_name
                const lastName = response.data.last_name

                this.$store.commit('setToken', token, id, is_admin_assoc, is_member_assoc, is_admin_orga, firstName, lastName)

                axios.defaults.headers.common['Authorization']="Token "+token
                localStorage.setItem('token', token)
                localStorage.setItem('id', id)
                localStorage.setItem('is_admin_assoc', is_admin_assoc)
                localStorage.setItem('is_member_assoc', is_member_assoc)
                localStorage.setItem('is_admin_orga', is_admin_orga)
                localStorage.setItem('firstName', firstName)
                localStorage.setItem('lastName', lastName)
                this.$router.push('/MyAccount')
              }else{
                this.errors_response = []
                this.errors_response.push(response.data.message);
                console.log(response.data.message)
              }
            })
            .catch(error => {
              this.errors_response = []
              if(error.response){
                for(const e in error.response.data){
                  this.errors_response.push(`${e}: ${error.response.data[e]}`);
                }
                console.log(JSON.stringify(error.response.data))
              }else if(error.message){
                this.errors_response.push('Something went wrong. Please try again')
                console.log(JSON.stringify(error))
              }

            })

      }
    }

  }


}

</script>
<style scoped>
a{
  text-decoration: none;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}
.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #BDBDBD;
  opacity: 1;
  font-weight: 300
}

:-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}

::-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}

input, textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2C3E50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus, textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304FFE;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1A237E;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }
  .card2 {
    border-top: 1px solid #EEEEEE !important;
    margin: 0px 15px;
  }
  div#back{
    display: none;
  }
}

div#back {
  background-image: url("~@/assets/images/solid.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.footer-section {
  background: #24252a;
  position: relative;
}

</style>