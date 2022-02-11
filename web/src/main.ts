import { createApp } from 'vue'
import router from "./router"
import { store,key } from "./store"
import { Cell, Button,NavBar,DatetimePicker,Form,Uploader, Popup,Field,NumberKeyboard, CellGroup,Checkbox, CheckboxGroup,List,PullRefresh, Icon,Tabbar, TabbarItem } from 'vant';
import 'lib-flexible/flexible';
import App from './App.vue'
const app = createApp(App);

app.use(Button)
app.use(NavBar)
app.use(Form)
app.use(Field)
app.use(Cell)
app.use(CellGroup)
app.use(Popup)
app.use(NumberKeyboard)
app.use(DatetimePicker)
app.use(Checkbox)
app.use(List)
app.use(CheckboxGroup)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Uploader)
app.use(PullRefresh)
app.use(store,key)
app.use(router)
app.mount('#app')

// createApp(App).use(Button).use(NavBar).use(store,key).use(router).mount('#app')
