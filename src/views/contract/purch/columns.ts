import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// @ts-ignore
let {dict1170} = useDict("1170");
// @ts-ignore
let {dict7050} = useDict("7050");

export const columns = [
  {
    type: 'selection',
  },
  {
    title: '主键',
    key: 'seqno',
    width: 100,
    ifShow: false,
  },
  {
    title: '合同ID',
    key: 'contractId',
    width: 100
  },
  {
    title: '项目名称',
    key: 'projectName',
    width: 150,
  },
  {
    title: '资产所属SPV名称',
    key: 'spvName',
    width: 150,
  },
  {
    title: '外部合同编号',
    key: 'externalContractNbr',
    width: 100,
  },
  {
    title: '付款账号',
    key: 'payAcctNo',
    width: 100,
  },
  {
    title: '收款人银行账号',
    key: 'recvAcctNo',
    width: 100,
  },
  {
    title: '收款人开户银行',
    key: 'recvAcctBank',
    width: 100,
  },
  {
    title: '其中投放款',
    key: 'applyContractAmt',
    width: 100,
  },
  {
    title: '申请放款实际时间',
    key: 'applyLoanDate',
    width: 100,
  },
  {
    title: '其中税费其他',
    key: 'applyFeeAmt',
    width: 100,
  },
  {
    title: '币种',
    key: 'currencyCde',
    width: 100,
    render(row) {
      return h(
        () => (row.currencyCde != null ? getDictLable(row.currencyCde, dict1170) : row.currencyCde)
      );
    },
  },
  {
    title: '申请实付金额',
    key: 'loanTotalAmt',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.loanTotalAmt).toLocaleString())
      );
    }
  },
  {
    title: '后续还需付金额',
    key: 'loanAmtLater',
    width: 100,
    render(row) {
      return h(
        () => (Number(row.loanAmtLater).toLocaleString())
      );
    }
  },
  {
    title: '审批状态',
    key: 'approveStatus',
    width: 100,
    render(row) {
      return h(
        () => (row.approveStatus != null ? getDictLable(row.approveStatus, dict7050) : row.approveStatus)
      );
    },
  }
];
