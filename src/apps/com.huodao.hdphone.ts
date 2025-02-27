import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huodao.hdphone',
  name: '找靓机',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '卡片式广告',
      desc: '点击X',
      rules: [
        {
          matches:
            '[id="android:id/content"] >2 [id="com.huodao.hdphone:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13927567',
        },
      ],
    },
  ],
});
