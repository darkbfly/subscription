import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.cebbank.mobile.cemb.view.CustomizedDialog',
      rules: '@[text="不再提示"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12727241',
    },
    {
      key: 2,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
        'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
      ],
      rules: '[id="com.cebbank.mobile.cemb:id/home_advertising_iv_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12727248',
        'https://i.gkd.li/import/13471080', // activityIds: 'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
      ],
    },
  ],
});
