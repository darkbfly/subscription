import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.waimaiii.waimaiii',
  name: '歪麦霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '功能类',
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13346166',
        },
        {
          key: 1,
          name: '功能类',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13346451',
        },
        {
          key: 2,
          matches:
            '[id="com.waimaiii.waimaiii:id/flContainer"] >n FrameLayout[childCount=3] > FrameLayout + @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13694837',
        },
        {
          key: 3,
          matches:
            '[id="android:id/content"] >9 FrameLayout + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13930573',
        },
      ],
    },
    {
      key: 3,
      name: '卡片式广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sangshen.ad_jg_flutter_sdk.SplashAdActivity',
      rules: [
        {
          matches:
            'View > View[childCount=2] > ImageView[clickable=true] + ImageView[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13346187',
        },
      ],
    },
  ],
});
