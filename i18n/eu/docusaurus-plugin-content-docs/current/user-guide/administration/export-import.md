---
title: Exporte eta importazioa
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportatu eta Importatu

Ultimate Multisite 2.9.0-ek **Tools > Export & Import** (Herri-gainak > Exportatu eta Importatu) menuaren ondorioz, bat-sitea ZIP file batez paketo dezakezu, hori sortzeko edo Ultimate Multisite eta single-site WordPress instalazioak artean site bat aurkitzea behar duzu.

## Aurrezko eskatzenak (Required permissions)

Sortu edo importatu egiten duen sitean WordPress-en **Tools** menua erabil sortzen dituen administrator gisa identifikatu behar duzu. Multisite network batean, network-lekin Ultimate Multisite-aren herramienta batzuk sortu edo importatu egiten baduzu, subsites sortzeko network administrator kontua erabilizten duzu.

Export ZIP deskargak autentikatuak deskargapen endpoint-ekoa (authenticated download endpoint) bidez ematen daitezke, zehazki deskargapena amaitu ondoren admin sesionak aktibo jarraitu eta sortutako deskargapen URL-ek ez hartu publikoan.

## Site bat ZIP-era exportatu

1. Kopietzen nahi duzu sitearen WordPress admin-ean, **Tools > Export & Import** (Herri-gainak > Exportatu eta Importatu) funtziara jarraitu.
2. Sortuareko erabilgarria aurkitu eta paketo dezakezu nahi duzu sitea desitu.
3. Aurreratutako kontuentuak, gurekin uploadak, plugins eta themes (tema-ak), jartzen dituzten kontua, desebutatu.
4. Exportatua hasten du eta prozesua amaituko aldatu. Site handiak ZIP batean gehiago ezarritzeko beharrezkoa izan daiteke.
5. Amaitu sortutako ZIP-era exportatu listaren batetik deskargatu.

ZIP-era seguragarri jardutze duen lekuan jarraitu. Site kontuentua, konfiguraturaak, media fileak eta desebutatutako kode assetak ez du.

## Zer dago inguruko (What the export includes)

Export ZIP batek barne dutenak:

- Desebutatu sitearen database kontuentuak eta konfiguraturaak.
- Uploadak sortu dituzten kontuan media fileak.
- Aurreratutako kontua desebutatu duzu kontuan plugins eta themes (tema-ak).
- Target instalazioan sitea berri sortzeko Export & Import tool-ek erabilten metadata importatuak.

Ez dago ZIP-aren eksakua diseinazioa media-ren kopurua, aukeratutako plugin-ek eta themes-en diseinazioari eta webgunearen database-aren tabele-aren diseinazioan erabilizten.

## Webgune bat ZIP-etik importatzea

1. Destino WordPress webgunean **Tools > Export & Import** (Herri-gainak > Exportatu eta Importatu) funtziokoa jarri.
2. Importatzeko eragilea irekitu eta Export & Import tool-ek ezarritutako ZIP-aren uzailedu.
3. Webguneak leku berri bat erabiltzea eskatzen ari den denean, URL haseritzapen (replacement URL) sortu duzu, edo orokorra URL-a ki lapurtu nahi duzu beharko duzu ezarritapenaren bakarra laitzen.
4. Importatuaren amaieran ZIP-aren lapurtzea erantzuten edo ezartzen nahi duzu aukeratu duzu.
5. **Begin Import** (Importatuaren hautatzea) klikatu.
6. Importatuaren pendinga ikusi ditu zehar amaitila. Prosesoa amaitzen aurretik arloi behar bada, **Cancel Import** (Importatuaren lapurtzea kudeatzea) erabiliz piztu duzu.
7. Ordalak edo kliak erabiltzeko aukera ematen aurretik importatuaren webgunearen irudiak ikusi duzu.

WordPress instalazio bat webgunean, ZIP-a orokorako webgunea importatuta dagoen webgunean erpotzat egiten da. Importatuaren hasiera baino lehen target webgunearen oso kopuriko backup bat ezartu duzu eta berrek importak batzuk ezarritzen ez duzu berrek webgunei berekin.

## Limitazioak eta kompatibilitateko noturiaren testuinguruak

Batzu handiak datu-aldiaren edo media biblioteca hauek ZIP file bat handiagoak emateko potensialdie ditu. Handi ZIP file bat eksportatu edo importatu behar baino lehen, PHP upload limitak, ekzekutapena limitak, disk espazioa, memoria eta server timeout henia jakinaraztezu behar da.
Handi media biblioteca hauek txiki trafikoko manutenzione (maintenance) ikastarekin aurkitzen behar izan dezatat.
Target WordPress instalazioa kompatiboa WordPress, PHP, Ultimate Multisite, plugin eta theme bertsioak eratu behar dira.
Single-site import bat target sitea erradio du. Merge tool ez da.
Multisite-to-single-site eta single-site-to-multisite mugiketa suportatzen dira, baina target erabilera (environment) exportatutako sitearen pluginak, themeak, URL-ek eta beharrezko Ultimate Multisite beste parte hauek eratu dezatat.
ZIP maila pribatu izan duzu. Exportatutako sitearen database datuak, uploadatutako fileak eta konfiguratizio detallak ditu.

Ezkerre network-level eksport workflow bat da, [Site Export](/user-guide/administration/site-export) testuaren ikusi.
