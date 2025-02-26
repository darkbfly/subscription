import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      desc: '点击【我知道了】（旧版本）【关闭】（新版本）',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: 'Button[desc="开启青少年模式"] + Button[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13111607',
        },
        {
          actionMaximumKey: 0,
          matches:
            'Button[text="开启青少年模式"] + LinearLayout > Button[text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13542867', //新版本
          ],
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          activityIds:
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
          matches:
            '[text="不再提示"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^="立即体验"]',
          snapshotUrls: 'https://i.gkd.li/import/13684791',
        },
      ],
    },
    {
      key: 8,
      name: '卡片式广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules:
        '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme.lite:id/close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13650523',
    },
    {
      key: 9,
      quickFind: true,
      name: '卡片式广告',
      desc: '点击暂不开启',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/gl7"] > [id="com.ss.android.ugc.aweme.lite:id/h5q"]',
          snapshotUrls: 'https://i.gkd.li/import/13888485',
        },
      ],
    },
  ],
});
