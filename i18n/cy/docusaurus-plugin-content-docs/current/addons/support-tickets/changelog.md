---
title: Cofnod Newidiadau Tocynnau Cymorth
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Cofnod Newidiadau Tocynnau Cefnogaeth

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Wedi gwella: Tynnwyd cyfeiriadur vendor/ o olrhain Git (eisoes wedi'i gwmpasu gan .gitignore), gan leihau maint yr ystorfa
* Wedi gwella: Wedi'i brofi hyd at WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Atgyweiriad: Derbyn gwerthoedd null mewn gosodwyr model tocyn nullable
* Atgyweiriad: Storio pob tocyn mewn tablau byd-eang ar draws y rhwydwaith ar gyfer cefnogaeth multisite briodol
* Atgyweiriad: Cuddio meysydd staff ac atgyweirio ailgyfeirio tudalen wag ar ffurflen tocyn newydd cwsmer
* Atgyweiriad: Disodli galwadau add_meta() heb eu diffinio â'r update_meta() cywir ar gyfer storio metadata
* Atgyweiriad: Disodli gwiriad gallu heb ei gofrestru â'r wu_view_all_support_tickets cywir
* Atgyweiriad: Ychwanegu trinwyr AJAX coll ar gyfer statws tocyn, aseiniad, a gweithredoedd golygu cyflym
* Atgyweiriad: Cywiro enw'r dull ar gyfer canfod ymateb staff mewn golygon tocyn
* Atgyweiriad: Cydgrynhoi trinwyr ateb dyblyg ac alinio enwau gweithredoedd nonce
* Atgyweiriad: Ychwanegu golwg frontend goll ar gyfer shortcode [wu_submit_ticket]
* Atgyweiriad: Ychwanegu colofn user_id goll ac atgyweirio dull Support_Ticket::get_user_id()
* Atgyweiriad: Tynnu dyfynnod dwbl ychwanegol yn nhag opsiwn hidlydd blaenoriaeth
* Atgyweiriad: Ychwanegu panel rheoli tocynnau admin rhwydwaith ar gyfer super admins
* Wedi gwella: Cydgrynhoi CSS admin i un ddalen arddull allanol
* Wedi gwella: Tynnu is-ddewislen Settings o ddewislen admin is-wefan
* Wedi gwella: Llwytho asedau frontend yn amodol ar dudalennau tocynnau cefnogaeth yn unig
* Wedi gwella: Hepgor autoloader plugin pan fo autoloader gwraidd Bedrock eisoes wedi llwytho dibyniaethau

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ychwanegwyd: Swyddogaeth gweld tocynnau lawn ar gyfer admin a frontend
* Ychwanegwyd: Triniwr AJAX ar gyfer cyflwyno atebion tocyn
* Ychwanegwyd: Cefnogaeth ar gyfer swyddogaeth ateb tocyn gyda thrin ffurflenni priodol
* Ychwanegwyd: Dangos hysbysiadau priodol ar gyfer cyflwyniadau tocyn ac atebion yn admin
* Ychwanegwyd: Cysylltiad tocyn awtomatig â'r defnyddiwr presennol ar gyfer hunan-gyflwyniadau cwsmeriaid
* Ychwanegwyd: Gwelliant diogelwch i atal cwsmeriaid rhag diystyru perchnogaeth tocyn
* Ychwanegwyd: Swyddogaethau cynorthwyol coll (wu_format_date, wu_user_can_view_ticket, ac ati)
* Ychwanegwyd: Llwytho i lawr a thrin atodiadau ffeiliau yn briodol
* Ychwanegwyd: System hysbysiadau e-bost ar gyfer atebion tocyn a newidiadau statws
* Wedi'i atgyweirio: Mae ffurflen ateb tocyn bellach yn cynnwys ID tocyn angenrheidiol
* Wedi'i atgyweirio: Materion gwelededd hysbysiadau mewn golygon tocyn admin
* Wedi'i atgyweirio: Gwallau cystrawen mewn swyddogaethau tocynnau cefnogaeth
* Wedi gwella: Strwythur cronfa ddata gyda dosbarthiadau ymholiad a sgema priodol ar gyfer ymatebion ac atodiadau
* Wedi gwella: Mudo i briodweddau go iawn yn lle priodoleddau ar gyfer modelau tocyn

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Diweddarwyd: Ailenwyd y rhagddodiad i ultimate-multisite er mwyn cysondeb
* Diweddarwyd: Safoni parth testun
* Wedi'i atgyweirio: Mân atgyweiriadau bygiau a gwelliannau

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Rhyddhad cychwynnol
* System rheoli tocynnau gyflawn
* Rheoli mynediad aml-lefel
* System sgwrsio edafeddog
* Cefnogaeth atodi ffeiliau
* System hysbysiadau e-bost
* Rhyngwynebau admin a chwsmeriaid
* Ystadegau ac adroddiadau
