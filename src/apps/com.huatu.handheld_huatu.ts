import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: [
        'com.huatu.handheld_huatu.view.MainPopDialog',
        'com.huatu.handheld_huatu.business.main.MainTabActivity',
      ],
      rules:
        '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12715702', // activityId: 'com.huatu.handheld_huatu.view.MainPopDialog'
        'https://i.gkd.li/import/12744973', // activityId: 'com.huatu.handheld_huatu.business.main.MainTabActivity'
      ],
    },
    {
      enable: false,
      key: 10,
      name: '卡片式广告',
      activityIds: 'com.huatu.handheld_huatu.business.main.MainTabActivity',
      rules: '[text*="开启通知提示"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12715719',
    },
  ],
});
