import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '卡片式广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          quickFind: true,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864',
          ],
        },
        {
          quickFind: true,
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/import/13631362',
        },
        {
          matches:
            '[id="com.alipay.android.app:id/flybird_userinfo"] + * >8 FrameLayout[clickable=true][index=1]',
          snapshotUrls: 'https://i.gkd.li/import/13857535',
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      key: 2,
      name: '卡片式广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '局部广告',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/import/13194955',
        },
        {
          key: 1,
          name: '卡片式广告',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches:
            '[text="选择通知接收范围"] <2 RelativeLayout [text="暂时不用"]',
          snapshotUrls: 'https://i.gkd.li/import/13669620',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
        'com.eg.android.AlipayGphone.AlipayLogin',
        'com.alipay.mobile.about.ui.AboutAlipayActivity',
      ],
      rules: [
        {
          name: '卡片式广告',
          matches:
            'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13327095',
        },
        {
          name: '卡片式广告',
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13490805',
            'https://i.gkd.li/import/13580594',
          ],
        },
        {
          name: '卡片-【x】',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/import/13490797',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '小程序-12306',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13915022',
        },
      ],
    },
  ],
});
