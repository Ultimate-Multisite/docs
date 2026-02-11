---
title: 既知の非互換性
sidebar_position: 15
_i18n_hash: 93136dc6fe62867e55f770e7b74473e8
---
# 他のプラグインとの既知の互換性の問題

Ultimate Multisite をインストールして有効化した後、他のプラグインとの未解決の互換性の問題により、問題が発生することがあります。

私たちは毎回新しいリリースごとにこのリストを削減するよう積極的に取り組んでいますが、ここにリストされているプラグインは、完全に機能する Ultimate Multisite ネットワークを構築するために無効化する必要がある場合があります。

以下はそれらのリストと、該当する場合に取るべき対処法です：

**Some WPMU DEV plugins**  
WPMU DEV によって _no longer_ 維持されていないプラグインの一部は、Ultimate Multisite の登録フローを最後のステップで停止させる（ユーザーがアカウントを作成できない）ことが知られています。以下はそれらの問題を引き起こすプラグインのリストです：

* サインアップ言語: _Ultimate Multisiteには同じ機能を提供するアドオンがあり、Ultimate Multisite: Language Switcherと呼ばれています._
* ブログ作成時にブログ説明を設定: _これはUltimate Multisiteに組み込まれているため、追加のプラグインは不要です._
* 新しいブログテンプレート: _これはUltimate Multisiteに組み込まれているため、追加のプラグインは不要です._
* マルチサイトブログ作成時にパスワードを設定: _これはUltimate Multisiteに組み込まれているため、追加のプラグインは不要です._
* サインアップ利用規約: _これはUltimate Multisiteに組み込まれているため、追加のプラグインは不要です._
* Anti-Splog: ただし機能は少し弱いですが、これも _Ultimate Multisiteに組み込まれています._

**注意** : その他のWPMU Devプラグインは、Ultimate Multisiteと通常通り併用できます。例としては_Smush_、_Forminator_、_Defender_などがあります。
