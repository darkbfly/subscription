import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.haier.uhome.uplus',
  name: '海尔智家',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.haier.uhome.uplus.upgradeui.ui.UpgradeDialogActivity',
        'com.huawei.android.launcher.unihome.UniHomeLauncher',
      ],
      rules: '@[text="取消"] + [text="立即更新"||text="立即安装"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12726844',
        'https://i.gkd.li/import/12726801', // activityId: 'com.huawei.android.launcher.unihome.UniHomeLauncher'
      ],
    },
    {
      enable: false,
      key: 10,
      name: '卡片式广告',
      activityIds: 'com.haier.uhome.uplus.ui.widget.MPermissionCheckDialog',
      rules: '[text*="通知栏权限"] +n LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12726829',
    },
  ],
});
