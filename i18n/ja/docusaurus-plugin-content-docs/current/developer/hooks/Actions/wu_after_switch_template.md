---
id: wu_after_switch_template
title: |
  ---
  title: wu_after_switch_template
  description: このアクションはテンプレートが切り替えられた後に発火します。
  ---

  ## wu_after_switch_template

  このアクションはテンプレートが切り替えられた後に発火します。

  ### パラメータ

  - `$template` (string) – テンプレートファイルパス。
  - `$theme` (WP_Theme) – テーマオブジェクト。

  ### 例

  ```php
  add_action( 'wu_after_switch_template', function( $template, $theme ) {
      // 何かを行う
  } );
  ```
sidebar_label: wu_after_switch_template
_i18n_hash: c3465157d5bf0ff10c2cd77dbd97981c
---
# アクション: wu_after_switch_template

ユーザーまたはスーパー管理者がサイトテンプレートを切り替えた後に、プラグイン開発者が関数をフックできるようにします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $id | `int` | サイトID |

### バージョン

- 1.9.8

### ソース

定義済み: [`inc/ui/class-template-switching-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-template-switching-element.php#L296) 行 296
