---
id: wu_core_installer_install_sunrise
title: フィルタ - wu_core_installer_install_sunrise
sidebar_label: wu_core_installer_install_sunrise
_i18n_hash: 9750f0fbfe9f02249e4e1d17e585bdb6
---
# フィルタ: wu_core_installer_install_sunrise

ホストプロバイダーが定数を別の方法でインストールできるようにします。

true を返すと、Ultimate Multisite が wp-config ファイルへの書き込みを試みるのを防ぎます。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $short_circuit | `bool` |  |

### バージョン

- 2.0.0

### ソース

定義されている [`inc/installers/class-core-installer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/installers/class-core-installer.php#L148) 行 148
