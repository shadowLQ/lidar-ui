<template>
  <div>
    <n-card
      :bordered="false"
      title='申请单详情'
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"

    >
      <n-form :rules="rules" ref="formRef" :model="formParams" label-width="180"
              label-placement="left">
        <n-grid :cols="2" x-gap="20" y-gap="10">
          <n-form-item-gi label="项目名称" path="loginNm">
            <n-input clearable placeholder="合同ID" v-model:value="formParams.busiProjectName"/>
          </n-form-item-gi>
          <n-form-item-gi label="申请放款时间" path="userNm">
            <n-date-picker placeholder="申请放款时间" value-format="yyyy-MM-dd" type="date" v-model:formatted-value="formParams.applyLoanDate" clearable />
          </n-form-item-gi>
          <n-form-item-gi label="资产所属SPV名称">
            <n-input clearable placeholder="项目名称"/>
          </n-form-item-gi>
          <n-form-item-gi label="代付spv名称">
            <n-select filterable clearable placeholder="发起部门名称" :options=thirdDep @update:value="handleUpdateSection"/>
          </n-form-item-gi>
          <n-form-item-gi label="相关资产">
            <n-select filterable clearable placeholder="所属中心名称" :options=section />
            <n-button tertiary ghost type="info">新增资产</n-button>
          </n-form-item-gi>
          <n-form-item-gi label="其他相关资产" path="password">
            <n-select placeholder="其他相关资产" clearable :options=dict7020  @update:value="handleUpdateValue" />
          </n-form-item-gi>
          <n-form-item-gi label="申请实付金额" path="loginNm">
            <n-input clearable placeholder="申请实付金额" v-model:value="formParams.busiProjectName"/>
          </n-form-item-gi>
          <n-form-item-gi label="币种" path="password">
            <n-select placeholder="币种" clearable :options=dict7020  @update:value="handleUpdateValue" />
          </n-form-item-gi>
          <n-form-item-gi label="支付类型" path="password">
            <n-select placeholder="支付类型" clearable :options="category"  :fallback-option=false  />
          </n-form-item-gi>

          <n-form-item-gi label="申请中心名称" path="loginNm">
            <n-input clearable placeholder="申请中心名称" v-model:value="formParams.busiProjectName"/>
          </n-form-item-gi>

          <n-form-item-gi label="增值税率" path="password">
            <n-select placeholder="增值税率" clearable :options="category"  :fallback-option=false  />
          </n-form-item-gi>

          <n-form-item-gi :span="2" label="付款说明">
            <n-input
              type="textarea"
              placeholder="付款说明"
            />
          </n-form-item-gi>

          <n-form-item-gi label="付款账户说明" path="password">
            <n-select placeholder="付款账户说明" clearable :options="category"  :fallback-option=false  />
          </n-form-item-gi>

          <n-form-item-gi label="付款账号">
            <n-input  placeholder="付款账号"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款人银行账号">
            <n-input  placeholder="收款人银行账号"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款人账号名称">
            <n-input  placeholder="收款人账号名称"/>
          </n-form-item-gi>

          <n-form-item-gi label="支付方式" path="password">
            <n-select placeholder="支付方式" clearable :options="category"  :fallback-option=false  />
          </n-form-item-gi>

          <n-form-item-gi label="收款人开户银行">
            <n-input  placeholder="收款人开户银行"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款行Swift Code">
            <n-input  placeholder="收款行Swift Code"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款行中转行">
            <n-input  placeholder="收款行中转行"/>
          </n-form-item-gi>


          <n-form-item-gi label="中转行Swift Code">
            <n-input  placeholder="中转行Swift Code"/>
          </n-form-item-gi>

          <n-form-item-gi label="主办客户经理" path="userEmail">
            <n-auto-complete :input-props="{autocomplete:'disabled'}" placeholder="主办客户经理"/>
          </n-form-item-gi>
          <n-form-item-gi label="协办客户经理" path="userMobile">
            <n-input placeholder="协办客户经理" clearable/>
          </n-form-item-gi>
          <n-form-item-gi label="中心负责人">
            <n-select placeholder="中心负责人"/>
          </n-form-item-gi>
          <n-form-item-gi label="法审会签">
            <n-select placeholder="法审会签"/>
          </n-form-item-gi>
          <n-form-item-gi label="技术会签">
            <n-select placeholder="技术会签"/>
          </n-form-item-gi>
          <n-form-item-gi label="资产管理中心/风险初审人">
            <n-select placeholder="资产管理中心/风险初审人"/>
          </n-form-item-gi>
          <n-form-item-gi label="资产管理中心/风险复核人">
            <n-select placeholder="资产管理中心/风险复核人"/>
          </n-form-item-gi>
          <n-form-item-gi label="风险中心负责人">
            <n-select placeholder="风险中心负责人"/>
          </n-form-item-gi>
          <n-form-item-gi label="业务部门分管领导/总裁助理">
            <n-select placeholder="业务部门分管领导/总裁助理"/>
          </n-form-item-gi>
          <n-form-item-gi label="事业部总裁/直属部门负责人">
            <n-select placeholder="事业部总裁/直属部门负责人"/>
          </n-form-item-gi>
          <n-form-item-gi label="事业部分管领导(如需)">
            <n-select placeholder="事业部分管领导(如需)"/>
          </n-form-item-gi>
          <n-form-item-gi label="首席风险官(如需)">
            <n-select placeholder="首席风险官(如需)"/>
          </n-form-item-gi>
          <n-form-item-gi label="有权签字人">
            <n-select placeholder="有权签字人"/>
          </n-form-item-gi>


        </n-grid>
      </n-form>
    </n-card>

    <n-card
      :bordered="false"
      title="资产折旧明细"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <template #header-extra>
        <n-button  type="info" @click="addPaymentExtraForm()">新增</n-button>
      </template>
      <BasicTable
        :columns="columns"
        :data="data"
        :row-key="(row) => row.seqno"
        ref="actionRefDepreciation"
        :pagination="false"
        :actionColumn="actionColumnDepreciation"
        :rightTooltip=false
        :scroll-x="1090"
        :max-height="350"
      >
      </BasicTable>
      </n-card>

    <n-card
      :bordered="false"
      title="文档列表"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
<!--      <n-button-->
<!--        :disabled="!fileListLengthRef"-->
<!--        style="margin-bottom: 12px"-->
<!--        @click="handleClick"-->
<!--      >-->
<!--        上传文件-->
<!--      </n-button>-->
      <n-upload
        ref="uploadRef"
        name="files"
        :action="`${uploadUrl}/purch/olPurchPaymentApproval/save`"
        :default-upload="false"
        :data="olPurchPaymentApproval"
        multiple
        @change="handleChange"
      >
        <n-button>选择文件</n-button>
      </n-upload>
<!--      <n-upload-->
<!--        ref="uploadRef"-->
<!--        action="http://localhost:8088/purch/olPurchPaymentApproval/save"-->
<!--        :default-upload="false"-->
<!--        multiple-->
<!--        @change="handleUploadChange"-->
<!--      >-->
<!--        <n-button>上传文件</n-button>-->
<!--      </n-upload>-->
    </n-card>

    <n-card></n-card>

    <n-card >
      <n-space justify="end">
        <n-button>暂存并关闭</n-button>
<!--        <n-button type="info"  @click="handleClick">提交</n-button>-->
        <n-button type="info" :loading="formBtnLoading" @click="confirmForm">提交</n-button>

      </n-space>

    </n-card>

    <PaymentExtraForm ref="createPaymentExtraForm" :title="showModalTitle" />

  </div>
</template>

<script lang="ts" setup>

import {
  computed,
  CSSProperties, getCurrentInstance, h, nextTick, reactive, ref, toRef, toRefs, unref, VNodeChild
} from 'vue';
import {SelectOption, UploadFileInfo, UploadInst, useMessage} from "naive-ui";
import {getCategory, getDep, getOffByOfcPrtId, getThirdDep} from "@/utils/dict";
import {DeleteOutlined, DollarCircleOutlined, FormOutlined} from '@vicons/antd';
import {columns} from './columns';
import {BasicTable, TableAction} from '@/components/Table';
import {savePaymentApproval} from "@/api/contract/purch/paymentapproval";
import {
  getAssetDepreciationDetailByAssetAddSeqno, saveOrUpdate
} from "@/api/asset/depreciationDetail";
import  PaymentExtraForm from '@/views/contract/purch/PaymentExtraForm.vue';
import {getOlAssetInfoAddBySeqno} from "@/api/asset/asset";
import {assignSame} from "@/utils/dataUtils";
import {useGlobSetting} from "@/hooks/setting";
import {formatToDate} from "@/utils/dateUtil";

const message = useMessage()
const data = [
  { assetNo: 3 },
  { assetNo: 4 },
  { assetNo: 12 }
]
const fileList = ref<UploadFileInfo[]>([
  {
    id: 'url-test',
    name: 'URL 测试',
    url: 'https://www.mocky.io/v2/5e4bafc63100007100d8b70f',
    status: 'finished'
  },
  {
    id: 'text-message',
    name: '你的短信',
    status: 'error'
  },
  {
    id: 'notification',
    name: '你的通知',
    status: 'finished'
  },
  {
    id: 'contact',
    name: '你的联系人信息',
    status: 'finished',
    url: 'https://www.mocky.io/v2/5e4bafc63100007100d8b70f',

  }
])

const loadDataTableDepreciationDetail = async (res) => {
  return await getAssetDepreciationDetailByAssetAddSeqno(12);
};
const globSetting = useGlobSetting();
const { uploadUrl } = globSetting;
const actionColumnDepreciation = reactive({
  width: 220,
  title: '操作',
  key: 'action',
  fixed: 'right',
  render(record) {
    return h(TableAction as any, {
      style: 'text',
      actions: [
        {
          popConfirm: {
            title: '您真的,确定要删除吗?',
            // confirm: handleDeleteDepreciationActionColumn.bind(null, record)
          },
          label: '删除',
          icon: DeleteOutlined,
          // 根据业务控制是否显示 isShow 和 auth 是并且关系
          ifShow: () => {
            return true;
          },
          // 根据权限控制是否显示: 有权限，会显示，支持多个
          auth: ['basic_list'],
        },
        {
          label: '编辑',
          icon: FormOutlined,
          // onClick: editDepreciationForm.bind(null, record.seqno),
          ifShow: () => {
            return true;
          },
          auth: ['basic_list'],
        },
      ]
    });
  },
});
const createPaymentExtraForm = ref();

const showModalTitle = ref();

const fileListLengthRef = ref(0)
const uploadRef = ref<UploadInst | null>(null)

const defaultValueRefByDict = () => ({
  busiProjectName: '',
  applyLoanDate: formatToDate(new Date(),'yyyy-MM-dd'),
  depreciationDate: null,
  dictCnDesc: '',
  currency: null,
  depreciationAmt: '',
  depreciationAmtRmb: '',
  exchRateRmb: '',
  memo: '',
  seqno: ''
});
let formParams = reactive(defaultValueRefByDict());
let olPurchPaymentApproval={
  olPurchPaymentApproval:formParams,
  olPurchPaymentExtraList:[]
}
function addPaymentExtraForm() {
  showModalTitle.value= "添加采购附加明细明细"
  const {addTable,formParams} = createPaymentExtraForm.value;
  addTable();
  // getOlAssetInfoAddBySeqno(seqno).then(res => {
  //   // Object.assign(unref(formParams), res);
  //   assignSame(unref(formParams),res)
  // })
}
const formBtnLoading = ref(false);
const formRef: any = ref(null);
function handleClick () {
  uploadRef.value?.submit()
}
function handleClick11() {

}
function confirmForm(e) {
  e.preventDefault();
  formBtnLoading.value = true;
      console.log(formParams)
      console.log(olPurchPaymentApproval)
  formRef.value.validate((errors) => {
    if (!errors) {
      if (fileListLengthRef.value>0){
        uploadRef.value?.submit()
      }else {
        savePaymentApproval(olPurchPaymentApproval).then(res => {
          console.log(res)
          //showModal.value = false;
          message.success(res.message);
          //props.reload.reload()
        })
      }

    } else {
      message.error('请填写完整信息');
    }
    formBtnLoading.value = false;
  });
}


function handleChange (options: { fileList: UploadFileInfo[] }) {
  fileListLengthRef.value = options.fileList.length
}


function handleUploadChange (data: { fileList: UploadFileInfo[] }) {
  fileListRef.value = data.fileList
}
function handleRemove (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) {
  if (data.file.id === 'text-message') {
    message.info('居然没传上去，算了，删了吧')
  } else if (data.file.id === 'notification') {
    message.error('不行，这个有用，不许删')
    return false
  } else if (data.file.id === 'contact') {
    message.loading('不知道这个有没有用，等我问问服务器能不能删', {
      duration: 4000
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        message.error('不行，他们也不许删这个')
        resolve(false)
      }, 4000)
    })
  }
}
function handleFileListChange () {
  message.info('是的，file-list 的值变了')
}


const {proxy} = getCurrentInstance();
const {dict7020} = proxy.$useDict("7020");
const thirdDep = getThirdDep();
let category=ref()
// console.log(category)
function  handleUpdateValue (value: string, option: SelectOption) {
  // message.info('value: ' + JSON.stringify(value))
   getCategory(value).then(va=>{
    category.value=va
  });
}
let section=ref()

function  handleUpdateSection(value: string, option: SelectOption) {
  // message.info('value: ' + JSON.stringify(value))
  getOffByOfcPrtId(value).then(va=>{
    section.value=va
  });
}

</script>

<style lang="less" scoped>
.page-wrapper-footer {
  position: fixed;
  right: 0;
  bottom: 0;
  //z-index: 800;
}
</style>


