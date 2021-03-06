import {getDicts} from '@/api/dict/dict'
import {ref, toRefs} from "vue";
import {
  getOfficesByOfcGrdCd,
  getOfficesByOfcPrtId,
  getOfficesByOfcTypeCd
} from "@/api/offices/offices";
import {getCategoryByParentCode} from "@/api/category/category";
import {getUsersApi} from "@/api/user/user";
import {getOlAssetInfoAddBySpvId} from "@/api/asset/asset";
import {findAllRecvAccounts, findBpBizPtnrAcctInfo} from "@/api/system/paymentCfg";
import {findBpBizPtnrBaseByBpTypeCd} from "@/api/contract/rental/bpBizPtnrBase";

/**
 * 获取字典数据以及下拉框其他数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((d,) => {

      res.value["dict" + d] = [];
      getDicts(d).then(resp => {
        res.value["dict" + d] = resp.map(p => ({label: p.dictCnDesc, value: p.dictCd}))
      })
    })
    return toRefs(res.value);
  })()
}

/**
 * 获取公司
 */
export function getCompany() {
  let offices = ref();
  getOfficesByOfcTypeCd('010100000001').then(res => {
    offices.value = res;
  });
  return offices;
}

export function getAssetInfoAdd() {
  let offices = ref();
  getOlAssetInfoAddBySpvId("").then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 获取部门
 */
export function getDep() {
  let offices = ref();
  getOfficesByOfcTypeCd('010100000002').then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 获取三级部门
 */
export function getThirdDep() {
  let offices = ref();
  getOfficesByOfcGrdCd('010200000003').then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 获取用户信息
 */
export function getUsers() {
  let users = ref();
  getUsersApi().then(res => {
    users.value = res;
  });
  return users;
}

/**
 * 根据机构id获取机构
 * @param ofcId
 */
export async function getOffByOfcPrtId(ofcId) {
  return await getOfficesByOfcPrtId(ofcId)
}


/**
 * 获取种类信息
 * @param parentCode
 */
export async function getCategory(parentCode) {
  // let category = ref()
  return await getCategoryByParentCode(parentCode)
  // return category;
}


export function getDictLable(a, dictValue) {
  let lab = "";
  const arr = Array.isArray(a) ? a : [String(a)];
  if (a!=null&&dictValue!=undefined){
    dictValue.forEach((d) => {
      if (arr.includes(d.value)) {
        console.log(d.label)
        lab = d.label
        return;
      }
    })
  }

  return lab;
}

/**
 * 内部账号
 */
export function getRecvAccounts() {
  let offices = ref();
  findAllRecvAccounts().then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 合作伙伴账号
 */
export function getRecvAcctNo() {
  let offices = ref();
  findBpBizPtnrAcctInfo().then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 合作伙伴
 * 304100000002 法人客户
 * 304100000001 自然人客户
 */
export function getBpBizPtnrBase() {
  let offices = ref();
  findBpBizPtnrBaseByBpTypeCd('304100000002').then(res => {
    offices.value = res;
  });
  return offices;
}

