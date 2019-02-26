<template>
	<div class="childview2">
		<button @click="sendmsg">
			发送数据
		</button>
	</div>
</template>

<script>
	export default{
		methods:{
			sendmsg: function(){
				this.$emit('child-tell-me', '我是Atom,来自子组件!')
			}
		}
	}
</script>

<style>
</style>
