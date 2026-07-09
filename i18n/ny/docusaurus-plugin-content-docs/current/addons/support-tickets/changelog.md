---
title: Mbiri ya Zosintha za Matikiti Othandizira
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Mbiri ya Zosintha za Matikiti a Thandizo

### 1.0.4 - 2026-05-05
* Zasinthidwa bwino: Yachotsa chikwatu cha vendor/ mu kutsatira kwa Git (chaphimbidwa kale ndi .gitignore), kuchepetsa kukula kwa repository
* Zasinthidwa bwino: Yayesedwa mpaka WordPress 7.0

### 1.0.3 - 2026-05-01
* Kukonza: Landirani ma value a null mu ma setter a model ya tikiti omwe angakhale nullable
* Kukonza: Sungani matikiti onse mu matebulo a global a network-wide kuti pakhale thandizo loyenera la ma site ambiri
* Kukonza: Bisani minda ya staff ndi kukonza kutumiza patsamba lopanda kanthu pa fomu ya kasitomala ya tikiti yatsopano
* Kukonza: Sinthani ma call a add_meta() osatanthauzidwa ndi update_meta() yolondola yosungira metadata
* Kukonza: Sinthani kuyang'ana kwa capability kosalembetsedwa ndi wu_view_all_support_tickets yolondola
* Kukonza: Onjezani ma handler a AJAX omwe akusowa a udindo wa tikiti, kugawa, ndi zochita za quick-edit
* Kukonza: Konzani dzina la method lozindikira yankho la staff mu mawonedwe a tikiti
* Kukonza: Phatikizani ma handler a mayankho obwerezedwa ndi kugwirizanitsa mayina a zochita za nonce
* Kukonza: Onjezani mawonedwe a frontend omwe akusowa a shortcode ya [wu_submit_ticket]
* Kukonza: Onjezani column ya user_id yomwe ikusowa ndi kukonza method ya Support_Ticket::get_user_id()
* Kukonza: Chotsani double-quote yowonjezera mu tag ya option ya filter ya priority
* Kukonza: Onjezani paneli ya kasamalidwe ka matikiti a network admin kwa ma super admin
* Zasinthidwa bwino: Phatikizani CSS ya admin kukhala stylesheet imodzi yakunja
* Zasinthidwa bwino: Chotsani submenu ya Settings mu menyu ya admin ya subsite
* Zasinthidwa bwino: Kwezani ma asset a frontend mokhazikika pa masamba a matikiti a thandizo okha
* Zasinthidwa bwino: Dumphani autoloader ya plugin pamene autoloader ya root ya Bedrock yatsegula kale dependencies

### 1.0.2 - 2025-12-11
* Zawonjezedwa: Kugwira ntchito konse kowonera tikiti kwa admin ndi frontend
* Zawonjezedwa: Handler wa AJAX wotumizira mayankho a tikiti
* Zawonjezedwa: Thandizo la kugwira ntchito kwa mayankho a tikiti ndi kusamalira fomu moyenera
* Zawonjezedwa: Kuwonetsa ma notice moyenera pa kutumiza matikiti ndi mayankho mu admin
* Zawonjezedwa: Kulumikiza tikiti zokha ndi wogwiritsa ntchito wapano pa kutumiza kwa kasitomala yekha
* Zawonjezedwa: Kupititsa patsogolo chitetezo kuti makasitomala asalowe m'malo mwa umwini wa tikiti
* Zawonjezedwa: Ma helper function omwe akusowa (wu_format_date, wu_user_can_view_ticket, etc.)
* Zawonjezedwa: Kutsitsa ndi kusamalira ma attachment a fayilo moyenera
* Zawonjezedwa: Dongosolo la zidziwitso za imelo pa mayankho a tikiti ndi kusintha kwa udindo
* Zakonzedwa: Fomu ya yankho la tikiti tsopano ili ndi ID ya tikiti yofunikira
* Zakonzedwa: Mavuto a kuoneka kwa notice mu mawonedwe a tikiti a admin
* Zakonzedwa: Zolakwika za syntax mu ma function a tikiti ya thandizo
* Zasinthidwa bwino: Kapangidwe ka database ndi ma class oyenera a query ndi schema a mayankho ndi ma attachment
* Zasinthidwa bwino: Kusamukira ku properties enieni m'malo mwa attributes a ma model a tikiti

### 1.0.1 - 2025-09-28
* Zasinthidwa: Prefix yasinthidwa dzina kukhala ultimate-multisite kuti ikhale yogwirizana
* Zasinthidwa: Kukhazikitsa muyezo wa text domain
* Zakonzedwa: Kukonza ma bug ang'onoang'ono ndi kusintha

### 1.0.0 - 2025-09-01
* Kutulutsa koyamba
* Dongosolo lathunthu la kasamalidwe ka matikiti
* Kuwongolera mwayi wolowera wa magawo ambiri
* Dongosolo la zokambirana za nthambi
* Thandizo la ma attachment a fayilo
* Dongosolo la zidziwitso za imelo
* Ma interface a admin ndi kasitomala
* Ziwerengero ndi malipoti
