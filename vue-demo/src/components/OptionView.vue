<template>
	<div class="optionview">
		<hr>
		<h1>{{msg}}</h1>
		
		<p @click="showTitle">
			点击有好礼!
		</p>
		
		<p>
			{{ showAgeStr }}
		</p>
		
		<div class="view">
			<input type="text" v-model="content">
			<p>输入框输入的内容: {{content}}</p>
			<p> 长度: {{computedLength}} </p>
		</div>
		<hr>
	</div>
</template>

<script>
	export default {
		// data数据选项，代表vue对象的数据[data属性就是用来绑定数据到HTML]
		data() { 
			return {
				msg: 'Vue组件重要选项',
				age: 18,
				content: 'hello',
			};
		},
		
		// methods方法选项，代表vue对象的方法
		methods:{
			showTitle: function(){
				alert('hello world!')
			}
		},
		
		// computed计算属性(计算属性，即属性可以是一个方法)
		computed:{
			// 使用和属性一样，但可以根据属性不同，进行动态变化
			showAgeStr: function(){
				// this指向Vue实例
				if(this.age >= 18){
					return '我已经成年了!'
				} else {
					return '别骗我，我还未成年!'
				}
			},
			computedLength: function(){
				return this.content.length
			}
		},
		
		// watch监听选项，设置了对象的监听方法
		watch: {
			content: function(oldVal, newVal){
				console.log('旧值:' + oldVal)
				console.log('新值:' + newVal)
			}
		}
	}
</script>

<style>

</style>
