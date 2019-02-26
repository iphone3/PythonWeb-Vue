<template>
	<div class="childmodule1">
		<hr>
		<h1> 父组件 传递参数给 子组件 </h1>
		
		<p>
			我的名字: {{name}}
		</p>
		<p>
			我的年龄: {{age}}
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		// 写法一
// 		props:{
// 			name: {
// 				type: String
// 			}
// 		}

		// 写法二
		props:[
			'name',
			'age',
		]
	}
</script>

<style>

</style>
