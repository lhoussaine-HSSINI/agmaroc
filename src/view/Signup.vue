<template>
  <Navbar></Navbar>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div class="p-5 bg-image " style="
        height: 300px;
        "></div>
    <!-- Background image -->

    <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
      <div class="card-body" style="margin-bottom: 80px">
        <div class="row d-flex justify-content-center mb-4">
          <div class="col-lg-8">
            <section class="section-services">
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-md-10 col-lg-8">
                    <div class="header-section">
                      <h2 class="title">Vos <span>Informations</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <form method="post"  @submit.prevent="SubmitForm">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"  class="form-control" placeholder="Nom"
                           v-model="first_name"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[0]">
                     {{errors_user[0]}}
                  </span>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"   class="form-control"  placeholder="Prénom"
                           v-model="last_name"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[1]">
                     {{errors_user[1]}}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder="Adresse Email"
                           v-model="email"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[2]">
                     {{errors_user[2]}}
                  </span>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" class="form-control"  placeholder="Mode passe"
                           v-model="password"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[3]">
                     {{errors_user[3]}}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="date"  class="form-control"  placeholder="Date de naissance"
                           v-model="birth_date" :max="date_birth_min"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[4]">
                     {{errors_user[4]}}
                  </span>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"  class="form-control"  placeholder="Adresse"
                           v-model="address"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[5]">
                     {{errors_user[5]}}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <select class="form-select" aria-label="Default select example" v-model="city">
                      <option selected>Choisir une Ville</option>
                      <option value="Tanger">Tanger</option>
                      <option value="Zagora">Zagora</option>
                      <option value="Safi">Safi</option>
                    </select>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[6]">
                     {{errors_user[6]}}
                  </span>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="tel"  class="form-control"  placeholder="+212628499384 "
                           v-model="phone_number"  required/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[7]">
                     {{errors_user[7]}}
                  </span>
                </div>
                <div class="col-md-6 ">
                  <div class="form-outline">
                    <input type="text"  class="form-control"  placeholder="CIN"
                           v-model="cin"/>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_user.length > 0 && errors_user[8]">
                     {{errors_user[8]}}
                  </span>
                </div>

                <section class="section-services">
                  <div class="container">
                    <div class="row justify-content-center text-center">
                      <div class="col-md-10 col-lg-8">
                        <div class="header-section">
                          <h2 class="title">Types <span>d'adhésions</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!--type d'abbonemment-->
              <div class="d-flex justify-content-center" id="type">
                <div class="form-outline">
                  <button type="button" class="btn btn-dark" @click="test_input_user('Association')">Association</button>
                  <button type="button" class="btn btn-danger" @click="test_input_user('Membre')">Membre</button>
                  <button type="button" class="btn btn-dark" @click="test_input_user('organisation')">Autre organisation</button>
                </div>
              </div>
              <!--type association-->
              <div v-if="showAddassoc">
                <div class="row" style="margin-top: 80px">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control" placeholder="Nom d'association"  v-model="nameassociation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[0]">
                     {{errors_association[0]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="email"  class="form-control" placeholder="Adresse Email d'association"  v-model="emailassociation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[1]">
                     {{errors_association[1]}}
                  </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control"  placeholder="Adresse d'association" v-model="addressassociation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[2]">
                     {{errors_association[2]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="tel"  class="form-control"  placeholder="Téléphone d'association" v-model="phoneassociation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[3]">
                     {{errors_association[3]}}
                  </span>
                  </div>
                </div>
                <div class=" mb-4">
                  <div class="form-outline">
                    <label for="type_association">Choisir un domaine *</label>
                    <select class="form-select" aria-label="Default select example" v-model="type" id="type_association">
                      <option disabled="disabled" >Choisir un domaine</option>
                      <option value="Sport">Sport</option>
                      <option value="culture,spectalcles et activités artistiques">culture,spectalcles et activités artistiques</option>
                      <option value="Action social,humanitaire et caritative,hébergement social,médico-social,santé">Action social,humanitaire et caritative hébergement social,médico-social,santé</option>
                      <option value="défense de causes de droits d'intérêts">défense de causes de droits d'intérêts</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Gestion des services économiques et dévloppement local">Gestion des services économiques et dévloppement local</option>
                    </select>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[4]">
                     {{errors_association[4]}}
                  </span>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Objective d'association" v-model="Objectivesassociation"></textarea>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[5]">
                     {{errors_association[5]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Information d'association" v-model="informationsassociation"></textarea>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[6]">
                     {{errors_association[6]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control"  placeholder="Entrez votre le lieu d'association ( ville ) " v-model="cityassociation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[7]">
                     {{errors_association[7]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="file"  class="form-control"  placeholder="Entrez votre logo" ref="file_add" accept="image/png,image/jpg, image/jpeg"
                             v-on:change="onChangeFileUploadadd()"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_association.length > 0 && errors_association[8]">
                     {{errors_association[8]}}
                  </span>
                  </div>
                </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <router-link to="/Login"  class="text-danger"> Connecter</router-link></small>
                </div>
              </div>
              <!-- type membres -->
              <div v-if="showuaddmembre">
                <div class="mb-4">
                  <div class="form-outline"  style="margin-top: 80px">
                    <label for="membreassociation">Choisir une association *</label>
                    <select class="form-select" aria-label="Default select example" v-model="association" id="membreassociation">
                      <option disabled="disabled"> Choisir une association </option>
                      <option v-for="assoc in table_association" v-bind:key="assoc.id" :value="assoc.id">{{ assoc.nameassociation }}</option>
                    </select>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_member.length > 0 && errors_member[0]">
                           {{errors_member[0]}}
                        </span>
                </div>
                <div class="mb-4">
                  <div class="form-outline">
                    <label for="type_member_association">Choisir type de membre dans l'association *</label>
                    <select class="form-select" aria-label="Default select example" v-model="type_member_association" id="type_member_association">
                      <option disabled="disabled"> Choisir</option>
                      <option value="Secrétaire"> Secrétaire </option>
                      <option value="Vice-Secrétaire"> Vice-Secrétaire </option>
                      <option value="Trésorerie"> Trésorerie </option>
                      <option value="Vice-trésorerie"> Vice-trésorerie </option>
                      <option value="Membres du bureau"> Membres du bureau </option>
                    </select>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_member.length > 0 && errors_member[1]">
                           {{errors_member[1]}}
                        </span>
                </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <router-link to="/Login"  class="text-danger"> Connecter</router-link></small>
                </div>
              </div>

              <!-- type organization -->
              <div v-if="showuaddorga">
                <div class="row" style="margin-top: 80px">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control" placeholder="Nom d'organisation" v-model="nameorganisation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[0]">
                     {{errors_organization[0]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="email"  class="form-control" placeholder="Adresse Email d'organisation" v-model="emailorganisation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[1]">
                     {{errors_organization[1]}}
                  </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control"  placeholder="Adresse d'organisation" v-model="addressorganisation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[2]">
                     {{errors_organization[2]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="tel"  class="form-control"  placeholder="Téléphone d'organisation" v-model="phoneorganisation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[3]">
                     {{errors_organization[3]}}
                  </span>
                  </div>
                </div>
                <div class=" mb-4">
                  <div class="form-outline">
                    <label for="type_organization">Choisir un domaine *</label>
                    <select class="form-select" aria-label="Default select example" v-model="type" id="type_organization">
                      <option disabled="disabled" >Choisir un domaine</option>
                      <option value="Sport">Sport</option>
                      <option value="culture,spectalcles et activités artistiques">culture,spectalcles et activités artistiques</option>
                      <option value="Action social,humanitaire et caritative,hébergement social,médico-social,santé">Action social,humanitaire et caritative hébergement social,médico-social,santé</option>
                      <option value="défense de causes de droits d'intérêts">défense de causes de droits d'intérêts</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Gestion des services économiques et dévloppement local">Gestion des services économiques et dévloppement local</option>
                    </select>
                  </div>
                  <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[4]">
                     {{errors_organization[4]}}
                  </span>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Objective d'organisation " v-model="Objectivesorganisation"></textarea>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[5]">
                     {{errors_organization[5]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Information d'organisation" v-model="informationsorganisation"></textarea>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[6]">
                     {{errors_organization[6]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control"  placeholder="Entrez votre le lieu d'organisation ( ville ) " v-model="cityorganisation"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[7]">
                     {{errors_organization[7]}}
                  </span>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="file"  class="form-control"  placeholder="Entrez votre logo" ref="file_add_organization" accept="image/png,image/jpg, image/jpeg"
                             v-on:change="onChangeFileUploadadd_organization()"/>
                    </div>
                    <span class="error-feedback  text-danger" v-if="errors_organization.length > 0 && errors_organization[8]">
                     {{errors_organization[8]}}
                  </span>
                  </div>
                </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <router-link to="/Login"  class="text-danger"> Connecter</router-link></small>
                </div>
              </div>
              <!-- Submit button -->
              <!-- Register buttons -->

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
  <footer class="footer-section">
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "@/components/Navbaruse";
import Footer from "@/components/Footer";
import axios from "axios";
import store from "@/store";
export default {
  name: `Signup`,
  components: {
    Navbar,
    Footer,
  },
  data(){
    return {

      showAddassoc:false,
      showuaddmembre:false,
      showuaddorga:false,
      // start info user
      date_birth_min:new Date().toISOString().slice(0,10),
      email : '',
      first_name : '',
      last_name : '',
      password : '',
      birth_date : '',
      address : '',
      city : '',
      cin : '',
      phone_number : '',
      errors_user : '',
      // end info user
      // start info association
      user_id : '',
      nameassociation : '',
      emailassociation : '',
      addressassociation : '',
      phoneassociation : '',
      type : '',
      Objectivesassociation : '',
      informationsassociation : '',
      cityassociation : '',
      image : '',
      errors_association : [],
      // end info association
      // start info member
      table_association : [],
      member_association : '',
      association : '',
      type_member_association : '',
      errors_member : [],
      // end info member
      // start info organization
      president_of_organisation : '',
      nameorganisation : '',
      emailorganisation : '',
      phoneorganisation : '',
      addressorganisation : '',
      cityorganisation : '',
      Objectivesorganisation : '',
      informationsorganisation : '',
      errors_organization : [],
      // end info organization
    }
  },
  mounted(){
    document.title =  'Sign up | Association maroc'
    if(store.state.user.isAuthenticated){
      this.$router.push({path:'/MyAccount'});
    }
  },
  methods: {
    onChangeFileUploadadd(){
      this.image = this.$refs.file_add.files[0];
      console.log(this.image);
    },
    onChangeFileUploadadd_organization(){
      this.image = this.$refs.file_add_organization.files[0];
      console.log(this.image);
    },
    test_input_user(a){
      this.errors_user=[];
      var regnumberphone = /^\+[1-9]{1}[0-9]{3,14}$/;
      var regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(this.first_name.length < 2 || this.first_name.length > 20){
        this.errors_user[0]='Invalid first name given';
      }
      if(this.last_name.length < 2 || this.last_name.length > 20){
        this.errors_user[1]='Invalid last name given';
      }
      if(!regEmail.test(this.email)){
        this.errors_user[2]='Invalid email given';
      }
      if(this.password.length < 8 || this.password.length > 20){
        this.errors_user[3]='The number of symbols must not exceed 20 or less than 8 symbols.';
      }
      if(this.birth_date.length != 10 || this.birth_date == ''){
        console.log(this.birth_date)
        this.errors_user[4]='Invalid birth day given';
      }
      if(this.address === ''){
        this.errors_user[5]='Invalid address given';
      }
      if(this.city === ''){
        this.errors_user[6]='Invalid city given';
      }
      if(!regnumberphone.test(this.phone_number)){
        this.errors_user[7]='Invalid phone number given';
      }
      if(this.cin === '' && this.cin.length < 3 ){
        this.errors_user[8]='Invalid cin given';
      }
      if(this.errors_user.length === 0)
        if(a === 'Association')
          this.addmodalassoc(true);
        else if (a === 'Membre')
          this.addmodalmembre(true);
        else if(a === 'organisation')
          this.addmodalorga(true);
    },
    test_input_association(){
      this.errors_association=[];
      var regnumberphone = /^\+[1-9]{1}[0-9]{3,14}$/;
      var regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(this.nameassociation.length < 2 || this.nameassociation.length > 50){
        this.errors_association[0]='Invalid name association given';
      }
      if(!regEmail.test(this.emailassociation)){
        this.errors_association[1]='Invalid email given';
      }
      if(this.addressassociation === ''){
        this.errors_association[2]='Invalid address given';
      }
      if(!regnumberphone.test(this.phoneassociation)){
        this.errors_association[3]='Invalid phone number given';
      }
      if(this.type === '' || this.type == 'domain'){
        this.errors_association[4]='Invalid Type given';
      }
      if(this.Objectivesassociation === '' || this.Objectivesassociation.length < 40 ){
        this.errors_association[5]='Invalid Objectives association given';
      }
      if(this.informationsassociation === '' || this.informationsassociation.length < 100 ){
        this.errors_association[6]='Invalid informations association given';
      }
      if(this.cityassociation === ''){
        this.errors_association[7]='Invalid city given';
      }
      if(this.image === ''){
        this.errors_association[8]='Invalid image given';
      }

    },
    // +15586359563
    test_input_member(){
      this.errors_member=[];
      if(this.association === ''){
        this.errors_member[0]='Invalid Association given';
      }
      if(this.type_member_association === ''){
        this.errors_member[1]='Invalid Type given';
      }
    },
    test_input_organization(){
      this.errors_organization=[];
      var regnumberphone = /^\+[1-9]{1}[0-9]{3,14}$/;
      var regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(this.nameorganisation.length < 2 || this.nameorganisation.length > 50){
        this.errors_organization[0]='Invalid name organisation given';
      }
      if(!regEmail.test(this.emailorganisation)){
        this.errors_organization[1]='Invalid email given';
      }
      if(this.addressorganisation === ''){
        this.errors_organization[2]='Invalid address given';
      }
      if(!regnumberphone.test(this.phoneorganisation)){
        this.errors_organization[3]='Invalid phone number given';
      }
      if(this.type === ''){
        this.errors_organization[4]='Invalid Type given';
      }
      if(this.Objectivesorganisation === '' || this.Objectivesorganisation.length < 40 ){
        this.errors_organization[5]='Invalid Objectives organisation given';
      }
      if(this.informationsorganisation === '' || this.informationsorganisation.length < 100 ){
        this.errors_organization[6]='Invalid informations organisation given';
      }
      if(this.cityorganisation === ''){
        this.errors_organization[7]='Invalid city given';
      }
      if(this.image === ''){
        this.errors_organization[8]='Invalid image given';
      }

    },
    async SubmitForm(){
      if( this.showAddassoc){
        this.test_input_association();
        if (!this.errors_association.length  && !this.errors_user.length){
          let formData = this.toFormData({username:this.email,email:this.email,first_name:this.first_name,last_name:this.last_name,password:this.password,
            password2 : this.password ,birth_date : this.birth_date, address:this.address, city:this.city,  cin:this.cin, phone_number:this.phone_number});
          axios
              .post(`/signup/Aadmin`,formData)
              .then(response => {
                let a = response.data
                this.user_id = a.user.id
                formData=this.toFormData({user:this.user_id,nameassociation:this.nameassociation,emailassociation:this.emailassociation,addressassociation:this.addressassociation,phoneassociation:this.phoneassociation,
                  type : this.type ,Objectivesassociation : this.Objectivesassociation, informationsassociation:this.informationsassociation, cityassociation:this.cityassociation, logoassociation:this.image });
                axios
                    .post(`/Add_AMO_API/Association/`,formData)
                    .then(response => {
                      this.$router.push('/')
                      this.$moshaToast('account association  created successfully',{
                        transition: 'zoom',
                        type: 'success',
                      })
                      this.errors_association = response.data
                      this.errors_association = []
                      this.errors_user = []
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
              })
              .catch(error =>{
                this.$moshaToast(error.response.data.username[0],{
                  transition: 'bounce',
                  type: 'danger',
                  position: 'top-center',
                  timeout: 11111,
                  toastBackgroundColor: 'red',
                })
              })
        }
      }
      else if( this.showuaddmembre){
        this.test_input_member();
        if (!this.errors_member.length  && !this.errors_user.length){
          let formData = this.toFormData({username:this.email,email:this.email,first_name:this.first_name,last_name:this.last_name,password:this.password,
            password2 : this.password ,birth_date : this.birth_date, address:this.address, city:this.city,  cin:this.cin, phone_number:this.phone_number});
          axios
              .post(`/signup/Amember`,formData)
              .then(response => {
                let a = response.data
                this.member_association = a.user.id
                formData=this.toFormData({member_association:this.member_association,association:this.association,
                  type_member_association:this.type_member_association});
                axios
                    .post(`/Add_AMO_API/Member/`,formData)
                    .then(response => {
                      this.errors_member = response.data
                      this.errors_member = []
                      this.errors_user = []
                      this.$router.push('/')
                      this.$moshaToast('account member created successfully',{
                        transition: 'zoom',
                        type: 'success',
                      })

                    })
                    .catch(error =>{
                      this.$moshaToast('errors',{
                        transition: 'bounce',
                        type: 'danger',
                        position: 'top-center',
                        timeout: 11111,
                        toastBackgroundColor: 'red',
                      })
                      console.log(error)
                    })
              })
              .catch(error =>{
                this.$moshaToast(error.response.data.username[0],{
                  transition: 'bounce',
                  type: 'danger',
                  position: 'top-center',
                  timeout: 11111,
                  toastBackgroundColor: 'red',
                })
              })
        }
      }
      else if( this.showuaddorga){
        this.test_input_organization();
        if (!this.errors_organization.length  && !this.errors_user.length){
          let formData = this.toFormData({username:this.email,email:this.email,first_name:this.first_name,last_name:this.last_name,password:this.password,
            password2 : this.password ,birth_date : this.birth_date, address:this.address, city:this.city,  cin:this.cin, phone_number:this.phone_number});
          axios
              .post(`/signup/Oadmin`,formData)
              .then(response => {
                let a = response.data
                console.log(a)
                this.president_of_organisation = a.user.id
                formData=this.toFormData({president_of_organisation:this.president_of_organisation,nameorganisation:this.nameorganisation,
                  emailorganisation:this.emailorganisation,addressorganisation:this.addressorganisation,phoneorganisation:this.phoneorganisation,
                  type : this.type ,Objectivesorganisation : this.Objectivesorganisation, informationsorganisation:this.informationsorganisation,
                  cityorganisation:this.cityorganisation, logoorganisation:this.image});
                axios
                    .post(`/Add_AMO_API/Organization/`,formData)
                    .then(response => {
                      this.errors_organization = response.data
                      this.errors_organization = []
                      this.errors_user = []
                      this.$router.push('/')
                      this.$moshaToast('account organisation  created successfully',{
                        transition: 'zoom',
                        type: 'success',
                      })
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
              })
              .catch(error =>{
                this.$moshaToast(error.response.data.username[0],{
                  transition: 'bounce',
                  type: 'danger',
                  position: 'top-center',
                  timeout: 11111,
                  toastBackgroundColor: 'red',
                })
              })
        }
      }
    },
    addmodalassoc(val) {
      this.showAddassoc = val;
      this.showuaddmembre = false;
      this.showuaddorga=false
    },
    addmodalmembre(val) {
      this.showuaddmembre = val;
      this.showAddassoc = false;
      this.showuaddorga=false
      this.table_association = []
      axios
          .get(`/Add_AMO_API/Association/`)
          .then(response => {
            this.table_association = response.data
            console.log(this.table_association)
          })
          .catch(error =>{
            console.log(error)
          })
    },
    addmodalorga(val) {
      this.showuaddorga = val;
      this.showAddassoc = false;
      this.showuaddmembre = false;
    },
    toFormData(obj){
      var fd=new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.p-5.bg-image{
  background-image: url("~@/assets/images/signup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

}
.section-services {
  padding-top: 110px;
  padding-bottom: 120px;
  color: black;

}

.section-services .header-section {
  margin-bottom: 35px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: #FF0000;
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: #FF0000;
}

.section-services .header-section .title span {
  color: #FF0000;
}
.section-services {
  padding: 40px 40px 25px;
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services{
  padding: 30px 40px 40px;
}
.section-services .single-service .part-2 a {
  color: black;
  font-size: 14px;
  text-decoration: none;
}
h2.title {
  color: black;
}
.section-services .header-section {
  color: black;
}
h2.title {
  margin-top: 40px;
}
.footer-section {
  background: #24252a;
  position: relative;
}
.p-5.bg-image {
  margin-top: 54px;
}
#type{
  margin: auto;
}
.card {
  margin-bottom: 80px;
}
button{
  margin-left: 10px;
}
@media screen and (max-width: 600px) {
  button{
    margin-top: 5px;
  }
  h2{
    font-size: 17px;
  }
}
</style>