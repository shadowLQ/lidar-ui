import {http} from '@/utils/http/axios';

//获取字典类型table
export function getTableListDictType(params) {
  return http.request({
    url: '/system/cbaySysDictType/list',
    method: 'get',
    params,
  });
}

// 字典类型新增

export function addDictType(params) {
  return http.request({
      url: '/system/cbaySysDictType/add',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

export function deleteDictType(params) {
  return http.request({
      url: '/system/cbaySysDictType/delete/'+params,
      method: 'DELETE',
      // params,
    },
    {
      isShowMessage: true,
      isShowSuccessMessage: true
    }
  );
}
