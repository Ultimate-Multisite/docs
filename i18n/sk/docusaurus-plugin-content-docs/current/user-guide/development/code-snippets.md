---
title: Kódové fragmenty
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kód fragmenty pre v2

V podstate sa kód fragmenty pre **WordPress** používa na vykonávanie určitých akcí, ktoré by inak mohli vyžadovať samostatný menší plugin. Takýkoli kód fragmenty sa umiestňuje do jedného z základných súborov WordPressu alebo témy (obvykle do súboru functions.php vašej témy) alebo sa môže použiť ako MU plugin.

V tomto článku vám ukážeme tri kód fragmenty, ktoré môžete použiť s **Ultimate Multisite v2**:

  * [**Zmena polohy položky menu Účet**](#changing-the-position-of-the-account-menu-item)

  * [**Ako zistiť, či používateľ je pod daným plánom a/alebo má aktívnu ponuku**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Vyriešenie problémov s CORS pri Font-Icons v mapovaných doménach**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Zmena polohy položky menu Účet

Aby ste zmenili polohu položky menu Účet na dashboarde vášho klienta, stačte pridať tento kód fragment do súboru functions.php aktívnej témy vašej hlavnej stránky. Môžete tiež vložiť kód fragment v jeden z vašich mu-pluginov alebo prispôsobený plugin.

add_filter('wu_my_account_menu_position', function() { return 10; // Upravte túto hodnotu, aby ste menu umiestnili na požadovanú polohu.

Aby skontrolovať, či je predplatné aktívne, môžete použiť funkciu:

`wu_is_active_subscriber($user_id)`

Tu je príklad kódovku, ktorá skontroluje, či je aktuálny používateľ pod konkrétnym plánom (_Plan ID 50_) a či je jeho predplatné aktívne.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // POUŽÍVAČ JE ČLEN PLÁNU A JE Jeho PREDPLATNÉ AKTÍVNE, UROBTE TO
} else { // POUŽÍVAČ NIE JE ČLEN PLÁNU -- NEBO -- JE Jeho PREDPLATNÉ NIE JE AKTÍVNE, UROBTE INÉ SVETR
} // koniec if;
```

Pozrite, že `_**wu_has_plan**_` vyžaduje "Plan ID", aby fungoval.

Aby ste získali ID plánu, môžete použiť sekciu **Ultimate Multisite > Products**. ID každého produktu sa zobrazí vpravo v tabuľke.

Dôležité je si, že používatelia môžu byť predplatneni len na **Plan**, nie na balíček alebo službu, pretože sú to len doplnky k **Planu**.

![Zoznam produktov s ID plánov](/img/admin/products-list.png)

## Riešenie problémov s CORS pri fontoch Font-Icons v mapovaných doménach
## Riešenie problémov s CORS pri fontoch Font-Icons v mapovaných doménach

Po mapovaní domény na poddoménu môžete zistiť, že stránka má problémy s načítavaním vlastných fontov. Toto je spôsobené blokovaním preprezeného pôvodu (cross-origin block) v nastaveniach vášho servera.

Keďže sú súbory fontov tém neredeyse vždy načítaní priamo z CSS, náš plugin mapovania domén nevie URL adresy prepísať na použitie mapovanej domény namiesto pôvodnej, takže aby ste tento problém vyriešili, budete musieť upraviť svoje nastavenia serverových súborov.

### Apache

Do do v svojom .htaccess sú pridať:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Do do svojom server konfiguračnom súbore (miesto sa v závislosti od servera líši) pridať:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
