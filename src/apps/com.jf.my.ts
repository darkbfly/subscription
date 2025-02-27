import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 0,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.lbe.security.ui.CountdownDialogActivity',
        'com.jf.my.MainActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.jf.my:id/btn_ok"][text="更新"] - [id="com.jf.my:id/btn_cancel"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12838034',
            'https://i.gkd.li/import/12840591',
          ],
        },
        {
          matches:
            '[id="com.jf.my:id/toUpgradeTv"] - [id="com.jf.my:id/cancelTv"]',
          snapshotUrls: 'https://i.gkd.li/import/13786867',
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      activityIds: 'com.jf.my.main.ui.dialog.HomeRedPackageDialog',
      rules: '[id="com.jf.my:id/iv_back"]',
      snapshotUrls: 'https://i.gkd.li/import/12840619',
    },
  ],
});
