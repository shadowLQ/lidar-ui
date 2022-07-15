import {RouteRecordRaw} from 'vue-router';
import {Layout} from '@/router/constant';
import {renderIcon} from '@/utils/index';
import {MoneyCollectOutlined} from "@vicons/antd";


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
    path: '/receipt',
    name: 'Receipt',
    redirect: '/receipt/bills',
    component: Layout,
    meta: {
      title: '收款管理',
      icon: renderIcon(MoneyCollectOutlined),
      sort: 1,
    },
    children: [
      {
        path: 'bills',
        name: 'receipt_bills',
        meta: {
          title: '收款单管理',
        },
        component: () => import('@/views/receipt/receiptbills.vue'),
      },
      {
        path: 'rental-contractform/:id?',
        name: 'rental-contractform',
        meta: {
          title: '应收款管理',
          hidden: true,
          activeMenu: `${routeName}_rental_maintain`,
        },
        component: () => import('@/views/contract/rental/contractform.vue'),
      },
      {
        path: 'editCell',
        name: `${routeName}_table_editCell`,
        meta: {
          title: '应收款维护',
        },
        component: () => import('@/views/comp/table/editCell.vue'),
      },
      {
        path: 'editCell',
        name: `${routeName}_table_editCell`,
        meta: {
          title: '已核销明细查询',
        },
        component: () => import('@/views/comp/table/editCell.vue'),
      },
      {
        path: 'bpBizPtnrAcctInfo',
        name: `${routeName}_table_bpBizPtnrAcct`,
        meta: {
          title: '收款单挂账查询',
        },
        component: () => import('@/views/contract/rental/bpBizPtnrAcct/bpBizPtnrAcctInfo.vue'),
      },
    ],
  },
];

export default routes;
