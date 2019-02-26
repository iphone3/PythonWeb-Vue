<template>
	<div id="app">
		<ul class="nav">
			<li>
				<router-link to="/contentview">Vue基本使用</router-link>
			</li>
			<li>
				<router-link to="/optionview">Vue组件重要选项</router-link>
			</li>
			<li>
				<router-link to="/argsview">Vue组件间传递参数</router-link>
			</li>
			<li>
				<router-link to="/axiosdemo">Vue网络请求</router-link>
			</li>
			<li>
				<router-link to="/userview">Vue小项目</router-link>
			</li>
		</ul>
		
		<!-- 渲染组件 -->
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data: function() {
			return {
				title: '哈哈，我来自父组件!',
				age: 18
			};
		},

		methods: {
			getMsg: function(msg) {
				alert(msg)
			},
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	ul,li{
		padding: 0;
		list-style: none;
	}
	
	.nav{
		border: 1px solid gray;
		overflow: hidden;
	}
	.nav a{
		text-decoration: none;
		width: 20%;
		float: left;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-right: 1px solid gray;
		margin-right: -1px;
	}
	
</style>
