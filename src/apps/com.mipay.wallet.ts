import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 0,
      name: '钱包-广告',
      activityIds:
        'com.xiaomi.jr.app.MiFinanceActivity',
      rules: '@ImageView < View < View < View < View < FrameLayout < [vid="flutter_container"]',
      snapshotUrls: 'https://i.gkd.li/import/17927842',
    },
  ],
});
