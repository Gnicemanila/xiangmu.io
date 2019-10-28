import Axios from 'axios'

export default function Api(path,data={},type="get"){
    return new Promise(function(resolve,reject){
        let promise
        if(type=="get"){
            promise = Axios.get(path)
        }else{
            promise =Axios.post(path,data)
        }
        promise.then((res)=>{
            resolve(res.data)
        }).catch((error)=>{
            reject(error)
        })
    })
}