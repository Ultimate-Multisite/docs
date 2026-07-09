---
title: Shënimet e lëshimit
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notatë të Lëshimit {#release-notes}

## Versioni 2.13.0 — Lëshuar më 2026-06-05 {#version-2130--released-on-2026-06-05}

- I: Shtuar mbësjellje për tenant-t sovræn (sovereign-tenant) për llogaritjet e klientit, checkout-in, faturimin, faqen, ndryshimin e template-ve dhe mapi i domenve, që lejon rrjetet e tenant-ëve të drejtojnë klientët përsëri te faqja kryesore për veprime menaxhoresa.
- I: Shtuar kontrollin e rikuperimit të kredencialeve për abonimet e përsëritura (recurring memberships), kështu që gateway-t duhet të deaktivizojnë automatizimin e rikuperimit kur mungon një marrëveshje e ruajtur faturimi, abonim ose tokeni i vault-it.
- I: Shtuar publikimin me loopback (loopback publishing) të verifikuar me HMAC për krijimin e faqes që është në pritje, duke bërë provizimin nga checkout te faqja më të besueshëm edhe në host-e ku punët në sfond janë të vona.
- I: Shtuar pikat e zhvilluesve (developer extension points) për URL-t SSO, domenat bazë të formularit të checkout-it dhe krijimin automatik i regjistrave të domeneve.
- Kthimi (Fix): SSO është më i besueshëm nëpër domenat e mapi, vizitat anonime të broker-ëve dhe konfliktet midis plugin-eve.
- Kthimi (Fix): Krijimi i faqes që është në pritje tani rikuperon nga flag-të e vjetra të publikimit dhe shmang mënyrën kur klientët mbeten të ngushtë te ekranet e krijimit të faqes.
- Kthimi (Fix): Regjistrat e domeneve nuk krijohen më për domenat bazë të formularit të checkout-it që përbashkues, dhe punët në sfond të ofrues host-it që nuk përdoren shkakojnë kalimin kur nuk ka integrim aktiv.
- Kthimi (Fix): Raste të kufizuara si checkout, adresa e faturimit, rikuperimi i fjalëkalduar, verifikimi i email-it, ndryshimi i template-ve, tour-et dhe dashboard-i i klientit nuk bllokojnë më rrjedhjet normale të klientëve.
- Kthimi (Fix): Email-ët e përhapur tani mbajnë marrësit privatë ndërsa shmangin gabimet fatale SMTP/plugin-eve kur listat e marrësve ose transportet e email-it dështojnë.
- Kthimi (Fix): Raste të kufizuara si rikuperimi i abonimeve, shfaqja e skadërimit dhe mbledhja e pagesave tani shmangin skadërimet të menjëhershme, krahjet ose mungesat e pagesave të nevojshme.
- Përmirësuar: Kompatibiliteti me WordPress testoi deri në 7.0, asetet produktive Vue rigjenerohen nga burimet npm, dhe mbulimi i fundit (end-to-end coverage) i Cypress tani ekzheron më shumë rrjedhjet e checkout-it, setup-it, SSO-së dhe gateway-ve.

## Version 2.12.0 — Lëshuar më 2026-05-15 {#version-2120--released-on-2026-05-15}

- Iri: U shtuar Hostinger (hPanel) si ofrues host i mbështetur me integrim për mapi të domenit
- Iri: Site Exporter tani menaxhon paketat e importit në rrjet për një rikuperim të thjeshtë të sitit në nivel gjithë rrjetit
- Rregullim: Emailet BCC broadcast tani përdorin një header që nuk zbulohet nga njoftuesit për të parandaluar shfaqjen e adresave të marrës
- Rregullim: Data e skadërimit të anëtarisë nuk korruptohet më kur keni ruajtur me një vlerë jo datash
- Rregullim: Përditësimet e anëtarisë në Stripe tani fshijnë saktë përkuqjet pa thirrur API-në e vjetruar deleteDiscount
- Rregullim: Redirektimet SSO në sitet me mapi domen tani kufizohen për të parandaluar rreze të pafundive redirektimi
- Rregullim: Zgjedhja e imazhit nga wizard i konfigurimit tani përditëson saktë modelin bazë të të dhënave
- Rregullim: CLI i Site Exporter tani ruajti zgjedhjen e saktë e paracaktuar të sitit në rrjet

## Version 2.11.0 — Lëshuar më 2026-05-11 {#version-2110--released-on-2026-05-11}

- Iri: Exportet e sitit tani paketojnë një `index.php` që starton vetë, kështu që ZIP-i mund të instalohet në një host të ri pa nevojë për instalimin e një pluginje të veçantë
- Iri: Eksporti i rrjetit lejon administratorët të eksportojnë të gjitha subsite-të në një arkiv të vetëm nga faqja admin e Site Export
- Iri: Lejohet ndryshimi i planit Site Templates tani përmirësohet me një qasje rezervë, duke kufizuar saktë disponueshmërinë e template-ve për kufijtë e planit
- Iri: Redaktori i formularit të checkout-ut paralajmëron kur shtoni një produkt pa konfiguruar fushën e detyrueshme
- Iri: Tab-i i cilësimeve Import/Export tani përshkruan qartë kuptimin dhe lidhen drejtpërdrejt me mjetin Site Export

## Version 2.10.0 — Lëshuar më 2026-05-05 {#version-2100--released-on-2026-05-05}

- Iri: Wizard i PayPal për konfiguratë manuale me kyç OAuth për një konfigurim të pa ndërprerë të gateway-it.
- Iri: Paneli i klientit i ndryshuar me shkurtin e template-s aktual, grida persistente dhe butoni **Reset current template**.
- Rregullim: Ndryshimi i template-s nuk bën më ngushtë (hang) të UI në rast dështimi AJAX.
- Rregullim: Staterat e lejes së ndryshimit të template-s janë siguruar kundër aksesit pa autorizim.
- Rregullim: Inputet për mbledhjen e adresës së bilancit tani shfaqen kur adresa është bosh.
- Rregullim: Problemet me njoftime deprecimi nga PHP 8.1 (null-to-string) janë zgjidhur.
- Rregullim: Lazy loading i aktualit para hook-ut init për të parandaluar probleme me kohën.
- Rregullim: Rruga SSO e filtruar respektohet në të gjitha rrjedhjet e hyrjes (login flows).
- Rregullim: Opsionet e identitetit të faqes së zbrazët ruhen kur bëhet ruajtja.

## Version 2.9.0 — Lëshuar më 30-04-2026 {#version-290--released-on-2026-04-30}

- Iri: Export dhe import i një site të vetme u shtuan nën **Tools > Export & Import**.
- Rregullim: Filet ZIP tani shërpen përmes një pike të shkarkimit autentikuar.
- Rregullim: Rreziku i SQL injection dhe probleme me kërkesat (queries) në kërkesat e pafundit export/import janë korrigjuar.
- Rregullim: Site-i i pafundit nuk publikohet kur admin vërteton manualisht email-in e klientit.
- Rregullim: Regjistrat e pafundit `pending_site` pastrohen kur mungon anëtarësia (membership).
- Rregullim: Padding i navigimit të cilësimeve dhe navigimi me ankër kërkese janë korrigjuar.
- Rregullimet e pafundit tani shfaqen para në pamjen All Sites.
- Rregullim: Header User-Agent i ofrues ekranit (mShots) është shtuar për të parandaluar gabime 403.
- Rregullim: Ndryshimi i orarit cron i importit u zgjodat nga ndonjë varësi rrethore (circular dependency).
- Përmirësuar: ZipArchive tani përdoret në vend të Alchemy/Zippy për një përputhshmëri më të mirë.

## Version 2.8.0 — Lëshuar më 29-04-2026 {#version-280--released-on-2026-04-29}

- I: Aktivizimi i Jumper toggle është shtuar në UI të cilësimeve "Other Options".
- I: Kolona Status u shtua në tabelën listë të formularëve të checkout.
- I: Loader filmi sunrise për add-on-e MU-plugin sunrise custom.
- Përmirësuar: Optimi i raportimit të gabimeve është hequr nga faqja e cilësimeve.
- Ripristim (Fix): Kartat e sitit në faqen "Thank-you" — imazhi tani është kufizuar dhe lidhjet janë stiluar si duhet.
- Ripristim (Fix): Provejti i providerit të screenshot-eve u ndryshua nga thum.io te WordPress.com mShots.
- Ripristim (Fix): Aktivizimi i Regjistrimit dhe Roli Default tani vendosin vlerat e duhura në instalime të reja.
- Ripristim (Fix): `get_site_url()` nuk kthen më bosh kur domeni përfshin një port.
- Ripristim (Fix): Kopjet e filmave u kopjohen tani si duhet kur cilësimi `copy_media` ishte i zbrazët.
- Ripristim (Fix): Cache objekti vlen në mënyrë të saktë pas shkrimit të sitemet me `network-activate`.
- Ripristim (Fix): Domeni custom auto-promotohet në primar gjatë verifikimit DNS për domenët me 3 pjesë.
- Ripristim (Fix): Veprimi i anëtarisë e palëndrueshme ndërpritet kur pagesa të skaduluara hiqet.
- Ripristim (Fix): Kontrolluesi i forcës së fjalëkalimit kthehet pas heqjes e promptit të hyrjes në lidhje.
- Ripristim (Fix): Rilodimi i faqes infinite ndaloj kur sitja tashmë është krijuar në faqen "thank-you".
- Ripristim (Fix): Opsioni i regjistrimit të WP core synon pas aktivizimit të plugin-ut dhe ruajtjes së cilësimeve.
- Ripristim (Fix): Kontrolluesi i vjetrimit null u shtua në `calculate_expiration` për pajtueshmërinë PHP 8.4.
- Ripristim (Fix): Regjistrimi i dy regjistrime bllokohet kur klientja tashmë ka një anëtarësi aktive.
- Ripristim (Fix): Kontrolli null u shtua për `date_expiration` në checkout.
- Ripristim (Fix): Provizionimi i sitit është fortifikuar — kufizimet, inferenca e anëtarisë dhe promovimi i domeneve.
- Ripristim (Fix): Etiketi i statusit të kontrollit para-instalimi u korrigjua në "NOT Activated" kur kontrolli dështon.
- Ripristim (Fix): Domeni i checkout përdoret për URL-t e verifikimit të email-eve.
- Ripristim (Fix): Hyrja automatike pas checkout kur nuk ka fushë fjalëkalimi.
- Ripristim (Fix): Anëtarësitë falas nuk skaduluar më — trajtohen si gjatë jetës.

* Ktheshtarë: Ardhëshja e imileve (email verification gate) ndalon publikimin e faqes derisa klient më vë në gj Albanianinë.
* Ktheshtarë: Përfaqja bazë dhe rruga identiteti të kërkesës API-s SES v2 janë korrigjuar.
* Ktheshtarë: Hook `wu_inline_login_error` merr në kohën e ndalimit të pre-submit (pre-submit catch block).
