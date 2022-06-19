
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '/admin', component: () => import('pages/IndexPage.vue') },
      { path: '/alunos', component: () => import('pages/Alunos.vue') },
      { path: '/vigilantes', component: () => import('pages/Vigilantes.vue') },
      { path: '/veiculos', component: () => import('pages/Veiculo.vue') },
      { path: '/rotas', component: () => import('pages/Rotas.vue') },
      { path: '/Cadastraralunos', component: () => import('pages/CadastrarAluno.vue') },
    ]
  },
  {
    path: '/encarregado',
    component: () => import('layouts/MainEncarregado.vue'),
    
    children: [
      { path: '/encarregado', component: () => import('pages/IndexPageEncarregado.vue') },
      { path: '/alunoencarregado', component: () => import('pages/AlunoEncarregado.vue') },
    ]
  },
  
  {
    path: '/',
    component: () => import('layouts/MainIndex.vue'),
    
    children: [
      //{ path: '/', component: () => import('pages/IndexPage.vue') }
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

