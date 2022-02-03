<template>
  <div class="login-wrapper">
    <div>
      <van-nav-bar title="登录" />
    </div>
    <div class="banner" ></div>

    <div class>
      <div class="flex px-35 py-15 mt-10 align-center">
        <div @click="changeType(1)" class :class="type === 1 ? 'tab-item-active' : 'tab-item'">登录</div>
        <div
          @click="changeType(2)"
          class="ml-20"
          :class="type === 2 ? 'tab-item-active' : 'tab-item'"
        >注册</div>
      </div>

      <div class="mt-5">
        <van-form label-width="45px" @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              size="large"
              label="账号"
              placeholder="请输入账号"
              clearable
              :rules="[{ required: true, message: '请填写用户名' }]"
            >
              <template #left-icon>
                <van-icon size="20px" name="contact" />
              </template>
            </van-field>
            <van-field
              v-model="password"
              size="large"
              type="password"
              name="password"
              label="密码"
              clearable
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            >
              <template #left-icon>
                <van-icon size="20px" name="shield-o" />
              </template>
            </van-field>

            <van-field name="checked">
              <template #input>
                <van-checkbox size="large" shape="round" v-model="checked">
                  <div class="fz-15">我已阅读并同意《登陆条款》</div>
                </van-checkbox>
              </template>
            </van-field>
          </van-cell-group>
          <div class="mt-30 ml-15 mr-15">
            <van-button
              round
              block
              type="primary"
              native-type="submit"
            >{{ type === 1 ? '立即登录' : '立即注册' }}</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index"
import { Toast } from "vant"
import { LoginSubmitType } from "@/helper/type"
import { useRouter } from "vue-router"
import { ref,computed } from "vue"
const Router = useRouter()
const type = ref(1)
const store = useStore()
const checked = ref(false);
const username = ref()
const password = ref()

const changeType = (e: number): void => {
  type.value = e
}

const onSubmit = async (value: LoginSubmitType): Promise<void> => {
  if (!checked.value) {
    Toast.fail('请选勾选用户隐私协议');
  }
  if (type.value === 1) {
    const res = await store.dispatch('user/login', {
      username: username.value,
      password: password.value
    })
    if (res.code) {
      store.commit('user/setToken',res.data.token)
      console.log(store.state.user.token);
      Toast.success('登陆成功');
      setTimeout(() => {
        Router.push({
          path: '/home'
        })
      }, 1000)
    } else {
      Toast.fail(res.msg);
    }
  } else {
    const res = await store.dispatch('user/register', {
      username: username.value,
      password: password.value
    })
    if (res.code) {
      Toast.success('注册成功');
      type.value = 1
    }
  }

}

</script>

<style lang="scss" scoped>
.login-wrapper {
  min-height: 100vh;
  // background-color: #f5f5f5;
  .banner {
    height: 250px;
    background-image: url("@/assets/images/welcome.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .color-blue {
    color: rgb(0, 127, 255);
  }
  .tab-item-active {
    font-size: 18px;
    color: rgb(0, 127, 255);
    font-weight: bold;
  }
  .tab-item {
    font-size: 16px;
  }
}
</style>
