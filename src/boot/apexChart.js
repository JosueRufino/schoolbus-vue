import VueApexCharts from 'vue3-apexcharts'
import { boot } from 'quasar/wrappers'

export default(({app})=>{
    app.use(VueApexCharts)
})