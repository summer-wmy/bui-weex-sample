import App from '../views/example/index.vue'
import buiweex from 'bui-weex'

Vue.use(buiweex);

App.el = '#root'

new Vue(App)