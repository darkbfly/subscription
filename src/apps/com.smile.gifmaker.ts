import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 0,
      name: '卡片式广告',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          matches:
            '@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]',
        },
        {
          matches:
            '[id="com.smile.gifmaker:id/set_teenage_mode"] + [id="com.smile.gifmaker:id/positive"]',
          snapshotUrls: 'https://i.gkd.li/import/12708609',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '卡片式广告',
      desc: '自动点击x按钮',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          name: '卡片式广告',
          matches:
            '@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12708649',
            'https://i.gkd.li/import/12708660',
          ],
        },
        {
          name: '卡片式广告',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
          snapshotUrls: ['https://i.gkd.li/import/12708681'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '首页-左侧红包悬浮控件',
      desc: '自动点击x按钮',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.smile.gifmaker:id/pendant_mask_bg"] + [id="com.smile.gifmaker:id/pendant_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12708671',
            'https://i.gkd.li/import/12708676', // 执行规则后，控件隐藏，使用 visibleToUser=true 进行限定，防止反复触发规则
          ],
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '你可能感兴趣的人',
      desc: '自动点击【关闭】',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: '[id="com.smile.gifmaker:id/close_pymk"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12708620',
        'https://i.gkd.li/import/12708707',
      ],
    },
  ],
});
