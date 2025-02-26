import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.xingye.app:id/teenagerDialogConfirmTv"]',
      snapshotUrls: 'https://i.gkd.li/import/13766001',
    },
  ],
});
