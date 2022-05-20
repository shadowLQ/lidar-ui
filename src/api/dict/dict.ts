import {http} from '@/utils/http/axios';

//获取table
export function getTableListDict(params) {
  return http.request({
    url: '/system/cbaySysDict/list',
    method: 'get',
    params,
  });
}

/**
 * 字典新增
 * @param params
 */
export function addDict(params) {
  return http.request({
      url: '/system/cbaySysDict/add',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * 字典修改
 * @param params
 */
export function editDict(params) {
  return http.request({
      url: '/system/cbaySysDict/edit',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}


// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return http.request({
    url: '/system/cbaySysDict/getByDictTypeCd/' + dictType,
    method: 'get'
  })
}

/**
 * 根据字典id获取字典信息
 * @param dictId
 */
export function getByDictId(dictId) {
  return http.request({
    url: '/system/cbaySysDict/getByDictId/' + dictId,
    method: 'get'
  })
}

/**
 * 删除字典值
 * @param dictIds
 */
export function deleteDictByDictId(dictIds) {
  return http.request({
      url: '/system/cbaySysDict/deleteByDictId/'+dictIds,
      method: 'DELETE',
      // params,
    },
    {
      isTransformResponse: false,
    }
  );
}
