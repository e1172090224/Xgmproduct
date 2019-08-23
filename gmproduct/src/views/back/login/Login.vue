<template>
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <div class="box">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="loginForm">
                    <el-form-item label="账号" prop="account">
                        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleForm)">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        name: 'Login',
        data() {
            const validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    username: [
                        { validator: validateAccount, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(loginData) {
                this.$store.dispatch('Login/normalLogin',loginData)
            }
        }
    };
</script>

<style scoped>
    .box {
        height: 100vh;
        display: flex;
        align-items: center;
    }
    .loginForm{
        width: 100%;
    }
</style>