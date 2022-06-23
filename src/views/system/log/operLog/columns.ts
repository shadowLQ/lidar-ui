import { useDict} from "@/utils/dict";

// @ts-ignore
let { dict0103 } = useDict("0103");

export const columns = [
  {
    type: 'selection',
  },
  {
    title: '日志编号',
    key: 'operId',
    width: 200
  },
  {
    title: '系统模块',
    key: 'title',
    width: 100,
  },
  {
    title: '操作类型',
    key: 'businessType',
    width: 100
  },
  {
    title: '请求方式',
    key: 'requestMethod',
    width: 100,
  },
  {
    title: '操作人员',
    key: 'operName',
    width: 100,
  },
  {
    title: '操作地址',
    key: 'operIp',
    width: 100,
  },
  {
    title: '操作地点',
    key: 'operLocation',
    width: 200,
  },
  {
    title: '操作状态',
    key: 'status',
    width: 100
  },
  {
    title: '操作日期',
    key: 'operTime',
    width: 200,
  },
];










