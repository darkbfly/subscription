import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: 'com.vivo.wallet.bookkeep.activity.BookKeepMainActivity',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: '@Button[text*="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13440881',
        },
      ],
    },
  ],
});
