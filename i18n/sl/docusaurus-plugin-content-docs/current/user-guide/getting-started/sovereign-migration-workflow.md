---
title: Potok migracije Sovereigna
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migracijski Postopek

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje vratar za verifikacijo migracije pri premisu standardnega subsite v infrastrukturo sovrenskega najemnika (sovereign tenant).

## Pred začetku {#before-you-start}

Preverite da imate:

- Trenutno rezervno kopijo izvornih spletne strani.
- Dodatek Multi-Tenancy je aktiven.
- Ciljno bazo podatkov, sistemni root datoteke in domen najemnika so pripravljeni.
- Povezavo baze podatkovnega hosta, ki se zgaja z ciljno okoljem.
- Dostop do WP-CLI komand za omrežje.

## Priporočljiv postopek {#recommended-workflow}

1. Przypremi ciljno bazo podatkov in sistemni root datoteke najemnika.
2. Registrirajte ali posodobite nastavitve izolacije najemnikov (tenant isolation settings).
3. Predvedite migracijo najemnika (tenant migration).
4. Omrežite ali preverite uporabnike najemnika.
5. Osvobodite asihronne zadetke za migracijo (async migration jobs).
6. Predvedite verifikacijo sovrenske migracije (sovereign migration verification).
7. Obiščite najemnika z SSO-jem.
8. Preprečite spremembo DNS ali rute le po uspešni preveritvi.

## Vratari za verifikacijo {#verification-gates}

Postopek verifikacije preverja migacijo iz več uglov:

- Je šema najemnika prisotna in lahko piše s strani baze podatkov najemnika.
- Ima konfiguriran bazo podatkovnega hosta validne dovoljenja (grants).
- So uporabniki najemnika prisotni in se zgajajo z pričakovanim številom uporabnikov za sovrenski instalacijo.
- Asihroni vrsti za push lahko uspešno osvobodite.
- Stari poti podatkov na strani omrežja (network-side data paths) niso več potrebne za sovrenskega najemnika.

Preverjajte neuspešne verifikacije kot blokirajo prehod v produkcijo. Popravite omenjeno težavo z bazno datoteko, uporabnikom, vrsto ali rutiranjem, nato pa ponovno predvedite verifikacijo, preden najemnika razložite strankam.

## Prvi prodajni obisk {#first-production-visit}

Po uspešni preveritvi uporabite **Visit (SSO)** z zaslona za upravljanje spletne strani za prvi admin obisk. To potrjuje rutiranje najemnika, obravnavo SSO tokenov, origin pinning in omrežitev uporabnikov na strani najemnika v eni kontrolirani koraku.
