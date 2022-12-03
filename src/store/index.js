import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    topbar:[["首页","驻场服务","远程服务"],["股份投资","人才投资"],["招聘App","登录","注册"]],
    firstdata:[
        {imgurl:require("assets/img/Vue.png"),desc:"Vue项目组"},
        {imgurl:require("assets/img/Reatch.png"),desc:"Reatch项目班"},
        {imgurl:require("assets/img/Flutter.png"),desc:"VFlutter项目班"},
        {imgurl:require("assets/img/小程序.png"),desc:"小程序项目组"},
        {imgurl:require("assets/img/H5.png"),desc:"H5项目组"},
        {imgurl:require("assets/img/Ui.png"),desc:"Ui项目组"},
        {imgurl:require("assets/img/Nodejs.png"),desc:"Nodejs项目组"},
        {imgurl:require("assets/img/Java.png"),desc:"Java项目组"},
    ],
    thirddata:[
        {imgurl:require("assets/img/需求澄清.png"),description:"需求澄清",desc:["需求沟通","分析需求","确认需求"]},
        {imgurl:require("assets/img/制定计划.png"),description:"制定计划",desc:["交付流程规划","交付团队规划","资源渠道准备"]},
        {imgurl:require("assets/img/人才匹配.png"),description:"人才匹配",desc:["项目人员协调","资源池搜索","对接推荐人才"]},
        {imgurl:require("assets/img/交付入职.png"),description:"交付入职",desc:["安排到岗","合同签订","办理手续","入职跟踪"]},
        {imgurl:require("assets/img/项目实施.png"),description:"需求澄清",desc:["技术经理带队驻场","项目进度按日更新","管理‘0’成本"]},
        {imgurl:require("assets/img/后期维护.png"),description:"后期维护",desc:["后期bug修改随时调整","完整代码提供","满意度调查"]},
    ],
    fourdata:[
        {imgurl:require("assets/img/1.png"),description:"专业经理驻场",desc:"技术经理带队驻场，项目进度按日更新，管理“0”成本"},
        {imgurl:require("assets/img/2.png"),description:"极速响应",desc:"深度分析客户需求，快速组建专属交付小组，1天到岗，及时有效满足客户需求。"},
        {imgurl:require("assets/img/3.png"),description:"优质服务",desc:"技术经理1V1服务，项目需求拆分按周统计，技术难点解析，工作节点按日更新，确保员工高效工作。"},
        {imgurl:require("assets/img/4.png"),description:"案例客户",desc:"服务400+家品牌企业，100+家500强企业，获得众多长期战略合作伙伴好评。"},
    ],
    fivedata:[
        {imgurl:require("assets/img/1(1).png")},{imgurl:require("assets/img/2(1).png")},
        {imgurl:require("assets/img/3(1).png")},{imgurl:require("assets/img/4(1).png")},
        {imgurl:require("assets/img/5.png")},{imgurl:require("assets/img/6.png")},
        {imgurl:require("assets/img/7.png")},{imgurl:require("assets/img/8.png")},
        {imgurl:require("assets/img/9.png")},{imgurl:require("assets/img/10.png")}
    ]
}

const store=new Vuex.Store({
    state,
    actions:{

    },
    mutations:{
        
    },
    getters:{
        
    }
})
export default store