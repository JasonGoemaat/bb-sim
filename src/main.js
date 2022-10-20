import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { CorpSim, Home } from './Views'
import CorpSim from './Views/CorpSim.vue'
import Home from './Views/Home.vue'
import './style.css'
import App from './App.vue'

console.log('VIEWS: ', { CorpSim, Home })

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/corp', name: 'CorpSim', component: CorpSim }
]

const history = createWebHistory()

// createApp(App, { props: { routes: Object, name: String } }, { props: { routes, name: 'andy' } })
createApp(App, { routes, name: 'andy' })
.use(createRouter({ history, routes }))
.mount('#app')
