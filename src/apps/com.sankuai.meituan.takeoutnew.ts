import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13415044',
        'https://i.gkd.li/import/13276882',
      ],
    },
    {
      key: 2,
      name: '卡片式广告',
      activityIds: 'com.sankuai.waimai.platform.mach.dialog.DynamicDialog',
      rules: [
        '@[desc="关闭"][clickable=true] > ImageView', // 1686969062508
      ],
    },
    {
      key: 3,
      name: '卡片式广告',
      activityIds:
        'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          matches:
            '[text="送亲友"] <2 FrameLayout[childCount=2] > [text="暂时放弃"][clickable=true]',
        },
        {
          key: 1,
          name: '局部广告',
          matches:
            '@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text="点我领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13175526',
        },
      ],
    },
  ],
});
