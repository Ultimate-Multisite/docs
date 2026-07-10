---
title: İnternet Araması
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet Araması {#internet-search}

Gratis AI Agent v1.5.0, yapay zeka asistanına bir **İnternet Araması** yeteneği ekleyerek, sohbet sırasında web'den güncel bilgilere ulaşmasını sağlar. Bu özellik, [Brave Search API](https://brave.com/search/api/) veya [Tavily API](https://tavily.com/) kullanılarak güçlendirilmiştir.

## Nasıl Çalışır {#how-it-works}

İnternet araması etkinleştirildiğinde, asistan bir sorunun güncel veya harici bilgi gerektirdiğini tespit ettiğinde, yapılandırdığınız arama sağlayıcısını otomatik olarak sorgulayabilir — örneğin, son dakika haberleri, canlı fiyatlar veya modelin eğitim kesme tarihinden bu yana değişmiş olabilecek dokümantasyonlar.

Sonuçlar gerçek zamanlı olarak alınır ve asistan yanıt oluşturmadan önce bağlamına dahil edilir. Asistan, bir soruyu yanıtlamak için arama sonuçlarını kullanıp kullanmadığını belirtir.

## İnternet Aramasını Etkinleştirme {#enabling-internet-search}

İnternet araması, seçtiğiniz arama sağlayıcısından bir API anahtarı gerektirir. Yapılandırmak için:

1. **Gratis AI Agent → Ayarlar → Gelişmiş** yolunu izleyin.
2. **İnternet Arama Sağlayıcısı** açılır menüsünü bulun ve ya **Brave Search** ya da **Tavily** seçin.
3. API anahtarınızı ilgili alana girin. Her alanın yanında kayıt olma bağlantıları görüntülenir.
4. **Ayarları Kaydet** düğmesine tıklayın.

Anahtar kaydedildikten sonra, İnternet Araması yeteneği otomatik olarak asistan için kullanıma hazır olur.

## Brave Search {#brave-search}

### Brave Search API Anahtarı Alma {#obtaining-a-brave-search-api-key}

1. [Brave Search API sayfasına](https://brave.com/search/api/) gidin.
2. Bir plan için kaydolun. Aylık istek limitiyle ücretsiz bir katman mevcuttur.
3. API anahtarınızı Brave Search geliştirici kontrol panelinden kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Brave Search API Key** alanına yapıştırın.

### Kullanım Limitleri {#usage-limits}

Kullanım, yapılan sorgu sayısına göre Brave Search tarafından ücretlendirilir. Bir arama tetikleyen her AI yanıtı bir sorgu olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Brave Search geliştirici kontrol panelinde](https://brave.com/search/api/) izleyin.

## Tavily {#tavily}

Superdav AI Agent v1.10.0, daha zengin arama sonuçları ve gelişmiş araştırma yetenekleri sunan alternatif bir internet arama sağlayıcısı olarak **Tavily** ekler.

### Tavily API Anahtarı Alma {#obtaining-a-tavily-api-key}

1. [Tavily API sayfasına](https://tavily.com/) gidin.
2. Bir hesap için kaydolun. Aylık istek limitiyle ücretsiz bir katman mevcuttur.
3. API anahtarınızı Tavily kontrol panelinden kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Tavily API Key** alanına yapıştırın.

### Kullanım Limitleri {#usage-limits-1}

Kullanım, yapılan API çağrısı sayısına göre Tavily tarafından ücretlendirilir. Bir arama tetikleyen her AI yanıtı bir çağrı olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Tavily kontrol panelinde](https://tavily.com/) izleyin.

## İnternet Aramasını Devre Dışı Bırakma {#disabling-internet-search}

API anahtarını aktif arama sağlayıcısı alanından kaldırın ve kaydedin. İnternet Araması yeteneği artık asistan için sunulmayacaktır.

:::note
İnternet araması, yanıtların oluşturulmasından önce asistanın arama sonuçlarını beklemesi gerektiği için yanıt gecikmesine neden olur. Zamana duyarlı kullanım senaryoları için, gerçek zamanlı aramanın gerekli olup olmadığını veya asistanın yerleşik bilgisinin yeterli olup olmadığını değerlendirin.
:::
