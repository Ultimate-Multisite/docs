---
title: Reġistru tal-Bidliet tal-Bejjiegħ tad-Dominji
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Reġistru tal-bidliet ta’ Domain Seller {#domain-seller-changelog}

Verżjoni 1.3.0 - Rilaxxata fit-2026-06-02
- Ġdid: Miżjuda twissija tan-network-admin meta l-bilanċ tar-reseller ta’ HostAfrica jinżel wisq
- Ġdid: Miżjud immappjar awtomatiku ta’ dominji reġistrati ġodda mas-sit tan-network
- Tiswija: Applikati r-rekwiżiti tal-oqsma tar-reġistrant biss meta jiġi reġistrat dominju ġdid
- Tiswija: In-notifiki tal-bilanċ tal-monitoraġġ saru dismissible
- Tiswija: Żgurat li d-dettalji tal-kontijiet tar-reġistrant ta’ WooCommerce jinżammu
- Tiswija: Infurzati r-rekwiżiti tal-kuntatt tar-reġistrant waqt ir-reġistrazzjoni
- Tiswija: Imwaqqaf il-ħolqien ta’ prodotti tar-reġistrazzjoni tad-dominji b’markup ta’ 0%
- Tiswija: Inżammu l-għażliet tad-dominju u l-ipprezzar matul il-fluss tas-sessjoni taċ-checkout
- Tiswija: Imtejjeb il-wiri tal-munita tal-ipprezzar tad-dominji ta’ HostAfrica
- Tiswija: Imtejjeb l-imġiba tal-form-action taċ-checkout biex jiġu evitati diskrepanzi fil-query-var tal-qalba ta’ WP
- Imtejjeb: Marbuta d-dokumentazzjoni tal-konfigurazzjoni tar-reseller ta’ HostAfrica fil-gwida tas-setup

Verżjoni 1.2.0 - Rilaxxata fil-2026-05-25
- Ġdid: Miżjud HostAfrica bħala integrazzjoni għall-bejgħ tad-dominji b’appoġġ għal checkout, wizard tas-setup, tfittxija, TLD/ipprezzar, reġistrazzjoni, tiġdid, trasferiment, nameserver, DNS, kodiċi EPP, lock tar-reġistratur, u protezzjoni tal-ID
- Ġdid: Miżjud Openprovider bħala integrazzjoni għall-bejgħ tad-dominji b’appoġġ għal ipprezzar tar-reseller, reġistrazzjoni, tiġdid, trasferiment, nameserver, DNS, kodiċi EPP, lock tar-reġistratur, privatezza WHOIS, u sinkronizzazzjoni tat-TLD
- Ġdid: Miżjud Hostinger bħala integrazzjoni għall-bejgħ tad-dominji li tuża t-token kondiviż tal-API ta’ Hostinger mill-integrazzjoni ewlenija għal verifiki tad-disponibbiltà, reġistrazzjoni, aġġornamenti tan-nameserver, lock tar-reġistratur, u privatezza WHOIS
- Imtejjeb: Miżjuda docblocks ta’ azzjonijiet u filtri taċ-ċiklu tal-ħajja tad-dominju għal gwida tal-integrazzjoni għall-iżviluppaturi
- Imtejjeb: Aġġornata l-metadata tal-kompatibbiltà tal-plugin għal WordPress 7.0 fir-readme tal-addon
- Imtejjeb: Aġġornati t-templates tal-ippjanar użati għall-koordinazzjoni tar-rilaxx li jmiss

Verżjoni 1.1.0 - Rilaxxata fit-2026-05-08
- Ġdid: Il-ħolqien ta’ rekord DNS (add_dns_record) ġie implimentat għar-reġistraturi ResellerClub, Enom, u OpenSRS
- Tiswija: Il-parser Default DNS Records issa jittollera t-tokens {DOMAIN} u {SITE_URL}
- Tiswija: Is-slugs tal-oqsma taċ-checkout tal-għażla tad-dominju ngħataw namespace biex tiġi evitata kolliżjoni ma’ site_url

Verżjoni 1.0.8 - Rilaxxata fis-2026-05-07
- Tiswija: L-ipprezzar tad-dominji ta’ ResellerClub issa jiġbor il-prezzijiet tal-ispiża live mill-punt finali korrett tal-API

Verżjoni 1.0.7 - Rilaxxata fis-2026-05-06
* Tiswija: ResellerClub test_connection jibgħat il-parametru meħtieġ tlds (#224)

Verżjoni 1.0.6 - Rilaxxata fil-2026-05-05
* Tiswija: Ir-reġistrazzjoni tad-dominji ta’ ResellerClub issa taħdem sew b’immaniġġjar imtejjeb tar-rispons tal-API u routing tal-fornitur immexxi mir-reġistru
* Tiswija: Titjib fl-UX tal-paġna tal-amministrazzjoni Register Domain
* Imneħħi: Integrazzjoni tar-reġistratur CyberPanel

Verżjoni 1.0.5 - Rilaxxata fit-2026-04-02
* Ġdid: Integrazzjoni tar-reġistratur GoDaddy għar-reġistrazzjoni u l-ġestjoni tad-dominji
* Ġdid: Integrazzjoni tar-reġistratur NameSilo
* Ġdid: Integrazzjoni tar-reġistratur ResellerClub
* Ġdid: Verifika awtomatika tad-dominju li jibgħat SES meta jinxtara u jiġi mmappjat dominju
* Tiswija: Protetti l-kostanti tal-plugin kontra definizzjoni mill-ġdid fl-ambjent tat-test
* Tiswija: Il-flags ta’ MySQL jinqasmu f’kelmiet b’mod korrett f’install-wp-tests.sh

Verżjoni 1.0.4 - Rilaxxata fl-2026-03-14
* **Tiswija:** Xi assets css nieqsa
* **Tiswija:** Żball relatat ma’ tlds mhux disponibbli

Verżjoni 1.0.3 - Rilaxxata fid-2026-03-09
* **Tiswija:** Żbalji tal-proprjetà reattiva ta’ Vue (domain_option, selected_domain, domain_provider) meta jintuża t-template legacy tas-signup bix-shortcode taċ-checkout
* **Tiswija:** Allinjament ħażin tal-qasam tal-input tas-subdominju u test kbir iżżejjed fil-qasam taċ-checkout tal-għażla tad-dominju
* **Tiswija:** Aħbi l-blokk ta’ preview "Your URL will be" meta l-qasam tal-għażla tad-dominju jkun preżenti

Verżjoni 1.0.2 - Rilaxxata fl-2026-03-01
* **Imtejjeb:** Tneħħew is-settings globali tal-markup mill-paġna tas-settings — l-ipprezzar issa huwa esklussivament għal kull prodott
* **Imtejjeb:** Miżjuda link "Manage Domain Products" fuq il-paġna tas-settings għal navigazzjoni rapida
* **Imtejjeb:** Deskrizzjonijiet tal-oqsma u tooltips aktar ċari għas-settings tal-prodott tad-dominju (catch-all vs speċifiċi għat-TLD, tipi ta’ markup, ipprezzar introduttorju)
* **Imtejjeb:** Deskrizzjonijiet aħjar tul il-paġna tas-settings (fittex TLDs, tiġdid, DNS, notifiki)

Verżjoni 1.0.1 - Rilaxxata fis-2026-02-27

* **Ġdid:** Għodda ta' importazzjoni TLD għall-ġestjoni tal-prezzijiet bl-ingrossa
* **Ġdid:** Appoġġ għal prezzijiet introduttorji għal prodotti tad-dominju
* **Ġdid:** Sett ta' testijiet E2E b'Cypress
* **Ġdid:** Mudelli tal-email għal notifiki taċ-ċiklu tal-ħajja tad-dominju
* **Ġdid:** Oqsma tal-indirizz tar-reġistrant fuq il-modal tar-reġistrazzjoni tad-dominju tal-amministratur, mimlija minn qabel mis-settings
* **Ġdid:** Interfaċċa tal-ġestjoni DNS tal-klijent b'appoġġ biex iżżid, teditja, u tħassar records
* **Ġdid:** Għażla ta' checkout "Bring your own domain" b'mapping awtomatiku tad-dominju
* **Ġdid:** Ġenerazzjoni awtomatika tal-URL tas-sit mill-isem tad-dominju waqt il-checkout
* **Ġdid:** Konfigurazzjoni ta' nameserver u record DNS predefiniti fis-settings
* **Ġdid:** Dettalji tar-reġistrazzjoni tad-dominju u ġestjoni DNS fuq il-paġna ewlenija tal-editjar tad-dominju
* **Ġdid:** Setup wizard joħloq awtomatikament prodott tad-dominju predefinit b'valuri awtomatiċi sensibbli
* **Ġdid:** Sinkronizzazzjoni awtomatika ta' kuljum tat-TLD permezz ta' cron fost il-fornituri kkonfigurati kollha
* **Ġdid:** Protezzjoni tal-privatezza WHOIS b'konfigurazzjoni għal kull prodott (dejjem mixgħula, għażla tal-klijent, jew diżattivata)
* **Ġdid:** Checkbox tal-privatezza WHOIS fil-checkout b'wiri tal-prezzijiet u appoġġ għal dark mode
* **Ġdid:** Paġna tal-amministratur Register Domain għar-reġistrazzjoni manwali tad-dominju
* **Ġdid:** Aġġornamenti awtomatiċi tal-plugin permezz tas-server tal-aġġornamenti ta' Ultimate Multisite
* **Ġdid:** Tab tal-filtru tat-tip ta' prodott tad-dominju fit-tabella tal-lista tal-prodotti bi stil ta' badge vjola
* **Ġdid:** Oqsma ta' kuntatt tar-reġistrant (isem, indirizz, belt, stat, kodiċi postali, pajjiż, telefon) fuq il-formola tal-checkout tad-dominju
* **Ġdid:** Validazzjoni tal-oqsma tar-reġistrant qabel ma tissejjaħ l-API tar-reġistrar b'messaġġi ta' żball ċari
* **Ġdid:** Kanali tal-log speċifiċi għall-fornitur għal avvenimenti tar-reġistrazzjoni tad-dominju (eż. domain-seller-namecheap.log)
* **Ġdid:** Oqsma ta' kuntatt tar-reġistrant fuq il-formola ewlenija tar-reġistrazzjoni/signup checkout (murija meta jiġi rreġistrat dominju)
* **Imtejjeb:** Il-qasam Domain Search tal-checkout ġie sostitwit b'qasam unifikat Domain Selection li jappoġġja tabs ta' subdomain, reġistrazzjoni, u dominju eżistenti
* **Imtejjeb:** Is-settings tal-prodott tad-dominju jintwerew inline fuq il-paġna tal-editjar tal-prodott permezz tas-sistema ewlenija tal-widget
* **Imtejjeb:** L-informazzjoni tad-dominju tal-klijent tintrabat mal-widget ewlieni tal-mapping tad-dominju minflok ma' metabox separat
* **Imtejjeb:** Il-wizard tal-importazzjoni TLD ġie ssimplifikat għal sinkronizzazzjoni b'klikk waħda mill-fornituri kollha
* **Imtejjeb:** Id-disponibbiltà tad-dominju Namecheap tuża sejħa API batch għal tfittxija aktar mgħaġġla
* **Imtejjeb:** L-API tal-prezzijiet ta' Namecheap tuża parametri korretti u parsing korrett tar-rispons
* **Imtejjeb:** Ħażna ċċentralizzata tat-TLD f'network option waħda
* **Imtejjeb:** Logging tal-attività tad-dominju għal bidliet DNS, trasferimenti, u applikazzjoni tal-konfigurazzjoni
* **Imtejjeb:** Sinkronizzazzjoni sħiħa tat-TLD għal OpenSRS bl-użu tal-lista prinċipali IANA b'validazzjoni batch
* **Imtejjeb:** Sinkronizzazzjoni sħiħa tat-TLD għal Namecheap b'talbiet API paġinati
* **Imtejjeb:** Klassijiet tal-fornituri legacy ġew sostitwiti bil-mudell Integration Registry
* **Imtejjeb:** Panel tas-settings b'konfigurazzjoni DNS u tat-trasferiment
* **Imtejjeb:** In-numri tat-telefon jiġu fformattjati awtomatikament għall-format tar-reġistrar +CC.NNN
* **Imtejjeb:** Il-validazzjoni tal-qasam tat-telefon tneħħi l-karattri tal-ifformattjar qabel is-sottomissjoni
* **Imtejjeb:** Ir-rekwiżit tal-verżjoni tela' għal Ultimate Multisite 2.4.12 b'avviż aktar ċar
* **Imtejjeb:** Il-workflow CI juża checkout xieraq kemm għall-addon kif ukoll għall-plugin ewlieni
* **Imtejjeb:** prepare_registrant_info() jaqra minn user meta ssejvjat mill-checkout b'fallback għall-indirizz tal-kontijiet
* **Irranġat:** Domain search AJAX kien qed ifalli għal utenti mhux illoggjati waqt il-checkout
* **Irranġat:** Domain pricing AJAX kien qed ifalli għal utenti mhux illoggjati waqt il-checkout
* **Irranġat:** Żball fatali ta' rideklarazzjoni tal-klassi Spyc meta jitħaddmu kmandi WP-CLI
* **Irranġat:** It-timeout tal-API sandbox ta' Namecheap kien qasir wisq
* **Irranġat:** It-test tal-buttuna Select fit-tfittxija tad-dominju ma kienx jidher fuq sfond aħdar
* **Irranġat:** Ir-reġistrazzjoni tad-dominju kienet qed tfalli bl-iżball "RegistrantFirstName is Missing" minħabba informazzjoni ta' kuntatt nieqsa
* **Irranġat:** Record tad-dominju nħoloq b'blog_id=0 meta s-sit kien għadu ma jeżistix fil-ħin tal-checkout
* **Irranġat:** Is-setting tat-TLDs predefiniti kien jirritorna bħala string minflok array parsed
* **Imneħħi:** Paġna tal-amministratur Domain Management separata — issa tiġi ttrattata permezz tal-paġni ewlenin tad-dominju

Verżjoni 1.0.0 - Rilaxxata fil-2025-09-28

**Kitba mill-Ġdid Maġġuri għal Ultimate Multisite v2**

* **Ġdid:** Kitba mill-ġdid kompluta b'arkitettura moderna PHP 7.4+
* **Ġdid:** Integrazzjoni bla xkiel mas-sistema tal-checkout ta' Ultimate Multisite v2
* **Ġdid:** Ġestjoni tal-prodotti tad-dominju b'għażliet ta' prezzijiet flessibbli
* **Ġdid:** Arkitettura ta' appoġġ għal fornituri multipli tad-dominju
* **Ġdid:** Integrazzjoni ta' tiġdid awtomatiku u subscription
* **Ġdid:** Interfaċċa tal-ġestjoni tad-dominju tal-klijent
* **Ġdid:** Monitoraġġ u logs tad-dominju tal-amministratur
* **Ġdid:** Appoġġ għal coupons għal prodotti tad-dominju
* **Ġdid:** Ġestjoni komprensiva tas-settings
* **Ġdid:** Codebase estensibbli u faċli għall-iżviluppaturi
* **Imtejjeb:** Fornitur OpenSRS aġġornat b'appoġġ sħiħ għall-karatteristiċi
* **Imtejjeb:** UI moderna konsistenti ma' Ultimate Multisite v2
* **Irranġat:** Il-kodiċi v1 skadut kollu ġie aġġornat għall-istandards v2
* **Imneħħi:** Kompatibbiltà legacy v1 (bidla li tkisser il-kompatibbiltà)

### Verżjonijiet Preċedenti (v1 Legacy) {#previous-versions-v1-legacy}

### Verżjoni 0.0.3 - 20/08/2019 {#version-003---20082019}

* Irranġat: Inkompatibbiltà ma' Groundhogg CRM
* Nota: Din kienet l-aħħar release kompatibbli ma' v1

### Verżjoni 0.0.2 - 07/12/2018 {#version-002---07122018}

* Irranġat: Tneħħa l-qasam License Key
* Irranġat: Tabs tal-plan nieqsa meta l-plugin tal-karatteristika jkun attiv
* Imtejjeb: Ġiet miżjuda buttuna skip fuq il-qasam tar-reġistrazzjoni

### Verżjoni 0.0.1 - Rilaxx Inizjali {#version-001---initial-release}

* Integrazzjoni bażika ta' OpenSRS għal WP Ultimo v1
* Tfittxija u reġistrazzjoni sempliċi tad-dominju
* Permessi tad-dominju bbażati fuq il-plan
