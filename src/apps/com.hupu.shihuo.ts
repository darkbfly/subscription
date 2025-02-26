import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 2,
      name: '功能类-消息通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.shizhi.shihuoapp.module.main.ui.main.MainActivity',
      rules: '[text^="通知分类"] +n ImageView[id="com.hupu.shihuo:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13704887',
    },
    {
      key: 3,
      name: '卡片式广告',
      desc: '点击左上角x关闭',
      activityIds:
        'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
      rules:
        '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13115664',
    },
  ],
});
