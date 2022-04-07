import { http } from '@/utils/http/axios';

//获取table
export function getTableList(params) {
  return http.request({
    url: '/system/cbaySysUser/list',
    method: 'get',
    params,
  });
}

/**
 * 新增用户
 */
export function addUser(params) {
  return http.request({
      url: '/system/cbaySysUser/add',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
