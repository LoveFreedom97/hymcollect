import axios from 'axios'
const baseURL = 'https://douban.uieee.com/'
export function request(params){
        axios.request({
            url: baseURL + params.url,
            method:params.method||'POST',
            header:{
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
            data:params.data||'',
           
        }).then(res=>{
                if(res.data.code!==200){
                    alert(res.data.message)
                    return
                }
        }).catch(err=>{
            alert(err)
        })
}