---
title: Vrystellingsnotas
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Vrystellingsnotas

## Weergawe 2.12.0 — Vrygestel op 2026-05-15

- Nuut: Hostinger (hPanel) is bygevoeg as 'n ondersteunde host-verskaffer met domein-mapping-integrasie.
- Nuut: Site Exporter hanteer nou netwerk-import-bundels vir 'n gestroomlyn herstel van die hele netwerk.
- Fiksing: BCC-uitgestuur e-posse gebruik nou 'n `undisclosed-recipients` header om te verhoed dat ontvangeradresse blootgestel word.
- Fiksing: Die lidmaatskap-vervaldatum word nie meer gekompromitteer wanneer daar met 'n nie-datum-waarde gestoor word nie.
- Fiksing: Stripe-lidmaatskapopdaterings maak nou korrek kortings duidelik sonder om die verouderde `deleteDiscount` API aan te roep.
- Fiksing: SSO-herroeping op domein-gemapte sites word nou beperk om oneindige herroepingslusse te voorkom.
- Fiksing: Die keuse van die setup-wizard-beeldkiezer word nou korrek op die onderliggende data-model opgedateer.
- Fiksing: Site Exporter CLI behou nou die korrekte standaard netwerk-sitekeuse.
- Verbetering: Die ingeboude `wp-cli` is verwyder uit die plugin-pakket, wat die plugin-grootte verminder.

## Weergawe 2.11.0 — Vrygestel op 2026-05-11

- Nuut: Site-uitvoer bundel nou 'n self-boot-`index.php` sodat die ZIP op 'n nuwe host kan geïnstalleer word sonder 'n aparte plugin-installasie.
- Nuut: Netwerk-uitvoer laat administrateurs toe om al die subsites in 'n enkele arkief vanaf die Site Export admin-bladsy uit te voer.
- Nuut: Die moontlikheid om Site Templates te skakel, word nou deur 'n fallback-ketting afgedwing, wat die beskikbaarheid van templates vir planlimiete korrek beperk.
- Nuut: Die checkout-form-redigeerder waarsku wanneer 'n produk bygevoeg word sonder dat 'n verpligte veld geconfigureer is.
- Nuut: Die Import/Uitvoer-instellingstab beskryf nou duidelik sy omvang en skakel direk na die Site Export-instrument.

## Weergawe 2.10.0 — Vrygestel op 2026-05-05

- Nuut: PayPal-geleide setup-wizard vir handmatige kredensiaal-invoer met 'n OAuth-vlaghek vir naatlose gateway-konfigurasie.
- Nuut: Die Template switch customer panel is herontwerp met 'n huidige-template-kaart, 'n permanente rooster, en 'n **Reset current template** knoppie.
- Fiksing: Template-skakeling laat nie meer die UI hang op AJAX-fout nie.
- Fiksing: Template-skakeling-vermogenheidsstatus word beskerm teen ongeoorloofde toegang.
- Fiksing: Site-oortrywingsinvoer word gevalideer voordat dit gestoor word.
- Fiksing: Die faktuuradres-aanvraag word nou getoon wanneer die adres leeg is.
- Fiksing: PHP 8.1 null-na-string verouderingskennisgewings is opgelos.
- Fiksing: Currents word nou voor die `init`-hook lazy-loaded om tydprobleme te voorkom.
- Fiksing: Die gefilterde SSO-pad word oor al die aanmeldingsvloei geregverdig.
- Fiksing: Blanke site-identiteitsopsies word by die stoor bewaar.

## Weergawe 2.9.0 — Vrygestel op 2026-04-30

- Nuut: Enkel-site uitvoer en invoer is bygevoeg onder **Tools > Export & Import**.
- Fiksing: Export-ZIP-lêers word nou deur 'n geauthentiseerde aflaai-endpoint bedien.
- Fiksing: SQL-injeksierisiko en navraagprobleme in uitstaande uitvoer/invoer-navrae is gekorrigeer.
- Fiksing: Die uitstaande site word nie gepubliseer nie wanneer die admin die kliënt se e-posadres handmatig verifieer.
- Fiksing: Verwaarlose `pending_site`-rekords word skoongemaak wanneer lidmaatskap ontbreek.
- Fiksing: Die navigasie-padding en soekanker-navigasie van die instellings is gekorrigeer.
- Fiksing: Uitstaande sites word nou eerste in die All Sites-uitsig getoon.
- Fiksing: Screenshot-verskaffer (mShots) User-Agent header is bygevoeg om 403-foute te voorkom.
- Fiksing: Die invoer-cron-skedule sirkelafhanklikheid is opgelos.
- Fiksing: Tour-ID's word genormaliseer na onderskories in gebruikersinstellingssleutels.
- Verbetering: `ZipArchive` word nou gebruik in plaas van Alchemy/Zippy vir beter kompatibiliteit.

## Weergawe 2.8.0 — Vrygestel op 2026-04-29

- Nuut: Die Enable Jumper-toggle is bygevoeg aan die Other Options settings UI.
- Nuut: 'n Statuskolom is bygevoeg aan die checkout-form-lys-tabel.
- Nuut: Addon sunrise file loader vir aangepaste MU-plugin sunrise-uitbreidings.
- Verbetering: Die opt-in vir foutrapportering is van die instellingsbladsy verwyder.
- Fiksing: Die thank-you-bladsy site-kaart — beeld word nou beperk en die skakels korrek gestileer.
- Fiksing: Screenshot-verskaffer is van thum.io na WordPress.com mShots geskakel.
- Fiksing: Enable Registration en Default Role stel nou korrekte standaardwaardes op by 'n nuwe installasie.
- Fiksing: `get_site_url()` keer nie meer leeg terug wanneer die domein 'n poort insluit nie.
- Fiksing: Media-lêers word nou korrek gekopieer wanneer die `copy_media` instelling leeg was.
- Fiksing: Object cache word korrek ongeldig gemaak na netwerk-aktiveer sitemeta skryf.
- Fiksing: Aangepaste domein word outomaties na primêr gepromoveer by DNS-verifikasie vir 3-gedeelde domeine.
- Fiksing: Uitstaande lidmaatskap word gekanselleer wanneer verlate betaling skoongemaak word.
- Fiksing: Die wagwoordsterkte-kontrole word herbind na die sluiting van die inline-aanmeldings-aanvraag.
- Fiksing: Oneindige bladsyherlaai word gestop op die thank-you-bladsy wanneer die site reeds geskep is.
- Fiksing: WP core-registrasieopsie word gesink by plugin-aktivering en instellingstoestel.
- Fiksing: Null-vervalwaakhouer is bygevoeg in `calculate_expiration` vir PHP 8.4 kompatibiliteit.
- Fiksing: Dubbel-registrasies word geblokkeer wanneer die kliënt reeds 'n aktiewe lidmaatskap het.
- Fiksing: Null-kontrole is bygevoeg vir `date_expiration` in die checkout.
- Fiksing: Site-voorsiening is versterk — beperkings, lidmaatskapinferensie, domeinpromosie.
- Fiksing: Die pre-installasie-kontstatus-etiket word korrigeer na NIE Geaktiveer NIE wanneer die kont misluk.
- Fiksing: Checkout-domein word vir e-posverifikasie-URL's gebruik.
- Fiksing: Outo-aanmelding na checkout wanneer geen wagwoordveld teenwoordig is nie.
- Fiksing: Gratis lidmaatskappe verloor nie meer — behandel as lewenslank.
- Fiksing: E-posverifikasiehek hou die site-publikasie totdat die kliënt e-pos verifieer.
- Fiksing: SES v2 API-endpoint basispad en identiteitsroete is gekorrigeer.
- Fiksing: `wu_inline_login_error` hook word geëmitter in die pre-submit-vangblok.
