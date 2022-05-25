import {RouteRecordRaw} from 'vue-router';
import {Layout} from '@/router/constant';
import {OptionsSharp} from '@vicons/ionicons5';
import {renderIcon} from '@/utils/index';

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
    path: '/asset',
    name: 'Asset',
    redirect: '/asset/assetInfo',
    component: Layout,
    meta: {
      title: '资产管理',
      icon: renderIcon(OptionsSharp),
      sort: 2,
    },
    children: [
      {
        path: 'assetInfo',
        name: 'asset_assetInfo',
        meta: {
          title: '租赁物信息',
        },
        component: () => import('@/views/asset/assetInfo/asset.vue'),
      },
      {
        path: 'assetAllowanceAndDepreciation/:seqno',
        name: 'asset-allowanceAndDepreciation',
        meta: {
          title: '资产折旧与减值',
          hidden: true,
          activeMenu: 'asset_assetInfo',
        },
        component: () => import('@/views/asset/assetInfo/allowanceAndDepreciation.vue'),
      },
      {
        path: 'menu',
        name: 'system_menu',
        meta: {
          title: '租赁物信息(商用机)',
        },
        component: () => import('@/views/asset/assetInfo/asset.vue'),
      },
    ],
  },
];

export default routes;
