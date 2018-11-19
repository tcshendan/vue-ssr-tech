import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id', // /app/xxx
    path: '/app',
    // props: (route) => ({ id: route.query.b }),
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]
