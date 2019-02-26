<template>
	<div class="hoemview">
		{{msg}}
	</div>
</template>

<script>
	// 注意: 组件的写法
	export default {
		// 注意: 必须是一个函数
		data: function(){
			return {
				msg: 'hello view!'
			}
		}
	}
</script>

<style>
</style>
