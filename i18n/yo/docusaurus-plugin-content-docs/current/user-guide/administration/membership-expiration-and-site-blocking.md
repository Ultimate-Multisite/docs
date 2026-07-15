---
title: Ìparí Ìṣèjọmọ́ àti Dídènà Site
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Ipẹ̀yà Membership àti Didènà Ojúlé

Ìtọ́nisọ́nà yìí ṣàlàyé bí Ultimate Multisite ṣe ń bójú tó ipẹ̀yà membership, òpin ìdánwò, àti didènà ojúlé ní iwájú. Ó bo ìgbésí-ayé membership láti ìṣiṣẹ́ dé ipẹ̀yà, àwọn eto tó ń ṣàkóso bóyá a máa dènà àwọn ojúlé, àti ohun tí a yẹ kí o ṣàyẹ̀wò nígbà tí àwọn ojúlé bá ṣì ṣeé wọ̀lé lẹ́yìn tí membership bá parí.

## Ìgbésí-ayé Ipò Membership {#membership-status-lifecycle}

Gbogbo membership nínú Ultimate Multisite ní ọ̀kan nínú àwọn ipò wọ̀nyí:

:::note Àwọn membership ọ̀fẹ́ jẹ́ ti gbogbo ayé
Àwọn membership ọ̀fẹ́ kì í parí láìfọwọ́yí. Ultimate Multisite ka wọ́n sí ìráyè wọ̀lé fún gbogbo ayé, nítorí náà a kì í fi wọ́n sínú àwọn àyẹ̀wò ipẹ̀yà àyàfi tí alákóso bá yí ipò wọn padà tàbí gbé oníbàárà náà lọ sí ọja míì.
:::

| Ipò | Ìtumọ̀ |
|---|---|
| **Ní ìdúró** | Ń dúró de ìsanwó àkọ́kọ́ tàbí ìjẹ́rìí imeeli |
| **Ń dánwò** | Àkókò ìdánwò ń ṣiṣẹ́, a kò tíì gba ìsanwó |
| **Ń ṣiṣẹ́** | Ti sanwó, ó sì wà lójú òní |
| **Wà Ní Ìdádúró** | Ìsanwó ìmúdọ̀tun wà ní ìdúró (a ti dá invoice, ń dúró de ìsanwó) |
| **Ti parí** | Ó ti kọjá ọjọ́ ipẹ̀yà àti àkókò àánú láìsí ìmúdọ̀tun |
| **Ti fagilé** | Oníbàárà tàbí admin fagilé e ní kedere |

### Bí Àwọn Membership Ṣe Ń Yí Padà Sí Ti Parí {#how-memberships-transition-to-expired}

Ultimate Multisite ń ṣe àyẹ̀wò abẹ́lẹ̀ **ní gbogbo wákàtí** tó ń wá àwọn membership tó yẹ kí a samisi gẹ́gẹ́ bí ti parí. Àyẹ̀wò yìí ń lo [Action Scheduler](https://actionscheduler.org/) (kì í ṣe WP-Cron taara) ó sì ń ṣiṣẹ́ gẹ́gẹ́ bí iṣẹ́ tí a ṣètò `wu_membership_check`.

Àyẹ̀wò ipẹ̀yà ní **àkókò àánú ọjọ́ mẹ́ta tí a kọ́ sínú rẹ̀** ní àiyipada. A kì yóò samisi membership gẹ́gẹ́ bí `expired` títí ọjọ́ mẹ́ta lẹ́yìn tí `date_expiration` rẹ̀ bá kọjá. Èyí ń fún àwọn oníbàárà ní àkókò láti parí ìsanwó tó pẹ́ kí ipò wọn tó yí padà.

:::info
Àkókò àánú ipẹ̀yà ọjọ́ mẹ́ta yàtọ̀ sí eto Àkókò Àánú Didènà Iwájú Ojúlé tí a ṣàlàyé nísàlẹ̀. Àkókò àánú ipẹ̀yà ń ṣàkóso ìgbà tí **ipò yí padà** láti ṣiṣẹ́/wà ní ìdádúró sí ti parí. Àkókò àánú didènà iwájú ojúlé ń ṣàkóso ìgbà tí **a dènà ojúlé** lẹ́yìn tí ipò ti yí padà tán.
:::

#### Àwọn Membership Tó Ń Ṣe Ìmúdọ̀tun Fúnra Wọn àti Tí Kì Í Ṣe Bẹ́ẹ̀ {#auto-renewing-vs-non-auto-renewing-memberships}

Ìyàtọ̀ yìí ṣe pàtàkì fún lílóye ìhùwàsí ipẹ̀yà:

- **Àwọn membership tí kì í ṣe ìmúdọ̀tun fúnra wọn** (`auto_renew = false`): Iṣẹ́ cron wákàtí ń bójú tó gbogbo ìgbésí-ayé -- ó dá àwọn ìsanwó ìmúdọ̀tun, ó yí membership padà sí wà ní ìdádúró, ó sì máa samisi rẹ̀ níkẹyìn gẹ́gẹ́ bí ti parí bí a kò bá gba ìsanwó.

- **Àwọn membership tó ń ṣe ìmúdọ̀tun fúnra wọn** (`auto_renew = true`): Àyẹ̀wò ipẹ̀yà cron **fo àwọn wọ̀nyí kọjá pátápátá**. A ń retí pé ẹnu-ọ̀nà ìsanwó (Stripe, PayPal, abbl.) yóò fi tó Ultimate Multisite létí nípasẹ̀ webhooks nígbà tí subscription bá kùnà tàbí bá fagilé. Bí a kò bá gba webhook náà -- nítorí endpoint tí a kò ṣètò dáadáa, ìdààmú ẹnu-ọ̀nà ìsanwó, tàbí subscription tí a fagilé lóde eto náà -- membership lè wà ní `active` láìní òpin kódà lẹ́yìn tí ọjọ́ ipẹ̀yà bá kọjá.

### Bí Àwọn Ìdánwò Ṣe Ń Parí {#how-trials-end}

Nígbà tí àkókò ìdánwò membership tó ń dánwò bá parí, eto náà:

1. Dá ìsanwó ìmúdọ̀tun tó wà ní ìdúró pẹ̀lú iye subscription kíkún
2. Yí ipò membership padà láti `trialing` sí `on-hold`
3. Fi imeeli ìfitónilétí ìsanwó ìmúdọ̀tun ránṣẹ́ sí oníbàárà

Ìlànà yìí ń ṣiṣẹ́ lórí ìtòlẹ́sẹẹsẹ wákàtí kan náà gẹ́gẹ́ bí àyẹ̀wò ipẹ̀yà déédéé, ṣùgbọ́n **fún àwọn membership tí kì í ṣe ìmúdọ̀tun fúnra wọn nìkan**. Fún àwọn ìdánwò tó ń ṣe ìmúdọ̀tun fúnra wọn, ẹnu-ọ̀nà ìsanwó ló ń bójú tó yíyípadà láti ìdánwò sí subscription tó sanwó.

## Dènà Ìráyè Iwájú Ojúlé {#block-frontend-access}

Ní àiyipada, nígbà tí membership bá parí tàbí bá lọ sí ìdádúró, **Dashboard wp-admin nìkan ni a máa fi ìhámọ́ sí**. Iwájú ojúlé gbogbogbò ojúlé náà ṣì máa ṣeé wọlé fún àwọn àlejò. Láti tún dènà ìráyè gbogbogbò, o gbọ́dọ̀ mú eto **Dènà Ìráyè Iwájú Ojúlé** ṣiṣẹ́.

### Ṣíṣètò Eto Náà {#configuring-the-setting}

Lọ sí **Ultimate Multisite > Settings > Memberships** kí o sì mú **Dènà Ìráyè Iwájú Ojúlé** ṣiṣẹ́.

![Àwọn eto Dènà Ìráyè Iwájú Ojúlé tó fi toggle tí a ti mú ṣiṣẹ́ hàn, àkókò àánú ọjọ́ 7, àti yíyan Ojúewé Didènà Iwájú Ojúlé](/img/config/settings-membership-block-frontend.png)

Èyí ni àwòrán kíkún ti ojúewé eto membership:

![Ojúewé kíkún àwọn eto membership](/img/config/settings-membership-full.png)

Àwọn eto mẹ́ta tó ní ìbátan ń ṣàkóso ìhùwàsí yìí:

| Eto | Àpèjúwe | Àiyipada |
|---|---|---|
| **Dènà Ìráyè Iwájú Ojúlé** | Toggle olórí. Nígbà tí a bá mú un ṣiṣẹ́, ó dènà iwájú ojúlé gbogbogbò àwọn ojúlé nẹ́tíwọ́ọ̀kì nígbà tí membership wọn kò bá ṣiṣẹ́ mọ́. | Paa |
| **Àkókò Àánú Didènà Iwájú Ojúlé** | Iye ọjọ́ láti dúró lẹ́yìn tí membership bá di aláìṣiṣẹ́ kí a tó dènà. Ṣètò sí `0` láti dènà lẹ́sẹ̀kẹsẹ̀. | 0 |
| **Ojúewé Didènà Iwájú Ojúlé** | Ojúewé kan lórí ojúlé àkọ́kọ́ láti darí àwọn àlejò sí nígbà tí a bá dènà ojúlé. Bí a kò bá ṣètò rẹ̀, àwọn àlejò máa rí ìfiránṣẹ́ gbogbogbò “Ojúlé kò sí fún lílò”. | Kò sí |

### Ohun Tí Àwọn Àlejò Máa Rí Nígbà Tí A Bá Dènà Ojúlé {#what-visitors-see-when-a-site-is-blocked}

Nígbà tí a bá dènà ìráyè iwájú ojúlé, àwọn àlejò sí ojúlé náà yóò boya:

1. **A ó darí wọn** sí ojúewé tí o yàn nínú **Ojúewé Didènà Iwájú Ojúlé** (bí a bá ṣètò rẹ̀), tàbí
2. **Wọn yóò rí ìfiránṣẹ́ àiyipada**: "Ojúlé yìí kò sí fún lílò ní àsìkò yìí." pẹ̀lú ìjápọ̀ sí ojúewé ìwọlé fún admin ojúlé náà.

Àwọn admin ojúlé ṣì lè wọlé -- a kì í dènà ojúewé ìwọlé láé.

### Ohun Tí A Ń Dènà àti Ìgbà Wo {#what-gets-blocked-and-when}

Ìhùwàsí didènà dá lórí ipò membership:

| Ipò Membership | A Dènà Iwájú Ojúlé? | A Lo Àkókò Àánú? |
|---|---|---|
| Ń ṣiṣẹ́ | Rárá | -- |
| Ń dánwò | **Rárá** (wo àkíyèsí nísàlẹ̀) | -- |
| Wà Ní Ìdádúró | A ka a sí pé ó ń ṣiṣẹ́ -- a kò dènà | -- |
| Ti parí | **Bẹ́ẹ̀ni**, bí Dènà Ìráyè Iwájú Ojúlé bá wà ní titan | Bẹ́ẹ̀ni |
| Ti fagilé | **Bẹ́ẹ̀ni**, nígbà gbogbo (láìka eto sí) | **Rárá** -- a dènà lẹ́sẹ̀kẹsẹ̀ |
| Ní ìdúró | A kò dènà nípasẹ̀ àyẹ̀wò membership | -- |

:::warning A kì í dènà àwọn membership tó ń dánwò
Kódà bí àkókò ìdánwò bá ti parí, membership tó ní ipò `trialing` **kì yóò** jẹ́ dídènà ní iwájú ojúlé. Ìdánwò náà gbọ́dọ̀ kọ́kọ́ yí padà sí ipò míì (ní ọ̀pọ̀ ìgbà `on-hold` nípasẹ̀ iṣẹ́ cron, lẹ́yìn náà `expired` bí a kò bá sanwó). Bí o bá ń rí àwọn membership tó ń dánwò tí kò tíì yí padà, ṣàyẹ̀wò apá ìtọ́jú ìṣòro nísàlẹ̀.
:::

:::note Àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí a ti fagilé máa ń kọjá àkókò àánú
Àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí a ti fagilé ni a máa ń dènà nígbà gbogbo lẹ́yìn tí ọjọ́ ìparí bá ti kọjá, láìka bóyá Dí Ìwọlé Apá Iwájú ti ṣiṣẹ́. Àkókò Àánú Dídi Apá Iwájú kò **ṣeé lò** fún àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí a ti fagilé.
:::

## Ìṣàwárí Ìṣòro: Àwọn Ojúlé Tó Ṣì Ṣeé Wọlé Lẹ́yìn Ìparí {#troubleshooting-sites-remaining-accessible-after-expiration}

Bí àwọn ojúlé bá ṣì ṣeé wọlé fún gbogbo ènìyàn lẹ́yìn tí ìforúkọsílẹ̀ ọmọ ẹgbẹ́ bá parí, ṣe àwọn àyẹ̀wò wọ̀nyí ní títẹ̀lé ìlànà:

### 1. Jẹ́rìí pé Ètò Dí Ìwọlé Apá Iwájú Ti Ṣiṣẹ́ {#1-verify-the-block-frontend-access-setting-is-enabled}

Lọ sí **Ultimate Multisite > Àwọn Ètò > Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́** kí o sì jẹ́rìí pé ìyípadà **Dí Ìwọlé Apá Iwájú** wà ní titan. Ètò yìí **wà ní pípà ní àìyípadà**, èyí túmọ̀ sí pé wp-admin nìkan ni a dènà nígbà tí ìforúkọsílẹ̀ ọmọ ẹgbẹ́ bá di aláìṣiṣẹ́.

### 2. Ṣàyẹ̀wò Àkókò Àánú Dídi Apá Iwájú {#2-check-the-frontend-block-grace-period}

Lórí ojúewé àwọn ètò kan náà, ṣàyẹ̀wò iye **Àkókò Àánú Dídi Apá Iwájú**. Bí a bá ṣètò èyí sí ọjọ́ 7, fún àpẹẹrẹ, apá iwájú kò ní dènà títí di ọjọ́ 7 lẹ́yìn ọjọ́ ìparí ìforúkọsílẹ̀ ọmọ ẹgbẹ́ -- kódà bí ipò ìforúkọsílẹ̀ ọmọ ẹgbẹ́ bá ti jẹ́ `expired` tẹ́lẹ̀.

Ṣètò èyí sí `0` bí o bá fẹ́ kí dídi bẹ̀rẹ̀ lẹ́sẹ̀kẹsẹ̀ lẹ́yìn tí ìforúkọsílẹ̀ ọmọ ẹgbẹ́ bá di aláìṣiṣẹ́.

### 3. Jẹ́rìí pé Ipò Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́ Ti Yípadà Lóòótọ́ {#3-confirm-the-membership-status-has-actually-changed}

Lọ sí **Ultimate Multisite > Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́** kí o sì ṣàyẹ̀wò ipò ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí ó ní ìṣòro. Bí ó bá ṣì ń fi `active` hàn bó tilẹ̀ jẹ́ pé ọjọ́ ìparí ti kọjá, ìyípadà ipò kò tíì ṣẹlẹ̀. Àwọn ohun tó sábà máa ń fà á:

- **Ìforúkọsílẹ̀ ọmọ ẹgbẹ́ náà ń túnse láìfọwọ́sí**: Ṣàyẹ̀wò pápá `auto_renew` lórí ojúewé àtúnṣe ìforúkọsílẹ̀ ọmọ ẹgbẹ́. Bí auto-renew bá ṣiṣẹ́, cron ìparí máa fo ìforúkọsílẹ̀ ọmọ ẹgbẹ́ yìí kọjá -- ó gbẹ́kẹ̀lé ẹnu-ọ̀nà ìsanwó láti jabo ìkùnà náà. Ṣàyẹ̀wò dashboard ẹnu-ọ̀nà rẹ (Stripe, PayPal) láti jẹ́rìí pé ipò subscription bá ohun tí Ultimate Multisite ń fi hàn mu.

- **Iṣẹ́ cron kò tíì ṣiṣẹ́**: Wo ìgbésẹ̀ tó kàn.

### 4. Jẹ́rìí pé Action Scheduler Ń Ṣiṣẹ́ {#4-verify-action-scheduler-is-running}

Ultimate Multisite ń lo Action Scheduler fún àwọn iṣẹ́ cron rẹ̀. Lọ sí **Àwọn Irinṣẹ́ > Àwọn Ìṣe Tí a Ti Ṣètò** ní network admin, kí o sì wá:

- **`wu_membership_check`** -- Èyí yẹ kí ó hàn gẹ́gẹ́ bí ìṣe tó ń tún ṣẹlẹ̀, tó ń ṣiṣẹ́ ní gbogbo wákàtí. Bí ó bá sọnù, a kò ń ṣètò àwọn àyẹ̀wò ìforúkọsílẹ̀ ọmọ ẹgbẹ́.
- **`wu_async_mark_membership_as_expired`** -- Ìwọ̀nyí jẹ́ àwọn iṣẹ́ kọ̀ọ̀kan láti samisi àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ kan pàtó gẹ́gẹ́ bíi ti ó ti parí. Bí o bá rí àwọn ìṣe tó kùnà níbí, wọ́n lè ní àwọn ìfiránṣẹ́ aṣiṣe tó ṣàlàyé ìdí.

Bí o bá rí àwọn ìṣe tó di tàbí tó kùnà, o lè ní ìṣòro Action Scheduler. Àwọn ohun tó sábà máa ń fà á:

- **A ṣètò `DISABLE_WP_CRON` sí `true`** nínú `wp-config.php` láìsí cron ìpele ètò tó rọ́pò rẹ̀
- **Ìrìnàjò ojúlé kékeré** -- WP-Cron máa ń ṣiṣẹ́ nígbà tí ẹnìkan bá ṣàbẹ̀wò sí ojúlé nìkan

Láti rí dájú pé cron ń ṣiṣẹ́ ní ìgbẹ́kẹ̀lé, ṣètò iṣẹ́ cron ti ètò:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Ṣàyẹ̀wò Àwọn Ìṣòro Gateway Webhook (Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́ Tó Ń Túnse Láìfọwọ́sí) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Bí ìforúkọsílẹ̀ ọmọ ẹgbẹ́ bá ń túnse láìfọwọ́sí, tí subscription ẹnu-ọ̀nà sì ti fagilé tàbí ti kùnà, ṣùgbọ́n Ultimate Multisite ṣì ń fi hàn gẹ́gẹ́ bí `active`:

- **Stripe**: Lọ sí Stripe Dashboard > Customers kí o sì ṣàyẹ̀wò ipò subscription. Lẹ́yìn náà jẹ́rìí pé endpoint webhook ń ṣiṣẹ́ lábẹ́ Developers > Webhooks. Endpoint náà yẹ kí ó tọ́ka sí ojúlé rẹ kí ó sì fi àwọn ìfiránṣẹ́ tó ṣàṣeyọrí hàn.
- **PayPal**: Ṣàyẹ̀wò ipò subscription nínú Account ìṣòwò PayPal rẹ, kí o sì jẹ́rìí ìfiránṣẹ́ IPN/webhook.

Bí ẹnu-ọ̀nà bá fi hàn pé subscription ti fagilé ṣùgbọ́n Ultimate Multisite kò fi bẹ́ẹ̀ hàn, ó ṣeé ṣe kí ìfitónilétí webhook ti sọnù. O lè yí ipò ìforúkọsílẹ̀ ọmọ ẹgbẹ́ padà pẹ̀lú ọwọ́ ní **Ultimate Multisite > Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́ > [Ṣàtúnṣe Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́]**.

### 6. Ṣàyẹ̀wò Àkókò Àánú Ìparí (Ìpele Cron) {#6-check-the-expiration-grace-period-cron-level}

Àyẹ̀wò cron ní àkókò àánú tirẹ̀ (àìyípadà: ọjọ́ 3) ṣáájú kí ó tó samisi ìforúkọsílẹ̀ ọmọ ẹgbẹ́ gẹ́gẹ́ bí ti ó ti parí. Èyí yàtọ̀ sí àkókò àánú dídi apá iwájú. Àpapọ̀ àkókò kí ojúlé tó di dídènà lè jẹ́:

**Àkókò àánú ìparí (ọjọ́ 3)** + **Àkókò àánú dídi apá iwájú (ètò rẹ)** = Àpapọ̀ ìdádúró

Fún àpẹẹrẹ, pẹ̀lú àwọn ètò àìyípadà àti àkókò àánú apá iwájú ọjọ́ 7, ó lè gba tó ọjọ́ 10 lẹ́yìn `date_expiration` kí ojúlé tó dènà lóòótọ́.

### 7. Parí Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́ Pẹ̀lú Ọwọ́ {#7-manually-expire-a-membership}

Bí o bá nílò láti dènà ojúlé lẹ́sẹ̀kẹsẹ̀ láìdúró de yípo cron, o lè yí ipò ìforúkọsílẹ̀ ọmọ ẹgbẹ́ padà pẹ̀lú ọwọ́:

1. Lọ sí **Ultimate Multisite > Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́**
2. Tẹ ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí ó ní ìṣòro
3. Yí ipò padà sí **Ti Parí** tàbí **Ti Fagilé**
4. Tẹ **Fipamọ́**

Dídi apá iwájú yóò bẹ̀rẹ̀ sí ní ṣiṣẹ́ nígbà tí ojúewé bá tún kó jáde (ó dá lórí Àkókò Àánú Dídi Apá Iwájú fún àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí ó ti parí, tàbí lẹ́sẹ̀kẹsẹ̀ fún àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí a ti fagilé).

## Àkótán {#summary}

Ìlà àkókò kíkún láti ọjọ́ ìparí dé dídi ojúlé:

```text
date_expiration kọjá
       |
       v
  [àkókò àánú cron ọjọ́ 3]     <-- ìforúkọsílẹ̀ ọmọ ẹgbẹ́ ṣì ń hàn gẹ́gẹ́ bí active/on-hold
       |
       v
  Cron samisi ìforúkọsílẹ̀ ọmọ ẹgbẹ́ gẹ́gẹ́ bí "expired"
       |
       v
  [Àkókò Àánú Dídi Apá Iwájú]  <-- a ṣètò rẹ̀ ní Àwọn Ètò > Àwọn Ìforúkọsílẹ̀ Ọmọ Ẹgbẹ́
       |
       v
  Apá iwájú ojúlé ti dènà
```

Fún àwọn ìforúkọsílẹ̀ ọmọ ẹgbẹ́ tí a ti fagilé, ọ̀nà náà kuru síi:

```text
  A fagilé ìforúkọsílẹ̀ ọmọ ẹgbẹ́
       |
       v
  date_expiration kọjá (kò sí àkókò àánú)
       |
       v
  Apá iwájú ojúlé dènà lẹ́sẹ̀kẹsẹ̀
```

## Ìtọ́kasí Olùgbéejáde {#developer-reference}

Àwọn hooks àti filters wọ̀nyí jẹ́ kí o ṣe àdáṣe ìwà ìparí àti dídi:

| Hook/Àlẹmọ | Àpèjúwe |
|---|---|
| `wu_membership_grace_period_days` | Ṣe àlẹmọ iye ọjọ́ àkókò àánú ṣáájú kí a tó samisi ìjẹ́ ọmọ ẹgbẹ́ kan gẹ́gẹ́ bí èyí tó ti parí (aiyipada: 3) |
| `wu_schedule_membership_check_interval` | Ṣe àlẹmọ àárín àkókò láàárín àwọn ìṣàyẹ̀wò ìjẹ́ ọmọ ẹgbẹ́ (aiyipada: wákàtí 1) |
| `wu_membership_renewal_days_before_expiring` | Ṣe àlẹmọ iye ọjọ́ mélòó ṣáájú ìparí láti ṣẹ̀dá ìsanwó ìtúnṣe (aiyipada: 3) |
| `wu_blocked_site_reactivation_url` | Ṣe àlẹmọ láti pèsè URL atunṣiṣẹ àdáni nígbà tí ojúlé kan bá jẹ́ dídènà |
| `wu_membership_is_active` | Ṣe àlẹmọ bóyá a kà ìjẹ́ ọmọ ẹgbẹ́ kan sí aláṣiṣẹ́ |
| `wu_membership_expired_check_query_params` | Ṣe àlẹmọ àwọn paramita ìbéèrè tí a lò láti wá àwọn ìjẹ́ ọmọ ẹgbẹ́ tó ti parí |
| `wu_membership_trial_check_query_params` | Ṣe àlẹmọ àwọn paramita ìbéèrè tí a lò láti wá àwọn ìdánwò tó ti parí |
