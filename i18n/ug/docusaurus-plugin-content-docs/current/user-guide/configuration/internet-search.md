---
title: İnternet Qaraqı
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet Araması

Gratis AI Agent v1.5.0, sohbet sırasında yapay zekanın web'den güncel bilgi almasını sağlayan bir **İnternet Araması** yeteneği ekler. Bu özellik [Brave Search API](https://brave.com/search/api/) veya [Tavily API](https://tavily.com/) ile desteklenir.

## Nasıl Çalışır?

İnternet araması etkinleştirildiğinde, asistan bir soru için güncel veya harici bilgi gerektiğine karar verdiğinde, yapılandırdığınız arama sağlayıcısını otomatik olarak sorgulayabilir. Örneğin, son haberler, canlı fiyatlar veya modelin eğitim kesintilerinden bu yana değişmiş olabilecek dokümantasyon gibi durumlar için bunu yapar.

Sonuçlar gerçek zamanlı olarak alınır ve asistan bir yanıt üretmeden önce bağlamına eklenir. Asistan, bir soruyu cevaplamak için arama sonuçlarını kullandığını belirttiğinde size bildirir.

## İnternet Aramasını Etkinleştirme

İnternet araması, seçtiğiniz arama sağlayıcısından bir API anahtarı gerektirir. Yapılandırmak için:

1. **Gratis AI Agent → Settings → Advanced** (Ayarlar → Gelişmiş) bölümüne gidin.
2. **Internet Search Provider** (İnternet Araması Sağlayıcısı) açılır menüsünü bulun ve ya **Brave Search** ya da **Tavily**'yi seçin.
3. API anahtarınızı ilgili alana girin. Her alanın yanında kayıt olma bağlantıları gösterilir.
4. **Save Settings** (Ayarları Kaydet) butonuna tıklayın.

Anahtar kaydedildikten sonra, İnternet Araması yeteneği asistan için otomatik olarak kullanılabilir hale gelir.

## Brave Search

### Brave Search API Anahtarı Alma

1. [Brave Search API sayfasını](https://brave.com/search/api/) ziyaret edin.
2. Bir plan için kaydolun. Aylık istek limiti olan ücretsiz bir katman mevcuttur.
3. Brave Search geliştirici panelinden API anahtarınızı kopyalayın.
4. Bunu Gratis AI Agent ayarlarındaki **Brave Search API Key** alanına yapıştırın.

### Kullanım Limitleri

استخدام برايف سرچ (Brave Search) تعداد sorğulara qarab toqiydiriladi. Her bir AI cavabı sorğu sayar. Siz gözlənilməz yüklərimdən çəkinmək üçün [Brave Search developer dashboard](https://brave.com/search/api/) içində istifadəni izləyin.

## Tavily

Superdav AI Agent v1.10.0 **Tavily**-ni alternativ internet axtarış provayderi kimi əlavə edir, bu da daha zəngin axtarış nəticələri və üstün tədqiqat imkanları təklif edir.

### Tavily API Açarı Almaq

1. [Tavily API səhifəsinə](https://tavily.com/) daxil olun.
2. Hesab açın. Aylıq sorğu limiti olan pulsuz səviyyə mövcuddur.
3. Tavily dashboard-undan API açarınızı kopyalayın.
4. Onu Gratis AI Agent ayarlarındakı **Tavily API Key** sahəsinə yapışdırın.

### İstifadə Limitləri

İstifadə, Tavily tərəfindən edilən API çağırış sayına əsasən yüklənir. Axtarışı başlatan hər bir AI cavabı bir çağırış kimi hesab olunur. Gözlənilməz yüklərimdən çəkinmək üçün [Tavily dashboard](https://tavily.com/) içində istifadəni izləyin.

## İnternet Axtarışını Bağlamaq

API açarını aktiv axtarış provayderi sahəsindən silin və yadda saxlayın. Bu zaman köməkçiyə İnternet Axtarışı imkanı təklif edilməyəcək.

:::note
İnternet axtarışı cavab yaratmadan əvvəl axtarış nəticələri üçün gözləməli olduğu üçün cavablara gecikmə (latency) əlavə edir. Vaxta həssas istifadə halları üçün real-time axtarışın lazım olub olmadığını və ya köməkçinin daxili biliklərinin kifayət edib etməyəcəyi barədə düşünün.
:::
