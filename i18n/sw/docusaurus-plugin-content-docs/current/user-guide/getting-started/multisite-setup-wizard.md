---
title: Mchawi wa Usanidi wa Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Mwongozo wa Kusanidi Multisite

Ultimate Multisite inajumuisha mwongozo wa ndani ambao hubadilisha kiotomatiki usakinishaji wa kawaida wa WordPress kuwa mtandao wa WordPress Multisite. Hii inaondoa haja ya kuhariri `wp-config.php` kwa mkono au kuendesha amri za database.

:::tip
Ikiwa usakinishaji wako wa WordPress tayari unaendeshwa kama mtandao wa Multisite, unaweza kuruka hatua hii kabisa. Mwongozo unaonekana tu wakati Multisite bado haijawezeshwa.
:::

## Mwongozo Unaonekana Lini?

Unapoamilisha Ultimate Multisite kwenye usakinishaji wa kawaida wa WordPress (ambao si Multisite), programu-jalizi inagundua kuwa Multisite haijawezeshwa na inakuelekeza kiotomatiki kwenye Mwongozo wa Kusanidi Multisite badala ya mwongozo wa kawaida wa kusanidi.

Unaweza pia kuufikia moja kwa moja kwenye **WP Admin > Ultimate Multisite > Multisite Setup**.

## Mahitaji ya Awali

Kabla ya kuendesha mwongozo, hakikisha:

- Una **ufikiaji wa msimamizi** kwenye usakinishaji wako wa WordPress
- Faili ya `wp-config.php` ya seva yako **inaweza kuandikwa** na seva ya wavuti
- Una **nakala rudufu ya hivi karibuni** ya faili zako na database

:::warning
Mwongozo hubadilisha faili yako ya `wp-config.php` na kuunda jedwali mpya za database. Daima tengeneza nakala rudufu kabla ya kuendelea.
:::

## Hatua ya 1: Karibu

Skrini ya kwanza inaeleza WordPress Multisite ni nini na mwongozo utafanya nini:

- Kuwezesha kipengele cha Multisite katika usanidi wako wa WordPress
- Kuunda jedwali zinazohitajika za database ya mtandao
- Kuongeza vigezo vinavyohitajika vya multisite kwenye `wp-config.php`
- Kuamilisha Ultimate Multisite kwa mtandao mzima

![Mwongozo wa Kusanidi Multisite - Hatua ya karibu](/img/installation/multisite-wizard/wizard-welcome.png)

Bofya **Continue** kuendelea.

## Hatua ya 2: Usanidi wa Mtandao

Hatua hii inakuomba usanidi mipangilio ya mtandao wako.

### Muundo wa Tovuti

Chagua jinsi tovuti za mtandao wako zitakavyopangwa:

- **Sub-domains** (Inapendekezwa) — Tovuti hupata subdomain yao, mfano `site1.yourdomain.com`
- **Sub-directories** — Tovuti huundwa kama njia, mfano `yourdomain.com/site1`

:::note
Ukichagua sub-domains, utahitaji kusanidi **wildcard DNS** na **cheti cha wildcard SSL** kwa domain yako. Wenyeji wengi wa WordPress wanaodhibitiwa hushughulikia hili kiotomatiki. Tazama [Ultimate Multisite 101](./ultimate-multisite-101) kwa ulinganisho wa kina.
:::

### Jina la Mtandao

Ingiza jina la mtandao wako. Hii inakadiria kuwa jina la tovuti yako ya sasa likiwa na "Network" imeongezwa. Unaweza kubadilisha hili baadaye kutoka mipangilio ya mtandao.

### Barua Pepe ya Msimamizi wa Mtandao

Anwani ya barua pepe inayotumika kwa arifa za usimamizi wa mtandao. Hii inakadiria kuwa anwani ya barua pepe ya mtumiaji wa sasa.

![Mwongozo wa Kusanidi Multisite - Usanidi wa Mtandao](/img/installation/multisite-wizard/wizard-network-configuration.png)

Baada ya kujaza sehemu, bofya **Continue** kuendelea.

## Hatua ya 3: Usakinishaji

Bofya kitufe cha **Install** kuanza. Mwongozo unafanya hatua tano za kiotomatiki kwa mfuatano, kila moja ikionyesha maendeleo yake kwa wakati halisi:

![Mwongozo wa Kusanidi Multisite - Usakinishaji unasubiri](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Hatua | Maelezo |
|------|-------------|
| **Enable Multisite** | Inaongeza kigezo cha `WP_ALLOW_MULTISITE` kwenye `wp-config.php` |
| **Create Network** | Inaunda jedwali za database za multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, n.k.) na kuzijaza na usanidi wa mtandao wako |
| **Update Configuration** | Inaongeza vigezo vya mwisho vya multisite kwenye `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, n.k.) |
| **Fix Cookies** | Inahakikisha URL ya tovuti ni sahihi katika metadata ya mtandao ili kuzuia matatizo ya uthibitishaji baada ya kuamilisha |
| **Network Activate Plugin** | Inaamilisha Ultimate Multisite kwa mtandao ili iendeshwe kwenye mtandao mzima |

Kila hatua inaonyesha moja ya hali hizi:

- **Pending** — Inasubiri kushughulikiwa
- **Installing...** — Inaendesha sasa hivi
- **Success!** — Imekamilika kwa mafanikio
- **Ujumbe wa hitilafu** — Hitilafu imetokea (ujumbe utaelezea tatizo)

Hatua zote zikamilika kwa mafanikio, utaona hali ya kijani ya "Success!" kwa kila kipengele:

![Mwongozo wa Kusanidi Multisite - Usakinishaji umekamilika](/img/installation/multisite-wizard/wizard-installation-complete.png)

Mwongozo utaendelea kiotomatiki kwenye skrini ya kukamilika.

## Hatua ya 4: Imekamilika

Usakinishaji ukikamilika, utaona ujumbe wa mafanikio unaothibitisha kuwa WordPress Multisite imewezeshwa.

![Mwongozo wa Kusanidi Multisite - Usanidi Umekamilika](/img/installation/multisite-wizard/wizard-complete.png)

Sasa unaweza kuendelea na mwongozo wa kusanidi Ultimate Multisite ili kusanidi jukwaa lako la WaaS (maelezo ya kampuni, maudhui ya kawaida, njia za malipo, n.k.).

:::note
Baada ya usakinishaji wa multisite kukamilika, kivinjari chako kitaelekeza kupitia msimamizi wa mtandao uliowezeshwa hivi karibuni. Huenda ukahitaji kuingia tena kwani kuki za uthibitishaji zinasasishwa kwa mazingira ya multisite.
:::

## Mbadala wa Usanidi wa Mikono

Ikiwa mwongozo hauwezi kuandika kwenye faili yako ya `wp-config.php` (kutokana na ruhusa za faili au vikwazo vya seva), itaonyesha msimbo halisi unaohitaji kuongeza kwa mkono:

1. **Vigezo vya wp-config.php** vinavyohitaji kuongezwa juu ya mstari wa `/* That's all, stop editing! */`
2. **Sheria za kuandika upya za .htaccess** zinazofaa kwa muundo wa tovuti uliyochagua (subdomain au subdirectory)

Baada ya kufanya mabadiliko ya mikono, onyesha upya ukurasa na mwongozo utagundua kuwa multisite sasa inafanya kazi.

## Utatuzi wa Matatizo

### Mwongozo unasema wp-config.php haiwezi kuandikwa

Mchakato wa seva yako ya wavuti unahitaji ruhusa ya kuandika kwenye faili ya `wp-config.php`. Unaweza ama:

- Kubadilisha kwa muda ruhusa za faili kuwa `644` au `666`
- Kutumia maelekezo ya mbadala wa usanidi wa mikono yanayotolewa na mwongozo
- Kuomba msaada kutoka kwa mtoa huduma wako wa hosting

### Tovuti hazipatikani baada ya usanidi (subdomains)

Ukichagua muundo wa subdomain, unahitaji kusanidi **wildcard DNS** kwa domain yako. Ongeza rekodi ya DNS:

```
Type: A (or CNAME)
Host: *
Value: [IP ya seva yako]
```

Angalia na mtoa huduma wako wa hosting ikiwa huna uhakika jinsi ya kusanidi hii.

### Matatizo ya uthibitishaji baada ya usanidi

Ukitolewa kwenye akaunti au kupata hitilafu za kuki baada ya usanidi wa multisite:

1. Futa kuki za kivinjari chako kwa tovuti
2. Ingia tena kwenye `yourdomain.com/wp-login.php`
3. Ikiwa tatizo linaendelea, angalia kuwa `wp-config.php` yako haina `COOKIE_DOMAIN` iliyowekwa kuwa `false` — hii ni tatizo linalojulikana kwenye usakinishaji wa multisite wa subdomain

### Hatua imeshindwa wakati wa usakinishaji

Ikiwa moja ya hatua za usakinishaji inaonyesha hitilafu:

1. Kumbuka ujumbe wa hitilafu ulioonyeshwa
2. Rudi kwenye hatua ya usanidi na jaribu tena
3. Ikiwa hitilafu inaendelea, angalia kumbukumbu ya hitilafu ya PHP ya seva yako kwa maelezo zaidi
4. Hatua ambazo tayari zimekamilika zitarukwa kwenye uendeshaji unaofuata (kisakinishaji kinafanya kazi kwa idempotent)
