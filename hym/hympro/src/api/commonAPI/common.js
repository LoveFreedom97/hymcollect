import request from 'axios'
const baseURL = 'https://douban.uieee.com/'
export function douban(data){
    return request({
        url:baseURL + 'v2/movie/top250',
        method:'get',
        data
    })
}