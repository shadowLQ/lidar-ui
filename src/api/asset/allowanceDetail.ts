import { http } from '@/utils/http/axios';

//减值明细信息列表
export function getAssetAllowanceDetailByAssetAddSeqno(params) {
  return http.request({
    url: '/asset/olAssetAllowanceDetail/getAssetAllowanceDetailByAssetAddSeqno/'+params,
    method: 'get',
  });
}

/**
 * 新增/修改减值明细
 */
export function saveOrUpdate(params) {
  return http.request({
      url: '/asset/olAssetAllowanceDetail/saveOrUpdate',
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

/**
 * 删除用户
 * @param userId
 */
export function deleteSysUser(userId) {
  return http.request({
      url: '/system/cbaySysUser/delete/'+userId,
      method: 'DELETE',
      // params,
    },
    {
      isTransformResponse: false
    }
  );
}



