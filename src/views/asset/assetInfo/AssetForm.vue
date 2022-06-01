<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :title="title"
             :style="{ width: '1200px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-form :rules="rules" ref="formRef" :model="formParams" label-width="110"
                label-placement="left">
          <n-grid :cols="4" x-gap="20" y-gap="10">
            <n-form-item-gi label="租赁物编号" path="assetNo">
              <n-input clearable  placeholder="租赁物编号" v-model:value="formParams.assetNo"/>
            </n-form-item-gi>
            <n-form-item-gi label="租赁物名称" path="assetName">
              <n-input clearable  placeholder="租赁物名称" v-model:value="formParams.assetName"/>
            </n-form-item-gi>
            <n-form-item-gi label="原币币种">
              <n-select placeholder="原币币种" v-model:value="formParams.currency" :options=dict1170 filterable clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产原值-原币">
              <n-input-number :show-button=false placeholder="资产原值-原币"
                              v-model:value="formParams.allowanceAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产原值-人民币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="资产原值-人民币"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="累计折旧-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="累计折旧-原币"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="累计折旧-人民币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="累计折旧-人民币"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="每月折旧(原币)" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="预计净残值-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="预计净残值-原币"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折旧算法" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="折旧算法"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="净残值率" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="净残值率"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产所属SPV名称" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="资产所属SPV名称"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产所属部门名称" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="主办客户经理" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="协办客户经理" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="项目名称" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="项目名称2" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="项目名称3" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="板块" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="减值准备-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="减值准备-人民币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片累计折旧-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片原值-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片减值准备-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片租赁物编号" path="exchRateRmb">
              <n-input placeholder="折人民币汇率" v-model:value="formParams.exchRateRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="产品大类" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="产品子类" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产差异" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产描述" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产减值差异" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折旧差异" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机-MSN号" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机-型号" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机注册号" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船名" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船型" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-IMO编号" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-呼号" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船籍" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船级社" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-吨位(总吨/净吨)" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-主尺度" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="制造商" path="memo">
              <n-input placeholder="备注" v-model:value="formParams.memo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产注册地" path="memo">
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
      dict1170
    };
  },
});


</script>
