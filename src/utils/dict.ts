import {getDicts} from '@/api/dict/dict'
import {ref, toRefs} from "vue";
import {getOfficesByOfcTypeCd} from "@/api/offices/offices";

/**
 * 获取字典数据
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
 * 获取公司数据
 */
export function getOffices() {
  let offices = ref();
  getOfficesByOfcTypeCd('010100000001').then(res => {
    offices.value = res;
  });
  return offices;
}

/**
 * 获取部门数据
 */
export function getDeps() {
  let offices = ref();
  getOfficesByOfcTypeCd('010100000002').then(res => {
    offices.value = res;
  });
  return offices;
}


export function getDictLable(a,dictValue){
  let lab="";
  const arr=Array.isArray(a) ? a : [String(a )];
  dictValue.value.forEach((d)=>{
    if (arr.includes(d.value)){
      console.log(d.label)
      lab=d.label
      return;
    }
  })
  return lab;
}

