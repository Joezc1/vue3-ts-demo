import { createApp } from 'vue'
import router from "./router"
import { store,key } from "./store"
import { Button,NavBar,Form, Field, CellGroup,Checkbox, CheckboxGroup, Icon,Tabbar, TabbarItem } from 'vant';
import 'lib-flexible/flexible';

import App from './App.vue'
const app = createApp(App);

app.use(Button)
app.use(NavBar)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.use(store,key)
app.use(router)
app.mount('#app')

// createApp(App).use(Button).use(NavBar).use(store,key).use(router).mount('#app')
