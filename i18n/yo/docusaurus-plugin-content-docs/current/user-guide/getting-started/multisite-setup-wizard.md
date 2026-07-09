---
title: Olùrànlọ́wọ́ Ìṣètò Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Olùrànlọ́wọ́ Ìṣètò Multisite

Ultimate Multisite ní olùrànlọ́wọ́ tí a kọ sínú rẹ̀ tí ó máa ń yí ìfíṣọ́ọ̀nù WordPress boṣewa padà sí nẹ́tíwọ́ọ̀kì WordPress Multisite láìfọwọ́sí. Èyí mú kí kò sí ìdí láti ṣàtúnṣe `wp-config.php` tàbí ṣiṣẹ́ àwọn àṣẹ ibi-ipamọ́ data pẹ̀lú ọwọ́.

:::tip
If your WordPress installation is already running as a Multisite network, you can skip this step entirely. The wizard only appears when Multisite is not yet enabled.
:::

## Nígbà Wo Ni Olùrànlọ́wọ́ Yóò Farahàn?

Nígbà tí o bá mu Ultimate Multisite ṣiṣẹ́ lórí ìfíṣọ́ọ̀nù WordPress boṣewa (tí kì í ṣe Multisite), plugin náà máa rí i pé Multisite kò tíì ṣiṣẹ́, ó sì máa darí rẹ lọ sí Olùrànlọ́wọ́ Ìṣètò Multisite dípò olùrànlọ́wọ́ ìṣètò deede.

O tún lè wọlé sí i taara ní **WP Admin > Ultimate Multisite > Ìṣètò Multisite**.

## Àwọn Ohun Tó Gbọdọ̀ Wà Ṣáájú

Kí o tó ṣiṣẹ́ olùrànlọ́wọ́ náà, rí dájú pé:

- O ní **ìwọlé olùṣàkóso** sí ìfíṣọ́ọ̀nù WordPress rẹ
- Fáìlì `wp-config.php` olupèsè rẹ jẹ́ **èyí tí a lè kọ sí** nípasẹ̀ olupèsè wẹẹbu
- O ní **àfikún-ààbò tuntun** ti àwọn fáìlì àti ibi-ipamọ́ data rẹ

:::warning
The wizard modifies your `wp-config.php` file and creates new database tables. Always create a backup before proceeding.
:::

## Ìgbésẹ̀ 1: Káàbọ̀

Ìbojú àkọ́kọ́ ṣàlàyé ohun tí WordPress Multisite jẹ́ àti ohun tí olùrànlọ́wọ́ náà yóò ṣe:

- Mu àǹfààní Multisite ṣiṣẹ́ nínú ìṣètò WordPress rẹ
- Ṣẹ̀dá àwọn tábìlì ibi-ipamọ́ data nẹ́tíwọ́ọ̀kì tó yẹ
- Ṣàfikún àwọn kọnsítáǹtì multisite tó nílò sí `wp-config.php`
- Mu Ultimate Multisite ṣiṣẹ́ fún gbogbo nẹ́tíwọ́ọ̀kì

![Olùrànlọ́wọ́ Ìṣètò Multisite - Ìgbésẹ̀ káàbọ̀](/img/installation/multisite-wizard/wizard-welcome.png)

Tẹ **Tẹ̀síwájú** láti tẹ̀síwájú.

## Ìgbésẹ̀ 2: Ìṣètò Nẹ́tíwọ́ọ̀kì

Ìgbésẹ̀ yìí béèrè pé kí o ṣètò àwọn ìṣètò nẹ́tíwọ́ọ̀kì rẹ.

### Ìgbékálẹ̀ Site

Yan bí àwọn site nẹ́tíwọ́ọ̀kì rẹ yóò ṣe ṣètò:

- **Sub-domains** (A ṣàbá rẹ) — Àwọn site máa gba subdomain tiwọn, bí àpẹẹrẹ `site1.yourdomain.com`
- **Sub-directories** — A máa ṣẹ̀dá àwọn site gẹ́gẹ́ bí àwọn ọ̀nà, bí àpẹẹrẹ `yourdomain.com/site1`

:::note
If you choose sub-domains, you will need to configure **wildcard DNS** and a **wildcard SSL certificate** for your domain. Most managed WordPress hosts handle this automatically. See [Ultimate Multisite 101](./ultimate-multisite-101) for a detailed comparison.
:::

### Àkọlé Nẹ́tíwọ́ọ̀kì

Tẹ orúkọ kan fún nẹ́tíwọ́ọ̀kì rẹ. Èyí jẹ́ àkọlé site rẹ lọwọlọwọ nípa aiyipada, pẹ̀lú "Network" tí a fi kún un. O lè yí èyí padà lẹ́yìn náà láti àwọn ìṣètò nẹ́tíwọ́ọ̀kì.

### Ímeèlì Alákóso Nẹ́tíwọ́ọ̀kì

Àdírẹ́sì ímeèlì tí a ń lò fún àwọn ìfitónilétí ìṣàkóso nẹ́tíwọ́ọ̀kì. Èyí jẹ́ àdírẹ́sì ímeèlì olùlò lọwọlọwọ nípa aiyipada.

![Olùrànlọ́wọ́ Ìṣètò Multisite - Ìṣètò Nẹ́tíwọ́ọ̀kì](/img/installation/multisite-wizard/wizard-network-configuration.png)

Lẹ́yìn tí o bá ti kún àwọn pápá náà, tẹ **Tẹ̀síwájú** láti tẹ̀síwájú.

## Ìgbésẹ̀ 3: Ìfíṣọ́ọ̀nù

Tẹ bọ́tìnì **Fi Sọ́ọ̀nù** láti bẹ̀rẹ̀. Olùrànlọ́wọ́ náà máa ṣe ìgbésẹ̀ aládàáṣiṣẹ́ márùn-ún ní tẹ̀lé-tẹ̀lé, ọkọọkan yóò sì fi ìlọsíwájú rẹ hàn ní àkókò gidi:

![Olùrànlọ́wọ́ Ìṣètò Multisite - Ìfíṣọ́ọ̀nù ń dúró](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Ìgbésẹ̀ | Àpèjúwe |
|------|-------------|
| **Mu Multisite ṣiṣẹ́** | Ṣàfikún kọnsítáǹtì `WP_ALLOW_MULTISITE` sí `wp-config.php` |
| **Ṣẹ̀dá Nẹ́tíwọ́ọ̀kì** | Ṣẹ̀dá àwọn tábìlì ibi-ipamọ́ data multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, abbl.) kí o sì kún wọn pẹ̀lú ìṣètò nẹ́tíwọ́ọ̀kì rẹ |
| **Ṣe Àfikún Ìṣètò** | Ṣàfikún àwọn kọnsítáǹtì multisite ìkẹyìn sí `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, abbl.) |
| **Ṣàtúnṣe Cookies** | Rí dájú pé URL site náà tọ́ nínú metadata nẹ́tíwọ́ọ̀kì láti dènà àwọn ìṣòro ìfọwọ́sí lẹ́yìn ìmúṣiṣẹ́ |
| **Mu Plugin Ṣiṣẹ́ Lórí Nẹ́tíwọ́ọ̀kì** | Mu Ultimate Multisite ṣiṣẹ́ lórí nẹ́tíwọ́ọ̀kì kí ó lè ṣiṣẹ́ káàkiri gbogbo nẹ́tíwọ́ọ̀kì |

Ìgbésẹ̀ kọọkan máa fi ọ̀kan nínú àwọn ìpò wọ̀nyí hàn:

- **Ń dúró** — Ó ń dúró kí a ṣe é
- **Ń fi sọ́ọ̀nù...** — Ó ń ṣiṣẹ́ lọwọlọwọ
- **Àṣeyọrí!** — Ó parí pẹ̀lú àṣeyọrí
- **Ìfiranṣẹ́ àṣìṣe** — Àṣìṣe kan ṣẹlẹ̀ (ìfiranṣẹ́ náà yóò ṣàpèjúwe ìṣòro náà)

Nígbà tí gbogbo ìgbésẹ̀ bá parí pẹ̀lú àṣeyọrí, ìwọ yóò rí ìpò "Àṣeyọrí!" aláwọ̀ ewé fún ohun kọọkan:

![Olùrànlọ́wọ́ Ìṣètò Multisite - Ìfíṣọ́ọ̀nù parí](/img/installation/multisite-wizard/wizard-installation-complete.png)

Olùrànlọ́wọ́ náà yóò wá tẹ̀síwájú láìfọwọ́sí sí ìbojú ìparí.

## Ìgbésẹ̀ 4: Parí

Nígbà tí ìfíṣọ́ọ̀nù bá parí, ìwọ yóò rí ìfiranṣẹ́ àṣeyọrí tí ń jẹ́rìí pé WordPress Multisite ti ṣiṣẹ́.

![Olùrànlọ́wọ́ Ìṣètò Multisite - Ìṣètò Parí](/img/installation/multisite-wizard/wizard-complete.png)

O lè tẹ̀síwájú báyìí pẹ̀lú olùrànlọ́wọ́ ìṣètò Ultimate Multisite láti ṣètò pẹpẹ WaaS rẹ (àwọn alaye ilé-iṣẹ́, àkóónú aiyipada, àwọn ẹnu-ọ̀nà ìsanwó, abbl.).

:::note
After the multisite installation completes, your browser will redirect through the newly-enabled network admin. You may need to log in again as the authentication cookies are updated for the multisite environment.
:::

## Yípadà Sí Ìṣètò Pẹ̀lú Ọwọ́

Bí olùrànlọ́wọ́ náà kò bá lè kọ sí fáìlì `wp-config.php` rẹ (nítorí àwọn àṣẹ fáìlì tàbí àwọn ìdíwọ́ olupèsè), yóò fi kóòdù gangan tí o nílò láti ṣàfikún pẹ̀lú ọwọ́ hàn:

1. Àwọn **kọnsítáǹtì wp-config.php** tí ó nílò láti ṣàfikún lókè ìlà `/* That's all, stop editing! */`
2. Àwọn **òfin rewrite .htaccess** tó bá ìgbékálẹ̀ site tí o yàn mu (subdomain tàbí subdirectory)

Lẹ́yìn tí o bá ṣe àwọn ìyípadà pẹ̀lú ọwọ́, tún ojú-ìwé náà sọ, olùrànlọ́wọ́ náà yóò sì rí i pé multisite ti ṣiṣẹ́ báyìí.

## Yíyanjú Ìṣòro

### Olùrànlọ́wọ́ náà sọ pé wp-config.php kì í ṣe èyí tí a lè kọ sí

Ìlànà olupèsè wẹẹbu rẹ nílò àṣẹ kíkọ sí fáìlì `wp-config.php`. O lè ṣe ọ̀kan nínú wọ̀nyí:

- Yí àwọn àṣẹ fáìlì padà fún ìgbà díẹ̀ sí `644` tàbí `666`
- Lo àwọn ìtọ́nisọ́nà ìṣètò pẹ̀lú ọwọ́ tí olùrànlọ́wọ́ náà pèsè
- Béèrè ìrànlọ́wọ́ lọ́wọ́ olupèsè hosting rẹ

### Àwọn site kò ṣeé wọlé sí lẹ́yìn ìṣètò (subdomains)

Bí o bá yan ìgbékálẹ̀ subdomain, o nílò láti ṣètò **wildcard DNS** fún domain rẹ. Ṣàfikún igbasilẹ DNS kan:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Ṣàyẹ̀wò pẹ̀lú olupèsè hosting rẹ bí o kò bá dá ọ lójú bí a ṣe ń ṣètò èyí.

### Ìṣòro authentication lẹ́yìn setup

Bí o bá ti jáde kúrò nínú ìwọlé tàbí tí o bá ní ìṣòro cookie lẹ́yìn setup multisite:

1. Pa àwọn cookie aṣàwákiri rẹ fún site náà rẹ́
2. Wọlé lẹ́ẹ̀kansi ní `yourdomain.com/wp-login.php`
3. Bí ìṣòro náà bá ń bá a lọ, ṣàyẹ̀wò pé `wp-config.php` rẹ kò ní `COOKIE_DOMAIN` tí a ṣètò sí `false` — èyí jẹ́ ìṣòro tí a mọ̀ lórí àwọn fifi sori multisite subdomain

### Ìgbésẹ̀ kan kuna nígbà fifi sori

Bí ọ̀kan lára àwọn ìgbésẹ̀ fifi sori bá fi àṣìṣe hàn:

1. Kọ ìfiranṣẹ́ àṣìṣe tí a fi hàn sílẹ̀
2. Padà sí ìgbésẹ̀ ìṣètò kí o sì tún gbìyànjú
3. Bí àṣìṣe náà bá ń bá a lọ, ṣàyẹ̀wò log àṣìṣe PHP olupin rẹ fún àlàyé síi
4. Àwọn ìgbésẹ̀ tí ó ti parí tẹ́lẹ̀ ni a ó fo kọjá ní àwọn ìṣiṣẹ́ tó tẹ̀lé e (installer náà jẹ́ idempotent)
