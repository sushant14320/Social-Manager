
const appId = 626288308018003;
const redirectUrl = `https://localhost:3000/Redirect`
export const login = () => {
  window.open(`https://www.facebook.com/v7.0/dialog/oauth?
  client_id=${appId}&response_type=token&redirect_uri=${redirectUrl}&scope=pages_manage_posts,email,public_profile&state=${`NA`}`)
}