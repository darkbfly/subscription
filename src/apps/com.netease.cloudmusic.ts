import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      enable: false,
      key: 1,
      name: '分段广告',
      desc: '有二次确认弹窗',
      quickFind: true,
      // matchDelay: 3000, 我又想不起来为什么要有这个了
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          ],
          matches: [
            '[id="com.netease.cloudmusic:id/adTagView"]',
            '[vid="adTagClose"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12829944',
            'https://i.gkd.li/import/12723229',
            'https://i.gkd.li/import/12829938',
            'https://i.gkd.li/import/12829964',
            'https://i.gkd.li/import/12829953',
            'https://i.gkd.li/import/13859634', //vid="adTagClose"
          ],
        },
        {
          key: 1,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="tag_ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/import/13927753',
        },
        {
          key: 2,
          name: '信息流广告-评论区内容推荐', // 考虑位置是否移出
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13526986',
            'https://i.gkd.li/import/13526711',
          ],
        },
        {
          preKeys: [0, 1],
          key: 90,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
            'com.netease.cloudmusic.activity.MainActivity',
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12829967',
            'https://i.gkd.li/import/13627047', //activityIds: 'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
            'https://i.gkd.li/import/13859635', //activityIds: 'com.netease.cloudmusic.activity.MainActivity'
          ],
        },
        {
          preKeys: 2,
          key: 91,
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13526712',
        },
      ],
    },
    {
      key: 2,
      name: '我的页面-中间滚动广告',
      quickFind: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules:
        '[id="com.netease.cloudmusic:id/auto_scroll_switcher"] + [id="com.netease.cloudmusic:id/close_btn"]',
      snapshotUrls: ['https://i.gkd.li/import/12745666'],
    },
    {
      key: 3,
      name: '主页-免费听歌',
      quickFind: true,
      activityIds: ['com.netease.cloudmusic.activity.MainActivity'],
      rules: ['@ImageView + ViewGroup > TextView[text="VIP歌曲免费听30分钟"]'],
      snapshotUrls: ['https://i.gkd.li/import/12843383'],
    },
    {
      key: 4,
      name: '卡片式广告',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '卡片式广告',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13188737',
        },
        {
          key: 1,
          name: '卡片式广告',
          matches: '[text="广告"] < ViewGroup + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13229016',
        },
        {
          key: 2,
          matches:
            '[id="com.netease.cloudmusic:id/dsl_dialog_root"] >n ViewGroup[childCount=2] > ImageView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13684724',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '卡片式广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text="会员套餐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13189055',
            'https://i.gkd.li/import/13260416',
          ],
        },
        {
          key: 1,
          name: '卡片式广告',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView - ViewGroup > [text="解锁千万级会员曲库"]',
          snapshotUrls: 'https://i.gkd.li/import/13228955',
        },
        {
          key: 2,
          name: '解锁更高音质',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView -2 ViewGroup [text="解锁更高音质"]',
          snapshotUrls: 'https://i.gkd.li/import/13230603',
        },
        {
          key: 3,
          name: '卡片式广告',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            'ImageView < @ViewGroup -3 ViewGroup [text="您的黑胶VIP已过期"]',
          snapshotUrls: 'https://i.gkd.li/import/13230605',
        },
        {
          key: 4,
          name: '卡片式广告',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '[text*="搭配会员音效"] + @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13391498',
        },
      ],
    },
    {
      key: 6,
      name: '更新弹窗',
      quickFind: true,

      rules: [
        {
          key: 0,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          ],
          matches: '[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13233790',
            'https://i.gkd.li/import/13197457',
            'https://i.gkd.li/import/13228878',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '播放界面广告',
      desc: '右上角VIP小悬浮、巨幅卡片式广告',
      quickFind: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '右上角VIP小悬浮',
          matches:
            'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13402634',
            'https://i.gkd.li/import/13402635',
            'https://i.gkd.li/import/13402636',
          ],
        },
        {
          key: 1,
          name: '巨幅卡片式广告',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13527105',
        },
      ],
    },
    {
      key: 8,
      name: '发现-顶部视频广告',
      desc: '自动点击跳过。',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
          snapshotUrls: 'https://i.gkd.li/import/13768367',
        },
      ],
    },
    {
      key: 9,
      name: '卡片式广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      matchTime: 10000,
      rules: '@ImageView + ViewGroup > [text="VIP歌曲免费听30分钟"]',
      snapshotUrls: 'https://i.gkd.li/import/13804534',
    },
    {
      key: 10,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '更新提示',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[text="下次再说"] < ViewGroup',
          snapshotUrls: 'https://i.gkd.li/import/13804541',
        },
        {
          key: 1,
          name: '更新提示',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text="社区广场全新升级"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13804544',
        },
      ],
    },
    {
      key: 11,
      quickFind: true,
      name: '卡片式广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView[clickable=true] +3 * > [text="立即支持"]',
          snapshotUrls: 'https://i.gkd.li/import/13848913',
        },
      ],
    },
  ],
});
