import Vue from 'vue';
import Router from 'vue-router';
import Terminal from '../views/front/terminalAPK/Terminal.vue';
import APKhistory from '../views/front/terminalAPK/Apkhistory.vue';
import Cppcheck from '../views/front/cppcheck/Cppcheck.vue';
import Hardware from '../views/front/products/Hardware.vue';
import Productlist from '../views/front/products/Productlist.vue';
import Software from '../views/front/products/Software.vue';
import ProductDetail from '../views/front/products/ProductDetail.vue';
import Layout from '../views/front/layout/Layout';
import AdminLayout from '../views/back/layout/Layout';
import Login from '../views/back/login/Login';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Layout,
            redirect: '/productlist',
            children: [
                {
                    path: 'terminal',
                    name: 'terminal',
                    component: Terminal
                },
                {
                    path: 'hardware',
                    name: 'hardware',
                    component: Hardware
                },
                {
                    path: 'productlist',
                    name: 'productlist',
                    component: Productlist
                },
                {
                    path: 'cppcheck',
                    name: 'cppcheck',
                    component: Cppcheck
                },
                {
                    path: 'software',
                    name: 'software',
                    component: Software
                },
                {
                    path: 'apkhistory',
                    name: 'apkhistory',
                    component: APKhistory
                },
                {
                    path: 'ProductDetail',
                    name: 'ProductDetail',
                    component: ProductDetail
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/back',
            name: 'back',
            component: AdminLayout,
            redirect: '/back/backhome',
            children: [
                {
                    path: 'backhome',
                    name: 'backhome',
                    component: () => import('../views/back/backview/BackHome')
                },
                {
                    path: 'binreleasehistory',
                    name: 'binreleasehistory',
                    component: () => import('../views/back/binreleasehistory/Binreleasehistory')
                },
                {
                    path: 'binreleasehistoryadd',
                    name: 'binreleasehistoryadd',
                    component: () => import('../views/back/binreleasehistory/BinreleasehistoryAdd')
                },
                {
                    path: 'binreleasehistoryupdate',
                    name: 'binreleasehistoryupdate',
                    component: () => import('../views/back/binreleasehistory/Binreleasehistoryupdate')
                },
                {
                    path: 'hardwareinfordisplay',
                    name: 'hardwareinfordisplay',
                    component: () => import('../views/back/hardwareinfordisplay/Hardwareinfordisplay')
                },
                {
                    path: 'hardwareinfordisplayadd',
                    name: 'hardwareinfordisplayadd',
                    component: () => import('../views/back/hardwareinfordisplay/HardwareinfordisplayAdd')
                },
                {
                    path: 'hardwareinforperipheralinterface',
                    name: 'hardwareinforperipheralinterface',
                    component: () => import('../views/back/hardwareinforperipheralinterface/Hardwareinforperipheralinterface')
                },
                {
                    path: 'hardwareinforperipheralinterfaceadd',
                    name: 'hardwareinforperipheralinterfaceadd',
                    component: () => import('../views/back/hardwareinforperipheralinterface/HardwareinforperipheralinterfaceAdd')
                },
                {
                    path: 'hardwareinfordriver',
                    name: 'hardwareinfordriver',
                    component: () => import('../views/back/hardwareinfordriver/Hardwareinfordriver')
                },
                {
                    path: 'hardwareinfordriveradd',
                    name: 'hardwareinfordriveradd',
                    component: () => import('../views/back/hardwareinfordriver/HardwareinfordriverAdd')
                },
                {
                    path: 'hardwareinforsystem',
                    name: 'hardwareinforsystem',
                    component: () => import('../views/back/hardwareinforsystem/Hardwareinforsystem')
                },
                {
                    path: 'hardwareinforsystemadd',
                    name: 'hardwareinforsystemadd',
                    component: () => import('../views/back/hardwareinforsystem/HardwareinforsystemAdd')
                },
                {
                    path: 'productcommon',
                    name: 'productcommon',
                    component: () => import('../views/back/productcommon/Productcommon')
                },
                {
                    path: 'productcommonadd',
                    name: 'productcommonadd',
                    component: () => import('../views/back/productcommon/ProductcommonAdd')
                },
                {
                    path: 'softwareinforcameraassisted',
                    name: 'softwareinforcameraassisted',
                    component: () => import('../views/back/softwareinforcameraassisted/Softwareinforcameraassisted')
                },
                {
                    path: 'softwareinforcameraassistedadd',
                    name: 'softwareinforcameraassistedadd',
                    component: () => import('../views/back/softwareinforcameraassisted/SoftwareinforcameraassistedAdd')
                },
                {
                    path: 'softwareinfordisplay',
                    name: 'softwareinfordisplay',
                    component: () => import('../views/back/softwareinfordisplay/Softwareinfordisplay')
                },
                {
                    path: 'softwareinfordisplayadd',
                    name: 'softwareinfordisplayadd',
                    component: () => import('../views/back/softwareinfordisplay/SoftwareinfordisplayAdd')
                },
                {
                    path: 'softwareinforfucosmode',
                    name: 'softwareinforfucosmode',
                    component: () => import('../views/back/softwareinforfucosmode/Softwareinforfucosmode')
                },
                {
                    path: 'softwareinforfucosmodeadd',
                    name: 'softwareinforfucosmodeadd',
                    component: () => import('../views/back/softwareinforfucosmode/SoftwareinforfucosmodeAdd')
                },
                {
                    path: 'softwareinforhdmiattribute',
                    name: 'softwareinforhdmiattribute',
                    component: () => import('../views/back/softwareinforhdmiattribute/Softwareinforhdmiattribute')
                },
                {
                    path: 'softwareinforhdmiattributeadd',
                    name: 'softwareinforhdmiattributeadd',
                    component: () => import('../views/back/softwareinforhdmiattribute/SoftwareinforhdmiattributeAdd')
                },
                {
                    path: 'softwareinforkeystonecorrection',
                    name: 'softwareinforkeystonecorrection',
                    component: () => import('../views/back/softwareinforkeystonecorrection/Softwareinforkeystonecorrection')
                },
                {
                    path: 'softwareinforkeystonecorrection',
                    name: 'softwareinforkeystonecorrection',
                    component: () => import('../views/back/softwareinforkeystonecorrection/SoftwareinforkeystonecorrectionAdd')
                },
                {
                    path: 'softwareinforsoundproperties',
                    name: 'softwareinforsoundproperties',
                    component: () => import('../views/back/softwareinforsoundproperties/Softwareinforsoundproperties')
                },
                {
                    path: 'softwareinforsoundproperties',
                    name: 'softwareinforsoundproperties',
                    component: () => import('../views/back/softwareinforsoundproperties/SoftwareinforsoundpropertiesAdd')
                },
                {
                    path: 'softwareinforstereomode',
                    name: 'softwareinforstereomode',
                    component: () => import('../views/back/softwareinforstereomode/Softwareinforstereomode')
                },
                {
                    path: 'softwareinforstereomodeadd',
                    name: 'softwareinforstereomodeadd',
                    component: () => import('../views/back/softwareinforstereomode/SoftwareinforstereomodeAdd')
                },
                {
                    path: 'softwareinforsystem',
                    name: 'softwareinforsystem',
                    component: () => import('../views/back/softwareinforsystem/Softwareinforsystem')
                },
                {
                    path: 'softwareinforsystemadd',
                    name: 'softwareinforsystemadd',
                    component: () => import('../views/back/softwareinforsystem/SoftwareinforsystemAdd')
                },
                {
                    path: 'softwareinforupgrade',
                    name: 'softwareinforupgrade',
                    component: () => import('../views/back/softwareinforupgrade/Softwareinforupgrade')
                },
                {
                    path: 'softwareinforupgradeadd',
                    name: 'softwareinforupgradeadd',
                    component: () => import('../views/back/softwareinforupgrade/SoftwareinforupgradeAdd')
                },
            ]
        }
    ]
});
