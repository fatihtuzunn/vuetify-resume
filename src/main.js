import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faCoffee, faHatWizard, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faLinkedin, faGithub,faUserSecret, faHatWizard, faCoffee)



/* add font awesome icon component */
Vue.component('fa', FontAwesomeIcon)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
