<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		
		<HomeView></HomeView>
		
		<!-- 父组件 》》 子组件
			自定义属性
		 -->
		<ChildView1 :name='name' :age='age'></ChildView1>
		
		<!-- 子组件 》》 父组件
			自定义事件
		 -->
		 <ChildView2 v-on:child-tell-me='getmsg'></ChildView2>
		 <p>
			 子组件 》》 父组件: {{msg}}
		 </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// 注意: 导入 ./
import HomeView from './components/HomeView.vue'
import ChildView1 from './components/ChildView1.vue'
import ChildView2 from './components/ChildView2.vue'

export default {
  name: 'app',
  components: {	// 注册组件
    HelloWorld,
		HomeView,	// 注意: (先注册后使用)
		ChildView1,
		ChildView2
  },
	data: function(){
		return {
			name: 'zyz',
			age: 18,
			msg: null
		}
	},
	methods: {
		getmsg:function(msg){
			this.msg = msg
		}
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
</style>
