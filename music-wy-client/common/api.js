/* 
 项目的API
 */

import { baseUrl } from './config.js'


// 1. 获取音乐榜单
export function topList(){
	return new Promise(function(reslove,reject){
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				// console.log("toplist-请求成功：",res)
				let result =  res.data.list;
				result.length = 4; //只要前四个数据
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		});
	})
}

//2. 获取指定音乐榜单的歌单详情
export function list(listId){
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET',
	});
}





