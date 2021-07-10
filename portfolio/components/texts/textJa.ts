import { Text } from './types'

export const textJa: Text = {
  ABOUT: {
    DESCRIPTION1: '橋本水輝といいます。日本人です。最近、Juniata Collegeをコンピューターサイエンス専攻 \
      化学副専攻で卒業しました。現在、ソフトウェアエンジニアのインターン/エントリーポジションを探しています。 \
      ですが、私は新しいことに挑戦することが好きなので、あらゆる機会を歓迎します。',
    DESCRIPTION2: 'ソフトウェアを集合体として捉え、各構成物が何で何をしてどう他の構成物と作用するのか \
      を考えることが好きです。',
    DESCRIPTION3: '日本語、英語、 簡単な中国語(マンダリン)を話します。趣味は旅行、ハイキング、音楽鑑賞です。',
  },
  EXPERIENCES: [
    {
      POSITION: 'プロジェクトメンバー',
      DESCRIPTION: '社内のデータベースからデータを取り出しレポートを作成するシステムを実装し、\
        社内の送り状生成プロセスを自動化しました。これにより、送り状プロセス全体にかかる時間を \
        月あたり12時間減らしました。',
    },
  ],
  PROJECTS: [
    {
      // todo app
      DESCRIPTION: 'テキストをコードスタイルで登録できるシンプルなTodoアプリ',
      PURPOSE: 'トレンド技術の学習 (TypeScript, React, and Firebase)',
    },
    {
      // othello
      DESCRIPTION: 'コネクトフォーとオセロを組み合わせたWindowsフォームゲームアプリ',
      PURPOSE: 'GUIとソフトウェアデザイン手法(MVC, UML)の学習',
      NOTE: '大学の授業課題の一環として作りました',
    },
    {
      // flower
      DESCRIPTION: '102 Category Flower Datasetを元にした花画像予測アプリ',
      PURPOSE: 'トレンド技術の学習 (Deep learning, Tensorflow(Keras)); APIの構築とフロントエンドへの接続',
      NOTE: 'モデルの学習はファインチューニングしたResNet50で行いました',
    },
    {
      // spooky
      DESCRIPTION: 'OpenGLでレンダーした不気味なシーン',
      PURPOSE: 'CGの基礎の学習',
      NOTE: '大学の授業課題の一環として作りました',
    },
    {
      // portfolio
      DESCRIPTION: '私のポートフォリオ',
      PURPOSE: 'Reactフレームワークの学習',
      NOTE: '現在より良い言語スイッチングと国際化を検討しています',
    },
  ],
}