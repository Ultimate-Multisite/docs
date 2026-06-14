---
title: Zapier-re argi registroa kontu
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Espener kontu Zapier-re

Ezaren [Ultimate Multisite-a Zapier-re integratzea](zapier.md) artikuluan, Zapier-ri erabiliziek Ultimate Multisite-an trigger eta event-ez betetzeko nola erabiltzen duen adieraztik. Hegoera, adierazpenak (triggers) eta gebeurtasun-erakundeak (events) erabilizik 3rd party aplikazioak integratzea erakusten dugu. Google Sheets-a datuen esgailu gisa erabilizik Ultimate Multisite-ra kontua emateko informazioa bidali dugu.

Zapier-re konektatu aurretik, **Ultimate Multisite > Settings > API & Webhooks** funtziara jarraitu eta API-ak aktiboa dagoela konpondu. Zapier-ek Ultimate Multisite-aren kontua datu-erakundeak gertu beharko duenean, API Key-a eta API Secret-a hori eskuratu ekranetik kopiatu duzu.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Lehenik, Google Drive-an **Google Sheet** bat ezartu behar duzu. Data hauek lehenik mapatzea eragiten duen bitartean, lehenik zehar kolumna guztiak ondo definitu beharko duzu.

Google Sheet ezartu ondoren, Zapier-ren kontua laitzen eta zap bat emateko lehenen egin behar duzu.

**"App event"** erabili ditu beharrean, **"Google Sheets"**a irudiu.

Gero, "**Event** " lekuan, **"New spreadsheet row"** (Google Sheet-aren lehen fila) ahalegin eta "**Continue** " (Kontinuua) esan duzu.

Hurrengo irudiak Google Account bat aukeratu beharko du, hori da Google Sheet-a ezartu duen. Hau da, justu Google account-a konpondu beharko duzu.

**"Set up trigger"** lekuan, data hauek gertuko google spreadsheet eta worksheet-a aukeratu eta espezifikatu behar duzu. Justu horiek pleratu eta "**Continue** " (Kontinuua) esan duzu.

Hurrengo irudiak Google Sheet-a ondo konektatuta dagoela jartzeko **"test your trigger"** (trigger-a jartesa) da.

Testuaren ondo jakin bat izango da, google sheet-ek datuak batzuk erakusten duen rezultatu ikustuko duzu. Aurrera egiteko "**Continue** " (Kontinuua) esan duzu.

Hau da, lehen irudi da Ultimate Multisite-an kontu bat emateko edo eregitzen duen ikusteko. Irudiak (search field) "Ultimate Multisite(2.0.2)" dela hautatu.

"Event" (Gertaera) lekuan, "Register an Account in Ultimate Multisite" (Kontu emateko kontu Ultimate Multisite-an) hau hautatu, eta "Continue" (Kontinuua) botoia klikatu.

"Set up an action" (Aksioa konfiguratzea) lekuan, kosturietar datu, membershipak, produkzioak, eta beste batzuk jasotzeko irudiak izango duzu. Google Sheet-eko balueak mapatuta (mapatuta/asignatu) daiteke ditu eta horiek jakin dituen lekuetara emateko beharrezkoa da, baino aldatu ez duzu, baino hain irudiaren ondorioz.

Balueak mapatuta gtainaren ondoren, aksioa jartesaraz (test) daiteke ditu.
