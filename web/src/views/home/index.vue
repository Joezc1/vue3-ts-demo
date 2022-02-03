<template>
  <div class="home-wrapper">
    <div class="p-20 header">
      <div class="font-weight-bold fz-20">账单总览</div>
      <div class="flex mt-10">
        <div class="flex align-center">
          <div class="fz-12">总支出：</div>
          <div class="font-weight-bold fz-20 flex align-center">
            <div>￥1000</div>
          </div>
        </div>
        <div class="ml-10 flex align-center">
          <div class="fz-12">总收入：</div>
          <div class="font-weight-bold fz-20 flex align-center">
            <div>￥1000</div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-start">
        <div class="filter py-4 px-15 flex align-center">
          <div class="fz-10">
            全部类型
          </div>
          <div class="ml-5">
          <van-icon name="arrow-down" />
          </div>
        </div>
        <div class="ml-10 filter py-4 px-15 flex align-center">
          <div class="fz-10">
            2022-02
          </div>
          <div class="ml-5">
          <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,reactive } from "vue"
import { useStore } from "@/store/index";
const requestData = reactive({
  page_number: 1,
  page_size: 10,
  date: '',
  type_id: ''
})

</script>

<style scoped lang="scss">
.home-wrapper {
  .header {
    color: #fff;
    background-color: rgb(0, 127, 255);
  }
  .filter{
    background-color: rgb(0, 114, 229);
    border-radius: 20px;
  }
}
</style>
