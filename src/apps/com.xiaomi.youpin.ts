import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: [
        'com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity',
      ],
      rules: [
        {
          matches:
            '@Image <2 View[childCount=2] < [id="app"] < [text="有品"] < * < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/import/12836727'],
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      activityIds: [
        'com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity',
      ],
      rules: [
        {
          matches: '[id="com.xiaomi.youpin:id/ypd_alert_close_image"]',
          snapshotUrls: ['https://i.gkd.li/import/12836775'],
        },
      ],
    },
  ],
});
