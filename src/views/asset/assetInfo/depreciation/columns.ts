import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// 资产折旧

// 币种
// @ts-ignore
let { dict1170 } = useDict("1170");

export const depreciationColumns = [
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
    title: '折旧日期',
    key: 'depreciationDate',
    width: 100,
  },
  {
    title: '原币币种',
    key: 'currency',
    width: 100,
    render(row) {
      return h(
        () => (row.currency!=null?getDictLable(row.currency,dict1170):row.currency)
      );
    },
  },
  {
    title: '折旧金额-原币',
    key: 'depreciationAmt',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.depreciationAmt).toLocaleString())
      );
    }
  },
  {
    title: '折旧金额-人民币',
    key: 'depreciationAmtRmb',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.depreciationAmtRmb).toLocaleString())
      );
    }
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
