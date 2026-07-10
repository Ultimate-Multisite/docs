---
title: Àkọsílẹ̀ àwọn ìyípadà Tíkẹ́ẹ̀tì Àtilẹ́yìn
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Àkọọlẹ Ayipada Tikẹti Ìrànlọ́wọ́ {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Ti mú dara sí: Yọ vendor/ directory kúrò nínú ìtọ́pa Git (tí .gitignore ti bo tẹ́lẹ̀), ó dín ìwọ̀n repository kù
* Ti mú dara sí: Dánwò títí dé WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Àtúnṣe: Gba àwọn iye null nínú àwọn nullable ticket model setters
* Àtúnṣe: Fi gbogbo àwọn tikẹti pamọ́ sínú àwọn tábìlì global jakejado nẹ́tíwọ́ọ̀kì fún àtìlẹ́yìn multisite tó péye
* Àtúnṣe: Fi àwọn pápá oṣiṣẹ́ pamọ́, kí o sì tún ìdarí-padà ojú-ewé òfo ṣe lórí fọ́ọ̀mù tikẹti-tuntun oníbàárà
* Àtúnṣe: Rọ́pò àwọn ìpè add_meta() tí a kò ṣàlàyé pẹ̀lú update_meta() tó tọ́ fún ìpamọ́ metadata
* Àtúnṣe: Rọ́pò àyẹ̀wò agbára tí a kò forúkọsílẹ̀ pẹ̀lú wu_view_all_support_tickets tó tọ́
* Àtúnṣe: Ṣàfikún àwọn AJAX handlers tó sọnù fún ipò tikẹti, fífi sí ẹni, àti àwọn ìṣe quick-edit
* Àtúnṣe: Ṣe àtúnṣe orúkọ method fún ìmúlò ìdánimọ̀ ìdáhùn oṣiṣẹ́ nínú àwọn ìwo tikẹti
* Àtúnṣe: Darapọ̀ àwọn reply handlers aláwòṣe, kí o sì bá àwọn orúkọ ìṣe nonce mu
* Àtúnṣe: Ṣàfikún ìwo iwájú tó sọnù fún shortcode [wu_submit_ticket]
* Àtúnṣe: Ṣàfikún user_id column tó sọnù, kí o sì tún method Support_Ticket::get_user_id() ṣe
* Àtúnṣe: Yọ àmì double-quote àfikún kúrò nínú tag aṣayan àlẹ̀mọ́ priority
* Àtúnṣe: Ṣàfikún pánẹ́ẹ̀lì ìṣàkóso tikẹti alábòójútó nẹ́tíwọ́ọ̀kì fún àwọn super admins
* Ti mú dara sí: Darapọ̀ CSS alábòójútó sínú stylesheet ita kan ṣoṣo
* Ti mú dara sí: Yọ submenu Settings kúrò nínú menu alábòójútó subsite
* Ti mú dara sí: Kó àwọn ohun-èlò iwájú wọlé ní àdéhùn lórí àwọn ojú-ewé tikẹti ìrànlọ́wọ́ nìkan
* Ti mú dara sí: Fo plugin autoloader kọjá nígbà tí Bedrock root autoloader ti kó dependencies wọlé tẹ́lẹ̀

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ti ṣàfikún: Ìṣiṣẹ́ kíkún fún wíwo tikẹti fún alábòójútó àti iwájú
* Ti ṣàfikún: AJAX handler fún fífi àwọn ìdáhùn tikẹti ránṣẹ́
* Ti ṣàfikún: Àtìlẹ́yìn fún iṣẹ́ ìdáhùn tikẹti pẹ̀lú ìmúlò fọ́ọ̀mù tó péye
* Ti ṣàfikún: Ìfihàn ìkìlọ̀ tó péye fún fífi tikẹti àti ìdáhùn ránṣẹ́ nínú alábòójútó
* Ti ṣàfikún: Ìsopọ̀ tikẹti aládàáṣiṣẹ́ pẹ̀lú aṣàmúlò lọ́wọ́lọ́wọ́ fún fífi tikẹti fúnra wọn ránṣẹ́ látọ̀dọ̀ oníbàárà
* Ti ṣàfikún: Ìmúdára ààbò láti dènà àwọn oníbàárà kúrò ní yíyí olówó tikẹti padà
* Ti ṣàfikún: Àwọn iṣẹ́ olùrànlọ́wọ́ tó sọnù (wu_format_date, wu_user_can_view_ticket, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ)
* Ti ṣàfikún: Gbigba àti ìmúlò file attachment tó péye
* Ti ṣàfikún: Ètò ìfitónilétí email fún àwọn ìdáhùn tikẹti àti àwọn ìyípadà ipò
* Ti ṣe àtúnṣe: Fọ́ọ̀mù ìdáhùn tikẹti ní ID tikẹti tó yẹ báyìí
* Ti ṣe àtúnṣe: Àwọn ìṣòro híhàn ìkìlọ̀ nínú àwọn ìwo tikẹti alábòójútó
* Ti ṣe àtúnṣe: Àwọn aṣìṣe syntax nínú àwọn iṣẹ́ tikẹti ìrànlọ́wọ́
* Ti mú dara sí: Ìṣètò database pẹ̀lú query àti schema classes tó péye fún àwọn ìdáhùn àti attachments
* Ti mú dara sí: Ìṣílọ sí àwọn properties gidi dípò attributes fún àwọn model tikẹti

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Ti ṣe imudojuiwọn: Tun prefix sọ orúkọ sí ultimate-multisite fún ìbámu
* Ti ṣe imudojuiwọn: Ìṣọ̀kan text domain
* Ti ṣe àtúnṣe: Àwọn àtúnṣe bug kékeré àti àwọn ìmúdára

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Ìtújáde àkọ́kọ́
* Ètò ìṣàkóso tikẹti pípé
* Ìṣàkóso ìwọlé ipele-púpọ̀
* Ètò ìjíròrò threaded
* Àtìlẹ́yìn file attachment
* Ètò ìfitónilétí email
* Àwọn interface alábòójútó àti oníbàárà
* Àwọn iṣiro àti ìròyìn
