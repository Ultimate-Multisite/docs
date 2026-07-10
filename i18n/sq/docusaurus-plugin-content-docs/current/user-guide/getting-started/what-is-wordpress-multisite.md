---
title: Çfarë është WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Çfarë është WordPress Multisite? {#what-is-wordpress-multisite}

Ndrymen e tij bazë, WordPress ofron një veçori të quajtur 'Multisite' (Multisite), e cila kthehet në origjinën e saj në vitin 2010 me lëshimin e WordPress 3.0. Që atë, ka marrë disa ndryshime që kanë për qëllim të sjellin funksionalitete të reja dhe të fortifikojnë sigurinë.

Në thelb, një multisite WordPress mund të imagjinohet kështu: Një Universitet mbart një instalim të vetëm të WordPress-it, por secila fakultet mbart sitin e saj të veçantë me WordPress.

##

## Çfarë është saktësisht WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite është një veçori e WordPress-it që lejon disa site të ndajnë një instalim të vetëm të WordPress-it. Kur multisite aktivizohet, sitja origjinale e WordPress-it konvertohet për të mbështetur atë që zakonisht quhet **rresht i site-eve** (network of sites).

Ky rrjet ndan sistemin e skedarëve (p.sh., **pluginet dhe temat gjithashtu ndahen**), bazën e të dhënave, skedarët bazë të WordPress-it, wp-config.php, etj.

Kjo do të thotë që përditësimet e WordPress-it, tema dhe plugin-eve duhet bërë vetëm një herë për të gjithë site-të tuaj në rrjet, pasi ato ndajnë të njëjtat skedarë në sistemin e skedarëve.

Ky fakt është një nga avantazhit kryesor i multisite-it, sepse ju lejon të rritni numrin e site-eve që menaxhoni duke mbajtur të njëjtin numër detyrash që keni nevojë t'i bëni për të ruajtur sitet tuaj.

##

## Subdomain apo Subdirectory? {#subdomain-or-subdirectory}

Ekzistojnë dy moda për ekzekutimin e WordPress Multisite – dhe duhet të zgjidhni një nga to kur po konvertonit instalimin tuaj të zakonshëm të WordPress-it në një instalim multisite:

**Subdomain:** p.sh.: [site.domain.com](http://site.domain.com)

…ose

**Subdirectory:** p.sh.: [yourdomain.com/site](http://yourdomain.com/site)

Secili mod ka avantazhe dhe dobe që duhet të merrni parasysh kur bëni këtë vendim.

Një gjë e rëndësishme që duhet të vëreni: pasi merrni vendimin, ndryshimi i rrjetit nga subdirectory në subdomain ose te ngjashës është vërtet i vështirë – veçanërisht nëse tashmë keni disa faqe të krijuara.

Para se të merrni atë vendim, këtu janë disa pika që duhet të mbani parasysh:

**Modi Subdirectory** është modi më i lehtë në termsë se konfigurimin dhe mirëmbajtjen. Kjo ndodh sepse të gjitha faqe janë thjesht rrugë (paths) të lidhura me domenit kryesor (p.sh. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Si rezultat, ju nevojitet vetëm **një sertifikat SSL** për domenit kryesor dhe ky do mbulojë gjithë rrjetin.

Në të njëjtën kohë, për shkak të strukturës së URL-s, Google dhe shumica e motorëve të kërkimit do e konsiderojnë të gjitha faqe në rrjetin tuaj bazuar në subdirectory si një faqe madhështore. Si rezultat, përmbajtja që shtojnë klientët tuaj në faqe të subsite-ve mund të ndikojë në performancën SEO të faqes kryesore tuaj vendosjeje (landing site), për shembull. Niveli i ndikimit është diskutues dhe ka argument se qasja e kësaj organizimi mund të jetë edhe e dobishme për performancën SEO.

**Modi Subdomain** është pak më i vështirë për t'u konfiguruar, por struktura e URL-s (p.sh. [subsite.yournetwork.com](http://subsite.yournetwork.com)) zakonisht perceptohet se duket "më profesionale".

Një nga sfidat kryesore në konfigurimin e modifikimit të domenit i nëndomësh (subdomain mode) është mbulimi SSL (HTTPS) për gjithë rrjetin. Kjo vjen nga fakti se shfletuesit e trajtojnë subdomenet si entitet të izoluar. Si rezultat, do të keni nevojë për një certifikatë SSL të ndryshme për çdo subdomen në rrjetin tuaj, ose një lloj special i certifikatës të quajtur **Wildcard SSL certificate**. Në vitet e fundit, ofruesit e hostingut dhe paneli po përmirësojnë nivelin e provizimit të SSL-it dhe disa ofrojnë certifikata wildcard me një klikim të butonit, duke mbyllur këtë hapësirë midis dy modeve në raport me kompleksitetin e konfigurimit.

Në kontrast me modin e direktorisë (subdirectory mode), subsite-t në rrjetin bazuar në domen i nëndomës konsiderohen nga motorët e kërkimit si faqe internete të veçanta, gjë që do të thotë se përmbajtja e saj në një subsite nuk ndikon fare në performancën SEO të subsite-ve të tjera.

## Super Admini {#the-super-admin}

Instalimet WordPress me faqe të vetme (single-site) ju lejojnë të shtoni një numër të paqëndrueshëm përdorues dhe t'u jepni atyre përdoruesit role të ndryshme përmbi përqendrime të ndryshme.

Në WordPress Multisite, një lloj i ri i përdoruesve hapet: **super admini** – dhe një panel administratorje i ri hapet: **panel administratori i rrjetit (network admin panel)**.

Si emri sugjeron, super admini ka fuqi të veçanta mbi rrjetin, duke qenë në gjendje të menaxhojë të gjitha subsite-t e tij, pluginet, temat, çdo gjathing!

Pasi ju konvertoni instalimin tuaj WordPress me faqe të vetme në multisite, administratorit origjinal i faqes së vetme do të përditësohet automatikisht në super admin.

Pluginet dhe temat mund të instalohen ose heqen vetëm nga panel administratori i rrjetit nga super adminët. Administratorët e subsite-ve më pas mund të zgjedhin të aktivizojnë apo deaktivojnë ato pluginet ose tema, përveçse super admini i rrjetit aktivizon një plugin, gjë që e detyron ta bëjë aktive për të gjitha subsite-t gjithmonë.

_Shënim: Si e shihni, fisionimi i dikujt në rrjetin tuaj dhe i jepja statusi super admin i jep këtij përdorues total kontroll mbi rrjetin tuaj. Për shembull, të tjerë super admin mund të hiqë edhe statusin tuaj super admin, duke ju bllokuar efektiv nga panelin tuaj administrator i rrjetit. Për të lejuar klientëve të Ultimate Multisite të kenë kontroll të detajuar mbi atë që mund të bëjnë super admin shtesë, kemi një add-on të quajtur Support Agents. Ky add-on ju lejon të krijoni një lloj tjetër përdorues – një agent – me vetëm të drejtime që mund t'i nevojiten për të kryer detyrat e tyre në rrjet._

## Çfarë është i ndarë midis subsitëve dhe çfarë nuk është i ndarë {#what-is-shared-among-subsites-and-what-is-not}

Siç u përmendëm më parë, një nga avantazet kryesore të WordPress multisite është se të gjitha subsitët ndajnë të njëjtat konfigurime, skedarë bazë, teme, pluginë, skedarë bazë të WordPress, etj.

Megjithatë, ka elemente që janë mbuluar mirë në bazë të secilit subsite.

- Për shembull, secili subsite merr fletorin e tij të ngarkimeve (uploads folder). Si rezultat, ngarkimet e bëra nga përdoruesit e një subsite specifik nuk mund të aksesojnë në një subsite tjetër.
- Secili subsite ka panelin e tij dedikuar të administrimit dhe mund të aktivizojë ose deaktivoj pluginet apo temat, përveçse ato nuk ishin aktive në rrjet nga një super admin.
- Shumica e tabelave të bazës së të dhënave krijohen për secilin subsite, që do të thotë se postimet, komentet, faqet, cilësimet dhe më shumë janë mbuluar për secilin subsite.

## Menaxhimi i përdoruesve në WordPress Multisite {#user-management-on-wordpress-multisite}

Një çështje e ndjeshme në WordPress multisite është menaxhimi i përdoruesve. Tabelat e përdoruesve të WordPress-it është një nga pak tabelat që ndahen midis të gjitha subsitëve.

Kjo organizim mund të krijojë disa probleme në varësi të asaj që planifikoni të ndërtoni me rrjetin tuaj. Shembulli më poshtë ndihmon për të ilustruar atë më urgjente.

Imaginoni skenarin e mëposhtëm:

Krijoni një rrjet multisite WordPress dhe filloni të ofroni subshte për një pagesë mujore buatësimit për ata që duan të kenë një dyqan elektronik.

Mendoni klientin tuaj të parë – John. Krijoni një faqe për John në rrjetin tuaj, instaloni të gjitha pluginet e nevojshme dhe më pas krijoni një përdorues për John që ai mund të menaxhojë dyqanin e tij.

Pastaj vjen klientja e dytë – Alice. Bdo të bëni asgjë tjetër për të, dhe tani ajo ka edhe një dyqan në rrjetin tuaj.

John dhe Alice janë të dy klientët tuaj, por nuk i njohin njëri-t tjetrin. Më e rëndësishmja, nëse një prej tyre viziton faqen e dyqanit të tjetrit, nuk ka asnjë mënyrë për të ditur se ky dyqan është hostuar në të njëjtin rrjet të faqeve.

Një ditë, John duhet të blini një çift këpucë dhe gjen ato perfekte në dyqanin e Alice. Kur ai provon të përfundojë blerjen, merr mesazhin "email tashmë në përdorim", gjë absurde pasi John është 100% i sigurt se kjo është hera e parë që viziton faqen e Alice.

Aksioni që ndodhi këtu është se përdoruesi i Jonit është i nxitur (shared) në të gjinian rrjetit, kështu që kur ai provon të krijojë një llogari për të paguar te dyqani i Alice, WordPress do të zbulojë se një përdorues me të njëjtin adresë email ekziston tashmë dhe do të japë një gabim.

_Shënim: Ne kuptojmë sa keq mund të jetë kjo në varësi të rastit tuaj, kështu që Ultimate Multisite ka opsion që përshkon kontrollat e zakonshme për përdorues ekzistues, duke lejuar krijimin e llogarive të shumta me të njëjtën adresë email. Çdo llogari është lidhur me një subshte, kështu që rreziku i konfliktit mbahet në nivel minimal. Në shembullin e mësipërm, John nuk do të marrë mesazhin gabimi dhe do të mund të blini ato këpucë pa asnjë problem. Ky opsion quhet Enable Multiple Accounts (Lejo Llogari Shumë), dhe mund të aktivizohet në Ultimate Multisite → Settings → Login & Registration._

Edhe pse përdoruesit janë të ndarë, por administratorët e subsite ose super-administratorët mund t'i shtojnë dhe heqin përdoruesit nga subsitet, dhe ata mund të kenë edhe role përdorues të ndryshme në subsitete të ndryshme.

## Konsideratat për performancën {#performance-considerations}

WordPress multisite është vërtet i fuqishëm kur bëhet fjalë për numrin e vendeve që mund t'i mbështesë. Kjo mund të testojmë duke parë se [WordPress.com](https://WordPress.com), Edublogs dhe Campuspress janë shërbime bazuar në multisite dhe secili host mbështet mijëra vende.

Ndërsa teorikisht nuk ka një numër maksimumi i vendeve që mund të mbani në një instalim WordPress multisite, në praktikën e vërtetë numri i vendeve që mund t'i menaxhoni në mënyrë të kënaqshme mund të ndryshojë shumë në varësi të disa faktorëve të ndryshëm: sa dinamike janë vendet, cilat pluginet janë të disponueshme për subsitete, etj.

Si rregull i thjeshtë, sa më e thjeshtë është rrjeti juaj, aq më mirë. Përqazoheni vendeve ku përmbajtja nuk është vërtet dinamike (gjë që i bën ato kandidat të shkëlqyera për strategjitë agresive të caching-ut) dhe mbani stakut e pluginëve sa lehtë sa mundni (sa më pak numri i pluginëve aktivë, aq më mirë). Kjo mund të rritë drastikisht numrin e subsiteteve që mund t'i mbani.

Më mirë është se pasi gjithçka është WordPress këtu, të njëjtat mjete që ju tashmë i pëlqeni dhe i njohni për përmirësime të performancës do të funksionojnë edhe për një rrjet multisite.

Ngushtuesi kryesor për multisite është baza e të dhënave (database), por nëse gjithçka tjetër është e vendosur si duhet, mund të marrë disa mijëra vende para se të keni nevojë të shqetësoheni për atë. Edhe atëherë, ka zgjidhje që mund të shtojnë progresivisht në atë pikë (si p.sh., zgjidhjet e sharding-ut të bazës së të dhënave).
