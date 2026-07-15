---
title: Ukuhlanganiswa Kobuqashi Obuningi
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Ukuhlanganiswa kwe-Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ishintsha izindawo eziningana zokuxhumana kokuhlanganiswa kwabaqashi abazimele, ukuqinisekiswa kokufuduka, kanye nokuzenzakalela komjikelezo wokuphila womqashi.

## Ukugeleza kokuqala komqashi {#tenant-bootstrap-flow}

Ukuhlanganiswa okudala noma okushintsha abaqashi kufanele kulandele lolu hlelo:

1. Thola irekhodi lerejista yomqashi nemodeli yokuhlukanisa.
2. Dala noma uqinisekise umbhali wedathabheyisi yomqashi.
3. Qalisa i-schema yomqashi.
4. Hlinzeka abasebenzisi bomqashi.
5. Bhalisa ukuqondiswa komqashi nezindlela ze-filesystem.
6. Qalisa ukuqinisekiswa kokufuduka ngaphambi kokudalula umqashi.

Ungacabangi ukuthi umqashi ozimele angaphinda asebenzise uxhumano lwedathabheyisi yenethiwekhi. Sebenzisa irejista yomqashi kanye nezindlela zokubhala ezihlinzekwa yi-addon.

## Ama-hook e-SSO ne-REST {#sso-and-rest-hooks}

Ukungena ngokuzenzakalela komqashi okungenasimo kusebenzisa amathokheni aphila isikhathi esifushane anesimangalo senjongo, ukuvikelwa kokuphindwa kwe-JTI, umkhawulo wokuphelelwa yisikhathi, nokubophezela kumsuka. Ukuhlanganiswa okwengeza izinkinobho zokungena noma izixhumanisi zokuphatha ukude kufanele kukhiqize ukuvakasha komqashi ngokugeleza kwe-SSO okusekelwayo kunokwakha ama-URL okungena komqashi ngqo.

Imicimbi yokuhlolwa kwe-API ohlangothini lwenethiwekhi nezifinyezo zansuku zonke ziyatholakala kumagateway abaqashi abazimele. Sebenzisa lawo malogi lapho ulungisa amaphutha ezinhlelweni zangaphandle ezibiza ama-endpoint omjikelezo wokuphila womqashi.

## Ama-URL ezenzo zekhasimende elizimele {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 iqondisa izenzo zamakhasimende abaqashi abazimele emuva kusayithi eliyinhloko ngokugeleza kwe-account, checkout, billing, invoice, isayithi, ukushintsha ithempulethi, nokumatanisa isizinda. Ukuhlanganiswa okubonisa izixhumanisi zokuphatha ohlangothini lomqashi kufanele kuqondise lezo zenzo kuphaneli yekhasimende lesayithi eliyinhloko futhi kufake indawo yokubuyela eqinisekisiwe lapho umsebenzisi kufanele akwazi ukubuyela kumqashi ngemva kokuqeda isenzo.

Sebenzisa i-wrapper eyinhloko ye-SSO ngezixhumanisi zokuphatha eziwela izizinda:

```php
$url = wu_with_sso($main_site_customer_url);
```

I-URL ekhiqiziwe isalokhu ingahlungwa nge-`wu_sso_url`, ethola i-URL ye-SSO, umsebenzisi wamanje, i-ID yesayithi eliqondiwe, nomongo wokuqondisa kabusha. Ama-add-on angasebenzisa leyo filter ukwengeza umongo oqondene nomhlinzeki noma ukushintsha i-URL ye-broker kuyilapho kugcinwa ukuqinisekiswa kwethokheni kwe-Ultimate Multisite.

Ungaphindi isimo sobulungu, invoice, ikheli lokukhokhisa, ithempulethi, noma ukuphathwa kwesizinda ngaphakathi komqashi ozimele. Phatha ideshibhodi yomqashi njengesiqalisi kanye nephaneli yekhasimende lesayithi eliyinhloko njengohlelo oluyirekhodi lezenzo eziphathwayo.

## Ukuqinisekiswa kokufuduka {#migration-verification}

Ngemva kokuthi ukufuduka noma ukuhlanganiswa komjikelezo wokuphila kushintshe idatha yomqashi, qalisa amasango okuqinisekisa:

- `wp tenant verify-no-legacy --site=<site-id>` iqinisekisa ukuthi umqashi akasanciki ezindleleni ezindala zohlangothi lwenethiwekhi.
- `wp tenant verify-sovereign-push --site=<site-id>` iqinisekisa ukuthi imisebenzi ye-sovereign push ingacubungula futhi iqede.

Ukuhlanganiswa kufanele kuphathe ukuqinisekiswa okuhlulekile njengesivimbeli sokufakwa futhi kugweme ukumaka umqashi njengophilayo kuze kube yilapho ukwehluleka sekuxazululiwe.

## Ukususwa komqashi {#tenant-deletion}

Ukugeleza kokususa kufanele kubize indlela yokudiliza ye-addon ukuze imininingwane yokufinyelela kudathabheyisi yomqashi ihlanzwe. Ukuhlanganiswa kwangaphandle kungasusa izinsiza zomhlinzeki ngemva kokuthi ukudiliza kuphumelele, kodwa akufanele kususe amadathabheyisi noma amafolda osokhaya ngesikhathi ukuqinisekiswa noma imisebenzi ye-async push isasebenza.

## Irutha yedathabheyisi ephelelwe yisikhathi {#deprecated-database-router}

I-`Database_Router` yakudala ithathelwe indawo i-stub yokuphelelwa yisikhathi. Ukuhlanganiswa okusha kufanele kuthole abaqashi nge-router yamanje yesayithi nama-API erejista yomqashi kunokuncika ku-class ye-router endala.
