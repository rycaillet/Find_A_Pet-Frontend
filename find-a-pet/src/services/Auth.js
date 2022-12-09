import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get(`/session`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (data) => {
  try {
    const res = await Client.post(
      `/comment/new_comment/user/${data.userId}/listing/${data.listingId}`,
      data
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComment = async (data) => {
  try {
    const res = await Client.put(`/comment/${data.commentId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
