import { getDicts } from '@/api/dict/dict'
import {ref, toRefs} from "vue";

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    debugger
    args.forEach((d, index) => {
      res.value[d] = [];
      getDicts(d).then(resp => {
        res.value[d] = resp.map(p => ({ label: p.dictCnDesc, value: p.dictCd }))
      })
    })
    return toRefs(res.value);
  })()
}
