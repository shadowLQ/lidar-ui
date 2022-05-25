import {h} from "vue";

import {getDictLable, useDict} from "@/utils/dict";


// @ts-ignore
let {dict1170} = useDict("1170");

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
    title: '租赁物编号',
    key: 'assetNo',
    width: 150,
  },
  {
    title: '租赁物名称',
    key: 'assetName',
    width: 300,
  },
  {
    title: '原币币种',
    key: 'currency',
    width: 150,
    render(row) {
      return h(
        () => (row.currency != null ? getDictLable(row.currency, dict1170) : row.currency)
      );
    },
  },
  {
    title: '资产原值-原币',
    key: 'origPrice',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.origPrice).toLocaleString())
      );
    }
  },
  {
    title: '资产原值-人民币',
    key: 'origPriceRmb',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.origPriceRmb).toLocaleString())
      );
    }
  },
  {
    title: '累计折旧-原币',
    key: 'depreciationAmt',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.depreciationAmt).toLocaleString())
      );
    }
  },
  {
    title: '累计折旧-人民币',
    key: 'depreciationAmtRmb',
    width: 150,
    render(row) {
      return h(
        () => (Number(row.depreciationAmtRmb).toLocaleString())
      );
    }
  },
  {
    title: 'EAS资产卡片净值-原币',
    key: 'cardNeatValue',
    width: 200,
    render(row) {
      return h(
        () => (Number(row.cardNeatValue).toLocaleString())
      );
    }
  },
  {
    title: '预计净残值-原币',
    key: 'estimateSalvageAmt',
    width: 150
  },
  {
    title: '折旧算法',
    key: 'depreciationMethod',
    width: 150
  },
  {
    title: '净残值率',
    key: 'estimateSalvageRatio',
    width: 100
  },
  {
    title: '资产所属SPV名称',
    key: 'ownerSpvName',
    width: 200,

  },
  {
    title: '资产所属部门名称',
    key: 'ownerDepartmentName',
    width: 150
  },
  {
    title: '减值准备-原币',
    key: 'allowanceAmt',
    width: 100
  },
  {
    title: '减值准备-人民币',
    key: 'allowanceAmtRmb',
    width: 100
  },
  {
    title: '每月折旧(原币)',
    key: 'monthDepreciationAmt',
    width: 100
  },
  {
    title: '资产描述',
    key: 'assetStatusDesc',
    width: 100
  },
  {
    title: 'EAS资产卡片租赁物编号',
    key: 'cardAssetNo',
    width: 100
  },
  {
    title: '是否已转固',
    key: 'isFixedAsset',
    width: 100
  },
  {
    title: '转固日期',
    key: 'fixAssetDate',
    width: 100
  },
  {
    title: '上次从EAS资产卡片同步日期',
    key: 'lastEasSychDate',
    width: 100
  },
  {
    title: 'EAS同步是否成功',
    key: 'isEasSychSuccess',
    width: 100
  },
  {
    title: 'EAS同步异常信息',
    key: 'easSychException',
    width: 100
  },
  {
    title: '是否需要同步eas',
    key: 'isNeedEasSych',
    width: 100
  },
  {
    title: '上次同步成功日期',
    key: 'lastSychSuccessDate',
    width: 100
  },
  {
    title: 'EAS资产卡片原值-原币',
    key: 'cardOrigPrice',
    width: 100
  },
  {
    title: 'EAS资产卡片原值-人民币',
    key: 'cardOrigPriceRmb',
    width: 100
  },
  {
    title: 'EAS资产卡片累计折旧-原币',
    key: 'cardDepreciationAmt',
    width: 100
  },
  {
    title: 'EAS资产卡片累计折旧-人民币',
    key: 'cardDepreciationAmtRmb',
    width: 100
  },
  {
    title: 'EAS资产卡片减值准备-原币',
    key: 'cardAllowanceAmt',
    width: 100
  },
  {
    title: 'EAS资产卡片减值准备-人民币',
    key: 'cardAllowanceAmtRmb',
    width: 100
  },
  {
    title: '资产交易金额',
    key: 'disposalAmt',
    width: 100
  },
  {
    title: 'EAS同步异常信息',
    key: 'isDisposal',
    width: 100
  },
  {
    title: 'EAS资产卡片租赁物名称',
    key: 'cardAssetName',
    width: 100
  },
  {
    title: 'EAS资产卡片FNumber',
    key: 'cardFnumber',
    width: 100
  },
  {
    title: '资产差异',
    key: 'origPriceDiff',
    width: 100
  },
  {
    title: '资产减值差异',
    key: 'allowanceDiffAmt',
    width: 100
  },
  {
    title: '资产折旧差异',
    key: 'depreciationDiffAmt',
    width: 100
  },


];
