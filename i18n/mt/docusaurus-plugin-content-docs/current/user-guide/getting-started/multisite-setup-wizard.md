---
title: Wizard għall-Istitwixxi Multitesse
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite jidda un wizard mhux huwa built-in li jidda WordPress, li jidda jidda WordPress standard biex jidda networks WordPress. Dan jidda l-esigenza ta li tġib manualment għal edit tal-`wp-config.php` jew li tgħmli komandi tal-database.

:::tip
Jekk il-installazzjoni tiegħek ta WordPress hija già qed tservi bħala network Multisite, tista' tgħmli bypass għall-step dan kollha. Il-wizard juri se jidda biss meta Multisite m'għandux jkun aktib.
:::

## Meta Juri l-Wizard?

Meta tagħmel attivazzjoni tal-Ultimate Multisite fuq installazzjoni WordPress standard (li mhix Multisite), il-plugin jifhax li Multisite m'għandux jkun aktib u jirrettija'k awtomatik għall-Multisite Setup Wizard invece tal-wizard ta l-setup regolari.

Tista' tivvolaqhu dirett fuq **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prerequisiti

Qabel ma tgħmli l-wizard, assigurja li:

- Tgħandek **administrator access** għall-installazzjoni tiegħek ta WordPress
- Il-file `wp-config.php` tal-server tiegħek huwa **writable** mill-web server
- Tgħandek **backup reċenti** tal-filek u database

:::warning
Il-wizard jmodifika il-file `wp-config.php` tiegħek u jikkonċerta tables tal-database ġodda. Imma' l-progressa, għandu tivvolaq backup.
:::

## Step 1: Welcome (Benġix)

Il-screen ewliem jispjega x'ja WordPress Multisite u x'għandu jiddegħel:

- Tgħaqidi il-feature ta Multisite f'konfigurazzjoni tiegħek ta WordPress
- Tikkunsidix tables tal-database network li għandhom biex ikunu
- Taddispoċi l-constants multisite meħtieġa f' `wp-config.php`
- Tattiva Network-activate Ultimate Multisite fuq networks

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Iċċekkja **Continue** biex tmur in avanti.

## Step 2: Network Configuration (Konfigurazzjoni ta' Network)

Dan l-step jista' jiddehek biex tkonfiguri l-settings tal-network tiegħek.

### Site Structure (Struttura tal-Site)

Scegli kif titola siti reti tieħek:

- **Sub-domains** (Insuġġeriti) — Is-siti jaqgħu subdomain proprja, e.g. `site1.yourdomain.com`
- **Sub-directories** — Is-siti jitcrea bħala percorsi, e.g. `yourdomain.com/site1`

:::note
Jekk tagħżlu sub-domains, għandek biex tsetConfiga **wildcard DNS** u **wildcard SSL certificate** għall-domain tiegħek. Il-hosts WordPress gestiti biex jgħażlu dan l-istruttura awtomatikament. Applika [Ultimate Multisite 101](./ultimate-multisite-101) għal konfrontazzjoni dettaljata.
:::

### Titoli Reġistraliet (Network Title)

Iscrivi isimħaw għall retta tiegħek. Dan jista' jintlaq minn titol it-sit tiegħek tal-aħħar ma jinkludi "Network". Tista' tġiegħel xi ħaġa aktar fil-post imħobb tal-retta (network settings).

### Email Admin Reġistraliet (Network Admin Email)

L-indirizz email li jinkludi l-notifikazzjonijiet ta amministrazzjoni tal-retta. Dan jista' jintlaq minn l-indirizz email tal-utent kien.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Wara ma tmelliet il-campi, issaċċa **Continue** biex tkompli.

## Iż-Żgier 3: Installazzjoni (Step 3: Installation)

Iċċakka l-botton **Install** biex tibda. Il-wizard jagħmel it-tliet fasi awtomatiku f sequenza, u għal kulħadd juri l-progress tiegħu fil-mument:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Żحض | Descripzjoni |
|------|-------------|
| **Abilitazzjoni tal-Multisite** | Aggiungi l-costante `WP_ALLOW_MULTISITE` f' `wp-config.php` |
| **Ikreaw الشبka (Network)** | Icrea l-tabeli tad-database tal-multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, ecc.) u popolahom mal-konfigurazzjoni tal-network tiegħek |
| **Aggiorna l-Konfigurazzjoni** | Aggiungi l-costanti finali tal-multisite f' `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, ecc.) |
| **Ipprova għall-Cookies** | Assigurah li l-URL tal-sitemap huwa korrett fil-metadata tal-network biex tneħħi problemi ta autentikazzjoni wara l-attivazzjoni |
| **Attiva Plugin Network** | Attiva Ultimate Multisite b'network biex jservi għall-network kollu |

Kull step juri xi ż-status:

- **Pending** — Għandu jmur biex jiġi proċessat
- **Installing...** — Qed jservi l-istruttura
- **Success!** — Ipprovdut b'suċċess
- **Error message** — Ħlaset xi problema (il-messaġġ jiddeskrivi l-problema)

Mdaqqa l-koll step jgħidu b'suċċess, taraw status aħħar aħħar:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Il-wizard jmur poi għall-scherm tal-kompletament awtomatik.

## Step 4: Kompliet

Mdaqqa l-installazzjoni tmur, taraw messaġġ ta suċċess li jkonferma li WordPress Multisite huwa abilitat.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Tista' tkompli l-setup tal-Ultimate Multisite biex tkun konfigurata l-platform tiegħek ta WaaS (dettijiet tal-kumpagnija, kontent difiżit, gateway ta pagamenti, ecc.).

:::note
Dopo che l'installazione del multisite è terminata, il tuo browser verrà reindirizzato tramite il nuovo amministratore di rete abilitato. Potrebbe essere necessario effettuare nuovamente il login poiché i cookie di autenticazione vengono aggiornati per l'ambiente multisite.
:::

## Fallback per la configurazione manuale

Se il wizard non riesce a scrivere sul file `wp-config.php` (a causa dei permessi del file o delle restrizioni del server), ti mostrerà esattamente il codice che devi aggiungere manualmente:

1. Le **costanti di wp-config.php** che devi aggiungere sopra la riga `/* That's all, stop editing! */`
2. Le **regole rewrite di .htaccess** appropriate per la struttura del sito che hai scelto (subdominio o sottodirectory)

Dopo aver apportato le modifiche manuali, aggiorna la pagina e il wizard rileverà che il multisite è ora attivo.

## Risoluzione dei problemi

### Il wizard dice che wp-config.php non è scrivibile

Il processo del tuo web server ha bisogno di permessi di scrittura sul file `wp-config.php`. Puoi fare una delle seguenti cose:

- Cambiare temporaneamente i permessi del file su `644` o `666`
- Usare le istruzioni di fallback per la configurazione manuale fornite dal wizard
- Chiedere assistenza al tuo provider di hosting

### I siti non sono accessibili dopo l'installazione (subdomini)

Se hai scelto la struttura del subdominio, devi configurare il **wildcard DNS** per il tuo dominio. Aggiungi un record DNS:

```
Type: A (o CNAME)
Host: *
Value: [la tua IP del server]
```

Verifica con il tuo provider di hosting se non sei sicuro su come configurarlo.

### Problemi di autenticazione dopo l'installazione

Se sei disconnesso o riscontri errori sui cookie dopo la configurazione del multisite:

1. Cancella i cookie del browser per il sito
2. Effettua nuovamente il login a `yourdomain.com/wp-login.php`
3. Se il problema persiste, controlla che il tuo `wp-config.php` non abbia `COOKIE_DOMAIN` impostato su `false` — questo è un problema noto nelle installazioni multisite su subdomain

### È fallito un passaggio durante l'installazione

אם אחד maħruq tal-installazzjoni juri xi errore:

1. Nota il-messaġġ tal-errore li juri
2. Irrita lura għall-istep tal-konfigurazzjoni u jidrob it-tajjeb
3. Jekk l-errore tajjeb tkun persista, tikkontrolla l-log tal-errore tal-server PHP għal magħrufin aktar dettalji
4. Istedi l-istep li jkollu jkun imminju jmurabbju fuq rieddu ewemin (l-installer huwa idempotent)
