import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      desc: '自动点击【仅在使用中允许】',
      activityIds:
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      quickFind: true,
      rules: '[text="仅在使用中允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13761264',
    },
  ],
});
