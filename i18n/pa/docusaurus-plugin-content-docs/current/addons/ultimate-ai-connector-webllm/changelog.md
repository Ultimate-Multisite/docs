---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM ਚੇਂਜਲੌਗ {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — 2026-04-09 ਨੂੰ ਰਿਲੀਜ਼ ਹੋਇਆ {#version-110--released-on-2026-04-09}

* ਨਵਾਂ: ਐਡਮਿਨ-ਬਾਰ ਸਟੇਟਸ ਇੰਡੀਕੇਟਰ ਵਾਲਾ ਫਲੋਟਿੰਗ ਚੈਟ widget — ਕੋਈ ਵੀ ਲੌਗਇਨ ਕੀਤਾ ਹੋਇਆ ਯੂਜ਼ਰ ਫਰੰਟ ਐਂਡ ਤੋਂ ਸਿੱਧਾ ਬ੍ਰਾਊਜ਼ਰ-ਸਾਈਡ LLM ਨੂੰ prompt ਕਰ ਸਕਦਾ ਹੈ।
* ਨਵਾਂ: SharedWorker runtime — MLC engine ਹੁਣ SharedWorker ਵਿੱਚ ਚੱਲਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਕਈ tabs ਇੱਕ ਹੀ GPU session ਸਾਂਝਾ ਕਰਦੇ ਹਨ, ਨਾ ਕਿ ਉਸ 'ਤੇ ਟਕਰਾ ਕਰਦੇ ਹਨ।
* ਨਵਾਂ: apiFetch middleware interceptor — WordPress REST requests ਜੋ AI Client SDK pattern ਨਾਲ ਮਿਲਦੇ ਹਨ, ਉਹ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ local WebLLM broker ਨੂੰ ਰੂਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਜਿਸ ਲਈ loopback HTTP round-trip ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।
* ਨਵਾਂ: Connector panel ਵਿੱਚ Widget settings UI, ਜਿਸ ਨਾਲ ਚੈਟ widget ਨੂੰ on/off ਕਰਨਾ ਅਤੇ auto-prompt behavior configure ਕਰਨਾ ਸੰਭਵ ਹੋ ਗਿਆ ਹੈ।
* ਫਿਕਸ: IndexedDB cache backend ਨੂੰ force ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ model weight downloads HuggingFace xet CDN redirects ਨਾਲ ਨਾ ਟੁੱਟਣ, ਜੋ default Cache API path ਨੂੰ ਤੋੜਦੇ ਹਨ।
* ਫਿਕਸ: embedding models ਲਈ context_window KV-cache override ਨੂੰ skip ਕਰ ਦਿੱਤਾ ਗਿਆ ਹੈ (ਉਨ੍ਹਾਂ ਵਿੱਚ decoder ਨਹੀਂ ਹੁੰਦਾ ਅਤੇ ਇਸ override ਕਾਰਨ runtime error ਆ ਰਿਹਾ ਸੀ)।
* ਫਿਕਸ: worker tab load ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ /webllm/v1/models ਵਿੱਚ cold-start candidate model advertise ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਜੋ SDK consumers ਨੂੰ ਤੁਰੰਤ model ਦਿਖਾਈ ਦੇਵੇ।
* ਫਿਕਸ: WebLLM ਨੂੰ wpai_preferred_text_models filter ਨਾਲ hook ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ AI Experiments feature, model configure ਹੋਣ 'ਤੇ, browser engine 'ਤੇ ਰੂਟ ਹੋ ਸਕੇ।
* ਸੁਧਾਰ: end-to-end testing ਦੌਰਾਨ Cache-busting, content normalisation, ਅਤੇ hardware-reference ਨਾਲ ਸਬੰਧਤ ਫਿਕਸ ਪਾਏ ਗਏ ਹਨ।

## Version 1.0.0 — ਸ਼ੁਰੂਆਤੀ ਰਿਲੀਜ਼ {#version-100--initial-release}
