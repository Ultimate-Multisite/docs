---
title: Vrystellingsnotas
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Vrystellingsnotas {#release-notes}

## Weergawe 2.13.0 — Vrygestel op 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nuut: Soewereine-huurder-ondersteuning bygevoeg vir kliënt-Account, checkout, fakturering, site, faktuur-, sjabloonwissel- en domeinkarteringvloei sodat huurdernetwerke kliënte kan terugstuur na die hoof-site vir bestuurde aksies.
- Nuut: Hernuwingsbewys-kontroles bygevoeg vir herhalende lidmaatskappe sodat gateways outomatiese hernuwing kan deaktiveer wanneer ’n gestoorde faktureringsooreenkoms, subscription of vault token ontbreek.
- Nuut: HMAC-geverifieerde loopback-publisering bygevoeg vir hangende site-skepping om checkout-na-site-voorsiening betroubaarder te maak op hosts waar agtergrondtake vertraag word.
- Nuut: Ontwikkelaar-uitbreidingspunte bygevoeg vir SSO-URL’s, checkout-vorm-basisdomeine en outomatiese domeinrekord-skepping.
- Regstelling: SSO is betroubaarder oor gekarteerde domeine, anonieme broker-besoeke, afmelding en afhanklikheidskonflikte tussen plugins.
- Regstelling: Hangende site-skepping herstel nou van verouderde publiseervlae en voorkom dat kliënte op die site-skeppingskerm vassteek.
- Regstelling: Domeinrekords word nie meer geskep vir gedeelde checkout-vorm-basisdomeine nie, en ongebruikte host-verskaffer-agtergrondtake word oorgeslaan wanneer geen integrasie aktief is nie.
- Regstelling: Checkout, faktuuradres, wagwoordterugstelling, e-posverifikasie, sjabloonwisseling, toere en kliënt-Dashboard-randgevalle blokkeer nie meer normale kliëntvloei nie.
- Regstelling: Uitsaai-e-posse hou nou ontvangers privaat terwyl SMTP/plugin-fatale foute vermy word wanneer ontvangerlyste of posvervoer misluk.
- Regstelling: Lidmaatskaphernuwings, vervaldatumvertoning en randgevalle vir betalingsinvordering vermy nou onmiddellike verval, ineenstortings of gemiste vereiste betalings.
- Verbeter: WordPress-versoenbaarheid word tot 7.0 getoets, produksie-Vue-bates word herbou vanaf npm-bronne, en Cypress-einde-tot-einde-dekking oefen nou meer checkout-, opstelling-, SSO- en gateway-vloei uit.

## Weergawe 2.12.0 — Vrygestel op 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nuut: Hostinger (hPanel) bygevoeg as ’n ondersteunde host-verskaffer met domeinkartering-integrasie
- Nuut: Site Exporter hanteer nou netwerk-invoerbundels vir vaartbelynde netwerk-wye site-herstel
- Regstelling: BCC-uitsaai-e-posse gebruik nou ’n onbekendgemaakte-ontvangers-header om te voorkom dat ontvangeradresse blootgestel word
- Regstelling: Lidmaatskapvervaldatum word nie meer beskadig wanneer dit met ’n nie-datumwaarde gestoor word nie
- Regstelling: Stripe-lidmaatskapopdaterings maak nou afslag korrek skoon sonder om die verouderde deleteDiscount API te roep
- Regstelling: SSO-herleidings op domein-gekarterde sites word nou beperk om oneindige herleidingslusse te voorkom
- Regstelling: Opstellingsassistent-beeldkieser-seleksie werk nou die onderliggende datamodel korrek op
- Regstelling: Site Exporter CLI behou nou die korrekte versteknetwerk-site-seleksie
- Verbeter: Gebundelde wp-cli uit die plugin-pakket verwyder, wat plugin-grootte verminder

## Weergawe 2.11.0 — Vrygestel op 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nuut: Site-uitvoere bundel nou ’n selflaaiende `index.php` sodat die ZIP op ’n vars host geïnstalleer kan word sonder ’n aparte plugin-installasie.
- Nuut: Netwerkuitvoer laat administrateurs alle subsites in ’n enkele argief uitvoer vanaf die Site Export-adminbladsy.
- Nuut: Laat Site Templates-planwissel toe word nou deur ’n terugvalketting afgedwing, wat sjabloonbeskikbaarheid korrek vir planlimiete beperk.
- Nuut: Checkout-vormredigeerder waarsku wanneer ’n produk bygevoeg word sonder ’n vereiste veld wat gekonfigureer is.
- Nuut: Invoer/Uitvoer-instellingsoortjie beskryf nou duidelik sy omvang en skakel direk na die Site Export-nutsmiddel.

## Weergawe 2.10.0 — Vrygestel op 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nuut: PayPal-begeleide opstellingsassistent vir handmatige geloofsbriefinvoer met OAuth-vlaghek vir naatlose gateway-konfigurasie.
- Nuut: Kliëntpaneel vir sjabloonwisseling herontwerp met huidige-sjabloon-kaart, volgehoue rooster en **Stel huidige sjabloon terug**-knoppie.
- Regstelling: Sjabloonwisseling laat die UI nie meer hang by AJAX-mislukking nie.
- Regstelling: Toestemmingstoestande vir sjabloonwisseling beveilig teen ongemagtigde toegang.
- Regstelling: Site-oorheersingsinsette gevalideer voor stoor.
- Regstelling: Faktuuradres-aanporring word nou gewys wanneer adres leeg is.
- Regstelling: PHP 8.1 null-na-string-verouderingskennisgewings opgelos.
- Regstelling: Currents lui gelaai voor init-hook om tydsberekeningskwessies te voorkom.
- Regstelling: Gefiltreerde SSO-pad gerespekteer oor alle aanmeldvloei.
- Regstelling: Leë site-identiteitsopsies behou wanneer gestoor word.

## Weergawe 2.9.0 — Vrygestel op 2026-04-30 {#version-290--released-on-2026-04-30}

- Nuut: Enkel-site-uitvoer en -invoer bygevoeg onder **Nutsmiddels > Uitvoer & Invoer**.
- Regstelling: Uitvoer-ZIP-lêers word nou deur ’n geverifieerde aflaai-endpoint bedien.
- Regstelling: SQL-inspuitingsrisiko en navraagkwessies in hangende uitvoer-/invoernavrae reggestel.
- Regstelling: Hangende site nie gepubliseer wanneer admin kliënt-e-pos handmatig verifieer nie.
- Regstelling: Verweesde pending_site-rekords skoongemaak wanneer lidmaatskap ontbreek.
- Regstelling: Instellingsnavigasie-opvulling en soekanker-navigasie reggestel.
- Regstelling: Hangende sites word nou eerste in die Alle Sites-aansig gewys.
- Regstelling: Skermskootverskaffer (mShots) User-Agent-header bygevoeg om 403-foute te voorkom.
- Regstelling: Import cron schedule-sirkelafhanklikheid opgelos.
- Regstelling: Toer-ID’s genormaliseer na onderstrepings in gebruikersinstellingsleutels.
- Verbeter: ZipArchive word nou gebruik in plaas van Alchemy/Zippy vir beter versoenbaarheid.

## Weergawe 2.8.0 — Vrygestel op 2026-04-29 {#version-280--released-on-2026-04-29}

- Nuut: Enable Jumper-wisselknoppie by Other Options-instellings-UI gevoeg.
- Nuut: Status-kolom by die lys-tabel vir checkout-vorms gevoeg.
- Nuut: Addon sunrise-lêerlaaier vir pasgemaakte MU plugin sunrise-uitbreidings.
- Verbeter: Foutverslaggewing opt-in-instelling van instellingsbladsy verwyder.
- Regstelling: Thank-you-bladsy se site-kaart — beeld is nou beperk en skakels is korrek gestileer.
- Regstelling: Screenshot-verskaffer van thum.io na WordPress.com mShots oorgeskakel.
- Regstelling: Enable Registration en Default Role stel nou korrekte verstekwaardes op vars installasie.
- Regstelling: `get_site_url()` gee nie meer leeg terug wanneer domein ’n poort insluit nie.
- Regstelling: Clone-media-lêers word nou korrek gekopieer wanneer `copy_media`-instelling leeg was.
- Regstelling: Object cache korrek ongeldig gemaak ná network-activate sitemeta-skryf.
- Regstelling: Pasgemaakte domein outomaties tot primêr bevorder by DNS-verifikasie vir 3-delige domeine.
- Regstelling: Hangende membership gekanselleer wanneer vervalde betaling skoongemaak word.
- Regstelling: Wagwoordsterkte-kontroleerder weer gebind nadat inline-aanmeldprompt afgewys is.
- Regstelling: Oneindige bladsyherlaai op thank-you-bladsy gestop wanneer site reeds geskep is.
- Regstelling: WP-kern-registrasie-opsie gesinkroniseer by plugin-aktivering en instellings stoor.
- Regstelling: Null-vervalbeskerming in `calculate_expiration` bygevoeg vir PHP 8.4-versoenbaarheid.
- Regstelling: Duplikaat-registrasies geblokkeer wanneer kliënt reeds ’n aktiewe membership het.
- Regstelling: Null-kontrole bygevoeg vir `date_expiration` in checkout.
- Regstelling: Site-voorsiening versterk — beperkings, membership-afleiding, domeinbevordering.
- Regstelling: Pre-install-kontrole se statusetiket reggestel na NOT Activated wanneer kontrole misluk.
- Regstelling: Checkout-domein gebruik vir e-posverifikasie-URL’s.
- Regstelling: Outomatiese aanmelding ná checkout wanneer geen wagwoordveld teenwoordig is nie.
- Regstelling: Gratis memberships verval nie meer nie — as lewenslank hanteer.
- Regstelling: E-posverifikasiehek hou site-publisering terug totdat kliënt e-pos verifieer.
- Regstelling: SES v2 API endpoint-basispad en identiteitsroete reggestel.
- Regstelling: `wu_inline_login_error`-hook uitgestuur in pre-submit catch-blok.
