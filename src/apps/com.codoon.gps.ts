import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.codoon.gps',
  name: '咕咚',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.codoon.gps.ui.SlideActivity',
      rules: [
        {
          name: '卡片式广告',
          matches:
            '[id="android:id/content"] >2 RelativeLayout > ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13358586',
        },
        {
          name: '卡片式广告',
          matches:
            '[id="android:id/content"] >4 FrameLayout > ImageView + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13348663',
        },
      ],
    },
  ],
});
