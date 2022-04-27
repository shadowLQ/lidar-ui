<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="高级表单">
        当一次性提交大量数据时，可使用高级表单，根据自身情况选择是否使用 BasicForm 组件，以下布局支持自适应
      </n-card>
    </div>
    <n-card
      :bordered="false"
      title="预约信息"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"

    >
      <n-form :rules="rules" ref="formRef" :model="formParams" label-width="80"
              label-placement="left">
        <n-grid :cols="3" x-gap="20" y-gap="10">
          <n-form-item-gi label="登录名" path="loginNm">
            <n-input clearable  placeholder="请输入登录名" />
          </n-form-item-gi>
          <n-form-item-gi label="用户名" path="userNm">
            <n-input clearable placeholder="请输入用户名" />
          </n-form-item-gi>
          <n-form-item-gi label="归属公司">
            <n-select  filterable clearable placeholder="归属公司" :render-label="renderLabel"  />
          </n-form-item-gi>
          <n-form-item-gi label="归属部门">
            <n-select  filterable clearable placeholder="归属部门" />
          </n-form-item-gi>
          <n-form-item-gi label="工号">
            <n-input type="text" placeholder="工号"/>
          </n-form-item-gi>
          <n-form-item-gi  label="密码" path="password">
            <n-input type="password" show-password-on="mousedown" placeholder="密码"/>
          </n-form-item-gi>
          <n-form-item-gi  label="确认密码">
            <n-input type="password" show-password-on="mousedown" placeholder="确认密码"/>
          </n-form-item-gi>
          <n-form-item-gi label="邮箱" path="userEmail">
            <n-auto-complete :input-props="{autocomplete:'disabled'}" placeholder="邮箱"/>
          </n-form-item-gi>
          <n-form-item-gi label="手机号" path="userMobile">
            <!--                <n-input-number :show-button="false" placeholder="手机号" clearable max="99999999999"/>-->
            <n-input placeholder="手机号"  clearable/>
          </n-form-item-gi>
          <n-form-item-gi label="用户类型">
            <n-select
              placeholder="用户类型"
            />
          </n-form-item-gi>
          <n-form-item-gi>
          </n-form-item-gi>
          <n-form-item-gi label="状态" path="name">
            <n-switch  checked-value="1" unchecked-value="0"   size="large" :rail-style="railStyle" :default-value="true">
              <template #checked>
                启用
              </template>
              <template #unchecked>
                禁用
              </template>
            </n-switch>
          </n-form-item-gi>
        </n-grid>
      </n-form>
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
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
