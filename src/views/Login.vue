// 浏览器没有Node运行环境
<template>
    <div id="login" :style="bg">  
        <image></image>   
        <el-form class="form" ref="login-form" :rules="rule" :model="user" >
            <el-form-item class="user-item" prop="username" label="用户名">
                <el-input v-model="user.username"  placeholder="用户名" prefix-icon="el-icon-user" clearable></el-input>
            </el-form-item>
             <el-form-item class="user-item" prop="password"  label="密码">
                <el-input v-model="user.password" placeholder="密码" prefix-icon="el-icon-lock" show-password clearable></el-input>
            </el-form-item>
            <el-button type="primary" @click="login" class="btn-login" :loading="aswitch.loginLoading" :disabled="aswitch.loginLoading">登录</el-button>
        </el-form>
    </div>
</template>

<script>

export default {
    
    data() {
        return {
            rule, 
            aswitch,
            user,
            bg: 'background-image: url(img/sss.jpg);',
           
        }
    },
    mounted () {
        // this.$refs['login-form'].validate( e => aswitch.login = !e );
    }
    ,
    methods: {
        login
    },
    created: function() {
        
    }
}


let aswitch = {
    loginLoading: false
};

const  user = {
    username: '',
    password: ''
};

const rule = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' },
        {min: 4, max: 11, message: '长度在 4 到 11 个字符', trigger: 'blur'}],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' },
        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}]
};

function login() {
    this.$refs['login-form'].validate(async e => {
        if(e) {
            aswitch.loginLoading = true;
            const {data: resp} = await this.$http.post('user/login', {userId: this.user.username, password:this.user.password});
            aswitch.loginLoading = false;
            if(resp.code === 200) {
                window.sessionStorage.setItem('token', resp.data.token);
                this.$router.push('/');
            } 
            else {
                this.$message.error( resp.data);
            }
        }
    });
}


</script>

<style lang="less" scoped>

.form {
    width: 400px;
    height: 400px;
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
    border-radius: 10px;
    position: absolute;
    box-shadow: 1px 1px 10px 2px rgb(151, 151, 151);
    left: 61%;
    top: 25%;
}

#login {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
}

.user-item {
    // position: absolute;
    // width: 100%;
    margin-top: 25px;
    padding: 0 50px;
}

.btn-login{
    width: 60%;
    display: block;
    margin: 50px auto;
    opacity: 1;
}
</style>