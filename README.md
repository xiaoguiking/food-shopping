# food-shopping
小程序

### 小程序

.js 

.wxml  html 组件

.wxss   css

- utils  工具类
- app.json 全局配置
- app.wxss 全局样式
- pages/ 初始化页面
  - car
  - categray
  - home
  - my
- tpl
	- products 模板
			创建模板  tpl/products
			<template name="products">
			
			我是模板
			
			</template>
			
			
			
			
			使用html.wxml
			
			引入
			<import src=“模板路径”  />
			
			<template is = "products" />
			
			
			
			在html.wxcss引入样式
			@import '../tpl/products/products.wxss';
			/* 引入products模板css */
			



data- ：  就是穿得参数

变量    {{name}}

更新： this.setData({name: 12})

width: 750rpx