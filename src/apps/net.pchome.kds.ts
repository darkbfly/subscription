import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.pchome.kds',
  name: 'kds宽带山',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: 'net.pchome.kds.View.activity.TopicActivity2',
      rules: [
        {
          key: 0,
          matches: '@Image[text=""] < View +2 View > View > View > TextView',
          snapshotUrls: 'https://i.gkd.li/import/13043221',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13049609',
        },
      ],
    },
  ],
});
