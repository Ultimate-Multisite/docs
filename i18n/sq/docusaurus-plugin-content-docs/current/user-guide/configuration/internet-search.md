---
title: Kërkim në internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Kërkimi në Internet

Gratis AI Agent v1.5.0 shton aftësinë e **Kërkimit në Internet**, që lejon asistentin AI të merr informacion aktual nga interneti gjatë një bisede. Kjo funksionohet me [Brave Search API](https://brave.com/search/api/) ose [Tavily API](https://tavily.com/).

## Si Funksionon {#how-it-works}

Kur kërkimi në internet i aktivizuar, asistenti mund të pyet automatikisht ofruesin tuaj të kërkimit kur përcakton se një pyetje kërkon informacion aktual ose të jashtëm – për shembull, lajme të fundit, çmime live, ose dokumentacion që mund të ketë ndryshuar që nga data e mbarimit i trajnimit të modelit.

Rezultatet merrni në kohë reale dhe i injektohen në kontekstin e asistentit para se ai të gjenerojë një përgjigje. Asistenti tregon kur ka përdorur rezultate kërkimi për të përgjigjur pyetjes.

## Aktivizimi i Kërkimit në Internet {#enabling-internet-search}

Kërkimi në internet kërkon një API key nga ofruesi i kërkimit që zgjidhni. Për konfigurimin:

1. Shkoni te **Gratis AI Agent → Settings → Advanced**.
2. Gjeni derre seksi (dropdown) të **Internet Search Provider** dhe zgjidhni ose **Brave Search** ose **Tavily**.
3. Vendosni API key-n tuaj në fushën e përshtatshme. Linket për regjistrim janë të shfaqura pranë çdo fushë.
4. Klikoni te **Save Settings**.

Pasi ky key ruhet, aftësia e Kërkimit në Internet bëhet automatike e disponueshme për asistentin.

## Brave Search {#brave-search}

### Marrja e një API Key Brave Search {#obtaining-a-brave-search-api-key}

1. Vizitoni [Brave Search API page](https://brave.com/search/api/).
2. Regjistrohu për një plan. Një nivel falas është i disponueshëm me kufiri mujor kërkesash.
3. Kopjoni API key-n tuaj nga dashboard-i i zhvilluesit Brave Search.
4. Ngjisni atë në fushën **Brave Search API Key** në cilësimet e Gratis AI Agent.

### Kufitimet e Përdorimit {#usage-limits}

Përdorimi blllohet nga Brave Search bazuar në numrin e kërkesave të bëra. Çdo përgjigje AI që shkakton një kërkim lmetikues si një kërkesë. Monitoroni përdorimin tuaj në [dashboard-in e zhvilluesit të Brave Search](https://brave.com/search/api/) për të shmangur pagesa të papritura.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 shton **Tavily** si një opsion tjetër provues interneti, duke ofruar rezultate kërkimi më të pasura dhe aftësi më avancuara për kërkim.

### Marrja e një kyçje API Tavily {#obtaining-a-tavily-api-key}

1. Shkoni në [faqen e API-së Tavily](https://tavily.com/).
2. Regjistrohu për një llogari. Një nivel falas është i disponueshëm me kufiri mujor kërkesash.
3. Kopjoni kyçjen tuaj API nga dashboard-i i Tavily.
4. Ngjisni atë në fushën **Tavily API Key** në cilësimet e Gratis AI Agent.

### Kufizimet e Përdorimit {#usage-limits-1}

Përdorimi blllohet nga Tavily bazuar në numrin e thirrjeve API të bëra. Çdo përgjigje AI që shkakton një kërkim lmetikues lmetikues si një thirrje. Monitoroni përdorimin tuaj në [dashboard-in e Tavily](https://tavily.com/) për të shmangur pagesa të papritura.

## Ndalimi i Kërkimit Lmetikues {#disabling-internet-search}

Fshini kyçjen API nga fusha e provuesit aktiv të kërkimit dhe ruani. Aftësia për kërkim lmetikues nuk do më ofrohet asistentit.

:::note
Kërkimi lmetikues shton kohë (latency) në përgjigjet sepse asistenti duhet të presë rezultatet e kërkimit para se të gjenerojë një përgjigje. Për raste me ndjeshmëri për kohën, merrni parasysh nëse kërkimi në kohë reale është i nevojshëm apo nëse njohuritë e integruara të asistentit janë mjaftueshëm.
:::
