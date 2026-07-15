---
title: Multisite Opsætningassistent
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Opsætning

Ultimate Multisite indeholder en indbygget wizard, der automatisk konverterer en standard WordPress-installation til et WordPress Multisite netværk. Dette eliminerer behovet for manuelt at redigere `wp-config.php` eller køre databasekommandoer.

:::tip
Hvis din WordPress-installation allerede kører som et Multisite netværk, kan du springe dette trin helt over. Wizarden vises kun, når Multisite endnu ikke er aktiveret.
:::

## Hvornår dukker wizarden op? {#when-does-the-wizard-appear}

Når du aktiverer Ultimate Multisite på en standard (ikke-Multisite) WordPress-installation, opdager plugin'et, at Multisite ikke er aktiveret, og omdirigerer dig automatisk til Multisite Setup Wizard i stedet for den almindelige opsætningswizard.

Du kan også få adgang direkte via **WP Admin > Ultimate Multisite > Multisite Setup**.

## Forudsætninger {#prerequisites}

Før du starter wizarden, skal du sikre dig:

- Du har **administratoradgang** til din WordPress-installation
- Din servers `wp-config.php` fil er **skrivebar** af webserveren
- Du har en **nylig backup** af dine filer og database

:::warning
Wizarden ændrer din `wp-config.php` fil og opretter nye databasetabeller. Lav altid en backup, før du går videre.
:::

## Trin 1: Velkommen {#step-1-welcome}

Den første skærm forklarer, hvad WordPress Multisite er, og hvad wizarden vil gøre:

- Aktiver Multisite-funktionen i din WordPress konfiguration
- Opret de nødvendige netværksdatabasetabeller
- Tilføj de påkrævede multisite-konstanter til `wp-config.php`
- Aktiver Ultimate Multisite som et netværk på tværs af hele netværket

![Multisite Setup Wizard - Velkomsttrin](/img/installation/multisite-wizard/wizard-welcome.png)

Klik på **Fortsæt** for at gå videre.

## Trin 2: Netværkskonfiguration {#step-2-network-configuration}

Dette trin beder dig om at konfigurere dine netværksindstillinger.

### Site Struktur {#site-structure}

Vælg hvordan dine netværkssteder skal organiseres:

- **Subdomæner** (Anbefalet) — Hvert sted får sin egen subdomæne, f.eks. `site1.yourdomain.com`
- **Undermapper** — Steder oprettes som stier, f.eks. `yourdomain.com/site1`

:::note
Hvis du vælger subdomæner, skal du opsætte **wildcard DNS** og et **wildcard SSL-certifikat** for din domæne. De fleste administrerede WordPress-hostinger håndterer dette automatisk. Se [Ultimate Multisite 101](./ultimate-multisite-101) for en detaljeret sammenligning.
:::

### Netværksnavn {#network-title}

Indtast et navn til dit netværk. Dette er som standard dit nuværende sidens titel med "Network" tilføjet. Du kan ændre dette senere i netværksindstillingerne.

### Administrator-e-mail for netværket {#network-admin-email}

E-mailadressen, der bruges til notifikationer om administration af netværket. Dette er som standard den nuværende brugers e-mailadresse.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Når du har udfyldt felterne, klik på **Fortsæt** for at gå videre.

## Trin 3: Installation {#step-3-installation}

Klik på knappen **Installer** for at starte. Wizardet udfører fem automatiserede trin i rækkefølge, hvor hvert trin viser sin fremgang i realtid:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Trin | Beskrivelse |
|------|-------------|
| **Aktiver Multisite** | Tilføjer konstanten `WP_ALLOW_MULTISITE` til `wp-config.php` |
| **Opret Netværk** | Opret multisite databasetabellerne (`wp_site`, `wp_sitemeta`, `wp_blogs`, osv.) og udfyld dem med din netværkskonfiguration |
| **Opdater Konfigurationen** | Tilføj de endelige multisite-konstanter til `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, osv.) |
| **Ret Cookies** | Sikrer, at websitets URL er korrekt i netværksmetadata for at undgå autentificeringsproblemer efter aktivering |
| **Aktiver Netværk-plugin** | Aktiverer Ultimate Multisite på netværksniveau, så det kører på tværs af hele netværket |

Hvert trin viser en af disse statusser:

- **Ventende (Pending)** — Ventet på behandling
- **Installation...** — Er i gang
- **Succes!** — Fuldført succesfuldt
- **Fejlmeddelelse** — Der er opstået en fejl (beskeden beskriver problemet)

Når alle trin er fuldført succesfuldt, vil du se en grøn "Succes!" status for hvert element:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard'en fortsætter derefter automatisk til færdiggørelses-skærmen.

## Trin 4: Færdiggør {#step-4-complete}

Når installationen er færdig, vil du se en succesmeddelelse, der bekræfter, at WordPress Multisite er aktiveret.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Du kan nu fortsætte med Ultimate Multisite opsætningswizard'en for at konfigurere din WaaS platform (virksomhedsoplysninger, standardindhold, betalingsgateways osv.).

:::note
Efter multisite-installationen er færdig, vil din browser blive omdirigeret gennem det nyaktiverede netværksadministrator. Du skal muligvis logge ind igen, da autentifikationscookiesne opdateres for multisite-miljøet.
:::

## Manuel Opsætning som Reservemulighed {#manual-setup-fallback}

Hvis wizarden ikke kan skrive til din `wp-config.php` fil (på grund af filtilladelser eller serverbegrænsninger), vil den vise præcis koden, du skal tilføje manuelt:

1. De **wp-config.php konstanter**, der skal tilføjes oven over linjen `/* Det er alt, stop med at redigere! */`
2. De **.htaccess rewrite regler**, der passer til din valgte sidestruktur (subdomæne eller undermappe)

Efter du har foretaget de manuelle ændringer, opdater siden igen, og wizarden vil opdage, at multisite nu er aktivt.

## Fejlfinding {#troubleshooting}

### Wizarden siger, at wp-config.php ikke kan skrives til {#the-wizard-says-wp-configphp-is-not-writable}

Din webserverproces skal have skrivetilstand til `wp-config.php` filen. Du kan enten:

- Midlertidigt ændre filtilladelserne til `644` eller `666`
- Bruge de manuelle opsætningsinstruktioner fra wizarden
- Spørge din hostingudbyder om hjælp

### Sider er ikke tilgængelige efter opsætning (subdomæner) {#sites-are-not-accessible-after-setup-subdomains}

Hvis du valgte subdomæne-strukturen, skal du konfigurere **wildcard DNS** for din domæne. Tilføj en DNS-post:

```
Type: A (eller CNAME)
Host: *
Value: [din servers IP]
```

Tjek med din hostingudbyder, hvis du er i tvivl om, hvordan du konfigurerer dette.

### Autentifikationsproblemer efter opsætning {#authentication-issues-after-setup}

Hvis du er logget ud eller oplever cookie-fejl efter multisite-opsætningen:

1. Ryd dine browsercookies for sitet
2. Log ind igen på `yourdomain.com/wp-login.php`
3. Hvis problemet stadig består, tjek, at din `wp-config.php` ikke har `COOKIE_DOMAIN` sat til `false` — dette er et kendt problem ved multisite-installationer med subdomæner

### En trin fejlede under installationen {#a-step-failed-during-installation}

Hvis et af installationsfaser viser en fejl:

1. Notér fejlen i meddelelsen.
2. Gå tilbage til konfigurationssteget og prøv igen.
3. Hvis fejlen stadig opstår, tjek din servers PHP error log for flere detaljer.
4. Trin, der allerede er gennemført, vil blive springet over ved efterfølgende kørsel (installatoren er idempotent).
