---
title: Kupfuura uye Kufamba
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 inoshi chine **Export & Import** tool under **Tools > Export & Import**. Unoda iye kana uchidzo kana iwe WordPress site yakachengeta ku ZIP file, ukubuyisa iZIP, kana kukumbuka site kupfuva kune WordPress installations ezine compatibility Ultimate Multisite ne single-site.

## Required permissions

Unofanira kuingidza seadministrator anogona kuita **Tools** menu ya WordPress pa site yakachengeta kana unokumbuka. Mu network multisite, unofanira kuita iaccount ye administrator ye network kana ukubuyisa kana kukumbuka subsites kubva ku tools ye Ultimate Multisite ye level ye network.

Export ZIP downloads zvinoteverwa kupfungwa yekubhuyisa (authenticated download endpoint), zvinhu dzinofanira kuenda kune admin session yakachengeta kusvika pakupfungwa yekubhuyisa yakange yakaferera, uye ushanyisi URL dzakabhuyiswa kubva mu public.

## Exporting a site to a ZIP

1. Mu WordPress admin ye site yakachengeta kukumbuka, enda ku **Tools > Export & Import**.
2. Funga area yekexport uye chine site unoda kuteerera (package).
3. Chine content inozivikanwa kuti uingine utore, se uploads, plugins, ne themes, kana izvi zvinhu zvichingizirwa kana zvinogona kuita iwo.
4. Funga export uye usagei process yakange yakapera. Sites dzakawanda dzinogona kuenda kune background pfungwa kuti ZIP ikwanise kutanga.
5. Shanda (Download) iZIP yakapera kubva mu list ye exports.

Chingai iZIP munzvimbo inokumbwa. Inogona kuita content ya site, settings, media files, uye code assets dzakachingeri.

## What the export includes

Export ZIP inogona kuita zvinhu izvi:

- Database content ne configuration ye site yakachengeta kana uploads zvinogone kuita iwo.
- Media files yakashandiswa kana uploads zvinogone kuita iwo.
- Plugins ne themes kana izvi zvinhu zvichingizirwa kana zvinogone kuita iwo.
- Metadata inoshandiswa neExport & Import tool kuti site yakanikwa kune installation yakachengeta.

Ukushumbura kwenziro dzakare dzinekuvimbiso zvinhu nezvekuita. Izvi zvinobva pamusoro pekuvaka media (media), plugins, themes, uye ukukurumidza we database tables ya site.

## Kuimba site kubva mu ZIP

1. Penda **Tools > Export & Import** pa WordPress site yakare.
2. Funga chakanangwa cheimba (import area) uye shandisa ZIP yakakwanirwa neExport & Import tool.
3. Shandisa URL inotambudzika kana site inofanira kuita zvinhu zvinotamba, kana usavei iweina kuti URL inenge inoshandiswa.
4. Chibvumira kuti uondele ZIP yakakwanirwa panguva dzinobva kubva muimba (import) chinokura kana chinekuita.
5. Panga **Begin Import**.
6. Funga kuona import inotamba inotambudzika sezvo inosvika pakupedzisira. Shandisa **Cancel Import** asi iweina kuti uondele nzira dzinobva kubva muimba (import) panguva dzinekuita.
7. Ongeze kuona site yakasimuka imba (imported site) panguva unoreva kuti inoshandiswa nevanhu kana vanhu vekare.

Pa WordPress installation ya single-site, imba (ZIP) inobadaite kubva pa site yakanaka. Panga backup yakare yese ye site yakatarwa panguva uingave kuita iye, uye usawane kuita import dzakawanda dzinotsanana dzinogona kutamba muimba (import) panguva dzinobva kubva muimba (import).

## Zvinhu zviri kuita nekuita (Limitations and compatibility notes)

Kutauriro dziri dzeupenyu dzakare. Kuratidza dziri dzeupenyu dzakare zvakawanda kana media libraries dzakare zvakawanda, zvichangopai kuti munoziva limits dzepfungwa (upload limits), limits dzepfungwa dzinogona kuenda (execution limits), space ya disk, memory, uye server timeout settings panguva unoti utaidzidzire kana utaidzidzire sitiri kana site.

Kana media libraries dzakare zvakawanda, zvinogona kuitika kuti dzivimbike munzvimbo yakachengetedzo dzinovaka (low-traffic maintenance window).

Chikamu chekufamba neWordPress, iwe unofanira kuita kuti WordPress, PHP, Ultimate Multisite, plugin, uye theme versions dzakare zvinhu zvinogona kutaurirana (compatible) zvinhu.

Import ya single-site inozvisanisa site yakare. Iyi haingonziro rekuita merge.

Moves kubva kuMultisite kune single-site nekubva kusingle-site kune Multisite zvinogona kutaurirana chete kana target environment inogona kuenda plugins, themes, URLs, uye Ultimate Multisite components dzakare zvinhu.

Tarisira ZIP yakare. Inogona kuva nekuti inosanganisira database content, files dzakare zvakare, uye configuration details kubva kune site yakare.

Kuti unzive nezve workflows dzinogona kutaurirana dzinobva munzvimbo dze network (network-level export), ndichida kuti uone [Site Export](/user-guide/administration/site-export).
