import { http } from '@/utils/http/axios';

//获取table
export function getTableList(params) {
  return http.request({
    url: '/system/sysOperLog/list',
    method: 'get',
    params,
  });
}

/**
 * 新增用户
 */
export function saveOrUpdateUser(params) {
  return http.request({
      url: '/system/cbaySysUser/saveOrUpdate',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
/**
 * 根据用户id获取用户信息
 */
export function getByUserId(params) {
  return http.request({
      url: '/system/cbaySysUser/getByUserId/'+params,
      method: 'get'
    }
  );
}

/**
 * 删除操作日志
 * @param operId
 */
export function deleteSysOperLog(operId) {
  return http.request({
      url: '/system/sysOperLog/delete/'+operId,
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

export function getUsersApi() {
  return http.request({
      url: '/system/cbaySysUser/getUsers/',
      method: 'get'
    }
  );
}
