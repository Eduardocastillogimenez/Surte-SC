
export default function Auth (to, from, next) {
  try {
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      next({ name: 'Login' })
    }
  } catch (e) {
  }
  return next()
}
