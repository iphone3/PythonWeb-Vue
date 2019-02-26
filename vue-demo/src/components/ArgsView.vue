<template>
	<div class="argsview">
		<!-- 父组件 传递参数给 子组件 -->
		<ChildModule1 :name='name' :age='age'></ChildModule1>
		
		<!-- 子组件 传递参数给 父组件 -->
		<ChildModule2 v-on:child-tell-me='getMsg'></ChildModule2>
	</div>
</template>

<script>
	import ChildModule1 from './ChildModule1.vue'
	import ChildModule2 from './ChildModule2.vue'

	export default {
		components: {
			ChildModule1,
			ChildModule2,
		},
		data: function() {
			return {
				name: '阿童木',
				age: '18'
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
</style>
