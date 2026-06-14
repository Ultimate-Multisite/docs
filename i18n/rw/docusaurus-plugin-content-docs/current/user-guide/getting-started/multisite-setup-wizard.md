---
title: Urugero rw'Ubwuzera bw'Umuco w'Ubutumwa bwo Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Urugero mu Gutangira (Multisite Setup Wizard)

Ultimate Multisite yitera umwujaji w'umuntu (wizard) uyuhesha gukora ubushobozi bwo gutera umusaruro wa WordPress wese mu gukoresha nk'uburyo bw'Umuganda (Multisite network). Ibi bikunda ukwibuka kw'uko wumweze gukora ibyo, ntabwo ugomba gukora uburyo bwa `wp-config.php` cyangwa gukora amagambo y'urugero mu database.

:::tip
Niba umusaruro wa WordPress wako ugiye gukoresha nk'Umuganda (Multisite network) kandi, uza kuba wumva uyu muryango w'umwujaji. Umuhesha w'umuntu uya ku gikorwa cyangwa ntabwo umweze gukora ibyo.
:::

## Icyo Gishobora Kwibuka Mu gihe runaka?

Igihe ugiye gutera Ultimate Multisite ku WordPress installation ya runaka (isanzwe, itari ukoresha Multisite), plugin yitera umuntu ko Multisite ntabwo yari yakoreshwa kandi ikunda gukora ubushobozi bwo gutera Umuganda (Multisite Setup Wizard) mu gihe cyangwa uburyo bwa setup runaka.

Ushobora kandi ugenda kuwo kuri **WP Admin > Ultimate Multisite > Multisite Setup**.

## Icyo Gishobora Kwibuka (Prerequisites)

Mbere yo gukora umwujaji w'umuntu, yemeza ko:

- Ufite **uburyo bwa administrator** ku WordPress installation yawe
- Ifichier `wp-config.php` mu server yawe igaragaza ko **igaragaza (writable)** n'uko web server ashobora gukoresha
- Ufite **backup cyiza** y'ibintu byawe (files) n'ubwoko bw'umutware (database)

:::warning
Umwujaji w'umuntu ugiye gutera fichier yawe `wp-config.php` kandi ugiye gukora amagambo y'urugero mu database. Yemeza ko ufungura backup mbere yo kwiga.
:::

## Icyemezo 1: Urugero (Welcome)

Icyemezo cyo mbere kigaragaza iki ni Multisite WordPress ni iki cyo umwujaji w'umuntu uya gukora:

- Gutera ubushobozi bwo Multisite mu konfigurasi yawe ya WordPress
- Gukora amagambo y'urugero (database tables) igomba kumenya
- Gutera ibyemezo by'Umuganda (multisite constants) mu `wp-config.php`
- Gutera Ultimate Multisite ku giti cyose mu rwego rwawe (network)

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Gukoresha **Continue** kugira ngo ugerere.

## Icyemezo 2: Uburyo bwo Gutera Umuganda (Network Configuration)

Icyemezo cyo gishobora kuguha ko ugomba gukora ibyo by'umwihariko mu gutera amakuru y'Umuganda (network settings).

### Ubushobozi bw'Uburyo bwo Gutera Umusaruro (Site Structure)

Shyira uko ubushobozi bwo gutera umuryango w'ubwoko bwawe:

- **Sub-domains** (Urugererwa) — Ubwoko buhindura sub-domain yayo, urugero `site1.yourdomain.com`
- **Sub-directories** — Ubwoko uburyo bwo gukoresha path, urugero `yourdomain.com/site1`

:::note
Niba wamukoresheje sub-domains, uza kuba ufite ubushobozi bwo gukoresha **wildcard DNS** n'ubwoko bwa SSL **wildcard**. Ubwoko bwa WordPress bwa manageye cyane bishobora gukora ibi byo mu buryo bw'ibindi. Kurera [Ultimate Multisite 101](./ultimate-multisite-101) kugira ngo umenye uburyo bwo gukoresha ibyo bifite ubwoko.
:::

### Umuco w'Ubwoko (Network Title)

Gukoresha izina ry'ubwoko bwawe. Iyi nshingiro itera izina ry'ubwoko runaka, kandi igira uburyo bwo gushobora guhindurwa mu gihe cy'ubwoko.

### Email ya Umuko w'Ubwoko (Network Admin Email)

Icyemezo cyo email gikoreshwa ku masezerano y'umuko w'ubwoko. Iyi nshingiro itera email ya umuntu ugiye gukora ibi byo mu gihe.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nyuma yo gukoresha amabwiriza, gukoresha **Continue** kugira ngo utangire.

## Icyemezo 3: Gutera (Installation)

Gukoresha ubutumwa bwo **Install** kugira ngo utangire. Umuco w'ubwoko ugaragaza ibi byo mu buryo bw'ibindi mu gihe cy'ibindi, kandi ugiye mu gikorwa cyangwa umuntu wamukoresheje.

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Etappe | Maagambo |
|---|---|
| **Kibonera Multisite** | Imeza `WP_ALLOW_MULTISITE` mu `wp-config.php` |
| **Gukora Network** | Gukora tables za database za multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, n'ibindi) kandi gushyira muzo y'ubwoko bwawe (network configuration) |
| **Kugenzura Icyemezo** | Gutera ibi cyemezo by'isite multisite mu `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, n'ibindi) |
| **Gukemura Cookies** | Gushobora kugira URL y'isite mu metadata ya network kugira ngo utagire ikibazo cy'ubwujgwa nyuma yo gukoresha (after activation) |
| **Gukora Plugin ya Network** | Gukora network-activates Ultimate Multisite kugira ngo igire mu gice cyose cy'ubwoko bwawe (network) |

Icyo gihe, umuntu yona uyu gihe yitwa:

- **Pending** — Ugiye gukoreshwa
- **Installing...** — Ugiye gukora
- **Success!** — Yagize neza
- **Error message** — Ikibazo cyagize (umugambi uzwi uburyo)

Iyo n'ubwo bose bafashe neza, uza kubona status ya "Success!" ikoresheje igihugu cy'isite yose:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Iyo, umwujaji uzagize gukora ibi byiza mu gihe cyo gukemura (completion screen).

## Etappe ya 4: Gukemura

Iyo gukoreshwa cyangwa gukorwa cyane, uza kubona uburyo bwo gushimira ko WordPress Multisite yagize neza.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Ushobora gukomeza gukoresha umwujaji w'Ultimate Multisite kugira ngo uburye ubwoko bwawe (company details, content y'ibindi, payment gateways, n'ibindi) utere.

:::note
Nyuma yoroshye ubushakasho bishobora kubona ku cyemezo cy'network admin yashyirwaho. Ufite uburyo bwo gukoresha (login) cyane nk'uko amakuru y'authentication atangwa mu mutengo w'multisite.
:::

## Uburyo bwo gutera umuntu (Manual Setup Fallback)

Niba igice cy'wizard cyashobora gukora ibyo ku file yawe `wp-config.php` (kugira ngo ubyumva uburenganzira bw'file cyangwa uburyo bwa server), izwiho ikoresha uburyo bwo gutera umuntu:

1. **Constants za wp-config.php** zishobora guhindurwa ku gihe cy'uriye `/* That's all, stop editing! */`
2. **Rewrite rules za .htaccess** zishobora gukoreshwa mu buryo ushobora (subdomain cyangwa subdirectory) w'ubwoko bwawe bw'site.

Nyuma yo gukora ibyo, ugira ngo ubyumve ku gihe cy'wizard cyerekana ko multisite yashyirwaho.

## Gukoresha uburyo bwo gutera umuntu (Troubleshooting)

### Icyemezo cy'wizard cyamukira ko wp-config.php siho cyangwa sihoro

Uburyo bwawe bw'web server bukenye n'ubushobozi bwo gukora ibyo ku file ya `wp-config.php`. Ufite uburyo bwo gukora:

- Gukinda uburenganzira bw'file (permissions) mu gihe cy'umwihariko kuri `644` cyangwa `666`
- Gukoresha inama za gutera umuntu zishobora guhindurwa n'uburyo bwo gutera umuntu byerekana.
- Kwibanda ku gukora ibyo kuhoza (hosting) ubufasha.

### Sites sihoro cyangwa sihoro arizo (subdomains)

Niba wamukoreshe ubwoko bw'subdomain, ugomba gukora **wildcard DNS** kuri domain yawe. Gufasha inyandiko y'DNS:

```
Type: A (cyangwa CNAME)
Host: *
Value: [server IP yawe]
```

Gusubiza kuhoza ubufasha niba ushaka gukora ibyo cyangwa ushaka kumenya uko ubura.

### Icyemezo cy'authentication nyuma y'gukora

Niba wamukoreshe (logged out) cyangwa ubyumva ibyo mu gihe cy'multisite:

1. Gukinda cookies zawe mu browser ku site yawe
2. Gutera umuntu cyane kuri `yourdomain.com/wp-login.php`
3. Niba ikibazo cyo kigira umwihariko, gushobora gukoresha ibi: gushobora gukinda cookies zawe mu browser ku site yawe, gutera umuntu cyane kuri `yourdomain.com/wp-login.php`, kandi niba ikibazo cyo kigira umwihariko, gushobora gukoresha ibi: gushobora gukinda cookies zawe mu browser ku site yawe, gutera umuntu cyane kuri `yourdomain.com/wp-login.php`. Niba ikibazo cyo kigira umwihariko, gushobora gukoresha ibi: gushobora gukinda cookies zawe mu browser ku site yawe, gutera umuntu cyane kuri `yourdomain.com/wp-login.php`.

### Icyemezo cy'umugambi cyashoboye gukora mu gihe cy'gukora


Ntawumyo umwe mu gihe cyo gukoresha:

1. Gufata uburyo bw'ibibazo byo guhagarara (error message)
2. Gukira ku gihe cyo gukoresha (configuration step) kandi ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo bwo gukora cyangwa ugabone uburyo b
