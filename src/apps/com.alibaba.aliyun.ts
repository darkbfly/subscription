import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.aliyun',
  name: '阿里云',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      quickFind: true,
      rules: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13446162',
    },
  ],
});
