import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shizhuang.duapp',
  name: '得物',
  deprecatedKeys: [0],
  groups: [ {
    key: 1,
    name: '卡片式广告',
    rules: '@Image <3 View < View < View <3 View < View < WebView < WebView < [vid="webview_container"]',
  }],
});
