import Todos from 'components/Todos'
import Tokens from 'components/Tokens'
import Profile from 'components/Profile'
import NotFound from 'components/NotFound'
import Login from 'components/Login'
import DeviceInfo from 'components/DeviceInfo.vue'
import Cordova from 'components/Cordova.vue'
import Notifications from 'components/Notifications'

// import notif from './services/notifications.js'

const routes = [
  { path: '',
    redirect: '/todos'
  },
  { path: '/todos',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/tokens',
    component: Tokens,
    meta: { auth: false }
  },
  { path: '/profile',
    component: Profile,
    meta: { auth: true }
  },
  { path: '/device',
    component: DeviceInfo,
    meta: { auth: true }
  },
  { path: '/login',
    component: Login,
    meta: { auth: false }
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: false }
  },
  { path: '/notifications',
    component: Notifications,
    // props: notif.get(),
    meta: { auth: false }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
