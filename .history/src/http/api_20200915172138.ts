import service from './index';


export default {
    // 登录
    login({ username, password }: { username: string, password: string }) {
        return service.post(`/accounts/login?username=${username}&passowrd=${password}`)
    },
    // 首页轮播
    getBanners() {
        return service.get(`/scenics/banners`)
    }

}
