import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: [
        'com.vmall.client.base.fragment.VmallWapActivity',
        'com.vmall.client.splash.fragment.SplashActivity',
      ],
      rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
      snapshotUrls: 'https://i.gkd.li/import/13060881',
    },
  ],
});
