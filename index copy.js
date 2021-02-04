import './src/assets/scss/app.scss'

import router from './src/routes/index'

window.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)