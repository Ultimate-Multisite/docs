---
title: Chinyorwa cheshanduko cheMatikiti eRutsigiro
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Nhoroondo yeShanduko dzeSupport Tickets

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Yakavandudzwa: Yakabvisa dhairekitori re vendor/ kubva mukuteverwa neGit (rakatofukidzwa ne .gitignore), zvichideredza saizi yerepository
* Yakavandudzwa: Yakaedzwa kusvika kuWordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Gadziriso: Gamuchira kukosha kwe null muma nullable ticket model setters
* Gadziriso: Chengeta maticket ese mumatafura epasi rose enetwork yose kuti multisite itsigirwe nemazvo
* Gadziriso: Viga minda yevashandi uye gadzirisa kuendeswa kupeji risina chinhu pafomu remutengi re new-ticket
* Gadziriso: Tsiva kufona kwe add_meta() kusina kutsanangurwa ne update_meta() yakarurama yekuchengetedza metadata
* Gadziriso: Tsiva kuongorora capability isina kunyoreswa ne wu_view_all_support_tickets yakarurama
* Gadziriso: Wedzera maAJAX handlers asipo ezviito zvechimiro cheticket, kupihwa basa, uye quick-edit
* Gadziriso: Ruramisa zita remethod rekuziva mhinduro yevashandi mumaonero eticket
* Gadziriso: Batanidza duplicate reply handlers uye enzanisa mazita e nonce action
* Gadziriso: Wedzera frontend view isipo ye [wu_submit_ticket] shortcode
* Gadziriso: Wedzera column ye user_id isipo uye gadzirisa method ye Support_Ticket::get_user_id()
* Gadziriso: Bvisa double-quote yakawandisa mutag yesarudzo yepriority filter
* Gadziriso: Wedzera panel yekutarisira maticket ye network admin yema super admins
* Yakavandudzwa: Batanidza admin CSS mu stylesheet imwe yekunze
* Yakavandudzwa: Bvisa submenu yeSettings kubva mumenyu yeadmin yesubsite
* Yakavandudzwa: Rodha frontend assets zvichienderana nemamiriro chete pamapeji eSupport Tickets
* Yakavandudzwa: Svetuka plugin autoloader kana Bedrock root autoloader yatotakura dependencies

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Yakawedzerwa: Kushanda kuzere kwekuona ticket kweadmin nefrontend
* Yakawedzerwa: AJAX handler yekutumira mhinduro dzeticket
* Yakawedzerwa: Tsigiro yekushanda kwemhinduro yeticket ine kubata fomu kwakakodzera
* Yakawedzerwa: Kuratidzwa kwakanaka kwezviziviso pakutumira maticket nemhinduro muadmin
* Yakawedzerwa: Kubatanidza ticket otomatiki nemushandisi aripo pakuzvitumirira kwevatengi
* Yakawedzerwa: Kuvandudzwa kwekuchengeteka kudzivirira vatengi kuti varege kuchinja muridzi weticket
* Yakawedzerwa: Mabasa ekubatsira asipo (wu_format_date, wu_user_can_view_ticket, nezvimwewo)
* Yakawedzerwa: Kudhawunirodha nekubata file attachment kwakakodzera
* Yakawedzerwa: System yezviziviso zveemail yemhinduro dzeticket nekuchinja kwechimiro
* Yakagadziriswa: Fomu remhinduro yeticket rava kusanganisira ID yeticket inodiwa
* Yakagadziriswa: Matambudziko ekuonekwa kwezviziviso mumaonero eticket eadmin
* Yakagadziriswa: Zvikanganiso zve syntax mumabasa eSupport Tickets
* Yakavandudzwa: Chimiro chedatabase chine query nemakirasi e schema akakodzera emhinduro nemaattachments
* Yakavandudzwa: Kutamiswa kuenda kuma properties chaiwo panzvimbo pe attributes ema ticket models

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Yakagadziridzwa: Prefix yakatumidzwazve kuva ultimate-multisite kuitira kuenderana
* Yakagadziridzwa: Kuenzaniswa kwe text domain
* Yakagadziriswa: Gadziriso diki dzemabug nekuvandudzwa

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Kuburitswa kwekutanga
* System yakazara yekutarisira maticket
* Kudzora kupinda kwemazinga akawanda
* System yenhaurirano dzine thread
* Tsigiro yefaira attachment
* System yezviziviso zveemail
* Mainterface eadmin nemutengi
* Manhamba uye mishumo
