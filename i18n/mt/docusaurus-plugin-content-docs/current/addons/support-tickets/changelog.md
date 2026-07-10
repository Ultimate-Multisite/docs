---
title: Reġistru tal-bidliet tal-Biljetti ta’ Appoġġ
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Reġistru tal-Bidliet tat-Tickets ta' Appoġġ {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Imtejjeb: Tneħħa d-direttorju vendor/ mit-traċċar ta' Git (diġà kopert minn .gitignore), u b'hekk tnaqqas id-daqs tar-repożitorju
* Imtejjeb: Ittestjat sa WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Tiswija: Aċċetta valuri null fis-setters tal-mudell tat-ticket li jista' jkun null
* Tiswija: Aħżen it-tickets kollha f'tabelli globali madwar in-network kollu għal appoġġ multisite xieraq
* Tiswija: Aħbi l-fields tal-persunal u sewwi r-ridirezzjoni għal paġna vojta fuq il-formola ta' ticket ġdid tal-klijent
* Tiswija: Ibdel sejħiet add_meta() mhux definiti b'update_meta() korrett għall-ħażna tal-metadata
* Tiswija: Ibdel il-kontroll ta' capability mhux irreġistrat b'wu_view_all_support_tickets korrett
* Tiswija: Żid handlers AJAX neqsin għall-istatus tat-ticket, l-assenjazzjoni, u azzjonijiet ta' quick-edit
* Tiswija: Ikkoreġi l-isem tal-metodu għad-detezzjoni ta' tweġiba tal-persunal fil-views tat-ticket
* Tiswija: Għaqqad handlers duplikati tat-tweġibiet u allinja l-ismijiet tal-azzjoni nonce
* Tiswija: Żid view tal-frontend nieqsa għax-shortcode [wu_submit_ticket]
* Tiswija: Żid il-kolonna user_id nieqsa u sewwi l-metodu Support_Ticket::get_user_id()
* Tiswija: Neħħi double-quote żejjed fit-tag tal-għażla tal-filtru tal-prijorità
* Tiswija: Żid panel tal-ġestjoni tat-tickets tal-amministrazzjoni tan-network għas-super amministraturi
* Imtejjeb: Għaqqad is-CSS tal-amministrazzjoni f'stylesheet esterna waħda
* Imtejjeb: Neħħi s-submenu Settings mill-menu tal-amministrazzjoni tas-subsite
* Imtejjeb: Tella' l-assi tal-frontend b'mod kundizzjonali biss fuq paġni tat-tickets ta' appoġġ
* Imtejjeb: Aqbeż l-autoloader tal-plugin meta l-autoloader tal-għerq ta' Bedrock ikun diġà tella' d-dependencies

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Miżjud: Funzjonalità sħiħa tal-wiri tat-tickets għall-amministrazzjoni u l-frontend
* Miżjud: Handler AJAX għas-sottomissjonijiet ta' tweġibiet tat-ticket
* Miżjud: Appoġġ għall-funzjonalità tat-tweġibiet tat-ticket b'immaniġġjar xieraq tal-formola
* Miżjud: Wiri xieraq ta' avviżi għas-sottomissjonijiet u t-tweġibiet tat-tickets fl-amministrazzjoni
* Miżjud: Assoċjazzjoni awtomatika tat-ticket mal-utent attwali għal sottomissjonijiet proprji tal-klijent
* Miżjud: Titjib tas-sigurtà biex jipprevjeni lill-klijenti milli jegħlbu s-sjieda tat-ticket
* Miżjud: Funzjonijiet ta' għajnuna neqsin (wu_format_date, wu_user_can_view_ticket, eċċ.)
* Miżjud: Tniżżil u mmaniġġjar xieraq ta' attachments ta' fajls
* Miżjud: Sistema ta' notifiki bl-email għat-tweġibiet tat-tickets u l-bidliet fl-istatus
* Irranġat: Il-formola tat-tweġiba tat-ticket issa tinkludi l-ID tat-ticket meħtieġ
* Irranġat: Problemi ta' viżibbiltà tal-avviżi fil-views tat-tickets tal-amministrazzjoni
* Irranġat: Żbalji tas-sintassi fil-funzjonijiet tat-tickets ta' appoġġ
* Imtejjeb: Struttura tad-database b'query u klassijiet tal-iskema xierqa għat-tweġibiet u l-attachments
* Imtejjeb: Migrazzjoni għal proprjetajiet reali minflok attributes għall-mudelli tat-tickets

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Aġġornat: Il-prefix ingħata isem ġdid għal ultimate-multisite għall-konsistenza
* Aġġornat: Standardizzazzjoni tat-text domain
* Irranġat: Tiswijiet u titjib żgħar ta' bugs

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Ħarġa inizjali
* Sistema kompleta ta' ġestjoni tat-tickets
* Kontroll tal-aċċess fuq diversi livelli
* Sistema ta' konverżazzjoni f'threads
* Appoġġ għal attachments ta' fajls
* Sistema ta' notifiki bl-email
* Interfaces tal-amministrazzjoni u tal-klijenti
* Statistika u rappurtar
