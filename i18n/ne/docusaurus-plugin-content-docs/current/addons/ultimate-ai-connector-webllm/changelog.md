---
title: WebLLM का लागि Ultimate AI Connector परिवर्तन सूची
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# WebLLM का लागि Ultimate AI Connector परिवर्तन-सूची {#ultimate-ai-connector-for-webllm-changelog}

## संस्करण 1.1.0 — 2026-04-09 मा जारी गरियो {#version-110--released-on-2026-04-09}

* नयाँ: admin-bar स्थिति सूचकसहितको तैरिने च्याट widget — लग-इन भएको कुनै पनि प्रयोगकर्ताले front end बाटै ब्राउजर-साइड LLM लाई सीधै prompt गर्न सक्छ।
* नयाँ: SharedWorker runtime — MLC engine अब SharedWorker मा चल्छ, ताकि धेरै tabs ले एउटै GPU session साझा गरून्, त्यसका लागि प्रतिस्पर्धा गर्नुको सट्टा।
* नयाँ: apiFetch middleware interceptor — AI Client SDK pattern सँग मिल्ने WordPress REST अनुरोधहरू local WebLLM broker तर्फ पारदर्शी रूपमा route गरिन्छन्, loopback HTTP round-trip आवश्यक पर्दैन।
* नयाँ: Connector panel मा widget settings UI, chat widget toggle गर्न र auto-prompt व्यवहार configure गर्नका लागि।
* सुधार: IndexedDB cache backend बाध्यकारी बनाइयो ताकि model weight downloads ले default Cache API path बिगार्ने HuggingFace xet CDN redirects पछि पनि निरन्तरता पाउँछन्।
* सुधार: embedding models का लागि context_window KV-cache override छोडियो (तिनीहरूमा decoder हुँदैन र override ले runtime error गराएको थियो)।
* सुधार: worker tab load हुनु अघि नै /webllm/v1/models मा cold-start candidate model advertise गरियो, ताकि SDK उपभोक्ताहरूले तुरुन्तै model देखून्।
* सुधार: WebLLM लाई wpai_preferred_text_models filter मा hook गरियो, ताकि model configure गरिएको अवस्थामा AI Experiments feature ले browser engine तर्फ route गरोस्।
* सुधारिएको: end-to-end testing का क्रममा देखिएका cache-busting, content normalisation, र hardware-reference fixes।

## संस्करण 1.0.0 — प्रारम्भिक रिलीज {#version-100--initial-release}
