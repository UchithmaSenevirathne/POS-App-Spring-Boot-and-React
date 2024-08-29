import {
    HiOutlineHome,
    HiOutlineViewGrid,
    HiOutlineShoppingBag,
    HiOutlineUser,
    HiOutlineShoppingCart,
    HiOutlineCube
} from 'react-icons/hi'

export const USER_SIDEBAR_LINKS = [
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

export const ADMIN_SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/home',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'items',
        label: 'Items',
        path: '/items',
        icon: <HiOutlineCube />
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

