import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: '第一次启动提示',
      activityIds: 'com.icbc.activity.init.SplashActivity',
      rules: '[id="com.icbc:id/close_btn"]',
    },
    {
      key: 1,
      name: '卡片式广告',
      enable: false,
      activityIds: 'com.icbc.activity.main.MainActivity',
      rules: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
      snapshotUrls: 'https://i.gkd.li/import/13330431',
    },
  ],
});
