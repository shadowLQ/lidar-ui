import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// 资产折旧

// 币种
// @ts-ignore
let { dict1170 } = useDict("1170");

export const columns = [
  {
    title: '收付方向',
    key: 'assetNo',
    width: 100,
  },
  {
    title: '收付说明',
    key: 'assetName',
    width: 100,
  },
  {
    title: '金额',
    key: 'depreciationDate',
    width: 100,
  },
  {
    title: '币种',
    key: 'currency',
    width: 100,
    render(row) {
      return h(
        () => (row.currency!=null?getDictLable(row.currency,dict1170):row.currency)
      );
    },
  },
  {
    title: '增值税率%',
    key: 'depreciationAmt',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.depreciationAmt).toLocaleString())
      );
    }
  },
  {
    title: '增值税金额',
    key: 'depreciationAmtRmb',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.depreciationAmtRmb).toLocaleString())
      );
    }
  },
  {
    title: '备注',
    key: 'memo',
    width: 100,
  }
];
