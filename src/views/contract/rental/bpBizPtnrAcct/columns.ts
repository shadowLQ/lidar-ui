import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// @ts-ignore
let {dict3019} = useDict("3019");
// @ts-ignore
let {dict1272} = useDict("1272");

export const columns = [
  {
    type: 'selection',
  },
  {
    title: '主键',
    key: 'bpBankAcctId',
    width: 100,
    ifShow: false,
  },
  {
    title: '开户行名称',
    key: 'bankNm',
    width: 100
  },
  {
    title: '开户行分支行名称',
    key: 'bankBrchNm',
    width: 150,
  },
  {
    title: '银行账户类别',
    key: 'bankAcctTypeCd',
    width: 150,
    render(row) {
      return h(
        () => (row.bankAcctTypeCd!=null?getDictLable(row.bankAcctTypeCd,dict3019):row.bankAcctTypeCd)
      );
    },
  },
  {
    title: '银行账户户名',
    key: 'bankAcctNm',
    width: 100,
  },
  {
    title: '银行账户账号',
    key: 'bankAcctNbr',
    width: 100,
  },
  {
    title: '银行账户用途',
    key: 'bankAcctPrpsCd',
    width: 100,
    render(row) {
      return h(
        () => (row.bankAcctPrpsCd != null ? getDictLable(row.bankAcctPrpsCd, dict1272) : row.bankAcctPrpsCd)
      );
    },
  },
  {
    title: '备注',
    key: 'remark',
    width: 100,
  },
  {
    title: '创建时间',
    key: 'creatTime',
    width: 100,
  }
];
