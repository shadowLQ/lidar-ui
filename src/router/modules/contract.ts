import { RouteRecordRaw } from 'vue-router';
import {Layout, ParentLayout} from '@/router/constant';
import { OptionsSharp } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routeName = 'contract';
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
    path: '/contract',
    name: routeName,
    redirect: '/contract/dict',
    component: Layout,
    meta: {
      title: '合同管理',
      icon: renderIcon(OptionsSharp),
      sort: 1,
    },
    children: [
      {
        path: 'rental',
        name: `${routeName}_rental`,
        redirect: '/comp/table/basic',
        component: ParentLayout,
        meta: {
          title: '租赁合同管理',
        },
        children: [
          {
            path: 'rental_maintain',
            name: `${routeName}_rental_maintain`,
            meta: {
              title: '合同维护',
            },
            component: () => import('@/views/contract/rental/rental.vue'),
          },
          {
            path: 'editCell',
            name: `${routeName}_table_editCell`,
            meta: {
              title: '合同管理',
            },
            component: () => import('@/views/comp/table/editCell.vue'),
          },
          {
            path: 'editCell',
            name: `${routeName}_table_editCell`,
            meta: {
              title: '合同查询',
            },
            component: () => import('@/views/comp/table/editCell.vue'),
          },
        ],
      },
      {
        path: 'purch',
        name: `${routeName}_purch`,
        redirect: '/comp/table/basic',
        component: ParentLayout,
        meta: {
          title: '采购合同管理',
        },
        children: [
          {
            path: 'basic',
            name: `${routeName}_table_basic`,
            meta: {
              title: '采购合同维护',
              hidden: false,
            },
            component: () => import('@/views/comp/table/basic.vue'),
          },
          {
            path: 'editCell',
            name: `${routeName}_table_editCell`,
            meta: {
              title: '付款计划维护',
            },
            component: () => import('@/views/comp/table/editCell.vue'),
          },
        ],
      }
    ],
  },
];

export default routes;
