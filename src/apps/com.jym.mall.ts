import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jym.mall',
  name: '交易猫',
  groups: [
    {
      key: 0,
      name: '卡片式广告',
      rules: '[id="com.jym.mall:id/tv_cancel"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12496974',
    },
  ],
});
