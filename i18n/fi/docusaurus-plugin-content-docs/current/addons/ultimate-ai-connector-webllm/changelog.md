---
title: Ultimate AI Connector for WebLLM -muutosloki
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM -muutosloki {#ultimate-ai-connector-for-webllm-changelog}

## Versio 1.1.0 — Julkaistu 2026-04-09 {#version-110--released-on-2026-04-09}

* Uusi: Kelluva chat-widget admin-palkin tilailmaisimella — kuka tahansa kirjautunut käyttäjä voi antaa selaimen puolella toimivalle LLM:lle kehotteen suoraan sivuston julkiselta puolelta.
* Uusi: SharedWorker-ajoympäristö — MLC-moottori toimii nyt SharedWorkerissa, joten useat välilehdet jakavat yhden GPU-istunnon sen sijaan, että ne kilpailisivat siitä.
* Uusi: apiFetch-väliohjelmiston sieppaaja — WordPress REST -pyynnöt, jotka vastaavat AI Client SDK -mallia, reititetään läpinäkyvästi paikalliseen WebLLM-välittäjään ilman paikallisen HTTP-kutsun edestakaista kierrosta.
* Uusi: Widgetin asetuskäyttöliittymä Connector-paneelissa chat-widgetin käyttöönoton ja automaattisen kehotetoiminnan määrittämistä varten.
* Korjaus: Pakota IndexedDB-välimuistitausta, jotta mallin painojen lataukset säilyvät HuggingFace xet CDN -uudelleenohjausten yli, jotka rikkovat oletusarvoisen Cache API -polun.
* Korjaus: Ohita context_window KV-välimuistin ohitus upotusmalleille (niissä ei ole dekooderia, ja ohitus aiheutti ajonaikaisen virheen).
* Korjaus: Ilmoita kylmäkäynnistyksen ehdokasmalli osoitteessa /webllm/v1/models ennen kuin työntekijävälilehti on latautunut, jotta SDK-käyttäjät näkevät mallin heti.
* Korjaus: Kytke WebLLM wpai_preferred_text_models-suodattimeen, jotta AI Experiments -ominaisuus reitittyy selaimen moottoriin, kun malli on määritetty.
* Parannettu: Välimuistin ohittaminen, sisällön normalisointi ja laitteistoviittausten korjaukset, jotka nousivat esiin päästä päähän -testauksen aikana.

## Versio 1.0.0 — Ensimmäinen julkaisu {#version-100--initial-release}
