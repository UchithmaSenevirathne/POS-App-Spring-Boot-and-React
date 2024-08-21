import {
    HiOutlineHome,
    HiOutlineViewGrid,
    HiOutlineShoppingBag,
    HiOutlineUser,
    HiOutlineShoppingCart
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        icon: <HiOutlineHome />
    },
    {
        key: 'menu',
        label: 'Menu',
        path: '/menu',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingBag />
    },
    {
        key: 'profile',
        label: 'Profile',
        path: '/profile',
        icon: <HiOutlineUser />
    },
    {
        key: 'cart',
        label: 'Cart',
        path: '/cart',
        icon: <HiOutlineShoppingCart />
    }
]

