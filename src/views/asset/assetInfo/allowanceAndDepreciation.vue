<template>
  <div>
    <n-card
      :bordered="false"
      title="资产折旧明细"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <BasicTable
        :columns="depreciationColumns"
        :request="loadDataTableDepreciationDetail"
        :row-key="(row) => row.seqno"
        ref="actionRefDepreciation"
        :pagination="false"
        :actionColumn="actionColumnDepreciation"
        @update:checked-row-keys="onCheckedRowDepreciation"
        :rightTooltip=false
        :scroll-x="1090"
        :max-height="350"
      >
        <template #tableTitle>
          <n-space>
            <n-button type="primary" @click="addDepreciationForm">
              <template #icon>
                <n-icon>
                  <PlusOutlined/>
                </n-icon>
              </template>
              新建
            </n-button>
            <n-button :disabled="isDisabledEditDepreciation" type="warning" @click="editDepreciationForm(checkedRowKeysDepreciation)">
              <template #icon>
                <n-icon>
                  <FormOutlined/>
                </n-icon>
              </template>
              修改
            </n-button>
            <n-button :disabled="isDisabledDepreciation" type="error"  @click="handleDeleteDepreciation">
              <template #icon>
                <n-icon>
                  <DeleteOutlined/>
                </n-icon>
              </template>
              删除
            </n-button>
          </n-space>
        </template>

      </BasicTable>
    </n-card>
    <n-card
      :bordered="false"
      title="资产减值明细"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <BasicTable
        :columns="allowanceColumns"
        :request="loadDataTableAllowanceDetail"
        :row-key="(row) => row.seqno"
        ref="actionRefAllowance"
        :pagination="false"
        :actionColumn="actionColumnAllowance"
        @update:checked-row-keys="onCheckedRowAllowance"
        :rightTooltip=false
        :scroll-x="1090"
        :max-height="350"
      >
        <template #tableTitle>
          <n-space>
            <n-button type="primary" @click="addAllowanceForm">
              <template #icon>
                <n-icon>
                  <PlusOutlined/>
                </n-icon>
              </template>
              新建
            </n-button>
            <n-button :disabled="isDisabledEditAllowance" type="warning"
                      @click="">
              <template #icon>
                <n-icon>
                  <FormOutlined/>
                </n-icon>
              </template>
              修改
            </n-button>
            <n-button :disabled="isDisabledAllowance" type="error" @click="">
              <template #icon>
                <n-icon>
                  <DeleteOutlined/>
                </n-icon>
              </template>
              删除
            </n-button>
          </n-space>
        </template>

      </BasicTable>
    </n-card>

    <!--  折旧  -->
    <DepreciationForm ref="createDepreciationFormRef" :title="showModalTitle"  :reload="actionRefDepreciation" />
    <!--  减值  -->
    <AllowanceForm ref="createAllowanceFormRef" :title="showModalTitle" :reload="actionRefAllowance" />


  </div>
</template>

<script lang="ts" setup>

import {getCurrentInstance, h, reactive, ref, unref} from 'vue';
import {NButton, NSpace, useDialog, useMessage} from "naive-ui";
import {DeleteOutlined, PlusOutlined, FormOutlined} from '@vicons/antd';
import {allowanceColumns} from './allowance/columns';
import AllowanceForm from '@/views/asset/assetInfo/allowance/AllowanceForm.vue';
import DepreciationForm from '@/views/asset/assetInfo/depreciation/DepreciationForm.vue';
import {depreciationColumns} from './depreciation/columns';
import {getOlAssetInfoAddBySeqno} from "@/api/asset/asset";
import {BasicTable, TableAction} from '@/components/Table';
import {
  deleteDepreciation,
  getAssetDepreciationDetailByAssetAddSeqno,
  getOlAssetDepreciationDetailBySeqno
} from "@/api/asset/depreciationDetail";
import {useRoute} from "vue-router";
import {
  getAssetAllowanceDetailByAssetAddSeqno,
  getOlAssetAllowanceDetailBySeqno
} from "@/api/asset/allowanceDetail";
import {assignSpecify} from "@/utils/dataUtils";

const {proxy} = getCurrentInstance();
const {dict7020} = proxy.$useDict("7020");
const message = useMessage();
const dialog = useDialog();

const createDepreciationFormRef = ref();
const createAllowanceFormRef = ref();

const showModalTitle = ref();


// 折旧列表刷新
const actionRefDepreciation = ref();

function reloadTableDepreciation() {
  actionRefDepreciation.value.reload();
}

// 减值列表刷新
const actionRefAllowance = ref();

function reloadTableAllowance() {
  actionRefAllowance.value.reload();
}


let route = useRoute();
const params = ref();
let seqno = route.params.seqno;

// 添加折旧明细
function addDepreciationForm() {
  showModalTitle.value= "新增折旧明细"
  const {addTable,formParams} = createDepreciationFormRef.value;
  addTable();
  getOlAssetInfoAddBySeqno(seqno).then(res => {
    // Object.assign(unref(formParams), res);
    assignSpecify(unref(formParams),res,['assetNo','assetName'])
  })
}
// 修改折旧明细
function editDepreciationForm(seqno) {
  showModalTitle.value= "修改折旧明细"
  const {addTable,formParams} = createDepreciationFormRef.value;
  addTable();
  getOlAssetDepreciationDetailBySeqno(seqno).then(res => {
    Object.assign(unref(formParams), res);
  })
}

// 删除折旧明细
function handleDeleteDepreciationApi(seqnos) {
  deleteDepreciation(seqnos).then(res => {
    message.success(res.message);
    reloadTableDepreciation();
  }).catch((err) => {
    message.error(err);
  })
}

function handleDeleteDepreciationActionColumn(record: Recordable) {
  handleDeleteDepreciationApi(record.seqno)
}

function handleDeleteDepreciation() {
  const s = dialog.warning({
    style: 'width: 380px;',
    title: '删除确认',
    closable: false,
    content: () => {
      return h(
        'p', {style: 'padding-left: 35px'}, [`您确认要删除，`, h('span', {
          style: 'font-weight:500'
        }, `折旧明细?`)],
      )
    },
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      handleDeleteDepreciationApi(checkedRowKeysDepreciation.value)
    },
    onNegativeClick: () => {
      message.success('取消成功');
    },
  });
}


// 添加减值明细
function addAllowanceForm() {
  showModalTitle.value= "新增减值明细"
  const {addTable,formParams} = createAllowanceFormRef.value;
  addTable();
  getOlAssetInfoAddBySeqno(seqno).then(res => {
    // Object.assign(unref(formParams), res);
    assignSpecify(unref(formParams),res,['assetNo','assetName'])
  })
}
// 修改减值明细
function handleEditAllowanceForm(record: Recordable) {
  showModalTitle.value= "修改折旧明细"
  const {addTable,formParams} = createAllowanceFormRef.value;
  addTable();
  getOlAssetAllowanceDetailBySeqno(record.seqno).then(res => {
    Object.assign(unref(formParams), res);
  })
}

// 删除减值明细
function handleDeleteAllowance(record: Recordable) {
  deleteDepreciation(record.seqno).then(res => {
    message.success(res.message);
    reloadTableDepreciation();
  }).catch((err) => {
    message.error(err);
  })
}


let checkedRowKeysDepreciation = ref([]);
const isDisabledDepreciation = ref(true)
const isDisabledEditDepreciation = ref(true)
function onCheckedRowDepreciation(values) {
  if (values.length > 1) {
    checkedRowKeysDepreciation.value = values;
    isDisabledDepreciation.value = false;
    isDisabledEditDepreciation.value = true;
  } else if (values.length == 1) {
    checkedRowKeysDepreciation.value = values;
    isDisabledDepreciation.value = false;
    isDisabledEditDepreciation.value = false;
  } else {
    isDisabledDepreciation.value = true;
    isDisabledEditDepreciation.value = true;
  }
}

let checkedRowKeysAllowance = ref([]);
const isDisabledAllowance = ref(true)
const isDisabledEditAllowance = ref(true)
function onCheckedRowAllowance(values) {
  if (values.length > 1) {
    checkedRowKeysAllowance.value = values;
    isDisabledAllowance.value = false;
    isDisabledEditAllowance.value = true;
  } else if (values.length == 1) {
    checkedRowKeysAllowance.value = values;
    isDisabledAllowance.value = false;
    isDisabledEditAllowance.value = false;
  } else {
    isDisabledAllowance.value = true;
    isDisabledEditAllowance.value = true;
  }
}

const loadDataTableDepreciationDetail = async (res) => {
  return await getAssetDepreciationDetailByAssetAddSeqno(seqno);
};
const loadDataTableAllowanceDetail = async (res) => {
  return await getAssetAllowanceDetailByAssetAddSeqno(seqno);
};

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
            confirm: handleDeleteDepreciationActionColumn.bind(null, record)
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
          onClick: editDepreciationForm.bind(null, record.seqno),
          ifShow: () => {
            return true;
          },
          auth: ['basic_list'],
        },
      ]
    });
  },
});


const actionColumnAllowance = reactive({
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
            confirm: handleDeleteAllowance.bind(null, record)
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
          onClick: handleEditAllowanceForm.bind(null, record),
          ifShow: () => {
            return true;
          },
          auth: ['basic_list'],
        },
      ]
    });
  },
});


</script>

<style lang="less" scoped>
.page-wrapper-footer {
  position: fixed;
  right: 0;
  bottom: 0;
  //z-index: 800;
}
</style>


