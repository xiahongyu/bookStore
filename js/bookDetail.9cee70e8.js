(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bookDetail"],{"0baa":function(t,a,s){"use strict";s("df04")},c43a:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bookDetail"},[s("headers"),s("contentSearch"),s("contentNav"),s("div",{staticClass:"detailContent"},[s("div",{staticClass:"detailDiv"},[s("header",[s("span",{staticClass:"homeLink"},[t._v("首页  > ")]),s("span",[t._v(t._s(t.bookDetails.title))])]),s("div",{staticClass:"showBody"},[s("div",{staticClass:"showLeft"},[s("div",{staticClass:"leftTop"},[s("img",{attrs:{src:t.bookDetails.imgurl,alt:""}})]),t._m(0)]),s("div",{staticClass:"showRight"},[s("div",{staticClass:"rightTop"},[s("p",{staticClass:"p1"},[t._v(t._s(t.bookDetails.title))]),s("p",[s("span",[t._v("作者")]),s("span",[t._v(t._s(t.bookDetails.author))]),s("span",[t._v("出版社")]),s("span",[t._v(t._s(t.bookDetails.chuban))]),s("span",[t._v("ISBN")]),s("span"),s("span",[t._v("出版时间")]),s("span",[t._v(t._s(t.bookDetails.time))])]),s("p",{staticClass:"p3"},[s("span",[t._v("价格")]),s("span",[t._v("￥"+t._s(t.bookDetails.price))]),t._v(" "),s("span",[t._v("￥"+t._s(t.bookDetails.oldprice))]),s("span",{staticClass:"spanred"},[t._v("开通VIP会员，享受更多折扣")])]),t._m(1),s("div",[s("el-cascader",{attrs:{options:t.options,props:t.props,clearable:""}})],1),s("p"),s("p",[s("span",[t._v("商户")]),s("el-button",{attrs:{size:"medium"}},[t._v("薪传教育（周末不发货）")]),s("span",{staticClass:"spanred"},[t._v("由您选择的商户发货并提供售后服务，如选择不同商户将分别计算运费。")])],1),s("p",[s("span",[t._v("数量")]),s("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},on:{change:t.handleChange},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),s("span",{staticClass:"spanred"},[t._v("线上库存"+t._s(t.total)+"件")])],1)]),s("div",{staticClass:"rightBottom"},[s("el-button",{attrs:{type:"success"},on:{click:t.liji}},[t._v("立即购买")]),s("el-button",{attrs:{type:"primary"},on:{click:t.addCar}},[t._v("加入购物车")]),s("el-button",{attrs:{type:"warning"},on:{click:t.soucang}},[t._v("收"),s("i",{staticClass:"el-icon-sell el-icon--center"}),t._v("藏")]),s("router-link",{attrs:{to:"/shoppingCar"}},[s("el-button",{attrs:{type:"danger"}},[t._v("购物车"),s("i",{staticClass:"el-icon-s-goods"})])],1)],1)])])])]),s("footers")],1)},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"leftBottom"},[s("p",[s("span",{staticStyle:{"margin-right":"20px",color:"deepskyblue"}},[t._v("浏览次数643")]),s("span",[t._v("销售22")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("span",[t._v("配送至")])])}],i=(s("c740"),s("4397")),o=(s("1ae0"),s("df6b")),n=s("870a"),c=s("1638"),r=s("b3ee"),u={components:{headers:o["a"],contentSearch:n["a"],contentNav:c["default"],footers:r["default"]},data:function(){return{bookDetails:[],num:1,total:100,props:{multiple:!0},options:[{value:2,label:"上海",children:[{value:3,label:"普陀"},{value:4,label:"黄埔"},{value:5,label:"徐汇"}]},{value:7,label:"江苏",children:[{value:8,label:"南京"},{value:9,label:"苏州"},{value:10,label:"无锡"}]},{value:12,label:"浙江",children:[{value:13,label:"杭州"},{value:14,label:"宁波"},{value:15,label:"嘉兴"}]},{value:101,label:"湖南",children:[{value:102,label:"长沙"},{value:103,label:"娄底"},{value:104,label:"衡阳"},{value:105,label:"益阳"}]}]}},created:function(){var t=this;this.bookDetails=i["a"].bookInfo[i["a"].bookInfo.findIndex((function(a){return a.id===+t.$route.params.id}))]},methods:{handleChange:function(t){this.total=101-t},liji:function(){var t=this;this.$store.commit("buyNow",this.bookDetails),this.$store.commit("nowShop",!0),setTimeout((function(){t.$router.push("/nowShopping")}),0)},addCar:function(){this.$notify({title:"加入购物车成功",message:"",type:"success"}),this.$store.commit("uploadShop",this.bookDetails),this.$store.commit("updateNowId",!0)},soucang:function(){this.$store.commit("shoucangList",this.bookDetails),this.$message({message:"恭喜你，收藏成功!",type:"success"})}}},p=u,v=(s("0baa"),s("2877")),d=Object(v["a"])(p,e,l,!1,null,"669cb9f6",null);a["default"]=d.exports},df04:function(t,a,s){}}]);
//# sourceMappingURL=bookDetail.9cee70e8.js.map