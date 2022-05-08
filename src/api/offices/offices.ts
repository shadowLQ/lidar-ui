import {http} from '@/utils/http/axios';

//获取table
export function getTableListOffices(params) {
  return http.request({
    url: '/system/cbaySysOffice/list',
    method: 'get',
    params,
  });
}


/**
 * 根据机构类型查询机构信息
 * @param ofcTypeCd 机构类型id
 */
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

/**
 * 根据上级机构id查询子机构
 * @param ofcId 机构id
 */
export function getOfficesByOfcPrtId(ofcId) {
  return http.request({
      url: '/system/cbaySysOffice/getByOfcPrtId/' + ofcId,
      method: 'get',
    }
  )
}
