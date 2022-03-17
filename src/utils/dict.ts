import { getDicts } from '@/api/dict/dict'
import {ref, toRefs} from "vue";

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((d, index) => {

      res.value["dict"+d] = [];
      getDicts(d).then(resp => {
        res.value["dict"+d] = resp.map(p => ({ label: p.dictCnDesc, value: p.dictCd }))
      })
    })
    return toRefs(res.value);
  })()
}
