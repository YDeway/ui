<template>
    <div class="main-container" ref="main-container" @scroll="scroll">
		<div class="side-left">
			<div class="item-introduce">
                <!-- <div class="avatar"> -->
                    <el-avatar :size="80" @error="errorHandler">
                        <img src="../../public/img/catandmouse.jpg" alt="avatar">
                    </el-avatar>
                <!-- </div> -->
            </div>
		</div>
		<div class="header">
            <div class="banner">
                <span class="header-home item-banner">
                    <router-link class="icon-word" :to="'/'">
						<img class="icon-img" src="../../public/icon/home.svg" alt="home"> 主页
					</router-link>
                </span>
                <span class="item-banner">
                    <router-link class="icon-word" :to="'/'">
						<img class="icon-img" src="../../public/icon/home.svg" alt="home"> 主页
					</router-link>
                </span>
                <span class="item-banner">
                     <router-link class="icon-word" :to="'/'">
						<img class="icon-img" src="../../public/icon/home.svg" alt="home"> 主页
					</router-link>
                </span>
                <span class="item-banner">
                     <router-link class="icon-word" :to="'/'">
						<img class="icon-img" src="../../public/icon/home.svg" alt="home"> 主页
					</router-link>
                </span>
                <span class="item-banner">
                     <router-link class="icon-word" :to="'/'">
						<img class="icon-img" src="../../public/icon/home.svg" alt="home"> 主页
					</router-link>
                </span>
            </div>
		</div>
		<div class="content-body" ref="content-body" > 
	
            <a href="https://github.com/YDeway/ui" class="icon-github icon" title="github仓库" target="_blank"/>
		    <a href="https://beian.miit.gov.cn/" class="beian" title="备案信息" target="_blank">蜀ICP备19007401号-1</a>
		</div>
		<div class="side-right">
			side-right
		</div>
		
		<li class="back-top" @click="toTop" v-show="top"/>
        <router-link class="secret-trigger" :to="'/login'" title="登录"></router-link>

        <!-- <div class="secret-content">
        </div> -->
    </div>
</template>

<script>
export default {
	data() {
		return {
            top: false,
            // avatar: '../../public/img/catandmouse.jpg'
		}
	},
	methods: {
		toTop,
        scroll,
        errorHandler
	},
	mounted() {
	
	}

}

function errorHandler(event) {

}

function toTop(event) {
	let top = this.$refs['main-container'].scrollTop;

	const interval = 5;
	const times = 50;
	const gap = top / 50;

	for (let i = 0; i <times; i++) {
		setTimeout(() => {
			top = top - gap;
			this.$refs['main-container'].scrollTo(0, top);
		}, interval * i);
	}	
}

function scroll(event) {
	if(this.$refs['main-container'].scrollTop - screen.height > 0) {
		this.top = true;
	} 
	else {
		this.top = false;
	}
}

</script>

<style lang="less" scoped>

.main-container {
    width: 100%;
    height: 100%;
    // background-image: url(../../public/img/c.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	overflow: auto;
	min-width: 1000px;
}

.header{
	position: fixed;
	top: 0px;
	right: 0px;
	left: 0px;
	// width: 100%;
	height: 46px;
    background-color: rgba(233, 215, 248, 0.6);
    // .header-first{
    //     // background-color: royalblue;
    //     display: inline-block;
    //     margin: 10px;
    // }
}

.banner {
    width: 500px;
    // height: 50px;
    display: block;
    // border: 1px red solid;
    text-align: center;
    margin: auto;
}

.item-banner:first-child{
    margin-left: 0px;
}

.item-banner {
    display: block;
    float: left;
    width: 80px;
    margin-left: 20px;
    margin-top: 5px;
    line-height: 23px;
    height: 23px;
    border: 1px red solid;
    // text-align: center;
}

.icon-img{
    margin-top: 2px;
    float: left;
    // padding-left: 16px;
}

.icon-word {
    margin-left: 3px;
    text-decoration: none;
    float: left;
}

.icon-word:link {
    color: black;
    cursor: pointer;
}

.icon-word:visited {
    color: black;
    cursor: pointer;
}

.icon-word:hover {
    color: red;
    cursor: pointer;
}

.side-left{
	position: fixed;
	top: 46px;
	left: 0px;
	bottom: 0px;	
    width: 20%;
	// background-color: rgba(240, 14, 14, 0.3);

    .item-introduce{
        height: 200px;
        width: 70%;
        margin: 30px auto;
        border-radius: 5px;
        min-width: 200px;
        background-color: rgba(233, 24, 153, 0.8);
        // align-content: center;
        text-align: center;
        // background-image: url(../../public/img/catandmouse.jpg);
        .el-avatar{
            margin-top: 18px;
        }
    }

}
.content-body{
	width: 55%;
	margin-top: 46px;
	margin-left: 20%;
	min-width: 500px;
	min-height: 100%;
	background-color: rgba(237, 255, 189, 0.3);
}
.main-container::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	// background-color: white; 
}

.main-container::-webkit-scrollbar-thumb {
	background-color: rgba(172, 233, 248, 0.8); 
	border-radius: 5px;
	width: 6px;
	height: 6px;
}

.side-right{
	position: fixed;
	top: 46px;
	right: 5px;
	bottom: 0px;	
    width: 20%;
	// background-color: rgba(228, 17, 17, 0.3);
}

.beian {
    text-decoration: none;
    color: rgb(202, 197, 197);
    position: absolute;
	font-size: 10px;
	left: 43.9%;
    bottom: 1%;
}

.icon {
    bottom: 1.1%;
    left: 42.7%;
    position: absolute;

}

.icon:hover {
    width: 18px;
    height: 18px;
    left: 42.5%;
    content: url(../../public/icon/GitHub6.svg);
}

.back-top {
	position: fixed;
	right: 30px;
	bottom: 30px;
	content: url(../../public/icon/top.svg);
}

.back-top:hover{
	cursor: pointer;
}

.secret-trigger{
    position: fixed;
    width: 20px;
    height: 20px;
    bottom: 0px;
    left: 0px;
    cursor: pointer;
    // color: transparent;
    transition: width 0.5s, height 0.5s;
    
}

.secret-trigger:hover{
    width: 50px;
    visibility: visible;
    height: 50px; 
    content: url(../../public/icon/login.svg);
}

// .secret-trigger:focus
// .secret-trigger:bl

</style>