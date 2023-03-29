import { createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ViewUIPlus from 'view-ui-plus'
// import 'view-ui-plus/dist/styles/viewuiplus.css'


createApp(App).use(VueAxios ,axios,ViewUIPlus).mount('#app')
