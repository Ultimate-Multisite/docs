---
title: Kea leboha ho saho WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# O ka na le ho installa WordPress Multisite?

WordPress Multisite e le sehlopha se fanaang le sehlopha se fapaneng sa sitšhōpho (installation). E le sehlopha se fanaang, empa se se fanaang ka tsela e fapaneng.

:::tip
Ultimate Multisite e na le **[Multisite Setup Wizard](./multisite-setup-wizard)** e ntse a fetola tsela efe ka ho ba le ho fana ka sebope. Ha u na Ultimate Multisite, re re bolela hore u tle u sebelise wizard le goba ho fana ka tsela tse di fetang ke le ho ba le ho feta ka tsela e fetang ea meha tse botle tse bontšang below.

## Hoetsoalo la WordPress {#add-a-trailing-slash-to-wp-admin}

### Leano la ho fana ka Tlhaloso (Documentation) {#common-problems}

Ke tla u thusa ho bona le ho tseba hore na leano la WordPress le howe. Ke tla go fana ka tsela e ntle ea ho bona eng, ho etsa eng, le ho seboha eng. Ho nna le seo o batlang!

### Leano la Ho Baola (Dashboard) {#1-i-can-create-new-sites-but-they-are-not-accessible}

Ho baola le Dashboard haholo ke leka la hau le lehlakeng la hau le WordPress. Ke leka la hau le lehlakeng la hau lehle, le leng le lehlakeng la hau le lehlakeng la hau le le hlompho. Le ka bona eng:

*   **Ho baola ho etsa eng:** Ho bona tsela e ntle ea ho fana ka tsamaiso (posts), le ho hlalosa (pages), le ho ntsa (users) le tse ling.
*   **Lehlakeng la hau lehle:** Le hlompho, le lehlakeng la hau le lehlakeng la hau le le hlompho. Ho fana ka tsela e ntle ea ho baola eng a nang le seo o batlang.

### Leano la Ho Fana (Plugins)

**Plugin** ke leka la hau le lehlakeng la hau le lehlakeng la hau le le hlompho le ho nna le SEO. Ke tla go fana ka tsela e ntle ea ho baola eng a nang le seo o batlang, le ho etsa eng le thata.

*   **Ho Baola:** Ho bona litlhaloso tse ling tse ka fana ka plugins.
*   **Ho Etse Eng:** Ho ntsa le SEO, ho nna le SEO, le ho nna le SEO.

### Leano la WooCommerce (WooCommerce)

**WooCommerce** ke leka la hau le lehlakeng la hau le lehlakeng la hau le le hlompho le ho fana ka tsamaiso ea likarolo tsa hau. Ke tla go fana ka tsela e ntle ea ho baola eng a nang le seo o batlang, le ho etsa eng le thata.

*   **Ho Baola:** Ho bona litlhaloso tse ling tse ka fana ka WooCommerce.
*   **Ho Etse Eng:** Ho ntsa le SEO, ho nna le SEO, le ho nna le SEO.

### Leano la PHP (PHP)

**PHP** ke leka la hau le lehlakeng la hau le lehlakeng la hau le le hlompho le ho fana ka tsamaiso ea likarolo tsa hau. Ke tla go fana ka tsela e ntle ea ho baola eng a nang le seo o batlang, le ho etsa eng le thata.

*   **Ho Baola:** Ho bona litlhaloso tse ling tse ka fana ka PHP.
*   **Ho Etse Eng:** Ho ntsa le SEO, ho nna le SEO, le ho nna le SEO.

### Leano la MySQL (MySQL)

**MySQL** ke leka la hau le lehlakeng la hau le lehlakeng la hau le le hlompho le ho fana ka tsamaiso ea likarolo tsa hau. Ke tla go fana ka tsela e ntle ea ho baola eng a nang le seo o batlang, le ho etsa eng le thata.

*   **Ho Baola:** Ho bona litlhaloso tse ling tse ka fana ka MySQL.
*   **Ho Etse Eng:** Ho ntsa le SEO, ho nna le SEO, le ho nna le SEO.

### Leano la Stripe (Stripe)

**Stripe** ke leka la hau le lehlakeng la hau le lehlakeng la hau le le hlompho le ho fana ka tsamaiso ea likarolo tsa hau. Ke tla go fana ka tsela e ntle ea ho baola eng a nang le seo o batlang, le ho etsa eng le thata.

*   **Ho Baola:** Ho bona litlhaloso tse ling tse ka fana ka Stripe.
*   **Ho Etse Eng:** Ho ntsa le SEO, ho nna le SEO, le ho nna le SEO.

Ka Ultimate Multisite ke plugin e fana ka network-only, mo tsela eo, o tla bona hore na lefa ho ba leba le ho setseha WordPress Multisite manually. Le lipotso tsa hau li fetoga mo [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), jo bo WPBeginner.

**Loiyang tse dintsi joalo ka ho fetola sekhotso se se fanaang le se se fanaang le se se fanaang:**

  * Ntla bohlokoa ho hlahloba hosting ea WordPress! Se khotso se se fanaang le se se fanaang le se se fanaang se se fanaang ka rona se se fanaang.

Kung o na le litaba tse fapaneng le tšepo e le le lefetse, ho ba le ka ntho e ntle ho u ba le le le fetang la host (shared hosting) e tla ba le ka u ba le ka nna.

Boitshwaro ba **Managed WordPress hosting providers** (boitshwaro ba ho fihleletso la WordPress) ba ba le Multisite out-of-the-box (ba ba ntsheka WordPress le Multisite e ntse e fihleletsewe le e fetang kwa u le). Ke tla ba le se se se se ka WP Engine, Closte, Cloudways, le ba bang. Ha u na le boikotso ho tseba hore ke eng le host provider ea hau, u thabela ho tloha le tutorial ena ka hoela le ho fihleletsa.

Go ba le fa u le leboha ho hlalosa WordPress le ho rata ho fana ka file (FTP).

_**BOLELE**_ : Ha u le ho setseka sebopeko sa multisite ka website e nang le WordPress, a re ntlha:

* Ulela lehlelo lefetso la WordPress la hau

  * Ho fana ka ho fana le lefetso lefetso la plugins le hau, a go itlhola sehlopha sa plugins (plugins page), uba ka bulk actions (actions ebeletse) uba ka _Deactivate_ (Ho fana/Ho fana) le pele u ba ka klikela _Apply_ (Ho fana).

Ho ba le Multisite, ho sebelisa mohle ka ho fana ka FTP client kapa cPanel file manager, le feta ho bua le file ea iyong `wp-config.php` ho fetola.

Ho a re, go seng fa lehlelo! Le sana ho ba lehlelo.

```php
define('WP_ALLOW_MULTISITE', true);
```

Re, seke u seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke seke se

Ha o ne le fesošo la multisite le le fetang ka seka, ke nako ea ho setsoetso oa hau oa netefisa.

Go e le **Tools » Network Setup**

<!-- Screenshot a tsamaea: Menu ea WordPress Tools e bontšang opshoni ea Network Setup -->

O ka re tloha le WordPress hore na leina la dikanelo (domain) leofatsoeng lefe ea setso se tla ba se se sebelisa ho litšobelo tsa lits'elo tsa hau: subdomains kapa subdirectories?

Ha o tšoa le ho ba le ka subdomains, u tlameha ho fetola dikepiso tsa DNS ho ho mapola domain le ho ntlha hore u sekeletse _**wildcard subdomains**_ ho setso la multisite ea hau.

Ho fana ka ho fetoga le liti la tšepo (Network Setup), u le fa le le tšepo la hau le le fetoga, u le fa le le maille ea admin ea tšepo e ntse e le etsa. Le fa le _Install_ ho haholo ho fetoga.

<!-- Screenshot a ne a tsela la WordPress le lula le le tsela la ho setseha le mail ya admin -->

Sa fana ka sebope sa WordPress seo e leng le **wp-config.php**:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Kona le code le se fapaneng ke WordPress, seo mo faili wa _**.htaccess**_ wa hau:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# re add trailing slash ho /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

U re use FTP client kapa file manager (ha u batla le sefaphatso se se fetileng, o ka u sebelisa sefaphatso se se fetileng se se fetileng, o ka u sebelisa sefaphatso se se fetileng) ho kopanya le ho feta code lina tse pedi.

Ho fihla, u re-login le site ea WordPress ea hau ho ba le le le le multisite network ea hau.

**Ena bo thusa ho leba le ho tloha hore u ka fetola subsite ea hau ka WordPress Multisite haholo ho ba lehle le ho ba lehle ho ba lehle ka ntlha ya Ultimate Multisite.**

Ho fetola subsite:

  1. Opana wp-admin ea hau

2. Ho fana ka My Sites > Sites (/wp-admin/network/sites.php)

3. Thaba "Add New" a tšho.

4. Leha se fana ka bone le bone:

* Site Address — Se fetoga ho u sebelisa “www”.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Le Titolo tsa Site — Le tsela ya le site, e ka fetogela ka nako le nako

  * Email ea Admin — Ho setsoe ho morao o tla ba user oa admin oa pele oa subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Ha o fana ka le fa motho a fetola fa ntlha e ntshwago (fields), u thabela sebope "Add site" (Add site). Ha ntlha e ntshwago e ntshwago, u tla go tloha ho e ba le ho bona ho bone hore ntlha e ntshwago e etsa eng.

## Morero a Matlha:

### 1. Ke ka fetola litlhalelang (sites) mme haholo ho ba leboho.

Ha uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba uba

Ho bala, u le ka fihla ho ba le pele le dashboard ya mofuta oa hosting wa sebopeo sewa (sehlopha sewa) (sehlopha sewa), o ka na le cPanel/Plesk/Direct Admin e leng fa sebapeo sewa sewa sefana.

Hlola tsela e ntle ho hloba "Domains" kapa "Subdomains". Morero, ka sebo sa control panel sebo se leng, se tla bua ka sehlopha se se fanaang le "Domain administration".

Ho le tsela la subdomain, upha * (asterisk). Ka feta moo, ho tla u be u batla ho chala le domain name se o batlang hore subdomain e fane kaena.

Mora lefa la domain o fetang ho tla hlokomisa go bona ka moto. Leela sebope "Create" (Hloka) kapa "Save" (Leta) ho feta ho fana ka subdomain ya wildcard ea hau. Ho ba le, entry e tla le litlhoko tse di leka: “*.[mydomain.com](http://mydomain.com)”
