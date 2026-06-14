---
title: Operacionet e Llogarës Sovranë
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacioneve Tenantet Sovranë

Ultimate Multisite: Multi-Tenancy 1.2.0 shtoi mjete operacionale për tenantet soverane: subsit që funksionojnë me bazën e tyre të të dhënave, rrënjën e sistemit të skedarëve dhe kontekstin e rutimit (routing), ndërsa mbeten të dukshëm nga administratorët e rrjetit.

Përdorni këtë faqe kur menaxhoni vende klientë të izoluar, transferime remote-site ose migracione që lëvizin një subsit standard në infrastrukturën soverane.

## Çfarë ndryshon për administratorët

- **Autologimi i tenantit pa gjendje (Stateless tenant autologin)** — Administratorët e rrjetit mund të vizitojnë një tenant soverin pa mbështetur stalinë e sesionit të përbashkët që jeton për një kohë të gjatë. Tokeni SSO është i kufizuar në qëllim, i fiksuar në burimin (origin-pinned), i mbrojtur nga rikuperimi dhe i kufizuar në një periudhë afati të shkurtër.
- **Rutimi me njohuri soverane** — Rrjetet e vjetra të izoluara dhe tenantet soverane zgjidhen përmes të njëjtës rrugë rutimi të saj, duke ulur ndryshimet në bootstrap midis instalimeve të vjetra dhe të reja të izoluar.
- **Stati i migrimit i verifikuar** — Verifikimi i migrimit kontrollon provizimin e përdoruesve, lejet e shkrimit të bazës së të dhënave (database writer permissions), statusin e zbrazimit të qasjes në kërkesa (queue drain status) dhe mungesën e tabelave të vjetra para se një tenant të trajtohet si i përfunduar.
- **Mbyllje më e sigurt** — Mbyllja soveraine tani heq lehtësisht kredencialet e tenantit, kështu që tenantet e fshira nuk lënë pas ndërveprim (access) të vjetër në bazën e të dhënave.

## Vizitimi i një tenanti soverin

1. Hapni **Network Admin > Ultimate Multisite > Sites**.
2. Zgjidhni tenantin soverin.
3. Përdorni **Visit (SSO)** kur është e mundur në vend që të kopjoni fjalët e fshehta ose krijoni llogjore administratorje të përkohshme.

Fluksi i vizitimit krijon një token hyrjeje të shkurtër për atë tenant dhe regjiston ngjarjen SSO në llogarin audit të tenantit. Nëse butoni dështon, kontrolloni që domeni i tenantit të zgjidhet në instalimin e pritshëm dhe se tenanti mund të arrijë pikën e fundit (endpoint) të SSO-së anës rrjetike.

## Lista kontrolli për operacionet remote-site

Para se të ndryshoni një tenant soverin ose remote, konfirmojeni:

Domani i qirës (tenant domain) i drejtohet hostit që posedon sistemin e skurtjes së qirës (tenant filesystem).
Hosti i bazës së të dhënave të qirës përputhet me lidhjen e hostit e konfiguruar për atë instalim.
Kommandoja e verifikimit të migrimit kalojnë për qirën.
Këqetit (queues) asinkrone të migrimit lëlohen para se të bëni ndryshime në DNS ose pronësi.
Përdoruesi administrator i qirës u provizioua gjatë migrimit dhe mund të hyjë duke përdorur SSO.

## Fshirja e qirave soverane (sovereign tenants)

Fshirja e një qire soveraine është destruktive. Konfirmojmë statusin e bizesës (backup) dhe eksporimit para, pastaj fshini nga ekranet e menaxhimit të faqes (site management screen). Fluksi i zhbuxhojës 1.2.0 heq kredencialet e bazës së të dhënave të qirës si pjesë e pastrimit, por administratorët duhet ende të verifikojnë se përdoruesit dhe fletat (folders) në nivelin e hostit janë zhdukur kur përdorni panele eksterne të hostingut.

:::warning
Mos fshini një qirë soveraine ndërsa verifikimi i migrimit po ecet ose ndërsa janë në kërkesë (queued) punët asinkrone të shtytjes (push jobs). Prisni që verifikimi të përfundojë që zhbuxhojja nuk hiq kredencialet e nevojshme për punët që janë në pritje.
:::
