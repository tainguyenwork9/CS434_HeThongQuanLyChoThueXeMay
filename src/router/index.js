import { createRouter, createWebHistory } from "vue-router";

// Guests / Customers components
import LandingPage from '../components/KhachVangLai/LandingPage.vue';
import DanhSachXe from '../components/KhachVangLai/DanhSachXe.vue';
import ChiTietXe from '../components/KhachVangLai/ChiTietXe.vue';
import Login from '../components/KhachVangLai/Login.vue';
import Registration from '../components/KhachVangLai/Registration.vue';
import Forbidden403 from '../components/KhachVangLai/Forbidden403.vue';
import Error404 from '../components/KhachVangLai/Error404.vue';

import Profile from '../components/KhachHang/Profile.vue';
import DoiMatKhau from '../components/KhachHang/DoiMatKhau.vue';
import LichSuThuXe from '../components/KhachHang/LichSuThuXe.vue';
import DatThuXe from '../components/KhachHang/DatThuXe.vue';
import PopupDanhGia from '../components/KhachHang/PopupDanhGia.vue';

// Admin components
import Dashboard from '../components/Admin/Dashboard.vue';
import QuanLyDanhMuc from '../components/Admin/QuanLyDanhMuc.vue';
import ThemDanhMuc from '../components/Admin/ThemDanhMuc.vue';
import SuaDanhMuc from '../components/Admin/SuaDanhMuc.vue';
import QuanLyKhachHang from '../components/Admin/QuanLyKhachHang.vue';
import QuanLyDonThue from '../components/Admin/QuanLyDonThue.vue';
import QuanLyDanhGia from '../components/Admin/QuanLyDanhGia.vue';
import QuanLyXe from '../components/Admin/QuanLyXe.vue';
import ThemXeMoi from '../components/Admin/ThemXeMoi.vue';
import GiaoXe from '../components/Admin/GiaoXe.vue';
import NhanXe from '../components/Admin/NhanXe.vue';
import ChiTietDonThue from '../components/Admin/ChiTietDonThue.vue';

const routes = [
    // --- Khách Vãng Lai & Khách Hàng (Default layout) ---
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
        meta: { layout: 'default' }
    },
    {
        path: '/danh-sach-xe',
        name: 'DanhSachXe',
        component: DanhSachXe,
        meta: { layout: 'default' }
    },
    {
        path: '/chi-tiet-xe',
        name: 'ChiTietXe',
        component: ChiTietXe,
        meta: { layout: 'default' }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { layout: 'default' }
    },
    {
        path: '/register',
        name: 'Registration',
        component: Registration,
        meta: { layout: 'default' }
    },
    {
        path: '/403',
        name: 'Forbidden403',
        component: Forbidden403,
        meta: { layout: 'default' }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { layout: 'default' }
    },
    {
        path: '/doi-mat-khau',
        name: 'DoiMatKhau',
        component: DoiMatKhau,
        meta: { layout: 'default' }
    },
    {
        path: '/lich-su-thu-xe',
        name: 'LichSuThuXe',
        component: LichSuThuXe,
        meta: { layout: 'default' }
    },
    {
        path: '/dat-thu-xe',
        name: 'DatThuXe',
        component: DatThuXe,
        meta: { layout: 'default' }
    },
    {
        path: '/danh-gia',
        name: 'PopupDanhGia',
        component: PopupDanhGia,
        meta: { layout: 'default' }
    },

    // --- Admin (Admin layout) ---
    {
        path: '/admin',
        redirect: '/admin/dashboard'
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: Dashboard,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-danh-muc',
        name: 'QuanLyDanhMuc',
        component: QuanLyDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/them-danh-muc',
        name: 'ThemDanhMuc',
        component: ThemDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/sua-danh-muc',
        name: 'SuaDanhMuc',
        component: SuaDanhMuc,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-khach-hang',
        name: 'QuanLyKhachHang',
        component: QuanLyKhachHang,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-don-thue',
        name: 'QuanLyDonThue',
        component: QuanLyDonThue,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-danh-gia',
        name: 'QuanLyDanhGia',
        component: QuanLyDanhGia,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/quan-ly-xe',
        name: 'QuanLyXe',
        component: QuanLyXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/them-xe',
        name: 'ThemXeMoi',
        component: ThemXeMoi,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/giao-xe',
        name: 'GiaoXe',
        component: GiaoXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/nhan-xe',
        name: 'NhanXe',
        component: NhanXe,
        meta: { layout: 'admin' }
    },
    {
        path: '/admin/chi-tiet-don-thue',
        name: 'ChiTietDonThue',
        component: ChiTietDonThue,
        meta: { layout: 'admin' }
    },

    // 404 Fallback route
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: Error404,
        meta: { layout: 'default' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;