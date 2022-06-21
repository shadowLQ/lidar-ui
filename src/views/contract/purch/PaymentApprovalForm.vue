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
          <n-form-item-gi label="项目名称" path="busiProjectName">
            <n-input clearable placeholder="项目名称" v-model:value="formParams.busiProjectName"/>
          </n-form-item-gi>
          <n-form-item-gi label="申请放款时间" path="applyLoanDate">
            <n-date-picker placeholder="申请放款时间" value-format="yyyy-MM-dd" type="date" v-model:formatted-value="formParams.applyLoanDate" clearable />
          </n-form-item-gi>
          <n-form-item-gi label="资产所属SPV名称" path="spvId">
            <n-select placeholder="资产所属SPV名称"   v-model:show="show2" v-model:value="formParams.spvId" :options="spvId"  :fallback-option=false filterable clearable  >
              <template v-if="show2" #arrow>
                <md-search />
              </template>
            </n-select>
          </n-form-item-gi>
          <n-form-item-gi label="代付spv名称">
            <n-select placeholder="代付spv名称" v-model:value="formParams.agentSpvId" :options="spvId" :fallback-option=false filterable clearable  />
          </n-form-item-gi>
          <n-form-item-gi label="相关资产" path="assetInfoAddSeqno">
            <n-select filterable clearable placeholder="相关资产" :options=assetInfoAddSeqno v-model:value="formParams.assetInfoAddSeqno" :fallback-option=false />
            <n-button tertiary ghost type="info">新增资产</n-button>
          </n-form-item-gi>
          <n-form-item-gi label="其他相关资产" >
            <n-select placeholder="其他相关资产" filterable multiple  clearable :options=assetInfoAdd  v-model:value="formParams.otherAssetInfoAddSeqno"  />
          </n-form-item-gi>
          <n-form-item-gi label="申请实付金额" path="loanTotalAmt">
            <n-input clearable placeholder="申请实付金额" v-model:value="formParams.loanTotalAmt"/>
          </n-form-item-gi>
          <n-form-item-gi label="币种" path="currencyCde">
            <n-select placeholder="币种" clearable :options=dict1170  v-model:value="formParams.currencyCde" />
          </n-form-item-gi>
          <n-form-item-gi label="支付类型" >
            <n-select placeholder="支付类型" clearable :options=dict7062 v-model:value="formParams.payStyle" />
          </n-form-item-gi>

          <n-form-item-gi label="申请中心名称">
            <n-input clearable placeholder="申请中心名称" v-model:value="formParams.applySectionName"/>
          </n-form-item-gi>

          <n-form-item-gi label="增值税率" >
            <n-select placeholder="增值税率" clearable :options=dict7003 v-model:value="formParams.vatRate" />
          </n-form-item-gi>

          <n-form-item-gi :span="2" label="付款说明" path="loanDesc">
            <n-input
              type="textarea"
              placeholder="付款说明"
              v-model:value="formParams.loanDesc"
            />
          </n-form-item-gi>

          <n-form-item-gi label="付款账户说明" path="payAcctDesc">
            <n-input placeholder="付款账户说明" clearable  v-model:value="formParams.payAcctDesc" />
          </n-form-item-gi>

          <n-form-item-gi label="付款账号">
            <n-select  placeholder="付款账号" clearable filterable :options=payAcctNo v-model:value="formParams.payAcctNo"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款人银行账号">
            <n-select  placeholder="收款人银行账号" clearable filterable :options=recvAcctNo v-model:value="formParams.recvAcctNo"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款人账号名称">
            <n-input  placeholder="收款人账号名称" v-model:value="formParams.recvAcctName"/>
          </n-form-item-gi>

          <n-form-item-gi label="支付方式" >
            <n-select placeholder="支付方式" clearable :options=dict7049 v-model:value="formParams.payWay"   />
          </n-form-item-gi>

          <n-form-item-gi label="收款人开户银行">
            <n-input  placeholder="收款人开户银行" v-model:value="formParams.recvAcctBank"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款行Swift Code">
            <n-input  placeholder="收款行Swift Code" v-model:value="formParams.recvBankSwiftCode"/>
          </n-form-item-gi>

          <n-form-item-gi label="收款行中转行">
            <n-input  placeholder="收款行中转行" v-model:value="formParams.recvTransferBank"/>
          </n-form-item-gi>


          <n-form-item-gi label="中转行Swift Code">
            <n-input  placeholder="中转行Swift Code" v-model:value="formParams.recvTransferBankSwiftCode"/>
          </n-form-item-gi>

          <n-form-item-gi label="主办客户经理" path="mainManagerId">
            <n-select v-model:value="formParams.mainManagerId" placeholder="主办客户经理" :options="users"  :fallback-option=false  />
          </n-form-item-gi>
          <n-form-item-gi label="协办客户经理" path="coManagerId" >
            <n-select placeholder="协办客户经理" clearable v-model:value="formParams.coManagerId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="中心负责人">
            <n-select placeholder="中心负责人" v-model:value="formParams.sectionLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="法审会签">
            <n-select placeholder="法审会签" v-model:value="formParams.lawSignId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="技术会签">
            <n-select placeholder="技术会签" v-model:value="formParams.technicalSignId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="资产管理中心/风险初审人" path="managerId">
            <n-select placeholder="资产管理中心/风险初审人" v-model:value="formParams.managerId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="资产管理中心/风险复核人" path="manageLeaderId">
            <n-select placeholder="资产管理中心/风险复核人" v-model:value="formParams.manageLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="风险中心负责人">
            <n-select placeholder="风险中心负责人" v-model:value="formParams.riskCenterLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="业务部门分管领导/总裁助理">
            <n-select placeholder="业务部门分管领导/总裁助理" v-model:value="formParams.leaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="事业部总裁/直属部门负责人">
            <n-select placeholder="事业部总裁/直属部门负责人" v-model:value="formParams.orgLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="事业部分管领导(如需)">
            <n-select placeholder="事业部分管领导(如需)" v-model:value="formParams.orgGroupLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="首席风险官(如需)">
            <n-select placeholder="首席风险官(如需)" v-model:value="formParams.croId" :options="users"  :fallback-option=false />
          </n-form-item-gi>
          <n-form-item-gi label="有权签字人" path="rightLeaderId">
            <n-select placeholder="有权签字人" v-model:value="formParams.rightLeaderId" :options="users"  :fallback-option=false />
          </n-form-item-gi>


        </n-grid>
      </n-form>
    </n-card>

    <n-card
      :bordered="false"
      title="附加明细"
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
        ref="actionRef"
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
        :data="formParams"
        multiple
        @change="handleUploadChange"
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

    <PaymentExtraForm ref="createPaymentExtraForm" :title="showModalTitle" :new-data="data" :reload="actionRef" />

  </div>
</template>

<script lang="ts" setup>

import {
  getCurrentInstance,
  h,
  reactive,
  ref,
  unref,
  watch
} from 'vue';
import { UploadFileInfo, UploadInst, useMessage} from "naive-ui";
import {
  getAssetInfoAdd,
  getCompany, getRecvAccounts,
  getRecvAcctNo,
  getThirdDep,
  getUsers
} from "@/utils/dict";
import {DeleteOutlined, FormOutlined} from '@vicons/antd';
import {columns} from './paymentExtra/columns';
import {BasicTable, TableAction} from '@/components/Table';
import {savePaymentApproval} from "@/api/contract/purch/paymentapproval";
import {
  getAssetDepreciationDetailByAssetAddSeqno, saveOrUpdate
} from "@/api/asset/depreciationDetail";
import  PaymentExtraForm from '@/views/contract/purch/paymentExtra/PaymentExtraForm.vue';
import {useGlobSetting} from "@/hooks/setting";
import {formatToDate} from "@/utils/dateUtil";
import {useRouter} from "vue-router";
import {getOlAssetInfoAddBySpvId} from "@/api/asset/asset";
import MdSearch from '@vicons/ionicons4/MdSearch'

const message = useMessage()
let data =reactive([])


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
            confirm: handleDelete.bind(null, record)
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
          onClick: editPaymentExtraForm.bind(null, record),
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
const show2 = ref(false)
const fileListRef = ref<UploadFileInfo[]>([])
const uploadRef = ref<UploadInst | null>(null)

const rules = {
  busiProjectName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入项目名称',
  },
  loanTotalAmt: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入申请实付金额',
  },
  applyLoanDate: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入申请放款时间',
  },
  currencyCde: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择原币币种',
  },
  payAcctDesc: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入付款账户说明',
  },
  loanDesc: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入付款说明',
  },
  mainManagerId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入主办客户经理',
  },
  coManagerId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输协办客户经理',
  },
  managerId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输资产管理中心/风险初审人',
  },
  manageLeaderId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输资产管理中心/风险复核人',
  },
  rightLeaderId: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输有权签字人',
  },
};

const defaultValueRefByDict = () => ({
  busiProjectName: '',
  applyLoanDate: formatToDate(new Date(),'yyyy-MM-dd'),
  spvId: '',
  agentSpvId:'',
  assetInfoAddSeqno:'',
  otherAssetInfoAddSeqno:'',
  loanTotalAmt:'',
  currencyCde: null,
  payStyle: null,
  applySectionName: '',
  vatRate: null,
  loanDesc: '',
  payAcctDesc: '',
  payAcctNo: null,
  recvAcctNo: '',
  recvAcctName: '',
  payWay: null,
  recvAcctBank: '',
  recvBankSwiftCode: '',
  recvTransferBank: '',
  recvTransferBankSwiftCode: '',
  mainManagerId: '',
  coManagerId: '',
  sectionLeaderId: '',
  lawSignId: '',
  technicalSignId: '',
  managerId: '',
  manageLeaderId: '',
  riskCenterLeaderId: '',
  leaderId: '',
  orgLeaderId: '',
  orgGroupLeaderId: '',
  croId: '',
  rightLeaderId: '',
});
let formParams = reactive(defaultValueRefByDict());

let olPurchPaymentApprovalDTO={
  olPurchPaymentApproval:{
    olPurchPaymentApproval: formParams,
    olPurchPaymentExtraList: data
  }
}
function addPaymentExtraForm() {
  showModalTitle.value= "添加采购附加明细明细"
  const {addTable,formParams} = createPaymentExtraForm.value;
  addTable();
  // console.log("++++++++++++++++++",data)
  // getOlAssetInfoAddBySeqno(seqno).then(res => {
  //   // Object.assign(unref(formParams), res);
  //   assignSame(unref(formParams),res)
  // })
}

function editPaymentExtraForm(record: Recordable) {
  showModalTitle.value= "修改采购附加明细明细"
  const {addTable,formParams} = createPaymentExtraForm.value;
  addTable();
    Object.assign(unref(formParams), record);
}
const actionRef = ref();
const formBtnLoading = ref(false);
const formRef: any = ref(null);
function handleClick () {
  uploadRef.value?.submit()
}
let filesList=[];
function handleUploadChange (data: { fileList: UploadFileInfo[] }) {
  fileListRef.value = data.fileList
  // filesList =fileListRef.value.map(function (s) {
  //   return s.file
  // })
  // for (let i = 0; i < fileListRef.value.length; i++) {
  //   filesList[i]=fileListRef.value[i].file;
  // }
}
const router = useRouter();

function confirmForm(e) {
  e.preventDefault();
  formBtnLoading.value = true;
      console.log(formParams)
  let uploadFileParams={
    data:olPurchPaymentApprovalDTO,
    // 文件参数接口字段名
    name:'files',
    // 文件
    file: fileListRef.value.map(s=>s.file)
  }
  // for (let valueElement of fileListRef.value) {
  //   console.log(valueElement.file)
  //   uploadFileParams.file=valueElement.file
  // }

  formRef.value.validate((errors) => {
    if (!errors) {

      savePaymentApproval(uploadFileParams).then(res => {
        console.log(res)
        // showModal.value = false;
        // message.success(res.message);
        //props.reload.reload()
        router.push({ name: 'contract_paymentApproval'});

        return;
      })
    } else {
      message.error('请填写完整信息');
    }
    formBtnLoading.value = false;
  });
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



const {proxy} = getCurrentInstance();
const {dict1170} = proxy.$useDict("1170");
const {dict7062} = proxy.$useDict("7062");
const {dict7003} = proxy.$useDict("7003");
const {dict7049} = proxy.$useDict("7049");

const thirdDep = getThirdDep();
const spvId = getCompany();
const payAcctNo = getRecvAccounts();
const recvAcctNo = getRecvAcctNo();
const assetInfoAdd = getAssetInfoAdd();
const users = getUsers();
let assetInfoAddSeqno=ref()
let section=ref()


watch(() => formParams.spvId, (newValue) => {
  console.log('watch 已触发', newValue)
  if (newValue!=null&&newValue!=''){
    handleUpdateValue(formParams.spvId)

  }
})

function  handleUpdateValue (value: string) {
  // message.info('value: ' + JSON.stringify(value))
  getOlAssetInfoAddBySpvId(value).then(va=>assetInfoAddSeqno.value=va);
}

function handleDelete(record: Recordable) {
  // handleDeleteDepreciationApi(record.seqno)
  console.log(record)
  console.log(data)
  // data.unshift({seqno:1})
 // data=reactive()
 //  let filter = data.filter((a)=>{return a.seqno==record.seqno});
  arrDelete(data,(o)=>o.seqno==record.seqno)
  console.log(data)
}

function arrDelete(arr, func) {
  // 遍历取到每个对象和对应下标，通过自定义的函数判断该对象是否删除，
  arr.forEach((item, i) => {
    if (func(item)) {
      arr.splice(i, 1)
    }
  })
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


