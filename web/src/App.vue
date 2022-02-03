 <template>
    <router-view />
    <div v-if="showMenu">
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { watch,ref,reactive,computed } from "vue"
import { useRouter,useRoute } from "vue-router";
const Router = useRouter()
const menuList = reactive(['home','user'])
const Route = useRoute()
const active = ref('home')
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

</script>