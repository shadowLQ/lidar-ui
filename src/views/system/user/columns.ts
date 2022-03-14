// import { h } from 'vue';
// import { NAvatar } from 'naive-ui';

export const columns = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
    ],
  },
  {
    title: '用户id',
    key: 'userId',
    width: 100,
  },
  {
    title: '用户名',
    key: 'userNm',
    width: 100,
  },
  // {
  //   title: '头像',
  //   key: 'avatar',
  //   width: 100,
  //   render(row) {
  //     return h(NAvatar, {
  //       size: 48,
  //       src: row.avatar,
  //     });
  //   },
  // },
  // {
  //   title: '地址',
  //   key: 'address',
  //   auth: ['basic_list'], // 同时根据权限控制是否显示
  //   ifShow: (_column) => {
  //     return true; // 根据业务控制是否显示
  //   },
  //   width: 150,
  // },
  {
    title: '用户编号',
    key: 'userNbr',
    width: 160,
  },
  {
    title: '手机号',
    key: 'userMobile',
    width: 160,
  },
  {
    title: '邮箱',
    key: 'userEmail',
    width: 160,
  },
  {
    title: '创建时间',
    key: 'loginTime',
    width: 100,
  },
];
