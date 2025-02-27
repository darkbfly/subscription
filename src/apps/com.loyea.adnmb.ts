import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.loyea.adnmb',
  name: '蓝岛',
  groups: [
    {
      key: 5,
      name: '卡片式广告',
      enable: false,
      quickFind: true,
      activityIds: 'com.loyea.adnmb.activity.MainActivity',
      rules: 'LinearLayout > Button[text="确定"]',
      snapshotUrls: 'https://i.gkd.li/import/13623450',
    },
  ],
});
