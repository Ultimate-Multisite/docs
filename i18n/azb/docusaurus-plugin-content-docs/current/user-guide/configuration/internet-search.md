---
title: Web Search
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet Araması

Gratis AI Agent v1.5.0, konuşma sırasında yapay zeka asistanının web'den güncel bilgi almasını sağlayan bir **İnternet Araması** özelliği ekliyor. Bu özellik, [Brave Search API](https://brave.com/search/api/) veya [Tavily API](https://tavily.com/) kullanılarak güçlendirilmiştir.

## Nasıl Çalışır?

İnternet araması etkinleştirildiğinde, asistan güncel veya harici bilgi gerektiren bir soru tespit ettiğinde, yapılandırdığınız arama sağlayıcısına otomatik olarak sorgu yapabilir — örneğin, son dakika haberleri, canlı fiyatlar veya modelin eğitim kesme tarihinden bu yana değişmiş olabilecek dokümantasyonlar.

Sonuçlar gerçek zamanlı olarak alınır ve yanıt oluşturulmadan önce asistanın bağlamına (context) eklenir. Asistan, bir soruyu yanıtlamak için arama sonuçlarını kullandığını belirtir.

## İnternet Aramasını Etkinleştirme

İnternet araması, seçtiğiniz arama sağlayıcısından bir API anahtarı gerektirir. Yapılandırmak için:

1. **Gratis AI Agent → Ayarlar → Gelişmiş** yolunu izleyin.
2. **İnternet Arama Sağlayıcısı** açılır menüsünü bulun ve ya **Brave Search** ya da **Tavily** seçin.
3. API anahtarınızı ilgili alana girin. Her alanın yanında kayıt olma bağlantıları gösterilir.
4. **Ayarları Kaydet** düğmesine tıklayın.

Anahtar kaydedildikten sonra, İnternet Araması özelliği otomatik olarak asistan için kullanıma hazır olur.

## Brave Search

### Brave Search API Anahtarı Alma

1. [Brave Search API sayfasına](https://brave.com/search/api/) gidin.
2. Bir plan için kaydolun. Aylık istek limitiyle ücretsiz bir katman mevcuttur.
3. API anahtarınızı Brave Search geliştirici kontrol panelinden kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Brave Search API Key** alanına yapıştırın.

### Kullanım Limitleri

Kullanım, yapılan sorgu sayısına göre Brave Search tarafından faturalandırılır. Bir arama tetikleyen her AI yanıtı bir sorgu olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Brave Search geliştirici kontrol panelinde](https://brave.com/search/api/) izleyin.

## Tavily

Superdav AI Agent v1.10.0, daha zengin arama sonuçları ve gelişmiş araştırma yetenekleri sunan alternatif bir internet arama sağlayıcısı olarak **Tavily** ekler.

### Tavily API Anahtarı Alma

1. [Tavily API sayfasına](https://tavily.com/) gidin.
2. Bir hesap için kaydolun. Aylık istek limitiyle ücretsiz bir katman mevcuttur.
3. API anahtarınızı Tavily kontrol panelinden kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Tavily API Key** alanına yapıştırın.

### Kullanım Limitleri

Kullanım, yapılan API çağrısı sayısına göre Tavily tarafından faturalandırılır. Bir arama tetikleyen her AI yanıtı bir çağrı olarak sayılır. Beklenmedik ücretlerden kaçınmak için kullanımınızı [Tavily kontrol panelinde](https://tavily.com/) izleyin.

## İnternet Aramasını Devre Dışı Bırakma

API anahtarını aktif arama sağlayıcısı alanından kaldırın ve kaydedin. İnternet Araması özelliği artık asistan tarafından sunulmayacaktır.

:::note
İnternet araması, asistanın bir yanıt oluşturmadan önce arama sonuçlarını beklemesi gerektiği için yanıt gecikmesine (latency) neden olur. Zamana duyarlı kullanım senaryoları için, gerçek zamanlı aramanın gerekli olup olmadığını veya asistanın yerleşik bilgisinin yeterli olup olmadığını değerlendirmeniz önerilir.
:::
