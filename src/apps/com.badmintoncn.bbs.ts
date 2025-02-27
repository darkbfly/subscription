import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.badmintoncn.bbs',
  name: '中羽在线',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          quickFind: true,
          matches: '[id="com.badmintoncn.bbs:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13635224',
        },
      ],
    },
  ],
});
