<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="字典管理">
        页面数据为 Mock 示例数据，非真实数据。
      </n-card>
    </div>
    <n-grid class="mt-4" cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen" :x-gap="12">
      <n-gi span="1">
        <n-card :segmented="{ content: 'hard' }" :bordered="false" size="small">
          <template #header>
            <n-space>
              <n-button type="success">
                新建
              </n-button>
              <n-button type="primary" @click="addTable">
                编辑
              </n-button>
              <n-button type="error">
                删除
              </n-button>
              <n-input type="input" v-model:value="pattern" placeholder="请输入">
                <template #prefix>
                  <n-icon size="18" class="cursor-pointer">
                    <SearchOutlined />
                  </n-icon>
                </template>
              </n-input>
            </n-space>
          </template>
          <div class="w-full">
            <BasicTable
              :columns="columnsDictType"
              :request="loadDataTableDictType"
              :row-key="(row) => row.id"
              ref="actionRef"
              :actionColumn="actionColumn"
              @update:checked-row-keys="onCheckedRow"
            >
            </BasicTable>
          </div>
        </n-card>
      </n-gi>
      <n-gi span="2">
        <n-card :segmented="{ content: 'hard' }" :bordered="false" size="small">
          <BasicTable
            :columns="columns"
            :request="loadDataTableDict"
            :row-key="(row) => row.id"
            ref="actionRef"
            :actionColumn="actionColumn"
            @update:checked-row-keys="onCheckedRow"
            :scroll-x="1090"
          >
            <template #tableTitle>
              <n-space>
                <n-input type="input" v-model:value="pattern" placeholder="请输入">
                  <template #prefix>
                    <n-icon size="18" class="cursor-pointer">
                      <SearchOutlined />
                    </n-icon>
                  </template>
                </n-input>
                <n-button type="primary" @click="addTable">
                  查询
                </n-button>
                <n-button type="success">
                  新建
                </n-button>
                <n-button type="error">
                  删除
                </n-button>
              </n-space>
            </template>
          </BasicTable>
        </n-card>
      </n-gi>
    </n-grid>
    <CreateDict ref="createDrawerRef" :title="drawerTitle" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction } from '@/components/Table';
  import { columns } from './columns';
  import { columnsDictType } from './columnsDictType';

  import {ref, unref, reactive, onMounted, computed, h} from 'vue';
  import { useMessage } from 'naive-ui';
  import { DownOutlined, AlignLeftOutlined, SearchOutlined, FormOutlined } from '@vicons/antd';
  import { getMenuList } from '@/api/system/menu';
  import { getTreeItem } from '@/utils';
  import CreateDict from './CreateDict.vue';
  import { getTableListDict } from "@/api/dict/dict";
  import { getTableListDictType } from "@/api/dict/dictType";

  const rules = {
    label: {
      required: true,
      message: '请输入标题',
      trigger: 'blur',
    },
    path: {
      required: true,
      message: '请输入路径',
      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const createDrawerRef = ref();
  const message = useMessage();

  let treeItemKey = ref([]);

  let expandedKeys = ref([]);

  const treeData = ref([]);

  const loading = ref(true);
  const subLoading = ref(false);
  const isEditMenu = ref(false);
  const treeItemTitle = ref('');
  const pattern = ref('');
  const drawerTitle = ref('');

  // const formParams = reactive({});

  const params = ref();

  const isAddSon = computed(() => {
    return !treeItemKey.value.length;
  });

  const addMenuOptions = ref([
    {
      label: '添加顶级菜单',
      key: 'home',
      disabled: false,
    },
    {
      label: '添加子菜单',
      key: 'son',
      disabled: isAddSon,
    },
  ]);

  const formParams = reactive({
    type: 1,
    label: '',
    subtitle: '',
    path: '',
    auth: '',
    openType: 1,
  });

  function selectAddMenu(key: string) {
    drawerTitle.value = key === 'home' ? '添加顶栏菜单' : `添加子菜单：${treeItemTitle.value}`;
    openCreateDrawer();
  }

  function openCreateDrawer() {
    const { openDrawer } = createDrawerRef.value;
    openDrawer();
  }

  function selectedTree(keys) {
    if (keys.length) {
      const treeItem = getTreeItem(unref(treeData), keys[0]);
      treeItemKey.value = keys;
      treeItemTitle.value = treeItem.label;
      Object.assign(formParams, treeItem);
      isEditMenu.value = true;
    } else {
      isEditMenu.value = false;
      treeItemKey.value = [];
      treeItemTitle.value = '';
    }
  }

  function handleReset() {
    const treeItem = getTreeItem(unref(treeData), treeItemKey[0]);
    Object.assign(formParams, treeItem);
  }

  function formSubmit() {
    formRef.value.validate((errors: boolean) => {
      if (!errors) {
        message.error('抱歉，您没有该权限');
      } else {
        message.error('请填写完整信息');
      }
    });
  }

  function packHandle() {
    if (expandedKeys.value.length) {
      expandedKeys.value = [];
    } else {
      expandedKeys.value = unref(treeData).map((item: any) => item.key as string) as [];
    }
  }

  onMounted(async () => {
    // const treeMenuList = await getMenuList();
    // const keys = treeMenuList.list.map((item) => item.key);
    // Object.assign(formParams, keys);
    // treeData.value = treeMenuList.list;
    loading.value = false;
  });

  const loadDataTableDictType = async (res) => {
    return await getTableListDictType({ ...params.value, ...res });
  };
  const loadDataTableDict = async (res) => {
    return await getTableListDict({ ...formParams, ...params.value, ...res });
  };

  function onExpandedKeys(keys) {
    expandedKeys.value = keys;
  }
  const actionRef = ref();


  const actionColumn = reactive({
    width: 70,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '删除',
            icon: 'ic:outline-delete-outline',
            // onClick: handleDelete.bind(null, record),
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
            // 根据权限控制是否显示: 有权限，会显示，支持多个
            auth: ['basic_list'],
          },
          {
            label: '编辑',
            // onClick: handleEdit.bind(null, record),
            ifShow: () => {
              return true;
            },
            auth: ['basic_list'],
          },
        ],
        select: (key) => {
          message.info(`您点击了，${key} 按钮`);
        },
      });
    },
  });
</script>
