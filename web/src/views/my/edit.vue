<template>
    <div class="edit-wrapper">
        <div>
            <van-nav-bar title="用户信息" />
        </div>

        <div class="p-15 border-bottom fz-25 font-weight-bold">个人资料</div>
        <div>
            <van-field name="uploader" label="文件上传">
                <template #input>
                    <van-uploader
                        multiple
                        :max-count="1"
                        :after-read="afterRead"
                        v-model="file"
                    />
                </template>
            </van-field>
            <!-- <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />-->
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonApi from "@/service/api/common"
import { Toast } from "vant"
import { ref } from "vue"
const file:any = ref([]);

const afterRead = async (data: any) => {
    file.value = []
    const formData = new FormData()
    formData.append('file', data.file)
    // 此时可以自行将文件上传至服务器
    const res = await CommonApi.upload(formData)
    if(res.code){
        file.value.push({url:res.data})
    }
};
</script>

<style lang="scss">
.edit-wrapper {
    .border-bottom {
        border-bottom: 1px solid #eee;
    }
}
</style>