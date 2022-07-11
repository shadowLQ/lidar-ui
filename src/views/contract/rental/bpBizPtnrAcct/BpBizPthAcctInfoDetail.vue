<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :trap-focus="false" :title="title"
             :style="{ width: '1000px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-descriptions label-placement="left" class="py-2">
          <n-descriptions-item>
            <template #label>合作伙伴</template>
            {{ formParams.bpId }}
          </n-descriptions-item>
          <n-descriptions-item label="开户行名称">NaiveUiAdmin@qq.com</n-descriptions-item>
          <n-descriptions-item label="开户行分支行名称">支付宝</n-descriptions-item>
          <n-descriptions-item label="银行账户类别">NaiveUiAdmin@163.com</n-descriptions-item>
          <n-descriptions-item label="银行账户账号">￥1980.00</n-descriptions-item>
          <n-descriptions-item label="银行账户用途">
            <n-tag type="success">{{getDictLable(formParams.bankAcctPrpsCd, dict1272)}}</n-tag>
          </n-descriptions-item>
          <n-descriptions-item label="备注">{{formParams.remark}}</n-descriptions-item>
        </n-descriptions>
      </n-card>
      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
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
import {getDictLable, useDict} from "@/utils/dict";



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
  },
  setup(props) {
    let route = useRoute();
    let assetAddSeqno = route.params.seqno;
    const message = useMessage();
    const showModal = ref(false);
    const formBtnLoading = ref(false);
    const formRef: any = ref(null);
    const {proxy} = getCurrentInstance();
    let { dict1272 } = proxy.$useDict("1272");
    let { dict3019 } = proxy.$useDict("3019");
    const defaultValueRef = () => ({
      bpId: '',
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
      // handleReset();
      getDictLable(formParams.bankAcctPrpsCd, dict1272)
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
      formParams,
      handleReset,
      addTable,
      dict3019,
      dict1272,
      getDictLable
    };
  },
});


</script>
