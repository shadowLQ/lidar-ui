import {http} from '@/utils/http/axios';

//获取table
export function getTableList(params) {
  return http.request({
    url: '/system/olRentalReceiptVoucher/list',
    method: 'get',
    params,
  });
}
