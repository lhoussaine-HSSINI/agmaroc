import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      token: '',
      isAuthenticated:false,
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      is_admin_assoc:false,
      is_member_assoc:false,
      is_admin_orga:false,
    }
  },
  getters: {
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token') && localStorage.getItem('id')){
        state.user.token=localStorage.getItem('token')
        state.user.id = localStorage.getItem('id')
        state.user.isAuthenticated=true
        state.user.is_admin_assoc = localStorage.getItem('is_admin_assoc')
        state.user.is_member_assoc = localStorage.getItem('is_member_assoc')
        state.user.is_admin_orga = localStorage.getItem('is_admin_orga')
        state.user.firstName = localStorage.getItem('firstName')
        state.user.lastName = localStorage.getItem('lastName')
      }else{
        state.user.token=''
        state.user.isAuthenticated=false
        state.user.id = ''
        state.user.is_admin_assoc = false
        state.user.is_member_assoc = false
        state.user.is_admin_orga = false
        state.user.firstName = ''
        state.user.lastName = ''
      }
    },
    setToken(state, token,id, is_admin_assoc, is_member_assoc, is_admin_orga,firstName , lastName){
      state.user.token=token
      state.user.isAuthenticated=true
      state.user.id = id
      state.user.is_admin_assoc = is_admin_assoc
      state.user.is_member_assoc = is_member_assoc
      state.user.is_admin_orga = is_admin_orga
      state.user.firstName = firstName
      state.user.lastName = lastName
    },
    removeToken(state){
      state.user.token=''
      state.user.isAuthenticated=false
      state.user.firstName = ''
      state.user.lastName = ''
      state.user.is_admin_assoc = ''
      state.user.is_member_assoc = ''
      state.user.is_admin_orga = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
