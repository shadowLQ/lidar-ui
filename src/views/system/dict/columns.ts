import { h } from 'vue';
import { NAvatar } from 'naive-ui';

export const columns = [
  {
    title: '字典名称',
    key: 'id',
    width: 50,
  },
  {
    title: '字典值',
    key: 'name',
    width: 50,
  },
  {
    title: '排序',
    key: 'avatar',
    width: 100,
    render(row) {
      return h(NAvatar, {
        size: 48,
        src: row.avatar,
      });
    },
  },
  {
    title: '创建时间',
    key: 'date',
    width: 100,
  },
];
