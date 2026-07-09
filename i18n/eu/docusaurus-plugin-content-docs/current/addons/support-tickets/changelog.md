---
title: Laguntza-tiketen aldaketa-erregistroa
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Laguntza-tiketen aldaketen erregistroa

### 1.0.4 - 2026-05-05
* Hobetua: vendor/ direktorioa Git jarraipenetik kendu da (dagoeneko .gitignore-ek estaltzen zuen), biltegiaren tamaina murriztuz
* Hobetua: WordPress 7.0 bertsiora arte probatua

### 1.0.3 - 2026-05-01
* Konponketa: null balioak onartu ticket ereduko setter nullable-etan
* Konponketa: Ticket guztiak sare osoko taula globaletan gorde, multisite euskarria behar bezala emateko
* Konponketa: Langileen eremuak ezkutatu eta orri hutsaren birbideratzea konpondu bezeroaren ticket berriko formularioan
* Konponketa: Definitu gabeko add_meta() deiak update_meta() zuzenarekin ordezkatu, metadatuen biltegiratzerako
* Konponketa: Erregistratu gabeko gaitasun-egiaztapena wu_view_all_support_tickets zuzenarekin ordezkatu
* Konponketa: Ticket egoerarako, esleipenerako eta edizio azkarreko ekintzetarako falta ziren AJAX kudeatzaileak gehitu
* Konponketa: Langileen erantzuna detektatzeko metodoaren izena zuzendu ticket ikuspegietan
* Konponketa: Erantzun-kudeatzaile bikoiztuak bateratu eta nonce ekintzen izenak lerrokatu
* Konponketa: [wu_submit_ticket] shortcode-rako falta zen frontend ikuspegia gehitu
* Konponketa: Falta zen user_id zutabea gehitu eta Support_Ticket::get_user_id() metodoa konpondu
* Konponketa: Lehentasun-iragazkiaren aukera-etiketan zegoen komatxo bikoitz gehigarria kendu
* Konponketa: Sareko administrazioaren ticket kudeaketa-panela gehitu super administratzaileentzat
* Hobetua: Administrazioko CSSa kanpoko estilo-orri bakar batean bateratu
* Hobetua: Ezarpenen azpimenua kendu azpiguneko administrazio-menutik
* Hobetua: Frontend baliabideak baldintzapean kargatu soilik laguntza-tiketen orrietan
* Hobetua: Pluginaren kargatzaile automatikoa saltatu Bedrock erroko kargatzaile automatikoak mendekotasunak dagoeneko kargatu dituenean

### 1.0.2 - 2025-12-11
* Gehitua: Ticketak osorik ikusteko funtzionaltasuna administraziorako eta frontenderako
* Gehitua: Ticket-erantzunen bidalketetarako AJAX kudeatzailea
* Gehitua: Ticket-erantzunen funtzionaltasunerako euskarria, formularioen kudeaketa egokiarekin
* Gehitua: Jakinarazpenen bistaratze egokia ticket bidalketetarako eta erantzunetarako administrazioan
* Gehitua: Ticketen elkartea automatikoki uneko erabiltzailearekin, bezeroen auto-bidalketetarako
* Gehitua: Segurtasun-hobekuntza, bezeroek ticketaren jabetza gainidaztea eragozteko
* Gehitua: Falta ziren laguntza-funtzioak (wu_format_date, wu_user_can_view_ticket, etab.)
* Gehitua: Fitxategi-eranskinen deskarga eta kudeaketa egokia
* Gehitua: Email bidezko jakinarazpen-sistema ticket-erantzunetarako eta egoera-aldaketetarako
* Konponduta: Ticket-erantzunaren formularioak orain beharrezko ticket IDa barne hartzen du
* Konponduta: Jakinarazpenen ikusgaitasun-arazoak administrazioko ticket ikuspegietan
* Konponduta: Sintaxi-erroreak laguntza-tiketen funtzioetan
* Hobetua: Datu-basearen egitura, kontsulta- eta eskema-klase egokiekin erantzunetarako eta eranskinetarako
* Hobetua: Ticket ereduetarako atributuen ordez benetako propietateetara egindako migrazioa

### 1.0.1 - 2025-09-28
* Eguneratua: Aurrizkia ultimate-multisite izenera aldatu da koherentziagatik
* Eguneratua: Testu-domeinuaren estandarizazioa
* Konponduta: Akats txikien konponketak eta hobekuntzak

### 1.0.0 - 2025-09-01
* Hasierako argitalpena
* Ticket kudeaketa-sistema osoa
* Maila anitzeko sarbide-kontrola
* Hari bidezko elkarrizketa-sistema
* Fitxategi-eranskinen euskarria
* Email bidezko jakinarazpen-sistema
* Administratzailearen eta bezeroaren interfazeak
* Estatistikak eta txostenak
