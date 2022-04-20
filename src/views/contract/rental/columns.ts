import {h} from "vue";
import {NTag} from "naive-ui";

export const columns = [
  {
    type: 'selection',
  },
  {
    title: '合同ID',
    key: 'contractId',
    width: 200
  },
  {
    title: '外部合同编号',
    key: 'externalContractNbr',
    width: 200,
  },
  {
    title: '项目名称',
    key: 'projectName',
    width: 200
  },
  {
    title: '发起部门',
    key: 'departmentName',
    width: 150,
  },
  {
    title: '所属中心名称',
    key: 'sectionName',
    width: 200,
  },
  {
    title: '产品大类',
    key: 'userTel',
    width: 100,
  },
  {
    title: '产品子类',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '主办客户经理',
    key: 'userMobile',
    width: 150,
  },
  {
    title: '协办客户经理',
    key: 'userMobile',
    width: 150,
  },
  {
    title: '出租人',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '承租人',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '资产描述',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '资产描述',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '用户状态',
    key: 'validInd',
    width: 100,
    render() {
      return h(
        NTag,
        {
          type: 1 ==1 ? 'success' : 'error',
        },
        {
          default: () => (1 ==1? '正常' : '禁用'),
        }
      );
    },
  },
  {
    title: '地址',
    key: 'address',
    auth: ['basic_list'], // 同时根据权限控制是否显示
    ifShow: (_column) => {
      return true; // 根据业务控制是否显示
    },
    width: 150,
  },
];










