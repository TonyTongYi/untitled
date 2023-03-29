<template>
  <div>
    <Form :model="form" :rules="rules" ref="form" class="form" >
      <FormItem  prop="user" >
        <Input type="text" v-model="form.username" placeholder="请输入用户名" style="width: 300px;margin-top: 10px" prefix="ios-person-outline">
        </Input>
      </FormItem>
      <FormItem  prop="password">
        <Input v-model="form.password" prefix="ios-lock-outline" placeholder="请输入密码" type="password" style="width: 300px">
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submitForm('loginForm')">登 录</Button>
        <Button type="primary" @click="signUp('signUp')" style="margin-left: 10px">注 册</Button>
      </FormItem>
    </Form>
  </div>
</template>

<!--<template>-->
<!--  <div>-->
<!--  <Form ref="formInline" :model="form" :rules="rules" class="form">-->
<!--    <FormItem prop="user">-->
<!--      <Input type="text" v-model="form.user" placeholder="Username">-->
<!--        <template >-->
<!--          <Icon type="ios-person-outline"></Icon>-->
<!--        </template>-->
<!--      </Input>-->
<!--    </FormItem>-->
<!--    <FormItem prop="password">-->
<!--      <Input type="password" v-model="form.password" placeholder="Password">-->
<!--        <template>-->
<!--          <Icon type="ios-lock-outline"></Icon>-->
<!--        </template>-->
<!--      </Input>-->
<!--    </FormItem>-->
<!--    <FormItem>-->
<!--      <Button type="primary" @click="submitForm('loginForm')">Signin</Button>-->
<!--    </FormItem>-->
<!--  </Form>-->
<!--  </div>-->
<!--</template>-->

<script>
import {Form, FormItem, Input, Button} from 'view-ui-plus';
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
        userName: '',
        passWord: ''
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
    submitForm() {
      this.axios.post("http://localhost:70/zhifou/login",this.form)
          .then(function (res) {
            // eslint-disable-next-line no-debugger
            debugger
            res.data

            console.log("return")
          })
    },
    signUp(){

    }
  }
}
</script>
