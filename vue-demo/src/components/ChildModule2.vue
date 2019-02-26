<template>
	<div class="childmodule2">
		<hr>
		<h1> 子组件 传递参数给 父组件 </h1>
		
		<button @click="sendMsg">发送数据</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			sendMsg: function(){
				this.$emit('child-tell-me', '你好啊，我是子组件ChildModule2!')
			}
		}
	}
</script>

<style>

</style>
