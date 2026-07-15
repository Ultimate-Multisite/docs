---
title: Integrimi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrimi i Ultimate Multisite me Zapier

Në një nga artikujt, ne diskutuan [Webhooks](webhooks.md) dhe se si mund t'i përdorni për të integruar me aplikacione të palëve të treta.

Përdorimi i webhooks është pak më i komplikuar sepse kërkon njohuri të avancuara në kodim dhe kapjen e payload-eve (dhënimeve). Përdorimi i **Zapier** është një mënyrë për të shmangur këtë.

Zapier ka integrime me mbi 5000+ aplikacione, gjë që e bën komunikimin midis aplikacioneve të ndryshme më të lehtë.

Ju mund të krijoni **Triggers** (Ndryshues) që do të shfaqen kur ndodhen ngjarje në rrjetin tuaj (p.sh., një llogari krijohet dhe shfaq ngjarjen account_create) ose të gjeneroni **Actions** (Veprime) në rrjetin tuaj duke reaguar ndaj ngjarjeve të jashtme (p.sh., krijimi i një anëtarjeje të re në rrjetin tuaj Ultimate Multisite).

Kjo është e mundur sepse **trigger-t dhe action-t e Zapier për Ultimate Multisite** mbështeten nga [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Si të filloni {#how-to-start}

Përpara, kërkoni Ultimate Multisite në listën e aplikacioneve të Zapier. Alternativisht, mund të klikoni këtu [ky link](https://zapier.com/apps/wp-ultimo/integrations).

Shkoni te dashboardi juaj dhe shtypni butonin **+** **Create Zap** (Krijoni Zap) në anën e majtë për të krijuar një Zap të ri.

![Zapier dashboard me butonin Create Zap](/img/admin/webhooks-list.png)

Do të keni redirektuar te faqja e krijimit të Zapis.

Në kuti të kërkimit, shkruani "wp ultimo". Klikoni për të zgjedhur opsionin **Beta**.

![Kërkimi i WP Ultimo në listën e aplikacioneve të Zapier](/img/admin/webhooks-list.png)

Pas zgjedhjes së aplikacionit tonë, zgjidhni ngjarjen e disponueshme: **New Ultimate Multisite Event** (Ngjarje e re e Ultimate Multisite).

![Zgjidhja e New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Tani duhet t'i jepim Zapier akses në **rrjetin tuaj**. Klikimi në **Sign in** (Ndrysho të ndalosh hyrjen) do të hapë një dritare të re që kërkon **API credentials** (kredenciale API).

![Prompt i Zapier për kredenciale API](/img/admin/webhooks-list.png)

Shkoni në panelin tuaj administrator të rrjetit dhe navigoni te **Ultimate Multisite > Settings** > **API & Webhooks** dhe kërkoni seksionin API Settings.

Zgjidhni opsionin **Enable API** (Përfshih API), pasi është i nevojshëm që ky lidhje të funksionojë.

![Konfigurimi i API dhe Webhook-eve me Opsionet e API dhe Përfshih API](/img/admin/settings-api-webhooks.png)

Përdorni ikonën **Copy to Clipboard** (Kopjo në Clipboard) mbi fushat API Key dhe API Secret dhe ngjisni ato vlerë në ekranin e integrimit.

Në fushat URL, vendosni adresën tuaj të plotë të rrjetit, duke përfshirë protokollin (HTTP ose HTTPS).

![Ekran i integrimit me Zapier me fushat API Key, Secret dhe URL](/img/admin/webhooks-list.png)

Klikoni butonin **Yes, Continue** (Po, Vazhdo) për të kaluar në hapin tjetër. Nëse gjithçka funksionon siç duhet, do të jeni mirëpritur nga llogaria juaj e re e lidhur! Klikoni për **Continue** (Vazhdo) për të krijuar një trigger të ri.

## Si të krijoni një Trigger të ri {#how-to-create-a-new-trigger}

Tani që llogaria juaj është lidhur, mund të shihni ngjarjet e disponueshme. Le të zgjedhim ngjarjen **payment_received** (pagimi i marrë) për këtë tutorial.

![Zgjidhja e ngjarjes payment_received në trigger të Zapier](/img/admin/webhooks-list.png)

Pasi ngjarja zgjidhet dhe klikoni për **continue**, do të shfaqet një **test step** (hapi testimi).

![Hapi i testit i Zapier për triggerin](/img/admin/webhooks-list.png)

Në këtë fazë, Zapier do të provojë nëse Zap juaj mund të **gjejë payload-in specifik për atë ngjarje**. Për ngjarjet e ardhshme të njerëzimit të një lloji të njëjtë, informacion me këtë strukturë do dërgohet.

![Testi i triggerit të Zapier përfundoi me sukses me payload-in](/img/admin/webhooks-list.png)

Në tutorialin tonë testu u **përfundua me sukses** dhe ktheu informacionin e shembullit të ngarkesës (payload). Ky informacion i shembullit do të jetë i dobishëm për ne ndërkohë që krijojmë aksione. Triggeri juaj është krijuar tani dhe gati për t'u lidhur me aplikacione të tjera.

## Si të krijoni Actions {#how-to-create-actions}

Action-të përdorin informacion nga trigger-të e tjera për të krijuar hyrje të reja në rrjetin tuaj.

Në **krijimin e një hapi aksioni** do të zgjidhni Ultimate Multisite **Beta** dhe opsionin **Create Items on Ultimate Multisite**.

![Krijimi i një aksioni me Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Në hapin e ardhshëm, ju do të krijoni autentifikimin tuaj, ashtu siç bëmi në **Si të filloni**, ose do të zgjidhni një autentifikim të krijuar. Në këtë tutorial do të zgjedhim atë autentifikim që kishim krijuar më parë.

![Zgjidhja e autentifikimit për aksionin Zapier](/img/admin/webhooks-list.png)

### Konfigurimi i Action-it {#setting-up-the-action}

Ky është **hapi kryesor i aksionit** dhe këtu gjërat janë pak të ndryshme. Informacioni i parë që do të zgjidhni është **Item**. Item është modeli i informacionit të rrjetit tuaj, si p.sh. **Customers (Klientët), Payments (Pagesat), Sites (Sitet), Emails** dhe të tjerë.

![Zgjidhja lloji i Item-it për aksionin Zapier](/img/admin/webhooks-list.png)

Kur zgjidhni një item, forma do të **riorganizojë duke sjellë fushën e nevojshme dhe opcionalet** për itemin që keni zgjedhur.

Për shembull, kur zgjidhni itemin **Customer (Klient)**, fushat e formës do të sjellin gjithçka që është e nevojshme për të plotësuar dhe krijuar një Klient të ri në rrjet.

![Fushat e Customer-it në konfigurimin e aksionit Zapier](/img/admin/webhooks-list.png)

Pas plotësimit të të gjitha fushave të caktuara si **required (e nevojshme)** dhe klikimit te continue, një ekran i fundit do t'ju tregojë fushat e plotësuara dhe ato fusha që mbeten të prapë.

![Test i aksionit Zapier duke shfaqur fusha të plotësuara dhe të zbrazëta](/img/admin/webhooks-list.png)

Sapo të përfundojeni testin dhe të jetë i suksesshëm, aksioni juaj është konfiguruar. Gjithashtu, është e rëndësishme të kontrolloni rrjetin tuaj nëse elementi u krijua me testin e aksionit tuaj.
