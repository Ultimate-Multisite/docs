---
title: WebLLM க்கான Ultimate AI Connector Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM மாற்றங்கள் பட்டியல் (Changelog)

## Version 1.1.0 — 2026-04-09 அன்று வெளியிடப்பட்டது

* புதியது: Admin-bar status indicator உடன் மிதக்கும் chat widget — உள்நுழைந்த எந்தப் பயனரும் front end இலிருந்து நேரடியாக browser-side LLM-க்கு prompt கொடுக்க முடியும்.
* புதியது: SharedWorker runtime — MLC engine இப்போது SharedWorker-ல் இயங்குகிறது, இதனால் பல tabs ஒரே GPU session-ஐப் பகிர்ந்து கொள்கின்றன, அதற்குப் பதிலாகப் போட்டியிடுவதில்லை.
* புதியது: apiFetch middleware interceptor — AI Client SDK pattern உடன் பொருந்தும் WordPress REST requests ஆகியவை உள்ளூர் WebLLM broker-க்கு வெளிப்படையாக (transparently) அனுப்பப்படுகின்றன. இதற்கு loopback HTTP round-trip தேவையில்லை.
* புதியது: chat widget-ஐ இயக்கவும், auto-prompt நடத்தையை (behaviour) கட்டமைக்கவும் Connector panel-ல் Widget settings UI சேர்க்கப்பட்டுள்ளது.
* சரிசெய்தல்: இயல்புநிலை Cache API path-ஐ உடைக்கும் HuggingFace xet CDN redirects-ஐ சமாளிக்க IndexedDB cache backend-ஐ கட்டாயமாக்கியது.
* சரிசெய்தல்: embedding models-க்கு context_window KV-cache override-ஐ தவிர்க்கப்பட்டுள்ளது (இவை decoder-ஐ கொண்டிருக்கவில்லை, மேலும் இந்த override ஒரு runtime error-க்கு வழிவகுத்தது).
* சரிசெய்தல்: worker tab ஏற்றப்படுவதற்கு முன்பே, /webllm/v1/models-ல் cold-start candidate model-ஐ அறிவிக்கிறது. இதனால் SDK பயனர்கள் உடனடியாக ஒரு model-ஐப் பார்க்க முடியும்.
* சரிசெய்தல்: AI Experiments feature, model கட்டமைக்கப்படும்போது browser engine-க்கு அனுப்பப்படுவதற்காக WebLLM-ஐ wpai_preferred_text_models filter உடன் இணைத்துள்ளது (Hook).
* மேம்படுத்தப்பட்டது: end-to-end testing-ல் கண்டறியப்பட்ட Cache-busting, content normalisation, மற்றும் hardware-reference சரிசெய்தல்கள் சேர்க்கப்பட்டுள்ளன.

## Version 1.0.0 — ஆரம்ப வெளியீடு
