<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :title="title"
             :style="{ width: '1000px' }">
      <n-card
        class="mt-2"
        :segmented="true"
      >
        <n-form :rules="rules" ref="formRef" :model="formParams" label-width="160"
                label-placement="top">
          <n-grid :cols="4" x-gap="20" y-gap="10">
            <n-form-item-gi label="租赁物编号" path="assetNo">
              <n-input clearable placeholder="租赁物编号" v-model:value="formParams.assetNo"/>
            </n-form-item-gi>
            <n-form-item-gi label="租赁物名称" path="assetName">
              <n-input clearable placeholder="租赁物名称" v-model:value="formParams.assetName"/>
            </n-form-item-gi>
            <n-form-item-gi label="原币币种" path="currency">
              <n-select placeholder="原币币种" v-model:value="formParams.currency" :options=dict1170
                        filterable clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产原值-原币">
              <n-input-number :show-button=false placeholder="资产原值-原币" :parse="parse" :format="format"
                              v-model:value="formParams.origPrice" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产原值-人民币" path="origPriceRmb" >
              <n-input-number :show-button=false placeholder="资产原值-人民币" :parse="parse" :format="format"
                              v-model:value="formParams.origPriceRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="累计折旧-原币" path="depreciationAmt">
              <n-input-number :show-button=false placeholder="累计折旧-原币"
                              :parse="parse" :format="format"     v-model:value="formParams.depreciationAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="累计折旧-人民币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="累计折旧-人民币" :parse="parse" :format="format"
                              v-model:value="formParams.depreciationAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="每月折旧(原币)" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="每月折旧(原币)" :parse="parse" :format="format"
                              v-model:value="formParams.monthDepreciationAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="预计净残值-原币" path="estimateSalvageAmt">
              <n-input-number :show-button=false placeholder="预计净残值-原币" :parse="parse" :format="format"
                              v-model:value="formParams.estimateSalvageAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折旧算法" path="depreciationAmtRmb">
              <n-input  placeholder="折旧算法"
                              v-model:value="formParams.depreciationMethod" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="净残值率" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="净残值率"
                              v-model:value="formParams.estimateSalvageRatio" clearable/>
            </n-form-item-gi>

            <n-form-item-gi label="资产所属SPV名称" path="ownerSpvId">
              <n-select placeholder="资产所属SPV名称" v-model:value="formParams.ownerSpvId" :options="ofc" :fallback-option=false filterable clearable  />
            </n-form-item-gi>

            <n-form-item-gi label="资产所属部门名称" path="ownerDepartmentCde">
              <n-select placeholder="资产所属部门名称" v-model:value="formParams.ownerDepartmentCde" :options=thirdDep :fallback-option=false filterable clearable   />
            </n-form-item-gi>

            <n-form-item-gi label="主办客户经理">
              <n-select placeholder="主办客户经理" v-model:value="formParams.mainManagerId" clearable :options="users"  :fallback-option=false  />
            </n-form-item-gi>

            <n-form-item-gi label="协办客户经理" >
              <n-select placeholder="协办客户经理" v-model:value="formParams.coManagerId" clearable :options="users"  :fallback-option=false  />
            </n-form-item-gi>

            <n-form-item-gi label="项目名称" >
              <n-input  placeholder="项目名称"
                              v-model:value="formParams.projectName" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="项目名称2" path="depreciationAmtRmb">
              <n-input  placeholder="项目名称2" v-model:value="formParams.projectName2" clearable/>
            </n-form-item-gi>

            <n-form-item-gi label="项目名称3" path="depreciationAmtRmb">
              <n-input placeholder="项目名称3"
                              v-model:value="formParams.projectName3" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="板块" path="depreciationAmtRmb">
              <n-input  placeholder="每月折旧(原币)"
                              v-model:value="formParams.unitName" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="减值准备-原币" >
              <n-input-number :show-button=false placeholder="减值准备-原币" :parse="parse" :format="format"
                              v-model:value="formParams.allowanceAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="减值准备-人民币" path="allowanceAmtRmb">
              <n-input-number :show-button=false placeholder="减值准备-人民币" :parse="parse" :format="format"
                              v-model:value="formParams.allowanceAmtRmb" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片累计折旧-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="EAS资产卡片累计折旧-原币" :parse="parse" :format="format"
                              v-model:value="formParams.cardDepreciationAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片原值-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="EAS资产卡片原值-原币" :parse="parse" :format="format"
                              v-model:value="formParams.cardOrigPrice" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片减值准备-原币" path="depreciationAmtRmb">
              <n-input-number :show-button=false placeholder="EAS资产卡片减值准备-原币" :parse="parse" :format="format"
                              v-model:value="formParams.cardAllowanceAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="EAS资产卡片租赁物编号" path="exchRateRmb">
              <n-input placeholder="EAS资产卡片租赁物编号" v-model:value="formParams.cardAssetNo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="产品大类" path="productCategory">
              <n-select placeholder="产品大类" v-model:value="formParams.productCategory" clearable :options=dict7020 :fallback-option=false   />
            </n-form-item-gi>
            <n-form-item-gi label="产品子类">
              <n-select placeholder="产品子类" v-model:value="formParams.productSubCategory" clearable :options="category"  :fallback-option=false  />
            </n-form-item-gi>
            <n-form-item-gi label="资产差异" path="memo">
              <n-input placeholder="资产差异" v-model:value="formParams.origPriceDiff" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产描述" path="memo">
              <n-input placeholder="资产描述" v-model:value="formParams.assetStatusDesc" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产减值差异" path="memo">
              <n-input placeholder="资产减值差异" v-model:value="formParams.allowanceDiffAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="折旧差异" path="memo">
              <n-input placeholder="折旧差异" v-model:value="formParams.depreciationDiffAmt" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机-MSN号" path="memo">
              <n-input placeholder="飞机-MSN号" v-model:value="formParams.planeMsn" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机-型号" path="memo">
              <n-input placeholder="飞机-型号" v-model:value="formParams.planeType" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="飞机注册号" path="memo">
              <n-input placeholder="飞机注册号" v-model:value="formParams.planeRegno" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船名" path="memo">
              <n-input placeholder="船舶-船名" v-model:value="formParams.shipName" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船型" path="memo">
              <n-input placeholder="船舶-船型" v-model:value="formParams.shipType" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-IMO编号" path="memo">
              <n-input placeholder="船舶-IMO编号" v-model:value="formParams.shipImo" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-呼号" path="memo">
              <n-input placeholder="船舶-呼号" v-model:value="formParams.shipCallSign" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船籍" path="memo">
              <n-input placeholder="船舶-船籍" v-model:value="formParams.shipNative" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-船级社" path="memo">
              <n-input placeholder="船舶-船级社" v-model:value="formParams.shipClassSociety" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-吨位(总吨/净吨)" path="memo">
              <n-input placeholder="船舶-吨位(总吨/净吨)" v-model:value="formParams.shipTon" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="船舶-主尺度" path="memo">
              <n-input placeholder="船舶-主尺度" v-model:value="formParams.shipDimension" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="制造商" path="memo">
              <n-input placeholder="制造商" v-model:value="formParams.manufacturer" clearable/>
            </n-form-item-gi>
            <n-form-item-gi label="资产注册地" path="memo">
              <n-input placeholder="资产注册地" v-model:value="formParams.regAddress" clearable/>
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


import {ref, unref, reactive, defineComponent, getCurrentInstance, watch} from 'vue';
import {useMessage} from 'naive-ui';
import {saveOrUpdate} from '@/api/asset/asset';
import {getCategory, getCompany, getThirdDep, getUsers} from "@/utils/dict";


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
    message: '请输入原币币种',
  },
  ownerSpvId: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择资产所属SPV名称',
  },
  ownerDepartmentCde: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择资产所属部门名称',
  },
  productCategory: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择产品大类',
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
    const ofc = getCompany();
    const message = useMessage();
    const showModal = ref(false);
    const formBtnLoading = ref(false);
    const formRef: any = ref(null);
    const {proxy} = getCurrentInstance();
    const {dict1170} = proxy.$useDict("1170");
    const {dict7020} = proxy.$useDict("7020");
    let category=ref()
    const thirdDep = getThirdDep();
    const users = getUsers();
    const defaultValueRefByDict = () => ({
      assetNo: '',
      assetName: '',
      currency: null,
      origPrice: null,
      origPriceRmb: '',
      depreciationAmt: '',
      depreciationAmtRmb: '',
      monthDepreciationAmt: '',
      estimateSalvageAmt: '',
      depreciationMethod: '',
      estimateSalvageRatio: '',
      ownerSpvId: '',
      ownerDepartmentCde: '',
      mainManagerId: '',
      coManagerId: '',
      projectName: '',
      projectName2: '',
      projectName3: '',
      unitName: '',
      allowanceAmt: '',
      allowanceAmtRmb: '',
      cardDepreciationAmt: '',
      cardOrigPrice: '',
      cardAllowanceAmt: '',
      cardAssetNo: '',
      productCategory: '',
      productSubCategory: '',
      origPriceDiff: '',
      assetStatusDesc: '',
      allowanceDiffAmt: '',
      depreciationDiffAmt: '',
      planeMsn: '',
      planeType: '',
      planeRegno: '',
      shipName: '',
      shipType: '',
      shipImo: '',
      shipCallSign: '',
      shipNative: '',
      shipClassSociety: '',
      shipTon: '',
      shipDimension: '',
      manufacturer: '',
      regAddress: '',
      seqno: ''
    });
    let formParams = reactive(defaultValueRefByDict());

    function addTable() {
      showModal.value = true;
      handleReset();
    }


    watch(() => formParams.productCategory, (newValue) => {
      console.log('watch 已触发', newValue)
      if (newValue!=null&&newValue!=''){
      handleUpdateValue(formParams.productCategory)

      }
    })

    function  handleUpdateValue (value: string) {
      // message.info('value: ' + JSON.stringify(value))
      getCategory(value).then(va=>category.value=va);
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

    // const formatter = (value) => {
    //   const values = String(value).split('.');
    //   values[0]=values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //   // console.log(value)
    //   // console.log(111)
    //   return values.join('.')
    // };



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
      dict7020,
      ofc,
      category,
      thirdDep,
      users,
      handleUpdateValue,
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
