<template>
    <div class="bill-detail-wrapper" v-cloak>
        <div>
            <van-nav-bar @click-left="onClickLeft" left-arrow title="账单详情" />
        </div>

        <div class="m-20 card px-20 py-25" v-if="info.data.id">
            <div class="justify-center flex title">
                <div class="tag-item">
                    <i class="iconfont" :class="typeIcon(info.data.type_id)"></i>
                </div>
                <div class="flex align-center ml-10 fz-15" v-text="info.data.type_name"></div>
            </div>
            <div
                class="mt-10 flex justify-center fz-25 font-weight-bold"
                v-text="info.data.pay_type === 2 ? ('+￥' + info.data.amount) : ('-￥' + info.data.amount)"
            ></div>
            <div class="flex align-center fz-15 mt-20">
                <div class="flex text-grey fz-14 align-center">记录时间</div>
                <div class="ml-20 align-center" v-text="dealDate(info.data.create_date * 1) || ''"></div>
            </div>
            <div class="flex fz-15 mt-15">
                <div class="text-grey fz-14">备注</div>
                <div v-text="info.data.remark"></div>
            </div>
            <div class="flex mt-25">
                <div
                    class="flex-1 fz-15 flex justify-center"
                    @click="delBill"
                    style="color: red;"
                >删除</div>
                <div class="flex-1 fz-15 flex justify-center" @click="onClickEdit">编辑</div>
            </div>
        </div>
    </div>

    <KeyBord
          @changeDate="changeDate"
          :date="editForm.data.date"
          @close="complete"
          @changeType="changeType"
          :outTypes="outTypes"
          :inTypes="inTypes"
          @changePayType="changePayType"
          @input="inputAmount"
          :amount="editForm.data.amount"
          :type_id="editForm.data.type_id"
          :pay_type="editForm.data.pay_type"
          :showKeyInput="showKeyInput"
    />
</template>

<script setup lang="ts">
import listApi from "@/service/api/list"
import KeyBord from "@/components/KeyBorad.vue"
import { BillDetailType } from "@/helper/type"
import moment from "moment"
import { typeMap } from "@/helper/index"
import { reactive, ref, computed } from "vue"
import { useRoute } from "vue-router"
import billApi from "@/service/api/bill"
import { Dialog, Toast } from "vant"
const Route = useRoute()
const { id }: any = Route.query
const showKeyInput = ref(false)
let info = reactive<any>({
    data: {
        amount: "",
        date: "",
        pay_type: 0,
        remark: "",
        type_id: 0,
        type_name: ""
    }
})
let outTypes: any = ref([])
let inTypes: any = ref([])

let editForm:any = reactive({
    data: {
        amount: "",
        date: "",
        pay_type: 0,
        remark: "",
        type_id: 0,
        type_name: ""
    }
})

// 点击编辑账单
const onClickEdit = () => {
    showKeyInput.value = true
}

// 处理日期格式
const dealDate = computed(() => {
    return (date: any): any => {
        return moment(new Date(date)).format('YYYY-MM-DD hh:mm:ss')
    }
})

// 获取订单详情
const getDetail = async () => {
    const res = await billApi.get({ id })
    if (res.code) {
        info.data = JSON.parse(JSON.stringify(res.data)) 
        editForm.data = JSON.parse(JSON.stringify(res.data)) 
        editForm.data.date = moment(new Date(editForm.data.date*1)).format('YYYY-MM-DD hh:mm:ss')
    }
}

// 金额变化
const inputAmount = (value: string | number) => {
  editForm.data.amount = value
}



// 切换账单类型
const changePayType = (type: number | string) => {
  editForm.data.pay_type = type
}

// 切换账单类型
const changeType = (id: number | string, name: string) => {
  editForm.data.type_id = id
  editForm.data.type_name = name
}


// 切换日期
const changeDate = (value: any) => {
  editForm.data.date = moment(value).format("YYYY-MM-DD hh:mm:ss")
}

// 录入订单点击完成
const complete = async () => {
  const res = await billApi.update(editForm.data)
  if (res.code) {
    Toast.success('录入成功');
    showKeyInput.value = false
    getDetail()
  }
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
        }

    }
}

// 返回
const onClickLeft = () => history.back();

// 删除帐单
const delBill = () => {
    Dialog.confirm({
        title: '温馨提示',
        message:
            '是否确认删除该条账单？',
    })
        .then(async () => {
            const res = await billApi.del({ id })
            if (res.code) {
                Toast.success('删除成功')
                setTimeout(() => {
                    onClickLeft()
                }, 1000)
            }
        })
        .catch(() => {
            // on cancel
        });
}



// 支出收入账单颜色
const amountColor = computed(() => {
    return (type: number): any => {
        return {
            color: type * 1 === 1 ? 'rgb(57, 190, 119)' : 'red',
            'font-weight': 600
        }
    }
})

// 根据type_id返回对应icon
const typeIcon = computed(() => {
    return (id: number | string): string => {
        if (!id) return ""
        return typeMap[id].icon
    }
})
getTypeList()
getDetail()
</script>

<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.bill-detail-wrapper {
    min-height: 100vh;
    background-color: #f5f5f5;
    .tag-item {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: rgb(0, 127, 255);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 25px;
    }
    .text-grey {
        color: #666;
    }
    .card {
        border-radius: 15px;
        background-color: #fff;
    }
}
</style>
