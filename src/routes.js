import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Page = React.lazy(() => import('./views/article/page/Page'))
const Add = React.lazy(() => import('./views/article/add/Add'))
const Preview = React.lazy(() => import('./views/article/preview/Preview'))

const routes = [
  { path: '/', name: 'article', component: Page, exact: true },
  { path: '/article', exact: true, name: 'Article', component: Page },
  { path: '/article/add', name: 'Add Article', component: Add },
  { path: '/article/preview', name: 'Preview Article', component: Preview },
]

export default routes
