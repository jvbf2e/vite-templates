import type { UserType } from './types'

import request from '@/service'

export const loginApi = (
  data: Partial<UserType>
): Promise<IResponse<UserType>> => {
  return request.post({ url: '/auth/manage/login/pwd', data })
}
