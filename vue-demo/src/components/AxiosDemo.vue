<template>
	<div class="axiosdemove">
		<ul>
			<li v-for="item in tech">
				<a :href="item.link">
					标题: {{item.title}}  
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	// 新闻接口: https://www.apiopen.top/journalismApi
	export default {
		data() {
			return {
				tech: null
			}
		},
		created() {	// 钩子函数,在实例创建完成后被立即调用。
			// 获取数据
			this.$ajax.get('https://www.apiopen.top/journalismApi')
				.then(response => (this.tech = response.data.data.tech) )	// 请求成功, response.data才是返回的数据json
				.catch(err => console.log('错误提示:' + err))		// 请求失败
		},
	}
</script>

<style>
</style>
