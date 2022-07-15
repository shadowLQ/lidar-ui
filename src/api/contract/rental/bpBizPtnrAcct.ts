import { http } from '@/utils/http/axios';

//获取合作伙伴账号table
export function getTableList(params) {
  return http.request({
    url: '/system/cbayBpBizPtnrAcctInfo/list',
    method: 'get',
    params,
  });
}

/**
 * 新增编辑合作伙伴账号
 */
export function saveOrUpdate(params) {
  return http.request({
      url: '/system/cbayBpBizPtnrAcctInfo/saveOrUpdate',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * 根据主键获取合作伙伴账号信息
 */
export function getBpBizPtnrAcctInfo(bpBankAcctId) {
  return http.request({
      url: '/system/cbayBpBizPtnrAcctInfo/findBpBizPtnrAcctInfoByBpBankAcctId/'+bpBankAcctId,
      method: 'get'
    }
  );
}
/**
 * 删除合作伙伴账号
 * @param params
 */
export function deleteBizPtnrAcctInfo(params) {
  return http.request({
      url: '/system/cbayBpBizPtnrAcctInfo/delete/'+params,
      method: 'DELETE'
    },
    {
      isTransformResponse: false
    }
  );
}






