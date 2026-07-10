---
title: VAT ਬਦਲਾਅ ਦਾ ਰਿਕਾਰਡ
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: ਜਰਮਨ (DE) VAT ਨੰਬਰ VIES SOAP ਸੇਵਾ ਵਿੱਚ MS_MAX_CONCURRENT_REQ ਗਲਤੀਆਂ ਕਾਰਨ ਤਸਦੀਕ (validation) ਨਹੀਂ ਹੋ ਰਹੇ ਸਨ। ਜ਼ਿਆਦਾ ਭਰੋਸੇਮੰਦ ਤਸਦੀਕ ਲਈ ਪੁਰਾਣੇ SOAP API ਤੋਂ ਅਧਿਕਾਰਤ EU VIES REST API 'ਤੇ ਬਦਲ ਦਿੱਤਾ ਗਿਆ ਹੈ।
* Fix: ਹੁਣ VIES ਸੇਵਾ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਨਾ ਮੌਜੂਦ ਹੋਣ 'ਤੇ ਵੀ VAT ਨੰਬਰ ਸਵੀਕਾਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਨਾ ਕਿ ਗਲਤੀ ਨਾਲ ਰੱਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ। ਬਾਅਦ ਵਿੱਚ ਸਮੀਖਿਆ ਲਈ ਇੱਕ ਲੌਗ ਐਂਟਰੀ ਬਣਾ ਦਿੱਤੀ ਗਈ ਹੈ।
* Fix: VAT/Tax ID ਫੀਲਡ ਹੁਣ ਸਾਰੇ ਦੇਸ਼ਾਂ ਲਈ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ, ਸਿਰਫ਼ EU ਮੈਂਬਰਾਂ ਲਈ ਨਹੀਂ। ਗੈਰ-EU ਟੈਕਸ ID (ਜਿਵੇਂ ਕਿ ਸਵਿਟਜ਼ CHE ਨੰਬਰ) ਇਨਵੌਇਸ ਡਿਸਪਲੇ ਲਈ ਸਟੋਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਭਾਵੇਂ VIES ਤਸਦੀਕ ਨਾ ਹੋਵੇ।
* Fix: ਗ੍ਰੀਸ (GR), ਮੋਨਾਕੋ (MC), ਅਤੇ ਆਇਲ ਆਫ ਮੈਨ (IM) ਲਈ VAT ਪ੍ਰੀਫਿਕਸ ਲੁੱਕਅਪ ਗਲਤ ਐਰੇ ਲੁੱਕਅਪ ਲੌਜਿਕ ਕਾਰਨ ਟੁੱਟ ਗਿਆ ਸੀ।
* Improvement: ਇੱਕ ਜ਼ਰੂਰੀ ਨਾ ਲੋੜੀਂਦੀ wp-cli-bundle dev dependency ਹਟਾ ਦਿੱਤੀ ਗਈ ਹੈ, ਜੋ Site Exporter addon ਨਾਲ ਵਰਤਣ 'ਤੇ ਫੈਟਲ ਗਲਤੀਆਂ (fatal errors) ਪੈਦਾ ਕਰ ਸਕਦੀ ਸੀ।
* Improvement: ਇੱਕ ਵਿਆਪਕ ਯੂਨਿਟ ਟੈਸਟ ਸੂਟ (53 ਟੈਸਟ) ਜੋੜ ਦਿੱਤਾ ਗਿਆ ਹੈ।

Version 1.0.6 - Released on 2026-01-25

* Fix: ਘਰੇਲੂ B2B ਲੈਣ-ਦੇਣ ਹੁਣ ਸਹੀ ਤਰ੍ਹਾਂ VAT ਲਗਾਉਂਦੇ ਹਨ। EU VAT ਨਿਯਮਾਂ ਅਨੁਸਾਰ, ਰਿਵਰਸ ਚਾਰਜ ਸਿਰਫ਼ ਸਰਹੱਦੀ B2B ਲੈਣ-ਦੇਣ 'ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ, ਨਾ ਕਿ ਜਦੋਂ ਗਾਹਕ ਦਾ ਦੇਸ਼ ਕੰਪਨੀ ਦੇ ਦੇਸ਼ ਨਾਲ ਮਿਲਦਾ ਹੈ।

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon ਲੋਡ ਨਹੀਂ ਹੋ ਰਿਹਾ ਜਾਂ ਸਹੀ ਢੰਗ ਨਾਲ ਕੰਮ ਨਹੀਂ ਕਰ ਰਿਹਾ।
* Change: ਵਧੇਰੇ ਭਰੋਸੇਮੰਦ ਅਤੇ ਸਰਗਰਮੀ ਨਾਲ维护 ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਡੇਟਾ ਲਈ VAT ਰੇਟ ਡਾਟਾ ਸਰੋਤ ਨੂੰ euvatrates.com ਤੋਂ ibericode/vat-rates repository 'ਤੇ ਬਦਲ ਦਿੱਤਾ ਗਿਆ ਹੈ।
* Fix: super_reduced_rates option value ਵਿੱਚ ਟਾਈਪੋ (typo) ਨੂੰ ਸੁਧਾਰਿਆ ਗਿਆ ਹੈ।
* Improvement: ਗਲਤੀਆਂ ਨੂੰ ਰੋਕਣ ਲਈ ਦੇਸ਼ ਕੋਡ (country code) ਹੈਂਡਲਿੰਗ ਲਈ null checks ਜੋੜੇ ਗਏ ਹਨ।
* Change: Traduttore ਰਾਹੀਂ ਆਟੋਮੈਟਿਕ ਅਪਡੇਟ ਦੇ ਹੱਕ ਵਿੱਚ ਬੰਡਲ ਕੀਤੇ ਟ੍ਰਾਂਸਲੇਸ਼ਨ ਫਾਈਲਾਂ ਹਟਾ ਦਿੱਤੀਆਂ ਗਈਆਂ ਹਨ।

Version: 1.0.3 - Released on 2025-09-28

* Prefix ਦਾ ਨਾਮ ultimate-multisite ਕੀਤਾ ਗਿਆ; text domain ਨੂੰ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ; version bump।

Version 1.0.0-beta.4 - 2021-09-24

* Added: mu-plugins based setups ਲਈ filter wp_ultimo_skip_network_active_check;

Version 1.0.0 - 05/08/2021 - Initial Release
