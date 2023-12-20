/// <reference path="./types/index.d.ts" />

interface IAppOption {
  status: {
    login: object
  }

  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}