import { http } from '@/utils/http/axios';

//获取table
export function getTableListDictType(params) {
  return http.request({
    url: '/system/cbaySysDictType/list',
    method: 'get',
    params,
  });
}
