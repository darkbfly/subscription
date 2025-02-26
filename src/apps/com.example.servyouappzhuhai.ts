import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.servyouappzhuhai',
  name: '广东税务',
  groups: [
    {
      key: 0,
      name: '卡片式广告',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: '[id="com.example.servyouappzhuhai:id/btn_dialog_negtive"]',
          snapshotUrls: 'https://i.gkd.li/import/13440721',
        },
      ],
    },
  ],
});
