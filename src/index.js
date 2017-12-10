import createApp from './app'

const { app, router, store } = createApp()

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false

    const activated = matched.filter((c, i) => {
      if (prevMatched[i] !== c) diffed = (prevMatched[i] !== c)
      return diffed
    })

    if (activated.length === 0) {
      return next()
    }

    return Promise.all(activated.map((c) => {
      if (c.asyncData) c.asyncData({ store, route: to })
    }))
      .then(() => next())
      .catch(next)
  })

  app.$mount('#app')
})
