---
title: Как установить WordPress Multisite
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Как установить WordPress Multisite?

WordPress Multisite позволяет вам иметь сеть сайтов на одной установке. Это встроенная функция, но она не активна по умолчанию.

Поскольку Ultimate Multisite является только сетевым плагином, в этом руководстве вы узнаете, как установить и настроить WordPress Multisite. Этот текст основан на [Как установить и настроить сеть WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), из WPBeginner.

**Вещи, на которые стоит обратить внимание перед созданием вашей сети сайтов:**

* Получите хороший хостинг WordPress! Сайты в сети используют одни и те же серверные ресурсы.
* Если у вас всего несколько сайтов с низкой посещаемостью, совместный хостинг, вероятно, подойдет.
* Большинство **Managed WordPress hosting providers** предлагают Multisite out-of-the-box (они устанавливают WordPress с активированным и настроенным Multisite). Это относится к WP Engine, Closte, Cloudways и т.д. Если вы не уверены, относится ли это к вашему хостинг-провайдеру, свяжитесь с их поддержкой перед тем, как продолжить это руководство.
* Также полезно знать, как установить WordPress и редактировать файлы через FTP.

_**ВАЖНО**_ **:** Если вы настраиваете сеть WordPress Multisite на существующем сайте WordPress, не забудьте:

* Создайте полную резервную копию вашего сайта WordPress
* Деактивируйте все плагины на вашем сайте, перейдя на страницу плагинов, выбрав _Deactivate_ из массовых действий, а затем нажав _Apply_

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Чтобы включить Multisite, сначала подключитесь к вашему сайту с помощью FTP-клиента или файлового менеджера cPanel и откройте файл wp-config.php для редактирования.

Перед строкой _*That’s all, stop editing! Happy blogging.*_ добавьте следующий фрагмент кода:

```php
define('WP_ALLOW_MULTISITE', true);
```

Сохраните и загрузите ваш файл wp-config.php обратно на сервер.

С включенной функцией Multisite на вашем сайте, теперь пришло время настроить вашу сеть.

Перейдите в **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Теперь вам нужно сообщить WordPress, какую структуру доменов вы будете использовать для сайтов в вашей сети: поддомены или подпапки.

Если вы выберете поддомены, вам необходимо изменить настройки DNS для сопоставления доменов и убедиться, что настроены _**wildcard subdomains**_ для вашей сети Multisite.

Вернитесь к Network Setup, задайте название для вашей сети и убедитесь, что адрес электронной почты в поле Network admin email правильный. Нажмите _Install_, чтобы продолжить.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Добавьте этот код, предоставленный WordPress, в ваш _**wp-config.php**_ :

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

И этот код, также предоставленный WordPress, в ваш файл _**.htaccess**_ :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Используйте FTP-клиент или файловый менеджер (если вы используете что-то вроде cPanel, например) для копирования и вставки кода в эти два файла.

Наконец, войдите снова на ваш сайт WordPress, чтобы получить доступ к вашей сети Multisite.

**Важно проверить и убедиться, что вы можете создать подсайт в вашей установке WordPress Multisite, прежде чем устанавливать Ultimate Multisite.**

Чтобы создать подсайт:

1. Откройте wp-admin вашего сайта
2. Перейдите в My Sites > Sites (/wp-admin/network/sites.php)
3. Нажмите Add New вверху
4. Заполните все поля:
   * Site Address — Никогда не используйте “www”
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * Site Title — Название сайта, может быть изменено позже
   * Admin Email — Установите как первоначального администратора подсайта

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

После заполнения всех полей нажмите кнопку «Add site». Как только новый подсайт будет создан, перейдите к нему, чтобы убедиться, что подсайт функционирует.

## Общие проблемы:

### 1\. Я могу создавать новые сайты, но они недоступны.

Если вы выбрали поддомены, вам также необходимо настроить wildcard subdomains для вашей сети Multisite.

Для этого перейдите в панель управления хостинг-аккаунта вашего сайта (например, cPanel/Plesk/Direct Admin в зависимости от вашего хостинг-провайдера).

Найдите опцию «Domains» или «Subdomains». В некоторых панелях управления она называется «Domain administration».

В поле поддомена введите звёздочку (*). Затем вам будет предложено выбрать доменное имя, под которым вы хотите добавить поддомен.

Корневой каталог для выбранного доменного имени будет автоматически определён. Нажмите кнопку _Create_ или _Save_, чтобы добавить ваш wildcard поддомен. Запись должна выглядеть так: “*.[mydomain.com](http://mydomain.com)”
