---
title: Úvodník na nastavovanie multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Konfigurácia nástroja na nastavovanie Multisite

Ultimate Multisite obsahuje vbudovaný nástroj, ktorý automaticky premení štandardnú instaláciu WordPress do siete WordPress Multisite. To vám ušetří manuálne upravovanie súboru `wp-config.php` alebo spúšťanie príkazov na databázu.

:::tip
Ak je váš WordPress už nainštalovaný ako sieť Multisite, môžete tento krok úplne prejsť. Nástroj sa zobrazí len vtedy, ak Multisite ešte nie je aktivovaný.
:::

## Kedy sa nástroj zobrazí?

Keď aktivujete Ultimate Multisite na štandardnej (nie-Multisite) instalácii WordPress, plugin určí, že Multisite nie je aktivovaný, a automaticky vás presmeruje na Nástroj na nastavovanie Multisite namiesto bežného nástroja na nastavovanie.

Môžete ho tiež použiť priamo v **WP Admin > Ultimate Multisite > Multisite Setup**.

## Predchádzajúce požiadavky

Pred spustenie nástroja si uistite, že máte:

- **Administratívny prístup** k vašej instalácii WordPress
- Súbor `wp-config.php` na vašom serveri je **zapisiteľný** webovým sluzhbou
- **Nedávnu zálohu** svojich súborov a databázy

:::warning
Nástroj upravuje váš súbor `wp-config.php` a vytvára nové tabuľky v databáze. Vždy vytvorte zálohu, než začnete s tým.
:::

## Krok 1: Vitajte

Prvá obrazovka vysvetlí, čo je WordPress Multisite a čo nástroj urobí:

- Aktivovať funkciu Multisite v konfiguračnom súbore WordPress
- Vytvoriť potrebné tabuľky pre sieť databázy
- Pridať požadované konstanty multisite do `wp-config.php`
- Aktivovať sieti Ultimate Multisite po celej sieti

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Kliknite na **Pokračovať**, aby ste pokračovali.

## Krok 2: Konfigurácia siete

Tento krok vás požiada o konfiguráciu vašich sietiach.

### Štruktúra sita

Vyberte, ako sa budúcej organizácii vašich sítí v sieti:

- **Subdomény** (Doporučované) — Sítka dostanú svoj vlastný subdomén, napr. `site1.yourdomain.com`
- **Podkategórie** — Sítka sa vytvárajú ako cesty, napr. `yourdomain.com/site1`

:::note
Ak si vyberiete subdomény, budete musieť nakonfigurovať **wildcard DNS** a **wildcard SSL certifikát** pre vašu doménu. Najväčšiu väčšinu správcovaných WordPress hostov to robia automaticky. Pre podrobný porovnanie si pozrite [Ultimate Multisite 101](./ultimate-multisite-101).
:::

### Názov siete

Vložte názov pre vašu sieti. Toto sa zvyčajne nastaví na aktuálny názov vášho portálu s pridaným "Network". Môžete ho neskôr zmeniť v nastaveniach siete.

### E-mail administrátora siete

E-mailová adresa, ktorú sa používa na upozornenia o správe siete. Toto sa zvyčajne nastaví na e-mail aktuálneho používateľa.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Po vyplnení polí kliknite na **Pokračovať** a pokračujte ďalej.

## Krok 3: Instalácia

Kliknite na tlačidlo **Install**, aby ste začali. Wizard vykoná päť automatizovaných krokov v sekvencii, každý z ktorých zobrazuje svoj postup v reálnom čase:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Krok | Popis |
|------|-------------|
| **Vzťah na Multisite** | Pridanie kon constantu `WP_ALLOW_MULTISITE` do súboru `wp-config.php` |
| **Vytvorenie siete** | Vytvorenie tabiel dát pre multisite (`wp_site`, `wp_sitemeta`, `wp_blogs` atď.) a ich vyplnenie konfiguračnou informáciou vašej siete |
| **Aktualizácia konfiguračnej časti** | Pridanie finálnych constantov multisite do súboru `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` atď.) |
| **Oprava cookies** | Zabezpečíte, že URL stránky je v metadátach siete správny, aby sa unikli problémy s autentifikáciou po aktivácii |
| **Aktivácia súboru Network Plugin** | Aktivuje sieti Ultimate Multisite tak, aby fungoval po celej sieti |

Každý krok zobrazí jeden z nasledujúcich stavov:

- **Pending (Očakáva)** — Čaká na spracovanie
- **Installing... (Inštalácia...)** — Aktuálne sa vykonáva
- **Success! (Úspešne!)** — Ú successfully dokončený
- **Error message (Chyba)** — Nastala chyba (mensagem popisuje problém)

Keď sa všetky kroky úspešne dokončia, uvidíte zelený stav "Success!" pre každý položku:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Potom vám vizor automaticky presunie na obrazovku dokončenia.

## Krok 4: Dokončené

Po dokončení inštalácie uvidíte správu, ktorá potvrdzuje, že WordPress Multisite je aktivovaný.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Ter môžete pokračovať v konfigurácii vizora Ultimate Multisite na svoj platformu WaaS (detaily firmy, štandardný obsah, platobné brány atď.).

:::note
Po dokončení instalácie multisite sa váš prehliadač presmeruje cez nová povolenia sieťového admina. Môžete si vôbec musieť znovu prihlásiť, pretože sú cookie pre autentifikáciu aktualizované na okrem multisite prostredie.
:::

## Manual Setup Fallback (Náhradné riešenie manuálnej konfigurácie)

Ak vám nástroj neumožňuje zapísať do vášho súboru `wp-config.php` (kvôli povoleniam na súbory alebo obmedzeniam servera), zobrazí vám presný kód, ktorý musíte manuálne pridať:

1. **konstanty v wp-config.php**, ktoré potrebujete pridať nad čarou `/* To je všetko, prestajte s editovaním! */`
2. **pravidlá rewrite .htaccess** vhodné pre vašu zvolenú štruktúru stránok (subdoména alebo podkatalóg)

Po vykonaní manuálnych zmeniek si obnovte stránku a nástroj určí, že multisite je teraz aktívne.

## Troubleshooting (Úprava problémov)

### Nástroj uvádza, že wp-config.php nie je zapisovateľný (not writable)

Váš webový server potrebuje práva na zápis do súboru `wp-config.php`. Môžete:

- Dočasne zmeniť povolenia na súbory na `644` alebo `666`
- Použiť pokyny pre manuálnu konfiguráciu, ktoré poskytuje nástroj
- Požiadať váš hostingový poskytovateľa o pomoc

### Stránky nie sú prístupné po nastavení (subdomény)

Ak ste si zvolili štruktúru s subdoménami, potrebujete nakonfigurovať **wildcard DNS** pre vašu doménu. Pridajte záznam DNS:

```
Type: A (alebo CNAME)
Host: *
Value: [vaša IP adresa servera]
```

Skontrolujte s vaším hostingovým poskytovateľom, ak nie ste si istí, ako to nakonfigurovať.

### Problémy s autentifikáciou po nastavení

Ak ste odhlásení alebo máte chyby s cookie po nastavení multisite:

1. Vyčistite súbory cookie v prehliadači pre danú stránku
2. Prihláste sa znova na `vašdomena.com/wp-login.php`
3. Ak problém zostáva, skontrolujte, či váš `wp-config.php` nemá nastavený `COOKIE_DOMAIN` na `false` — je to známy problém pri instaláciách multisite s subdoménami

### Chyba sa stala počas instalácie

Ak jedna z inštalačných krokov ukazuje chybu:

1. Zaznamenajte si správu chyby, ktorú zobrazuje.
2. Vráť sa na krok konfiguračného kroku a skúste to znova.
3. Ak chyba zostane, prepojte kontrolný log PHP na vašom servere, aby ste získali viac informácií.
4. Kroky, ktoré už boli dokončené, budú pri nasledujúcich spusteniach vynechané (inštalátor je idempotentný).
