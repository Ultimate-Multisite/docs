---
id: wu_apply_plan_limits
title: フィルタ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# フィルタ: wu_apply_plan_limits

プラグイン開発者が制限を短絡させることを許可します。

このフィルタを使用して、制限が開始される前に任意のコードを実行できます。フィルタが真値を返す場合、プロセスは継続します。偽値を返す場合、コードは戻り、以下のフックは実行されません。

### Since

- 1.7.0

### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) at line 98

## Returns
