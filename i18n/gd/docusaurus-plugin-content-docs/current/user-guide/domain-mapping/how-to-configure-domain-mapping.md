---
title: Mar a rèiticheas tu mapadh àrainn
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Mar a rèiticheas tu mapadh àrainn (v2) {#how-to-configure-domain-mapping-v2}

_**NOTA CUDROMACH: Tha an artaigil seo a’ toirt iomradh air Ultimate Multisite tionndadh 2.x.**_

’S e aon de na feartan as cumhachdaiche aig lìonra premium an comas cothrom a thoirt don luchd-dèiligidh againn àrainn àrd-ìre a cheangal ris na làraichean aca. Às dèidh na h-uile, dè tha a’ coimhead nas proifeiseanta: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) no [_**joesbikeshop.com**_](http://joesbikeshop.com)? Sin as coireach gu bheil Ultimate Multisite a’ tabhann na feart sin a-staigh, gun fheum air plugins treas-phàrtaidh a chleachdadh.

## Dè th’ ann am mapadh àrainn? {#whats-domain-mapping}

Mar a tha an t-ainm a’ moladh, ’s e mapadh àrainn an comas a tha Ultimate Multisite a’ tabhann iarrtas airson àrainn ghnàthaichte a ghabhail a-steach agus an t-iarrtas sin a mhapadh ris an làrach fhreagarrach san lìonra leis an àrainn shònraichte sin ceangailte ris.

### Mar a shuidhicheas tu mapadh àrainn air an lìonra Ultimate Multisite agad {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Feumaidh mapadh àrainn beagan rèiteachaidh air do thaobh gus obrachadh. Gu fortanach, bidh Ultimate Multisite ag fèin-obrachadh na h-obrach chruaidh dhut gus an urrainn dhut na riatanasan a choileanadh gu furasta.

Rè stàladh Ultimate Multisite, copaidh agus stàlaichidh an draoidh **sunrise.php** gu fèin-obrachail dhan phasgan ainmichte. **Cha leig an draoidh leat leantainn air adhart gus am bi an ceum seo crìochnaichte**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tha seo a’ ciallachadh, aon uair ’s gu bheil draoidh stàlaidh Ultimate Multisite air crìoch a chur air rèiteachadh an lìonra agad, gun urrainn dhut tòiseachadh air an àrainn ghnàthaichte a mhapadh sa bhad.

Thoir an aire nach eil mapadh àrainn ann an Ultimate Multisite èigneachail. Tha roghainn agad gnìomh mapadh àrainn dùthchasach WordPress Multisite no fuasgladh mapadh àrainn sam bith eile a chleachdadh.

Ma dh’fheumas tu mapadh àrainn Ultimate Multisite a chur à comas gus àite a thoirt do fhuasglaidhean mapadh àrainn eile, faodaidh tu am feart seo a chur à comas fo **Ultimate Multisite > Roghainnean > Mapadh Àrainn**.

![Duilleag roghainnean Mapadh Àrainn a’ sealltainn ath-stiùireadh rianachd, teachdaireachd mapaidh agus roghainnean DNS](/img/config/domain-mapping-settings.png)

Dìreach fon roghainn seo, chì thu cuideachd an roghainn **Cuir Ath-stiùireadh Rianachd an Sàs**. Leigidh an roghainn seo leat smachd a chumail air am bi e comasach don luchd-ceannach agad faighinn chun Dashboard rianachd aca an dà chuid air an àrainn ghnàthaichte agus air an fho-àrainn aca, no dìreach air aon dhiubh.

Ma thaghas tu **Cuir ath-stiùireadh chun àrainn mhapaichte an sàs** , cha bhi e comasach don luchd-ceannach agad faighinn chun Dashboard rianachd aca ach air na h-àrainnean gnàthaichte aca.

Nì an roghainn **Cuir ath-stiùireadh gu** **àrainn an lìonra** dìreach an taobh eile - cha cheadaichear don luchd-ceannach agad faighinn chun Dashboard aca ach air an fho-àrainn aca, eadhon ma tha iad a’ feuchainn ri clàradh a-steach air na h-àrainnean gnàthaichte aca.

Agus leigidh an roghainn **Leig inntrigeadh dhan rianachd leis an dà chuid an àrainn mhapaichte agus àrainn an lìonra** leotha faighinn chun Dashboard rianachd aca an dà chuid air an fho-àrainn agus air an àrainn ghnàthaichte.

![Clàr-taice tuiteam-sìos Ath-stiùireadh Rianachd air a leudachadh a’ sealltainn nan trì roghainnean ath-stiùiridh](/img/config/domain-mapping-redirect-options.png)

Tha dà dhòigh ann àrainn ghnàthaichte a mhapadh. Tha a’ chiad fhear le bhith a’ mapadh ainm na h-àrainn bhon Dashboard rianachd lìonra agad mar an super admin agus tha an dàrna fear tro Dashboard rianachd na fo-làraich fo dhuilleag Account.

Ach mus tòisich thu air an àrainn ghnàthaichte a mhapadh ri aon de na fo-làraichean san lìonra agad, feumaidh tu dèanamh cinnteach gu bheil **roghainnean DNS** ainm na h-àrainn air an rèiteachadh gu ceart.

###

### Dèanamh cinnteach gu bheil roghainnean DNS na h-àrainn air an rèiteachadh gu ceart {#making-sure-the-domain-dns-settings-are-properly-configured}

Gus am bi mapadh ag obair, feumaidh tu dèanamh cinnteach gu bheil an àrainn a tha thu an dùil a mhapadh a’ comharrachadh gu seòladh IP an lìonra agad. Thoir an aire gu bheil feum agad air seòladh IP an Lìonra - seòladh IP na h-àrainn far a bheil Ultimate Multisite air a stàladh - chan e seòladh IP na h-àrainn ghnàthaichte a tha thu airson a mhapadh. Gus seòladh IP àrainn shònraichte a lorg, tha sinn a’ moladh a dhol gu [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), mar eisimpleir.

Gus an àrainn a mhapadh gu ceart, feumaidh tu **A RECORD** a chur ris air an rèiteachadh **DNS** agad a’ comharrachadh chun **t-seòlaidh IP** sin. Tha riaghladh DNS ag atharrachadh gu mòr eadar diofar chlàradairean àrainn, ach tha pailteas oideachaidhean air-loidhne ann a tha a’ còmhdach sin ma nì thu lorg airson " _Creating A Record on XXXX_ " far a bheil XXXX na chlàradair àrainn agad (m.e.: " _Creating A Record on_ _GoDaddy_ ").

Ma tha duilgheadas agad seo fhaighinn ag obair, **cuir fios gu taic clàradair na h-àrainn agad** agus bidh iad comasach air do chuideachadh leis a’ phàirt seo.

Ma tha thu an dùil leigeil leis an luchd-dèiligidh agad na h-àrainnean aca fhèin a mhapadh, feumaidh iadsan an obair air a’ phàirt seo a dhèanamh iad fhèin. Stiùir iad a dh’ionnsaigh siostam taic a’ chlàradair aca ma tha iad gan lorg fhèin gun chomas an A Record a chruthachadh.

### Mapadh ainm àrainn ghnàthaichte mar Super Admin {#mapping-custom-domain-name-as-super-admin}

Nuair a tha thu air logadh a-steach mar super admin air an lìonra agad, faodaidh tu ainmean àrainn gnàthaichte a chur ris agus a stiùireadh gu furasta le bhith a’ dol fo **Ultimate Multisite > Àrainnean**.

![Duilleag liosta Àrainnean ann an Ultimate Multisite](/img/admin/domains-list.png)

Fon duilleag seo, faodaidh tu briogadh air a’ phutan **Cuir Àrainn Ris** aig a’ mhullach agus bheir seo suas uinneag modal far an urrainn dhut **ainm na h-àrainn ghnàthaichte** a shuidheachadh agus a lìonadh a-steach, **an fho-làrach** ris a bheil thu airson ainm na h-àrainn ghnàthaichte a chur an sàs, agus co-dhùnadh a bheil thu airson a shuidheachadh mar ainm na **prìomh àrainn** no nach eil (thoir an aire gun urrainn dhut **iomadh ainm àrainn a mhapadh ri aon fho-làrach**).

![Modal Cuir Àrainn Ris le ainm àrainn, taghadair làraich agus suidse prìomh àrainn](/img/admin/domain-add-modal.png)

Às dèidh dhut am fiosrachadh gu lèir a chur a-steach, faodaidh tu an uair sin briogadh air a’ phutan **Cuir Àrainn Làithreach Ris** aig a’ bhonn.

Tòisichidh seo am pròiseas dearbhaidh agus faighinn fiosrachadh DNS na h-àrainn ghnàthaichte. Chì thu cuideachd loga aig bonn na duilleige gus am pròiseas a tha e a’ dol troimhe a leantainn. Dh’fhaodadh gun toir am pròiseas seo beagan mhionaidean airson crìochnachadh.

Ultimate Multisite v2.13.0 cruthaichidh e cuideachd an clàr àrainn a-staigh gu fèin-obrachail nuair a thèid làrach ùr a chruthachadh air òstair a bu chòir a làimhseachadh mar àrainn gach-làraich. Ma tha an t-òstair na phrìomh àrainn aig an lìonra, no mar aon de na h-àrainnean-bunaiteach co-roinnte airson foirm pàighidh a tha air an rèiteachadh air raon **Site URL**, thèid an clàr àrainn mhapta gu fèin-obrachail a leum seachad gus am bi an àrainn-bhunaiteach cho-roinnte fhathast ri fhaighinn do gach làrach a bhios ga cleachdadh.

Nuair a chlàras neach-ceannach àrainn ùr tro Domain Seller v1.3.0 no nas ùire, mapaidh Ultimate Multisite an àrainn chlàraichte gu làrach lìonra an neach-ceannach gu fèin-obrachail mar bhun-roghainn. Chan fheum rianairean tuilleadh clàr àrainn mhapta air leth a chur ris às dèidh clàradh soirbheachail mura h-eil iad airson roghainnean atharrachadh leithid bratach na prìomh-àrainne, staid gnìomhachaidh, no làimhseachadh SSL.

Bu chòir don **Ìre** no don inbhe atharrachadh bho **A' sgrùdadh DNS** gu **Deiseil** ma tha a h-uile càil air a chur air dòigh mar bu chòir.

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Sreath àrainne a' sealltainn na h-ìre A' sgrùdadh DNS ann an liosta nan àrainnean -->

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Sreath àrainne a' sealltainn na h-ìre Deiseil leis a' chomharra inbhe uaine -->

Ma bhriogas tu air ainm na h-àrainne, bidh e comasach dhut cuid de roghainnean fhaicinn na broinn. Bheir sinn sùil luath orra:

![Duilleag mion-fhiosrachadh àrainne le suidsichean ìre, làraich, gnìomhach, prìomh agus SSL](/img/admin/domain-edit.png)

**Ìre:** Seo an ìre aig a bheil an àrainn. Nuair a chuireas tu an àrainn ris an toiseach, is dòcha gum bi i air an ìre **A' sgrùdadh DNS**. Nì am pròiseas sgrùdadh air na h-inntrigidhean DNS agus dearbhaidh e gu bheil iad ceart. An uair sin, thèid an àrainn a chur aig an ìre **A' sgrùdadh SSL**. Nì Ultimate Multisite sgrùdadh a bheil SSL aig an àrainn no nach eil agus seòrsachaidh e an àrainn agad mar **Deiseil** no **Deiseil (às aonais SSL)**.

**Làrach:** An fho-àrainn a tha co-cheangailte ris an àrainn seo. Seallaidh an àrainn mhapta susbaint na làraich shònraichte seo.

**Gnìomhach:** Faodaidh tu an roghainn seo a thionndadh air no dheth gus an àrainn a chur an gnìomh no a chur à gnìomh.

**An e Prìomh Àrainn a th' ann?:** Faodaidh barrachd air aon àrainn mhapta a bhith aig do luchd-ceannach airson gach làrach. Cleachd an roghainn seo gus taghadh an e seo am prìomh àrainn airson na làraich shònraichte.

**A bheil i Tèarainte?:** Ged a nì Ultimate Multisite sgrùdadh a bheil teisteanas SSL aig an àrainn no nach eil mus cuir e an comas i, faodaidh tu taghadh le làimh an àrainn a luchdadh le teisteanas SSL no às aonais. Thoir an aire mura h-eil teisteanas SSL aig an làrach-lìn agus ma dh'fheuchas tu ri toirt oirre luchdadh le SSL, dh'fhaodadh i mearachdan a thoirt dhut.

### Mapadh ainm àrainne gnàthaichte mar chleachdaiche fo-làraich {#mapping-custom-domain-name-as-subsite-user}

Faodaidh rianairean fo-làraich ainmean àrainne gnàthaichte a mhapadh cuideachd bho dheas-bhòrd rianachd na fo-làraich aca.

An toiseach, feumaidh tu dèanamh cinnteach gun cuir thu an roghainn seo an comas fo na roghainnean **Mapadh àrainne**. Faic an glacadh-sgrìn gu h-ìosal.

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Roghainnean mapadh àrainne a' leigeil le luchd-cleachdaidh fo-làraich àrainnean a mhapadh tro shuidse Riaghladh DNS Luchd-ceannach -->

Faodaidh tu cuideachd an roghainn seo a shuidheachadh no a rèiteachadh fo ìre a' **Phlana** no roghainnean toraidh air **Ultimate Multisite > Toraidhean**.

![Earrann Àrainnean Gnàthaichte air duilleag deasachaidh an toraidh](/img/config/product-custom-domains.png)

Nuair a tha gin de na roghainnean sin air an cur an comas agus nuair a tha cead aig cleachdaiche fo-làraich ainmean àrainne gnàthaichte a mhapadh, bu chòir don chleachdaiche fo-làraich metabox fhaicinn fon duilleag **Account** ris an canar **Àrainnean**.

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Metabox Àrainnean air duilleag Account na fo-làraich le putan Cuir Àrainn Ris -->

Faodaidh an cleachdaiche briogadh air a' phutan **Cuir Àrainn Ris** agus bheir e suas uinneag modal le cuid de stiùireadh.

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Modal Cuir Àrainn Ris a' sealltainn stiùireadh A-record DNS airson luchd-cleachdaidh fo-làraich -->

Faodaidh an cleachdaiche an uair sin briogadh air **An Ath Cheum** agus leantainn air adhart gus an t-ainm àrainne gnàthaichte a chur ris. Faodaidh iad cuideachd taghadh am bi seo na phrìomh àrainn no nach bi.

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Foirm Cuir Àrainn Ris le raon ainm àrainne gnàthaichte agus suidse prìomh àrainne -->

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Ceum dearbhaidh Cuir Àrainn Ris a thòisicheas dearbhadh DNS -->

Tòisichidh briogadh air **Cuir Àrainn Ris** am pròiseas airson fiosrachadh DNS na h-àrainne gnàthaichte a dhearbhadh agus fhaighinn.

### Mu Shioncronachadh Àrainnean {#about-domain-syncing}

'S e pròiseas a th' ann an Sioncronachadh Àrainnean far am bi Ultimate Multisite a' cur an ainm àrainne gnàthaichte ris a' chunntas òstachaidh agad mar àrainn add-on **gus an obraich mapadh na h-àrainne**.

Tachraidh sioncronachadh àrainnean gu fèin-obrachail ma tha amalachadh aig an t-solaraiche òstachaidh agad le feart mapadh àrainne Ultimate Multisite. An-dràsta, 's iad na solaraichean òstachaidh seo _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ agus _Cpanel._

Nuair a tha amalachadh solaraiche-òstair gnìomhach, faodaidh Ultimate Multisite cuideachd an obair cruthachaidh DNS no fo-àrainne air taobh an t-solaraiche a chur ann an ciudha airson làraichean a chaidh a chruthachadh às ùr. Mura h-eil amalachadh sam bith ag èisteachd ris an obair sin, thèid an obair cùlaibh a leum seachad gus inntrigidhean ciudha gun ghnìomh a sheachnadh. Leanaidh sgrùdaidhean DNS agus SSL airson àrainnean mapta orra a' ruith tron phròiseas àbhaisteach ìrean-àrainne.

Feumaidh tu an t-amalachadh seo a chur an gnìomh ann an roghainnean Ultimate Multisite fon taba **Amalachadh**.

![Taba Amalachaidh ann an roghainnean Ultimate Multisite a' sealltainn solaraichean òstachaidh](/img/config/integrations-tab.png)

<!-- Chan eil glacadh-sgrìn ri fhaighinn: Ceanglaichean Rèiteachaidh solaraiche òstachaidh air taba roghainnean nan Amalachadh -->

_Thoir an aire mura h-eil an solaraiche òstachaidh agad mar aon de na solaraichean sin a chaidh ainmeachadh gu h-àrd,**feumaidh tu an t-ainm àrainne a shioncronachadh no a chur ris a' chunntas òstachaidh agad le làimh**._
