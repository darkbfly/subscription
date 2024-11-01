import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pupumall.customer',
  name: '朴朴超市',
  deprecatedKeys: [0],
  groups: [
    {
      key: 0,
      name: '开屏广告-1',
      rules: '[vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/17595003',
    },
  ],
});
