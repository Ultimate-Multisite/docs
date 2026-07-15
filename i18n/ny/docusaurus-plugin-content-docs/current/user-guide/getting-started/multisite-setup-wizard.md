---
title: Mawuwo wopolo wa M'moyo
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite inaliza wiza ya kujenga mtandao wa WordPress (WordPress Multisite). Inaleta wizard moja inayobadilisha usakinishaji wa kawaida wa WordPress kuwa mtandao wa WordPress Multisite kuliweka kiotomatiki. Hii inakuzuia kuhitaji kubadilisha `wp-config.php` au kurunisha amri za database kwa mkono.

:::tip
Kama usakinishaji wako wa WordPress tayari unafanya kazi kama mtandao wa Multisite, unaweza kupuuza hatua hii kabisa. Wizard inajitokeza tu wakati Multisite haijefanywa bado.
:::

## Wizard Inajitokeza Wakati Gani? {#when-does-the-wizard-appear}

Unapofanya iwe Ultimate Multisite kwenye usakinishaji wa kawaida (usio-Multisite) wa WordPress, plugin inagundua kwamba Multisite haijefanywa na kulipeleka kiotomatiki kwenye Multisite Setup Wizard badala ya wizard ya kawaida ya usakinishaji.

Unaweza pia kuifungua moja kwa moja kupitia **WP Admin > Ultimate Multisite > Multisite Setup**.

## Mahitaji Kabla ya Kuanza {#prerequisites}

Kabla ya kurunisha wizard, hakikisha:

- Una **administrator access** kwenye usakinishaji wako wa WordPress
- Faili la `wp-config.php` la seva yako lina **uwezo wa kuandikwa (writable)** na web server
- Una **backup safi** ya faili zako na database

:::warning
Wizard inabadilisha faili lako la `wp-config.php` na huunda tables mpya za database. Daima fanya backup kabla ya kuendelea.
:::

## Hatua ya 1: Karibu (Welcome) {#step-1-welcome}

Skrini ya kwanza inaeleza nini ni WordPress Multisite na wizard itafanya nini:

- Kuwasha kipengele cha Multisite kwenye mipangilio yako ya WordPress
- Kuunda tables za database zinazohitajika kwa mtandao
- Kuongeza constants (maelezo maalum) zinazohitajika za multisite kwenye `wp-config.php`
- Kuweka Ultimate Multisite kama mtandao kwenye mtandao wote

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Bonyeza **Continue** ili kuendelea.

## Hatua ya 2: Mpangilio wa Mtandao (Network Configuration) {#step-2-network-configuration}

Hatua hii inakuuliza uweke mipangilio yako ya mtandao.

### Muundo wa Tovuti (Site Structure) {#site-structure}

Chonani bwanji mwayi mwayi wanu kuti mwayi wanu wa network adzakhwera bwanji:

- **Sub-domains** (Kusintha kwa zikomo) — Zikomo zidzakhala ndi subdomain yake, monga `site1.yourdomain.com`
- **Sub-directories** — Zikomo zidzakwera monga ma-path, monga `yourdomain.com/site1`

:::note
Ngati mwayi wanu mwachome sub-domains, mudzakhala ndi kuyesa **wildcard DNS** ndi **wildcard SSL certificate** kwa domain yanu. Zomwe zambiri zomwe mwayi wanu wopereka (managed WordPress hosts) zimeneza bwino. Ngati mwayi wosonyeza kwambiri (Ultimate Multisite 101) kuti muone kukhazikitsa kwakiri.
:::

### Network Title {#network-title}

Tsimani limodzi linawo lomwe lili kwa network yanu. Ilo lili linawo lili mwayi wanu wosongoingko ndi "Network" yomwe imaperekera. Mwayi wanu mungachitse kuchotsa nthawi zina kuchokera mwayi wa network.

### Network Admin Email {#network-admin-email}

Ilo lomwe limaperekera kwa mafunso a kukhazikitsa network. Ilo lili linawo lili email yomwe imaperekera kwa user wanu wosongoingko.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Pambuyo pamene mwayi wanu mwapereka ma-field, chonde thandizani **Continue** kuti mwayi wanu wosongoingko.

## Step 3: Installation {#step-3-installation}

Chonde thandizani button ya **Install** kuti mwayi wanu wosongoingko kumwe. Mwayi wanu umapereka zinthu limodzi lili m'mwayi wosongoingko, ndipo m'mwayi wosongoingko umapereka mafunso omwe amaperekera m'mwayi woyamba:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Enable Multisite** | Kufuta `WP_ALLOW_MULTISITE` constant ku `wp-config.php` |
| **Create Network** | Kufuna tables za database za multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, nkhawa) ndipo zikafulu ndi maenderu azawo (network configuration) |
| **Update Configuration** | Kufamba ndi constants zolemba za multisite ku `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, nkhawa) |
| **Fix Cookies** | Kufuna kuti URL ya site ikho m'metadata ya network kuti muchezi woperekera authentication kuposa kukhala ndi mavuto kapena pamene muliyeza (after activation) |
| **Network Activate Plugin** | Kufamba ndi Network-activator cha Ultimate Multisite kuti kuseka pa mtundu wosiyanasiyana wosiyanasiyana (runs across the entire network) |

Kukonza kwa nthawi zina, ndipo m'malo ya zinthu zina, muli ndi stiti imodzi:

- **Pending** — Kukhala m'malo kuti kusekure
- **Installing...** — Kuseka m'malo
- **Success!** — Kukhala kusekure bwino
- **Error message** — Kukhala mavuto (message ikufotokozera mavuto)

Pambuyo pa kupeza kuti zonse zinthu zikusekure bwino, mudzindikira stiti la "Success!" lliwamba m'malo ya zinthu zonse:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Mmodzi wosiyanasiyana (wizard) mudzakhala kuseka ku m'malo wa kumukwera.

## Step 4: Complete {#step-4-complete}

Pambuyo pa kukwera, mudzindikira message ya "Success!" yomwe imakumbutsa kuti WordPress Multisite yaliyeze.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Muli ndi umodzi wosiyanasiyana (ultimate multisite setup wizard) m'malo ya kukhazikitsa platform yanu ya WaaS (njira za kampani, zinthu zomwe zimakhala m'malo, payment gateways, nkhawa, osachulidwa, osachulidwa, osachulidwa, osachulidwa).

:::note
Pambere pamene m'ndziwitsa ya multisite imalimbikira, browser yanu idzayenditshira ku admin ya network yaliyendetsedwa. Mungathe kukonza m'ndziwitsa pano pa m'ndziwitsa muli kukhala m'ndziwitsa wanu pamene cookies za authentication zikuyendetsedwa kwa multisite environment.
:::

## Kufamba kwa Kufamba (Manual Setup Fallback) {#manual-setup-fallback}

Ngati wizard haiyendwe kuwerenga ku `wp-config.php` yanu (kukhala m'ndziwitsa pa permissions za file kapena zikufunika ndi server), idzayendetsa kodi yomwe muli nawo:

1. **wp-config.php constants** zomwe muli nawo kuwerenga kuposa lino la `/* That's all, stop editing! */`
2. **.htaccess rewrite rules** zomwe zikuyenera kwa mpira wanu wosankha (subdomain kapena subdirectory)

Pambere pa kukonza m'ndziwitsa pano, refresh lino ndipo wizard idzayendetsa kuti multisite imalimbikira.

## Kufunsa Masogo (Troubleshooting) {#troubleshooting}

### Wizard imalimbikira kuti wp-config.php si yenera kuwerenga (is not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Process ya server yanu imayenera kuwerenga `wp-config.php` file. Muli ndi ulemu:

- Kufamba kwa permissions za file m'maka ku `644` kapena `666`.
- Kutsatira mafunso a manual setup fallback zomwe wizard imalimbikira.
- Kuulitsa wanu wa hosting kuti amapere chithandizo.

### Sites si yenera kuperekedwa pambuyo pa setup (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Ngati muli ndi njira ya subdomain, muli nawo kuwerenga **wildcard DNS** kwa domain yanu. Tambani record la DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Muli ndi ulemu ndi wanu wa hosting kuti muli ndi chondeza momwe mungayendetsa izi.

### Masogo pa authentication pambuyo pa setup {#authentication-issues-after-setup}

Ngati muli wosakonzedwa kapena muli ndi mato za cookie (cookie errors) pambuyo pa multisite setup:

1. Kufamba kwa browser yanu cookies za lino
2. Kukhala wosakonzedwa pano ku `yourdomain.com/wp-login.php`
3. Ngati ndalama imalimbikira, muli ndi ulemu kuti `wp-config.php` yanu si imapere `COOKIE_DOMAIN` kwa `false` — izi ndi ndalama yomwe imalimbikira pa multisite installations za subdomain.

### Kufamba kwa chinthu chimodzi lina kuperekedwa m'maka (A step failed during installation) {#a-step-failed-during-installation}

Moyo muli monga mwezi wamene mwa kulembo:

1. Kufotokozera monga mwezi wamene mwa kulembo, chitsatsa meseji ya kulembo (error message).
2. Tira mwayi ku mwezi wa kukonza (configuration step) uliyiye ndi kuyendera monga m'moyo (try again).
3. Ngati meseji ya kulembo ikupitira, chitsatsa log ya kulembo ya server yako kuti muone zinthu zambiri.
4. Mwezi wamene umene uliyiye kuyendera mudzira m'moyo (idempotent), zimene zikuyendera monga m'moyo (skipped) pa mwayi wosiyanasiyana wamene utaenda.
