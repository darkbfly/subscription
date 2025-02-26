import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.banjixiaoguanjia.app',
  name: '班级小管家',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: 'com.banjixiaoguanjia.app.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_bu_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12904612',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12906196',
        },
      ],
    },
  ],
});
