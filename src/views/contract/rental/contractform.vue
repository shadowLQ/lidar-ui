<template>
  <div>
    <n-card
      :bordered="false"
      title='📑基本信息'
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"

    >
      <n-form :rules="rules" ref="formRef" :model="formParams" label-width="100"
              label-placement="left">
        <n-grid :cols="3" x-gap="20" y-gap="10">
          <n-form-item-gi label="合同ID" path="loginNm">
            <n-input clearable placeholder="合同ID"/>
          </n-form-item-gi>
          <n-form-item-gi label="外部合同编号" path="userNm">
            <n-input clearable placeholder="外部合同编号"/>
          </n-form-item-gi>
          <n-form-item-gi label="项目名称">
            <n-input clearable placeholder="项目名称"/>
          </n-form-item-gi>
          <n-form-item-gi label="发起部门名称">
            <n-select filterable clearable placeholder="发起部门名称" :options=thirdDep @update:value="handleUpdateSection"/>
          </n-form-item-gi>
          <n-form-item-gi label="所属中心名称">
            <n-select filterable clearable placeholder="所属中心名称" :options=section />
          </n-form-item-gi>
          <n-form-item-gi label="产品大类" path="password">
            <n-select placeholder="产品大类" clearable :options=dict7020  @update:value="handleUpdateValue" />
          </n-form-item-gi>
          <n-form-item-gi label="产品子类" path="password">
            <n-select placeholder="产品子类" clearable :options="category"  :fallback-option=false  />
          </n-form-item-gi>
          <n-form-item-gi label="出租人">
            <n-input type="password" show-password-on="mousedown" placeholder="出租人"/>
          </n-form-item-gi>
          <n-form-item-gi label="主办客户经理" path="userEmail">
            <n-auto-complete :input-props="{autocomplete:'disabled'}" placeholder="主办客户经理"/>
          </n-form-item-gi>
          <n-form-item-gi label="协办客户经理" path="userMobile">
            <n-input placeholder="协办客户经理" clearable/>
          </n-form-item-gi>
          <n-form-item-gi label="合同管理岗">
            <n-select placeholder="合同管理岗"/>
          </n-form-item-gi>
          <n-form-item-gi label="资产技术管理岗">
            <n-select placeholder="资产技术管理岗"/>
          </n-form-item-gi>
          <n-form-item-gi label="客户经理">
            <n-select placeholder="客户经理"/>
          </n-form-item-gi>
          <n-form-item-gi label="客户经理">
            <n-select placeholder="客户经理"/>
          </n-form-item-gi>
          <n-form-item-gi label="出租人是否境外">
            <n-select placeholder="出租人是否境外"/>
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="承租人"  display-directive="show">
          <n-form :rules="rules" ref="formRef" :model="formParams" label-width="120"
                  label-placement="left">
            <n-grid :cols="3" x-gap="20" y-gap="10">
              <n-form-item-gi label="承租人" path="loginNm">
                <n-input clearable placeholder="承租人"/>
              </n-form-item-gi>
              <n-form-item-gi label="经营项目类型名称" path="userNm">
                <n-input clearable placeholder="经营项目类型名称"/>
              </n-form-item-gi>
              <n-form-item-gi label="租赁类型">
                <n-input clearable placeholder="租赁类型"/>
              </n-form-item-gi>
              <n-form-item-gi label="供应商是否回购">
                <n-select filterable clearable placeholder="供应商是否回购" :options=thirdDep @update:value="handleUpdateSection"/>
              </n-form-item-gi>
              <n-form-item-gi label="其他当事方">
                <n-select filterable clearable placeholder="其他当事方" :options=section />
              </n-form-item-gi>
              <n-form-item-gi label="供应商" path="password">
                <n-select placeholder="供应商" clearable :options=dict7020  @update:value="handleUpdateValue" />
              </n-form-item-gi>
              <n-form-item-gi label="实际运营人" path="password">
                <n-select placeholder="实际运营人" clearable :options="category"  :fallback-option=false  />
              </n-form-item-gi>
            </n-grid>
          </n-form>
        </n-tab-pane>
        <n-tab-pane name="oasis11" tab="金融条款"  display-directive="show">
          <n-form :rules="rules" ref="formRef" :model="formParams" label-width="120"
                  label-placement="left">
            <n-grid :cols="3" x-gap="20" y-gap="10">
              <n-form-item-gi label="合同起租日期" path="loginNm">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="合同起租日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="合同签定日期" path="userNm">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="合同签定日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="合同交付日期">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="合同交付日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="实际交付日期">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="实际交付日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="合同退租日期">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="合同退租日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="实际退租日期" path="password">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="实际退租日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="提前终止日期" path="password">
                <n-date-picker style="min-width: 100%" type="date" clearable placeholder="提前终止日期"/>
              </n-form-item-gi>
              <n-form-item-gi label="租期">
                <n-input autosize   :style="{ width: '50%' }"  placeholder="租期"/>
<!--                <n-button type="success">计算合同期限</n-button>-->
                <template #icon>
                  <n-icon><DollarCircleOutlined /></n-icon>
                </template>
              </n-form-item-gi>
              <n-form-item-gi label="主办客户经理" path="userEmail">
                <n-auto-complete :input-props="{autocomplete:'disabled'}" placeholder="主办客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="协办客户经理" path="userMobile">
                <n-input placeholder="协办客户经理" clearable/>
              </n-form-item-gi>
              <n-form-item-gi label="合同管理岗">
                <n-select placeholder="合同管理岗"/>
              </n-form-item-gi>
              <n-form-item-gi label="资产技术管理岗">
                <n-select placeholder="资产技术管理岗"/>
              </n-form-item-gi>
              <n-form-item-gi label="客户经理">
                <n-select placeholder="客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="客户经理">
                <n-select placeholder="客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="出租人是否境外">
                <n-select placeholder="出租人是否境外"/>
              </n-form-item-gi>
            </n-grid>
          </n-form>
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="租赁物信息">
          <n-table :bordered="false" :single-line="false">
            <thead>
            <tr>
              <th>姓名</th>
              <th>性别</th>
              <th>城市</th>
              <th>生日</th>
              <th width="150">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Ah jung</td>
              <td>男</td>
              <td>深圳</td>
              <td>1993-11-09</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>西门飞雪</td>
              <td>男</td>
              <td>广州</td>
              <td>1991-09-11</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>泰坦巨人</td>
              <td>男</td>
              <td>北京</td>
              <td>1990-11-03</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>猎魔人</td>
              <td>女</td>
              <td>上海</td>
              <td>1992-03-11</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            </tbody>
          </n-table>

          <n-form :rules="rules" ref="formRef" :model="formParams"
                  label-placement="left">
            <n-form-item label="资产描述" path="loginNm">
              <n-input autosize style="min-width: 50%"  clearable placeholder="资产描述"/>
            </n-form-item>
          </n-form>


        </n-tab-pane>
      </n-tabs>
    </n-card>
    <n-card
      :bordered="false"
      title="预约信息"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>收款人姓名</template>
          啊俊
        </n-descriptions-item>
        <n-descriptions-item label="收款账户">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="付款类型">支付宝</n-descriptions-item>
        <n-descriptions-item label="付款账户">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="转账金额">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="状态">
          <n-tag type="success"> 已到账</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
    <n-card
      :bordered="false"
      title="其它信息"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>城市</template>
          深圳
        </n-descriptions-item>
        <n-descriptions-item label="性别">男</n-descriptions-item>
        <n-descriptions-item label="邮箱">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="地址">广东省深圳市南山区</n-descriptions-item>
        <n-descriptions-item label="生日">1991-06-04</n-descriptions-item>
        <n-descriptions-item label="认证">
          <n-tag type="success"> 已认证</n-tag>
        </n-descriptions-item>
      </n-descriptions>
      <n-tabs type="line" animated>
        <n-tab-pane name="oasis" tab="基本信息"  display-directive="show">
          <n-form :rules="rules" ref="formRef" :model="formParams" label-width="100"
                  label-placement="left">
            <n-grid :cols="3" x-gap="20" y-gap="10">
              <n-form-item-gi label="合同ID" path="loginNm">
                <n-input clearable placeholder="合同ID"/>
              </n-form-item-gi>
              <n-form-item-gi label="外部合同编号" path="userNm">
                <n-input clearable placeholder="外部合同编号"/>
              </n-form-item-gi>
              <n-form-item-gi label="项目名称">
                <n-input clearable placeholder="项目名称"/>
              </n-form-item-gi>
              <n-form-item-gi label="发起部门名称">
                <n-select filterable clearable placeholder="发起部门名称" :options=thirdDep @update:value="handleUpdateSection"/>
              </n-form-item-gi>
              <n-form-item-gi label="所属中心名称">
                <n-select filterable clearable placeholder="所属中心名称" :options=section />
              </n-form-item-gi>
              <n-form-item-gi label="产品大类" path="password">
                <n-select placeholder="产品大类" clearable :options=dict7020  @update:value="handleUpdateValue" />
              </n-form-item-gi>
              <n-form-item-gi label="产品子类" path="password">
                <n-select placeholder="产品子类" clearable :options="category"  :fallback-option=false  />
              </n-form-item-gi>
              <n-form-item-gi label="出租人">
                <n-input type="password" show-password-on="mousedown" placeholder="出租人"/>
              </n-form-item-gi>
              <n-form-item-gi label="主办客户经理" path="userEmail">
                <n-auto-complete :input-props="{autocomplete:'disabled'}" placeholder="主办客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="协办客户经理" path="userMobile">
                <n-input placeholder="协办客户经理" clearable/>
              </n-form-item-gi>
              <n-form-item-gi label="合同管理岗">
                <n-select placeholder="合同管理岗"/>
              </n-form-item-gi>
              <n-form-item-gi label="资产技术管理岗">
                <n-select placeholder="资产技术管理岗"/>
              </n-form-item-gi>
              <n-form-item-gi label="客户经理">
                <n-select placeholder="客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="客户经理">
                <n-select placeholder="客户经理"/>
              </n-form-item-gi>
              <n-form-item-gi label="出租人是否境外">
                <n-select placeholder="出租人是否境外"/>
              </n-form-item-gi>
            </n-grid>
          </n-form>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="承租人">
          Hey Jude
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="租赁物信息">
          <n-table :bordered="false" :single-line="false">
            <thead>
            <tr>
              <th>姓名</th>
              <th>性别</th>
              <th>城市</th>
              <th>生日</th>
              <th width="150">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Ah jung</td>
              <td>男</td>
              <td>深圳</td>
              <td>1993-11-09</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>西门飞雪</td>
              <td>男</td>
              <td>广州</td>
              <td>1991-09-11</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>泰坦巨人</td>
              <td>男</td>
              <td>北京</td>
              <td>1990-11-03</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            <tr>
              <td>猎魔人</td>
              <td>女</td>
              <td>上海</td>
              <td>1992-03-11</td>
              <td>
                <n-space>
                  <n-button size="small" type="error">删除</n-button>
                  <n-button size="small" type="info">查看</n-button>
                </n-space>
              </td>
            </tr>
            </tbody>
          </n-table>

          <n-form :rules="rules" ref="formRef" :model="formParams"
                  label-placement="left">
            <n-form-item label="资产描述" path="loginNm">
              <n-input autosize style="min-width: 50%"  clearable placeholder="资产描述"/>
            </n-form-item>
          </n-form>


        </n-tab-pane>
      </n-tabs>
    </n-card>
    <n-card
      :bordered="false"
      title="表格信息"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-table :bordered="false" :single-line="false">
        <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>城市</th>
          <th>生日</th>
          <th width="150">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Ah jung</td>
          <td>男</td>
          <td>深圳</td>
          <td>1993-11-09</td>
          <td>
            <n-space>
              <n-button size="small" type="error">删除</n-button>
              <n-button size="small" type="info">查看</n-button>
            </n-space>
          </td>
        </tr>
        <tr>
          <td>西门飞雪</td>
          <td>男</td>
          <td>广州</td>
          <td>1991-09-11</td>
          <td>
            <n-space>
              <n-button size="small" type="error">删除</n-button>
              <n-button size="small" type="info">查看</n-button>
            </n-space>
          </td>
        </tr>
        <tr>
          <td>泰坦巨人</td>
          <td>男</td>
          <td>北京</td>
          <td>1990-11-03</td>
          <td>
            <n-space>
              <n-button size="small" type="error">删除</n-button>
              <n-button size="small" type="info">查看</n-button>
            </n-space>
          </td>
        </tr>
        <tr>
          <td>猎魔人</td>
          <td>女</td>
          <td>上海</td>
          <td>1992-03-11</td>
          <td>
            <n-space>
              <n-button size="small" type="error">删除</n-button>
              <n-button size="small" type="info">查看</n-button>
            </n-space>
          </td>
        </tr>
        </tbody>
      </n-table>
    </n-card>



    <n-card class="page-wrapper-footer">
      <n-space justify="end">
        <n-button>暂存并关闭</n-button>
        <n-button type="info">提交</n-button>
      </n-space>

    </n-card>
  </div>
</template>

<script lang="ts" setup>

import {
  computed,
  CSSProperties, getCurrentInstance, h, nextTick, reactive, ref, toRef, toRefs, unref, VNodeChild
} from 'vue';
import {SelectOption} from "naive-ui";
import {getCategory, getDep, getOffByOfcPrtId, getThirdDep} from "@/utils/dict";
import { DollarCircleOutlined } from '@vicons/antd';



const {proxy} = getCurrentInstance();
const {dict7020} = proxy.$useDict("7020");
const thirdDep = getThirdDep();
let category=ref()
// console.log(category)
function  handleUpdateValue (value: string, option: SelectOption) {
  // message.info('value: ' + JSON.stringify(value))
   getCategory(value).then(va=>{
    category.value=va
  });
}
let section=ref()

function  handleUpdateSection(value: string, option: SelectOption) {
  // message.info('value: ' + JSON.stringify(value))
  getOffByOfcPrtId(value).then(va=>{
    section.value=va
  });
}

</script>

<style lang="less" scoped>
.page-wrapper-footer {
  position: fixed;
  right: 0;
  bottom: 0;
  //z-index: 800;
}
</style>
