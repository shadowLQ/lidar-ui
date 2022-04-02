import {http} from '@/utils/http/axios';

//获取table
export function getTableListOffices(params) {
  return http.request({
    url: '/system/cbaySysOffice/list',
    method: 'get',
    params,
  });
}


// 根据机构类型查询机构信息
export function getOfficesByOfcTypeCd(ofcTypeCd) {
  return http.request({
      url: '/system/cbaySysOffice/getByOfcTypeCd/' + ofcTypeCd,
      method: 'get',
    }
  )
}
