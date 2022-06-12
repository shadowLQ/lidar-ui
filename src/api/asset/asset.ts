import { http } from '@/utils/http/axios';

//租赁物信息列表
export function getTableList(params) {
  return http.request({
    url: '/asset/olAssetInfoAdd/list',
    method: 'get',
    params,
  });
}

/**
 * 新增更新租赁物
 */
export function saveOrUpdate(params) {
  return http.request({
      url: '/asset/olAssetInfoAdd/saveOrUpdate',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * 根据租赁物id获取租赁物信息
 */
export function getOlAssetInfoAddBySeqno(params) {
  return http.request({
      url: '/asset/olAssetInfoAdd/getOlAssetInfoAddBySeqno/'+params,
      method: 'get'
    }
  );
}

/**
 * 删除租赁物
 * @param seqno
 */
export function deleteAssetInfoAdd(seqno) {
  return http.request({
      url: '/asset/olAssetInfoAdd/delete/'+seqno,
      method: 'DELETE',
      // params,
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
