import Vue from 'vue';
import Vuex from 'vuex';
import productlist from './front/productList';
import GMUIversionClassify from './front/GMUIversionClassify';
import TypeClassify from './front/typeClassify';
import HardWare from './front/hardware'
import SoftWare from './front/software'
import Terminal from './front/terminal'
import CppCheck from './front/cppCheck'
import ProductDetail from './front/productdetail'
import Hardwareinfordisplay from './back/hardwareinfordisplay'
import Hardwareinfordriver from './back/hardwareinfordriver'
import Binreleasehistory from './back/binreleasehistory'
import Hardwareinforperipheralinterface from './back/hardwareinforperipheralinterface'
import Hardwareinforsystem from './back/hardwareinforsystem'
import Productcommon from './back/productcommon'
import Softwareinforcameraassisted from './back/softwareinforcameraassisted'
import Softwareinfordisplay from './back/softwareinfordisplay'
import Softwareinforfucosmode from './back/softwareinforfucosmode'
import Softwareinforhdmiattribute from './back/softwareinforhdmiattribute'
import Softwareinforkeystonecorrection from './back/softwareinforkeystonecorrection'
import Softwareinforsoundproperties from './back/softwareinforsoundproperties'
import Softwareinforstereomode from './back/softwareinforstereomode'
import Softwareinforsystem from './back/softwareinforsystem'
import Softwareinforupgrade from './back/softwareinforupgrade'
import Login from './login'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Login:Login,
        Terminal:Terminal,
        HardWare: HardWare,
        SoftWare: SoftWare,
        Productlist: productlist,
        GMUIversionClassify: GMUIversionClassify,
        TypeClassify: TypeClassify,
        CppCheck:CppCheck,
        ProductDetail:ProductDetail,
        Hardwareinfordisplay:Hardwareinfordisplay,
        Hardwareinfordriver:Hardwareinfordriver,
        Binreleasehistory:Binreleasehistory,
        Hardwareinforperipheralinterface:Hardwareinforperipheralinterface,
        Hardwareinforsystem:Hardwareinforsystem,
        Productcommon:Productcommon,
        Softwareinforcameraassisted:Softwareinforcameraassisted,
        Softwareinfordisplay:Softwareinfordisplay,
        Softwareinforfucosmode:Softwareinforfucosmode,
        Softwareinforhdmiattribute:Softwareinforhdmiattribute,
        Softwareinforkeystonecorrection:Softwareinforkeystonecorrection,
        Softwareinforsoundproperties:Softwareinforsoundproperties,
        Softwareinforstereomode:Softwareinforstereomode,
        Softwareinforsystem:Softwareinforsystem,
        Softwareinforupgrade:Softwareinforupgrade
    },
    state: {},
    mutations: {},
    actions: {}
});
