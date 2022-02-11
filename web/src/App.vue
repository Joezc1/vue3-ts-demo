 <template>
    <router-view />
    <div ref="TabbarDom" v-if="showMenu">
        <van-tabbar placeholder v-model="active" @change="onChange">
            <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index"
import { watch,ref,reactive,computed,onMounted } from "vue"
import { useRouter,useRoute } from "vue-router";
const Router = useRouter()
const stpre = useStore()
const menuList = reactive(['home','user'])
const Route = useRoute()
const active = ref('home')
const TabbarDom = ref<HTMLElement | null>(null)
watch(()=> Route.name, (newVal:any) => {
    active.value = newVal
},
{
    immediate: true
})
const showMenu = computed(()=>{
    return menuList.includes(active.value)
})
const onChange = (name:any):void => {
    Router.push({
        name
    })
}
onMounted(()=>{
    setTimeout(()=>{
        stpre.commit('user/setTabbarHeight',TabbarDom.value?.clientHeight || 0)
    },1000)
})

</script>

<style>
@import url("@/assets/style/iconfont/iconfont.css");
</style>