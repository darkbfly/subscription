import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '米家智惠广告',
      activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: ['https://i.gkd.li/import/12639658'],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '卡片式广告',
      activityIds: 'com.xiaomi.smarthome.framework.plugin.rn.PluginRNActivity',
      snapshotUrls: 'https://i.gkd.li/import/12639671',
      rules:
        '[text*="检测到"&&text*="升级"] < ViewGroup + ViewGroup > Button > [text = "取消"]',
    },
  ],
});
