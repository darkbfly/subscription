import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      activityIds: 'cn.com.hkgt.gasapp.dialog.BannerDialog',
      rules: 'ImageView[id="cn.com.hkgt.gasapp:id/exit"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12744270',
    },
  ],
});
