---
title: Site Builder İletişim Formları
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Oluşturucu İletişim Formları

Superdav AI Agent v1.10.0, Site Oluşturucu (Site Builder) agent'ını kullanarak sohbet arayüzünden doğrudan iletişim formu oluşturma yeteneği ekler. Bu sayede sohbetten ayrılmadan herhangi bir sayfaya tam işlevli iletişim formları ekleyebilirsiniz.

## Genel Bakış {#overview}

Site Oluşturucu iletişim formu özelliği (`create_contact_form`), kurduğunuz form eklentisini otomatik olarak algılar ve bu eklentinin yerel yeteneklerini kullanarak bir iletişim formu oluşturur. Desteklenen form eklentileri şunlardır:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistan, sitenizdeki en uygun form eklentisini otomatik olarak seçer ve o eklentiye özel hazırlanmış bir iletişim formu oluşturur.

## İletişim Formu Oluşturma {#creating-a-contact-form}

Site Oluşturucu'yu kullanarak bir iletişim formu oluşturmak için:

1. WordPress yöneticisinde **Gratis AI Agent** sohbet panelini açın.
2. Sohbet başlığındaki agent simgesine tıklayarak **Site Oluşturucu** agent'ına geçin.
3. Oluşturmak istediğiniz iletişim formunu açıklayın. Örneğin:

   > "Ad, e-posta, mesaj ve telefon numarası alanları içeren bir iletişim formu, İletişim sayfasına ekle."

   Veya sadece:

   > "İletişim sayfası için bir iletişim formu oluştur."

4. Site Oluşturucu, iletişim formunu oluşturacak ve gömmeye hazır bir shortcode döndürecektir.

## Oluşturulan Shortcode'u Kullanma {#using-the-generated-shortcode}

Site Oluşturucu iletişim formunu oluşturduktan sonra, bir shortcode döndürür (örneğin, `[contact-form-7 id="123"]`). Bunu şu şekillerde kullanabilirsiniz:

1. **Bir sayfaya veya yazıya gömmek** — Shortcode'u kopyalayıp blok düzenleyici veya klasik düzenleyici kullanarak herhangi bir sayfaya veya yazıya yapıştırın.
2. **Site Oluşturucu aracılığıyla eklemek** — Site Oluşturucu'dan formu belirli bir sayfaya otomatik olarak eklemesini isteyin:

   > "İletişim formunu İletişim sayfasına ekle."

3. **Bir şablonda kullanmak** — PHP konusunda rahatsanız, shortcode'u bir tema şablon dosyasına ekleyebilirsiniz.

## İletişim Formunu Özelleştirme {#customizing-the-contact-form}

Site Oluşturucu formu oluşturduktan sonra, onu daha fazla özelleştirebilirsiniz:

### Sohbet Arayüzü Üzerinden {#via-the-chat-interface}

Site Oluşturucu'dan formu değiştirmesini isteyin:

> "İletişim formunu, bir konu alanı ekleyecek ve mesaj alanını zorunlu hale getirecek şekilde güncelle."

Site Oluşturucu formu güncelleyecek ve güncellenmiş shortcode'u döndürecektir.

### Form Eklentisinin Yönetici Arayüzü Üzerinden {#via-the-form-plugins-admin-interface}

Formu doğrudan form eklentinizin ayarlarından da özelleştirebilirsiniz:

1. WordPress yöneticisinde **Contact Form 7**'ye (veya kurduğunuz form eklentisine) gidin.
2. Site Oluşturucu tarafından oluşturulan formu bulun.
3. Gerekli alanları, doğrulama kurallarını ve e-posta bildirimlerini düzenleyin.

## Form Eklentileri ve Uyumluluk {#form-plugins-and-compatibility}

Site Oluşturucu, sitenizde hangi form eklentisinin kurulu olduğunu otomatik olarak algılar ve iletişim formu oluşturmak için onu kullanır. Birden fazla form eklentisi kuruluysa, Site Oluşturucu öncelik sırasına göre bunları kullanır:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Bu eklentilerden hiçbiri kurulu değilse, Site Oluşturucu iletişim formunu oluşturmadan önce bir tane kurmanızı önerir.

## E-posta Bildirimleri {#email-notifications}

Site Oluşturucu tarafından oluşturulan iletişim formları, varsayılan olarak site yöneticisine e-posta bildirimi gönderecek şekilde yapılandırılmıştır. Alıcı e-posta adresini ve bildirim mesajını özelleştirebilirsiniz:

1. Form eklentinizin yönetici arayüzüne gidin.
2. Site Oluşturucu tarafından oluşturulan formu bulun.
3. E-posta bildirim ayarlarını düzenleyin.

Detaylı talimatlar için form eklentinizin dokümantasyonuna bakın:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Örnek Kullanım Senaryoları {#example-use-cases}

### Basit İletişim Formu {#simple-contact-form}

> "Ad, e-posta ve mesaj alanları içeren basit bir iletişim formu oluştur."

### Çok Adımlı Form {#multi-step-form}

> "İletişim bilgileri için ilk adım ve mesaj ile tercih edilen iletişim yöntemi için ikinci adım içeren bir iletişim formu oluştur."

### Koşullu Mantıklı Form {#form-with-conditional-logic}

> "Kullanıcının bir açılır menüdeki seçimine göre farklı alanlar gösteren bir iletişim formu oluştur."

### Dosya Yüklemeli Form {#form-with-file-upload}

> "Kullanıcıların bir dosya veya ek yüklemesine izin veren bir iletişim formu oluştur."

:::note
İletişim formu oluşturma özelliği Superdav AI Agent v1.10.0 ve sonraki sürümlerde mevcuttur. Bu özelliği kullanmak için Site Oluşturucu agent'ının aktif olması gerekir.
:::
