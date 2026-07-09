---
title: Ultimate AI Connector for WebLLM muudatuste logi
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM muudatuste logi {#ultimate-ai-connector-for-webllm-changelog}

## Versioon 1.1.0 — välja antud 2026-04-09 {#version-110--released-on-2026-04-09}

* Uus: hõljuv vestlusvidin koos adminiriba olekunäidikuga — iga sisseloginud kasutaja saab brauseripoolsele LLM-ile otse esiosast viiba anda.
* Uus: SharedWorker käituskeskkond — MLC mootor töötab nüüd SharedWorkeris, nii et mitu vahekaarti jagavad ühte GPU seanssi selle pärast võitlemise asemel.
* Uus: apiFetch vahevara pealtkuulaja — WordPress REST päringud, mis vastavad AI Client SDK mustrile, suunatakse läbipaistvalt kohalikku WebLLM vahendajasse, ilma et oleks vaja loopback HTTP edasi-tagasi päringut.
* Uus: vidina seadete UI Connectori paneelis vestlusvidina sisse- ja väljalülitamiseks ning automaatse viiba käitumise seadistamiseks.
* Parandus: IndexedDB vahemälu taustsüsteemi sundkasutus, et mudeli kaalude allalaadimised säiliksid üle HuggingFace xet CDN ümbersuunamiste, mis rikuvad vaikimisi Cache API tee.
* Parandus: jäta context_window KV-vahemälu ülekirjutus manustamismudelite puhul vahele (neil pole dekoodrit ja ülekirjutus põhjustas käitusaegse vea).
* Parandus: reklaami külmkäivituse kandidaadimudelit aadressil /webllm/v1/models enne, kui töötaja vahekaart on laaditud, nii et SDK kasutajad näevad mudelit kohe.
* Parandus: ühenda WebLLM filtriga wpai_preferred_text_models, et AI Experiments funktsioon suunaks brauserimootorisse, kui mudel on seadistatud.
* Täiustatud: vahemäluvältimine, sisu normaliseerimine ja riistvaraviidete parandused, mis ilmnesid otsast lõpuni testimise käigus.

## Versioon 1.0.0 — esmane väljalase {#version-100--initial-release}
