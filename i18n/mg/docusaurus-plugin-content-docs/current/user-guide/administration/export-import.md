---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 dia mampiditra fita **Export & Import** iray (single-site) eo ambanin ny **Tools > Export & Import**. Ampiasao izany rehefa mila manamboatra (package) toerana WordPress iray ho ZIP file, mamerina an'io ZIP io, na manova toerana misy an'io WordPress eo amin'ny fampiasana Ultimate Multisite sy single-site mifandray.

## Alalana ilaina

Tsy maintsy miditra ho administrator ianao izay afaka miditra ao amin'ny menio **Tools** an'ny WordPress eo amin'ny toerana hivoaka na hamerenana. Amin'ny tambajotra multisite, dia ampiasao ny kaonty administrator an'ny tambajotra rehefa mamoaka na mamerina subsite avy amin'ny fita Ultimate Multisite amin'ny haavo tambajotra (network-level).

Ny famindrana ZIP dia omen'ny lalan-drafitra famindrana voamarina, ka ataovy ho mandeha ny session an'ny admin mandra-pahatongan'ny famindrana ary aza mizara ireo URL famindrana namboarina amin'ny olona rehetra.

## Famindrana toerana ho ZIP

1. Ao amin'ny WordPress admin an'ilay toerana tianao atao, mandehana any **Tools > Export & Import**.
2. Sofina ny faritra famindrana ary safidio ilay toerana tianao atao ho voa-pakajy (package).
3. Safidio ireo zavatra azo atao ho an'ny fampidirana (optional content) mba hampidirana azy, toy ny uploads, plugins, ary themes, rehefa misy izany safidy izany.
4. Manomboha ny famindrana ary miandry ny dingana vita. Mety mila mandeha ao aoriana ireo toerana lehibe alohan'ny ho vonona ny ZIP.
5. Indro ny ZIP vita avy amin'ny lisitry ny famindrana.

Ataovy eo amin'ny toerana azo antoka ilay ZIP. Afaka ahitana votoatin'ny toerana, ny fepetra (settings), ireo rakitra media ary ireo zavatra code voafidy.

## Inona no ao anatin'ny famindrana

Afaka ahitana ao anatin'ny ZIP famindrana ireto:

- Ny votoatin'ny database sy ny fepetran'ilay toerana voafidy.
- Ireo rakitra media voasokajy rehefa voafidy ireo uploads.
- Plugins sy themes rehefa voafidy ireo safidy ireo.
- Metadata ho an'ny famindrana izay ampiasain'ny fita Export & Import mba hanamboarana indray ny toerana amin'ny fampiasana tokana (target installation).

Ny haben'ny haben'ny fomba fanamboarana ny lamba (ZIP size) dia miankina amin'ny habetsahan'ny media, ireo plugin sy thème voafidy ary ny haben'ny tabilao ao anaty database an'ilay tranonkala.

## Fampidirana tranonkala avy amin'ny ZIP

1. Mandehana any amin'ny **Tools > Export & Import** eo amin'ny WordPress site ho toerana fampidirana (destination).
2. Afaka ny faritra fampidirana ary apetraho ilay ZIP izay namboarina tamin'ny alalan'ny tool Export & Import.
3. Ampidiro URL fanoloana raha toa ka mila mampiasa adiresy vaovao ny tranonkala, na avelao ho lafiny (blank) raha te-hanatona indray ilay URL voalohany.
4. Safidio raha hatao fanesorana ny ZIP nampidirina rehefa vita ny fampidirana.
5. Kiky ny **Begin Import**.
6. Tehirizo ny fampidirana mbola eo anivon'ny "pending import" mandra-pahatonga azy. Ampiasao ny **Cancel Import** raha mila manakana ny dingana alohan'ny ho vita ianao.
7. Jereo tsara ilay tranonkala nampidirina alohan'ny ahafahana manome fidirana ara-dalàna na mpanjifa.

Amin'ny fametrahana WordPress iray (single-site), ny fampidirana ZIP dia manolo ny site ankehitriny amin'ilay site nampidirina. Manaova backup feno alohan'ny hanombohanao, ary aza manomboka fampidirana maromaro ho an'ny site iray amin'izay fotoana iray.

## Fepetra voafetra sy fampitahana (Limitations and compatibility notes)

Ny lalana famoahana (export) lehibe dia mety mamorona rakitra ZIP be dia be. Ataovy azo antoka ny fetran'ny PHP upload, ny fetran'ny fampandehanana (execution limits), ny toerana misy (disk space), ny memory ary ny fotoana fampandrenesana an'ny server alohan'ny hamoahana na hampidirana tranokala lehibe.
Mety mila miova toerana ireo media library be dia be mandritra ny fotoana fanarenana izay tsy misy fifandraisana (low-traffic maintenance window).
Ny fametrahana WordPress ho tanteraka (target installation) dia tokony mampiasa dikan'ny WordPress, PHP, Ultimate Multisite, plugin ary theme mifandray amin'izy ireo.
Ny fampidirana tranokala iray (single-site import) dia manolo ny toerana no tiana. Tsy fitaovana fampifangaro (merge tool) izy io.
Azo atao ny fiova avy amin'ny Multisite ho single-site sy avy amin'ny single-site ho Multisite raha toa ka afaka miasa ao anatin'ilay tontolo iantsoina (target environment) ireo plugin, theme, URL ary singa ilaina amin'ny Ultimate Multisite voalamina tao amin'ilay tranokala efa voalamina.
Ataovy manokana ny ZIP. Mety ahitana votoatin'ny database, rakitra voatondro (uploaded files) ary antsipiriany momba ny fepetra fanamboarana avy amin'ilay tranokala voalamina.

Ho an'ny fomba famoahana mifototra amin'ny tambajotra taloha kokoa, jereo eto: [Site Export](/user-guide/administration/site-export).
