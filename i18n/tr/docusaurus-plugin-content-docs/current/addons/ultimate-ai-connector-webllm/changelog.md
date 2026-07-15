---
title: Ultimate AI Connector for WebLLM Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector WebLLM Değişiklik Günlüğü

## Version 1.1.0 — Yayınlanma Tarihi: 2026-04-09 {#version-110--released-on-2026-04-09}

* Yeni: Yönetici çubuğu durum göstergeli yüzen sohbet widget'ı — Giriş yapmış herhangi bir kullanıcı, tarayıcı tabanlı LLM'e doğrudan ön uçtan komut verebilir.
* Yeni: SharedWorker çalışma zamanı — MLC motoru artık bir SharedWorker içinde çalıştığı için, birden fazla sekme GPU oturumu için birbirleriyle mücadele etmek yerine tek bir oturumu paylaşır.
* Yeni: apiFetch middleware kesici (interceptor) — AI Client SDK desenine uyan WordPress REST istekleri, döngü geri HTTP turuna gerek kalmadan şeffaf bir şekilde yerel WebLLM broker'ına yönlendirilir.
* Yeni: Widget ayarları arayüzü — Sohbet widget'ını açıp kapatmak ve otomatik komut (auto-prompt) davranışını yapılandırmak için Connector panelinde ayarlar.
* Düzeltme: Model ağırlığı indirmelerinin, varsayılan Cache API yolunu bozan HuggingFace xet CDN yönlendirmelerine karşı dayanması için IndexedDB önbellek arka ucunu zorlama.
* Düzeltme: Gömme (embedding) modelleri için context_window KV-cache geçersiz kılmayı atlama (bu modellerin bir çözücüsü (decoder) olmadığı ve bu geçersiz kılmanın çalışma zamanı hatasına neden olduğu tespit edildi).
* Düzeltme: SDK kullanıcılarının bir modeli hemen görmesi için, worker sekmesi yüklenmeden önce soğuk başlangıç adayı modeli'ni /webllm/v1/models adresinde duyurma.
* Düzeltme: WebLLM'i wpai_preferred_text_models filtresine bağlayarak, bir model yapılandırıldığında Yapay Zeka Deneyleri özelliğinin tarayıcı motoruna yönlendirilmesini sağlama.
* Geliştirildi: Uçtan uca testler sırasında ortaya çıkan önbellek bozan (cache-busting), içerik normalleştirme ve donanım referansı düzeltmeleri.

## Version 1.0.0 — İlk Yayın {#version-100--initial-release}
