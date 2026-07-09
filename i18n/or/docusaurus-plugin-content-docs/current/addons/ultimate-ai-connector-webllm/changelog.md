---
title: WebLLM ପାଇଁ Ultimate AI Connector ପରିବର୍ତ୍ତନ ତାଲିକା
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# WebLLM ପାଇଁ Ultimate AI Connector Changelog

## Version 1.1.0 — 2026-04-09 ରେ ମୁକ୍ତିଲାଭ

* ନୂଆ: admin-bar ସ୍ଥିତି ସୂଚକ ସହ ଭାସୁଥିବା chat widget — ଯେକୌଣସି logged-in ବ୍ୟବହାରକାରୀ front end ରୁ ସିଧାସଳଖ browser-side LLM କୁ prompt କରିପାରିବେ।
* ନୂଆ: SharedWorker runtime — MLC engine ଏବେ SharedWorker ରେ ଚାଲେ, ତେଣୁ ଏକାଧିକ tab ପରସ୍ପର ସଂଘର୍ଷ କରିବା ପରିବର୍ତ୍ତେ ଗୋଟିଏ GPU session ସେୟାର କରେ।
* ନୂଆ: apiFetch middleware interceptor — AI Client SDK pattern ସହ ମେଳ ଖାଉଥିବା WordPress REST requests ଗୁଡ଼ିକୁ ସ୍ପଷ୍ଟଭାବରେ local WebLLM broker କୁ route କରାଯାଏ, loopback HTTP round-trip ଦରକାର ନାହିଁ।
* ନୂଆ: chat widget ଚାଲୁ/ବନ୍ଦ କରିବା ଏବଂ auto-prompt ଆଚରଣ configuration ପାଇଁ Connector panel ରେ Widget settings UI।
* ସଂଶୋଧନ: IndexedDB cache backend କୁ ବାଧ୍ୟତାମୂଳକ କରାଯାଇଛି, ଯାହାରୁ model weight downloads ଡିଫଲ୍ଟ Cache API path କୁ ଭାଙ୍ଗିଦେଉଥିବା HuggingFace xet CDN redirects ପରେ ମଧ୍ୟ ରହିଥାଏ।
* ସଂଶୋଧନ: embedding models ପାଇଁ context_window KV-cache override କୁ ଏଡ଼ାଯାଇଛି (ସେମାନଙ୍କର decoder ନାହିଁ ଏବଂ override ଦ୍ୱାରା runtime error ହୋଇଥିଲା)।
* ସଂଶୋଧନ: worker tab load ହେବା ପୂର୍ବରୁ /webllm/v1/models ରେ cold-start candidate model ଘୋଷଣା କରାଯାଏ, ତେଣୁ SDK consumers ତୁରନ୍ତ ଗୋଟିଏ model ଦେଖନ୍ତି।
* ସଂଶୋଧନ: WebLLM କୁ wpai_preferred_text_models filter ସହ ଯୋଡ଼ାଯାଇଛି, ତେଣୁ model configure ହୋଇଥିଲେ AI Experiments feature browser engine କୁ route କରେ।
* ଉନ୍ନତ: end-to-end testing ସମୟରେ ଦେଖାଦେଇଥିବା cache-busting, content normalisation, ଏବଂ hardware-reference ସଂଶୋଧନଗୁଡ଼ିକ।

## Version 1.0.0 — ପ୍ରାରମ୍ଭିକ ମୁକ୍ତି
