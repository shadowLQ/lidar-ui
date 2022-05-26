import {http} from '@/utils/http/axios';

//折旧明细信息列表
export function getAssetDepreciationDetailByAssetAddSeqno(params) {
  return http.request({
    url: '/asset/olAssetDepreciationDetail/getAssetDepreciationDetailByAssetAddSeqno/' + params,
    method: 'get'
  });
}

/**
 * 新增/修改折旧明细
 */
export function saveOrUpdate(params) {
  return http.request({
      url: '/asset/olAssetDepreciationDetail/saveOrUpdate',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * 根据主键id获取折旧明细信息
 */
export function getOlAssetDepreciationDetailBySeqno(params) {
  return http.request({
      url: '/asset/olAssetDepreciationDetail/getOlAssetDepreciationDetailBySeqno/' + params,
      method: 'get'
    }
  );
}

/**
 * 删除折旧明细信息
 * @param userId
 */
export function deleteDepreciation(params) {
  return http.request({
      url: '/asset/olAssetDepreciationDetail/delete/'+params,
      method: 'DELETE'
    },
    {
      isTransformResponse: false
    }
  );
}

/**
 * 用户启用/禁用
 * @param userId
 */
export function updateStatusByUserId(params) {
  return http.request({
      url: '/system/cbaySysUser/updateStatus',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false
    }
  );
}
