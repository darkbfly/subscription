import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhl.bmi',
  name: '乐看视频',
  groups: [
    {
      key: 2,
      name: '卡片式广告',
      desc: '点击右上角x',
      activityIds: 'com.zhl.bmi.MainActivity',
      quickFind: true,
      rules: [
        '@ImageView < FrameLayout[childCount=1] <(2,3) FrameLayout <(1,2) FrameLayout < FrameLayout < [id="android:id/content"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13255787',
        'https://i.gkd.li/import/13255786',
        'https://i.gkd.li/import/13542343', //第二条规则
      ],
    },
  ],
});
