---
title: Как установить WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Как установить WordPress Multisite?

WordPress Multisite позволяет иметь сеть сайтов в одной установке. Это встроенная функция, но по умолчанию она не активна.

:::tip
Ultimate Multisite включает **[встроенный мастер настройки Multisite](./multisite-setup-wizard)**, который автоматизирует весь этот процесс. Если у вас установлен Ultimate Multisite, мы рекомендуем использовать мастер вместо выполнения ручных шагов ниже.
:::

Поскольку Ultimate Multisite — это plugin только для сети, в этом руководстве вы узнаете, как установить и настроить WordPress Multisite вручную. Этот текст основан на [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) от WPBeginner.

**На что обратить внимание перед созданием вашей мультисайт-сети:**

  * Выберите хороший WordPress-хостинг! Сайты в сети используют одни и те же ресурсы сервера.

  * Если у вас всего пара сайтов с низким трафиком, вам, скорее всего, подойдет общий хостинг.

  * Большинство **провайдеров управляемого WordPress-хостинга** предлагают Multisite из коробки (они устанавливают WordPress с уже активированным и настроенным Multisite для вас). Так делают WP Engine, Closte, Cloudways и т. д. Если вы не уверены, относится ли это к вашему хостинг-провайдеру, свяжитесь с его поддержкой, прежде чем продолжать это руководство.

  * Также полезно быть знакомым с установкой WordPress и редактированием файлов с помощью FTP .

_**ВАЖНО**_ **:** Если вы настраиваете мультисайт-сеть на существующем WordPress-сайте, не забудьте:

  * Создать полную резервную копию вашего WordPress-сайта

  * Деактивировать все plugins на вашем сайте, перейдя на страницу plugins, выбрав _Деактивировать_ в массовых действиях и затем нажав _Применить_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Чтобы включить Multisite, сначала подключитесь к своему сайту с помощью FTP-клиента или файлового менеджера cPanel и откройте файл wp-config.php для редактирования.

Перед строкой _*That’s all, stop editing! Happy blogging.*_ добавьте следующий фрагмент кода:

define('WP_ALLOW_MULTISITE', true);

Сохраните и загрузите файл wp-config.php обратно на сервер.

Теперь, когда функция multisite включена на вашем сайте, пришло время настроить вашу сеть.

Перейдите в **Инструменты » Настройка сети**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Теперь вам нужно сообщить WordPress, какую структуру доменов вы будете использовать для сайтов в вашей сети: поддомены или подкаталоги.

Если вы выбираете поддомены, необходимо изменить настройки DNS для сопоставления доменов и убедиться, что для вашей мультисайт-сети настроены _**wildcard subdomains**_.

Вернувшись к настройке сети, задайте название для вашей сети и убедитесь, что адрес электронной почты в поле email администратора сети указан правильно. Нажмите _Установить_, чтобы продолжить.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Добавьте этот код, предоставленный WordPress, в ваш _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

И этот код, также предоставленный WordPress, в ваш файл _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Используйте FTP-клиент или файловый менеджер (например, если вы используете что-то вроде cPanel), чтобы скопировать и вставить код в эти два файла.

Наконец, повторно войдите на свой WordPress-сайт, чтобы получить доступ к вашей мультисайт-сети.

**Важно протестировать и убедиться, что вы можете создать подсайт в вашей установке WordPress Multisite до установки Ultimate Multisite.**

Чтобы создать подсайт:

  1. Откройте wp-admin ваших сайтов

  2. Перейдите в Мои сайты > Сайты (/wp-admin/network/sites.php)

  3. Нажмите Добавить новый вверху

  4. Заполните все поля:

  * Адрес сайта — никогда не используйте “www”

  * Поддомен: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Подкаталог: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Название сайта — название сайта, можно изменить позже

  * Email администратора — задается как начальный пользователь-администратор для подсайта

![Форма добавления нового сайта в WordPress Multisite](/img/admin/sites-list.png)

После заполнения полей нажмите кнопку "Добавить сайт". После создания нового подсайта перейдите к нему и убедитесь, что подсайт работает.

## Распространенные проблемы: {#common-problems}

### 1\. Я могу создавать новые сайты, но они недоступны. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Если вы выбрали поддомены, вам также нужно настроить wildcard subdomains для вашей мультисайт-сети.

Для этого перейдите в dashboard панели управления хостинг-аккаунтом вашего сайта (например, cPanel/Plesk/Direct Admin в зависимости от вашего хостинг-провайдера).

Найдите опцию “Домены” или “Поддомены”. В некоторых панелях управления она обозначена как “Администрирование доменов”.

В поле поддомена введите звездочку (*). Затем система должна попросить вас выбрать доменное имя, под которым вы хотите добавить поддомен.

Корневой каталог документа для выбранного доменного имени будет определен автоматически. Нажмите кнопку _Создать_ или _Сохранить_, чтобы добавить ваш wildcard subdomain. Запись должна выглядеть как “*.[mydomain.com](http://mydomain.com)”
