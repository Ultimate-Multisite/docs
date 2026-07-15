---
title: WebLLM සඳහා Ultimate AI Connector වෙනස්කම් සටහන
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# WebLLM සඳහා Ultimate AI Connector වෙනස්කම් ලේඛනය

## අනුවාදය 1.1.0 — 2026-04-09 දින නිකුත් කරන ලදී {#version-110--released-on-2026-04-09}

* නව: admin-bar තත්ත්ව දර්ශකයක් සහිත පාවෙන සංවාද widget — ලොග් වී ඇති ඕනෑම පරිශීලකයෙකුට ඉදිරි අග්‍රයෙන් සෘජුවම browser-side LLM වෙත prompt කළ හැක.
* නව: SharedWorker ධාවන පරිසරය — MLC engine දැන් SharedWorker එකක ධාවනය වන නිසා tabs කිහිපයක් එකිනෙකට තරඟ කිරීම වෙනුවට එක් GPU සැසියක් බෙදා ගනී.
* නව: apiFetch middleware interceptor — AI Client SDK රටාවට ගැළපෙන WordPress REST ඉල්ලීම් loopback HTTP round-trip එකක් අවශ්‍ය නොවී විනිවිද ලෙස ස්ථානීය WebLLM broker වෙත යොමු කෙරේ.
* නව: chat widget සක්‍රිය/අක්‍රිය කිරීමට සහ auto-prompt හැසිරීම වින්‍යාස කිරීමට Connector panel තුළ Widget settings UI.
* නිවැරදි කිරීම: පෙරනිමි Cache API මාර්ගය බිඳ දමන HuggingFace xet CDN redirects පසුකරත් model weight downloads පවතින ලෙස IndexedDB cache backend බලෙන් භාවිත කිරීම.
* නිවැරදි කිරීම: embedding models සඳහා context_window KV-cache override මඟහැරීම (ඒවාට decoder එකක් නොමැති අතර override එක runtime error එකක් ඇති කළේය).
* නිවැරදි කිරීම: worker tab පූරණය වීමට පෙර /webllm/v1/models තුළ cold-start candidate model ප්‍රචාරය කිරීම, එවිට SDK පරිභෝගිකයන්ට වහාම model එකක් පෙනේ.
* නිවැරදි කිරීම: model එකක් වින්‍යාස කර ඇති විට AI Experiments විශේෂාංගය browser engine වෙත යොමු වන පරිදි WebLLM wpai_preferred_text_models filter එකට සම්බන්ධ කිරීම.
* වැඩිදියුණු කරන ලදී: අවසානයෙන් අවසානයට පරීක්ෂණ අතරතුර මතු වූ cache-busting, content normalisation, සහ hardware-reference නිවැරදි කිරීම්.

## අනුවාදය 1.0.0 — ආරම්භක නිකුතුව {#version-100--initial-release}
