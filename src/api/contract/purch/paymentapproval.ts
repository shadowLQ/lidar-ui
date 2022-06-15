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
 *
 */
export function savePaymentApproval(params) {
  return http.request({
      url: '/purch/olPurchPaymentApproval/save',
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
