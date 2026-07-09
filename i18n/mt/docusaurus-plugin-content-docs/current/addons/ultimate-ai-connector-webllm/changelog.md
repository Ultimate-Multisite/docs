---
title: Ultimate AI Connector għal WebLLM Reġistru tal-Bidliet
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Reġistru tal-bidliet

## Verżjoni 1.1.0 — Maħruġa fid-2026-04-09

* Ġdid: Widget taċ-chat li jżomm f'wiċċ l-ilma b'indikatur tal-istatus tal-bar tal-amministratur — kwalunkwe utent illoggjat jista' jagħti prompt lill-LLM fuq in-naħa tal-browser direttament mill-front end.
* Ġdid: Runtime SharedWorker — il-magna MLC issa taħdem f'SharedWorker sabiex tabs multipli jaqsmu sessjoni GPU waħda minflok jiġġieldu fuqha.
* Ġdid: Interċettur middleware apiFetch — it-talbiet WordPress REST li jaqblu mal-mudell AI Client SDK jiġu rottati b'mod trasparenti lejn il-broker lokali WebLLM, mingħajr ma jkun hemm bżonn round-trip HTTP loopback.
* Ġdid: UI tas-settings tal-widget fil-panel tal-Connector biex tixgħel jew titfi l-widget taċ-chat u tikkonfigura l-imġiba tal-auto-prompt.
* Tiswija: Sfurza l-backend tal-cache IndexedDB sabiex it-tniżżil tal-piżijiet tal-mudell jibqa' jeżisti wara redirects tal-HuggingFace xet CDN li jkissru l-mogħdija default tal-Cache API.
* Tiswija: Aqbeż l-override tal-KV-cache context_window għal mudelli ta' embedding (m'għandhomx decoder u l-override ikkawża żball waqt it-tħaddim).
* Tiswija: Irreklama l-mudell kandidat għall-cold-start f'/webllm/v1/models qabel ma t-tab tal-worker tkun ittellgħet, sabiex il-konsumaturi tal-SDK jaraw mudell immedjatament.
* Tiswija: Qabbad WebLLM mal-filter wpai_preferred_text_models sabiex il-karatteristika AI Experiments tirrotta lejn il-magna tal-browser meta mudell ikun ikkonfigurat.
* Imtejjeb: Tiswijiet tal-cache-busting, normalizzazzjoni tal-kontenut, u referenzi tal-ħardwer li ħarġu waqt it-testjar minn tarf sa tarf.

## Verżjoni 1.0.0 — Ħarġa Inizjali
