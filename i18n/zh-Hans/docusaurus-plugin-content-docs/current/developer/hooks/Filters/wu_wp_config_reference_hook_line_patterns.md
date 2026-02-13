---
id: wu_wp_config_reference_hook_line_patterns
title: 过滤器 - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# 过滤器: wu_wp_config_reference_hook_line_patterns

我们检查三种模式，以确定在哪里可以注入我们的常量：

1. 我们搜索 $table_prefix 变量定义；2. 我们搜索更复杂的 $table_prefix 定义——例如使用环境变量的那种；3. 如果没有找到，我们查找 'Happy Publishing' 注释；4. 如果也没有找到，我们查找文件开头。键表示模式，值表示要添加的行数。可以传递负数行数，以在找到的行之前写入，而不是之后。

### 源码

定义于 [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) 在第 143 行
