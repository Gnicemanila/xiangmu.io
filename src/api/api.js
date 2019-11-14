import Axios from 'axios'

let BaseUrl = ""; //请求的地址因为我是用node代理测试环境已经配好了
if (process.env.NODE_ENV == 'development') {    
    //开发用的
    BaseUrl = 'https://json.apiopen.top';
}
else if (process.env.NODE_ENV == 'debug') {    
// 调试用的
    BaseUrl = '';
}
else if (process.env.NODE_ENV == 'production') {    
// 线上环境
    BaseUrl = 'https://api.apiopen.top';
}
export default function Api(path,data={},type="get"){
    let url = BaseUrl +path
    return new Promise(function(resolve,reject){
        let promise
        if(type=="get"){
            promise = Axios.get(url)
        }else{
            promise =Axios.post(url,data)
        }
        promise.then((res)=>{
            resolve(res.data)
        }).catch((error)=>{
            reject(error)
        })
    })
}