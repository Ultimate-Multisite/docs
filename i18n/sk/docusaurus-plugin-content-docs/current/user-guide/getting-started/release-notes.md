---
title: Zmeny vเวอร์zi
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Poznámky kเวอร์zi {#release-notes}

## Verzia 2.13.0 — Vydaná v dátume 2026-06-05 {#version-2130--released-on-2026-06-05}

Nové: Pridaná podpora suverénnych prenájomov (sovereign-tenant) pre účty zákazníkov, procesy pokladne, fakturácie, webu, faktúry, prepínania šablon a mapovania domén, aby mohli prenájomné siete zákazníkov presmerovať zákazníkov späť na hlavný web pre správanie spravované.
Nové: Pridané kontroly pre obnovenie prístupu (renewal-credential checks) pre opakujúce sa členstvá, aby brány mohli deaktivovať automatické obnovovanie, ak chýba uložená faktura, predplatné alebo token z vaultu.
Nové: Pridaná HMAC-verifikovaná publishing pre neuskutočenú vytvorenie webu (pending site creation), aby bolo konfigurácia pokladne a webu na hostoch s zpoždenej prácou v pozadí spoliehania na to bola spoľahlivejšia.
Nové: Pridané body rozvoja pre URL-ov SSO, základné domény formulára pokladne a automatické vytváranie záznamov domén.
Oprava: SSO je teraz spoľahlivejší cez mapované domény, anonymné návštevy brokera, odhlásenie a konflikty medzi pluginmi.
Oprava: Neuskutočený rozvoj webu (pending site creation) sa teraz obnovuje z zastaraných flag publikovania a vyhýba situáciu, že zákazníci zostanú zaseknutí na obrazovke vytvorenia webu.
Oprava: Záznamy domén nebudú vytvárať pre zdieľané základné domény formulára pokladne, a neuskutočené pozadné úlohy poskytovateľa hostov sa vyhne, ak nie je aktívna integrácia.
Oprava: Koncové prípady (edge cases) ako pokladne, faktura, obnovenie hesla, overenie e-mailu, prepínanie šablon, cesty (tours) a dashboard zákazníka už nebránia normálne prechádzanie zákazníckych procesov.
Oprava: Rozšírené e-maily teraz zachovávajú súkromie odberateľov, zatiaľ čo sa vyhýbajú kritickým chybám SMTP/plugin pri neúplných zoznamoch odberateľov alebo transportoch poczty.
Oprava: Koncové prípady ako obnovenie členstva, zobrazenie dátumu vyprázdnenia a spracovanie platieb teraz vyhýbajú okamžité vyprázdnenie, výpadky alebo neuskutočené povinné platby.
Vylepšené: Kompatibilita s WordPressom je testovaná až do verzie 7.0, produkčné aktíva Vue sa znovu stavajú z npm zdrojov a Cypress end-to-end pokrytie teraz vyučuje viac procesov pokladne, nastavovania, SSO a brán.

## Verzia 2.12.0 — Vydaná v dátume 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nové: Pridaný Hostinger (hPanel) ako podporovaný poskytovateľ hostingu s integráciou mapovania domén.
- Nové: Site Exporter teraz spracová balíčky importu sietí pre uprostúpený obnovu siete na úrovni celého webu.
- Oprava: E-mailové rozoslania BCC teraz používajú neoznámený hlavičku cieľ, aby sa zabránilo zobrazeniu adresárov cieľov.
- Oprava: Dátum vyprázdnenia členstva nie je už po uložení s nečíslo dátumovej hodnoty poškodený.
- Oprava: Aktualizácie členstva v Stripe teraz správne odstránia zľavy bez volania zastarej API funkcie deleteDiscount.
- Oprava: Precsovanie SSO na sitoch mapovaných domén je teraz obmedzené, aby sa zabránilo nekončným cyklom precsovania.
- Oprava: Výber obrázka v nástroji konfigurácie (Setup wizard) teraz správne aktualizuje podkladový datový model.
- Oprava: CLI Site Exporter teraz zachová správny štandardný výber siete.
- Vylepšené: Odstránili balíkový wp-cli z balíčka pluginu, čo znížilo veľkosť pluginu.

## Verzia 2.11.0 — Vydaná v dátume 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nové: Site exporty teraz balia samostatný `index.php` pre to, aby sa ZIP mohol nainštalovať na novom hostovi bez samostatnej inštalácie pluginu.
- Nové: Export siete umožňuje administrátorom exportovať všetky poddomény do jedného archívu z admin stránky Site Export.
- Nové: Povolenie pre přepínač plánu Site Templates je teraz vynucené pomocou západkového reťazca, čo správne obmedzuje dostupnosť šablon podľa limitov plánu.
- Nové: Editor formulára na pokladni upozorňuje, ak sa produkt pridá bez skonfigurovania povinného pole.
- Nové: Odkazná záložka nastavení Import/Export jasne popisuje jej rozsah a je priamo spojená s nástrojom Site Export.

## Verzia 2.10.0 — Vydaná v dátume 2026-05-05 {#version-2100--released-on-2026-05-05}

Nové: Prívodca konfigurácie PayPal pre manuálne zadávanie údajov s flagom OAuth pre hladké nastavenie gatewayu.
Nové: Panel zákazníka zmenený šablónou s kartou current-template, trvalým grídou a tlačidlom **Reset current template**.
Oprava: Premienenie šablón neblokuje viac UI pri chube AJAX.
Oprava: Povolenia pre prepínanie šablón sú zabezpečené proti neoprávnenému prístupu.
Oprava: Vstupy pre override sita sú validované pred uohrazením.
Oprava: Požiadavka na fakturačnú adresu sa zobrazuje teraz, ak je adresa prázdna.
Oprava: Upozornenia na zastarej deprecácii null-to-string v PHP 8.1 vyriešili.
Oprava: Aktuálne lazy-loaded pred hook init pre zobrazenie problémov s časovaním.
Oprava: Filtrovaná cesta SSO je respektovaná vo všetkých toku prihlásenia.
Oprava: Možnosti prázdneho identita sita sú zachované pri uohrazení.

## Verzia 2.9.0 — Vydaná v 2026-04-30 {#version-290--released-on-2026-04-30}

Nové: Pridato export a import jedného sita pod **Tools > Export & Import**.
Oprava: ZIP súbory pre export sa teraz servujú cez autentizovaný bod stiahnutia.
Oprava: Riziko SQL injectionu a problémy s dotazmi v nečakaných export/import dotazoch opravené.
Oprava: Neopublikované sita sa nezobraza, ak admin manuálne overí e-mail zákazníka.
Oprava: Ztracené záznamy pending_site sú uprínane odstránené pri chýbaní členstva.
Oprava: Odstupenie v paddingu navigácie nastavení a vyhľadávania opravené.
Oprava: Neopublikované sita sa teraz zobrazujú prvej v zobrazení All Sites.
Oprava: Hlavička User-Agent poskytovateľa snímok (mShots) pridaná na prevenciu chýb 403.
Oprava: Kolo závislosti správy cronu pre import je vyriešila.
Oprava: Tour ID sú normalizované na podčinky v kľúčoch nastavení používateľa.
Vylepšené: Používa sa teraz ZipArchive namiesto Alchemy/Zippy pre lepšiu kompatibilitu.

## Verzia 2.8.0 — Vydaná v 2026-04-29 {#version-280--released-on-2026-04-29}

Nové: Pridanie prepínaču Jumper v rozhraní nastavení "Other Options".
Nové: Pridaná kolónka Stav do tabu formulálov na objednávku (checkout forms list table).
Nové: Loader súboru sunrise Addon pre prispôsobené rozšírenia sunrise MU-plugin.
Vylepšené: Odstránenie nastavenia zapojenia sa do reportovania chýb s vady nastavení.
Oprava: Kartička stránky ďakujem — obrázok je teraz obmedzen a odkazy sú správne stylované.
Oprava: Poskytovateľ snímok obrazovky zmenený z thum.io na WordPress.com mShots.
Oprava: Zapojenie a štandardná rola nastavujú sa teraz správne pri novom inštalácii.
Oprava: `get_site_url()` už nevrací prázdny výsledok, ak doména obsahuje port.
Oprava: Klonovanie médií súborov je teraz správne vykonávané, keď bolo nastavenie `copy_media` prázdne.
Oprava: Cache objektov sa teraz správne zruší po zápise sitemeta pomocou network-activate.
Oprava: Automatické promocytovanie prispôsobeného doménu na primárne pri overovaní DNS pre domény s 3 častmi.
Oprava: Očakávanie členstva sa zrušuje, keď je vyčpalé platobné obdobie upravené.
Oprava: Kontrola silnej hesla sa obnoví po odmienenom promptu na prihlásenie v rámci formulára objednávky.
Oprava: Neomezené načítanie stránok (infinite page reload) zastavené na stránke ďakujem, ak je stránka už vytvorená.
Oprava: Možnosť registrácii zriadenia sa synchronizuje pri aktivácii pluginu a ušetrení nastavení.
Oprava: Pridaná ochrana proti nulovej expirácii v `calculate_expiration` pre kompatibilitu s PHP 8.4.
Oprava: Duplikované registráции sú blokované, ak zákazník už má aktívne členstvo.
Oprava: Pridaná kontrola na nulový hodnotu pre `date_expiration` v formulári objednávky.
Oprava: Zriadenie stránky je zosilnené — obmedzenia, inferencia členstva, promocytovanie domény.
Oprava: Štátna etiketá pre kontrolu pred inštaláciu je opravená na NEAKTIVNÉ pri neúspesnom kontrole.
Oprava: Doména použitá pre URL-ov overovania e-mailov v formulári objednávky.
Oprava: Automatické prihlásenie po objednávke, ak nie je prítomné pole s heslem.
Oprava: Bezplatné členstvá už neexpirujú — považované za životné.

- Oprava: Bránka overovania e-mailu zatvára publikovanie strán, kým zákazník neoverí e-mail.
- Oprava: Korekcia základnej cesty (base path) a cesty identitatis v API endpoint SES v2.
- Oprava: Hook `wu_inline_login_error` je teraz emitovaný v bloku zachytávania chyby pred odoslaním.
