import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fanli.android.apps',
  name: '返利',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds:
        'com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity',
      rules: '[id="J_poplayer_box"] >n @View + [text="main_bkg"]',
      snapshotUrls: 'https://i.gkd.li/import/13245808',
    },
  ],
});
