import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '卡片式广告',
      desc: '点击X',
      rules: [
        {
          matches: '[id="cn.honor.qinxuan:id/iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/import/13930613',
        },
      ],
    },
  ],
});
