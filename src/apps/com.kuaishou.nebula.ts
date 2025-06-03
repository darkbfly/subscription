import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  deprecatedKeys: [0],
  groups: [ {
    key: 1,
    name: '卡片式广告',
    activityIds: [
      'com.yxcorp.gifshow.HomeActivity',
    ],
    rules: '@Image < View < View <2 View <7 View < WebView < WebView < [vid="webView"]',
  }, {
    key: 2,
    name: '卡片式广告',
    activityIds: [
      'com.yxcorp.gifshow.HomeActivity',
    ],
    rules: '@Image < View < View <2 View <6 View < WebView < WebView < [vid="webView"]',
  }],
});
