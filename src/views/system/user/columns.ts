// import { h } from 'vue';
// import { NAvatar } from 'naive-ui';

export const columns = [
  {
    type: 'selection',
  },
  {
    title: '用户id',
    key: 'userId',
    width: 100,
    ifShow: false,
  },
  {
    title: '归属公司',
    key: 'userNm',
    width: 100,
  },
  {
    title: '归属部门',
    key: 'userNm',
    width: 100,
  },
  {
    title: '姓名',
    key: 'userNm',
    width: 100,
  },
  {
    title: '登录名',
    key: 'userNm',
    width: 100,
  },
  {
    title: '电话',
    key: 'userNm',
    width: 100,
  },
  {
    title: '手机',
    key: 'userNm',
    width: 100,
  },
  {
    title: '用户状态',
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
];
