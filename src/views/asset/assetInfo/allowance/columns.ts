import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// 资产减值
// @ts-ignore
let { dict1170 } = useDict("1170");

export const allowanceColumns = [
  {
    type: 'selection',
  },
  {
    title: '主键',
    key: 'seqno',
    width: 100,
    ifShow: true,
  },
  {
    title: '租赁物编号',
    key: 'assetNo',
    width: 100,
  },
  {
    title: '租赁物名称',
    key: 'assetName',
    width: 100,
  },
  {
    title: '计提日期',
    key: 'countDate',
    width: 100,
  },
  {
    title: '原币币种',
    key: 'currency',
    width: 100,
    render(row) {
      return h(
        () => (row.currency!=null?getDictLable(row.currency,dict1170.value):row.currency)
      );
    },
  },
  {
    title: '计提金额-原币',
    key: 'allowanceAmt',
    width: 100
  },
  {
    title: '计提金额-人民币',
    key: 'allowanceAmtRmb',
    width: 100,
  },
  {
    title: '折人民币汇率',
    key: 'exchRateRmb',
    width: 100,
  },
  {
    title: '备注',
    key: 'memo',
    width: 100,
  }
];
