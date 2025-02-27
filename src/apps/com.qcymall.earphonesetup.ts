import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
      actionMaximum: 1,
      rules: '[vid="close_img_banner"]',
      snapshotUrls: 'https://i.gkd.li/import/13874219',
    },
  ],
});
