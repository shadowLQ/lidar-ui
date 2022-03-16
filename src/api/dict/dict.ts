import { http } from '@/utils/http/axios';

//获取table
export function getTableListDict(params) {
  return http.request({
    url: '/system/cbaySysDict/list',
    method: 'get',
    params,
  });
}


// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return http.request({
    url: '/system/cbaySysDict/getByDictTypeCd/' + dictType,
    method: 'get'
  })
}
