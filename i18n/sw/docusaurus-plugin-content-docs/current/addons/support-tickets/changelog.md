---
title: Orodha ya Mabadiliko ya Tiketi za Usaidizi
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Historia ya Mabadiliko ya Tiketi za Msaada

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Imeboreshwa: Imeondoa saraka ya vendor/ kutoka kwa ufuatiliaji wa Git (tayari inafunikwa na .gitignore), hivyo kupunguza ukubwa wa hifadhi.
* Imeboreshwa: Imepimwa hadi WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Kurekebishwa: Kukubali thamani tupu (null values) katika sehemu za kuweka thamani za mfumo wa tiketi ambazo zinaweza kuwa tupu.
* Kurekebishwa: Kuhifadhi tiketi zote katika meza za jumla zinazofika kote kwenye mtandao kwa usaidizi sahihi wa multisite.
* Kurekebishwa: Kuficha sehemu za wafanyakazi na kurekebisha upirection wa kurudi kwenye ukurasa tupu kwenye fomu ya mteja ya tiketi mpya.
* Kurekebishwa: Kubadilisha wito za `add_meta()` zisizo na ufafanuzi na kutumia `update_meta()` sahihi kwa kuhifadhi metadata.
* Kurekebishwa: Kubadilisha ukaguzi wa uwezo (capability check) usiojirekodi na kutumia `wu_view_all_support_tickets` sahihi.
* Kurekebishwa: Kuongeza matibabu ya AJAX yanayokosekana kwa hali ya tiketi, kuwassign, na vitendo vya kuhariri haraka.
* Kurekebishwa: Kubadilisha jina la njia kwa kutambua jibu la wafanyakazi katika maeneo ya kuangalia tiketi.
* Kurekebishwa: Kuunganisha matibabu ya majibu yanayojirudia na kupanga majina ya vitendo vya nonce.
* Kurekebishwa: Kuongeza eneo la kuangalia mbele (frontend view) linalokosekana kwa shortcode ya [wu_submit_ticket].
* Kurekebishwa: Kuongeza safu ya `user_id` inayokosekana na kurekebisha njia ya `Support_Ticket::get_user_id()`.
* Kurekebishwa: Kuondoa alama ya nukuu mbili ya ziada katika chaguo la kichujio cha kipaumbele.
* Kurekebishwa: Kuongeza sehemu ya usimamizi wa tiketi ya mtandao kwa ajili ya wasimamizi wa juu (super admins).
* Imeboreshwa: Kuunganisha CSS ya admin katika karatasi ya mtindo moja ya nje.
* Imeboreshwa: Kuondoa menyu ndogo ya Settings kutoka kwenye menyu ya admin ya subsite.
* Imeboreshwa: Kuwaweka rasilimali za mbele (frontend assets) kwa masharti tu kwenye kurasa za tiketi za msaada.
* Imeboreshwa: Kukwepa autoloader ya plugin wakati autoloader ya mzizi wa Bedrock tayari imeweka utegemaji.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Imeongezwa: Uwezo kamili wa kuangalia tiketi kwa ajili ya admin na sehemu ya mbele (frontend).
* Imeongezwa: Matibabu ya AJAX kwa kutuma majibu ya tiketi.
* Imeongezwa: Usaidizi kwa utendaji wa majibu ya tiketi na usimamizi sahihi wa fomu.
* Imeongezwa: Kuonyesha taarifa sahihi kwa kutuma tiketi na majibu katika admin.
* Imeongezwa: Kuunganisha kiotomatiki tiketi na mtumiaji anayeingia sasa kwa uwasilishaji wa kibinafsi wa mteja.
* Imeongezwa: Kuimarisha usalama ili kuzuia wateja kubadilisha umiliki wa tiketi.
* Imeongezwa: Kufungeza kazi za msaidizi zinazokosekana (wu_format_date, wu_user_can_view_ticket, n.k.).
* Imeongezwa: Kupakua na kusimamia faili za kiambatisho kwa usahihi.
* Imeongezwa: Mfumo wa arifa za barua pepe kwa majibu na mabadiliko ya hali ya tiketi.
* Kurekebishwa: Fomu ya majibu ya tiketi sasa inajumuisha ID ya tiketi inayohitajika.
* Kurekebishwa: Masuala ya kuonekana kwa taarifa (notice) katika maeneo ya admin ya tiketi.
* Kurekebishwa: Makosa ya sintaks katika kazi za tiketi za msaada.
* Imeboreshwa: Muundo wa database na madarasa sahihi ya utafiti na schema kwa majibu na kiambatisho.
* Imeboreshwa: Kuhama kwa mali halisi (real properties) badala ya sifa (attributes) kwa mifumo ya tiketi.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Imosasishwa: Kiambatanisho (prefix) kimebadilishwa kuwa ultimate-multisite kwa ushindani.
* Imosasishwa: Uwekaji viwango wa eneo la maandishi (Text domain standardization).
* Kurekebishwa: Kurekebisha na kuboresha makosa madogo.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Toreo la kwanza
* Mfumo kamili wa usimamizi wa tiketi
* Udhibiti wa ufikiaji wa viwango mbalimbali
* Mfumo wa mazungumzo yanayotiririka (Threaded conversation system)
* Usaidizi wa kiambatisho cha faili
* Mfumo wa arifa za barua pepe
* Maeneo ya admin na mteja
* Takwimu na ripoti
