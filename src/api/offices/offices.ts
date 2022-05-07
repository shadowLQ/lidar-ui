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

/**
 * 根据机构级别查询机构信息
 * @param ofcGrdCd 机构级别
 */
export function getOfficesByOfcGrdCd(ofcGrdCd) {
  return http.request({
      url: '/system/cbaySysOffice/getByOfcGrdCd/' + ofcGrdCd,
      method: 'get',
    }
  )
}
