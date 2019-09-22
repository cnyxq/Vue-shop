import Vue from 'vue'
import moment from 'moment'

Vue.filter('data-format',function (val,formatStr='YYYY-MM-DD HH:mm:ss') {
  return moment(val).format(formatStr)
})
