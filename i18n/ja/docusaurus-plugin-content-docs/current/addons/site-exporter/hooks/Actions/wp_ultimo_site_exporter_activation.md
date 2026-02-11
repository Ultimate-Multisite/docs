---
id: wp_ultimo_site_exporter_activation
title: We need to produce the translation. Let's do it.Action - wp_ultimo_site
sidebar_label: wp_ultimo_site_exporter_activation
_i18n_hash: 665638a6c1cb74cae60dfa3ff3be99fa
---
**概要**  
- **目的**：`inc/class-hooks.php` の `add_action()` で登録したフックが正しく呼び出されるかを確認する。  
- **手順**  
  1. **テスト用関数を作成**  
     ```php
     function my_test_hook() {
         error_log( 'my_test_hook called' );
     }
     ```  
  2. **フックを登録**  
     ```php
     add_action( 'init', 'my_test_hook' );
     ```  
  3. **WordPress を起動**（`wp-load.php` など）  
  4. **ログを確認**  
     - `wp-content/debug.log`（`WP_DEBUG_LOG` が有効）  
     - `error_log()` が出力されていればフックが呼び出されたことを示す。  
- **ポイント**  
  - `add_action()` の第1引数はフック名、第2引数はコールバック関数名。  
  - `init` は WordPress が初期化された直後に実行されるため、テストに適している。  
  - `error_log()` はデバッグ時に便利。  
- **実装例**  
  ```php
  // inc/class-hooks.php
  add_action( 'init', 'my_test_hook' );

  function my_test_hook() {
      error_log( 'my_test_hook called' );
  }
  ```  

この手順で、`add_action()` が正しく機能しているかを簡単に検証できます。
