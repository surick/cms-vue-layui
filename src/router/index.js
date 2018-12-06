import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import Error404 from '@/pages/error/404';
import UpdatePassword from '@/pages/user/password';

import About from '@/pages/about/about';
import Profile from '@/pages/about/profile/profile';
import Culture from '@/pages/about/culture/culture';
import Honors from '@/pages/about/honors/honors';
import Technology from '@/pages/about/technology/technology';

import Contact from '@/pages/contact/contact';

import Product from '@/pages/product/product';
import ProductList from '@/pages/product/list/list';
import ProductAdd from '@/pages/product/list/productAdd';
import ProductParentCategory from '@/pages/product/category/parent';
import ProductChildCategory from '@/pages/product/category/child';
import ParentAdd from '@/pages/product/category/parentAdd';
import ChildAdd from '@/pages/product/category/childAdd';

import Feedback from '@/pages/feedback/feedback';

// import componentRouter from './component';

Vue.use(Router);

export const otherRouter = [
    {
        name: 'login',
        title: '登录',
        path: '/login',
        component: Login
    },

    {
        name: 'password',
        title: '修改密码',
        path: '/password',
        component: UpdatePassword
    },

    {
        name: 'parentAdd',
        title: '父类别添加',
        path: '/product/category/parentAdd',
        component: ParentAdd
    },

    {
        name: 'childAdd',
        title: '子类别添加',
        path: '/product/category/childAdd',
        component: ChildAdd
    },

    {
        name: 'productAdd',
        title: '产品增加',
        path: '/product/list/productAdd',
        component: ProductAdd
    },

    {
        name: '404',
        title: '404-页面不存在',
        path: '/*',
        component: Error404
    }
];

// 左侧slide显示的页面路由配置位置
export const appRouter = [
    {
        name: 'home',
        title: '首页',
        icon: 'layui-icon-home',
        path: '/home',
        component: Home
    },
    {
        name: 'product',
        title: '产品中心',
        icon: 'layui-icon-star',
        path: '/product',
        component: Product,
        children: [
            {
                name: 'category',
                title: '产品类别',
                path: 'category',
                component: Product,
                children: [
                    {
                        name: 'parent',
                        title: '父类别',
                        path: 'parent',
                        component: ProductParentCategory
                    },
                    {
                        name: 'child',
                        title: '子类别',
                        path: 'child',
                        component: ProductChildCategory
                    }
                ]
            },
            {
                name: 'list',
                title: '产品列表',
                path: 'list',
                component: ProductList
            }
        ]
    },
    {
        name: 'feedback',
        title: '反馈中心',
        icon: 'layui-icon-chat',
        path: '/feedback',
        component: Feedback
    },
    {
        name: 'about',
        title: '关于我们',
        icon: 'layui-icon-about',
        path: '/about',
        redirect: '/about/profile',
        component: About,
        children: [
            {
                name: 'profile',
                title: '公司资料',
                path: 'profile',
                component: Profile
            },
            {
                name: 'culture',
                title: '公司文化',
                path: 'culture',
                component: Culture
            },
            {
                name: 'honors',
                title: '公司荣誉',
                path: 'honors',
                component: Honors
            },
            {
                name: 'technology',
                title: '公司技术',
                path: 'technology',
                component: Technology
            }
        ]
    },
    {
        name: 'contact',
        title: '联系我们',
        icon: 'layui-icon-dialogue',
        path: '/contact',
        component: Contact
    }
];

const mainRouter = {
    name: 'main',
    path: '/',
    component: Main,
    redirect: '/home',
    children: appRouter
};

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    mainRouter,
    ...otherRouter
];

export const router = new Router({
    routes: routes
});
