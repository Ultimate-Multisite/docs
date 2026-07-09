---
title: Ŝanĝoprotokolo de Subtenaj Biletoj
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Ŝanĝprotokolo de Subtenaj Biletoj

### 1.0.4 - 2026-05-05
* Plibonigita: Forigis la dosierujon vendor/ el Git-spurado (jam kovrita de .gitignore), reduktante la deponejan grandecon
* Plibonigita: Testita ĝis WordPress 7.0

### 1.0.3 - 2026-05-01
* Korekto: Akcepti nulajn valorojn en nuligeblaj agordiloj de la bileta modelo
* Korekto: Konservi ĉiujn biletojn en tutretaj globalaj tabeloj por ĝusta multreteja subteno
* Korekto: Kaŝi personarajn kampojn kaj korekti blankpaĝan redirekton en la nova-bileta formularo de kliento
* Korekto: Anstataŭigi nedifinitajn vokojn add_meta() per ĝusta update_meta() por metadatuma konservado
* Korekto: Anstataŭigi neregistritan kapablec-kontrolon per ĝusta wu_view_all_support_tickets
* Korekto: Aldoni mankantajn AJAX-traktilojn por bileta stato, asigno kaj rapid-redaktaj agoj
* Korekto: Korekti metodonomon por detekto de personara respondo en biletaj vidoj
* Korekto: Firmigi duobligitajn respondajn traktilojn kaj akordigi nonce-ago-nomojn
* Korekto: Aldoni mankantan fasadan vidon por [wu_submit_ticket] shortcode
* Korekto: Aldoni mankantan kolumnon user_id kaj korekti la metodon Support_Ticket::get_user_id()
* Korekto: Forigi ekstran duoblan citilon en opcio-etikedo de prioritata filtrilo
* Korekto: Aldoni retan administran bilet-administran panelon por superadministrantoj
* Plibonigita: Firmigi administran CSS en unu solan eksteran stilfolion
* Plibonigita: Forigi submenuon Agordoj el la administra menuo de subretejo
* Plibonigita: Kondiĉe ŝargi fasadajn havaĵojn nur sur subten-biletaj paĝoj
* Plibonigita: Preterlasi plugin-aŭtoŝargilon kiam la radika aŭtoŝargilo de Bedrock jam ŝargis dependecojn

### 1.0.2 - 2025-12-11
* Aldonita: Plena funkcieco por vidi biletojn por administranto kaj fasado
* Aldonita: AJAX-traktilo por sendado de biletaj respondoj
* Aldonita: Subteno por bileta respondfunkcieco kun ĝusta formulara traktado
* Aldonita: Ĝusta aviza montrado por biletsendoj kaj respondoj en administrado
* Aldonita: Aŭtomata bileta asociado kun nuna uzanto por klientaj memsendadoj
* Aldonita: Sekureca plibonigo por malhelpi klientojn superregi biletan posedantecon
* Aldonita: Mankantaj helpaj funkcioj (wu_format_date, wu_user_can_view_ticket, ktp.)
* Aldonita: Ĝusta elŝuto kaj traktado de dosieraj aldonaĵoj
* Aldonita: Retpoŝta sciiga sistemo por biletaj respondoj kaj statoŝanĝoj
* Korektita: Bileta respondformularo nun inkluzivas necesan biletan ID
* Korektita: Problemoj pri aviza videbleco en administraj biletaj vidoj
* Korektita: Sintaksaj eraroj en subten-biletaj funkcioj
* Plibonigita: Datumbaza strukturo kun ĝustaj demandaj kaj skemaj klasoj por respondoj kaj aldonaĵoj
* Plibonigita: Migrado al realaj ecoj anstataŭ atributoj por biletaj modeloj

### 1.0.1 - 2025-09-28
* Ĝisdatigita: Alinomis prefikson al ultimate-multisite por konsekvenco
* Ĝisdatigita: Normigado de teksta domajno
* Korektita: Malgrandaj cimo-korektoj kaj plibonigoj

### 1.0.0 - 2025-09-01
* Komenca eldono
* Kompleta bilet-administra sistemo
* Plurnivela alirkontrolado
* Fadena konversacia sistemo
* Subteno por dosieraj aldonaĵoj
* Retpoŝta sciiga sistemo
* Interfacoj por administranto kaj kliento
* Statistikoj kaj raportado
