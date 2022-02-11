<template>
  <div class="my-wrapper" v-cloak>
    <div class="header flex p-20">
      <div class="flex-1">
        <div class="fz-17 color-fff font-weight-bold" v-text="'昵称：' + (info.data.username || '')"></div>
        <div class="mt-10 color-fff fz-14" v-text="info.data.signature"></div>
      </div>
      <div class="ml-10">
        <img v-if="info.data.avatar" class="avatar" :src="info.data.avatar" alt="用户头像" />
        <img src="@/assets/images/deault.png" class="avatar" v-else alt="默认用户头像" />
      </div>
    </div>

    <div class="menus m-15">
      <div @click="goToPage('/user/edit')" class="cell p-15 flex align-center">
        <van-icon size="20" name="user-o" />
        <div class="flex-1 ml-5 fz-15">用户信息</div>
        <van-icon name="arrow" size="20" />
      </div>
      <div class="cell p-15 flex align-center" @click="tipMessage">
        <van-icon size="20" name="shield-o" />
        <div class="flex-1 ml-5 fz-15">修改密码</div>
        <van-icon name="arrow" size="20" />
      </div>
    </div>

    <div class="submit-btn flex justify-center">
      <van-button round size="large" plain type="danger" @click="logOut">退出登录</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { useStore } from "@/store/index"
import { ref, reactive } from "vue"
import userApi from "@/service/api/user"
import { Toast } from "vant";
let info: any = reactive({
  data: {}
})
const router = useRouter()
const store = useStore()

// 退出登录
const logOut = () => {
  store.commit('user/logout')
}

// 获取用户信息
const getUserInfo = async () => {
  const res = await userApi.info()
  info.data = res.data
}

const tipMessage = () => {
  Toast.fail('功能开发中')
}

const goToPage = (path:string) => {
  router.push({path})
}

getUserInfo()
</script>

<style lang="scss">
[v-clock]{
  display: none;
}
.my-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: #f5f5f5;
  .color-fff {
    color: #fff;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  .header {
    height: 140px;
    background-image: url("@/assets/images/back.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .menus {
    position: relative;
    top: -60px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #ffffff;
  }
  .submit-btn {
    position: absolute;
    left: 5%;
    width: 90%;
    bottom: 15%;
  }
}
</style>

