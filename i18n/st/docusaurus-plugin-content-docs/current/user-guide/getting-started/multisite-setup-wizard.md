---
title: Mokotso o lebo ea ho setso oa multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Setso ea Hohoho ho Multisite {#multisite-setup-wizard}

Kea leboha la setso (Setup Wizard) sa tloha.

Ultimate Multisite e na le wizard o tsamaisang (built-in) o tla fana ka tsela e ntshwago ho fetola installation ya WordPress e kholo ea WordPress e le network ya WordPress Multisite. Sena se fetola ho nang le ho fetola manokong `wp-config.php` kapa ho run database commands.

:::tip
Ha ho na lefa ka ho fana ka WordPress e le multisite network, u ka tloha le tsela ena. Leza (wizard) ha a hlalosa fa multisite ha a fana a fihla.
:::

## Lefa Leza Ho Fana? {#when-does-the-wizard-appear}

Ha o fana ka u fana Ultimate Multisite ka ho ba le WordPress e le se le fetileng (se se ne se le Multisite), bo plugin ya bona hore Multisite ha se lefetileng, ho ba le ho hlalosa u ka tloha ka Multisite Setup Wizard le ho hlalosa le ho hlalosa le ho hlalosa le ho hlalosa le ho hlalosa.

U ka ho fana ka ho fetola ka se se se ka **WP Admin > Ultimate Multisite > Multisite Setup**.

## Ho Baile (Prerequisites) {#prerequisites}

Ha ntsa ho fana le se se se ka ho fana ka ho baile:

- U na **access ea administrator** ho WordPress haholo
- File ea sehlopha sa hau, `wp-config.php`, e **ho leboha** ho web server
- U na **backup e ntlha** ea file a hau le database

:::warning
Le wizard o fetola lipoti la hau la `wp-config.php` le ho fetola table e ntlha ea database. Ho ba le backup hantle ka ntlha ya ho tsamaea.
:::

## Step 1: Welamale {#step-1-welcome}

Mokhoa oa wena o tla reka hore na lefa WordPress Multisite ke eng le hore na le wizard o tla etsa eng:

- Baile fa fana'a (Enable) litlhahlo la Multisite ka tsela ya WordPress ya hau
- Fetseya (Create) dikotso tsa database tse di hlophiswe ho leka (necessary network database tables)
- Letseha (Add) dikotso tsa multisite tse hlokang ka `wp-config.php`
- Baile (Network-activate) Ultimate Multisite ka tsela ya setlo sa nnete (network)

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Hloka **Continue** ho haholo ho laola.

## Step 2: Configuration ea Network (Network Configuration) {#step-2-network-configuration}

Tse taba ena e bua ka ho setsoa litlhahiselo tsa hau tsa network.

### Ho Setso ea Structure ea Site (Site Structure) {#site-structure}

U-thabela hore o baithuti ba lona ba leba kae:

- **Sub-domains** (Ho batse) — Baithuti ba ba leba ba ba le subdomain ea bona, o matla, o hlompha, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla, o matla

:::note
Ha uba ka uba sub-domains, o tla hloka ho setsoa **wildcard DNS** le **wildcard SSL certificate** ho domain ea hau. Baibua [Ultimate Multisite 101](./ultimate-multisite-101) ho bona lipaolo tse ntlha ho ba le bohlokoa.

### Leetso la Netwaka (Network Title) {#network-title}

Ho fana ka leela la netwaka la hau. Ho tsamaiso ho fetoga leela la site la hau le "Network" ho fana. U ka fetola lehlelo lehlelo la ho feta ka tsela efe mo settings tsa netwaka.

### Email ea Admin ea Netwaka (Network Admin Email) {#network-admin-email}

Lefatse leletse la email e o tšoa ho fanaelang ho litšoa tsa litiro tsa litiro tsa netefika. Le tla fanaana le email ea morao o neng a sebelisang.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Ho feta fa u fana ka ba le litlhaka tsa hau, u tsamaetsa ka **Continue**.

## Step 3: Ho Installisa {#step-3-installation}

U tsamaetsa ka bojhwe la **Install** ho haholo. Bojhwe lebo le dira tsela lima tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pampano tse pamp

![Mokotso o tšhobo oa ho setso ha multisite - Ho ba le ho fihla](https://example.com/images/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Lehetseng |
|------|-------------|
| **Enable Multisite** | Ho fana ka constant ehlopha `WP_ALLOW_MULTISITE` mo `wp-config.php` |
| **Create Network** | Ho fana le taba tsa database tsa multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, le hore le leng le leng le tsamaisang) le ho ba le lehlelo le lehlopha la hau |

| **Ho Hlalosa Ho Litshubisi** | Ho fana ka litshubisi tsa ho hlalosa (constants) tsa multisite lehle ka `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, le hore le hore).

| **Fix Cookies** | E tlhahlo ka ho ba le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le

Ho tsela le tsela efe ea sefapso se se fana ka litlhahiselo tse:

- **Pending** — Se fetang ho ba lehle ho fana.
- **Installing...** — Se se fana ka lebaka la ho ba lehlile (se se fana).
- **Success!** — Se se feta ka hlokompho.
- **Error message** — Ho ntse ho na le moro (litlhahiso li tla re bolela eng e le ntho e fetang).

Ha o ka sebope ka sebope sa tsela hantle, u tla bona litlhahlo tsa "Success!" le lona le leng le leng:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Ho fana'a ka ho tsamaea go tloha kwa morao wa ho fihla.

## Step 4: Ho Fihla {#step-4-complete}

Ha o fihle fa ho fihla, o tla bona litshobo tsa boikotso le seo se bua sa ho ntlha hore WordPress Multisite e ne e tsamaisa.

![Mokotlho o tšhobo ea Multisite - Ho fihla haholo](https://example.com/images/installation/multisite-wizard/wizard-complete.png)

U ka seka ho fana ka setshwantshwa sa Ultimate Multisite ho fana le ho lula (configure) platform ea WaaS ea hau (dits'a lelapa tsa pele, litšomo tsa bohloko, dits'a tšepo tsa khotso, le hore le ho hloka).

:::note
Ha o ka hlobo ha ho fihla lehle la multisite efeletse, sefomohong sa hau se tla fihla ka admin ya network e fetileng. Ho ka hloka ho fihla fa u tla fihla fa cookies ea authentication di fetileng ho tloha ho multisite environment.
:::

## Setso Se Sebebehang Se Letsatsi Le Letsoho {#manual-setup-fallback}

Ha re ka seba hore le wizzard (wizard) se ka tsamaya ho liketsoeng sa `wp-config.php` ea hau (ka sebelelinga tsa litšomo kapa tsela e tsoang ea server), e tla ba le code e hloka ho fana ka manu:

1. Ho **constants tsa wp-config.php** tse di hloka ho fanahe lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle lehle

Ho lapa lehlelo la ho tsoela (Troubleshooting)

### Le wizzard a re kea hore wp-config.php ha se ka tsamaisang {#troubleshooting}

Ha u fetole litshobelo tse di dirileng, u reka le page lefa, le wizzard o tla bona hore multisite e neng e tsamaile (active).

## Ho tsoela (Troubleshooting) {#the-wizard-says-wp-configphp-is-not-writable}

### Le wizzard a re kea hore wp-config.php ha se ka tsamaisang {#sites-are-not-accessible-after-setup-subdomains}

Ha u fetole litshobelo tse di dirileng, u reka le page lefa, le wizzard o tla bona hore multisite e neng e tsamaile (active).

Ho fana'a, sehlopha sa web server (web server process) se hloka litlhokomelo tsa ho kopa (write permission) le file e na le lela la `wp-config.php`. Ho na le dikgwetlho tse di fetang:

- Ho fana ka tšhaba le tšhaba tsa lofile ho ba le `644` kapa `666`
- Usa le litšomo tsa ho setso tse di dirwang le liho tse di hohomang kea le liho tse di hohomang

### Sites haholo ho ba lelelo (subdomains) {#authentication-issues-after-setup}

Ha o ne u ba leboho ka ho ba leka le tšhobo ea subdomain structure, u hloka ho setso **wildcard DNS** ho domain ea hau. Re tshepa record ea DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Re tla tsamaea le baotang ba hau ha u le bohle ka ho tseba hore o ka setseha kae.

### Morero ea ho fihlela haholo ka ho setso {#a-step-failed-during-installation}

Ha u le thabela (logged out) kapa u leboha li-cookie (cookie errors) haholo ka ho setsoa multisite:

1. Lifa cookie tsa hau ka browser ho site
2. Ho fana ka login mme ka `yourdomain.com/wp-login.php`
3. Ha le fa se se se tloha, le tseba hore `wp-config.php` ea hau e na le `COOKIE_DOMAIN` e setsoe hoe `false` — ke ntho e tseba ho leboetso ka monate a multisite.

### Ho fana ea se se se tshepe ho tla (A step failed during installation)

Ha se se se se tshepe ka se se se se se se se se se se se se se se se se se se se se se se se se se se se se se se se

1. Re le tšepo e ntse e tsamaea (error message) e e tšepileng.
2. Fa u tsamaea fa se a fihla, re phela ka mofuta o ne a tsamaisa.
3. Fa se a fihle, re tla bona lefa la PHP error log haholo ho bona mafoko a fanaang.

4. Ho litšomo tse di fetileng li tla tsamaisa ho fana ka fa le tsela e fetileng (installer e le idempotent).
