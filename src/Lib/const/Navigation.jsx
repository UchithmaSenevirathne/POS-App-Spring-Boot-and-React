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
        path: '/home',
        icon: <HiOutlineHome />
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
    }
]

