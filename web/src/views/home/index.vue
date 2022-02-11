<template>
  <div class="home-wrapper">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :offset="10"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="p-20 header">
          <div class="font-weight-bold fz-20">账单总览</div>
          <div class="flex mt-10">
            <div class="flex align-center">
              <div class="fz-12">总支出：</div>
              <div class="font-weight-bold fz-20 flex align-center">
                <div class="flex align-center">
                  <i class="iconfont icon-renminbi fz-13" />
                  <span v-text="totalExpense"></span>
                </div>
              </div>
            </div>
            <div class="ml-15 flex align-center">
              <div class="fz-12">总收入：</div>
              <div class="font-weight-bold fz-20 flex align-center">
                <div class="flex align-center">
                  <i class="iconfont icon-renminbi fz-13" />
                  <span v-text="totalIncome"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 flex justify-start">
            <div class="filter py-4 px-15 flex align-center">
              <div class="fz-10">全部类型</div>
              <div class="ml-5">
                <van-icon name="arrow-down" />
              </div>
            </div>
            <div class="ml-10 filter py-4 px-15 flex align-center">
              <div class="fz-10" @click="tapDate">{{ requestData.data.date }}</div>
              <div class="ml-5">
                <van-icon name="arrow-down" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div v-for="(item, index) in list" :key="index" class="m-10 list-item">
            <div class="list-item-header border-bottom p-15 flex align-center justify-between">
              <div v-text="item.date" class="fz-17 font-weight-bold"></div>
              <div class="flex fz-15 font-weight-bold align-center">
                <div>
                  支:
                  <i class="iconfont icon-renminbi fz-13" />
                  <span class="price" v-text="sumCount(item.bills).outAmount || 0"></span>
                </div>
                <div class="ml-10">
                  收:
                  <i class="iconfont icon-renminbi fz-13" />
                  <span class="price" v-text="sumCount(item.bills).inAmount || 0"></span>
                </div>
              </div>
            </div>
            <div
              class="children-item p-15"
              v-for="(sitem, sindex) in item.bills"
              @click="goToPage({ name: 'bill', query: { id: sitem.id } })"
              :key="sitem.id"
            >
              <div class="flex justify-between">
                <div class="flex">
                  <div class="flex align-center">
                    <i
                      class="iconfont fz-25"
                      style="color: rgb(0, 127, 255);"
                      :class="typeIcon(sitem.type_id * 1)"
                    ></i>
                  </div>
                  <div class="fz-16 ml-5" style="font-weight: 500;" v-text="sitem.type_name"></div>
                </div>
                <div
                  class="fz-15"
                  :style="[amountColor(sitem.pay_type * 1)]"
                  v-text="(sitem.pay_type * 1 === 2 ? '+' : '-') + '￥' + sitem.amount"
                ></div>
              </div>
              <div class="fz-14 mt-10" v-text="dealTime(sitem.create_date)"></div>
            </div>
          </div>
        </div>

        <van-popup v-model:show="showDate" position="bottom" :style="{ height: '30%' }">
          <van-datetime-picker
            @confirm="changeDate"
            @cancel="cancelDate"
            type="year-month"
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </van-popup>

        <KeyBord
          @changeDate="changeAddDate"
          :date="addData.data.date"
          @close="complete"
          @changeType="changeType"
          :outTypes="outTypes"
          :inTypes="inTypes"
          @changePayType="changePayType"
          @input="inputAmount"
          :amount="addData.data.amount"
          :type_id="addData.data.type_id"
          :pay_type="addData.data.pay_type"
          :showKeyInput="showKeyInput"
        />
      </van-list>
    </van-pull-refresh>

    <div class="add-btn" @click="showKeyInput = true">
      <i class="iconfont fz-25 icon-jilu"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Toast } from "vant"
import KeyBord from "@/components/KeyBorad.vue"
import { typeMap } from "@/helper/index"
import moment from "moment"
import { computed, ref, reactive, onMounted } from "vue"
import { useStore } from "@/store/index";
import { useRouter } from "vue-router"
import listApi from "@/service/api/list"
import billApi from "@/service/api/bill"
// import router from "@/router"
let list: any = ref([]);
const totalExpense = ref(0)
const totalIncome = ref(0)
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let showDate = ref(false)
let showKeyInput = ref(false)
const minDate = new Date(2022, 0)
const maxDate = new Date(2027, 10)
const store = useStore()
const Router = useRouter()
const outTypes: any = ref([])
const inTypes: any = ref([])

const requestData = reactive({
  data: {
    page_number: 1,
    page_size: 10,
    date: moment(new Date()).format("YYYY-MM"),
    type_id: ''
  }
})

let addData: any = reactive({
  data: {
    amount: '',
    date: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
    pay_type: 1,
    remark: '',
    type_id: 0,
    type_name: ''
  }
})

// 金额变化
const inputAmount = (value: string | number) => {
  addData.data.amount = value
}

// 跳转
const goToPage = (data: any) => {
  console.log("data", data);
  Router.push(data)
}

// 处理时间格式
const dealTime = computed(() => {
  return (date: any): any => {
    return moment(date).format("hh:mm")
  }
})

// 根据type_id返回对应icon
const typeIcon = computed(() => {
  return (id: number): string => {
    if (!id) return ""
    return typeMap[id].icon
  }
})

// 切换账单类型
const changePayType = (type: number | string) => {
  addData.data.pay_type = type
}

// 切换账单类型
const changeType = (id: number | string, name: string) => {
  addData.data.type_id = id
  addData.data.type_name = name
}

// 统计当日账单总额
const sumCount = computed(() => {
  return (arr: any): any => {
    let inAmount = 0
    let outAmount = 0
    for (let item of arr) {
      if (item.pay_type * 1 === 2) {
        inAmount += item.amount * 1
      } else {
        outAmount += item.amount * 1
      }
    }
    return { inAmount, outAmount }
  }
})

// 支出收入账单颜色
const amountColor = computed(() => {
  return (type: number): any => {
    return {
      color: type * 1 === 1 ? 'rgb(57, 190, 119)' : 'red',
      'font-weight': 600
    }
  }
})

/**
 * 加载账单列表
 * type boolean true表示加载下一页
 */
const getList = async (): Promise<void> => {
  loading.value = true
  finished.value = false

  const res = await listApi.list(requestData.data)
  if (res.code) {
    totalExpense.value = res.data.totalExpense
    totalIncome.value = res.data.totalIncome
    if (!res.data.list.length) {
      finished.value = true
    }
    list.value = list.value.concat(res.data.list)
    console.log("list", list.value);
  }
  finished.value = true

  loading.value = false
}
/**
 * 获取账单类型列表
 */
const getTypeList = async (): Promise<void> => {
  outTypes.value = []
  inTypes.value = []
  const res = await listApi.typeList()
  if (res.code) {
    if (res.data.list) {
      for (let item of res.data.list) {
        if (+item.type === 1) {
          outTypes.value.push(item)
        } else {
          inTypes.value.push(item)
        }
      }
      if (!addData.data.type_id) {
        addData.data.type_id = res.data.list[0].id
        addData.data.type_name = res.data.list[0].name
      }
    }

  }
}

// 显示切换日期
const tapDate = () => {
  showDate.value = true
}

// 列表下拉刷新
const onRefresh = () => {
  list.value = []
  requestData.data.page_number = 1
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  getList()
  // onLoad();
};

// 切换日期
const changeDate = (value: any) => {
  requestData.data.date = moment(value).format("YYYY-MM")
  showDate.value = false
  onRefresh()
}

// 日期取消回调
const cancelDate = () => {
  showDate.value = false
}

onMounted(() => {
  getList()
  getTypeList()
})

// 列表触底加载
const onLoad = () => {
  requestData.data.page_number++
  console.log("页面触底加载");
  getList()
};

// 录入订单点击完成
const complete = async () => {
  const res = await billApi.add(addData.data)
  if (res.code) {
    Toast.success('录入成功');
    addData.data = {
      amount: '',
      date: moment(new Date()).format("YYYY-MM-DD"),
      pay_type: 1,
      remark: '',
      type_id: 0,
      type_name: ''
    }
    showKeyInput.value = false
    getTypeList()
    getList()
  }
}

// addData.date变化回调
const changeAddDate = (value: any) => {
  addData.data.date = moment(value).format("YYYY-MM-DD hh:mm:ss")
}

</script>

<style scoped lang="scss">
.home-wrapper {
  min-height: 100vh !important;
  background-color: #f5f5f5;
  .border-bottom {
    border-bottom: 1px solid #eeeeee;
  }
  .price {
    font-weight: 600;
  }
  min-height: 100%;
  background-color: #f5f5f5;
  .list-item {
    border-radius: 8px;
    box-shadow: 0 0 10px #eeeeee;
    background-color: #ffffff;
    .children-item {
      border-bottom: 1px solid #eeeeee;
    }
  }
  .header {
    color: #fff;
    background-color: rgb(0, 127, 255);
  }
  .filter {
    background-color: rgb(0, 114, 229);
    border-radius: 20px;
  }
  .add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: #ffffff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    box-shadow: 0 0 20px #eeeeee;
    right: 20px;
    bottom: 15vh;
  }
  .add-btn > i {
    color: rgb(0, 114, 229);
  }
}
</style>
