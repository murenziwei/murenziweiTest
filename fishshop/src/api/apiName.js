const api = Object.create(null)
const baseUrl = 'index.php/api/'

api.production = {
  // 用户登录接口
  getLogin: `${baseUrl}UserInfo/sendCode`,
  // 查询该比赛、活动下的报名列表
  getApplyList: `${baseUrl}Index/getSignUpList`,

  /**
   * 主页
   */
  // 导航栏
  getHomeNav: `${baseUrl}Index/GetMatchCateList`,
  // 主页内容
  getHoneContent: `${baseUrl}Index/GetMatchArticleList`,
  /**
   * 比赛详情
   */
  // 详情
  getGameDetails: `${baseUrl}Index/GetArticleDateil`,

  /**
   * 用户信息
   */
  // 获取用户资料
  getUserInfo: `${baseUrl}UserInfo/getUserInfo`,
  // 编辑用户资料
  setUserInfo: `${baseUrl}UserInfo/setUserInfo`,
  /**
   * 活动分类
   */
  // 分类导航栏
  getClassificationNav: `${baseUrl}Index/GetActivityCateList`,
  // 主页内容
  getClassificationContent: `${baseUrl}Index/GetActivityArticleList`,
  /**
   * 活动详情
   */
  getActivityDetails: `${baseUrl}Index/GetArticleDateil`,
  /**
   * 申请
   */
  applyFor: `${baseUrl}Index/SetApplication`,
  /**
   * 提现记录
   */
  // 提现余额
  getWithdrawLog: `${baseUrl}UserInfo/getBalance`,
  // 提现记录
  getLoadWithdrawDeposit: `${baseUrl}UserInfo/getWithdrawalList`,
  /**
   * 提现
   */
  submitWithdraw: `${baseUrl}UserInfo/getWithdrawal`,
  /**
   * 报名
   */
  submitApply: `${baseUrl}Xs/pay`,
  /**
   * 信用分
   */
  getCreditPointsLog: `${baseUrl}UserInfo/getUserScore`
}

export default api
