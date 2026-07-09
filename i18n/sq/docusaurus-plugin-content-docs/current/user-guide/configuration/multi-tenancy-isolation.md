---
title: Izolimi i Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolimi i Multi-Tenancy {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 mbështet izolimin per bazë të dhënash dhe sistemish të skurtuar (filesystem) për qirësore soverane. Kjo e mban të dhënat e qirësore të veçanta ndërsa ruajmë provizimin në nivelin e rrjetit, faturimin dhe administrimin.

## Strategjia e izolimit {#isolation-strategy}

Përdorni izolimin soveran për klientët që kërkojnë një ndarje më të fortë të të dhënave, ruajtje fizike të skurtuar (filesystem) dedikuar ose kufi të veçantë serveri.

Çdo qirësore soverane duhet të ketë:

- Një bazë të dhënash dedikuar për qirënore ose një strategji prefiksi bazë të dhënash të miratuar nga host-i.
- Një rrëdhuroje (root) sistemish të skurtuar (filesystem) dedikuar për qirënoren.
- Një hyrje në regjistrin e qirësore që mapon faqen me bazën e dhënash, rrugën kryesore, emrin e hostit dhe modelin e izolimit.
- Rezultatin e verifikimit të migrimit para se qirësora të konsiderohet aktive.

## Lidhurja me host-in e bazës së të dhënave (Database host binding) {#database-host-binding}

Versioni 1.2.0 ndryshon sjelljen e paracaktuar të lidhurit në të njëjtin mshirë për instalimet soverane. Vlera si `localhost` normalizohen në mënyrë që Bedrock, FrankenPHP dhe instalimet WordPress me container janë në gjendje të japin dhe verifikojnë lejet ndaj stringut të host-it që MySQL vërtet e sheh.

Kur konfiguroni një qirësore soverane:

1. Vendosni host-in e bazës së të dhënave në vlerën e nevojshme nga runtime-i i qirësore.
2. Përdorni `localhost` për instalimet lokale socket kur host-i pret lidhje lokale.
3. Përdorni `127.0.0.1` ose emrin e një shërbimi (service hostname) vetëm kur serveri i bazës së dhënave i jep privilegjet atij host-it.
4. Ekuro verifikimin e migrimit pas ndryshimit të lidhurit me host-in.

Nëse raportet e verifikimit shfaq dështime në leje, krahasoni lejet e përcaktuara për përdoruesin e bazës së të dhënave të qirësore me lidhjen e host-it e konfiguruar. Një përdorues i caktuar për `user@localhost` është i ndryshëm nga `user@127.0.0.1` ose `user@%`.

## Rrëdhuroja kryesore e sistemit të skurtuar (Filesystem root) {#filesystem-root}

Zhuta root i qirës (tenant root) duhet të jetë e qëndrueshme gjatë restart-eve dhe deploy-eve. Mos përdorni rrugë të montimit të përkohshme. Për instalime në stil Bedrock, konfirmo se zhuta root vërtetoni te rrëzimi i web-it WordPress të pritshëm nga bootstrap-i i tenantit, jo vetëm rrëzimi i projektit (project root).

## Rrëjedha e provizimit (Provisioning order) {#provisioning-order}

Për njerëz të rinj me tenant sovran, përdorni këtë rend:

1. Krijoni hyrjen në regjistrin e tenantit (tenant registry entry).
2. Krijoni bazën e të dhënave (database) dhe përdoruesin e bazës së të dhënave (database user).
3. Bootstraponi skemën e tenantit (tenant schema).
4. Provizoni përdoruesit e tenantit (tenant users).
5. Konfigurojeni rrugët e sistemit të skurtuar të tenantit (tenant filesystem paths).
6. Ekzekutoni verifikimin e migrimit (migration verification).
7. Ndryshoni rutimin ose DNS-in pasi provimi i verifikimit kaloj pa problem.

Ky rend pengon që tenantet që janë ende pjesërisht izoluar të marrin trafik para se shkruasja e bazës së të dhënave, përdoruesit dhe sistemit të skurtuar të jenë gati.

## Rrëjet e menaxhimit të klientëve sovranë (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 mban veprimet e menaxhimit të klientëve në sitin kryesor kur mode sovran është e aktivizuar. Një tenant mund të vazhdojë si një instalim WordPress i izoluar, por veprimet që lidhen me klientët dhe që varen nga faturimi në rrjet, anëtaritë ose të dhënat e llogjisë së përbashkët duhet t'i dërgojnë klientin kthesën te sit kryesor në vend që të provojnë të përfundojnë veprimin brenda kohës së ekzekutimit të tenantit.

Rrëjja e sitit kryesor vlen për:

- Checkout dhe ndryshime në plan.
- Përmbledhje llogarie dhe veprimet e profilit të klientit (customer profile actions).
- Përditësime të adresës së faturimit dhe ekranet e menaxhimit të pagesave.
- Vështimet e fakturës dhe historiku i pagesave.
- Veprimet e menaxhimit të sitit si shtimi ose fshirja e një siti (adding or deleting a site).
- Ndryshimi i shablonit (Template switching).
- Mapimi i domeneve dhe ndryshimet në domenin kryesor.

Kur klienti fillon një nga këto veprime nga një tenant i pavarur (sovereign), Ultimate Multisite ndërton URL-n e faqes kryesore dhe ruajti tenantin burim si destinacion kthehuar kur është e sigurt të bëhet kështu. Kjo lejon klientët të përfundojnë veprimin menaxhuar kundër regjistrave të rrjetit, pastaj të kthehen në kontekstin e tenantit pa duplikuar statusin e faturimit ose anëtarisë në bazën e të dhënave të pavarur.

Për operatorët, rregulli praktik është: mbani faqet e faturimit (billing), llogarisë (account), pagesës së checkout-it, fakturës (invoice), shablonit (template) dhe menaxhimit të domeneve në faqen kryesore për rrjetet e pavarura. Dashboard-të e tenantit mund të lidhen me ato faqe, por faqja kryesore mbetet burimi i vërtetës për veprimin.
