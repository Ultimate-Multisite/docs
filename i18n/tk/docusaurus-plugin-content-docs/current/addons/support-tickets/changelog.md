---
title: Goldaw petekleriniň üýtgeşmeler žurnaly
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Goldaw biletleriniň üýtgeşmeler taryhy

### 1.0.4 - 2026-05-05
* Kämilleşdirildi: vendor/ katalogy Git yzarlamasyndan aýryldy (.gitignore tarapyndan eýýäm gurşalypdy), repository ölçegi azaldyldy
* Kämilleşdirildi: WordPress 7.0-a çenli synag edildi

### 1.0.3 - 2026-05-01
* Düzedildi: Nullable bilet model setter-lerinde null bahalary kabul etmek
* Düzedildi: Dogry multisite goldawy üçin ähli biletleri global, bütin network boýunça tablisalarda saklamak
* Düzedildi: Müşderiniň täze bilet formasynda işgär meýdanlaryny gizlemek we boş sahypa ugrukdyrmasyny düzetmek
* Düzedildi: Metadata saklamak üçin kesgitlenmedik add_meta() çagyryşlaryny dogry update_meta() bilen çalyşmak
* Düzedildi: Hasaba alynmadyk capability barlagyny dogry wu_view_all_support_tickets bilen çalyşmak
* Düzedildi: Bilet statusy, bellenişi we quick-edit hereketleri üçin ýetmeýän AJAX handler-leri goşmak
* Düzedildi: Bilet görnüşlerinde işgär jogabyny anyklamak üçin metod adyny düzetmek
* Düzedildi: Gaýtalanýan jogap handler-lerini birleşdirmek we nonce hereket atlaryny sazlamak
* Düzedildi: [wu_submit_ticket] shortcode üçin ýetmeýän frontend görnüşini goşmak
* Düzedildi: Ýetmeýän user_id sütünini goşmak we Support_Ticket::get_user_id() metodyny düzetmek
* Düzedildi: Priority filter option tag-daky artykmaç goşa dyrnagy aýyrmak
* Düzedildi: Super adminler üçin network admin bilet dolandyryş panelini goşmak
* Kämilleşdirildi: Admin CSS-i ýeke-täk daşarky stylesheet-e birleşdirmek
* Kämilleşdirildi: Subsite admin menýusyndan Settings submenu-ny aýyrmak
* Kämilleşdirildi: Frontend asset-lerini diňe goldaw bilet sahypalarynda şertli ýüklemek
* Kämilleşdirildi: Bedrock root autoloader eýýäm dependencies ýüklän bolsa plugin autoloader-den geçmek

### 1.0.2 - 2025-12-11
* Goşuldy: Admin we frontend üçin doly bilet görme funksiýonallygy
* Goşuldy: Bilet jogap tabşyryklary üçin AJAX handler
* Goşuldy: Dogry forma işlenişi bilen bilet jogap funksiýonallygyna goldaw
* Goşuldy: Admin-de bilet tabşyryklary we jogaplary üçin dogry bildiriş görkezilişi
* Goşuldy: Müşderiniň öz-özi tabşyrmalary üçin häzirki ulanyjy bilen awtomatik bilet baglanyşygy
* Goşuldy: Müşderileriň bilet eýeçiligini üýtgetmeginiň öňüni almak üçin howpsuzlyk kämilleşdirmesi
* Goşuldy: Ýetmeýän kömekçi funksiýalar (wu_format_date, wu_user_can_view_ticket, we ş.m.)
* Goşuldy: Dogry faýl attachment göçürip almak we işlemek
* Goşuldy: Bilet jogaplary we status üýtgemeleri üçin email notification system
* Düzedildi: Bilet jogap formasy indi zerur bilet ID-ni öz içine alýar
* Düzedildi: Admin bilet görnüşlerinde bildiriş görünijilik meseleleri
* Düzedildi: Goldaw bilet funksiýalarynda syntax ýalňyşlary
* Kämilleşdirildi: Jogaplar we attachment-ler üçin dogry query we schema class-lary bilen database gurluşy
* Kämilleşdirildi: Bilet modelleri üçin attributes ýerine hakyky properties-e migrasiýa

### 1.0.1 - 2025-09-28
* Täzelendi: Yzygiderlilik üçin prefix ultimate-multisite diýip täzeden atlandyryldy
* Täzelendi: Text domain standartlaşdyrylyşy
* Düzedildi: Ownuk bug düzedişleri we kämilleşdirmeler

### 1.0.0 - 2025-09-01
* Ilkinji çykarylyş
* Doly bilet dolandyryş ulgamy
* Köp derejeli elýeterlilik gözegçiligi
* Sapaklaýyn söhbetdeşlik ulgamy
* Faýl attachment goldawy
* Email notification system
* Admin we müşderi interfeýsleri
* Statistika we hasabatlar
