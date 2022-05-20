<template>
  <div>
    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" :title="title">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="130"
        class="py-4"
      >
        <n-form-item label="字典值" path="dictCd">
          <n-input placeholder="请输入字典值" v-model:value="formParams.dictCd"/>
        </n-form-item>
        <n-form-item label="字典值中文描述" path="dictCnDesc">
          <n-input placeholder="请输入字典值中文描述" v-model:value="formParams.dictCnDesc"/>
        </n-form-item>
        <n-form-item label="字典值英文描述" path="dictEnDesc">
          <n-input placeholder="请输入字典值英文描述" v-model:value="formParams.dictEnDesc"/>
        </n-form-item>
      </n-form>

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


import {ref, unref, reactive, defineComponent} from 'vue';
import {  useMessage} from 'naive-ui';
import {addDict} from "@/api/dict/dict";



const rules = {
  dictCd: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典值',
  },
  dictCnDesc: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典值中文描述',
  },
  dictEnDesc: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典值英文描述',
  },
};


export default defineComponent({
  name: 'Dict',
  components: {},
  props: {
    title: {
      type: String,
      default: '添加字典',
    },
    dictTypeCd: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 450,
    },
    reload:{
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const message = useMessage();
    const showModal = ref(false);
    const formBtnLoading = ref(false);
    const formRef: any = ref(null);

    const defaultValueRefByDict = () => ({
      dictTypeCd: '',
      dictCd: '',
      dictEnDesc: '',
      dictCnDesc: '',
      dictId: ''
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
          addDict(formParams).then(res => {
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
      formParams.dictTypeCd=props.dictTypeCd;
    }

    return {
      formRef,
      formBtnLoading,
      showModal,
      rules,
      formParams,
      handleReset,
      addTable,
      confirmForm
    };
  },
});







</script>
