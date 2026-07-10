---
title: Soevereine Huurderoperasies
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Soevereine Huurder Operasies {#sovereign-tenant-operations}

Ultimate Multisite 1.2.0 voeg operasionele gereedskap by vir soevereine huurders toe: subsites wat met hul eie database, lêersiste wortel en routing konte werk terwyl hulle steeds deur die netwerkbeheerder sigbaar is.

Gebruik hierdie bladsy wanneer jy geïsoleerde kliëntsites bestuur, verplasing van afgelegen sites of migrasies wat 'n standaard subsite na soevereine infrastruktuur skuif.

## Wat verander vir beheerders {#what-changes-for-administrators}

- **Stateless huurder autologin** — Netwerkbeheerders kan 'n soevereine huurder besoek sonder om op langdurige gedeelde sessiestate te vertrou. Die SSO token is doelgerig gespesifiseer, oorsprong-gepin, herhaling-beskerm en beperk tot 'n kort vervaldatum.
- **Soevereinbewuste routing** — Oude geïsoleerde netwerke en soevereine huurders los op deur dieselfde siterouter pad, wat bootstrap verskille tussen ou en nuwe geïsoleerde installasies verminder.
- **Geverifieerde migrasiestatus** — Migrasieverifikasie controle gebruikersvoorsiening, database skrywerrekenrigtingstoestomme, queue drain status en afwesigheid van ou tabel voordat 'n huurder as voltooi beskou word.
- **Veilikerte afskeid** — Soevereine afskeiding verwyder nou huurderkredensiële netjies sodat gewysigde huurders nie verouderde database-toegang agterlaat nie.

## Besoek van 'n soevereine huurder {#visiting-a-sovereign-tenant}

1. Maak **Network Admin > Ultimate Multisite > Sites** oop.
2. Kies die soevereine huurder.
3. Gebruik **Besök (SSO)** wanneer beskikbaar sonder om wagwoorde te kopieer of tydelike beheerrekeninge te skep.

Die besoekstroom skep 'n kortlewende inlogtoken vir daardie huurder en registreer die SSO-gebeurtenis in die huurder se auditspoor. Indien die knoppie misluk, controle of die huurderdomein los op die verwagte installasie en dat die huurder die netwerk-syd SSO-endpunt kan bereik.

## Afskeid van afgelegen sites-kontrolelys {#remote-site-operations-checklist}

Voordat jy 'n soevereine of afgelegen huurder verander, bevestig:

- Die huurdomain wys na die host wat die huurfilesystem besit.
- Die huurdatabasehost stem ooreen met die geconfigureerde hostbinding vir daardie installasie.
- Die migrasieverifikasiekommando's slaag vir die huur.
- Asynkroone migrasiekuess word geleegmaak voordat DNS- of eienaarsveranderings gemaak word.
- Die huurbeheergebruiker is tydens migrasie verskaf en kan deur SSO aanmeld.

## Sovereign huure verwyder {#deleting-sovereign-tenants}

Die afskeid van 'n sovereign huur is vernietigend. Bevestig eerstens die status van die bladsy-uitvoering (backup) en eksport, en dan verwissel dit vanaf die sitbestuurskerm. Die 1.2.0 afskeidstelsel verwyder huurdatabasekredensiële as deel van die opruimproses, maar administrateurs moet steeds verifieer dat hostvlak-databasegebruikers en -maakmaakliefies verdwyn wanneer hulle eksterne hoespanele gebruik.

:::warning
Verwyder nie 'n sovereign huur terwyl migrasieverifikasie nog aan die gang is of terwyl asynkroon stootjobs in die ry is. Wag vir die voltooiing van verifikasie sodat afskeid nie kredensialieë wat deur uitgestelde jobs benodig, verwyder word nie.
:::
