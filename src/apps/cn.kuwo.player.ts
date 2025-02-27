import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 1,
      name: '局部广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@TextView <3 View < View <4 View <3 View <3 WebView < WebView < [vid="pull_to_fresh"]',
      snapshotUrls: 'https://i.gkd.li/import/19000088',
    },
    {
      key: 2,
      name: '局部广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@TextView <3 View <4 View <3 View <3 WebView < WebView < [vid="pull_to_fresh"]',
      snapshotUrls: 'https://i.gkd.li/import/19000104',
    },
  ],
});
