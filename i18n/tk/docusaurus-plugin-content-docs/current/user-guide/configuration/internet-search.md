---
title: İnternet gözlemi
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet Arama

Gratis AI Agent v1.5.0, sohbet sırasında yapay zeka asistanının webden güncel bilgi almasını sağlayan bir **İnternet Araması** özelliğini ekler. Bu özellik [Brave Search API](https://brave.com/search/api/) veya [Tavily API](https://tavily.com/) ile desteklenir.

## Nasıl Çalışır {#how-it-works}

İnternet araması etkinleştirildiğinde, asistan bir sorunun güncel veya harici bilgi gerektirdiğini tespit ettiğinde, yapılandırdığınız arama sağlayıcısını otomatik olarak sorgulayabilir — örneğin, son haberler, canlı fiyatlar veya modelin eğitim kesintilerinden bu yana değişmiş olabilecek dokümantasyon.

Sonuçlar gerçek zamanlı olarak alınır ve asistan bir yanıt üretmeden önce bağlamına eklenir. Asistan, bir soruyu yanıtlamak için arama sonuçlarını kullandığını belirttiğinde bunu gösterir.

## İnternet Aramasını Etkinleştirme {#enabling-internet-search}

İnternet araması, seçtiğiniz arama sağlayıcısından bir API anahtarı gerektirir. Yapılandırmak için:

1. **Gratis AI Agent → Settings → Advanced** (Ayarlar → Gelişmiş) bölümüne gidin.
2. **Internet Search Provider** (İnternet Arama Sağlayıcısı) açılır menüsünü bulun ve ya **Brave Search**'ü ya da **Tavily**'yi seçin.
3. API anahtarınızı ilgili alana girin. Her alanın yanında kayıt olma bağlantıları gösterilir.
4. **Save Settings** (Ayarları Kaydet) butonuna tıklayın.

Anahtar kaydedildikten sonra, İnternet Araması yeteneği asistan için otomatik olarak kullanılabilir hale gelir.

## Brave Search {#brave-search}

### Brave Search API Anahtarı Alma {#obtaining-a-brave-search-api-key}

1. [Brave Search API sayfasını](https://brave.com/search/api/) ziyaret edin.
2. Bir plan için kaydolun. Aylık istek limiti olan ücretsiz bir katman mevcuttur.
3. Brave Search geliştirici panelinden API anahtarınızı kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Brave Search API Key** alanına yapıştırın.

### Kullanım Limitleri {#usage-limits}

Kullanım Brave Search tarapyndan sorulan soruların sayyna görä toplanýar. Her bir AI jogabyň tapawudy bilen bir sorag hasaplanýar. Kynçylykly ýazgylaryň öňü çykmasy üçin [Brave Search developer dashboard](https://brave.com/search/api/) arkaly kulumyzy izleň.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 **Tavily**ni başga internet tarapyndan tapmak üçin alternatiw hökmünde goşdirýär, ol has giňişleýin tapawutlar we öňdebaryjy barlag ýetliklerini teklip edýär.

### Tavily API açaryny almak {#obtaining-a-tavily-api-key}

1. [Tavily API səhime](https://tavily.com/) girmegiňiz üçin gitdirin.
2. Hasaba goşmak üçin ýa-da bejisy (free tier) bar, bu aýlyk soňky soraçylyk meýilini berýär.
3. API açaryny Tavily dashboardyndan kopyalaň.
4. Onu Gratis AI Agent sozlamalaryndaky **Tavily API Key** ulanylyp biljek ulgamynda ýapyp goýuň.

### Kulum çykaryşlary {#usage-limits-1}

Kullanım Tavily tarapyndan edilýän API çağırma soraçylyk sayyna görä toplanýar. Tapawudy tetiklemek üçin her bir AI jogaby bir çağırma hasaplanýar. Kynçylykly ýazgylaryň öňü çykmasy üçin [Tavily dashboardy](https://tavily.com/) arkaly kulumyzy izleň.

## Internet tarapyndan tapmagy we özüni wepaly etmek {#disabling-internet-search}

API açaryny işje edýän internet tarapyndan tapmak bilen aktiv tapawutlydyrden çykaryjy ulgamyndan almak we saklaň. Bu wagtda asistan üçin Internet Search ukyby teklip edilmez.

:::note
Internet tarapdan tapmak jogaby döredijiden öň tapawutlary hasaplaýar, sebäbi asistan tapawudy berenden soň jogab bermekde gözden geçirmegi gerekdir. Wagtly meseleler üçin gerçemlik wagtda tapmagy zerurmy ýa-da asistan üçin ýeterlik bilimi bar bolsa barlap görüň.
:::
