---
title: Kaip įdėti įvykdyti WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kaip instaluoti WordPress Multisite?

WordPress Multisite leidžia turėti tinklą svetaini. Tai yra įtrauktas funkcija, bet ji neaktyvuota kaip pagrindinis nustatymas.

:::tip
Ultimate Multisite sujungia **[įtrauktą Multisite nustatymo žaizdinetę](./multisite-setup-wizard)**, kuri automatizuojasi visą šią procedūrą. Jei turite įdaliotą Ultimate Multisite, mes siunčiame naudoti šią žaizdinę, o ne valdyti manualias instrukcijas, pateiktas toliau.
:::

Kadangi Ultimate Multisite yra tinklo pluginas, šio tutorialio metu mokymasis, kaip nustatyti ir įdalioti WordPress Multisite manuāli. Šis tekstas bazui yra [Kaip įdalioti ir nustatyti WordPress Multisite tinklą](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), iš WPBeginner.

**Dažnai ką reikia atkreipti dėmesį prieš kūryti savo multisite tinklą:**

  * Gaukite gausų WordPress hostingu! Tinklai svetainės dalina vieną serverio resursus.

  * Jei turite tik kelias svetainis su mažais trafikais, deltinis hostingas gali būti jums tinkamas.

  * Labiausiai **valdyti WordPress hostingo paslaugos** siūlo Multisite iš karto (jie įdalioti WordPress su Multisite jau aktyvuotu ir nustatytumais). Tai taigi tinka WP Engine, Closte, Cloudways ir kitoms. Jei net esate tikri, ar tai taigi jūsų hostingo paslaugos, susitikite su jų palaikymu prieš tęsant šį tutorialį.

  * Tai taip pat geras žinoti, kaip įdalioti WordPress ir redaguoti failus naudojant FTP.

_**SVARBU**_ **:** Jei nustatote multisite tinklą esančiam WordPress svetaini, ne pamiršykite:

  * Sukurti visą jūsų WordPress svetainės rezervą (backup)

  * Deaktyvuoti visus pluginus savo svetaine, eiti į jūsų pluginų puslapį ir pasirinkti _Deactivate_ iš grupinių veiksmų ir tada paspausti _Apply_.

Aby włączyć Multisite, najpierw podłącz się do swojej strony za pomocą klienta FTP lub menedżera plików cPanel i otwórz plik `wp-config.php` do edycji.

Przed linią _*To wszystko, przestań edytować! Miłego blogowania.*_ dodaj następujący fragment kodu:

```php
define('WP_ALLOW_MULTISITE', true);
```

Zapisz i załaduj plik `wp-config.php` z powrotem na serwerze.

Po włączeniu funkcji Multisite na swojej stronie nadszedł czas, aby skonfigurować swoją sieć.

Przejdź do **Narzędzia » Konfiguracja sieci** (Tools » Network Setup).

Teraz musisz powiedzieć WordPressowi, jakiego typu strukturę domen będziesz używać dla stron w swojej sieci: poddomen czy podkatalogów.

Jeśli wybierzesz poddomeny, musisz zmienić ustawienia DNS dotyczące mapowania domen i upewnić się, że konfigurujesz _**poddomeny dzikie (wildcard subdomains)**_ dla swojej sieci Multisite.

Wróć do Konfiguracji sieci, nadaj tytuł swojej sieci i upewnij się, że adres e-mail w polu administracyjnego adresu e-mail sieci jest poprawny. Kliknij _Zainstaluj_ (Install), aby kontynuować.

Dodaj ten kod, dostarczony przez WordPressa, do swojego pliku _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

I ten kod, również dostarczony przez WordPressa, do pliku _**.htaccess**_:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# dodaj końcowy ukośnik do /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Naudokite FTP klientą arba mygtuku (jei naudojate kažką panašio, kaip cPanel, pavyzdžiui) kopijuoti ir įkleisti šį kodą į šiuos du failus.

Vienai laiko atnaujinkite savo WordPress svetainės prieigos duomenis, kad galėtumėte pasiekti savo multisite tinklą.

**Tai svarbu patestuoti ir užtikrinti, kad turėtumėte galėti sukurti subsaitą savo WordPress Multisite instalacijoje prieš įdalyvę Ultimate Multisite.**

Subsaitos kūrimas:

  1. Atidarykite savo svetainės wp-admin.
  2. Navigruokite į My Sites > Sites (/wp-admin/network/sites.php).
  3. Spauskite "Add New" (Įdaryti naują) viršuje.
  4. Pildykite visus laukus:

* Site Address — Niekada nenaudoti „www“.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Svetainės pavadinimas, galite pakeisti vėliau.

* Admin Email — Nustatykite kaip pradinį administratorį vartotoją subsaitai.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Pildant laukus, spauskite mygtuką "Add site" (Įdalyvę svetainę). Kai nauja subsite bus sukurta, pasiekitės ją ir patikrinkite, ar ji veikia tinkamai.

## Dažniai susiję problemos: {#add-a-trailing-slash-to-wp-admin}

### 1. Aš galiu kurti naujas svetainis, bet jie nėra pasiekiami. {#common-problems}

Jei pasirinkote subdomainus, turite nustatyti ir wildcard subdomainus savo multisite tinklui.

To tam galite eiti į savo svetainės hostingu paskyros kontrolinio panelį (pvz., cPanel/Plesk/Direct Admin priklausomai nuo jūsų hostingu tiekėjo).

Raskite variantą „Domains“ arba „Subdomains“. Kai kuriuose kontroliniose paneliuose tai yra pažymėta kaip „Domain administration“ (Domino administravimas).

Į įvestinoje subdominio laukely pateikite žvaigždutinį simbolį (*). Tada sistema uždužios jums pasirinkyti domainą, kur į subdomėnį norite pridėti.

Jūsų atvykimo (document root) vietų taikant ieškivalai automatiniai pasieks. Pasirinkite _Create_ arba _Save_ mygtuką, kad pridėtumėte savo wildcard subdominį. Įvestinis laukas turėtų atrodyti taip: “*.[mydomain.com](http://mydomain.com)”
