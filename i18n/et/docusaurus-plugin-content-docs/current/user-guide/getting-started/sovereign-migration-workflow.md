---
title: Võimendliku migratsiooni töövoori
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Suvereenne migratsioonivõtme töövoori

Ultimate Multisite versioon 1.2.0 lisab migratsiooni kinnituse portale, kui siit standard subsite'i viemine suvereense tenant-infrastruktuuri sisse.

## Enne alustamist

Vakenda, et teil on:

- Praegune tagasööning lähtevest saitist.
- Multi-Tenancy addon aktiivne.
- Koheti sihtebändi database, faili juur ja domeen valmis.
- Database host binding, mis vastab sihteseadme keskkonnale.
- Kättesaadavus WP-CLI käskude käivitamiseks võrku jaoks.

## soovitatav töövoori

1. Valmistage sihtebändi database ja failijuur.
2. Registreerige või uuendage tenant isolatsiooniseadistusi.
3. Käivitage tenant migratsioon.
4. Lõpetage või kinnitage tenant kasutajad.
5. Tühistage asünkroonsete migratsiooniküsimuste (async migration jobs).
6. Käivitage suvereense migratsiooni kinnitus.
7. Kanda sihteseade SSO-ga külastesse.
8. Muuda DNS või routing ainult siis, kui kinnitus on läinud läbi.

## Kinnituse portaalid

Kinnituse töövoori kontrollib migratsiooni mitmelest nägukorral:

- Sihtebändi skema on olemas ja seda saab kirjutada sihteseade database writer.
- Konfigurieritud database hostil on valide andmed.
- Tenant kasutajad on olemas ja vastavad ootatud suvereense installitud kasutajate arvu.
- Asünkroonsete pushi juurde (async push queue) saab õnnestult tühistada.
- Vanemise võrku poolide andmejuurid ei ole enam vajalikud suvereense sihteseade jaoks.

Kinnituse ebaõnnestused tuleb panna ette käivitamise eest. Parandage raportitud database-, kasutaja-, juurde või routingi probleem, ja käivitage kinnitus uuesti enne, kui avate sihteseade klientidele.

## Esimene tootmise külastamine

Kinnituse läbivaatamise pärast kasutage **Visit (SSO)** saitija haldamise ekraanist esimest administraatori külastamiseks. See kinnitab tenant routingut, SSO tokeni käsitsemist, origini kinnitamist ja sihteseade poolide kasutajate valmistamist kontrollitud sammuga.
