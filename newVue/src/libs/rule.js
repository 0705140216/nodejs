// 中文姓名
export const name = [
  { required: true, message: '请输入姓名' },
  { pattern: /^[a-zA-Z|\u4E00-\u9FA5]{2,30}$/, message: '请输入2-30个中文或英文字符' }
]

// 手机号码
export const phone = [
  { required: true, message: '请输入手机号码' },
  { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '手机号码格式有误', trigger: 'blur' }
]
