
export default function Auth (to, from, next) {
  try {
    const token = localStorage.getItem('token');
    if(!token) {
      next({ name: 'Login' })
    }
  } catch (e) {
  }
  return next()
}
