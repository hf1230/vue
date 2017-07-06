/**
 * Created by YZTC on 2017/6/6.
 */
import One from './components/main/One.vue'
import Two from './components/main/Two.vue'
import Three from './components/main/Three.vue'
import Four from './components/main/Four.vue'
import Five from './components/main/Five.vue'
import One01 from './components/main/one/one01.vue'
import Two01 from './components/main/two/two01.vue'
import Three01 from './components/main/three/three01.vue'
import Four01 from './components/main/four/four01.vue'
import Five01 from './components/main/five/five01.vue'

export default [
    {
        path: '/one',
        component: One
    },
    {
        path: '/two',
        component: Two
    },
    {
        path: '/three',
        component: Three
    },
    {
        path: '/four',
        component: Four
    },
    {
        path: '/five',
        component: Five
    },
    {
        path: '*',
        redirect: 'one'
    },
    {
        path:'/one01',
        component:One01
    },
    {
        path:'/two01',
        component:Two01
    },
    {
        path:'/three01',
        component:Three01
    },
    {
        path:'/four01',
        component:Four01
    },
    {
        path:'/five01',
        component:Five01
    },
]