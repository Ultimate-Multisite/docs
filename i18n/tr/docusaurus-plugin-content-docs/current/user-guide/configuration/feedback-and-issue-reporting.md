---
title: Müşteri Geri Bildirimi ve Sorun Bildirimi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Müşteri Geri Bildirimi ve Sorun Bildirimi

Gratis AI Agent v1.5.0, son kullanıcıların yardımcı olmayan yanıtları işaretlemesine ve sorunları doğrudan sohbet arayüzünden bildirmesine olanak tanıyan yerleşik bir geri bildirim ve sorun bildirim sistemi sunuyor. Bu sistem; onay yönetimi, otomatik bir bildirim komutu ve arka uçta yapay zeka destekli ön eleme (triage) içerir.

## Beğenmeme (Thumbs-Down) Butonu {#thumbs-down-button}

AI asistanı tarafından gönderilen her mesajda bir **beğenmeme** (👎) butonu bulunur. Kullanıcı bu butona tıkladığında, bir yanıtı yardımcı olmamış veya yanlış olarak işaretleyebilir.

- Buton, her asistan mesajının yanında üzerine gelindiğinde görünür.
- Tıklamak, **Geri Bildirim Onay Modalı**'nı açar.
- Geri bildirim, konuşma dizisi ve belirli mesajla ilişkilendirilir.

## Geri Bildirim Onay Modalı {#feedback-consent-modal}

Kullanıcı beğenmeme butonuna tıkladığında, herhangi bir veri gönderilmeden önce bir onay modalı görünür. Bu modül:

- Hangi bilgilerin toplanacağını açıklar (konuşma alıntısı, tarayıcı bağlamı).
- Kullanıcıdan bu verileri paylaşmaya onay verip vermediğini teyit etmesini ister.
- Kullanıcının neyin yanlış gittiğini açıklayabileceği bir serbest metin alanı sağlar.
- Göndermeden kapatmak için bir **İptal** seçeneği sunar.

Kullanıcı açıkça onay verene kadar hiçbir geri bildirim kaydedilmez.

## Otomatik Komut (Auto-Prompt) Geri Bildirim Bandı {#auto-prompt-feedback-banner}

Bir konuşmanın sonunda, asistan **otomatik komut geri bildirim bandı** (auto-prompt feedback banner) gösterebilir; bu, oturumun faydalı olup olmadığını soran, dikkat dağıtmayan bir mesajdır.

Bu bant, konuşma uzunluğuna ve sonuçlarına dayalı olarak otomatik olarak görünür. Beğenmeme butonundaki ile aynı geri bildirim akışına bağlanır. Kullanıcılar geri bildirim sağlamadan bu bandı kapatabilirler.

## /report-issue Eğik Çizgi Komutu (Slash Command) {#report-issue-slash-command}

Kullanıcılar, sohbet girişine `/report-issue` yazarak geri bildirim akışını doğrudan tetikleyebilirler. Bu komut:

- Geri Bildirim Onay Modalı'nı hemen açar.
- Açıklama alanını mevcut konuşma hakkında bağlamla önceden doldurur.
- Kullanıcılara göndermeden önce ek ayrıntılar ekleme imkanı tanır.

`/report-issue` komutu tüm sohbet modlarında (inline, floating widget, full-screen) kullanılabilir.

## Yapay Zeka Destekli Ön Eleme (AI-Assisted Triage) {#ai-assisted-triage}

Gönderilen geri bildirimler, aşağıdaki işlemleri yapan bir yapay zeka ön eleme katmanına yönlendirilir:

- Raporu kategorize eder (olgusal hata, yardımcı olmayan yanıt, uygunsuz içerik vb.).
- İlgili konuşma meta verilerini ekler.
- Ön eleme özetini yapılandırılmış **Geri Bildirim Uç Noktası**'na (Feedback Endpoint) iletir (bkz. [Ayarlar > Gelişmiş](#settings-advanced)).

Bu, en kritik sorunları öncelikli olarak görünür hale getirerek manuel inceleme süresini azaltır.

## Ayarlar > Gelişmiş {#settings-advanced}

Geri bildirim arka ucunu etkinleştirmek için, aşağıdaki alanları **Gratis AI Agent → Ayarlar → Gelişmiş** altında yapılandırın:

| Alan | Açıklama |
|---|---|
| **Feedback Endpoint URL** | Geri bildirim yüklerini (JSON) POST isteği ile alan URL. |
| **Feedback API Key** | Geri bildirim gönderimlerini kimlik doğrulamak için `Authorization` başlığında gönderilen Bearer token. |

Geri bildirim toplamasını devre dışı bırakmak için her iki alanı da boş bırakın. Bireysel geri bildirim butonları kullanıcılara görünmeye devam eder, ancak gönderimler iletilmez.

:::tip
Geri bildirim uç noktası, en az `message_id`, `conversation_id`, `feedback_text` ve `triage_category` alanlarına sahip bir JSON gövdesi kabul etmelidir. Beklenen şema için uç nokta sağlayıcınızın dokümantasyonuna bakın.
:::
