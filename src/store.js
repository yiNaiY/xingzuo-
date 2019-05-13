import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cont:'',
      name:'',
      today:'',
      tomorrow:'',
      week:'',
      nextweek:'',
      month:'',
      year:''
  },
  mutations: {
    getcont(state,val){
          state.cont = val

      },
      today(state,val){
          state.today = val
          console.log(state.cont);
      },
      tomorrow(state,val){
          state.tomorrow = val
          console.log(state.cont);
      },
      week(state,val){
          state.week = val
      },
      nextweek(state,val){
          state.nextweek = val
      },
      month(state,val){
          state.month = val
      },
      year(state,val){
          state.year = val
      }
  },
  actions: {
    get(a,b){
        console.log(b);
        axios.get('/api/constellation/getAll?consName='+b[0]+'&type='+b[1]+'&key=0db4a6757ed64712b97d60238e8c6bf1')
          .then((cont) =>{
            console.log(JSON.parse(cont.request.responseText))
            //   console.log(cont.request)
            this.commit(b[1],JSON.parse(cont.request.responseText))
              // console.log(this.commit('getcont',JSON.parse(cont.request.responseText)));
          })
    },
  }
})
