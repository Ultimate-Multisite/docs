---
id: signup_get_available_languages
title: フィルター - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# フィルター: signup_get_available_languages {#filter-signupgetavailablelanguages}

フロントエンドのサイト登録で利用可能な言語の一覧をフィルターします。

この hook に空の配列を渡すと、登録フォームでの設定出力が無効になり、サイト作成時には既定の言語が使用されます。まだインストールされていない言語は除外されます。

## パラメータ {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $available_languages | `array` | 利用可能な言語。 |

### 導入 {#since}

- 4.4.0
### ソース {#source}

117行目の [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) で定義されています。
