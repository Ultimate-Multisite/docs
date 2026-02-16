---
title: Guide för multisite-installation
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisiteguiden

Ultimate Multisite innehåller en inbyggd guide som automatiskt konverterar en vanlig WordPress-installation till ett WordPress Multisite-nätverk. Det innebär att du slipper redigera `wp-config.php` manuellt eller köra databaskommandon.

:::tip
Om din WordPress-installation redan körs som ett Multisite-nätverk kan du hoppa över det här steget helt. Guiden visas bara när Multisite inte är aktiverat.
:::

## När visas guiden?

När du aktiverar Ultimate Multisite på en vanlig WordPress-installation (utan Multisite) upptäcker pluginet att Multisite inte är aktiverat och omdirigerar dig automatiskt till Multisiteguiden istället för den vanliga installationsguiden.

Du kan också öppna den direkt via **WP Admin > Ultimate Multisite > Multisite Setup**.

## Förutsättningar

Innan du kör guiden, se till att:

- Du har **administratörsåtkomst** till din WordPress-installation
- Din servers `wp-config.php`-fil är **skrivbar** för webbservern
- Du har en **nyligen tagen backup** av dina filer och din databas

:::warning
Guiden ändrar din `wp-config.php`-fil och skapar nya databastabeller. Skapa alltid en backup innan du fortsätter.
:::

## Steg 1: Välkommen

Den första skärmen förklarar vad WordPress Multisite är och vad guiden kommer att göra:

- Aktivera Multisite-funktionen i din WordPress-konfiguration
- Skapa de nödvändiga nätverksdatabastabellerna
- Lägga till de nödvändiga multisite-konstanterna i `wp-config.php`
- Nätverksaktivera Ultimate Multisite i hela nätverket

![Multisiteguiden - Välkomststeg](/img/installation/multisite-wizard/wizard-welcome.png)

Klicka på **Fortsätt** för att gå vidare.

## Steg 2: Nätverkskonfiguration

I det här steget konfigurerar du dina nätverksinställningar.

### Webbplatsstruktur

Välj hur dina nätverkswebbplatser ska organiseras:

- **Subdomäner** (Rekommenderas) — Webbplatser får en egen subdomän, t.ex. `site1.dindomän.se`
- **Underkataloger** — Webbplatser skapas som sökvägar, t.ex. `dindomän.se/site1`

:::note
Om du väljer subdomäner måste du konfigurera **wildcard-DNS** och ett **wildcard-SSL-certifikat** för din domän. De flesta managerade WordPress-värdar hanterar detta automatiskt. Se [Ultimate Multisite 101](./ultimate-multisite-101) för en detaljerad jämförelse.
:::

### Nätverksnamn

Ange ett namn för ditt nätverk. Som standard används din nuvarande webbplatstitel med "Network" tillagt. Du kan ändra detta senare i nätverksinställningarna.

### E-postadress för nätverksadministratör

E-postadressen som används för nätverksadministrationsnotifieringar. Som standard används den nuvarande användarens e-postadress.

![Multisiteguiden - Nätverkskonfiguration](/img/installation/multisite-wizard/wizard-network-configuration.png)

När du har fyllt i fälten klickar du på **Fortsätt** för att gå vidare.

## Steg 3: Installation

Klicka på **Installera** för att börja. Guiden utför fem automatiserade steg i följd, där varje steg visar sin status i realtid:

![Multisiteguiden - Installation väntar](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Steg | Beskrivning |
|------|-------------|
| **Aktivera Multisite** | Lägger till konstanten `WP_ALLOW_MULTISITE` i `wp-config.php` |
| **Skapa nätverk** | Skapar multisite-databastabellerna (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) och fyller dem med din nätverkskonfiguration |
| **Uppdatera konfiguration** | Lägger till de slutliga multisite-konstanterna i `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Åtgärda cookies** | Säkerställer att webbplatsens URL är korrekt i nätverkets metadata för att förhindra autentiseringsproblem efter aktivering |
| **Nätverksaktivera plugin** | Nätverksaktiverar Ultimate Multisite så att det körs i hela nätverket |

Varje steg visar en av dessa statusar:

- **Väntar** — Väntar på att bearbetas
- **Installerar...** — Körs för närvarande
- **Klart!** — Slutfört utan fel
- **Felmeddelande** — Ett fel uppstod (meddelandet beskriver problemet)

När alla steg har slutförts utan fel ser du en grön "Klart!"-status för varje punkt:

![Multisiteguiden - Installation slutförd](/img/installation/multisite-wizard/wizard-installation-complete.png)

Guiden fortsätter sedan automatiskt till slutskärmen.

## Steg 4: Slutfört

När installationen är klar ser du ett meddelande som bekräftar att WordPress Multisite har aktiverats.

![Multisiteguiden - Installation slutförd](/img/installation/multisite-wizard/wizard-complete.png)

Du kan nu fortsätta med Ultimate Multisites installationsguide för att konfigurera din WaaS-plattform (företagsuppgifter, standardinnehåll, betalningslösningar etc.).

:::note
Efter att multisite-installationen slutförts omdirigeras din webbläsare genom det nyligen aktiverade nätverkets admin. Du kan behöva logga in igen eftersom autentiserings-cookies uppdateras för multisite-miljön.
:::

## Manuell installation som reserv

Om guiden inte kan skriva till din `wp-config.php`-fil (på grund av filrättigheter eller serverbegränsningar) visar den den exakta koden du behöver lägga till manuellt:

1. **Konstanterna för wp-config.php** som behöver läggas till ovanför raden `/* That's all, stop editing! */`
2. **Omskrivningsreglerna för .htaccess** som passar din valda webbplatsstruktur (subdomän eller underkatalog)

Efter att du har gjort de manuella ändringarna uppdaterar du sidan så kommer guiden att upptäcka att multisite nu är aktivt.

## Felsökning

### Guiden säger att wp-config.php inte är skrivbar

Din webbserverprocess behöver skrivrättigheter till `wp-config.php`-filen. Du kan antingen:

- Tillfälligt ändra filrättigheterna till `644` eller `666`
- Använda instruktionerna för manuell installation som guiden visar
- Be din hosting-leverantör om hjälp

### Webbplatser går inte att nå efter installation (subdomäner)

Om du valde subdomänstrukturen måste du konfigurera **wildcard-DNS** för din domän. Lägg till en DNS-post:

```
Typ: A (eller CNAME)
Host: *
Värde: [din servers IP-adress]
```

Kontakta din hosting-leverantör om du är osäker på hur du konfigurerar detta.

### Autentiseringsproblem efter installation

Om du loggas ut eller upplever cookie-fel efter multisite-installationen:

1. Rensa webbläsarens cookies för webbplatsen
2. Logga in igen på `dindomän.se/wp-login.php`
3. Om problemet kvarstår, kontrollera att din `wp-config.php` inte har `COOKIE_DOMAIN` satt till `false` — detta är ett känt problem på multisite-installationer med subdomäner

### Ett steg misslyckades under installationen

Om något av installationsstegen visar ett fel:

1. Notera felmeddelandet som visas
2. Gå tillbaka till konfigurationssteget och försök igen
3. Om felet kvarstår, kontrollera din servers PHP-fellogg för mer information
4. Steg som redan har slutförts hoppas över vid efterföljande körningar (installationen är idempotent)
