import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13897834',
    },
  ],
});
