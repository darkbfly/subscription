import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches: '@[text="稍候再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/import/12727278',
        },
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      quickFind: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 9,
      name: '右侧悬浮广告',
      // matchTime: 10000, 部分广告不在10s内
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/frog_float"] >2 [id="com.unionpay:id/close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695699',
        },
      ],
    },
    {
      key: 10,
      name: '卡片式广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules: '[id="com.unionpay:id/view_locate_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13634882',
    },
    {
      enable: false,
      key: 11,
      name: '卡片式广告',
      desc: '自动点击【不允许】。默认关闭，请手动开启',
      quickFind: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text$="想访问您的位置信息"] < * +2 LinearLayout > [id="com.unionpay:id/btn_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695773',
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '卡片式广告',
      desc: '默认关闭，请手动开启',
      quickFind: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695736',
        },
      ],
    },
    {
      key: 13,
      name: '天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
      ],
    },
    {
      key: 14,
      name: '卡片式广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules:
        '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13440341',
    },
    {
      key: 15,
      quickFind: true,
      name: '卡片式广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13848688',
        },
      ],
    },
  ],
});
