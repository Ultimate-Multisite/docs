---
title: Multi-Tenancy na Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ƙarawar Hostinger multi-tenancy ko ya saka don domain-dangi (hosted domains) su iya shiga cikin samar da manhajin abokan ciniki na musamman tare da haɗin aiki na mapin domain na Hostinger da ke akwai yanzu.

Yi amfani da wannan ƙwarewa idan ana'a magance domain-dangi (tenant domains) da na'urar abokin ciniki mai wucewa ta hanyar Hostinger hPanel.

## Bayan dawo ga bayanan shirya {#setup-notes}

1. Shirya haɗin aiki na asali (core Hostinger integration) a ƙarƙashin **Ultimate Multisite > Settings > Host Integrations**.
2. tabbatar cewa token na API na Hostinger zai iya sarrafa domain ko subdomain da ake nufi.
3. Shiga addon na Multi-Tenancy.
4. Shirya tsarin wucewar abokan ciniki (tenant isolation strategy) kafin a fitar da abokin ciniki.
5. Gudanar da tsarin tabbatar da migraction (migration verification workflow) kafin a aiko traffic na samarwa ga abokin ciniki.

Ƙwarewar Hostinger tana amfani da haɗin aiki na musamman na Hostinger don ayyukan wajen sashi (host-side operations). DNS dole ya ci gaba zuwa asusun Hostinger mai dacewa, kuma iyakokunan asusun hPanel suna nan.

## Canje-canjen da suka shafi ƙwarewar {#capability-specific-changes}

- Ana iya samar da abokan ciniki na musamman tare da ayyukan domain da ke fahimtar sashi (host-aware domain operations).
- Girgijan wajen mai sashi (same-machine database host strings) ana gyara kafin a ba tabbacin bayani.
- Abokan ciniki da aka gudanar da su na Hostinger dole su yi amfani da yawan mai sashi na database da ake nuna a hPanel idan WordPress runtime ba ya buƙatar wucewa na kai (local override).
- Zama SSO (Single Sign-On) yana dogara kan domain ɗin abokin ciniki ya shiga zuwa abokin ciniki na Hostinger.

## Magance matsalolin abokan ciniki na Hostinger {#troubleshooting-hostinger-tenants}

- Idan aiki na install abokin ciniki bai yi nasara ba, tabbatar cewa domain ya shiga asusun Hostinger.
- Idan tabbacin database bai yi nasara ba, kwatanta sunan mai amfani (username), sunan database, da haɗin sashi (host binding) na database da ke cikin hPanel.
- Idan **Visit (SSO)** bai yi nasara ba, tabbatar cewa DNS da SSL suna aiki ga domain ɗin abokin ciniki.
- Idan a sake tsara (teardown) ya bar wajen sashi wajen aiki, ka cire duk wani database, mai amfani (users), ko folder da suka dace daga hPanel bayan an tabbatar da backups.
