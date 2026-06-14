---
title: WordPress Multisite-ты қалай орнату керек
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite-ты қалай орнатуға болады?

WordPress Multisite арқылы бір орнатуда сайттардың желісін құруға боласыз. Бұл стандартты функция, бірақ ол боджетінен қосылмаған.

:::tip
Ultimate Multisite-та бұл барлық процесті автоматтандыратын **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** бар. Егер сізде Ultimate Multisite орнатылса, төмендегі қолмен жасалатын қадамдарды орындаудың орнына осы wizard-ды пайдалануды ұсынамыз.
:::

Ultimate Multisite желіге арналған плагин болғандықтан, бұл нұсқаулықта WordPress Multisite-ты қолмен орнату және құру туралы үйренесіз. Бұл мәтін WPBeginner-ден [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) мақаласынан алынды.

**Multisite желіңізді жасау алдында ескеруге тиіс нәрселер:**

  * Жақсы WordPress хостингті алыңыз! Желідегі сайттар бір сервер ресурстарын бөліседі.

  * Егер сізде тек аз трафикті бар бірнеше сайт болса, ортақ хостинг сізге ыңғайлы болуы мүмкін.

  * Көптеген **Managed WordPress hosting providers** Multisite-ты дайын күйінде ұсынады (олар WordPress-ті бұрыннан іске қосылған және сіз үшін конфигурацияланған Multisite-пен орнатып береді). Бұл WP Engine, Closte, Cloudways сияқты хостинг провайдерлері үшін осы. Хостинг провайдериңіз үшін бұл мәселені білмейтін болса, бұл нұсқаулықты бастамас бұрын олармен байланысыңыз.

  * Сонымен қатар FTP арқылы WordPress орнату және файлдарды өңдеуді үйрену пайдалы болады.

_**МАҢЫЗДЫ**_ **:** Егер сіз бар WordPress сайтында Multisite желісін құрып жатсаңыз, мыналарды ұмытпаңыз:

  * WordPress сайттың толық резерв копиін жасаңыз.

  * Сайттағы барлық плагиндерді плагиндер бетіне өтіп, bulk actions (жоғары көлемдегі әрекеттер) арқылы _Deactivate_ (өшіру) опциясын таңдап, содан кейін _Apply_ (Қолдану) батырмасын басыңыз.

<!-- Скриншот недоступен: страница плагинов WordPress с действием массовой деактивации -->

Чтобы включить Multisite, сначала подключитесь к вашему сайту с помощью FTP-клиента или файлового менеджера cPanel и откройте ваш файл wp-config.php для редактирования.

Перед строкой _*Вот и всё, прекратите редактировать! Удачного блоггинга.*_ добавьте следующий фрагмент кода:

define('WP_ALLOW_MULTISITE', true);

Сохраните и загрузите ваш файл wp-config.php обратно на сервер.

После включения функции Multisite на вашем сайте пришло время настроить вашу сеть.

Перейдите в **Tools » Network Setup** (Инструменты » Настройка сети)

Теперь вам нужно сказать WordPress, какую структуру доменов вы будете использовать для сайтов в вашей сети: поддомены или подкаталоги.

Если вы выбираете поддомены, вы должны изменить настройки DNS для сопоставления доменов и убедиться, что настроено _**wildcard subdomains**_ (поддомены-заглушки) для вашей Multisite сети.

Вернитесь в Настройку сети, дайте название своей сети и убедитесь, что адрес электронной почты в письме администратора сети правильный. Нажмите _Install_ (Установить), чтобы продолжить.

Добавьте этот код, предоставленный WordPress, в ваш файл _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

А этот код, также предоставленный WordPress, в ваш файл _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# добавить завершающий слэш к /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Кодты:
RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP клиентін немесе файл менеджерін (мысалы, cPanel сия пайдалансаңыз) қолданып, бұл екі файлға кодты көшіріп қойыңыз.

Соңында, Ultimate Multisite-қа қол жеткізу үшін WordPress сайтыңызға қайта кіріңіз.

**Ultimate Multisite-ты орнату алдында WordPress Multisite орнатылымызда субсайт құру мүмкіндігін тексеріп, оны жасауға болатынын қамтамасыз ету өте маңызды.**

Субсайт құру үшін:

  1. Сайттарыңыздың wp-admin-ін ашыңыз

  2. My Sites > Sites (/wp-admin/network/sites.php) жолына өтіңіз

  3. Жоғарғы жақтан Add New (Жаңасын қосу) батырмасын басыңыз

  4. Барлық өрістерді толтырыңыз:

  * Site Address — "www" ни ешқашан қолданбаңыз

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Сайттың атауы, кейін өзгертуге болады

  * Admin Email — Субсайт үшін бастапқы администратор пайдалану ретінде орнатыңыз

![WordPress Multisite-та жаңа сайт форматы](/img/admin/sites-list.png)

Өрістерді толтырғаннан кейін, "Add site" (Сайт қосу) батырмасын басыңыз. Жаңа субсайт жасалғаннан кейін, оның жұмыс істеп тұрғанын тексеру үшін оған кіріп көріңіз.

## Көрінеті мәселелер:

### 1. Мен жаңа сайттар құра аламын, бірақ олар қол жетімсіз.

Егер сіз субдомендерді таңдасаңыз, Multisite желіңіз үшін вайлд-субдомендерді де орнату қажет болады.

Бұл үшін хостингтегі веб-сайттың басқару панелінің (мысалы cPanel/Plesk/Direct Admin хостинг провайдеушыңызға байланысты) дашбордына өтіңіз.

"Domains" (Домендер) немесе "Subdomains" (Субдомендер) деген опцияны табыңыз. Кейбір басқару панельдерде ол "Domain administration" (Доменді басқару) деп аталады.

Subdomain өрісіне жұлды (*) енгізіңіз. Содан кейін, сізге бұл дээрдің қай жеріне қосуға тілектесіңіз деген сұрақ қойылады.

Таңдалған домен атының негізгі құжат көзі автоматты түрде анықталады. Вайлдайд (wildcard) дээрді қосу үшін _Create_ немесе _Save_ батырмасына басыңыз. Кіріс " *.[mydomain.com](http://mydomain.com)" сияқты көрінуі керек.
