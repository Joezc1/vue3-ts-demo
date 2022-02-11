<template>
    <van-popup v-model:show="showKeyInput" position="bottom" :style="{ 'min-height': '55%' }">
        <div class="p-20">
            <div class="flex justify-between align-center">
                <div class="flex align-center">
                    <div
                        class="pay-item py-2 px-13 flex align-center"
                        @click="changePayType(1)"
                        :class="props.pay_type * 1 === 1 ? 'pay-active' : ''"
                    >支出</div>
                    <div
                        class="ml-10 pay-item py-2 px-13 flex align-center"
                        @click="changePayType(2)"
                        :class="props.pay_type * 1 === 2 ? 'pay-active' : ''"
                    >收入</div>
                </div>
                <div @click="showAddDate = true" class="py-2 flex align-center justify-center px-13 fz-14 date-item">
                    <div v-text="dealDate(props.date)"></div>
                    <div>
                        <van-icon name="arrow-down" />
                    </div>
                </div>
            </div>

            <div class="flex align-end font-weight-bold border-bottom mt-15">
                <div class="fz-25" v-text="'￥' + props.amount"></div>
            </div>

            <div class="mt-20">
                <div
                    class="flex"
                    style="white-space: nowrap;overflow-x: scroll;"
                    v-if="props.pay_type * 1 === 1"
                >
                    <div
                        class="mr-15"
                        @click="changeType(item.id, item.name)"
                        v-for="(item, index) in outTypes"
                        :key="item.id"
                    >
                        <div
                            class="flex justify-center icon-item align-center"
                            :class="props.type_id * 1 === item.id ? 'icon-item-active' : ''"
                        >
                            <i class="iconfont fz-22" :class="typeIcon(item.id)"></i>
                        </div>
                        <div v-text="item.name" style="text-align: center;" class="fz-12"></div>
                    </div>
                </div>

                <div class="flex" style="white-space: nowrap;overflow-x: scroll;" v-else>
                    <div
                        class="mr-15"
                        @click="changeType(item.id, item.name)"
                        v-for="(item, index) in inTypes"
                        :key="item.id"
                    >
                        <div
                            class="flex justify-center icon-item align-center"
                            :class="props.type_id * 1 === item.id ? 'icon-item-active' : ''"
                        >
                            <i class="iconfont fz-22" :class="typeIcon(item.id)"></i>
                        </div>
                        <div v-text="item.name" style="text-align: center;" class="fz-12"></div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <van-number-keyboard
                :show="showKeyInput"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @close="close"
                v-model="keyValue"
                :maxlength="6"
            />
        </div>
    </van-popup>

    <van-popup v-model:show="showAddDate" position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
            @confirm="changeDate"
            type="datehour"
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
            :value="props.date"
        />
    </van-popup>
</template>      

<script lang="ts" setup>
import moment from "moment"
import { typeMap } from "@/helper/index"
import { computed, ref, reactive, onMounted, watch } from "vue"
const keyValue: any = ref('')
const showAddDate = ref(false)
const minDate = new Date(2022, 0 , 1)
const maxDate = new Date(2027, 10 , 1)

interface IProps {
    showKeyInput: boolean,
    type_id: number,
    pay_type: number,
    amount: any,
    outTypes: any,
    inTypes: any,
    date: any
}

const props = withDefaults(defineProps<IProps>(), {
    showKeyInput: false,
    type_id: 0,
    pay_type: 0,
    amount: '',
    outTypes: [],
    inTypes: [],
    date: ''
})

// 监听传入的amount变化
watch(() => props.amount, (newVal: any) => {
    keyValue.value = newVal
},
    {
        immediate: true
    })

// 键盘输入变化传入
watch(() => keyValue.value, (newVal: any) => {
    emit('input', newVal)
},
    {
        immediate: true
    })

const emit = defineEmits<{
    (e: 'changePayType', type: string | number): void,
    (e: 'changeType', type: string | number, name: string): void,
    (e: 'input', value: string | number): void,
    (e: 'close'): void,
    (e: 'changeDate', value: any): void,
}>()

// 根据type_id返回对应icon
const typeIcon = computed(() => {
    return (id: number): string => {
        return typeMap[id].icon
    }
})

// 改变类型
const changeType = (type: string | number, name: string) => {
    emit('changeType', type, name)
}

// 改变账单类型
const changePayType = (type: string | number) => {
    emit('changePayType', type)
}

const close = () => {
    emit('close')
}

// 切换日期
const changeDate = (value: any) => {
    showAddDate.value = false
    emit('changeDate', value)
}



// 处理时间格式
const dealDate = computed(() => {
  return (date: any): any => {
    return moment(date).format("YYYY-MM-DD hh:mm")
  }
})



</script>    

<style lang="scss" scoped>
.icon-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(245, 245, 245);
    color: rgb(122, 122, 122);
}
.icon-item-active {
    background-color: rgb(0, 127, 255);
    color: #ffffff;
}
.pay-item {
    background-color: rgb(245, 245, 245);
    color: rgb(122, 122, 122);
    border-radius: 40px;
}
.date-item {
    background-color: rgb(245, 245, 245);
    border-radius: 40px;
    color: #7a7a7a;
}
.pay-active {
    background-color: rgb(234, 251, 246);
    border: 1px solid rgb(51, 153, 254);
    color: rgb(51, 153, 254);
}
</style>