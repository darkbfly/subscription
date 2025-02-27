import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cn21.ecloud',
  name: '天翼云盘',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: ['com.cn21.ecloud.activity.MainPageActivity'],
      rules:
        '[id="com.cn21.ecloud:id/content_frame"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]',
      snapshotUrls: [
        'https://i.gkd.li/import/12865481',
        'https://i.gkd.li/import/12865488',
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cn21.ecloud.activity.MainPageActivity'],
      rules: '[id="com.cn21.ecloud:id/ivCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13399488',
    },
  ],
});
