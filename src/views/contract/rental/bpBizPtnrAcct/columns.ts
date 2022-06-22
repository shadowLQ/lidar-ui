import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// @ts-ignore
let {dict3019} = useDict("3019");

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
