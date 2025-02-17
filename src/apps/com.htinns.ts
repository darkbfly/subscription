import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.htinns',
  name: '华住会',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '定位提示-定位请求',
      desc: '关闭扫码投屏提醒弹窗',
      rules: [
        {
          matches:
            '@Button < View <2 View < View < View < View < View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < LinearLayout < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/import/17971393'],
        },
      ],
    },
  ],
});
