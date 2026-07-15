---
title: Ilogi yezinguquko ye-Ultimate AI Connector ye-WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Ilogu yezinguquko

## Inguqulo 1.1.0 — Ikhishwe ngo-2026-04-09 {#version-110--released-on-2026-04-09}

* Okusha: Iwijethi yengxoxo entantayo enenkomba yesimo ye-admin-bar — noma yimuphi umsebenzisi ongene ngemvume angathumela umyalo ku-LLM eseceleni kwesiphequluli ngqo kusuka ku-front end.
* Okusha: Isikhathi sokusebenza se-SharedWorker — injini ye-MLC manje isebenza ku-SharedWorker ukuze amathebhu amaningi abelane ngeseshini eyodwa ye-GPU esikhundleni sokuyilwela.
* Okusha: Isibambi esiphakathi se-apiFetch — izicelo ze-WordPress REST ezihambisana nephethini ye-AI Client SDK ziqondiswa ngokusobala ku-broker yasendaweni ye-WebLLM, akukho ukujikeleza kwe-loopback HTTP okudingekayo.
* Okusha: I-UI yezilungiselelo zewijethi kuphaneli ye-Connector yokuvula noma ukuvala iwijeithi yengxoxo nokulungiselela ukuziphatha kwe-auto-prompt.
* Ukulungisa: Phoqa i-backend yenqolobane ye-IndexedDB ukuze ukulandwa kwesisindo semodeli kusinde ekuqondisweni kabusha kwe-HuggingFace xet CDN okuphula indlela ezenzakalelayo ye-Cache API.
* Ukulungisa: Yeqa ukushintshwa kwe-context_window KV-cache kumamodeli e-embedding (awanayo i-decoder futhi ukushintsha kwakudala kubangele iphutha lesikhathi sokusebenza).
* Ukulungisa: Memezela imodeli yekhandidethi ye-cold-start ku-/webllm/v1/models ngaphambi kokuba ithebhu yesisebenzi ilayishe, ukuze abathengi be-SDK babone imodeli ngokushesha.
* Ukulungisa: Xhuma i-WebLLM kusihlungi se-wpai_preferred_text_models ukuze isici se-AI Experiments siqondise enjinini yesiphequluli lapho imodeli ilungiselelwe.
* Okuthuthukisiwe: Ukugwema inqolobane, ukujwayelekisa okuqukethwe, nokulungiswa kwezinkomba zehadiwe okuvele ngesikhathi sokuhlola kusukela ekuqaleni kuya ekugcineni.

## Inguqulo 1.0.0 — Ukukhishwa kokuqala {#version-100--initial-release}
