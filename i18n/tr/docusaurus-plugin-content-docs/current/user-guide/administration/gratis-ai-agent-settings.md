---
title: Gratis AI Agent Ayarları
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Ayarları

Gratis AI Agent içindeki **Settings → Advanced** ekranı, backend entegrasyonları için yönetici düzeyinde yapılandırma sağlar. Bu sayfa geri bildirim yönlendirmeyi, arama sağlayıcısı anahtarlarını, yönetilen Superdav hizmeti kurulumunu, Google Calendar kontrollerini, TextBee SMS ayarlarını ve ağ genelindeki özellik bayraklarını belgeler.

## Ayarlara Erişme {#accessing-settings}

1. WordPress yöneticisinde **Gratis AI Agent → Settings** bölümüne gidin.
2. **Advanced** sekmesine tıklayın.

## Geri Bildirim Endpoint Yapılandırması {#feedback-endpoint-configuration}

Geri bildirim endpoint'i, bir kullanıcı başparmak aşağı düğmesi, otomatik istem banner'ı veya `/report-issue` komutu aracılığıyla geri bildirim gönderdiğinde AI agent'tan POST istekleri alır.

| Alan | Açıklama |
|---|---|
| **Geri Bildirim Endpoint URL'si** | Geri bildirim gönderimlerini JSON gövdesiyle HTTP POST istekleri olarak alan URL. |
| **Feedback API Key** | Her geri bildirim isteğinin `Authorization` header'ında gönderilen bearer token. Endpoint'iniz kimlik doğrulaması gerektirmiyorsa boş bırakın. |

### Beklenen JSON Payload {#expected-json-payload}

Geri bildirim endpoint'iniz en az aşağıdaki alanları içeren bir JSON gövdesini kabul etmelidir:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Konuşma bağlamına bağlı olarak payload içinde ek alanlar bulunabilir.

### `triage_category` Değerleri {#triagecategory-values}

AI triyaj katmanı, payload'u yönlendirmeden önce `triage_category` için aşağıdaki değerlerden birini atar:

| Değer | Anlamı |
|---|---|
| `factual_error` | Asistan yanlış olgusal bilgi sağladı. |
| `unhelpful_answer` | Yanıt teknik olarak doğruydu ancak faydalı değildi. |
| `inappropriate_content` | Yanıt, kullanıcılara gösterilmemesi gereken içerik barındırıyordu. |
| `other` | Geri bildirim bilinen bir kategoriyle eşleşmedi. |

### Kimlik Doğrulama {#authentication}

Endpoint'iniz kimlik doğrulaması gerektiriyorsa **Feedback API Key** alanını bearer token'ınız olarak ayarlayın. Agent şunu gönderir:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** alanı boşsa, hiçbir `Authorization` header gönderilmez.

### Geri Bildirim Toplamayı Devre Dışı Bırakma {#disabling-feedback-collection}

Hem **Geri Bildirim Endpoint URL'si** hem de **Feedback API Key** alanlarını boş bırakın. Başparmak aşağı düğmesi ve geri bildirim UI kullanıcılara görünür kalır, ancak gönderimler herhangi bir harici hizmete yönlendirilmez.

## Brave Search API Key {#brave-search-api-key}

Ayrıca **Advanced** sekmesindeki **Brave Search API Key** alanı, [İnternet Araması](../configuration/internet-search) yeteneğini etkinleştirir.

| Alan | Açıklama |
|---|---|
| **Brave Search API Key** | Brave Search geliştirici Dashboard'undan API anahtarınız. AI asistanında internet aramasını etkinleştirmek için gereklidir. |

Alan etiketi, Brave Search API kayıt sayfasına tıklanabilir bir bağlantı içerir. İnternet aramasını devre dışı bırakmak için boş bırakın.

Bu özellikle ilgili son kullanıcı belgeleri için [İnternet Araması](../configuration/internet-search) bölümüne bakın.

## Yönetilen Superdav Hizmeti {#managed-superdav-service}

Superdav AI Agent v1.18.0, desteklenen siteler için yönetilen Superdav hizmet endpoint'leri ve otomatik bağlantı sağlama ekler. Sitenizin manuel olarak yapılandırılmış bir hizmet endpoint'i yerine barındırılan sağlayıcıya bağlanması gerektiğinde bu kontrolleri kullanın.

| Alan | Açıklama |
|---|---|
| **Yönetilen Superdav Hizmeti** | Desteklenen siteler için barındırılan Superdav hizmet bağlantısını etkinleştirir. |
| **Bağlantı Sağla** | Otomatik endpoint ve kimlik bilgisi sağlamayı başlatır. Site'nin yönetilen sağlayıcıyı kullanması gerektiğini onayladıktan sonra bunu kullanın. |
| **Hizmet Endpoint'i / Bağlantı Durumu** | Sağlamadan sonra geçerli endpoint'i veya bağlantı durumunu gösterir. |

Sağlamadan sonra, ayarları kaydedin ve yönetilen hizmet iş akışlarına güvenmeden önce bağlantı durumunu doğrulayın. Sağlama başarısız olursa, görüntülenen yeniden deneme yönlendirmesini inceleyin ve site'nin barındırılan sağlayıcıyı kullanma iznine sahip olduğunu doğrulayın.

## Google Calendar Yapılandırması {#google-calendar-configuration}

Superdav AI Agent v1.18.0 takvim özellikleri etkinleştirildiğinde, agent yapılandırılmış takvimleri ve etkinlik ayrıntılarını okuyabilir. Takvim araçları okuma odaklıdır ve program farkındalığı olan hatırlatmalar, katılımcı takibi ve kişi eşleştirme için kullanışlıdır.

| Alan | Açıklama |
|---|---|
| **Google Calendar Kimlik Bilgileri** | Takvim verilerini okumak için gereken kimlik bilgilerini veya token bağlantısını saklar. |
| **Takvim Seçimi** | Agent'ın inceleyebileceği yapılandırılmış takvimleri sınırlar. |
| **Takvim Bağlantı Durumu** | Geçerli kimlik bilgilerinin takvimleri ve etkinlikleri okuyup okuyamadığını doğrular. |

Takvim kimlik bilgilerini agent'ın ihtiyaç duyduğu takvimlerle sınırlı tutun. Durum süresi dolmuş bir token gösteriyorsa kimlik bilgilerini yeniden bağlayın veya döndürün.

## TextBee SMS Bildirimleri {#textbee-sms-notifications}

Superdav AI Agent v1.18.0, yapılandırılmış bildirim iş akışları için SMS sağlayıcısı olarak TextBee'yi ekler. SMS bildirimleri, hassas veya kullanıcıya yönelik mesajlar için insan onayı geçitleriyle birlikte kullanılmalıdır.

| Alan | Açıklama |
|---|---|
| **TextBee API Anahtarı** | TextBee SMS sağlayıcısına yapılan isteklerin kimliğini doğrular. |
| **TextBee Cihazı / Gönderen** | Sağlayıcı tarafından gerekli olduğunda, giden mesajlar için kullanılan TextBee gönderenini veya cihazını seçer. |
| **SMS Bildirimleri Etkin** | Onaylanmış iş akışlarının kısa mesaj bildirimleri göndermesine izin verir. SMS gönderimlerini önlemek için devre dışı bırakın. |

Yalnızca yöneticiye ait bir numaraya test mesajı gönderin, ardından zamanlanmış veya katılımcılara yönelik hatırlatmaları etkinleştirmeden önce onay geçidi davranışını doğrulayın.

## Özellik Bayrakları {#feature-flags}

Yine v1.9.0'da tanıtılan **Settings → Feature Flags** sekmesi, isteğe bağlı işlevler için açma/kapatma anahtarları sağlar. Her bayrak ağ genelinde etkin veya devre dışıdır; şu anda site başına geçersiz kılma yoktur.

### Özellik Bayraklarına Erişme {#accessing-feature-flags}

1. WordPress yöneticisinde **Gratis AI Agent → Settings** bölümüne gidin.
2. **Feature Flags** sekmesine tıklayın.

### Erişim Kontrolü Bayrakları {#access-control-flags}

| İşaret | Varsayılan | Açıklama |
|---|---|---|
| **Yöneticilerle Sınırla** | Kapalı | Etkinleştirildiğinde, yalnızca `administrator` rolüne sahip kullanıcılar AI Agent sohbet panelini açabilir. Diğer tüm roller bunun yerine "Yöneticinizle iletişime geçin" mesajını görür. |
| **Network Admins ile Sınırla** | Kapalı | Bir multisite ağında etkinleştirildiğinde, yalnızca Super Admins agent'ı kullanabilir. Tek tek site yöneticileri engellenir. İkisi de etkinse "Yöneticilerle Sınırla" ayarına göre önceliklidir. |
| **Subscriber Erişimine İzin Ver** | Kapalı | Etkinleştirildiğinde, `subscriber` rolüne sahip kullanıcılar sohbet arayüzünü kullanabilir ancak salt okunur yeteneklerle sınırlıdır (gönderi oluşturma veya ayar değişikliği yok). |
| **Üye Olmayanlar İçin Devre Dışı Bırak** | Kapalı | Ultimate Multisite üyelik durumuyla entegre olur. Etkinleştirildiğinde, aktif üyeliği olmayan siteler için sohbet gizlenir. |

### Branding İşaretleri {#branding-flags}

| İşaret | Varsayılan | Açıklama |
|---|---|---|
| **"Powered by Gratis AI Agent" Altbilgisini Gizle** | Kapalı | Sohbet widget'ının altında gösterilen branding atıf satırını kaldırır. White-label dağıtımlar için önerilir. |
| **Özel Agent Adı** | *(boş)* | Sohbet başlığındaki ve admin menüsündeki varsayılan "Gratis AI Agent" etiketini kendi ürün adınızla değiştirir. Varsayılanı kullanmak için boş bırakın. |
| **Agent Seçiciyi Gizle** | Kapalı | Etkinleştirildiğinde, kullanıcılar beş yerleşik agent arasında geçiş yapamaz. Mevcut agent, Ayarlar → Genel bölümünde varsayılan olarak yapılandırılan değere sabitlenir. |
| **Sohbet Avatarı Olarak Site Simgesini Kullan** | Kapalı | Sohbet widget'ı başlığındaki varsayılan AI simgesini WordPress site simgesiyle değiştirir (Görünüm → Özelleştir → Site Kimliği altında ayarlanır). |

### Otomasyon Güvenliği İşaretleri {#automation-safety-flags}

Superdav AI Agent v1.18.0, daha güvenli otomasyon çalıştırmaları için insan onay kapıları ve hatırlatıcı kayıtları sunar. Bu kontroller, kurulu pakete bağlı olarak özellik işaretlerinde veya gelişmiş otomasyon ayarlarında görünebilir.

| İşaret | Varsayılan | Açıklama |
|---|---|---|
| **İnsan Onayı Gerektir** | Açık olması önerilir | Hassas otomasyonları, yetkili bir kullanıcı önerilen eylemi inceleyip onaylayana kadar duraklatır. |
| **Hatırlatıcı Tekilleştirme** | Açık | Yeniden denemelerin veya zamanlanmış çalıştırmaların yinelenen bildirimler göndermemesi için gönderilen hatırlatıcıları kaydeder. |
| **Takvim Araçlarını Etkinleştir** | Yapılandırılana kadar kapalı | Agent'ın yapılandırılmış Google takvimlerini ve etkinliklerini okumasına izin verir. |
| **SMS Bildirimlerini Etkinleştir** | Yapılandırılana kadar kapalı | Kimlik bilgileri kaydedildikten sonra onaylı iş akışlarının TextBee SMS bildirimleri göndermesine izin verir. |

### Değişiklikleri Uygulama {#applying-changes}

Herhangi bir işareti değiştirdikten sonra **Ayarları Kaydet**'e tıklayın. Değişiklikler hemen etkili olur — önbellek temizleme veya plugin'i yeniden etkinleştirme gerekmez.
