<template>
  <div>
    <n-card :bordered="false" class="n-card pt-3 mb-3 proCard">
      <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
        <template #statusSlot="{ model, field }">
          <n-input v-model:value="model[field]"/>
        </template>
      </BasicForm>
    </n-card>
    <n-card :bordered="false" class="n-card proCard">
      <BasicTable
        :columns="columns"
        :request="loadDataTable"
        :row-key="(row) => row.seqno"
        ref="actionRef"
        :actionColumn="actionColumn"
        @update:checked-row-keys="onCheckedRow"
        :scroll-x="5000"
      >
        <template #tableTitle>
          <n-space>
            <n-button type="primary" @click="addTableAssetForm">
              <template #icon>
                <n-icon>
                  <PlusOutlined/>
                </n-icon>
              </template>
              新建
            </n-button>
            <n-button :disabled="isDisabledEdit" type="primary" @click="addAllowanceAndDepreciation">
              <template #icon>
                <n-icon>
                  <UnorderedListOutlined/>
                </n-icon>
              </template>
              资产折旧与资产减值
            </n-button>
            <n-button type="primary" @click="addTable">
              <template #icon>
                <n-icon>
                  <FileExcelOutlined/>
                </n-icon>
              </template>
              导出
            </n-button>
          </n-space>
        </template>

        <template #toolbar>
          <n-button type="primary" @click="reloadTable">刷新数据</n-button>
        </template>
      </BasicTable>

      <AssetForm ref="createAssetFormRef" :title="showModalTitle" />

    </n-card>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  CSSProperties, getCurrentInstance, h, nextTick, reactive, ref, toRef, toRefs, unref, VNodeChild
} from 'vue';
import {FormItemRule, NEllipsis, NIcon, SelectOption, useMessage} from 'naive-ui';
import {BasicTable, TableAction} from '@/components/Table';
import {BasicForm, useForm} from '@/components/Form';
import {saveOrUpdateUser, deleteSysUser, getOlAssetInfoAddBySeqno, getTableList} from '@/api/asset/asset';
import {columns} from './columns';
import {DeleteOutlined,FileExcelOutlined,UnorderedListOutlined, FormOutlined, PlusOutlined} from '@vicons/antd';
import {useRouter} from 'vue-router';
import {getCompany, getDep} from '@/utils/dict';
import {addDictType} from "@/api/dict/dictType";
import AssetForm from '@/views/asset/assetInfo/AssetForm.vue';


const {proxy} = getCurrentInstance();
const {dict0103} = proxy.$useDict("0103");
const ofc = getCompany();
const dep = getDep();

const rules = {
  loginNm: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入登录名',
  },
  userNm: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入用户名',
  },
  date: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择日期',
  },
  password: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入密码',
  },
  userMobile: {
    required: true,
    trigger: ['blur', 'input'],
    validator(rule: FormItemRule, value: string) {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/

      if (!value) {
        return new Error('需要手机号')
      } else if (!/^\d*$/.test(value)) {
        return new Error('手机号应该为数字')
      } else if (!phoneReg.test(value)) {
        return new Error('手机号格式不正确')
      }
      return true
    }
  },
  userEmail: {
    required: true,
    trigger: ['blur', 'input'],
    validator(rule: FormItemRule, value: string) {
      const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

      if (!value) {
        return new Error('需要邮箱')
      } else if (!emailReg.test(value)) {
        return new Error('邮箱格式不正确')
      }
      return true
    }
  }
};
const startsData = ref([
  {
    label: '舒适性11',
    value: 1,
  },
  {
    label: '经济性',
    value: 2,
  },
]);
const schemas = [
  {
    field: 'userNm',
    labelMessage: '这是一个提示',
    component: 'NInput',
    label: '姓名',
    componentProps: {
      placeholder: '请输入姓名',
      onInput: (e: any) => {
        console.log(e);
      },
    },
    // rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
  },
  {
    field: 'validInd',
    component: 'NSelect',
    label: '用户状态',
    componentProps: {
      placeholder: '请选择用户状态',
      options: [
        {
          label: '启用',
          value: 1,
        },
        {
          label: '禁用',
          value: 0,
        },
      ],
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'mobile',
    component: 'NInputNumber',
    label: '手机',
    componentProps: {
      placeholder: '请输入手机号码',
      showButton: false,
      onInput: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'loginNm',
    component: 'NInput',
    label: '登录名',
    componentProps: {
      placeholder: '请输入登录名',
      showButton: false,
      onInput: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'loginNm',
    component: 'NInput',
    label: '登录名',
    componentProps: {
      placeholder: '请输入登录名',
      showButton: false,
      onInput: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'loginNm',
    component: 'NInput',
    label: '登录名',
    componentProps: {
      placeholder: '请输入登录名',
      showButton: false,
      onInput: (e: any) => {
        console.log(e);
      },
    },
  },
];

const router = useRouter();
const formRef: any = ref(null);
const message = useMessage();
const actionRef = ref();

const showModal = ref(false);
const showModalTitle = ref();
const disabled = ref(false);
const formBtnLoading = ref(false);

const defaultValueRef = () => ({
  userEmail: '',
  loginNm: '',
  ofcId: '',
  depId: '',
  userMobile: '',
  password: '',
  userNm: '',
  userNbr: '',
  validInd: '1',
  userTypeCd: '',
  userId: undefined,
});

let formParams = reactive(defaultValueRef());


const params = ref();

const valueRef = ref('')

const actionColumn = reactive({
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
          onClick: handleEdit.bind(null, record),
          ifShow: () => {
            return true;
          },
          auth: ['basic_list'],
        },
      ],
      switchActions: []
      // dropDownActions: [
      //   {
      //     label: '启用',
      //     key: 'enabled',
      //     // 根据业务控制是否显示: 非enable状态的不显示启用按钮
      //     ifShow: () => {
      //       return true;
      //     },
      //   },
      //   {
      //     label: '禁用',
      //     key: 'disabled',
      //     ifShow: () => {
      //       return true;
      //     },
      //   },
      // ],
      // select: (key) => {
      //   message.info(`您点击了，${key} 按钮`);
      // },
    });
  },
});

const [register, {}] = useForm({
  gridProps: {cols: '1 s:1 m:2 l:3 xl:4 2xl:4'},
  labelWidth: 80,
  schemas,
});
const createAssetFormRef = ref();

function addTableAssetForm() {
  // showModal.value = true;
  // showModalTitle.value= "用户添加"
  // disabled.value = false;
  // handleReset();
  showModalTitle.value= "新增租赁物"
  const {addTable,formParams} = createAssetFormRef.value;
  addTable();
}

// function reset() {
//   if (!options.value) return
//   options.value.forEach((it: FormItem) => {
//     if (it.reset) {
//       it.reset(it)
//     } else {
//       it.value.value = null
//     }
//   })
// }

const options = computed(() => {
  return ['@126.com', '@163.com', '@qq.com', '@msfl.com.cn'].map((suffix) => {
    const prefix = formParams.userEmail.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

const loadDataTable = async (res) => {
  return await getTableList({...params.value, ...res});
};
const isDisabled = ref(true)
const seqno = ref()

const isDisabledEdit = ref(true)
function onCheckedRow(rowKeys) {
  console.log(rowKeys);
  if (rowKeys.length > 1) {

    isDisabled.value = false;
    isDisabledEdit.value = true;
  } else if (rowKeys.length == 1) {
    seqno.value=rowKeys[0];
    isDisabledEdit.value = false;
    isDisabled.value = false;
  } else {
    isDisabled.value = true;
    isDisabledEdit.value = true;
  }
}

function reloadTable() {
  actionRef.value.reload();
}


function confirmForm(e) {
  e.preventDefault();
  formBtnLoading.value = true;
  formRef.value.validate((errors) => {
    console.log(formRef)
    if (!errors) {
      saveOrUpdateUser(formParams).then(res => {
        console.log(res)
        showModal.value = false;
        message.success(res.message);
        reloadTable();
      }).catch((err) => {
        message.error(err);
      })
      // message.success('新建成功');
      // setTimeout(() => {
      //   showModal.value = false;
      //   reloadTable();
      // });
    } else {
      message.error('请填写完整信息');
    }
    formBtnLoading.value = false;
  });
}

function handleEdit(record: Recordable) {
  showModal.value = true;
  showModalTitle.value= "用户修改"

  getOlAssetInfoAddBySeqno(record.userId).then(res => {
    console.log(res)
    disabled.value = true;
    // formParams = Object.assign(unref(formParams), defaultValueRef());
    formParams = Object.assign(unref(formParams), res);
  })
  console.log('点击了编辑', record);
  // router.push({name: 'basic-info', params: {id: record.id}});
}

// 删除用户
function handleDelete(record: Recordable) {
  deleteSysUser(record.userId).then(res => {
    message.success(res.message);
    reloadTable();
  }).catch((err) => {
    message.error(err);
  })
}

// 资产折旧与资产减值
function addAllowanceAndDepreciation() {
  // showModal.value = true;
  // handleReset();
  router.push({ name: 'asset-allowanceAndDepreciation',params: { seqno: seqno.value }});

}



function handleSubmit(values: Recordable) {
  console.log(values);
  params.value = values;
  reloadTable();
}

function handleReset() {
  formRef.value?.restoreValidation();
  formParams = Object.assign(unref(formParams), defaultValueRef());

}

// function rowProps(values: Recordable) {
//   return {
//     style: 'cursor: pointer;',
//     onClick: () => {
//       console.log(values);
//       message.info('11111');
//     },
//   };
// }

function railStyle(info) {
  const {checked, focused} = info;
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#2080f0'
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040'
    }
  } else {
    style.background = '#d03050'
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  }
  return style

}

//
function renderLabel(option) {
  return [
    h(
      NEllipsis,
      null,
      {
        default: () => option.label
      }
    )]
}
</script>

<style lang="less" scoped>

</style>
