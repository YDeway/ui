<template>
    <el-container class="main-container">
        <el-header height="50px">Header</el-header>
        <el-container>
            <el-aside width="300px" class="aside-left">Aside</el-aside>
            <el-container>
                <el-main class="body-container">Main</el-main>
                <el-footer height="35px">
                    <a href="https://github.com/YDeway/ui" class="icon-github icon" title="github仓库" target="_blank"/>
                    <a href="https://beian.miit.gov.cn/" class="beian" target="_blank">蜀ICP备19007401号-1</a>
                </el-footer>
            </el-container>
            <el-aside width="300px">Aside</el-aside>
        </el-container>
    </el-container>
</template>

<script>
export default {
     meta: {
      title: 'index'
    }
}
</script>

<style lang="less" scoped>
.main-container {
    width: 100%;
    height: 100%;
    // background-image: url(../../public/img/pp.jpeg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.el-header {
    background-color: rgba(233, 234, 234, 0.7);
}
.el-main{
    margin-top: 2%;
    background-color: rgba(255, 255, 255, 0.7);
}

.aside-left{
    // margin-left: 8%;
    // margin-top: 1.35%;
    border: 1px red solid;

}


.el-footer {
    // background-color: rgb(84, 84, 139);
   
    text-align: center;
}

.beian {
    text-decoration: none;
    color: rgb(202, 197, 197);
    position: absolute;
    font-size: 10px;
    bottom: 1%;
}

.icon {
    // line-height: 100px;
    // padding-top: 10px;
    bottom: 1.1%;
    left: 48.7%;
    position: absolute;

}

.icon:hover {
    width: 19px;
    height: 19px;
    left: 48.5%;
}
</style>