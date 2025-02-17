import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jiaohua_browser',
  name: 'JMComic2',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: 'com.jiaohua_browser.MainActivity',
      rules: '[text="我保證我已滿18歲！確定進入！"]',
      snapshotUrls: 'https://i.gkd.li/import/18821510',
    },
    {
      key: 2,
      name: '开屏广告',
      activityIds: 'com.jiaohua_browser.MainActivity',
      rules: '[text=""]',
      snapshotUrls: 'https://i.gkd.li/import/18821525',
    }
  ],
});
