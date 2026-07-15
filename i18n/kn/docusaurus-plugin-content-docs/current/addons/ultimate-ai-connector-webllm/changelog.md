---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM ನ ಬದಲಾವಣೆಗಳ ವಿವರ (Changelog)

## Version 1.1.0 — 2026-04-09 ರಂದು ಬಿಡುಗಡೆಯಾಯಿತು {#version-110--released-on-2026-04-09}

* ಹೊಸದಾಗಿ: ಅಡ್ಮಿನ್-ಬಾರ್ ಸ್ಟೇಟಸ್ ಇಂಡಿಕೇಟರ್‌ನೊಂದಿಗೆ ಫ್ಲೋಟಿಂಗ್ ಚಾಟ್ ವಿಜೆಟ್ — ಲಾಗ್ ಇನ್ ಆಗಿರುವ ಯಾವುದೇ ಬಳಕೆದಾರರು ಫ್ರಂಟ್ ಎಂಡ್‌ನಿಂದ ನೇರವಾಗಿ ಬ್ರೌಸರ್-ಸೈಡ್ LLM ಗೆ ಪ್ರಾಂಪ್ಟ್ ನೀಡಬಹುದು.
* ಹೊಸದಾಗಿ: SharedWorker ರನ್ಟೈಮ್ — MLC ಎಂಜಿನ್ ಈಗ SharedWorker ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಇದರಿಂದಾಗಿ ಅನೇಕ ಟ್ಯಾಬ್‌ಗಳು ಒಂದೇ GPU ಸೆಷನ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ, ಅದರ ಮೇಲೆ ಸ್ಪರ್ಧಿಸಬೇಕಾಗಿ ಬರುವುದಿಲ್ಲ.
* ಹೊಸದಾಗಿ: apiFetch middleware interceptor — AI Client SDK ಮಾದರಿಯನ್ನು ಹೊಂದಿರುವ WordPress REST ವಿನಂತಿಯನ್ನು (requests) ಸ್ಥಳೀಯ WebLLM ಬ್ರೋಕರ್‌ಗೆ ಪಾರದರ್ಶಕವಾಗಿ (transparently) ಮಾರ್ಗಿಸುತ್ತದೆ, ಇದರಿಂದ loopback HTTP round-trip ಅಗತ್ಯವಿಲ್ಲ.
* ಹೊಸದಾಗಿ: ಚಾಟ್ ವಿಜೆಟ್ ಅನ್ನು ಆನ್/ಆಫ್ ಮಾಡಲು ಮತ್ತು ಆಟೋ-ಪ್ರಾಂಪ್ಟ್ ನಡವಳಿಕೆಯನ್ನು (auto-prompt behaviour) ಕಾನ್ಫಿಗರ್ ಮಾಡಲು Connector ಪ್ಯಾನೆಲ್‌ನಲ್ಲಿ ವಿಜೆಟ್ ಸೆಟ್ಟಿಂಗ್ಸ್ UI.
* ಫಿಕ್ಸ್: IndexedDB cache backend ಅನ್ನುบังคับ ಮಾಡಲಾಗಿದೆ, ಇದರಿಂದಾಗಿ HuggingFace xet CDN રીಡೈರೆಕ್ಟ್‌ಗಳು (redirects) ಕಾರಣದಿಂದಾಗಿ ವಿಫಲವಾದ ಡೀಫಾಲ್ಟ್ Cache API ಪಥದ ಮೂಲಕ ಮಾದರಿ (model) weight ಡೌನ್‌ಲೋಡ್‌ಗಳು ಉಳಿಯುತ್ತವೆ.
* ಫಿಕ್ಸ್: ಎಂಬೆಡಿಂಗ್ ಮಾದರಿಗಳಿಗೆ (embedding models) context_window KV-cache override ಅನ್ನು ಬಿಟ್ಟುಬಿಡಲಾಗಿದೆ (ಅವುಗಳಿಗೆ ಡಿಕೋಡರ್ ಇಲ್ಲ, ಮತ್ತು ಈ override ಕಾರಣದಿಂದ ರನ್ಟೈಮ್ ಎರೆರ್ ಬರ್ತಿತ್ತು).
* ಫಿಕ್ಸ್: ವರ್ಕರ್ ಟ್ಯಾಬ್ ಲೋಡ್ ಆಗುವ ಮೊದಲೇ /webllm/v1/models ನಲ್ಲಿ ಕೋಲ್ಡ್-ಸ್ಟಾರ್ಟ್ ಅಭ್ಯರ್ಥಿ ಮಾದರಿಯನ್ನು ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ, ಇದರಿಂದಾಗಿ SDK ಬಳಕೆದಾರರು ತಕ್ಷಣವೇ ಒಂದು ಮಾದರಿಯನ್ನು ನೋಡಬಹುದು.
* ಫಿಕ್ಸ್: WebLLM ಅನ್ನು wpai_preferred_text_models ಫಿಲ್ಟರ್‌ಗೆ ಹಾಕ್ ಮಾಡಲಾಗಿದೆ, ಇದರಿಂದಾಗಿ ಮಾದರಿಯನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದಾಗ AI Experiments ವೈಶಿಷ್ಟ್ಯವು ಬ್ರೌಸರ್ ಎಂಜಿನ್‌ಗೆ ಮಾರ್ಗಿಸುತ್ತದೆ.
* ಸುಧಾರಣೆ: ಎಂಡ್-ಟು-ಎಂಡ್ ಟೆಸ್ಟಿಂಗ್ ಸಮಯದಲ್ಲಿ Cache-busting, content normalisation, ಮತ್ತು hardware-reference ಫಿಕ್ಸ್ಗಳನ್ನು ಗುರುತಿಸಲಾಯಿತು.

## Version 1.0.0 — ಆರಂಭಿಕ ಬಿಡುಗಡೆ {#version-100--initial-release}
