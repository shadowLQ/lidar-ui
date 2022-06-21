import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// 资产折旧

// 币种
// @ts-ignore
let { dict1170 } = useDict("1170");
// 收付方向
// @ts-ignore
let { dict7056 } = useDict("7056");

export const columns = [
  {
    title: 'seqno',
    key: 'seqno',
    width: 100,
  },
  {
    title: '收付方向',
    key: 'receivePayDir',
    width: 100,
    render(row) {
      return h(
        () => (row.receivePayDir!=null?getDictLable(row.receivePayDir,dict7056):row.receivePayDir)
      );
    },
  },
  {
    title: '收付说明',
    key: 'receivePayDesc',
    width: 100,
  },
  {
    title: '金额',
    key: 'amt',
    width: 100,
  },
  {
    title: '币种',
    key: 'currencyCde',
    width: 100,
    render(row) {
      return h(
        () => (row.currencyCde!=null?getDictLable(row.currencyCde,dict1170):row.currencyCde)
      );
    },
  },
  {
    title: '增值税率%',
    key: 'vatRate',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.vatRate).toLocaleString())
      );
    }
  },
  {
    title: '增值税金额',
    key: 'vatAmt',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.vatAmt).toLocaleString())
      );
    }
  },
  {
    title: '备注',
    key: 'memo',
    width: 100,
  }
];
