export default function ({ app, store }) {
  app.router.beforeEach((to, from, next) => {
    const user = app.$fireAuth.currentUser
    if (!user && to.name === 'dashboard') next('/')

    next()
  })
}
