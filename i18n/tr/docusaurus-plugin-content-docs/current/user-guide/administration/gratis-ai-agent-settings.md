---
title: Ücretsiz Yapay Zeka Ajanı Ayarları
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Ayarları

Gratis AI Agent'taki **Ayarlar → Gelişmiş** ekranı, v1.5.0 sürümünde tanıtılan arka uç entegrasyonları için yönetici düzeyinde yapılandırma sağlar. Bu sayfa, **Geri Bildirim Uç Noktası** alanlarını ve beklenen formatlarını belgelemektedir.

## Ayarlara Erişim

1. WordPress yöneticisinde, **Gratis AI Agent → Ayarlar** yolunu izleyin.
2. **Gelişmiş** sekmesine tıklayın.

## Geri Bildirim Uç Noktası Yapılandırması

Geri bildirim uç noktası, bir kullanıcı beğenmeme düğmesi, otomatik ipucu banner'ı veya `/report-issue` komutu aracılığıyla geri bildirim gönderdiğinde AI ajanı tarafından POST istekleri alır.

| Alan | Açıklama |
|---|---|
| **Feedback Endpoint URL** | Geri bildirim gönderimlerini JSON gövdesiyle HTTP POST istekleri olarak alan URL. |
| **Feedback API Key** | Her geri bildirim isteğinin `Authorization` başlığında gönderilen bir taşıyıcı (bearer) token. Uç noktanız kimlik doğrulaması gerektirmiyorsa bu alanı boş bırakın. |

### Beklenen JSON Yükü (Payload)

Geri bildirim uç noktanız, en azından aşağıdaki alanları içeren bir JSON gövdesi kabul etmelidir:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Fiyatlandırma hakkındaki cevap yanlış.",
  "triage_category": "factual_error"
}
```

Ek alanlar, konuşma bağlamına bağlı olarak yükte bulunabilir.

### `triage_category` Değerleri

AI triyaj katmanı, yükü iletmeden önce `triage_category` alanına aşağıdaki değerlerden birini atar:

| Değer | Anlamı |
|---|---|
| `factual_error` | Asistan yanlış olgusal bilgi sağlamıştır. |
| `unhelpful_answer` | Yanıt teknik olarak doğru ancak kullanışlı değildir. |
| `inappropriate_content` | Yanıt, kullanıcılara gösterilmemesi gereken içerik içermiştir. |
| `other` | Geri bildirim bilinen bir kategoriye uymamıştır. |

### Kimlik Doğrulama (Authentication)

Uç noktanız kimlik doğrulama gerektiriyorsa, **Feedback API Key** alanına taşıyıcı token'ınızı girin. Ajan şu başlığı gönderir:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** alanı boşsa, herhangi bir `Authorization` başlığı gönderilmez.

### Geri Bildirim Toplamayı Devre Dışı Bırakma

Hem **Feedback Endpoint URL** hem de **Feedback API Key** alanlarını boş bırakın. Beğenmeme düğmesi ve geri bildirim arayüzü kullanıcılara görünür kalır, ancak gönderimler herhangi bir harici servise iletilmez.

## Brave Search API Key

Ayrıca **Gelişmiş** sekmesinde bulunan **Brave Search API Key** alanı, [İnternet Araması](../configuration/internet-search) yeteneğini etkinleştirir.

| Alan | Açıklama |
|---|---|
| **Brave Search API Key** | Brave Search geliştirici kontrol panelinizdeki API anahtarınız. Yapay zeka asistanında internet araması özelliğini etkinleştirmek için gereklidir. |

Alan etiketi, Brave Search API kayıt sayfasına tıklanabilir bir bağlantı içerir. İnternet aramasını devre dışı bırakmak için boş bırakın.

Bu özellik hakkındaki son kullanıcı dokümantasyonu için [İnternet Araması](../configuration/internet-search)'na bakın.

## Özellik Bayrakları (Feature Flags)

v1.9.0 sürümünde de tanıtılan **Ayarlar → Özellik Bayrakları** sekmesi, isteğe bağlı işlevsellikler için açma/kapama düğmeleri sağlar. Her bayrak ağ genelinde ya etkin ya da devre dışıdır; şu anda siteye özel bir geçersiz kılma (override) bulunmamaktadır.

### Özellik Bayraklarına Erişim

1. WordPress yöneticisinde, **Gratis AI Agent → Ayarlar** yolunu izleyin.
2. **Özellik Bayrakları** sekmesine tıklayın.

### Erişim Kontrol Bayrakları

| Bayrak | Varsayılan | Açıklama |
|---|---|---|
| **Restrict to Administrators** | Kapalı | Etkinleştirildiğinde, yalnızca `administrator` rolüne sahip kullanıcılar AI Agent sohbet paneline erişebilir. Diğer tüm roller bunun yerine "Yöneticinizle iletişime geçin" mesajını görür. |
| **Restrict to Network Admins** | Kapalı | Bir multisite ağında etkinleştirildiğinde, yalnızca Süper Yöneticiler ajanı kullanabilir. Bireysel site yöneticileri engellenir. Her ikisi de etkinleştirilirse "Restrict to Administrators" özelliğinin önüne geçer. |
| **Allow Subscriber Access** | Kapalı | Etkinleştirildiğinde, `subscriber` rolündeki kullanıcılar sohbet arayüzünü kullanabilir ancak yalnızca okuma yetenekleriyle sınırlıdır (yazı oluşturma veya ayar değiştirme yapamazlar). |
| **Disable for Non-Members** | Kapalı | Ultimate Multisite üyelik durumu ile entegre olur. Etkinleştirildiğinde, aktif bir üyeliği olmayan siteler için sohbet gizlenir. |

### Markalama (Branding) Bayrakları

| Bayrak | Varsayılan | Açıklama |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Kapalı | Sohbet widget'ının altında gösterilen marka atıf satırını kaldırır. Beyaz etiketli (white-label) dağıtımlar için önerilir. |
| **Custom Agent Name** | *(boş)* | Sohbet başlığındaki ve yönetici menüsündeki varsayılan "Gratis AI Agent" etiketini kendi ürün adınızla değiştirir. Varsayılanı kullanmak için boş bırakın. |
| **Hide Agent Picker** | Kapalı | Etkinleştirildiğinde, kullanıcılar beş yerleşik ajan arasında geçiş yapamaz. Mevcut ajan, Ayarlar → Genel'de varsayılan olarak yapılandırıldığı ajanda sabitlenir. |
| **Use Site Icon as Chat Avatar** | Kapalı | Sohbet widget'ı başlığındaki varsayılan AI simgesini WordPress site simgesiyle (Görünüm → Özelleştir → Site Kimliği altında ayarlanır) değiştirir. |

### Değişiklikleri Uygulama

Herhangi bir bayrağı açıp kapattıktan sonra **Ayarları Kaydet** düğmesine tıklayın. Değişiklikler anında geçerli olur; önbellek temizlemeye veya eklenti yeniden etkinleştirmeye gerek yoktur.
