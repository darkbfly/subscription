import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xxx.pornhub.fuck',
  name: 'JavDB',
  groups: [
    {
      enable: false,
      key: 1,
      name: '卡片式广告',
      activityIds: 'app.lawnchair.LawnchairLauncher',
      rules: '[desc="公告"] + * + [desc="知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13334608',
    },
  ],
});
