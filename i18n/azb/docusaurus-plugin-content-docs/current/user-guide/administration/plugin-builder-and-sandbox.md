---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0-da **Plugin Builder & Sandbox System**-i tanıtıyor. Bu sistem sayesinde yapay zeka asistanı, ağınızdaki WordPress eklentilerini oluşturabilir, etkinleştirebilir ve yönetebilir; tüm bunlar güvenli, izole bir sandbox ortamı üzerinden gerçekleşir.

## Genel Bakış {#overview}

Plugin Builder, yapay zeka asistanının doğal dil isteklerine yanıt olarak özel WordPress eklentileri yazmasına olanak tanır. Oluşturulan eklentiler, canlı site işlevselliğini etkilemeden önce bir sandbox katmanında doğrulanır, depolanır ve etkinleştirilir.

Kullanım alanları şunları içerir:

- Geliştirici müdahalesi olmadan hafif yardımcı eklentiler oluşturmak.
- WordPress hook'ları veya özel gönderi türleri gerektiren özelliklerin prototipini çıkarmak.
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

Bir eklentiyi sandbox'ta etkinleştirmek için, AI sohbet yanıtındaki **Activate in Sandbox** düğmesine tıklayın veya eğik çizgi komutunu kullanın:

```
/activate-plugin <plugin-slug>
```

Bir durum mesajı, etkinleştirmenin başarılı olup olmadığını veya başarısız olduğunu onaylar. Başarısız olursa, hata günlüğü sohbet dizininde görüntülenir.

## Oluşturulan Eklentileri Yönetme {#managing-generated-plugins}

Oluşturulan eklentiler **Gratis AI Agent → Plugin Builder → Manage Plugins** altında listelenir. Bu ekrandan şunları yapabilirsiniz:

| İşlem | Açıklama |
|---|---|
| **View source** | Tüm eklenti PHP kodunu inceleyin. |
| **Re-activate in sandbox** | Sandbox etkinleştirme kontrolünü yeniden çalıştırın. |
| **Install on network** | Eklentiyi canlı ağa dağıtın (manuel onay gerektirir). |
| **Update** | Mevcut kodu değiştirerek AI aracılığıyla yeni bir sürüm sağlayın. |
| **Delete** | Eklentiyi sandbox deposundan kaldırır. Önce tüm sitelerden devre dışı bırakır. |

:::warning
**Install on network**, oluşturulan eklentiyi canlı WordPress multisite'ınıza dağıtır. Devam etmeden önce eklenti kodunu gözden geçirin. Gratis AI Agent, canlı bir kurulumu tamamlamadan önce onay isteyecektir.
:::

## Oluşturulan Bir Eklentiyi Ağda Yükleme {#installing-a-generated-plugin-on-the-network}

Sandbox'ta test ettiğiniz bir eklentiden memnun kaldığınızda, onu canlı ağa yükleyebilirsiniz:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins**'e gidin.
2. Dağıtmak istediğiniz eklentinin yanındaki **Install on Network** düğmesine tıklayın.
3. Diyaloğu onaylayın. Eklenti `wp-content/plugins/` konumuna kurulur ve ağ düzeyinde etkinleştirilir.

Alternatif olarak, sohbet arayüzünde eğik çizgi komutunu kullanın:

```
/install-plugin <plugin-slug>
```

## Eklenti Güncellemeleri {#plugin-updates}

Oluşturulan bir eklentiyi güncellemek için, değişikliği yeni bir konuşmada yapay zeka asistanına açıklayın:

> "dashboard-notice eklentisini yalnızca yöneticilere bildirim gösterecek şekilde güncelle."

Yapay zeka yeni bir sürüm oluşturur ve bu sürüm, mevcut sürümün yanında sandbox'ta görünür. Güncelleme uygulanmadan önce farkı (diff) inceler ve onay verirsiniz.

## HookScanner Entegrasyonu {#hookscanner-integration}

Plugin Builder, her oluşturulan eklenti tarafından kaydedilen hook'ları ve filtreleri analiz etmek için entegre bir **HookScanner** kullanır. HookScanner çıktısı sohbet yanıtında gösterilir ve şunları içerir:

- Kaydedilen action hook'ları (`add_action` çağrıları).
- Kaydedilen filter hook'ları (`add_filter` çağrıları).
- Eklenti bağımlılıklarında bulunan herhangi bir hook ( `vendor/` ve `node_modules/` dizinlerini atlar).

Bu, bir eklentiyi etkinleştirmeden önce davranışını anlamanıza yardımcı olur.

## Güvenlik Hususları {#security-considerations}

- Oluşturulan eklentiler, manuel olarak yüklenen eklentilerden ayrı olarak depolanır ve ağa açıkça yüklenmediğiniz sürece standart WordPress eklenti yönetim ekranından erişilemezler.
- Sandbox, eklenti dosyaları yazılırken dizin dolaşımını önlemek için yol doğrulaması kullanır.
- Tehlikeli fonksiyon çağrıları içeren eklentiler (örneğin, `eval`, `exec`, `system`), doğrulama sırasında işaretlenir ve etkinleştirilemez.
