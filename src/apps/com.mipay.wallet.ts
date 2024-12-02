import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mipay.wallet',
  name: '小米钱包',
  groups: [
    {
      key: 0,
      name: '局部广告',
      activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
      rules:
        '@ImageView < View < View < View < View < FrameLayout < [vid="flutter_container"]',
      snapshotUrls: 'https://i.gkd.li/import/17927842',
    },
  ],
});
