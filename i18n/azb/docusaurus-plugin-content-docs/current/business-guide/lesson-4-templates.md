---
title: 'Lesson 4: Building Niche Templates'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Ders 4: Niş Şablonlar Oluşturma

Şablonlar, niş değer önerinizin temelini oluşturur. Kaydolup, zaten bir fitness sitesi gibi görünen (ders programları, eğitmen profilleri ve doğru görsellerle) bir site gören bir spor stüdyosu sahibi, boş bir tuvalle karşılaşan birine göre kalma olasılığı çok daha yüksektir.

## Nerede Kalmıştık {#where-we-left-off}

Ultimate Multisite'ı kurup yapılandırdığımız çalışan bir FitSite ağına sahibiz. Şimdi, FitSite'ı fitness işletmeleri için özel yapılmış gibi hissettiren şablonları oluşturacağız.

## Niş Şablonlar Neden Önemli? {#why-niche-templates-matter}

Genel şablonlar, müşterilerinizin zor işi yapmasını gerektirir: hangi sayfalara ihtiyaç duyacaklarını, hangi içerik yapısının işe yaradığını ve bunu sektörlerine uygun nasıl göstereceklerini bulmak. Niş şablonlar bu sürtünmeyi ortadan kaldırır.

FitSite'a kaydolan bir spor stüdyosu sahibi şunları görmelidir:

- Bir fitness stüdyosu web sitesi gibi görünen bir ana sayfa
- Dersler, programlar, eğitmenler ve fiyatlandırma için zaten oluşturulmuş sayfalar
- Sektörlerine uygun görseller ve yer tutucu içerikler
- Profesyonel ve fitness markasına uygun bir tasarım

Onlar sadece detaylarını doldurur. Sıfırdan başlamazlar.

## Şablonlarınızı Planlama {#planning-your-templates}

Oluşturmadan önce, hangi şablonları sunacağınıza karar verin. FitSite için üç tane oluşturacağız:

### Şablon 1: Stüdyo Temel (Studio Essential) {#template-1-studio-essential}

Küçük stüdyolar ve kişisel eğitmenler için.

- Kahraman görseli, ders öne çıkanları ve harekete geçirici mesaj içeren **Ana Sayfa**
- Stüdyo hikayesi ve misyonu içeren **Hakkımızda** sayfası
- Program düzenine sahip **Dersler** sayfası
- Profil kartları içeren **Eğitmenler** sayfası
- Konum haritası ve form içeren **İletişim** sayfası
- Fitness'e uygun renk şemasıyla **temiz, modern bir tasarım**

### Şablon 2: Spor Salonu Pro (Gym Pro) {#template-2-gym-pro}

Daha fazla hizmeti olan köklü spor salonları için.

- Stüdyo Temel'deki her şey, artı:
- Fiyatlandırma tablosu içeren **Üyelik** sayfası
- Tesis fotoğrafları için **Galeri** sayfası
- Fitness ipuçları ve haberler için **Blog** bölümü
- Ana sayfada **Müşteri Yorumları** bölümü
- **Daha belirgin marka** seçenekleri

### Şablon 3: Fitness Zinciri (Fitness Chain) {#template-3-fitness-chain}

Birden fazla lokasyona sahip işletmeler için.

- Spor Salonu Pro'daki her şey, artı:
- Birden fazla tesis listesi içeren **Lokasyonlar** sayfası
- **Şube/lokasyon** alt sayfa şablonu
- Lokasyona özel detaylarla **merkezi marka** yönetimi
- Lokasyonlar arası **personel dizini**

## Bir Şablon Sitesi Oluşturma {#building-a-template-site}

Ultimate Multisite'da bir şablon, yeni müşteri sitelerinin nasıl görünmesini istediğiniz şekilde yapılandırılmış basit bir WordPress sitesidir. İşte nasıl oluşturulacağı:

### Adım 1: Şablon Sitesini Oluşturma {#step-1-create-the-template-site}

1. Ağ yöneticinizde **Siteler > Yeni Ekle** yolunu izleyin.
2. `template-studio-essential` adında bir site oluşturun.
3. Bu site, çalışacağınız tuvaliniz olacak.

### Adım 2: Tema Kurulumu ve Yapılandırması {#step-2-install-and-configure-the-theme}

Şablon sitesi paneline geçin ve:

1. Fitness işletmelerine uygun bir tema etkinleştirin.
2. Tema ayarlarını, renklerini ve tipografisini yapılandırın.
3. Fitness'e uygun navigasyon ile başlık ve altbilgiyi ayarlayın.

:::tip Tema Seçimi
Fitness için güzel görünmesi, ancak müşterilerinizin yönetemeyeceği kadar karmaşık olmaması esnek bir tema seçin. Astra, GeneratePress veya Kadence gibi temalar, hafif, özelleştirilebilir ve iyi desteklendiği için iyi çalışır.
:::

### Adım 3: Sayfaları Oluşturma {#step-3-create-the-pages}

Her sayfayı şunlarla oluşturun:

- Fitness için doğal okunan **yer tutucu içerik** ("Welcome to [Studio Name]" değil, "Lorem ipsum")
- Fitness aktivitelerini gösteren ücretsiz stok fotoğraf sitelerinden **yer tutucu görseller**
- Sayfa oluşturucu veya blok düzenleyici kullanılarak oluşturulmuş **işlevsel düzenler**

Yer tutucu içeriği mümkün olduğunca bilgilendirici yapın. Genel doldurucu metin yerine, şu gibi içerikler yazın: "Burasını stüdyonuzun kısa bir tanımı ve onu özel yapan şeyle değiştirin. Eğitim felsefenizi, deneyim yılınızı veya müşterilerin ne bekleyebileceği hakkında bilgi verin."

### Adım 4: Eklentileri Yapılandırma {#step-4-configure-plugins}

Fitness stüdyolarının ihtiyaç duyduğu eklentileri kurun ve etkinleştirin:

- Bir rezervasyon veya programlama eklentisi (plan katmanınıza bağlıysa)
- Bir iletişim formu eklentisi
- Bir SEO eklentisi (fitness ile ilgili varsayılan ayarlar yapılandırılmış)

### Adım 5: Şablon Olarak İşaretleme {#step-5-mark-as-template}

1. **Ultimate Multisite > Siteler** yolunu izleyin.
2. Şablon sitesini düzenleyin.
3. **Site Şablonu** anahtarını etkinleştirin.

Bu süreci sunmak istediğiniz her şablon için tekrarlayın.

## Şablon Kalite Kontrol Listesi {#template-quality-checklist}

Bir şablonu kullanıma sunmadan önce şunları doğrulayın:

- [ ] Tüm sayfalar doğru yüklüyor ve profesyonel görünüyor
- [ ] Yer tutucu içerik faydalı ve nişe özgü
- [ ] Görseller uygun ve düzgün lisanslanmış
- [ ] Mobil yanıt verme tüm sayfalarda çalışıyor
- [ ] Navigasyon mantıklı ve eksiksiz
- [ ] İletişim formları çalışıyor
- [ ] Bozuk bağlantı veya eksik varlık yok
- [ ] Sayfa yükleme hızı kabul edilebilir

## FitSite Ağı Şu Ana Kadar {#the-fitsite-network-so-far}

```
FitSite Ağı
├── WordPress Multisite (alt alan adı modu)
├── Ultimate Multisite (yapılandırılmış)
├── Wildcard SSL ile Hosting
├── Alan adı eşlemesi yapılandırılmış
├── Site Şablonları
│   ├── Stüdyo Temel (küçük stüdyolar, eğitmenler)
│   ├── Spor Salonu Pro (köklü spor salonları)
│   └── Fitness Zinciri (çok lokasyonlu)
└── Plan yapılandırmasına hazır (bir sonraki ders)
```

## Bu Derste Neler Yaptık {#what-we-built-this-lesson}

- Farklı fitness işletmesi büyüklükleri için tasarlanmış **üç niş şablon**
- Platformu özel yapılmış gibi hissettiren **fitness'e uygun içerik ve görseller**
- Müşterileri özelleştirmede yönlendiren **bilgilendirici yer tutucu içerik**
- Şablonların üretim için hazır olduğunu sağlayan **bir kalite kontrol listesi**

---

**Sonraki:** [Ders 5: Planlarınızı Tasarlama](lesson-5-plans) -- fitness işletmelerinin gerçekte nasıl çalıştığına uyan ürün katmanları oluşturuyoruz.
