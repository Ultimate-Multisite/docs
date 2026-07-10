---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ang Ultimate Multisite 2.9.0 naghatag og usa ka single-site nga **Export & Import** tool ubos sa **Tools > Export & Import**. Gamita kini kung kinahanglan nimo i-package ang usa ka WordPress site isip ZIP file, i-restore ang ZIP, o ilipat ang usa ka site tali sa compatible Ultimate Multisite ug single-site WordPress installations.

## Kinahanglanon nga mga permiso {#required-permissions}

Kinahanglan kang mag-sign in isip administrator nga adunay access sa **Tools** menu sa WordPress sa site nga imong gi-export o gi-import. Sa multisite network, gamita ang account sa network administrator kung nag-export o nag-import og subsites gikan sa network-level Ultimate Multisite tools.

Ang mga ZIP download kay gihatag pinaagi sa usa ka authenticated download endpoint, busa panatili ang admin session nga aktibo hangtod matapos ang download ug ayaw i-share ang generated download URLs publiko.

## Pag-export og site ngadto sa ZIP {#exporting-a-site-to-a-zip}

1. Sa WordPress admin para sa site nga gusto nimong kopyahon, adto sa **Tools > Export & Import**.
2. Buksan ang export area ug piliha ang site nga gusto nimong i-package.
3. Piliha ang optional content nga iapil, sama sa uploads, plugins, ug themes, kung available na kini nga mga option.
4. Sugdan ang export ug paghulat hangtod matapos ang proseso. Ang dagkong sites kinahanglan tingali mahuman sa background pa sa ZIP nga andam na.
5. I-download ang nahuman nga ZIP gikan sa exports list.

Pangita og luwas nga lugar para sa ZIP file. Mahimo kini maglangkob sa content sa site, settings, media files, ug mga gipili nga code assets.

## Unsa ang apil sa export {#what-the-export-includes}

Ang export ZIP mahimong maglakip ni:

- Ang database content ug configuration sa gipiling site.
- Mga uploaded nga media files kung ang uploads giapil.
- Plugins ug themes kung ang mga option kini gipili.
- Import metadata nga gigamit sa Export & Import tool aron ma-rebuild ang site sa target installation.

Ang eksaktong size sa ZIP depende sa dami sa media files, mga napili nga plugins ug themes, ug sa gidak-on sa database tables sa sitio.

## Pag-import og sitio gikan sa ZIP {#importing-a-site-from-a-zip}

1. Adto sa **Tools > Export & Import** sa destinasyon WordPress site.
2. Buksan ang area para sa import ug i-upload ang ZIP nga gihimo sa Export & Import tool.
3. Isulod ang replacement URL kung kinahanglan gamiton og bag-o nga address ang sitio, o biyaan ang field nga walay sulod aron mapadayon ang original URL.
4. Pilia kung gusto ba nimo i-delete ang gi-upload nga ZIP human matapos ang import.
5. I-click ang **Begin Import**.
6. Bantayi ang pending import hangtod matapos kini. Gamita ang **Cancel Import** lang kung kinahanglan nimo itigil ang proseso sa dili pa mahuman.
7. Usbon (review) ang gi-import nga sitio sa dili pa tugotan ang normal nga traffic o access sa mga customer.

Sa usa ka single-site WordPress installation, ang pag-import og ZIP magpuli sa kasamtang nga sitio sa gi-import nga sitio. Paghimo og full backup sa target site sa dili ka magsugod, ug likayi ang pagsugod og daghang import para sa samang sitio sa samang higayon.

## Mga Limitasyon ug mga nota sa compatibility {#limitations-and-compatibility-notes}

Ang mga directory sa upload nga taas kaayo o media libraries mahimong maghimo og dako nga ZIP files. Siguraduhon ang PHP upload limits, execution limits, disk space, memory, ug server timeout settings sa dili pa mag-export o mag-import og dagkong sites.

Mahimong kinahanglan ninyo ilipat ang mga media library nga taas kaayo panahon sa maintenance window kung gamay ra ang traffic.

Ang target WordPress installation kinahanglan magripot (compatible) sa WordPress, PHP, Ultimate Multisite, plugin, ug theme versions.

Ang single-site import maoy magpuli sa target site. Dili kini usa ka merge tool.

Ang multisite-to-single-site ug single-site-to-multisite moves suportado lang kung ang target environment makahimo (run) sa mga plugins, themes, URLs, ug mga kinahanglanon nga Ultimate Multisite components sa gi-export nga site.

Pabilin nga private ang ZIP file. Mahimong adunay kini database content, mga na-upload nga files, ug configuration details gikan sa gi-export nga site.

Para sa mas daan nga network-level export workflows, tan-awa ang [Site Export](/user-guide/administration/site-export).
