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
                    <img class="icon-img" src="../../public/icon/home.svg" alt="home"> 
                    <router-link class="icon-word" :to="'/'">主页</router-link>
                </span>
                <span class="item-banner">
                    <img class="icon-img" src="../../public/icon/home.svg" alt="home"> 
                    <span class="icon-word">主页</span>
                </span>
                <span class="item-banner">
                    <img class="icon-img" src="../../public/icon/home.svg" alt="home"> 
                    <span class="icon-word">主页</span>
                </span>
                <span class="item-banner">
                    <img class="icon-img" src="../../public/icon/home.svg" alt="home"> 
                    <span class="icon-word">主页</span>
                </span>
                <span class="item-banner">
                    <img class="icon-img" src="../../public/icon/home.svg" alt="home"> 
                    <span class="icon-word">主页</span>
                </span>
            </div>
		</div>
		<div class="content-body" ref="content-body" > 
			<h1>先说第一个人。</h1>
　　他叫张朝南，乡村教师，朴实敦厚，典型的山里汉子。他有太多的事迹可以让那一方人永远记住他，为了二十几个学生能顺利上学读书，他变卖了所有的家当，住在学校里，苦苦地支撑着几个村唯一的小学。作为一个极贫困偏远山区的民办教师，他的工资不仅少得可怜，而且被长年拖欠着，他甚至连家都没成。每年涨山洪的季节，他都要亲自去接送各村的学生，在危险地段，他更是背着学生趟过河水。他的事迹上过报纸，可除了得到一点虚名外，对于他，对于他的学校，没有带来丝毫的改变。

　　直到暴发那场最大的泥石流。那一次，张朝南在生死边缘走了无数次，救下了二十一名学生，却终有一个孩子被泥石流吞噬了生命。他自责自怨，无法面对那如花的生命在面前殒落。他觉得对不起教师这个称号，他连一个孩子稚嫩的生命都保护不了。那次灾难之后，他便放弃了教师的职业，成了无数普通山里人的一员。

　　再讲讲第二个人。

　　此人叫凌厉。人如其名，他在那个圈子里绝对是人人谈之色变的人物。他是一个保镖，花高价雇他的人极其放心。他的身手，十个经过专业训练的大汉也不是对手，他冷酷无情，毫不心慈手软。在一场地下商业纷争中，他和雇主面对几十个人，在谈崩了的情况下，他能将雇主安然带回，身后是放倒了一地的打手。这一事件，已成了保镖界的传奇与神话。

　　像凌厉这样的人，这样的人生，注定是充满着传奇和神话的。虽然他也曾有过太多次生死悬于一线的时刻，可他却把这些当成了一种刺激，那几年之中他到底当保镖赚到多少钱，没人有计算得清。不过再美的神话也有落幕的时候，他终因遇人不淑，在拼死保护一个大毒贩时，被警方生擒。神话终结之处，是萧萧的铁窗生涯。

　　还剩下最后一个人。

　　这是一个地位尊崇的企业家，叫封平，年近半百开始创业，在短短几年内将一个小门面发展成大集团公司，让许多业内人士和记者惊为天人。是的，在当今竞争如此激烈残酷的现实之中，他能在几年之中迅速崛起，非是天才不能如此。年过六旬的封平事业如日中天，不过他却很低调，丝毫没有大富豪的派头和霸气。令人感到惊奇的是，他竟然是单身，不知是丧失了亲人还是终身未娶。只是听人说在他的办公桌上，摆着一张小女孩的照片，这也让人们凭添了许多猜想。

　　然而，更令人难以相信的是，封平一夜之间出卖了集团中自己所有的股份，甚至，那些天文数字的财产他全都捐了出去。这种做法，在国内是尽够惊世骇俗的了。有人说，他孤身一人，挣那么多钱也没人分享，自然捐了。可不管怎样，封平做到了，而且一下子消失在人们的视线之中，连那些为挖新闻无孔不入的记者也寻不到他的踪迹，就像他从未曾出现过辉煌过。

　　张朝南，凌厉，封平，三个人，三种人生，仿佛来自三个不同的时空，他们却震撼了太多的人。我是在一个青年教育中心听到关于这三个人的事，当时，一个老者正在给台下数百名问题青年讲课，讲的就是这三个人。那些问题青年，都是游走于法律边缘的人，太多的人因为这一堂课而悬崖勒马。因为，每个人曾经的梦都是纤尘不染的吧。

　　现在，接着把这三个人的故事讲完。

　　张朝南不当教师以后，却依然惦着山里的孩子，为他们的教育问题困扰。最后，他决定去城里打工，想多挣些钱以改变山里的教育现状。可是进城不久，他便发现了挣钱的艰难，而朴实的他也因钱的诱惑而慢慢偏离生命的正轨，开始为了快速挣钱而拼命。于是，保镖凌厉出现了。变成凌厉之后，他的钱挣得越来越多，每一次想收手时，都想着再干一次，终于身陷囹圄。十年刑满后，他出狱了，由于给太多的大老板当过贴身保镖，经历的商场事件也无人能及，他开始了自己的商场生涯，几年之后，企业家封平横空出世。他这次及时身退，这些年嫌的钱被他捐出建了多少所希望小学，只有他自己知道。如今的他，正在一个遥远的山区，在一个崭新的希望小学里，做着迟缓的敲钟人。在他住处的桌子上，仍然摆着那个小女孩的照片，那女孩，就是在那场泥石流中逝去的学生。

　　不忘初衷，及时悔过，便永远不晚。也许，更多的时候，人生走出的是一条曲线，终点又回到起点，生命才是最圆满的吧。
<h1>越爱越胆小</h1>
妻子怀胎十月，终于到了预产期。为了安全也为了方便，我让妻子住进了医院。可是，一个星期过去了，妻子始终没有临产的迹象。医生说预产期已过了7天，不能再等了，建议马上剖腹产。

越爱越胆小　　一大早，我就被医生叫去进行术前谈话。医生把一张打印好的手术风险单递给我，严肃地向我讲述着手术中可能出现的一切问题。看着单子上密密麻麻的说明，我的手心里早已冒出一层细汗。

　　见我迟迟不敢签字，医生笑着说：“这些问题只是有可能发生的，我们要提前告知家属。你也不要过于担心，一旦出现问题我们会全力施救。”本来是句宽慰的话，我听后却更加惴惴不安了。这时，站在一旁的表弟打趣道：“哥，看你平时胆子挺大的，现在怎么变得这样胆小了？”

　　是啊，在家里，我的胆大是出了名的。就拿5年前的那场车祸来说吧，当时我的头部严重撞伤，缝了20多针，医生还说极易出现脑震荡。当时，面对已经哭成泪人的母亲，我把手一挥，豪气冲天地说了句：“怕啥？没事！”旁边的病友也不停地安慰母亲，说医生只是往最坏里说，应该没有什么问题，不必担心。可面对众人的劝慰，母亲还是吓得两腿发软。那时候，我还在心里嘀咕：母亲一向大大咧咧的，没为什么事情掉过眼泪，怎么此时如此胆小？

　　直到现在我才明白，原来，人的胆量与爱是成反比的。不管一个人的胆量有多大，在自己所爱的人遭受磨难时，他一定是谨小慎微，甚至战战兢兢的。小时候我们之所以胆大包天，是因为父母用爱为自己撑起了一片天空，我们因为安全才肆无忌惮；长大后我们之所以处处小心，是因为自己要为所爱的人撑起一片天空，我们因为责任才谨小慎微。

　　在自己不幸受伤受挫时，请不要再埋怨他的胆量变小了吧！因为，那时胆子越小的人，才是和你的心贴得越近的人啊
<h1>一期一会</h1>
爱情是无疑美好的， 对我们每一个身处大学这个小社会的学生来说 ，常年在外，身边找不到一个熟悉的人，更找不到一个真正能够说心里话的人，这的确是一件非常痛苦的事儿 。况且与此同时，他们的亲人，还在耳边不停的告诫他们，社会是多么的复杂， 于是这样，他们更加愿意生活于自己的世界里，而不愿，去走进身边人的世界，也不愿让别人走进自己的世界。

　　在他们最伤心难过的时候，有这么一个人，突然闯进了他们的世界，想让他成为她的一切，想做她的影子，她的骑士，她的王子。

　　每天晚上睡觉前的一个晚安，每天早上醒来的一个早安，久而久之，他也就慢慢养成了一个习惯：晚上睡觉前一定会情不自禁的给她发一个晚安的祝福，来表达心中满满的爱，每天早上醒来睁开的第一眼，也总会看一下放在他枕头边的手机，是否屏幕上显示特别关心对面的那个她送来的一个“早安”同时也给她发一个“早安”，对她新一天的满满祝福。日复一日，时间久了，她就成为了他的全世界，他从心里感觉到：她就是我的另一半。也许，这就是爱情的力量。她的出现，让他感觉到自己的生活又重新焕发了新的生机，他不停的改变自己，不再含蓄，不再害怕，不再莽撞，做任何事都变得小心翼翼，想让自己变得更加的美好，把自己完美的一面展现在她的面前。

　　 爱情，谁都不清楚。它会在什么时候来到你的身边。

　　这么多年来我一直在想：什么是真正的爱情？我曾尝试着去问身边的每一个人，在他们的思想观念里，爱情是什么？

　　有的人回答我说：爱情，就是两个人在一起，相互的依赖彼此。相互尊重，相互理解。

　　有的人回答我说：爱情是能让人觉得开心。在享受爱情的同时，不会有负担，更不会让人感觉到难过。它是一种精神的享受。

　　还有的人告诉我：爱情这东西，离我很远，我都还没有想过这个问题。（每当我听到这样的回答，我也总是笑而不语：难道它真的离你很远？只是缘分还没有到来罢了。）

　　大多数人对爱情这样定义：男女双方之间相爱的感情，是人与人之间的强烈的依恋、亲近、向往，以及无私并且无所不尽其心的一种感情。简单的来说，爱情，就是为了彼此，放弃接受别人的好以及再对别人好，全心全意的对待一个人，对她（他）好，为了他(她)而改变自己。

　　爱情，不需要太多的修饰。适当的渲染，会让一切感觉到美好；而过分的修饰，则只会让一切看起来更加虚伪，毕竟不是穿了情侣装就可以装情侣。

　　每一个人对待爱情，都会有不一样的态度，不同的观念。这一切就是我们所说的爱情观。，当然每个人都有自己的看法，也说不上谁对谁错。

　　在我的身边，有这样的一个朋友，她对自己未来另一半的要求是这样的：始于颜值 敬于才华 和于性格 忠于人品 终于慈悲。这是她的爱情观，也是她对待爱情的一个态度。在有的人看来，这是多么难达到的一个要求，甚至会感觉可笑。但是，从她的角度出发，她想着可以找到一个完美理想的另一半。这也是对将来自己的一种负责任的表现。

　　在青春的这段旅行中，我们会遇到无数的人和事，但是，有的人只是在你的这段旅行中路过而已，不是每个人，都适合和你白头到老。有的人，是拿来成长的；有的人，是拿来一起生活的；有的人，是拿来一辈子怀念的，他(她)也许会陪你走一段路，但是一定不要勉强他(她)们陪自己上路。

　　回望过去，小时候陪伴你的人还有多少，小学的同学，初中的朋友，高中的那个她。现如今，我们均已成年，十八岁，这个不知所措的年纪，它也许会让你遇见不知所措的人，但请珍惜与她在一起的美好时光。因为这个时间愿意陪伴你的这个人，或许会成为你一生中最难以忘怀的那个人。他会让你真切的体会到什么是爱。

　　我希望我们都能记住那些在你生命中留下一笔的人，那些在深夜陪你聊天，那些默默陪在你的身边，那些你生病时在你左右，那些你难过时会想起的人。

　　正是因为这些人的陪伴，你才变成了现在的你，好好珍惜身边的每个人，一如你珍惜自己一样，即使你们终究会面对离别。

　　或许每个人的青春里，都会有那么一个人的存在，爱着，但是却永远不能在一起了，可是无论怎样，我们都已经回不去了，再也回不去了，或许这一生我们的缘分就到此结束了。没有后续了吧，曾经那些美好的幻想，都已经被风吹散了，幻想终究只能成幻想了。而曾经那些美好的回忆，也成了永久的回忆，再也回不去……也许有一天你想起他们也只是淡淡笑，当初的撕心裂肺在现在看来也是没什么大不了的。

　　有些事就是这样，无论你有多在乎，但是当你迈出了那一步，可能你们就再也回不去了，无论曾经你们爱得有多深，但是到了这样的地步，就再也回不去了，然后这一段就青春就只能用来怀恋了！

　　有关这些的回忆，我们把它统称为“旧时光”：你也许也是这样。刚见面的时候从没有想到日后她会在你心里占据那么大的位置：在或者就是你们互相喜欢，可就是没能在一起。总是在想要告诉对方的时候发生些什么让你最终没有说出口。这样的狗血戏码好像总是在上演。多少人把青春耗在暗恋里，却没有在一起？不过没关系。因为这就是生活。

　　一期一会，世当珍惜，不问过去，只看未来
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
.item-banner:hover {
    color: red;
    cursor: pointer;
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
    transition: width 1s, height 1s;
    
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