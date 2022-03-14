import { http } from '@/utils/http/axios';

//获取table
export function getTableListDict(params) {
  return http.request({
    url: '/system/cbaySysDict/list',
    method: 'get',
    params,
  });
}
