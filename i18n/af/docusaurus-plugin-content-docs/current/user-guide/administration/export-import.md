---
title: Ekspoort & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksporteer & Importeer

Ultimate Multisite 2.9.0 voeg 'n **Eksporteer & Importeer**-hulpmiddel vir 'n enkele webwerf by onder **Tools > Export & Import**. Gebruik dit wanneer jy een WordPress-webwerf as 'n ZIP-lêer wil verpak, daardie ZIP wil herstel, of 'n webwerf tussen bietekompatibele Ultimate Multisite en enkele-webwerf WordPress-installasies wil skuif.

## Vereiste toestemminge {#required-permissions}

Jy moet aanmeld as 'n administrateur wat toegang het tot die WordPress **Tools**-menu op die webwerf wat geëksporteer of geïmporteer word. Op 'n multisite-netwerk, gebruik 'n netwerkadministrateur-rekening wanneer jy subwerwe eksporteer of importeer vanaf netwerkvlak Ultimate Multisite-hulpmiddels.

Eksport-ZIP-downloads word deur 'n geauthentiseerde aflaai-eindpunt bedien, so hou die admin-sessie aktief totdat die aflaai voltooi is en deel nie die gegenereerde aflaai-URL's openbaar nie.

## Eksporteer 'n webwerf na 'n ZIP {#exporting-a-site-to-a-zip}

1. Gaan na die WordPress-administrasie vir die webwerf wat jy wil kopieer, en navigeer na **Tools > Export & Import**.
2. Maak die eksportarea oop en kies die webwerf wat jy wil verpak.
3. Kies die opsionele inhoud wat ingesluit moet word, soos uploads, plugins en themes, wanneer daardie opsies beskikbaar is.
4. Begin die eksport en wag totdat die proses voltooi is. Groot webwerwe mag wag om in die agtergrond te voltooi voordat die ZIP gereed is.
5. Laai die voltooide ZIP uit die eksporteerlys af.

Hou die ZIP op 'n veilige plek. Dit kan webwerfinhoud, instellings, mediabestelle en geselekteerde kode-assets bevat.

## Wat die eksport insluit {#what-the-export-includes}

'n Eksport-ZIP kan insluit:

- Die database-inhoud en -konfigurasie van die geselekteerde webwerf.
- Opgeloadde mediabestelle wanneer uploads ingesluit word.
- Plugins en themes wanneer daardie opsies geselekteer word.
- Importmetadata wat deur die Export & Import-hulpmiddel gebruik word om die webwerf op die teiken-installasie te herbou.

Die presiese ZIP-grootte hang af van die hoeveelheid media, die geselekteerde plugins en themes, en die grootte van die webwerf se databasetafels.

## Importeer 'n webwerf uit 'n ZIP {#importing-a-site-from-a-zip}

1. Gaan na **Tools > Export & Import** op die bestemming WordPress-webwerf.
2. Maak die importarea oop en laai die ZIP op wat deur die Export & Import-hulpmiddel geskep is.
3. Voer 'n vervangings-URL in as die webwerf 'n nuwe adres moet gebruik, of laat die veld leeg om die oorspronklike URL te behou.
4. Kies of jy die opgelaaide ZIP wil verwyder nadat die import voltooi is.
5. Klik op **Begin Import**.
6. Monitor die uitstaande import totdat dit voltooi is. Gebruik **Cancel Import** slegs as jy die proses wil stop voordat dit voltooi is.
7. Evalueer die geïmporteerde webwerf voordat jy normale verkeer of kliëntakses toelaat.

Op 'n enkele-webwerf WordPress-installasie vervang die import van 'n ZIP die huidige webwerf met die geïmporteerde webwerf. Maak 'n volledige backup van die teikenwebwerf voordat jy begin, en vermy om meervoudige imports vir dieselfde webwerf op dieselfde tyd te begin.

## Beperkings en kompatibiliteitsnotas {#limitations-and-compatibility-notes}

- Baie groot uploads-direktories of mediabiblioteeke kan groot ZIP-lêers skep. Bevestig PHP-uploadsbeperkings, uitvoeringsbeperkings, skijfspasie, geheue en bedieners-timeout-instellings voordat jy groot webwerwe eksporteer of importeer.
- Baie groot mediabiblioteeke mag gedurende 'n lae-verkeer wagteperiode verhuis moet word.
- Die teiken WordPress-installasie moet bietekompatibele WordPress-, PHP-, Ultimate Multisite-, plugin- en tema-weergawes loop.
- 'n Enkele-webwerf import vervang die teikenwebwerf. Dit is nie 'n fusiehulpmiddel nie.
- Multisite-na-enkele-webwerf en enkele-webwerf-na-multisite skuif word slegs ondersteun wanneer die teikenomgewing die webwerf se plugins, themes, URL's en vereiste Ultimate Multisite-komponente kan loop.
- Hou die ZIP privaat. Dit kan databasisinhoud, opgelaaide lêers en konfigurasiedetails van die geëksporteerde webwerf bevat.

Vir ouer netwerkvlak eksportwerkstrome, kyk na [Site Export](/user-guide/administration/site-export).
