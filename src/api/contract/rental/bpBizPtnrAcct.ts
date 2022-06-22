import { http } from '@/utils/http/axios';

//获取合同table
export function getTableList(params) {
  return http.request({
    url: '/system/cbayBpBizPtnrAcctInfo/list',
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
/**
 * 根据用户id获取用户信息
 */
export function getByUserId(params) {
  return http.request({
      url: '/system/cbaySysUser/getByUserId/'+params,
      method: 'get'
    }
  );
}






