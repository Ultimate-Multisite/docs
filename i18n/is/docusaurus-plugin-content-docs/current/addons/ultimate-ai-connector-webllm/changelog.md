---
title: Fullkominn AI-tengill fyrir WebLLM breytingaskrá
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector fyrir WebLLM breytingaskrá

## Útgáfa 1.1.0 — Gefin út 2026-04-09 {#version-110--released-on-2026-04-09}

* Nýtt: Fljótandi spjallgræja með stöðuvísi í admin-bar — hvaða innskráði notandi sem er getur sent beiðni til LLM í vafra beint úr framendanum.
* Nýtt: SharedWorker keyrsluumhverfi — MLC-vélin keyrir nú í SharedWorker svo margir flipar deila einni GPU-lotu í stað þess að keppa um hana.
* Nýtt: apiFetch millibúnaðarhleri — WordPress REST-beiðnir sem passa við mynstur AI Client SDK eru gegnsætt beindar til staðbundna WebLLM-miðlarans, án þess að HTTP-hringferð um loopback sé nauðsynleg.
* Nýtt: Viðmót fyrir stillingar græju í Connector-spjaldinu til að kveikja eða slökkva á spjallgræjunni og stilla sjálfvirka beiðnihegðun.
* Lagfæring: Þvinga IndexedDB skyndiminnisbakenda svo niðurhal á líkanavigtum lifi af HuggingFace xet CDN endurbeiningar sem rjúfa sjálfgefnu Cache API slóðina.
* Lagfæring: Sleppa context_window KV-skyndiminnis-yfirskrift fyrir embedding-líkön (þau eru ekki með decoder og yfirskriftin olli keyrsluvillu).
* Lagfæring: Auglýsa cold-start kandidat-líkanið í /webllm/v1/models áður en worker-flipinn hefur hlaðist, svo SDK-notendur sjái líkan strax.
* Lagfæring: Krækja WebLLM í wpai_preferred_text_models síuna svo AI Experiments eiginleikinn beini í vafravélina þegar líkan er stillt.
* Bætt: Skyndiminnis-hjáhlaup, stöðlun efnis og lagfæringar á vélbúnaðartilvísunum sem komu í ljós við heildarprófanir.

## Útgáfa 1.0.0 — Fyrsta útgáfa {#version-100--initial-release}
