import {CSSProperties, h} from "vue";
import {NSwitch, useDialog, useMessage} from "naive-ui";
import {getDictLable, useDict} from "@/utils/dict";
import {updateStatusByUserId} from "@/api/user/user";

// @ts-ignore
let { dict0103 } = useDict("0103");

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
    key: 'ofc.ofcNm',
    width: 100,
  },
  {
    title: '归属部门',
    key: 'dep.ofcNm',
    width: 100
  },
  {
    title: '姓名',
    key: 'userNm',
    width: 100,
  },
  {
    title: '登录名',
    key: 'loginNm',
    width: 100,
  },
  {
    title: '电话',
    key: 'userTel',
    width: 100,
  },
  {
    title: '手机',
    key: 'userMobile',
    width: 100,
  },
  {
    title: '用户类型',
    key: 'userTypeCd',
    width: 100,
    render(row) {
      return h(
        () => (getDictLable(row.userTypeCd,dict0103))
      );
    },
  },
  // {
  //   title: '用户状态',
  //   key: 'validInd',
  //   width: 100,
  //   render(row) {
  //     return h(
  //       NTag,
  //       {
  //         type: row.validInd ==1 ? 'success' : 'error',
  //       },
  //       {
  //         default: () => (row.validInd ==1? '正常' : '禁用'),
  //       }
  //     );
  //   },
  // },
  {
    title: '用户状态',
    key: 'validInd',
    width: 100,
    render(row) {
      const message = useMessage();
      const dialog = useDialog();

      function updateStatus(row) {
        updateStatusByUserId(row).then(res => {
          message.success(res.message);
          // reloadTable();
        }).catch((err) => {
          message.error(err);
        })
      }

      function systemOpenChange(value) {
        row.validInd=value;
        if (value) {
          let text = row.validInd === "0" ? "禁用" : "启用";
          dialog.warning({
            title: '警告',
            // content: `您确定要${text}${row.userNm}?该操作立马生效，请慎重操作！`,
            content: ()=>{
              return h(
                'p', {style:'padding-left: 35px'},[`您确定要${text}`,h('span',{
                  style:'font-weight:bold'
                },`${row.userNm}`),`该操作立马生效,请慎重操作!`],
              )
            },
            positiveText: '确定',
            negativeText: '取消',
            onPositiveClick: () => {
              updateStatus(row);
            },
            onNegativeClick: () => {
              row.validInd= value==="1"? "0":"1";
            },
            onMaskClick: () => {
              row.validInd= value==="1"? "0":"1";
            }
          });
        }
      }

      return h(
        NSwitch,
        {
          // type: row.validInd ==1 ? 'success' : 'error'
          checkedValue: "1",
          uncheckedValue: "0",
          // modelValue: row.validInd,
          // : ($event) => {this.$emit('update:modelValue', $event.target.value)}

          value: row.validInd,
          railStyle: railStyle,
          // "onUpdate:value":(a) =>row.validInd=a,
          onUpdateValue: systemOpenChange
        },
        {
          checked: () => ('启用'),
          unchecked: () => ('禁用'),

        }
      );
    },
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




function railStyle(info) {
  const {checked, focused} = info;
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#2080f0'
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040'
    }
  } else {
    style.background = '#d03050'
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  }
  return style

}









