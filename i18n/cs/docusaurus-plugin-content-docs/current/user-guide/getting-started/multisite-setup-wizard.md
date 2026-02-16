---
title: Průvodce nastavením Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Průvodce nastavením Multisite

Ultimate Multisite obsahuje vestavěného průvodce, který automaticky převede standardní instalaci WordPress na síť WordPress Multisite. Díky tomu nemusíte ručně upravovat `wp-config.php` ani spouštět databázové příkazy.

:::tip
Pokud vaše instalace WordPress už běží jako síť Multisite, tento krok můžete zcela přeskočit. Průvodce se zobrazí pouze tehdy, když Multisite ještě není povoleno.
:::

## Kdy se průvodce zobrazí?

Když aktivujete Ultimate Multisite na standardní (ne-Multisite) instalaci WordPress, plugin zjistí, že Multisite není povoleno, a automaticky vás přesměruje na Průvodce nastavením Multisite místo běžného průvodce nastavením.

Můžete ho také otevřít přímo v **WP Admin > Ultimate Multisite > Nastavení Multisite**.

## Předpoklady

Před spuštěním průvodce se ujistěte, že:

- Máte **administrátorský přístup** k vaší instalaci WordPress
- Soubor `wp-config.php` na vašem serveru je **zapisovatelný** webovým serverem
- Máte **aktuální zálohu** souborů a databáze

:::warning
Průvodce upravuje soubor `wp-config.php` a vytváří nové databázové tabulky. Před pokračováním si vždy vytvořte zálohu.
:::

## Krok 1: Uvítání

První obrazovka vysvětluje, co je WordPress Multisite a co průvodce provede:

- Povolí funkci Multisite v konfiguraci WordPress
- Vytvoří potřebné síťové databázové tabulky
- Přidá požadované konstanty pro multisite do `wp-config.php`
- Síťově aktivuje Ultimate Multisite napříč celou sítí

![Průvodce nastavením Multisite - Uvítací krok](/img/installation/multisite-wizard/wizard-welcome.png)

Klikněte na **Pokračovat** pro přechod na další krok.

## Krok 2: Konfigurace sítě

V tomto kroku nastavíte parametry vaší sítě.

### Struktura webů

Vyberte, jak budou weby ve vaší síti organizovány:

- **Subdomény** (doporučeno) — Weby získají vlastní subdoménu, např. `site1.vasedomena.cz`
- **Podadresáře** — Weby se vytvoří jako cesty, např. `vasedomena.cz/site1`

:::note
Pokud zvolíte subdomény, budete muset nakonfigurovat **wildcard DNS** a **wildcard SSL certifikát** pro vaši doménu. Většina spravovaných WordPress hostingů to řeší automaticky. Podrobné srovnání najdete v článku [Ultimate Multisite 101](./ultimate-multisite-101).
:::

### Název sítě

Zadejte název vaší sítě. Výchozí hodnota je název vašeho současného webu s připojeným slovem „Síť". Toto můžete později změnit v nastavení sítě.

### E-mail administrátora sítě

E-mailová adresa používaná pro oznámení správy sítě. Výchozí hodnota je e-mailová adresa aktuálního uživatele.

![Průvodce nastavením Multisite - Konfigurace sítě](/img/installation/multisite-wizard/wizard-network-configuration.png)

Po vyplnění polí klikněte na **Pokračovat** pro přechod na další krok.

## Krok 3: Instalace

Klikněte na tlačítko **Instalovat** pro zahájení. Průvodce postupně provede pět automatizovaných kroků, přičemž u každého zobrazuje průběh v reálném čase:

![Průvodce nastavením Multisite - Čekající instalace](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Krok | Popis |
|------|-------|
| **Povolit Multisite** | Přidá konstantu `WP_ALLOW_MULTISITE` do `wp-config.php` |
| **Vytvořit síť** | Vytvoří databázové tabulky pro multisite (`wp_site`, `wp_sitemeta`, `wp_blogs` atd.) a naplní je konfigurací vaší sítě |
| **Aktualizovat konfiguraci** | Přidá finální konstanty pro multisite do `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` atd.) |
| **Opravit cookies** | Zajistí správnou URL webu v metadatech sítě, aby nedošlo k problémům s autentizací po aktivaci |
| **Síťově aktivovat plugin** | Síťově aktivuje Ultimate Multisite, aby běžel napříč celou sítí |

Každý krok zobrazuje jeden z těchto stavů:

- **Čeká** — Čeká na zpracování
- **Instaluje se...** — Právě probíhá
- **Úspěch!** — Úspěšně dokončeno
- **Chybová zpráva** — Došlo k chybě (zpráva popíše problém)

Po úspěšném dokončení všech kroků uvidíte u každé položky zelený stav „Úspěch!":

![Průvodce nastavením Multisite - Instalace dokončena](/img/installation/multisite-wizard/wizard-installation-complete.png)

Průvodce poté automaticky přejde na obrazovku dokončení.

## Krok 4: Dokončení

Po dokončení instalace uvidíte zprávu o úspěchu potvrzující, že WordPress Multisite bylo povoleno.

![Průvodce nastavením Multisite - Nastavení dokončeno](/img/installation/multisite-wizard/wizard-complete.png)

Nyní můžete pokračovat průvodcem nastavení Ultimate Multisite a nakonfigurovat vaši WaaS platformu (údaje o společnosti, výchozí obsah, platební brány atd.).

:::note
Po dokončení instalace multisite vás prohlížeč přesměruje přes nově povolenou správu sítě. Možná se budete muset znovu přihlásit, protože autentizační cookies se aktualizují pro prostředí multisite.
:::

## Záložní ruční nastavení

Pokud průvodce nemůže zapisovat do souboru `wp-config.php` (kvůli oprávněním souborů nebo omezením serveru), zobrazí přesný kód, který musíte přidat ručně:

1. **Konstanty pro wp-config.php**, které je třeba přidat nad řádek `/* That's all, stop editing! */`
2. **Přepisovací pravidla pro .htaccess** odpovídající vaší zvolené struktuře webů (subdomény nebo podadresáře)

Po provedení ručních změn obnovte stránku a průvodce zjistí, že multisite je nyní aktivní.

## Řešení problémů

### Průvodce hlásí, že wp-config.php není zapisovatelný

Proces webového serveru potřebuje oprávnění k zápisu do souboru `wp-config.php`. Můžete buď:

- Dočasně změnit oprávnění souboru na `644` nebo `666`
- Použít záložní instrukce pro ruční nastavení poskytnuté průvodcem
- Požádat o pomoc vašeho poskytovatele hostingu

### Weby nejsou po nastavení přístupné (subdomény)

Pokud jste zvolili strukturu se subdoménami, musíte nakonfigurovat **wildcard DNS** pro vaši doménu. Přidejte DNS záznam:

```
Typ: A (nebo CNAME)
Host: *
Hodnota: [IP adresa vašeho serveru]
```

Pokud si nejste jisti, jak toto nakonfigurovat, obraťte se na svého poskytovatele hostingu.

### Problémy s autentizací po nastavení

Pokud jste odhlášeni nebo máte problémy s cookies po nastavení multisite:

1. Vymažte cookies prohlížeče pro tento web
2. Přihlaste se znovu na `vasedomena.cz/wp-login.php`
3. Pokud problém přetrvává, zkontrolujte, že v `wp-config.php` nemáte `COOKIE_DOMAIN` nastaveno na `false` — toto je známý problém u instalací multisite se subdoménami

### Některý krok během instalace selhal

Pokud některý z instalačních kroků zobrazí chybu:

1. Poznamenejte si zobrazenou chybovou zprávu
2. Vraťte se ke kroku konfigurace a zkuste to znovu
3. Pokud chyba přetrvává, zkontrolujte PHP error log vašeho serveru pro více podrobností
4. Kroky, které již byly dokončeny, budou při dalších pokusech přeskočeny (instalátor je idempotentní)
