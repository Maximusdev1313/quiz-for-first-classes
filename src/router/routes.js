
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'newclass', component: () => import('pages/AddingNewClass.vue') },
      
      // { path: 'quiz', component: () => import('pages/Questions.vue') },
      { path: '/class/:id/', component: () => import('pages/Questions.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
