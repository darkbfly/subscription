import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
      rules: [
        {
          matches: '@ImageView[id="com.yikaobang.yixue:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13425853',
        },
      ],
    },
  ],
});
