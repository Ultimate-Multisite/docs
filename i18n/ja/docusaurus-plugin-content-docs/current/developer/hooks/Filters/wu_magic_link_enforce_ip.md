---
id: wu_magic_link_enforce_ip
title: フィルター - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP アドレス検証を強制するかどうかをフィルターします。

false に設定すると、異なるネットワークからでもトークンが機能するようになります。これによりセキュリティは低下しますが、使いやすさは向上します（例: ネットワークを切り替えるモバイルユーザー向け）。

## パラメーター

| 名前 | 型 | 説明 |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### 導入バージョン

- 2.0.0
### ソース

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) の 422 行目で定義されています。
