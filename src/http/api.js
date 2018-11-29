import axios from 'axios';
import { router } from '@/router';

const ajaxUrl = 'http://127.0.0.1:8989';

const http = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

const ajax = (vm, request) => {
    return new Promise((resolve, reject) => {
        request.headers = { tokenAuthorization: localStorage.token || '' };
        http(request)
            .then(res => {
                switch (res.data.code) {
                case 200:
                    if (res.data.message) {
                        if (res.data.success) {
                            vm && vm.$layer.msg(res.data.message);
                        } else {
                            vm && vm.$layer.msg(res.data.message);
                        }
                    }
                    resolve(res.data);
                    break;
                case 401:
                    localStorage.clear();
                    this.$cookie.set('CMS_TOKEN', '');
                    router.push({
                        name: 'login'
                    });
                    break;
                case 403:
                    router.push({
                        name: 'error_401'
                    });
                    break;
                case 404:
                    router.push({
                        name: 'error_404'
                    });
                    break;
                default:
                    vm && vm.$layer.msg(res.data.message);
                }
            })
            .catch((err) => {
                console.error(err.response);
                vm && vm.$layer.msg('网络请求出错！');
                reject(err);
            });
    });
};

export default ajax;
