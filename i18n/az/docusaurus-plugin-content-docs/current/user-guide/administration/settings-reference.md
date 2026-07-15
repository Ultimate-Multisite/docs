---
title: Parametrlər üzrə arayış
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Ayarlar arayışı

Bu səhifə Ultimate Multisite-də gündəlik idarəetməyə təsir edən ayarları və son davranış dəyişikliklərini izləyir.

## Digər seçimlər {#other-options}

**Digər seçimlər** sahəsi **Ultimate Multisite > Ayarlar > Giriş və qeydiyyat** altında görünür.

| Ayar | Təsvir |
|---|---|
| **Jumper-i aktivləşdir** | Admin sahəsində Jumper sürətli naviqasiya alətini göstərir. Ondan birbaşa Ultimate Multisite ekranlarına, şəbəkə obyektlərinə və dəstəklənən admin təyinatlarına keçmək üçün istifadə edin. Bu qısayolun görünməsini istəmirsinizsə, onu deaktiv edin. |

## Xəta hesabatı və telemetriya {#error-reporting-and-telemetry}

Əvvəlki xəta hesabatına qoşulma ayarı ayarlar səhifəsindən silinib. Anonim telemetriya deaktivdir və onu aktivləşdirmək üçün heç bir UI açarı yoxdur.

Ayarlar səhifəsi üçün daxili runbook-lar və ya ekran görüntüləri saxlayırsınızsa, köhnə xəta hesabatına qoşulma sahəsinə istinadları silin ki, administratorlar artıq mövcud olmayan ayarı axtarmasınlar.

## Import/Export ayarları {#importexport-settings}

**Import/Export** ayarları tabı hansı ayarları idarə etdiyini təsvir edir və sayt və şəbəkə arxivləri üçün birbaşa **Ultimate Multisite > Site Export** bölməsinə keçid verir. Import/export konfiqurasiyası üçün ayarlar tabından istifadə edin, tək saytlı export/import iş axını üçün **Alətlər > Export & Import** bölməsindən istifadə edin və tam Network Export arxivi lazım olduqda Site Export alətindən istifadə edin.

## Domain Seller HostAfrica balans xəbərdarlığı {#domain-seller-hostafrica-balance-warning}

Domain Seller addon-u HostAfrica-ya qoşulduqda, şəbəkə administratorları reseller hesab balansı etibarlı domen qeydiyyatı və ya yenilənmə emalı üçün çox aşağı olduqda bağlana bilən aşağı balans xəbərdarlığı görürlər.

Bu bildirişi əməliyyat xəbərdarlığı kimi qəbul edin: daha çox ödənişli domen qeydiyyatını qəbul etməzdən əvvəl HostAfrica reseller balansını artırın, sonra qeydiyyatların və yenilənmələrin normal davam edə bildiyini təsdiqləmək üçün Domain Seller ayarlarına və ya domen monitorinqi ekranına qayıdın.

## AI provider konnektor ayarları {#ai-provider-connector-settings}

AI provider konnektor ayarları indi yalnız dəstəklənən OAuth Account hovuzlarını göstərir:

| Provider | Quraşdırma axını |
|---|---|
| **Anthropic Max** | OAuth düyməsi ilə bir və ya daha çox Anthropic Max Account-u qoşun. Sandbox edilmiş brauzer yönləndirməni avtomatik tamamlaya bilmədikdə manual OAuth ehtiyat yolundan istifadə edin. |
| **OpenAI ChatGPT/Codex** | Eyni OAuth hovuzu iş axını vasitəsilə ChatGPT Account-larını qoşun. Konnektor tərəfindən dəstəklənən əməliyyatlar Account qoşulduqdan sonra ChatGPT Codex alət çağırışlarından istifadə edə bilər. |
| **Google AI Pro** | Google AI Pro Account-larını OAuth vasitəsilə qoşun, sonra Account siyahısı dərhal yenilənməzsə, konnektoru yeniləyin. |

Cursor Pro artıq dəstəklənən provider deyil. Cursor Pro quraşdırma sahələrini və ya konnektor yollarını qeyd edən köhnə daxili ekran görüntülərini, runbook-ları və ya onboarding addımlarını silin.

Provider Account-larını əlavə edərkən və ya silərkən yenilənən və ya silinən Account üçün etibarlı e-poçt ünvanı daxil edin və konnektor tərəfindən dəstəklənən əməliyyatları test etməzdən əvvəl provider ayarlarını yadda saxlayın.
