<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :trap-focus="false" :title="title"
             :style="{ width: '1200px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-form :rules="rules" ref="formRef" :model="formParams" label-width="130"
                label-placement="left">
          <n-grid :cols="3" x-gap="10" y-gap="10">
            <n-form-item-gi label="合作伙伴" path="bpId">
              <n-select clearable filterable  placeholder="合作伙伴" :options="bpBizPtnrBase" v-model:value="formParams.bpId" :render-label="renderLabel" />
            </n-form-item-gi>
            <n-form-item-gi label="开户行名称" path="bankNm">
              <n-input clearable  placeholder="开户行名称" v-model:value="formParams.bankNm"/>
            </n-form-item-gi>
            <n-form-item-gi label="开户行分支行名称" path="bankBrchNm">
              <n-input placeholder="开户行分支行名称" v-model:value="formParams.bankBrchNm" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="银行账户类别" path="bankAcctTypeCd">
              <n-select placeholder="银行账户类别" v-model:value="formParams.bankAcctTypeCd" :options=dict3019 filterable clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="银行账户账号" path="bankAcctNbr">
              <n-input-number :show-button=false placeholder="银行账户账号" v-model:value="formParams.bankAcctNbr" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="银行账户用途" >
              <n-select placeholder="银行账户用途" v-model:value="formParams.bankAcctPrpsCd" :options=dict1272 clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="备注">
              <n-input placeholder="备注" v-model:value="formParams.remark" clearable/>
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
import { saveOrUpdate } from '@/api/contract/rental/bpBizPtnrAcct';
import {getBpBizPtnrBase} from "@/utils/dict";
import {renderLabel} from '@/utils/dataUtils';

const rules = {
  bpId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请选择合作伙伴',
  },
  bankNm: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入开户行名称',
  },
  bankBrchNm: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入开户行分支行名称',
  },
  bankAcctTypeCd: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择银行账户类别',
  },
  bankAcctNbr: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入银行账户账号',
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
    const {dict3019} = proxy.$useDict("3019");
    const {dict1272} = proxy.$useDict("1272");
    let bpBizPtnrBase = getBpBizPtnrBase();
    const defaultValueRef = () => ({
      bpId: null,
      bankNm: '',
      bankBrchNm: null,
      bankAcctTypeCd: null,
      bankAcctNbr: null,
      bankAcctPrpsCd: null,
      remark: ''
    });
    let formParams = reactive(defaultValueRef());

    function addTable() {
      showModal.value = true;
      handleReset();
      console.log("----------",dict3019)
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
      formParams = Object.assign(unref(formParams), defaultValueRef());
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
      dict3019,
      dict1272,
      bpBizPtnrBase,
      renderLabel
    };
  },
});


</script>
