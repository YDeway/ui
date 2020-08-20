<template>
    <el-container class="main_container">
        <el-header height="100px">Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer height="35px">
                    <a class="icon" href="https://github.com/YDeway/ui" target="_blank">
                        <img  title="github仓库" class="icon"  src="../../public/github.svg"/>
                    </a>
                    <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备19007401号-1</a>
                </el-footer>
            </el-container>
            <el-aside width="200px">Aside</el-aside>
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
.main_container {
    width: 100%;
    height: 100%;
}

.el-header {
    background-color: rgb(228, 21, 21);
}

.el-aside {
    background-color: rgb(116, 55, 55);
}

.el-footer {
    // background-color: rgb(84, 84, 139);
text-align: center;
    a {
        position: absolute;
        bottom: 1.5%;
        text-decoration: none;
        color: rgb(202, 197, 197);
        font-size: 10px;
    }
    .icon {
        width: 12px;
        height: 12px;
        position: absolute;
        bottom: 1.65%;
        left: 48%;
    }
}

</style>