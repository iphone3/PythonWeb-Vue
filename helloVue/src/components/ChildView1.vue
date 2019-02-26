<template>
	<div class="childview">
		<p>
			{{title}}
		</p>
		<p>
			父组件 》》 子组件: {{name}}
		</p>
		<p>
			父组件 》》 子组件: {{age}}
		</p>
	</div>
</template>

<script>
	export default{
		// ES5
// 		data: function(){
// 			return {
// 				
// 			}
// 		}

		// ES6
		data(){
			return {
				title: '子组件'
			}
		},
		
		
		props:[
			'name',
			'age',
		]
	}
</script>

<style>
</style>
