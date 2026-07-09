---
title: Unsa ang WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Unsa ang WordPress Multisite? {#what-is-wordpress-multisite}

Sa sulod sa core ni WordPress, adunay feature nga gitawag og ‘Multisite’ nga nag-ugat kini pa balik sa 2010 paglunsad sa WordPress 3.0. Sukad niadto, nakadawat kini og daghang revisions aron magdala og bag-ong features ug mas kusog nga seguridad.

Sa laktod nga pagkasulti, ang usa ka WordPress multisite mahimong hunahunaa sama niini: Usa ka Unibersidad nagpabilin og usa lang ka installation sa WordPress apan matag faculty nagpabilin og ilang kaugalingon nga WordPress site.

##

## Unsa gyud ang WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Ang Multisite kay feature sa WordPress nga nagtugot sa daghang sites nga mag-share og usa ra ka WordPress installation. Kung ma-activate ang multisite, ang orihinal nga WordPress site mahimong magbag-o aron suportahan kung unsa kasagaran gitawag og **network of sites**.

Kini nga network mag-share sa file system (nga nagpasabot nga **ang plugins ug themes pud mag-share**), ang database, ang WordPress core files, ang wp-config.php, ug uban pa.

Nagpasabot kini nga ang mga update sa WordPress, theme, ug plugin kinahanglan buhaton usa ra para sa tanan ninyong network sites kay nag-share sila og parehas nga mga file sa filesystem.

Kini nga kamatuoran usa sa mga pangunang kaayohan sa multisite, tungod kay gitugotan ni kini ang pagpadaghan sa gidaghanon sa sites nga inyong gipamahala samtang ang gidaghanon sa mga buluhaton nga kinahanglan ninyong buhaton aron mapadayon ang mga site sa inyong mga kustomer pareho ra.

##

## Subdomain o Subdirectory? {#subdomain-or-subdirectory}

Adunay duha ka mode sa pagpadagan sa WordPress multisite – ug kinahanglan ninyo mopili og usa kung mag-convert mo sa inyong regular nga WordPress installation ngadto sa multisite installation:

**Subdomain:** pananglitan: [site.domain.com](http://site.domain.com)

…o

**Subdirectory:** pananglitan: [yourdomain.com/site](http://yourdomain.com/site)

Ang matag mode adunay mga kaayohan ug dili kaayo nga kinahanglan ninyong konsiderar kung maghimo niini nga desisyon.

Importante nga mahinumdagan ninyo: paghuman na mo sa inyong desisyon, lisod kaayo usbon ang inyong network gikan sa subdirectory ngadto sa subdomain o vice-versa – labi na kung naa na mo'y pipila ka sites nga gihimo.

Sa dili pa magdesisyon, ania ang pipila ka punto nga kinahanglan ninyong hinumduman:

**Subdirectory Mode** mao ang pinakasimple nga mode sa pag-set up ug maintenance. Kini mahitabo kay ang tanang sites kay mga path lang nga giputol sa main domain (pananglitan: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Tungod niini, kinahanglan ninyo og **usa ra ka SSL certificate** para sa main domain ug kini magsakop sa tibuok network.

Sa samang higayon, tungod sa iyang istruktura sa URL, ang Google ug kadaghanan sa ubang search engine magtan-aw sa tanang subsites sa inyong subdirectory-based network isip usa ka dako nga site. Tungod niini, ang mga content nga idugang sa subsites sa inyong end-customers mahimong makaapekto sa SEO performance sa inyong landing site, pananglitan. Ang lebel sa epekto kay mapulihan ug adunay argumento nga ang pagkaanaa niini nga arrangement mahimong makabalo man para sa SEO performance.

**Subdomain Mode** medyo mas komplikado i-set up, apan ang iyang istruktura sa URL (pananglitan: [subsite.yournetwork.com](http://subsite.yournetwork.com)) kasagaran giisip nga "mas propesyonal" kini.

Ang usa sa mga pangunang hagit sa pag-set up sa subdomain mode kay ang SSL coverage (HTTPS) para sa tibuok network. Nagdepende ni sa kamatuoran nga ang mga browser nagtan-aw sa mga subdomain isip mga lahi nga entidad. Tungod niana, kinahanglan nimo og lain nga SSL certificate para sa matag subdomain sa imong network, o usa ka espesyal nga klase sa certificate nga gitawag og **Wildcard SSL certificate**. Sa tuig-tuig, ang mga hosting provider ug panel nagpadaghan sa ilang abilidad sa paghatag og SSL provisiong, ug pipila kanila nagtanyag og wildcard certificates sa usa ka click lang, nga nagpagsira sa gap tali sa duha ka modes sa kalisod sa pag-set up niini.

Alang sa subdirectory mode, ang mga subsites sa usa ka network nga base sa subdomain giisip sa search engines nga mga laing website, nga nagpasabot nga ang sulod nga anaa sa usa ka subsite dili makaguba sa SEO performance sa ubang subsites bisan unsa.

## Ang Super Admin {#the-super-admin}

Ang single-site WordPress installations nagtugot kanimo sa pagdugang og walay limitasyon nga mga user ug paghatag niini og lain-laing user roles uban ang lain-laing permissions.

Sa WordPress Multisite, usa ka bag-ong klase sa user ang ma-unlock: **ang super admin** – ug usa ka bag-ong admin panel ang ma-unlock: **ang network admin panel**.

Ingon sa ngalan niini, ang super admin adunay mga superhero nga gahum sa network, kay makahimo siya sa pagdumala sa tanan niyang subsites, plugins, themes, bisan unsa!

Kung usbon nimo ang imong single-site WordPress installation ngadto sa multisite, ang orihinal nga admin sa single site awtomatikong ma-upgrade ngadto sa super admin.

Ang mga plugin ug themes mahimong i-install o i-uninstall lang gikan sa network admin panel pinaagi sa mga super admin. Ang mga subsite admins mahimong mopili kung i-activate o i-deactivate ang mga plugins o themes, gawas kung ang super admin sa network mag-activate og usa ka plugin, nga nagpugos niini nga magpabilin nga aktibo para sa tanang subsites kanunay.

_Note: makita ninyo, ang pag-imbita sa usa ka tawo sa inyong network ug paghatag kaniya og super admin status naghatag niining user sa tibuok kontrol sa inyong network. Sa pananglitan, ang ubang super admin bisan mahimong magtangtang sa inyong super admin status, nga epektibong mag-lock kaninyo gikan sa inyong kaugalingon nga network admin panel. Aron tugotan ang Ultimate Multisite customers nga adunay granular control kung unsa ang mga additional super admin pwede buhat, kami adunay add-on nga gitawag og Support Agents. Kini nga add-on nagtugot kanimo sa paghimo og laing klase sa user – usa ka agent – nga adunay mga permiso lang nga kinahanglan nila para himuon ang ilang mga buluhaton sa network._

## Unsa ang gi-share tali sa subsites ug unsa ang dili {#what-is-shared-among-subsites-and-what-is-not}

Ingon na sa among gihisgutan kaniadto, usa sa mga importanteng benepisyo sa WordPress multisite mao nga ang tanang subsites nag-share sa parehas nga configurations, core files, themes, plugins, WordPress core files, etc.

Bisan pa niana, adunay mga elemento nga maayo nga gi-scope base sa matag subsite.

\- Pananglitan, ang matag subsite makahatag sa iyang kaugalingon nga uploads folder. Tungod niini, ang mga upload nga gihimo sa mga user sa usa ka partikular nga subsite dili ma-access sa lain nga subsite.

\- Ang matag subsite adunay kaugalingon nga dedicated admin panel ug mahimong mag-activate o mag-deactivate og plugins o themes gawas kung kini aktibo na sa network pinaagi sa usa ka super admin.

\- Kadaghanan sa mga database table ang gihimo para sa matag subsite, nagpasabot nga ang posts, comments, pages, settings, ug uban pa gi-scope alang sa matag subsite.

## User management sa WordPress Multisite {#user-management-on-wordpress-multisite}

Ang usa ka sensitibong butang sa WordPress multisite mao ang user management. Ang WordPress user table usa sa pipila lamang nga gi-share sa tanang subsites.

Kini nga arrangement mahimong maghatag og pipila ka problema depende kung unsa ang plano ninyo nga himuon gamit ang inyong network. Ang pananglitan sa ubos nagtabang sa pagpakita sa labing importante niini.

Hunahunaa ang mosunod nga sitwasyon:

Nag-create ka og WordPress multisite network ug nagsugod ka sa pagtanyag og mga subsites para sa usa ka monthly fee sa mga tawo nga gusto maghimo og e-commerce store.

Nakakuha ka na sa imong unang paying customer – si John. Naghimo ka og site alang kang John sa imong network, nag-install og tanang kinahanglanon nga plugins, unya naghimo ka og user para kay mahimong ma-manage niya ang iyang tindahan.

Dayon moabot ang ikaduha nga customer – si Alice. Gipahimo nimo ang parehas alang kaniya ug karon na siya adunay store sa imong network usab.

Si John ug si Alice pareho ka mga customer nimo, apan wala sila magkaila. Mas importante pa, kung ang usa kanila moadto sa website sa tindahan sa lain, walay paagi para mahibal-an nga kini nga tindahan gipahimutang sa parehas nga network sa mga site.

Usa ka adlaw, kinahanglan ni John mogradya og bag-ong pares sa sapatos ug nakit-an niya ang perpekto nga mga sapatos sa tindahan ni Alice. Pagpaningkamot niyang tapuson ang pagpalit, makakuha siya og "email already in use" error message, nga dili komon kay sigurado si John nga kini ang unang higayon nga miadto niya sa website ni Alice.

Ang nahitabo ani mao nga ang user ni John gi-share sa tibuok network, busa kung siya mangita og account para mag-checkout sa site ni Alice, madetectan sa WordPress nga adunay user nga may parehas nga email address na ug magahatag kini og error.

_Nota: Nasabtan namo unsa ka lisod kana depende sa imong gamit, mao nga ang Ultimate Multisite adunay option nga nag-bypass sa regular checks para sa existing user, nga nagtugot sa paghimo og daghang accounts gamit ang parehas nga email address. Ang matag account gikatali sa usa ka subsite, busa ang risgo sa collision gipakaon sa pinakamababa. Sa pananglitan sa ibabaw, si John dili makakuha og error message ug makapalit niadtong mga sapatos nga walay problema. Kini nga option gitawag nga Enable Multiple Accounts, ug mahimong i-activate sa Ultimate Multisite → Settings → Login & Registration._

Bisan pa gi-share ang user table, pwede gihapon i-add ug i-remove ang mga users sa subsites pinaagi sa mga subsite admin o super admin, ug pwede pud sila magkaiba'ng roles sa lain-laing subsites.

## Performance considerations {#performance-considerations}

Ang WordPress multisite kay gyud gamhanan kung unsa kadaghan nga sites ang kaya ni suportahan. Mahimo ninyong masusi ni pinaagi sa pagkakaron nga ang [WordPress.com](https://WordPress.com), Edublogs, ug Campuspress kay mga serbisyo nga base sa multisite, ug ang matag host nag-host og libo ka sites.

Bisan unsa pa ang teorya, walay labing daghan nga numero sa sites nga pwede ninyong i-host sa usa lang ka WordPress multisite installation, apan sa praktika, ang gidaghanon sa mga sites nga maayo ninyong ma-run nagdepende sa daghang lain-laing butang: unsa ka dynamic ang mga sites, unsang plugins ang available sa subsites, ug uban pa.

Isip general rule, mas simple ang inyong network, mas maayo. Ang pagpili og mga site diin dili gyud sobra ka dynamic ang content (nga naghimo kanila nga maayong kandidato para sa aggressive caching strategies) ug pagpabilin nga light ang plugin stack (mas gamay ang numero sa active plugins mas maayo) makadoble o magdugang og dako sa mga subsites nga mahimo ninyong i-host.

Ang pinakagalingon kay tungod kay tanan ni WordPress, ang mga tool nga kaila na ninyo ug ganahan ninyo para sa performance improvement, molihok usab para sa multisite network.

Ang main bottleneck para sa multisite kay ang database pero kung maayo ang setup sa tanang butang, mahimong mag-abot og pipila ka libo ka sites pa sa dili mo na kinahanglan kabalaka ni. Bisan unsa pa, adunay mga solusyon nga pwede i-add pag-usab sa punto nga mao na (sama sa database sharding solutions, pananglitan).
