import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import '../assets/styles/element-variables.scss'

import {
  Upload,
  Loading,
  Message,
  Tooltip,
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Icon,
  Card,
  Menu,
  Submenu,
  Scrollbar,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Alert,
  Tag,
  Popover,
  PageHeader,
  Divider,
  Badge,
  Collapse,
  CollapseItem,
  Progress,

  // 表格
  Table,
  TableColumn,
  Pagination,
  // flex
  Row,
  Col,
  // 表单
  Tree,
  Select,
  Option,
  Dialog,
  MessageBox,
  DatePicker,
  TimeSelect,
  Cascader,
  Switch,
  OptionGroup,
  Notification,
  Tabs,
  TabPane
} from 'element-ui'

// 全局配置 size ，弹框zindex
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Upload)
Vue.use(Loading)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Scrollbar)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(PageHeader)
Vue.use(Divider)
Vue.use(Badge)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Progress)

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Tree)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(Cascader)
Vue.use(Switch)
Vue.use(OptionGroup)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
