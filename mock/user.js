import mockjs from  'mockjs';    //记得安装mockjs
import { delay } from 'roadhog-api-doc';
const proxy= {
// 使用 mockjs 等三方库
'GET /api/users/create': mockjs.mock({
'data|10': [{ name: '@city',email:'@email', 'value|1-100': 50, 'type|0-2': 1 }],
}),
};
export default delay(proxy,2000)