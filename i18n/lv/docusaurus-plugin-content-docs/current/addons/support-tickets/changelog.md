---
title: Atbalsta biļešu izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Atbalsta pieteikumu izmaiņu žurnāls {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Uzlabots: No Git izsekošanas noņemts vendor/ direktorijs (jau ietverts .gitignore), samazinot repozitorija izmēru
* Uzlabots: Testēts līdz WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Labots: Atļaut null vērtības nullable pieteikuma modeļa setteros
* Labots: Glabāt visus pieteikumus globālās tīkla mēroga tabulās korektam multisite atbalstam
* Labots: Paslēpt personāla laukus un novērst tukšas lapas pāradresāciju klienta jaunā pieteikuma veidlapā
* Labots: Aizstāt nedefinētus add_meta() izsaukumus ar pareizu update_meta() metadatu glabāšanai
* Labots: Aizstāt nereģistrētu iespējas pārbaudi ar pareizu wu_view_all_support_tickets
* Labots: Pievienot trūkstošus AJAX apstrādātājus pieteikuma statusa, piešķiršanas un ātrās rediģēšanas darbībām
* Labots: Izlabot metodes nosaukumu personāla atbildes noteikšanai pieteikumu skatos
* Labots: Apvienot dublētos atbilžu apstrādātājus un saskaņot nonce darbību nosaukumus
* Labots: Pievienot trūkstošu priekšpuses skatu [wu_submit_ticket] īskodam
* Labots: Pievienot trūkstošu user_id kolonnu un izlabot Support_Ticket::get_user_id() metodi
* Labots: Noņemt papildu dubultpēdiņu prioritātes filtra option tagā
* Labots: Pievienot tīkla admin pieteikumu pārvaldības paneli super administratoriem
* Uzlabots: Apvienot admin CSS vienā ārējā stilu lapā
* Uzlabots: Noņemt Settings apakšizvēlni no apakšvietnes admin izvēlnes
* Uzlabots: Nosacīti ielādēt priekšpuses resursus tikai atbalsta pieteikumu lapās
* Uzlabots: Izlaist plugin automātisko ielādētāju, kad Bedrock saknes automātiskais ielādētājs jau ir ielādējis atkarības

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Pievienots: Pilna pieteikumu skatīšanas funkcionalitāte admin un priekšpusē
* Pievienots: AJAX apstrādātājs pieteikumu atbilžu iesniegšanai
* Pievienots: Atbalsts pieteikumu atbilžu funkcionalitātei ar korektu veidlapu apstrādi
* Pievienots: Korekta paziņojumu attēlošana pieteikumu iesniegumiem un atbildēm admin sadaļā
* Pievienots: Automātiska pieteikuma sasaistīšana ar pašreizējo lietotāju klienta pašiesniegumiem
* Pievienots: Drošības uzlabojums, lai neļautu klientiem pārrakstīt pieteikuma īpašumtiesības
* Pievienots: Trūkstošas palīgfunkcijas (wu_format_date, wu_user_can_view_ticket, u. c.)
* Pievienots: Korekta failu pielikumu lejupielāde un apstrāde
* Pievienots: E-pasta paziņojumu sistēma pieteikumu atbildēm un statusa izmaiņām
* Labots: Pieteikuma atbildes veidlapā tagad ir iekļauts nepieciešamais pieteikuma ID
* Labots: Paziņojumu redzamības problēmas admin pieteikumu skatos
* Labots: Sintakses kļūdas atbalsta pieteikumu funkcijās
* Uzlabots: Datubāzes struktūra ar korektām vaicājumu un shēmu klasēm atbildēm un pielikumiem
* Uzlabots: Migrācija uz reālām īpašībām, nevis atribūtiem pieteikumu modeļiem

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Atjaunināts: Prefikss pārdēvēts uz ultimate-multisite konsekvencei
* Atjaunināts: Teksta domēna standartizācija
* Labots: Nelieli kļūdu labojumi un uzlabojumi

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Sākotnējais laidiens
* Pilnīga pieteikumu pārvaldības sistēma
* Daudzlīmeņu piekļuves kontrole
* Pavedienu sarunu sistēma
* Failu pielikumu atbalsts
* E-pasta paziņojumu sistēma
* Admin un klientu saskarnes
* Statistika un pārskati
