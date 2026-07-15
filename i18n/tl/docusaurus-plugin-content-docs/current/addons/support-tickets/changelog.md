---
title: Tala ng Pagbabago ng Mga Ticket ng Suporta
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Tala ng Pagbabago ng Mga Ticket ng Suporta

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Pinahusay: Inalis ang direktoryong vendor/ mula sa pagsubaybay ng Git (sakop na ng .gitignore), na nagpapababa sa laki ng repository
* Pinahusay: Nasubukan hanggang WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Naayos: Tanggapin ang mga null na halaga sa mga nullable na setter ng modelo ng ticket
* Naayos: Itago ang lahat ng ticket sa mga global na talahanayan sa buong network para sa tamang suporta sa multisite
* Naayos: Itago ang mga field ng staff at ayusin ang pag-redirect sa blankong pahina sa form ng bagong ticket ng customer
* Naayos: Palitan ang mga hindi tinukoy na tawag na add_meta() ng tamang update_meta() para sa imbakan ng metadata
* Naayos: Palitan ang hindi rehistradong pagsusuri ng capability ng tamang wu_view_all_support_tickets
* Naayos: Idagdag ang mga nawawalang AJAX handler para sa status ng ticket, pagtatalaga, at mga aksyon ng quick-edit
* Naayos: Itama ang pangalan ng method para sa pagtukoy ng tugon ng staff sa mga view ng ticket
* Naayos: Pagsamahin ang mga duplikadong handler ng reply at ihanay ang mga pangalan ng aksyon ng nonce
* Naayos: Idagdag ang nawawalang frontend view para sa [wu_submit_ticket] shortcode
* Naayos: Idagdag ang nawawalang column na user_id at ayusin ang method na Support_Ticket::get_user_id()
* Naayos: Alisin ang sobrang double-quote sa option tag ng filter ng priority
* Naayos: Idagdag ang panel ng pamamahala ng ticket sa network admin para sa mga super admin
* Pinahusay: Pinagsama ang admin CSS sa iisang panlabas na stylesheet
* Pinahusay: Alisin ang submenu ng Settings mula sa admin menu ng subsite
* Pinahusay: Kondisyonal na i-load ang mga frontend asset lamang sa mga pahina ng support ticket
* Pinahusay: Laktawan ang autoloader ng plugin kapag na-load na ng root autoloader ng Bedrock ang mga dependency

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Idinagdag: Buong functionality sa pagtingin ng ticket para sa admin at frontend
* Idinagdag: AJAX handler para sa mga pagsusumite ng reply sa ticket
* Idinagdag: Suporta para sa functionality ng reply sa ticket na may wastong paghawak ng form
* Idinagdag: Wastong pagpapakita ng abiso para sa mga pagsusumite ng ticket at mga reply sa admin
* Idinagdag: Awtomatikong pag-uugnay ng ticket sa kasalukuyang user para sa sariling pagsusumite ng customer
* Idinagdag: Pagpapahusay sa seguridad upang pigilan ang mga customer na palitan ang pagmamay-ari ng ticket
* Idinagdag: Mga nawawalang helper function (wu_format_date, wu_user_can_view_ticket, atbp.)
* Idinagdag: Wastong pag-download at paghawak ng kalakip na file
* Idinagdag: Sistema ng notification sa email para sa mga reply sa ticket at mga pagbabago ng status
* Naayos: Kasama na ngayon sa form ng reply sa ticket ang kinakailangang ticket ID
* Naayos: Mga isyu sa visibility ng abiso sa mga view ng ticket sa admin
* Naayos: Mga syntax error sa mga function ng support ticket
* Pinahusay: Estruktura ng database na may wastong query at mga schema class para sa mga tugon at kalakip
* Pinahusay: Paglipat sa tunay na mga property sa halip na mga attribute para sa mga modelo ng ticket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Na-update: Pinalitan ang pangalan ng prefix sa ultimate-multisite para sa pagkakapare-pareho
* Na-update: Standardisasyon ng text domain
* Naayos: Maliliit na pag-aayos ng bug at mga pagpapahusay

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Paunang release
* Kumpletong sistema ng pamamahala ng ticket
* Multi-level na kontrol sa access
* Sistema ng may-thread na pag-uusap
* Suporta sa kalakip na file
* Sistema ng notification sa email
* Mga interface ng admin at customer
* Mga estadistika at pag-uulat
