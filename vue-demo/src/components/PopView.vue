<template>
	<div class="popview">
		<div class="content">
			<h3>{{title}}</h3>
			<br>

			<table>
				<tr>
					<td>用户名</td>
					<td><input type="text" v-model="selectDir.username" required></td>
				</tr>

				<tr>
					<td>邮箱</td>
					<td><input type="email" v-model="selectDir.email"></td>
				</tr>

				<tr>
					<td>性别</td>
					<td>
						<input type="radio" name="sex" value="男" v-model="selectDir.sex">男
						<input type="radio" name="sex" value="女" v-model="selectDir.sex">女
						<input type="radio" name="sex" value="中性" v-model="selectDir.sex">中性
					</td>
				</tr>

				<tr>
					<td>省份</td>
					<td>
						<select name="" id="" v-model="selectDir.province">
							<option value="北京市">北京市</option>
							<option value="河北省">河北省</option>
							<option value="河南省">河南省</option>
							<option value="重庆市">重庆市</option>
							<option value="广东省">广东省</option>
							<option value="辽宁省">辽宁省</option>
						</select>
					</td>
				</tr>

			</table>

			<br>
			<p>
				<button @click="changData()">保存</button>

				<button @click="cancelOperate()">取消</button>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'selectDir'], // 父组件传值
		data() {
			return {

			};
		},
		methods: {
			changData: function() { // 子组件 》 父组件
				this.$emit('changData', this.selectDir)
			},
			cancelOperate: function() {	// 子组件 》 父组件
				this.$emit('cancelOperate')
			}
		}
	}
</script>

<style>
	.popview {
		width: 100px;
		height: 100px;
		background: red;
	}

	.popview {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 6;
		background: rgba(0, 0, 0, 0.7);
	}

	.popview td:first-child {
		width: 66px;
	}

	.popview .content {
		position: absolute;
		width: 420px;
		min-height: 300px;
		background: #fff;
		left: 50%;
		top: 50%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		padding: 20px;
	}

	tr td:last-child {
		text-align: left;
	}
</style>
