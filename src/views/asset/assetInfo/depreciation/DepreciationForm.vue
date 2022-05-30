<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :title="title"
             :style="{ width: '920px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-form :rules="rules" ref="formRef" :model="formParams" label-width="110"
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
            <n-form-item-gi label="折旧日期" path="depreciationDate">
              <n-date-picker placeholder="折旧日期" style="min-width: 100%" value-format="yyyy-MM-dd"
                             v-model:formatted-value="formParams.depreciationDate" type="date"
                             clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="原币币种">
              <n-select placeholder="原币币种" v-model:value="formParams.currency" :options=dict1170
                        filterable clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折旧金额-原币" path="depreciationAmt">
              <n-input-number :show-button=false placeholder="折旧金额-原币"
                              v-model:value="formParams.depreciationAmt" clearable/>
            </n-form-item-gi>

            <n-form-item-gi label="折旧金额-人民币" path="depreciationAmtRmb">
              <n-input placeholder="折旧金额-人民币"
                       v-model:value="formParams.depreciationAmtRmb" clearable

              />
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


import {ref, unref, reactive, defineComponent, getCurrentInstance, computed, watch} from 'vue';
import {useMessage} from 'naive-ui';
import {saveOrUpdate} from '@/api/asset/depreciationDetail';
import {useRoute} from "vue-router";


const rules = {
  assetNo: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入租赁物编号',
  },
  assetName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典值中文描述',
  },
  depreciationDate: {

    required: true,
    trigger: ['blur', 'change'],
    message: '请输入折旧日期',
  },
};


export default defineComponent({
  name: 'Dict',
  components: {},
  props: {
    title: {
      type: String,
      default: '添加资产折旧明细',
    },
    dictTypeCd: {
      type: String,
      default: '',
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
      depreciationDate: null,
      dictCnDesc: '',
      currency: null,
      depreciationAmt: '',
      depreciationAmtRmb: '',
      exchRateRmb: '',
      memo: '',
      seqno: '',
      assetAddSeqno: assetAddSeqno
    });
    let formParams = reactive(defaultValueRefByDict());

    watch(() => formParams.depreciationAmtRmb, (newValue, oldValue) => {
      console.log('watch 已触发', newValue)
      if (newValue!=null){
        formatter(String(newValue))
      }
    })

   function formatter(value){
     let values = value
       .replace(/[^0-9.]/g,'')
       .replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
       .replace(/,/g, '').split('.');
     // const values = formParams.depreciationAmtRmb;
     values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     formParams.depreciationAmtRmb=values.join('.')
   }
    const parser = () => {
      return formParams.depreciationAmtRmb.replace(/,/g, '')
    };

    function addTable() {
      showModal.value = true;
      handleReset();
    }

    function confirmForm(e) {
      e.preventDefault();
      formBtnLoading.value = true;
      formRef.value.validate((errors) => {
        if (!errors) {
          formParams.depreciationAmtRmb=parser();
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
      formatter,
      parser
    };
  },
});


</script>
