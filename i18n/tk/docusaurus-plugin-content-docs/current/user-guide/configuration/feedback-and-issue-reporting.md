---
title: Müşteri Geri Bildirmesi we Sorun Bildirişi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Müşteri Geri Bildirimleri ve Sorun Bildirimi {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0, son kullanıcıların yardımcı olmayan yanıtları işaretlemesine ve sorunları doğrudan sohbet arayüzünden bildirmesine olanak tanıyan yerleşik bir geri bildirim ve sorun bildirme sistemi getiriyor. Bu sistemde rıza yönetimi, otomatik bir raporlama komutu ve arka planda yapay zeka destekli önceliklendirme (triage) bulunur.

## Başparmak Aşağı Butonu {#thumbs-down-button}

Yapay zeka asistanı tarafından gönderilen her mesajın yanında bir **başparmak aşağı** (👎) butonu görünür. Bir kullanıcı bu butona tıkladığında, yanıtı yardımcı olmama veya yanlış olarak işaretleyebilir.

- Bu buton, her asistan mesajının yanında üzerine gelindiğinde görünür.
- Tıklamak, **Geri Bildirim Rıza Modalı**nı açar.
- Geri bildirim, konuşma dizisi ve belirli mesajla ilişkilendirilir.

Kullanıcı açıkça onay vermedikçe geri bildirim kaydedilmez.

## Geri Bildirim Rıza Modalı {#feedback-consent-modal}

Bir kullanıcı başparmak aşağı butonuna tıkladığında, herhangi bir veri gönderilmeden önce bir rıza modalı belirir. Bu modal:

- Hangi bilgilerin toplanacağını (konuşma alıntısı, tarayıcı bağlamı) açıklar.
- Kullanıcıdan bu verileri paylaşmaya rıza gösterip göstermediklerini onaylamasını ister.
- Kullanıcının neyin yanlış gittiğini anlatması için serbest metin alanı sunar.
- Göndermeden reddetmek için bir **İptal** seçeneği sunar.

Kullanıcı açıkça onay vermedikçe geri bildirim kaydedilmez.

## Otomatik Komut Geri Bildirim Bandı {#auto-prompt-feedback-banner}

Bir konuşmanın sonunda, asistan **otomatik komut geri bildirim bandı** gösterebilir — oturumun faydalı olup olmadığını soran rahatsız etmeyen bir mesajdır.

Bu bant, konuşma uzunluğuna ve sonuçlarına dayalı kurallara göre otomatik olarak görünür. Başparmak aşağı butonunun aynı geri bildirim akışına bağlanır. Kullanıcılar geri bildirim sağlamadan bandı kapatabilirler.

## /report-issue Slash Komutu {#report-issue-slash-command}

Kullanıcılar sohbet girişine `/report-issue` yazarak geri bildirim akışını doğrudan tetikleyebilirler. Bu komut:

- Feedback Onay Modalini hemen açar.
- Aýratynlyk sahasy mövjud söhbeti hakda kontekst bilen awtomatiki dolýar.
- Käbir zatlary göndermezden önce ulanyjylara goşmaça maglumat bermegi mümkin.

`/report-issue` komandy ähli söhbet modlarynda (inline, floating widget, full-screen) bar.

## AI-Assisted Triage {#ai-assisted-triage}

Gönderilen geri bildirimlar AI trefiz katmanyna ýol berilýär. Bu katman:

- Gözlegi (maglumatly ýatlaýan ýalyllyk, kömek bermeýän jogap, laçak mazmun we ş.m.) kesgitleýär.
- Relewanter söhbet metadata bilen baglanyşdyrýar.
- Trefiz jemini sozlawdan soň, ulanylan **Feedback Endpoint** (Settings > Advanced) bilen ýükler.

Bu, iň möhüň meseleleri ilkinji görkezmek arkaly el bilen gözegçilik wagtyny azaldyrýar.

## Settings > Advanced {#settings-advanced}

Geri bildirim arkandyrýjy sistemini işlemek üçin **Gratis AI Agent → Settings → Advanced** boýunça aşakdaky ulgamlary görkezeli:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Geri bildirim ýüklerini (JSON) kabul edýän POST haýsy URL. |
| **Feedback API Key** | Geri bildirimleri dogradyş etmek üçin `Authorization` header-de gönd어len Bearer token. |

Geri bildirim toplamak üçin her iki ulgamy hem boş ýatda saklaň. Ýöne, her bir geri bildirim düwmezine ulanyjylar görkezeli, ýöne ýükler soňra geçirilmez.

:::tip
Geri bildirim endpointi en az `message_id`, `conversation_id`, `feedback_text` we `triage_category` ulgamlary bilen JSON bodym kabul etmelidir. Beklenýän skema üçin öz endpoint provayderiňizi resminamalaryna sereteli.
:::
