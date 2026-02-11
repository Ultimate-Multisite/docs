---
id: wu_get_site_domain_and_path
title: フィルタ - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# フィルタ: wu_get_site_domain_and_path

開発者がドメイン/パスのペアを操作できるようにします。

これは、ステージングソリューションの実装や異なるサーバーの使用など、さまざまな目的に役立ちます。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $d | `object` | 現在のオブジェクトで、ドメインとパスのキーを含みます。 |
| $path_or_subdomain | `string` | 関数に渡された元のパス/サブドメイン。 |

### バージョン

- 2.0.0

### ソース

定義されている [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) の235行目で

## 戻り値

ドメインとパスのキーを含むオブジェクト。
