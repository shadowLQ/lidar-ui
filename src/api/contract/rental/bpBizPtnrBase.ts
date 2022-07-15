import {http} from "@/utils/http/axios";


export function findBpBizPtnrBaseByBpTypeCd(bpTypeCd) {
  return http.request({
    url: '/system/cbayBpBizPtnrBase/findBpBizPtnrBaseByBpTypeCd/'+bpTypeCd,
    method: 'get'
  })
}
