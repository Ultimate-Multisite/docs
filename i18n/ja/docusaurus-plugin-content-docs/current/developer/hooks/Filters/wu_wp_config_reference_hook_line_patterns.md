---
id: wu_wp_config_reference_hook_line_patterns
title: フィルタ - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# フィルタ: wu_wp_config_reference_hook_line_patterns

定数を挿入できる場所を特定する際に、3つのパターンを確認します:

1. $table_prefix 変数の定義を検索します。  
2. より複雑な $table_prefix の定義（例：環境変数を使用するもの）を検索します。  
3. それが見つからない場合は、'Happy Publishing' コメントを探します。  
4. それも見つからない場合は、ファイルの先頭を探します。  

キーはパターンを表し、値は追加する行数を表します。負の行数を指定すると、見つかった行の前に書き込むことができます（後ろに書き込む代わりに）。

### Source

定義は [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) の 143 行目にあります。
