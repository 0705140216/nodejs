// import store from "@/store";
import { schoolType as getSchoolType } from '../filters'
import debounceOrigin from 'lodash/debounce'
import { MessageBox, Message, Notification } from 'element-ui'

// 确认提示组件
export const confirm = (msg = '是否继续？', title = '确认提示', opts = {}) => {
  const options = {
    type: 'warning',
    iconClass: '',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    ...opts
  }
  return MessageBox.confirm(msg, title, options)
}

// 消息提示组件
export const message = (msg, opts) => {
  const options = {
    title: '提示',
    type: 'success',
    message: msg,
    offset: 50,
    duration: 5 * 1000,
    ...opts
  }
  return Message(options)
}

// 通知提示组件
export const notify = (msg, opts) => {
  const options = {
    title: '提示',
    type: 'success',
    message: msg,
    offset: 100,
    duration: 5 * 1000,
    ...opts
  }
  return Notification(options)
}

// 节流
export const debounce = (
  f,
  t = 1000,
  le = true,
  tr = false
) => {
  if (typeof f !== 'function') return
  return debounceOrigin(f, t, { leading: le, trailing: tr })
}

export { default as qs } from 'querystring'

export { default as once } from 'lodash/once' // _.once(func) 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。
export { default as delay } from 'lodash/delay'

export { default as cloneDeep } from 'lodash/cloneDeep'
export { default as isEmpty } from 'lodash/isEmpty' // _.isEmpty(value) 检查 value 是否为一个空对象，集合，映射或者set。
export { default as keys } from 'lodash/keys'
export { default as forIn } from 'lodash/forIn'
export { default as pickBy } from 'lodash/pickBy'

export { default as find } from 'lodash/find'
export { default as each } from 'lodash/forEach'
export { default as every } from 'lodash/every'
export { default as some } from 'lodash/some'
export { default as map } from 'lodash/map'
export { default as sortBy } from 'lodash/sortBy'
export { default as uniq } from 'lodash/uniq'
export { default as sumBy } from 'lodash/sumBy'

export { default as isNumber } from 'lodash/isNumber'
export { default as toNumber } from 'lodash/toNumber'
export { default as random } from 'lodash/random'

export const sex = [{ label: '男', value: '男' }, { label: '女', value: '女' }]
export const yn = [{ label: '是', value: '1' }, { label: '否', value: '0' }]
export const areaLevel = [{ label: '省', value: 1 }, { label: '市', value: 2 }, { label: '区', value: 3 }]

// 机构大类型
export const orgTypeList = [{ value: 10, label: '学校' }, { value: 20, label: '医院' }, { value: 30, label: '政府部门' }]

// 机构属性
export const orgPropertyList = [
  { value: 10, label: '独立学校' }, { value: 20, label: '集团学校' }, { value: 30, label: '独立医院' },
  { value: 40, label: '集团医院' }, { value: 50, label: '教育局' }, { value: 55, label: '卫健委' }
]
// 机构大类型对应机构属性选项
export function getOrgPropsList(type) {
  let list = orgPropertyList
  switch (+type) {
    case 10:
      list = [{ value: 10, label: '独立学校' }, { value: 20, label: '集团学校' }]
      break
    case 20:
      list = [{ value: 30, label: '独立医院' }, { value: 40, label: '集团医院' }]
      break
    case 30:
      list = [{ value: 50, label: '教育局' }, { value: 55, label: '卫健委' }]
      break
  }
  return list
}
// 权限组大分类
export const authGroupType = [
  { value: 10, label: '独立学校' }, { value: 20, label: '集团学校' }, { value: 30, label: '独立医院' },
  { value: 40, label: '集团医院' }, { value: 50, label: '政府部门' }
]
// 学段
export const schoolType = [
  { value: 1, label: '幼儿园' }, { value: 2, label: '小学' }, { value: 3, label: '初中' },
  { value: 4, label: '普高' }, { value: 5, label: '职高' }, { value: 6, label: '大学专科' },
  { value: 7, label: '大学本科' }
]

// 获取学段周期
export function getLifecirle(prefx) {
  return prefx == 2 ? 6 : prefx == 7 ? 4 : 3
}

// 监测点编号
export const controlCode = [{ value: '1', label: '1（城区）' }, { value: '2', label: '2（乡镇）' }]

// 总管理员0-20数量
export const aNum = new Array(21).fill(0).map((i, j) => { return { value: j } })

// 管理员0-50数量
export const mNum = new Array(51).fill(0).map((i, j) => { return { value: j } })

// 筛查员0-100数量
export const sNum = new Array(101).fill(0).map((i, j) => { return { value: j } })

// 导入名单学生类型
export const stuType = [
  { value: '1', label: '大陆（有身份证号）', url: '/static/file/template-mainland-student.xlsx', name: '学生导入名单-大陆（有身份证号）学生模板.xlsx' },
  { value: '3', label: '大陆（无身份证号）', url: '/static/file/template-mainland-withoutIdCard.xlsx', name: '学生导入名单-大陆（无身份证号）学生模板.xlsx' },
  { value: '2', label: '非大陆', url: '/static/file/template-unmainland-student.xlsx', name: '学生导入名单-非大陆学生模板.xlsx' }
]
// 历史学生状态
export const stuHistoryStatus = [{ value: 10, label: '转出' }, { value: 20, label: '毕业' }]

// 任务类型 ->定时任务管理
export const taskType = [{ value: 'http', label: 'http' }, { value: 'shell', label: 'shell' }]

// 民族
export const minority = [
  { 'id': '汉族', 'name': '汉族' }, { 'id': '蒙古族', 'name': '蒙古族' }, { 'id': '回族', 'name': '回族' },
  { 'id': '藏族', 'name': '藏族' }, { 'id': '维吾尔族', 'name': '维吾尔族' }, { 'id': '苗族', 'name': '苗族' },
  { 'id': '彝族', 'name': '彝族' }, { 'id': '壮族', 'name': '壮族' }, { 'id': '布依族', 'name': '布依族' },
  { 'id': '朝鲜族', 'name': '朝鲜族' }, { 'id': '满族', 'name': '满族' }, { 'id': '侗族', 'name': '侗族' },
  { 'id': '瑶族', 'name': '瑶族' }, { 'id': '白族', 'name': '白族' }, { 'id': '土家族', 'name': '土家族' },
  { 'id': '哈尼族', 'name': '哈尼族' }, { 'id': '哈萨克族', 'name': '哈萨克族' }, { 'id': '傣族', 'name': '傣族' },
  { 'id': '黎族', 'name': '黎族' }, { 'id': '傈僳族', 'name': '傈僳族' }, { 'id': '佤族', 'name': '佤族' },
  { 'id': '畲族', 'name': '畲族' }, { 'id': '高山族', 'name': '高山族' }, { 'id': '拉祜族', 'name': '拉祜族' },
  { 'id': '水族', 'name': '水族' }, { 'id': '东乡族', 'name': '东乡族' }, { 'id': '纳西族', 'name': '纳西族' },
  { 'id': '景颇族', 'name': '景颇族' }, { 'id': '柯尔克孜族', 'name': '柯尔克孜族' }, { 'id': '土族', 'name': '土族' },
  { 'id': '达斡尔族', 'name': '达斡尔族' }, { 'id': '仫佬族', 'name': '仫佬族' }, { 'id': '羌族', 'name': '羌族' },
  { 'id': '布朗族', 'name': '布朗族' }, { 'id': '撒拉族', 'name': '撒拉族' }, { 'id': '毛难族', 'name': '毛难族' },
  { 'id': '仡佬族', 'name': '仡佬族' }, { 'id': '锡伯族', 'name': '锡伯族' }, { 'id': '阿昌族', 'name': '阿昌族' },
  { 'id': '普米族', 'name': '普米族' }, { 'id': '塔吉克族', 'name': '塔吉克族' }, { 'id': '怒族', 'name': '怒族' },
  { 'id': '乌孜别克族', 'name': '乌孜别克族' }, { 'id': '俄罗斯族', 'name': '俄罗斯族' }, { 'id': '鄂温克族', 'name': '鄂温克族' },
  { 'id': '崩龙族', 'name': '崩龙族' }, { 'id': '保安族', 'name': '保安族' }, { 'id': '裕固族', 'name': '裕固族' },
  { 'id': '京族', 'name': '京族' }, { 'id': '塔塔尔族', 'name': '塔塔尔族' }, { 'id': '独龙族', 'name': '独龙族' },
  { 'id': '鄂伦春族', 'name': '鄂伦春族' }, { 'id': '赫哲族', 'name': '赫哲族' }, { 'id': '门巴族', 'name': '门巴族' },
  { 'id': '珞巴族', 'name': '珞巴族' }, { 'id': '基诺族', 'name': '基诺族' }]

// 根据学段类型转换得到对应json数组
export function getSchoolTypeList(arr) {
  const schoolTypeList = []
  arr.forEach((item) => {
    let obj = {}
    obj.value = item
    obj.label = getSchoolType(item)
    schoolTypeList.push(obj)
  })
  return schoolTypeList
}

// 导入学生名单错误编号
export const listErrMsg = {
  '10': '学校名称缺失',
  '20': '学校名称错误',
  '30': '学段缺失',
  '40': '学段错误',
  '50': '护照号缺失',
  '60': '学年缺失',
  '70': '学年错误',
  '80': '班级缺失',
  '90': '班级错误',
  '100': '姓名缺失',
  '110': '性别缺失',
  '120': '学生编号错误',
  '130': '出生日期缺失',
  '140': '出生日期错误',
  '150': '身份证号缺失',
  '160': '身份证号错误',
  '170': '该学生已有筛查数据，不可覆盖',
  '180': '性别错误',
  '190': '身份证号已存在',
  '200': '学生已存在',
  '210': '家长联系方式格式错误',
  '220': '学生姓名不可超过15个汉字或英文',
  '230': '家长姓名不可超过15个汉字或英文',
  '240': '籍贯不可超过10个汉字',
  '250': '民族不可超过5个汉字',
  '260': '学生姓名格式错误',
  '270': '家长姓名格式错误',
  '9999': '9999'
}

export const userRoles = [{ id: 10, name: '总管理员' }, { id: 20, name: '管理员' }, { id: 30, name: '筛查员' }]

export const statusArr = [{ id: 1, name: '启用' }, { id: 0, name: '禁用' }, { id: 2, name: '待审核' }]

// 默认展示北京-北京市-东城区
export const defaultArea = [110000, 110100, 110101]

// 对外公开客服电话
export const telephone = '400-1877-888'
