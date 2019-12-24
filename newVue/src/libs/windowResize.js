import store from '../store'
import { debounce, delay } from './global'
import { detectZoom } from './tools'
import { Notification } from 'element-ui'

// 收起侧边导航
const foldSidebar = debounce(function() {
  let clientWidth = document.body.clientWidth
  if (clientWidth <= 1350) {
    store.state.app.sidebar = true
  } else {
    store.state.app.sidebar = false
  }
}, 500, false, true)

// 浏览器缩放检测
delay(() => {
  !localStorage.getItem('browser_dpi_non-normal') &&
  detectZoom() > 100 &&
  Notification({
    title: '浏览器缩放提示',
    showClose: true,
    onClick: () => { Notification.closeAll() },
    dangerouslyUseHTMLString: true,
    message: `检测到当前浏览器处于缩放状态，这可能导致系统页面布局出现错乱，请调整缩放比例至100%，按“ctrl + 0”可快速调整。
    <div style="text-align:right;color:#00A2AD;">
      <a onclick="javascript:localStorage.setItem('browser_dpi_non-normal', 1);">不再提示</a>
    </div>`,
    offset: 50,
    duration: 0
  })
}, 3000)

window.addEventListener('resize', () => {
  foldSidebar()
})

