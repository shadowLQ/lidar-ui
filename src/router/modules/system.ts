import { RouteRecordRaw } from 'vue-router';
import {Layout, ParentLayout} from '@/router/constant';
import { OptionsSharp } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    redirect: '/system/menu',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: renderIcon(OptionsSharp),
      sort: 1,
    },
    children: [
      {
        path: 'menu',
        name: 'system_menu',
        meta: {
          title: '菜单权限管理',
        },
        component: () => import('@/views/system/menu/menu.vue'),
      },
      {
        path: 'role',
        name: 'system_role',
        meta: {
          title: '角色权限管理',
        },
        component: () => import('@/views/system/role/role.vue'),
      },
      {
        path: 'dict',
        name: 'system_dict',
        meta: {
          title: '字典管理',
        },
        component: () => import('@/views/system/dict/dictType.vue'),
      },
      {
        path: 'user',
        name: 'system_user',
        meta: {
          title: '用户管理',
        },
        component: () => import('@/views/system/user/user.vue'),
      },
      {
        path: 'log',
        name: 'system_log',
        redirect: '/system/log/operLog',
        component: ParentLayout,
        meta: {
          title: '日志管理',
        },
        children: [
          {
            path: 'operLog',
            name: `system_log_oper`,
            meta: {
              title: '操作日志',
            },
            component: () => import('@/views/system/log/operLog.vue'),
          },
          {
            path: 'loginLog',
            name: `system_log_login`,
            meta: {
              title: '登录日志',
            },
            component: () => import('@/views/comp/table/editCell.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
