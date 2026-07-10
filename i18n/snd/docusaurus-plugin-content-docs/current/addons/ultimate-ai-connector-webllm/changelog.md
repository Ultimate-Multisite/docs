---
title: WebLLM لاءِ الٽيميٽ AI ڪنيڪٽر تبديلي لاگ
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM تبديلي نامو {#ultimate-ai-connector-for-webllm-changelog}

## ورزن 1.1.0 — 2026-04-09 تي جاري ٿيو {#version-110--released-on-2026-04-09}

* نئون: admin-bar اسٽيٽس اشارو ڪندڙ سان Floating chat widget — ڪو به logged-in استعمال ڪندڙ front end مان سڌو browser-side LLM کي prompt ڪري سگهي ٿو.
* نئون: SharedWorker runtime — MLC engine هاڻي SharedWorker ۾ هلندو آهي، تنهنڪري ڪيترائي tabs هڪ GPU session شيئر ڪن ٿا، ان تي وڙهڻ بدران.
* نئون: apiFetch middleware interceptor — WordPress REST درخواستون جيڪي AI Client SDK pattern سان ملن ٿيون، شفاف طور تي مقامي WebLLM broker ڏانهن موڪليون وڃن ٿيون، loopback HTTP round-trip جي ضرورت ناهي.
* نئون: Connector panel ۾ Widget settings UI، chat widget کي آن/آف ڪرڻ ۽ auto-prompt رويو ترتيب ڏيڻ لاءِ.
* درستگي: IndexedDB cache backend کي لازمي ڪريو، ته جيئن model weight downloads HuggingFace xet CDN redirects کان پوءِ به برقرار رهن، جيڪي default Cache API path کي ٽوڙين ٿا.
* درستگي: embedding models لاءِ context_window KV-cache override کي ڇڏي ڏيو (انهن وٽ decoder ناهي ۽ override runtime error جو سبب بڻيو).
* درستگي: worker tab لوڊ ٿيڻ کان اڳ /webllm/v1/models ۾ cold-start candidate model کي ڏيکاريو، ته جيئن SDK استعمال ڪندڙن کي فوراً model نظر اچي.
* درستگي: WebLLM کي wpai_preferred_text_models filter ۾ hook ڪريو، ته جيئن AI Experiments خصوصيت، جڏهن model ترتيب ڏنل هجي، browser engine ڏانهن route ٿئي.
* بهتر: end-to-end testing دوران ظاهر ٿيل cache-busting، content normalisation، ۽ hardware-reference جون درستگيون.

## ورزن 1.0.0 — شروعاتي جاري ٿيڻ {#version-100--initial-release}
