import {http} from "@/utils/http/axios";

export function findAllRecvAccounts() {
  return http.request({
    url: '/system/cbaySysPaymentCfg/findAllRecvAccounts',
    method: 'get'
  })
}

export function findBpBizPtnrAcctInfo() {
  return http.request({
    url: '/system/cbayBpBizPtnrAcctInfo/findBpBizPtnrAcctInfo',
    method: 'get'
  })
}
