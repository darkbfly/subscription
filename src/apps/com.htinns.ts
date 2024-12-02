import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.htinns',
  name: '华住会',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '定位提示',
      desc: '关闭扫码投屏提醒弹窗',
      activityIds: [
        'com.htinns.reactnative.v2.RNContainerActivity',
      ],
      snapshotUrls: 'https://i.gkd.li/import/17971393',// 
      rules: [
        '@Button < View <2 View < View < View < View < View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < LinearLayout < [id="android:id/content"]', // 1686970236642
      ],
    },
  ],
});
