import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.mobile',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.ss.android.ugc.aweme.mobile:id/teen_mode_title"] +n [id="com.ss.android.ugc.aweme.mobile:id/bt_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13255513',
    },
  ],
});
