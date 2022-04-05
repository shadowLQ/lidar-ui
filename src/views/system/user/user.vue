<template>
  <n-space vertical>
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
        :row-props="rowProps"
        :request="loadDataTable"
        :row-key="(row) => row.userId"
        ref="actionRef"
        :actionColumn="actionColumn"
        @update:checked-row-keys="onCheckedRow"
        :scroll-x="1090"
      >
        <template #tableTitle>
          <n-button type="primary" @click="addTable">
            <template #icon>
              <n-icon>
                <PlusOutlined/>
              </n-icon>
            </template>
            新建
          </n-button>
        </template>

        <template #toolbar>
          <n-button type="primary" @click="reloadTable">刷新数据</n-button>
        </template>
      </BasicTable>

      <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="用户添加" :style="{ width: '800px' }">
        <n-card
          class="mt-2"
          :segmented="true"
        >
          <n-form :rules="rules" ref="formRef" :model="formParams" label-width="80"  label-placement="left">
            <n-grid :cols="2" x-gap="20" y-gap="10">
              <n-form-item-gi label="登录名" path="loginNm">
                <n-input placeholder="请输入登录名" v-model:value="formParams.name"/>
              </n-form-item-gi>
              <n-form-item-gi label="用户名" path="address">
                <n-input placeholder="请输入用户名" v-model:value="formParams.address"/>
              </n-form-item-gi>
              <n-form-item-gi label="归属公司" >
                <n-select placeholder="归属公司" v-model:value="formParams.name" :options=ofc />
              </n-form-item-gi>
              <n-form-item-gi label="归属部门">
                <n-select placeholder="请选择一个吧" :options=dep />
              </n-form-item-gi>
              <n-form-item-gi label="工号">
                <n-input type="text" placeholder="工号"/>
              </n-form-item-gi>
              <n-form-item-gi label="密码" path="password">
                <n-input type="password" show-password-on="mousedown"  placeholder="密码"/>
              </n-form-item-gi>
              <n-form-item-gi label="确认密码">
                <n-input type="password" show-password-on="mousedown"  placeholder="确认密码"/>
              </n-form-item-gi>
              <n-form-item-gi label="邮箱" path="userEmail">
                <n-auto-complete :input-props="{autocomplete:'disabled'}" :options="options"  v-model:value="formParams.userEmail" placeholder="邮箱"/>
              </n-form-item-gi>
              <n-form-item-gi label="手机号" path="phone">
<!--                <n-input-number :show-button="false" placeholder="手机号" clearable max="99999999999"/>-->
                <n-input  placeholder="手机号" v-model:value="formParams.phone" clearable />
              </n-form-item-gi>
              <n-form-item-gi label="用户类型">
                <n-select
                  placeholder="用户类型"
                  :options=dict0103
                />
              </n-form-item-gi>
              <n-form-item-gi>
              </n-form-item-gi>
              <n-form-item-gi label="是否启用" path="name" >
                <n-switch />
              </n-form-item-gi>
            </n-grid>
          </n-form>
        </n-card>
<!--        <n-form-->
<!--          :model="formParams"-->
<!--          :rules="rules"-->
<!--          ref="formRef"-->
<!--          label-placement="left"-->
<!--          :label-width="80"-->
<!--          class="py-4"-->
<!--        >-->
<!--          <n-form-item label="用户名" path="name">-->
<!--            <n-input placeholder="请输入用户名" v-model:value="formParams.name"/>-->
<!--          </n-form-item>-->
<!--          <n-form-item label="用户编号" path="address">-->
<!--            <n-input type="textarea" placeholder="请输入用户编号" v-model:value="formParams.address"/>-->
<!--          </n-form-item>-->
<!--          &lt;!&ndash;        <n-form-item label="手机号" path="date">&ndash;&gt;-->
<!--          &lt;!&ndash;          <n-date-picker type="datetime" placeholder="请选择日期" v-model:value="formParams.date" />&ndash;&gt;-->
<!--          &lt;!&ndash;        </n-form-item>&ndash;&gt;-->
<!--          <n-form-item label="手机号" path="name">-->
<!--            <n-input placeholder="请输入用户名" v-model:value="formParams.name"/>-->
<!--          </n-form-item>-->
<!--        </n-form>-->

        <template #action>
          <n-space>
            <n-button @click="() => (showModal = false)">取消</n-button>
            <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
          </n-space>
        </template>
      </n-modal>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, h, reactive, ref, toRef, toRefs} from 'vue';
import {FormItemRule, useMessage} from 'naive-ui';
import {BasicTable, TableAction} from '@/components/Table';
import {BasicForm, useForm} from '@/components/Form/index';
import {getTableList} from '@/api/user/user';
import {columns} from './columns';
import {DeleteOutlined, PlusOutlined} from '@vicons/antd';
import {useRouter} from 'vue-router';
import {getDeps, getOffices} from '@/utils/dict';


const { proxy } = getCurrentInstance();
const { dict0103 } = proxy.$useDict("0103");
const ofc = getOffices();
const dep = getDeps();

const rules = {
  loginNm: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入登录名',
  },
  address: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入地址',
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
  phone:{
    required:true,
    trigger: ['blur', 'input'],
    validator (rule: FormItemRule, value: string) {
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
  userEmail:{
    required:true,
    trigger: ['blur', 'input'],
    validator (rule: FormItemRule, value: string) {
      const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

      if (!value) {
        return new Error('需要邮箱')
      }else if (!emailReg.test(value)) {
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
      options:[
        {
          label: '正常',
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
const formBtnLoading = ref(false);
const formParams = reactive({
  userEmail:''
});


const params = ref();

const valueRef = ref('')

const actionColumn = reactive({
  width: 220,
  title: '操作',
  key: 'action',
  fixed: 'right',
  render(record) {
    return h(TableAction as any, {
      style: 'button',
      actions: [
        {
          label: '删除',
          icon: DeleteOutlined,
          onClick: handleDelete.bind(null, record),
          // 根据业务控制是否显示 isShow 和 auth 是并且关系
          ifShow: () => {
            return true;
          },
          // 根据权限控制是否显示: 有权限，会显示，支持多个
          auth: ['basic_list'],
        },
        {
          label: '编辑',
          onClick: handleEdit.bind(null, record),
          ifShow: () => {
            return true;
          },
          auth: ['basic_list'],
        },
      ],
      dropDownActions: [
        {
          label: '启用',
          key: 'enabled',
          // 根据业务控制是否显示: 非enable状态的不显示启用按钮
          ifShow: () => {
            return true;
          },
        },
        {
          label: '禁用',
          key: 'disabled',
          ifShow: () => {
            return true;
          },
        },
      ],
      select: (key) => {
        message.info(`您点击了，${key} 按钮`);
      },
    });
  },
});

const [register, {}] = useForm({
  gridProps: {cols: '1 s:1 m:2 l:3 xl:4 2xl:4'},
  labelWidth: 80,
  schemas,
});



function addTable() {
  showModal.value = true;
}

const options = computed(() => {
  return ['@126.com', '@163.com', '@qq.com','@msfl.com.cn'].map((suffix) => {
    const prefix = formParams.userEmail.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

const loadDataTable = async (res) => {
  return await getTableList({...formParams, ...params.value, ...res});
};

function onCheckedRow(rowKeys) {
  console.log(rowKeys);
}

function reloadTable() {
  actionRef.value.reload();
}



function confirmForm(e) {
  e.preventDefault();
  formBtnLoading.value = true;
  formRef.value.validate((errors) => {
    if (!errors) {
      message.success('新建成功');
      setTimeout(() => {
        showModal.value = false;
        reloadTable();
      });
    } else {
      message.error('请填写完整信息');
    }
    formBtnLoading.value = false;
  });
}

function handleEdit(record: Recordable) {
  console.log('点击了编辑', record);
  router.push({name: 'basic-info', params: {id: record.id}});
}

function handleDelete(record: Recordable) {
  console.log('点击了删除', record);
  message.info('点击了删除');
}

function handleSubmit(values: Recordable) {
  console.log(values);
  params.value = values;
  reloadTable();
}

function handleReset(values: Recordable) {
  console.log(values);
}

function rowProps(values: Recordable) {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      console.log(values);
      message.info('11111');
    },
  };
}


// (()=> getOfficesByOfcTypeCd('010100000001').then(res=> console.log(res)))()

</script>

<style lang="less" scoped></style>
