class BaseModel {
  /**
   * 构造函数
   * @param {Object} data 数据
   * @param {string} message 信息
   */
  constructor(message, data) {

    this.data = data

    this.message = message
  }
}

class SuccessModel extends BaseModel {
  constructor(message = "操作成功", data = "", code = 200) {
    super(message, data)
    this.code = code
  }
}

class ErrorModel extends BaseModel {
  constructor(message = "操作失败", data = "", code = 201) {
    super(message, data)
    this.code = code
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}