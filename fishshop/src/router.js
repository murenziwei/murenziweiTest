import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/withdraw-deposit-log',
      name: 'withdraw-deposit-log',
      meta: {
        title: '提现记录'
      },
      component: () => import('./views/WithdrawDepositLog.vue')
    },
    {
      path: '/withdraw-deposit',
      name: 'withdraw-deposit',
      meta: {
        title: '提现'
      },
      component: () => import('./views/WithdrawDeposit.vue')
    },
    {
      path: '/sign-in-list',
      name: 'sign-in-list',
      meta: {
        title: '签到列表'
      },
      component: () => import('./views/SignInList.vue')
    },
    {
      path: '/term-set',
      name: 'term-set',
      meta: {
        title: '名次设置'
      },
      component: () => import('./views/TermSet.vue')
    },
    {
      path: '/',
      name: 'my',
      meta: {
        title: '我的'
      },
      component: () => import('./views/My.vue')
    },
    {
      path: '/promotional-activities',
      name: 'promotional-activities',
      meta: {
        title: '发起活动'
      },
      component: () => import('./views/PromotionalActivities.vue')
    },
    {
      path: '/launching-details',
      name: 'launching-details',
      meta: {
        title: '发起比赛'
      },
      component: () => import('./views/LaunchingDetails.vue')
    },
    {
      path: '/apply',
      name: 'apply',

      meta: {
        title: '报名'
      },
      component: () => import('./views/Apply.vue')
    },
    {
      path: '/subscriber-data',
      name: 'subscriber-data',

      meta: {
        title: '用户资料'
      },
      component: () => import('./views/SubscriberData.vue')
    },
    {
      path: '/home',
      name: 'home',

      meta: {
        title: '主页'
      },
      component: () => import('./views/Home.vue')
    },
		{
		  path: '/activity',
		  name: 'activity',
		
		  meta: {
		    title: '活动'
		  },
		  component: () => import('./views/Activity.vue')
		},
    {
      path: '/homedetail',
      name: 'homedetail',

      meta: {
        title: '比赛详情'
      },
      component: () => import('./views/HomeDetail.vue')
    },
    {
      path: '/activitydetail',
      name: 'activitydetail',

      meta: {
        title: '活动详情'
      },
      component: () => import('./views/ActivityDetail.vue')
    },
    {
      path: '/activityapply',
      name: 'activityapply',

      meta: {
        title: '活动申请'
      },
      component: () => import('./views/ActivityApply.vue')
    },
		
		{
		  path: '/activityjoin',
		  name: 'activityjoin',
		
		  meta: {
		    title: '活动报名'
		  },
		  component: () => import('./views/ActivityJoin.vue')
		},
		
		{
		  path: '/gamejoin',
		  name: 'gamejoin',
		
		  meta: {
		    title: '比赛报名'
		  },
		  component: () => import('./views/GameJoin.vue')
		},
		
		{
		  path: '/gameapply',
		  name: 'gameapply',
		
		  meta: {
		    title: '活动申请'
		  },
		  component: () => import('./views/GameApply.vue')
		},
		{
		  path: '/creditpoints',
		  name: 'creditpoints',
		
		  meta: {
		    title: '信用分'
		  },
		  component: () => import('./views/CreditPoints.vue')
		},
  ]
})
