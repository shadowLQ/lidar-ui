<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :trap-focus="false" :title="title"
             :style="{ width: '920px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-form :rules="rules" ref="formRef" :model="formParams" label-width="120"
                label-placement="left">
          <n-grid :cols="3" x-gap="20" y-gap="10">
            <n-form-item-gi label="租赁物编号" path="assetNo">
              <n-input clearable :disabled=true placeholder="租赁物编号"
                       v-model:value="formParams.assetNo"/>
            </n-form-item-gi>
            <n-form-item-gi label="租赁物名称" path="assetName">
              <n-input clearable :disabled=true placeholder="租赁物名称"
                       v-model:value="formParams.assetName"/>
            </n-form-item-gi>
            <n-form-item-gi label="计提日期" path="countDate">
              <n-date-picker placeholder="计提日期" style="min-width: 100%" value-format="yyyy-MM-dd"
                             v-model:formatted-value="formParams.countDate" type="date"
                             clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="原币币种" path="currency">
              <n-select placeholder="原币币种" v-model:value="formParams.currency" :options=dict1170
                        filterable clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="计提金额-原币" path="allowanceAmt">
              <n-input-number :show-button=false placeholder="计提金额-原币" :parse="parse" :format="format"
                              v-model:value="formParams.allowanceAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="计提金额-人民币" path="allowanceAmtRmb">
              <n-input-number :show-button=false placeholder="计提金额-人民币" :parse="parse" :format="format"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折人民币汇率" path="exchRateRmb">
              <n-input placeholder="折人民币汇率" v-model:value="formParams.exchRateRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="备注" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </n-card>
      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>

  </div>
</template>
<script lang="ts">


import {ref, unref, reactive, defineComponent, getCurrentInstance} from 'vue';
import {useMessage} from 'naive-ui';
import {useRoute} from "vue-router";
import { saveOrUpdate } from '@/api/asset/allowanceDetail';


const rules = {
  assetNo: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入租赁物编号',
  },
  assetName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入租赁物名称',
  },
  countDate: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入计提日期',
  },
  currency: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择原币币种',
  },
  allowanceAmt: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请计提金额-原币',
  },
  allowanceAmtRmb: {
    required: true,
    trigger: ['blur', 'change'],
    message: '计提金额-人民币',
  },
};


export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: '添加资产减值明细',
    },
    width: {
      type: Number,
      default: 450,
    },
    reload: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    let route = useRoute();
    let assetAddSeqno = route.params.seqno;
    const message = useMessage();
    const showModal = ref(false);
    const formBtnLoading = ref(false);
    const formRef: any = ref(null);
    const {proxy} = getCurrentInstance();
    const {dict1170} = proxy.$useDict("1170");
    const defaultValueRefByDict = () => ({
      assetNo: '',
      assetName: '',
      countDate: null,
      currency: null,
      allowanceAmt: '',
      allowanceAmtRmb: '',
      exchRateRmb: '',
      memo: '',
      seqno: '',
      assetAddSeqno: assetAddSeqno
    });
    let formParams = reactive(defaultValueRefByDict());

    function addTable() {
      showModal.value = true;
      handleReset();
    }

    function confirmForm(e) {
      e.preventDefault();
      formBtnLoading.value = true;
      formRef.value.validate((errors) => {
        if (!errors) {
          saveOrUpdate(formParams).then(res => {
            console.log(res)
            showModal.value = false;
            message.success(res.message);
            props.reload.reload()
          })
          // console.log(tata)
          // message.success('新建成功');
          // setTimeout(() => {
          // });
        } else {
          message.error('请填写完整信息');
        }
        formBtnLoading.value = false;
      });
    }

    function handleReset() {
      formRef.value?.restoreValidation();
      formParams = Object.assign(unref(formParams), defaultValueRefByDict());
      // console.log("handleResetByDict",params.value.dictTypeCd)
      // formParams.dictTypeCd=props.dictTypeCd;
    }

    return {
      formRef,
      formBtnLoading,
      showModal,
      rules,
      formParams,
      handleReset,
      addTable,
      confirmForm,
      dict1170,
      parse: (input: string) => {
        const nums = input.replace(/,/g, '').trim()
        if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
        return nums === '' ? null : Number.NaN

      },
      format: (value: number | null) => {
        if (value === null) return ''
        return value.toLocaleString('en-US')
      }
    };
  },
});


</script>
