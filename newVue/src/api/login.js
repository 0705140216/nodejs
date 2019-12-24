import request from '@/libs/request'
const BASE_MODEL = '/wxb'
/**
 * @description 接口1
 */
export const login = (data) => {
  return request({
    url: `${BASE_MODEL}/users`,
    method: 'post',
    data
  })
}
