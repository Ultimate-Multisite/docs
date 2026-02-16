---
title: Jak zainstalować WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Jak zainstalować WordPress Multisite?

WordPress Multisite pozwala na prowadzenie sieci witryn w ramach jednej instalacji. To wbudowana funkcja, ale domyślnie jest nieaktywna.

:::tip
Ultimate Multisite zawiera **[wbudowany Kreator konfiguracji Multisite](./multisite-setup-wizard)**, który automatyzuje cały ten proces. Jeśli masz zainstalowany Ultimate Multisite, zalecamy skorzystanie z kreatora zamiast wykonywania poniższych kroków ręcznie.
:::

Ponieważ Ultimate Multisite to plugin działający wyłącznie w trybie sieciowym, w tym poradniku dowiesz się, jak ręcznie zainstalować i skonfigurować WordPress Multisite. Tekst powstał na podstawie artykułu [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) z WPBeginner.

**Na co zwrócić uwagę przed utworzeniem sieci multisite:**

  * Wybierz dobry hosting WordPress! Witryny w sieci współdzielą te same zasoby serwera.

  * Jeśli masz tylko kilka stron o niskim ruchu, hosting współdzielony prawdopodobnie wystarczy.

  * Większość **dostawców zarządzanego hostingu WordPress** oferuje Multisite od razu (instalują WordPress z już aktywowanym i skonfigurowanym Multisite). Tak jest w przypadku WP Engine, Closte, Cloudways itp. Jeśli nie wiesz, czy Twój dostawca hostingu to oferuje, skontaktuj się z jego pomocą techniczną przed kontynuowaniem tego poradnika.

  * Dobrze jest też znać podstawy instalacji WordPress i edycji plików przez FTP.

_**WAŻNE**_ **:** Jeśli konfigurujesz sieć multisite na istniejącej witrynie WordPress, nie zapomnij:

  * Utworzyć pełnej kopii zapasowej witryny WordPress

  * Dezaktywować wszystkie pluginy na stronie — przejdź do strony pluginów, wybierz _Dezaktywuj_ z akcji zbiorczych, a następnie kliknij _Zastosuj_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Aby włączyć Multisite, najpierw połącz się ze swoją witryną za pomocą klienta FTP lub menedżera plików cPanel i otwórz plik wp-config.php do edycji.

Przed linią _*That's all, stop editing! Happy blogging.*_ dodaj następujący fragment kodu:

define('WP_ALLOW_MULTISITE', true);

Zapisz plik wp-config.php i prześlij go z powrotem na serwer.

Po włączeniu funkcji multisite na Twojej witrynie czas skonfigurować sieć.

Przejdź do **Narzędzia » Konfiguracja sieci**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Teraz musisz określić, jakiej struktury domen będziesz używać dla witryn w sieci: subdomen czy podkatalogów.

Jeśli wybierzesz subdomeny, musisz zmienić ustawienia DNS dla mapowania domen i skonfigurować _**subdomeny z symbolem wieloznacznym (wildcard)**_ dla swojej sieci multisite.

Wróć do Konfiguracji sieci, nadaj tytuł swojej sieci i upewnij się, że adres e-mail w polu E-mail administratora sieci jest prawidłowy. Kliknij _Zainstaluj_, aby kontynuować.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Dodaj ten kod, wygenerowany przez WordPress, do pliku _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

A ten kod, również wygenerowany przez WordPress, do pliku _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# dodaje końcowy ukośnik do /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Użyj klienta FTP lub menedżera plików (jeśli korzystasz np. z cPanel), aby skopiować i wkleić kod do tych dwóch plików.

Na koniec zaloguj się ponownie do swojej witryny WordPress, aby uzyskać dostęp do sieci multisite.

**Ważne jest, aby przetestować i upewnić się, że możesz utworzyć podstronę (subsite) w instalacji WordPress Multisite, zanim zainstalujesz Ultimate Multisite.**

Aby utworzyć podstronę:

  1. Otwórz wp-admin swojej witryny

  2. Przejdź do Moje witryny > Witryny (/wp-admin/network/sites.php)

  3. Kliknij Dodaj nową u góry

  4. Wypełnij wszystkie pola:

  * Adres witryny — Nigdy nie używaj „www"

  * Subdomena: [adreswitryny.twojadomena.com](http://adreswitryny.twojadomena.com)

  * Podkatalog: [twojadomena.com/adreswitryny](http://twojadomena.com/adreswitryny)

  * Tytuł witryny — Tytuł strony, można go później zmienić

  * E-mail administratora — Ustawiany jako początkowy administrator podstrony

![Formularz dodawania nowej witryny w WordPress Multisite](/img/admin/sites-list.png)

Po wypełnieniu pól kliknij przycisk „Dodaj witrynę". Po utworzeniu nowej podstrony wejdź na nią, aby upewnić się, że działa prawidłowo.

## Najczęstsze problemy:

### 1\. Mogę tworzyć nowe witryny, ale nie są one dostępne.

Jeśli wybrałeś subdomeny, musisz również skonfigurować subdomeny z symbolem wieloznacznym (wildcard) dla swojej sieci multisite.

Aby to zrobić, przejdź do panelu sterowania konta hostingowego (np. cPanel/Plesk/Direct Admin — w zależności od dostawcy hostingu).

Znajdź opcję „Domeny" lub „Subdomeny". W niektórych panelach sterowania nazywa się to „Zarządzanie domenami".

W polu subdomeny wpisz gwiazdkę (*). Następnie zostaniesz poproszony o wybranie nazwy domeny, do której ma zostać dodana subdomena.

Katalog główny dla wybranej domeny zostanie wykryty automatycznie. Kliknij przycisk _Utwórz_ lub _Zapisz_, aby dodać subdomenę z symbolem wieloznacznym. Wpis powinien wyglądać tak: „*.[mojadomena.com](http://mojadomena.com)"
