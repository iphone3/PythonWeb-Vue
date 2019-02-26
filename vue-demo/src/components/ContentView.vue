<template>
	<div class="contentview">
		<hr>
		<h1> Vue基本使用 </h1>
		
		<!-- 数据渲染 v-text、v-html、{{}} -->
		<p> 英文名: {{ name1 }} </p>
		<p> 中文名: <span v-text="name2"></span> </p>
		<p> <span v-html="msg"></span> </p>
		<p> <span v-text="msg"></span> </p>
		
		
		<!-- 控制模块显示隐藏 v-if、v-show -->
		<p>
			水化学元素: <span v-show="isShow" v-html="msg"></span>
		</p>
		<p>
			水化学元素: <span v-if="isShow" v-html="msg"></span>
		</p>
		
		<!-- 渲染循环列表 v-for 数组 -->
		<ul>
			<li v-for="name in names">
				大名: {{name}}
			</li>
		</ul>
		
		<!-- 渲染循环列表 v-for 对象 -->
		<ul>
			<li v-for="(key, value) in objs">
				{{key}}-{{value}}
			</li>
		</ul>
		<ul>
			<li v-for="(value, key, index) in objs">
				{{index}}-{{key}}-{{value}}
			</li>
		</ul>
		
		<!-- 事件绑定 v-on -->
		<p v-on:click="showTitle()"> 小伙子你点我试试看 </p>
		<p @click="showContent()">在点我试试看</p>
		
		
		<!-- 属性绑定 v-bind -->
		<p v-bind:class="color">
			点我可以变换颜色哦，这是真的!
		</p>
		<p :class="color"> 简写方式 </p>
		
		
		<!-- 样式绑定 v-bind -->
		<p :class="{active:isRed}"> 样式绑定 </p>
		
		<!-- 双向数据绑定 v-model -->
		<p>
			<input type="text" v-model="detail">
			<p>{{detail}}</p>
		</p>
		<hr>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				name1: 'Atom',
				name2: '阿童木',
				msg: 'H<sub>2</sub>O',
				isShow: false,
				names: [
					'张三',
					'李四',
					'王五',
					'赵六'
				],
				objs: {
					name: '老王',
					detail: '你有事情我帮忙，我住隔壁我姓王!',
					score: 99,
					age:18
				},
				color: 'blue',
				isRed: true,	// 修改true/false改变对应样式
				detail: 'hello vue'
			}
		},
		methods:{
			showTitle: function(){
				alert('很乖哦!')
			},
			showContent: function(){
				alert('你傻啊?')
			},
		}
	}
</script>

<style>
	.red{
		color: red;
	}
	.blue{
		color: blue;
	}
	
	.active{
		width: 100%;
		height: 30px;
		background: red;
		color: white;
		line-height: 30px;
		text-align: center;
	}
</style>
