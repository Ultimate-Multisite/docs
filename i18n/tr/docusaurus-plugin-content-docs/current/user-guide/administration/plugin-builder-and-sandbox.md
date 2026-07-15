---
title: Eklenti Oluşturucu ve Kum Havuzu
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Oluşturucu ve Sandbox

Gratis AI Agent v1.5.0, **Plugin Oluşturucu ve Sandbox Sistemi**'ni tanıtıyor. Bu sistem sayesinde yapay zeka asistanı, ağınızdaki WordPress eklentilerini güvenli, izole bir sandbox ortamı üzerinden oluşturabilir, etkinleştirebilir ve yönetebilir.

## Genel Bakış {#overview}

Plugin Oluşturucu, yapay zeka asistanının doğal dil isteklerine yanıt olarak özel WordPress eklentileri yazmasına olanak tanır. Oluşturulan eklentiler, canlı site işlevselliğini etkilemeden önce bir sandbox katmanı içinde doğrulanır, depolanır ve etkinleştirilir.

Kullanım senaryoları şunları içerir:

- Geliştirici müdahalesi olmadan hafif yardımcı eklentiler oluşturmak.
- WordPress hook'ları veya özel gönderi türleri gerektiren özellikleri prototiplemek.
- Toplu işlemler için kısa ömürlü otomasyon betikleri oluşturmak.

## Yapay Zeka ile Eklenti Oluşturma {#generating-a-plugin-via-ai}

Bir eklenti oluşturmak için Gratis AI Agent sohbet arayüzünü açın ve neye ihtiyacınız olduğunu açıklayın. Örneğin:

> "Dashboard'da özel bir yönetici bildirimi ekleyen bir eklenti oluştur."

Yapay zeka şunları yapacaktır:

1. Yapılandırılmış kod oluşturma kullanarak eklenti PHP kodunu üretir.
2. Çıktıyı sözdizimi hataları ve güvensiz kalıplar açısından doğrular.
3. Oluşturulan eklentiyi sandbox deposuna kaydeder.
4. Eklenti slug'ı ve bir **Sandbox'ta Etkinleştir** düğmesi ile bir onay mesajı döndürür.

Etkinleştirmeden önce sonucu, aynı konuşma dizisinde takip ederek iyileştirebilirsiniz.

## Sandbox Etkinleştirme {#sandbox-activation}

Oluşturulan bir eklentiyi sandbox'ta etkinleştirmek, onu canlı ağda etkinleştirmekten farklıdır. Sandbox:

- Eklentiyi izole bir WordPress ortamında (wp-env) çalıştırır.
- Herhangi bir PHP hatasını, uyarısını veya hook çakışmasını yakalar.
- Etkinleştirme sonucunu sohbet arayüzünde raporlar.

Bir eklentiyi sandbox'ta etkinleştirmek için, AI sohbet yanıtındaki **Sandbox'ta Etkinleştir** düğmesine tıklayın veya şu komutu kullanın:

```
/activate-plugin <plugin-slug>
```

Bir durum mesajı, etkinleştirmenin başarılı olup olmadığını veya başarısız olduğunu onaylar. Başarısız olursa, hata günlüğü sohbet dizininde görüntülenir.

## Oluşturulan Eklentileri Yönetme {#managing-generated-plugins}

Oluşturulan eklentiler **Gratis AI Agent → Plugin Builder → Manage Plugins** bölümünde listelenir. Bu ekrandan şunları yapabilirsiniz:

| İşlem | Açıklama |
|---|---|
| **Source'u Görüntüle** | Tüm eklenti PHP kodunu inceleyin. |
| **Sandbox'ta Yeniden Etkinleştir** | Sandbox etkinleştirme kontrolünü yeniden çalıştırın. |
| **Ağa Kur** | Eklentiyi canlı ağa dağıtın (manuel onay gerektirir). |
| **Güncelle** | AI aracılığıyla yeni bir sürüm sağlayarak mevcut kodu değiştirin. |
| **Sil** | Eklentiyi sandbox deposundan kaldırır. Önce tüm sitelerden devre dışı bırakır. |

:::warning
**Ağa Kur** işlemi, oluşturulan eklentiyi canlı WordPress multisite'ınıza dağıtır. Devam etmeden önce eklenti kodunu gözden geçirin. Gratis AI Agent, canlı bir kurulumu tamamlamadan önce onay isteyecektir.
:::

## Oluşturulan Bir Eklentiyi Ağa Kurma {#installing-a-generated-plugin-on-the-network}

Sandbox'ta test ettiğiniz bir eklentiden memnun kaldığınızda, onu canlı ağa kurabilirsiniz:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** bölümüne gidin.
2. Dağıtmak istediğiniz eklentinin yanındaki **Install on Network** düğmesine tıklayın.
3. Diyaloğu onaylayın. Eklenti `wp-content/plugins/` dizinine kurulur ve ağ düzeyinde etkinleştirilir.

Alternatif olarak, sohbet arayüzünde şu komutu kullanın:

```
/install-plugin <plugin-slug>
```

## Eklenti Güncellemeleri {#plugin-updates}

Oluşturulan bir eklentiyi güncellemek için, değişikliği yeni bir konuşmada yapay zeka asistanına açıklayın:

> "dashboard-notice eklentisini yalnızca yöneticilere bildirim gösterecek şekilde güncelle."

Yapay zeka yeni bir sürüm oluşturur ve bu sürüm, mevcut sürümün yanında sandbox'ta görünür. Güncelleme uygulanmadan önce farkı (diff) inceler ve onay verirsiniz.

## HookScanner Entegrasyonu {#hookscanner-integration}

Plugin Builder, her oluşturulan eklenti tarafından kaydedilen hook'ları ve filtreleri analiz etmek için entegre bir **HookScanner** kullanır. HookScanner çıktısı sohbet yanıtında gösterilir ve şunları içerir:

- Kaydedilen Action hook'ları (`add_action` çağrıları).
- Kaydedilen Filter hook'ları (`add_filter` çağrıları).
- Eklenti bağımlılıklarında bulunan herhangi bir hook ( `vendor/` ve `node_modules/` dizinlerini atlar).

Bu, bir eklentiyi etkinleştirmeden önce davranışını anlamanıza yardımcı olur.

## Güvenlik Hususları {#security-considerations}

- Oluşturulan eklentiler, manuel olarak kurulan eklentilerden ayrı olarak depolanır ve yalnızca ağa açıkça kurduğunuzda standart WordPress eklenti yönetim ekranından erişilebilirler.
- Sandbox, eklenti dosyaları yazılırken dizin dolaşımını önlemek için yol doğrulaması kullanır.
- Tehlikeli fonksiyon çağrıları içeren eklentiler (örneğin, `eval`, `exec`, `system`), doğrulama sırasında işaretlenir ve etkinleştirilemez.
