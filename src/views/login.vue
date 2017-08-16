<template>
    <div class="login">
        <div class="logo">
          <img src="../images/logo.png">
        </div>
        <el-row>
            <el-col :span="10" :offset="7">
                 <div class="theme">范骏的博客管理系统-登录</div> 
                <el-form :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="loginForm.password" type="password"></el-input>
                    </el-form-item>
                    <el-row style="text-align:center">
                        <el-button type="primary" @click="submitForm('loginForm')" style="width:100px">登录</el-button>
                    </el-row>
                </el-form>
            
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName: 'login', //选项卡
            loginForm: {        //表单v-model的值
                username: '',
                password: ''
            },
            rules: { //验证规则
                username: [
                    { required: true, message: '用户名不能少', trigger: 'blur'},
                    { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){ //验证通过

                }else{ 
                    //验证不通过
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="less">
.login{
    padding-top: 100px;
    .logo {
      width: 100%;
      height: 100%;
      text-align: center;
  }

  .theme {
      text-align: center;
      line-height: 60px;
  }

}

</style>