<template>
  <Navbar></Navbar>
  <Header></Header>
  <section class="section-services mb-5">

    <div class="row justify-content-center text-center">
      <div class="col-md-10 col-lg-8">
        <div class="header-section">
          <h2 class="title">Nos<span> Contact </span></h2>
          <p class="description">Vous pouvez écrire vos messages et problèmes dans notre plateforme.</p>
        </div>
      </div>
    </div>
    <div>
    </div>
<!--Section heading-->
<div class="contact">
<h2 class="h1-responsive font-weight-bold  my-4">Avez-vous des questions?</h2>
<!--Section description-->
<div class=" w-responsive">Vous pouvez Ecrire Vos problèmes et vos message  dans notre platforme.</div>

<div class="row">

    <!--Grid column-->
    <div class="col-md-8 mt-5">
        <form id="contact-form" method="post"  @submit.prevent="add_contact">

            <!--Grid row-->
            <div class="row mb-2">

                <!--Grid column-->
                <div class="col-md-6 mt-2">
                    <div class="md-form">
                        <input type="text" id="name" name="name" class="form-control" placeholder="Nom *" v-model="first_name">
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_contact.length > 0 && errors_contact[0]">
                     {{errors_contact[0]}}
                  </span>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mt-2">
                    <div class="md-form ">
                        <input type="text"  name="Prenom" class="form-control" placeholder="Prénom *" v-model="last_name">
                    </div>
                   <span class="error-feedback  text-danger" v-if="errors_contact.length > 0 && errors_contact[1]">
                     {{errors_contact[1]}}
                  </span>
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row mb-2">
               <!--Grid column-->
               <div class="col-md-6 mt-2">
                    <div class="md-form">
                        <input type="email" id="email" name="email" class="form-control" placeholder="Adresse Email *" v-model="email">
                    </div>
                   <span class="error-feedback  text-danger" v-if="errors_contact.length > 0 && errors_contact[2]">
                     {{errors_contact[2]}}
                  </span>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mt-2">
                    <div class="md-form ">
                        <input type="text"  name="sujet" class="form-control" placeholder="Sujet *" v-model="subject">
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_contact.length > 0 && errors_contact[3]">
                     {{errors_contact[3]}}
                  </span>
                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row mb-2">

                <!--Grid column-->
                <div class="col-md-12 mt-2">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea" placeholder="Ecrire Votre Message *" v-model="message"></textarea>
                    </div>
                  <span class="error-feedback  text-danger" v-if="errors_contact.length > 0 && errors_contact[4]">
                     {{errors_contact[4]}}
                  </span>

                </div>
            </div>
            <!--Grid row-->
            <button type="submit" class="btn btn-danger">Envoyer</button>
        </form>
  
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-4 text-center bg-light p-5 rounded-5 mt-1">
        <ul class="list-unstyled mb-0">
            <li >
              <FAIFatma   :icon="['fas' ,'location-dot']" class="icon alt" />
                <p>139 Hay Mohammadi, Ouarzazate 45 000, Maroc</p>
            </li>

            <li >
              <FAIFatma   :icon="['fas' ,'phone']" class="icon alt" />
                <p>(00) 212673396077</p>
            </li>

            <li>
              <FAIFatma   :icon="['fas' ,'envelope']" class="icon alt" />
                <p>contact@elmouatasimaicenter.com</p>
            </li>
        </ul>
    </div>
    <!--Grid column-->

</div>
</div>
</section>
<!--Section: Contact v.2-->
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
export default {
  name: `Contact`,
  components: {
    Navbar,
    Header,
    Footer
  },
  data() {
    return {
      email : '',
      first_name : '',
      last_name : '',
      subject: '',
      message: '',
      errors_contact : [],
    }
  },
  methods: {
    async add_contact() {
      this.test_input_contact();
      if (!this.errors_contact.length){
        let formData = this.toFormData({first_name:this.first_name,last_name:this.last_name,email:this.email,subject:this.subject,message:this.message});
        axios
            .post(`/Add_AMO_API/Contact/`,formData)
            .then(response => {
              console.log(response)
              this.$router.push('/')
              this.$moshaToast('message   created successfully',{
                transition: 'zoom',
                type: 'success',
              })
              this.errors_contact = []
              this.$router.push('/')
            })
            .catch(error =>{
              console.log(error)
              this.$moshaToast('errors',{
                transition: 'bounce',
                type: 'danger',
                position: 'top-center',
                timeout: 11111,
                toastBackgroundColor: 'red',
              })
            })
      }
    },
    toFormData(obj){
      var fd=new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    }
    ,
    test_input_contact() {
      this.errors_contact = [];
      var regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.first_name.length < 2 || this.first_name.length > 20) {
        this.errors_contact[0] = 'Invalid first name given';
      }
      if (this.last_name.length < 2 || this.last_name.length > 20) {
        this.errors_contact[1] = 'Invalid last name given';
      }
      if (!regEmail.test(this.email)) {
        this.errors_contact[2] = 'Invalid email given';
      }
      if (this.subject.length < 8 || this.subject.length > 255) {
        this.errors_contact[3] = 'Invalid subject given.';
      }
      if (this.message.length < 10 || this.message == '') {
        this.errors_contact[4] = 'Invalid birth message given';
      }
    }
  }
}
</script>

<style scoped>
@import '../style/sectionstyle.css';
.contact{
   font-family: 'Poppins', sans-serif;
}
svg{
  color: #FF0000;
}
</style>