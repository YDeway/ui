<template>
    <div class="main-container" ref="main-container" @scroll="scroll">
		<div class="side-left">
			side-left
		</div>
		<div class="header">
			header
		</div>
		<div class="content-body" ref="content-body" > 
				
			
		</div>
		<div class="side-right">
			side-right
		</div>
		<a href="https://github.com/YDeway/ui" class="icon-github icon" title="github仓库" target="_blank"/>
		<a href="https://beian.miit.gov.cn/" class="beian" title="备案信息" target="_blank">蜀ICP备19007401号-1</a>
		<li class="back-top" @click="toTop" v-show="top"/>
    </div>
</template>

<script>
export default {
	data() {
		return {
			top: false
		}
	},
	methods: {
		toTop,
		scroll
	},
	mounted() {
	
	}

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
	min-width: 1000;
}

.header{
	position: fixed;
	top: 0px;
	right: 6px;
	left: 0px;
	// width: 100%;
	height: 55px;
	background-color: rgba(153, 64, 226);
}

.side-left{
	position: fixed;
	top: 55px;
	left: 0px;
	bottom: 0px;	
    width: 20%;
	background-color: rgba(240, 14, 14, 0.3);


}
.content-body{
	width: 55%;
	margin-top: 55px;
	margin-left: 20%;
	min-width: 500px;
	min-height: 88%;
	// background-color: rgb(119, 84, 38);
}
.main-container::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	// background-color: white; 
}

.main-container::-webkit-scrollbar-thumb {
	background-color: rgba(0, 243, 93, 0.8); 
	border-radius: 5px;
	width: 6px;
	height: 6px;
}

.side-right{
	position: fixed;
	top: 55px;
	right: 5px;
	bottom: 0px;	
    width: 20%;
	background-color: rgba(228, 17, 17, 0.3);
}

.beian {
    text-decoration: none;
    color: rgb(202, 197, 197);
    position: absolute;
	font-size: 10px;
	left: 50%;
    bottom: 1%;
}

.icon {
    bottom: 1.1%;
    left: 48.7%;
    position: absolute;

}

.icon:hover {
    width: 18px;
    height: 18px;
    left: 48.5%;
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
</style>