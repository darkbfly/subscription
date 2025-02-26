import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '开启通知服务',
      desc: '选择[取消]',
      activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
      rules: '[id="com.mcdonalds.gma.cn:id/tv_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13259242',
    },
    {
      enable: false,
      key: 2,
      name: '卡片式广告',
      desc: '自动关闭',
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
          matches: '[id="com.mcdonalds.gma.cn:id/iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13465873',
        },
      ],
    },
  ],
});
