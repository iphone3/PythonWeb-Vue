<template>
	<div class="userview">
		<p>
			查询操作: <input type="text" placeholder="search" @input="search" list="cars" class="search">
		</p>

		<div class="add">
			<button @click="insertData">新增用户</button>
		</div>
		
		<table>
			<tr>
				<th>id</th>
				<th>用户名</th>
				<th>邮箱</th>
				<th>性别</th>
				<th>省份</th>
				<th>操作</th>
			</tr>
			<tr v-cloak v-for="(item, index) of tempList">
				<td>{{index+1}}</td>
				<td>{{item.username}}</td>
				<td>{{item.email}}</td>
				<td>{{item.sex}}</td>
				<td>{{item.province}}</td>
				<td>
					<a href="javascript:;" @click="updateData(index)">修改</a>
					|
					<a href="javascript:;" @click="deleteData(index)">删除</a>
				</td>
			</tr>
		</table>

		<!-- 弹窗 -->
		<PopView v-show='isactive' :title='title' :selectDir='selectDir' @changData='changData' @cancelOperate='cancelOperate'></PopView>
	</div>
</template>

<script>
	import PopView from './PopView.vue'
	export default {
		components: {
			PopView
		},
		data() {
			return {
				// 原始数据源
				// 包括新增、修改后或已删除后
				list: [{
						username: '张三',
						email: '123@qq.com',
						sex: '男',
						province: '北京市',
					},
					{
						username: '李四',
						email: '456@163.com',
						sex: '女',
						province: '河北省',
					},
				],

				// 需要展示的数据
				tempList: [],

				// 弹窗显示
				isactive: false,

				// 搜索数据
				searchlist: [],
				
				// 标题
				title: '',
				
				// 更新或新增
				selectDir: {},
				
				// 修改更新 下表
				selected: -1
			};
		},
		created: function(){
			this.setTempList(this.list)
		},
		methods: {
			// 将需要展示的数据进行处理
			setTempList: function(arr) {
				this.tempList = JSON.parse(JSON.stringify(arr))
			},
			// 插入数据
			insertData: function(){
				this.isactive = true
				this.title = '添加数据'
				this.selectDir = {}
			},
			// 删除数据
			deleteData: function(index) {
				this.list.splice(index, 1)
				this.setTempList(this.list)
			},
			// 更新数据
			updateData: function(index) {
				this.selected = index; // 修改的位置
				this.selectDir = this.list[index];
				this.isactive = true;
				this.title = '更新数据'
			},
			// 搜索数据
			search: function(e) {
				// 获取输入框的值
				var v = e.target.value;
				self = this;
				self.searchlist = [];
				if (v) {
					var ss = [];

					// 过滤需要的数据
					this.list.forEach(function(item) {
						// 检测用户名
						if (item.username.indexOf(v) > -1) {
							if (self.searchlist.indexOf(item.username) == -1) {
								self.searchlist.push(item.username);
							}
							ss.push(item);
						} else if (item.email.indexOf(v) > -1) {
							// 检测邮箱
							if (self.searchlist.indexOf(item.email) == -1) {
								self.searchlist.push(item.email);
							}
							ss.push(item);
						}
					});
					
					this.setTempList(ss); // 将过滤后的数据给了slist
				} else {
					// 没有搜索内容，则展示全部数据
					this.setTempList(this.list);
				}
			},
			// 子组件 》 父组件
			changData: function(dir){
				this.isactive = false
				
				if(this.selected > -1){	// 更新数据
					// 全局 Vue.set 的别名
					// 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
					this.$set(this.list, this.selected, dir);
                    this.selected = -1;
				} else {	// 添加数据
					this.list.push(dir)
				}
				
				this.setTempList(this.list)
			},
			// 子组件 》 父组件
			cancelOperate: function(){
				this.isactive = false
			}
		}
	}
</script>

<style>
	table {
		border: 1px solid #ccc;
		padding: 0;
		border-collapse: collapse;
		table-layout: fixed;
		margin-top: 10px;
		width: 100%;
	}

	table td,
	table th {
		height: 30px;
		border: 1px solid #ccc;
		background: #fff;
		font-size: 15px;
		padding: 3px 3px 3px 8px;
	}

	table th:first-child {
		width: 30px;
	}

	.userview,
	.st {
		width: 1000px;
		margin: 10px auto 0;
		font-size: 13px;
		font-family: 'Microsoft YaHei'
	}

	.userview .search {
		font-size: 15px;
		padding: 4px;
	}

	.userview .add {
		text-align: left;
	}
</style>
