<template>
  <div>
    <Form :model="form" :rules="rules" ref="loginForm" class="form">
      <FormItem label="用户名" prop="username">
        <Input v-model="form.username" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="form.password" placeholder="请输入密码" type="password"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submitForm('loginForm')">登 录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Message } from 'view-ui-plus';
export default {
  name: 'zhifou-login',
  components: {
    Form,
    FormItem,
    Input,
    Button
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 在这里可以将form表单提交到后端验证用户是否存在，这里暂时用弹出框提示登录成功
          Message.success('登录成功');
        } else {
          Message.error('请填写完整信息');
          return false;
        }
      });
    }
  }
}
</script>
