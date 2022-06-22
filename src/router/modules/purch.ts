import {RouteRecordRaw} from 'vue-router';
import {Layout} from '@/router/constant';
import {OptionsSharp} from '@vicons/ionicons5';
import {renderIcon} from '@/utils/index';

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
    path: '/purch',
    name: 'contract_purch',
    redirect: '/purch/paymentApproval',
    component: Layout,
    meta: {
      title: '采购合同管理',
      icon: renderIcon(OptionsSharp),
      sort: 1,
    },
    children: [
      {
        path: 'paymentApproval',
        name: `${routeName}_paymentApproval`,
        meta: {
          title: '付款审批维护',
          hidden: false,
        },
        component: () => import('@/views/contract/purch/paymentApproval.vue'),
      },
      {
        path: 'paymentApprovalForm',
        name: `${routeName}_paymentApprovalForm`,
        meta: {
          title: '申请单',
          hidden: false,
        },
        component: () => import('@/views/contract/purch/PaymentApprovalForm.vue'),
      },
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
  },
];

export default routes;
