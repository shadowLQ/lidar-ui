

import {getDictLable, useDict} from "@/utils/dict";
import {h} from "vue";


// @ts-ignore
let {dict0000} = useDict("0000");
// @ts-ignore
let {dict7022} = useDict("7022");
// @ts-ignore
let {dict1170} = useDict("1170");

export const columns = [
  {
    type: 'selection'

  },
  {
    title: '主键',
    key: 'seqno',
    width: 100,
    ifShow: false,
  },
  {
    title: '收据编号',
    key: 'receiptNo',
    width: 100
  },
  {
    title: '收款日期',
    key: 'arriveDate',
    width: 100,
  },
  {
    title: '实际收款金额（元）',
    key: 'actAmt',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.actAmt).toLocaleString())
      );
    }
  },
  {
    title: '应核销金额',
    key: 'writeOffAmt',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.writeOffAmt).toLocaleString())
      );
    }
  },
  {
    title: '已核销金额',
    key: 'confirmAmt',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.confirmAmt).toLocaleString())
      );
    }
  },
  {
    title: '退款金额',
    key: 'refundAmt',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.refundAmt).toLocaleString())
      );
    }
  },
  {
    title: '付款账号',
    key: 'payAcctNo',
    width: 100,
  },
  {
    title: '付款人名称',
    key: 'payerName',
    width: 100,
  },
  {
    title: '收款账号',
    key: 'recvAcctNo',
    width: 100,
  },
  {
    title: '收款人名称',
    key: 'receiverName',
    width: 100,
  },
  {
    title: '外部合同编号',
    key: 'externalContractNbr',
    width: 150,
  },
  {
    title: '合同ID',
    key: 'contractId',
    width: 100,
  },
  {
    title: '是否挂账',
    key: 'isTempSave',
    width: 100,
    render(row) {
      return h(
        () => (row.isTempSave!=null?getDictLable(row.isTempSave,dict0000.value):row.isTempSave)
      );
    },
  },
  {
    title: '核销状态',
    key: 'writeOffStatus',
    width: 100,
    render(row) {
      return h(
        () => (row.writeOffStatus!=null?getDictLable(row.writeOffStatus,dict7022.value):row.writeOffStatus)
      );
    },
  },
  {
    title: '币种',
    key: 'currencyCde',
    width: 100,
    render(row) {
      return h(
        () => (row.currencyCde!=null?getDictLable(row.currencyCde,dict1170.value):row.currencyCde)
      );
    },
  }
];
