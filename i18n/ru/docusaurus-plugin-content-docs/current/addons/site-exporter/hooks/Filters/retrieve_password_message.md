---
id: retrieve_password_message
title: >
  ---

  title: "Фильтр: retrieve_password_message"

  description: "Позволяет изменить сообщение, отправляемое пользователю при
  запросе сброса пароля."

  ---


  ## Filter Hook


  ### Description


  Этот фильтр позволяет изменить сообщение, которое отправляется пользователю
  при запросе сброса пароля.


  ### Parameters


  - `$message` (string) – Сообщение по умолчанию.  

  - `$user_login` (string) – Имя пользователя.  

  - `$user_data` (WP_User) – Объект данных пользователя.  

  - `$key` (string) – Ключ сброса пароля.  

  - `$login` (string) – Имя пользователя для входа.


  ### Return value


  Возвращает изменённую строку сообщения.


  ### Example


  ```php

  add_filter( 'retrieve_password_message', 'my_retrieve_password_message', 10, 5
  );

  function my_retrieve_password_message( $message, $user_login, $user_data,
  $key, $login ) {
      // Пользовательское сообщение
      return "Привет $user_login, ссылка для сброса пароля: " . network_site_url( "wp-login.php?action=rp&key=$key&login=$login", 'login' );
  }

  ```
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Фильтр: retrieve_password_message

Фильтрует тело сообщения письма сброса пароля.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Сообщение по умолчанию. |
| $key | `string` | Ключ активации. |
| $user_login | `string` | Имя пользователя. |
| $user_data | `\WP_User` | Объект WP_User. |

### Since

- 2.8.0
- 4.1.0: Добавлены параметры <code>$user_login</code> и <code>$user_data</code>.

### Source

Определено в [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) на строке 149

## Returns

Сообщение по умолчанию.
