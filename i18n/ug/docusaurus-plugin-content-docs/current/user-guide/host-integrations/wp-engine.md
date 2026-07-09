---
title: WP Engine تكامل
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integrasi {#wp-engine-integration}

## Genel Bakış {#overview}
WP Engine, WordPress siteleri için optimize edilmiş performans, güvenlik ve ölçeklenebilirlik sağlayan premium yönetilen WordPress hosting platformudur. Bu entegrasyon, Ultimate Multisite ile WP Engine arasında otomatik alan adı senkronizasyonu sağlar.

## Özellikler {#features}
- Otomatik alan adı senkronizasyonu
- Çoklu site kurulumları için alt alan adı desteği
- WP Engine'in mevcut sistemleriyle sorunsuz entegrasyon

## Gereksinimler {#requirements}
Bu entegrasyon, hostinginizin WP Engine üzerinde olup olmadığını otomatik olarak algılar ve yerleşik WP Engine API'sini kullanır. WP Engine eklentisi aktif ve doğru yapılandırılmışsa ek bir ayarlama yapmanıza gerek yoktur.

Ancak, entegrasyonu manuel olarak yapılandırmanız gerekiyorsa, `wp-config.php` dosyanızda bu sabitlerden birini tanımlayabilirsiniz:

```php
define('WPE_APIKEY', 'your_api_key'); // Tercih edilen yöntem
// VEYA
define('WPE_API', 'your_api_key'); // Alternatif yöntem
```

## Kurulum Talimatları {#setup-instructions}

### 1. WP Engine Eklentisini Doğrulayın {#1-verify-wp-engine-plugin}

WP Engine üzerinde barındırıyorsanız, WP Engine eklentisinin zaten kurulu ve etkin olması gerekir. Şunları kontrol edin:

1. WP Engine eklentisinin aktif olduğundan emin olun
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` dosyasının varlığını kontrol edin

### 2. Entegrasyonu Etkinleştirin {#2-enable-the-integration}

1. WordPress yönetici panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşlemesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin
4. WP Engine entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu {#domain-syncing}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı WP Engine kurulumunuza eklemek için WP Engine API'sini kullanır
2. WP Engine alan adı yapılandırmasını ve SSL sertifikası verme işlemini yönetir
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon o alanı WP Engine'den kaldıracaktır

### Alt Alan Adı Desteği {#subdomain-support}

সাবডোমেইন মাল্টিসাইট ইনস্টলেশনগুলির জন্য:

১. নতুন সাইট তৈরি করার সময় এই ইন্টিগ্রেশন প্রতিটি সাবডোমেইনকে WP Engine-এ যোগ করে।
২. WP Engine সাবডোমেইনের কনফিগারেশন পরিচালনা eder (handle eder)।
৩. যখন একটি সাইট মুছে ফেলা হয়, তখন এই ইন্টিগ্রেশনটি সেই সাবডোমেইনটিকে WP Engine থেকে সরিয়ে দেবে।

## গুরুত্বপূর্ণ নোটসমূহ {#important-notes}

### ওয়াইল্ডকার্ড ডোমেইন (Wildcard Domains) {#wildcard-domains}

সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের জন্য, আমরা WP Engine সাপোর্ট দলের সাথে যোগাযোগ করে একটি ওয়াইল্ডকার্ড ডোমেইন কনফিগারেশন চাইতে পরামর্শ দিচ্ছি। এর ফলে আপনাকে প্রতিটি সাবডোমেইন আলাদাভাবে যোগ করার প্রয়োজন হবে না এবং সব সাবডোমেইন স্বয়ংক্রিয়ভাবে কাজ করবে।

### SSL সার্টিফিকেট (SSL Certificates) {#ssl-certificates}

এই ইন্টিগ্রেশনের মাধ্যমে যোগ করা সমস্ত ডোমেইনের জন্য WP Engine স্বয়ংক্রিয়ভাবে SSL সার্টিফিকেট ইস্যু এবং নবায়ন পরিচালনা করে। এর জন্য কোনো অতিরিক্ত কনফিগারেশনের প্রয়োজন নেই।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API সংযোগের সমস্যা (API Connection Issues) {#api-connection-issues}
- নিশ্চিত করুন যে WP Engine প্লাগইনটি সক্রিয় আছে এবং সঠিকভাবে কনফিগার করা হয়েছে।
- আপনি যদি ম্যানুয়ালি API কী সেট করে থাকেন, তবে সেটি সঠিক কিনা তা পরীক্ষা করুন।
- যদি API নিয়ে আপনার কোনো সমস্যা হয় তবে WP Engine সাপোর্টের সাথে যোগাযোগ করুন।

### ডোমেইন যোগ না হওয়া (Domain Not Added) {#domain-not-added}
- যেকোনো ত্রুটি বার্তা আছে কিনা তা দেখতে Ultimate Multisite লগগুলি পরীক্ষা করুন।
- নিশ্চিত করুন যে ডোমেইনটি ইতিমধ্যেই WP Engine-এ যোগ করা নেই।
- নিশ্চিত করুন যে আপনার WP Engine প্ল্যান আপনি যে সংখ্যক ডোমেইন যোগ করছেন তার সমর্থন করে।

### সাবডোমেইন সংক্রান্ত সমস্যা (Subdomain Issues) {#subdomain-issues}
- যদি সাবডোমেইন কাজ না করে, তবে ওয়াইল্ডকার্ড ডোমেইন কনফিগারেশন চাওয়ার জন্য WP Engine সাপোর্টের সাথে যোগাযোগ করুন।
- মূল ডোমেইন এবং সাবডোমেইনের জন্য আপনার DNS সেটিংস সঠিকভাবে কনফিগার করা আছে কিনা তা যাচাই করুন।
