---
title: Bestsiz AI Agent Täsiri
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Ayarları

Gratis AI Agent'taki **Ayarlar → Gelişmiş** ekranı, v1.5.0 sürümünde tanıtılan arka uç entegrasyonları için yönetici düzeyinde yapılandırma sağlar. Bu sayfa **Geri Bildirim Uç Noktası (Feedback Endpoint)** alanlarını ve beklenen formatını belgeler.

## Ayarlara Erişim

1. WordPress yönetim panelinde, **Gratis AI Agent → Ayarlar** bölümüne gidin.
2. **Gelişmiş (Advanced)** sekmesine tıklayın.

## Geri Bildirim Uç Noktası Yapılandırması

Geri bildirim uç noktası, bir kullanıcı başparmak aşağı düğmesi aracılığıyla geri bildirim gönderdiğinde, otomatik istem panosu (auto-prompt banner) veya `/report-issue` komutu ile AI agent'tan POST istekleri alır.

| Alan | Açıklama |
|---|---|
| **Feedback Endpoint URL** | Geri bildirim gönderimlerini JSON gövdesiyle HTTP POST istekleri olarak alan URL'dir. |
| **Feedback API Key** | Her geri bildirim isteğinin `Authorization` başlığında gönderilen bir bearer token'dur. Uç noktanız kimlik doğrulaması gerektirmiyorsa boş bırakın. |

### Beklenen JSON Yükü (Payload)

Geri bildirim uç noktanız, en az aşağıdaki alanlara sahip bir JSON gövdesini kabul etmelidir:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Cevap fiyatlandırma hakkında yanlış.",
  "triage_category": "factual_error"
}
```

Konuşma bağlamına bağlı olarak yükte ek alanlar bulunabilir.

### `triage_category` Değerleri

AI sınıflandırma katmanı, yükü iletmeden önce `triage_category` için aşağıdaki değerlerden birini atar:

| Değer | Anlamı |
|---|---|
| `factual_error` | Asistan yanlış olgusal bilgi sağlamıştır. |
| `unhelpful_answer` | Yanıt teknik olarak doğruydu ancak faydalı değildi. |
| `inappropriate_content` | Yanıt, kullanıcıların görmemesi gereken içerik içermiştir. |
| `other` | Geri bildirim bilinen bir kategoriyle eşleşmemiştir. |

### Kimlik Doğrulama

Eger siziň endpointi kimlikten geçip bilmese, **Feedback API Key** ulanylyp bilýän ulanyjy tokeni bilen sozlaň. Agent şu görnüşde göndereýär:

```
Authorization: Bearer <your-api-key>
```

Eger **Feedback API Key** ulanylyp bilýän ulanyjylar boýunça boş bolsa, `Authorization` header ýüklenmez.

### Feedback Toplamagyňyzy Özüňiz Ýigermegi

Hem **Feedback Endpoint URL** hem-de **Feedback API Key** ulanylyp bilýän ulanyjylar boýunça boş qalaň. Bu wagt, "thumbs-down" düwmesi we feedback UI ulanyjylar üçin görünýär, ýöne göndermeler hiç hili daşky hyzmatda geçirilmez.

## Brave Search API Key

Hem **Advanced** tabda, **Brave Search API Key** ulanylyp bilýän ulanyjylar boýunça internet gözlegini (Internet Search) işleýär.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search dizaýn edijisi dashboardyndan alnan API açaryňyz. AI asistanida internet gözlegini işje etmek üçin zerurdyr. |

Bu ulanyjyji belgi (field label) Brave Search API ýa-daşygy sahhasyna geçmek üçin kliklenip biljek linki öz içine alýar. Internet gözlegini deaktiv etmek üçin boş qalaň.

Bu funksiýa barada ulanyjylar üçin dokumentasiýa üçin [Internet Search](https://your-site.com/configuration/internet-search) bilen tanyşyň.

## Feature Flags (Funksiýa Bayraklary)

v1.9.0-da hem ýazylyp geçirilip, **Settings → Feature Flags** taby optional funksionallik üçin düwärli düwärleri (toggle switches) berýär. Her bir bayrak ulanyjylar boýunça işje etmekde we deaktiv etmekde ulanylýar; bu wagt her bir site üçin özüni üýtgetmek mümkin däl.

### Feature Flagsa Girmek

1. WordPress administrasiýasyna girip **Gratis AI Agent → Settings**-e gitdiň.
2. **Feature Flags** tabyny klikdeň.

### Access Control Flags (Girawçylyk Bayraklary)

| Flag | Default | Description |
|---|---|---|
| **Administratorlara Cheklendirme** | Off | Bu seçeneni açanda, diňe `administrator` rolyny bolan ulgular AI Agent chat panelini açyp bilýärler. Beka kalyk ulgular "Administrator bilen habarlaşyň" meselesini görýärler. |
| **Ulut Adamlaryna Cheklendirme** | Off | Multisite ulutynda bu seçeneni açanda, diňe Super Administratorlar agentden peýdalanyp bilýärler. Individual site administratorlary bloklanýar. Her iki opsional hem açylsa, "Administratorlara cheklendirme" hasynyň üstünde bellenir. |
| **Abonnuklara Girilmegi Izin Ber** | Off | Bu seçeneni açanda, `subscriber` rolyny bolan ulgular chat arayüzinden peýdalanyp bilýärler, ýöne olary diňe okamak üçin (post döretmek ýa-da dürli zatlary üýtgetmek mümkin däl). |
| **Üzümde Bolmadyklar Üçin Özeltmek** | Off | Bu, Ultimate Multisite üje bolmagy statusy bilen baglanyşyklydyr. Bu seçeneni açanda, faýatlykda (membership) aktiv bolup durmadyk site üçin chat ýapylmaz. |

### Branding Flaglar

| Flag | Default | Description |
|---|---|---|
| **"Gratis AI Agent" Footerini Ýatlamak** | Off | Chat widgeti aşakdaky böleginde görkezilýän branding (marka) agzalyny aýyrmak üçin. White-label (başga bir markany ulanmak) ulgamlary üçin maslahat berilýär. |
| **Custom Agent Ady** | *(boş)* | Chat başlygynda we administrator menüsinde standart "Gratis AI Agent" agzalyny öz maglumatlaryňyz bilen üýtgetmek üçin. Boş qalaýan, standartdy ulanmak üçin. |
| **Agent Seçijisini Ýatlamak** | Off | Bu seçeneni açanda, ulgular beýleki beş agent arasynda geçip bilmezler. Hawa, häzirki agent Settings → General-de awtomatiki goýulan zat hökmünde saklanýar. |
| **Site Onu Ýatlatma Saryny Ulanmak** | Off | Chat widgeti başlygyndaky standart AI ikonyny WordPress site saryny bilen üýtgetmek üçin (Appearance → Customize → Site Identity-de goýulýar). |

### Üýtgeşmeleri Goşmak

Häzirki flagyň anyglaýan ýa-da ýatlatma boýunça **Save Settings** düwmenine basyň. Üýtgeşmeler hemen täsir edýär — cache temizlemek ýa-da pluginleri işlendirmek gerek däl.
