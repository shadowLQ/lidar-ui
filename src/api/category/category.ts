import {http} from '@/utils/http/axios';


// 产品种类层级
export function getCategoryByParentCode(parentCode) {
  return http.request({
      url: '/system/olSysCategory/getByParentCode/' + parentCode,
      method: 'get',
    }
  )
}
