---
id: wu_checkout_form_base_domains
title: フィルター - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# フィルター: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

共有チェックアウトフォームのベースドメインをフィルターし、マッピングされたドメインレコードにならないようにします。

統合がチェックアウトフォームの **Site URL** フィールド向けに追加のベースドメインを提供する場合に、このフィルターを使用します。このフィルターが返すドメインは、サイトごとのカスタムドメインではなく、共有登録ホストとして扱われます。

## パラメーター {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $domains | `array` | チェックアウトフォーム設定から収集された共有ベースドメイン。 |

### 導入バージョン {#since}

- 2.13.0

### ソース {#source}

`inc/functions/domain.php` で定義されています。


## 戻り値 {#returns}

正規化されたチェックアウトフォームのベースドメインの配列。
