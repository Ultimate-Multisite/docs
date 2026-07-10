---
title: Ultimate AI Connector פֿאַר WebLLM ענדערונגען־לאָג
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector פֿאַר WebLLM ענדערונג־לאָג {#ultimate-ai-connector-for-webllm-changelog}

## ווערסיע 1.1.0 — אַרויסגעגעבן דעם 2026-04-09 {#version-110--released-on-2026-04-09}

* נײַ: שוועבנדיקער שמועס־ווידזשעט מיט admin-bar סטאַטוס־אינדיקאַטאָר — יעדער איינגעשריבענער באַניצער קען שיקן אַ prompt צום בלעטערער־זײַטיקן LLM גלײַך פֿון דער פראָנט־זײַט.
* נײַ: SharedWorker לויפֿצײַט — דער MLC מאָטאָר לויפֿט איצט אין אַ SharedWorker, אַזוי אַז עטלעכע קוויטלעך טיילן איין GPU סעסיע אַנשטאָט זיך צו שלאָגן דערפֿאַר.
* נײַ: apiFetch middleware ינטערסעפּטאָר — WordPress REST בקשות וואָס פּאַסן צום AI Client SDK מוסטער ווערן דורכזיכטיק גערוטעט צום לאָקאַלן WebLLM broker, אָן אַ נויט אין אַ loopback HTTP round-trip.
* נײַ: ווידזשעט־אײַנשטעלונגען UI אינעם Connector פּאַנעל פֿאַר אָנצוצינדן אָדער אויסצולעשן דעם שמועס־ווידזשעט און קאָנפֿיגורירן auto-prompt אויפֿפֿירונג.
* פֿאַרריכטונג: צווינגען IndexedDB cache backend כּדי מאָדעל־וואָג־אַראָפּלאָדונגען זאָלן איבערלעבן HuggingFace xet CDN ווײַטערפֿירונגען וואָס צעברעכן דעם פעליק־ברירת Cache API וועג.
* פֿאַרריכטונג: איבערשפּרינגען דעם context_window KV-cache override פֿאַר embedding מאָדעלן (זיי האָבן נישט קיין decoder און דער override האָט געפֿירט צו אַ לויפֿצײַט־טעות).
* פֿאַרריכטונג: מעלדן דעם cold-start קאַנדידאַט־מאָדעל אין /webllm/v1/models איידער דער worker קוויטל האָט זיך געלאָדן, אַזוי אַז SDK קאָנסומענטן זעען גלײַך אַ מאָדעל.
* פֿאַרריכטונג: פֿאַרבינדן WebLLM אין דעם wpai_preferred_text_models filter, אַזוי אַז די AI Experiments פֿונקציע רוטעט צום בלעטערער־מאָטאָר ווען אַ מאָדעל איז קאָנפֿיגורירט.
* פֿאַרבעסערט: Cache-busting, אינהאַלט־נאָרמאַליזאַציע, און פֿאַרריכטונגען פֿאַר hardware-reference וואָס זענען אויפֿגעקומען בעת end-to-end טעסטינג.

## ווערסיע 1.0.0 — ערשטע אַרויסגאַבע {#version-100--initial-release}
