---
title: Gratis AI Agent Ayarları
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Ayarları {#gratis-ai-agent-settings}

Gratis AI Agent-də **Settings → Advanced** ekranı backend inteqrasiyaları üçün administrator səviyyəli konfiqurasiya təqdim edir. Bu səhifə feedback yönləndirilməsini, axtarış provayderi açarlarını, idarə olunan Superdav xidmətinin qurulmasını, Google Calendar nəzarətlərini, TextBee SMS ayarlarını və şəbəkə üzrə funksiya bayraqlarını sənədləşdirir.

## Ayarlara Giriş {#accessing-settings}

1. WordPress adminində **Gratis AI Agent → Settings** bölməsinə keçin.
2. **Advanced** tabına klikləyin.

## Feedback Endpoint Konfiqurasiyası {#feedback-endpoint-configuration}

Feedback endpoint-i istifadəçi başbarmaq-aşağı düyməsi, avtomatik sorğu banneri və ya `/report-issue` əmri vasitəsilə feedback göndərəndə AI agent-dən POST sorğuları qəbul edir.

| Sahə | Təsvir |
|---|---|
| **Feedback Endpoint URL** | JSON body ilə HTTP POST sorğuları kimi feedback göndərişlərini qəbul edən URL. |
| **Feedback API Key** | Hər feedback sorğusunun `Authorization` header-də göndərilən bearer token. Endpoint-iniz autentifikasiya tələb etmirsə, boş saxlayın. |

### Gözlənilən JSON Payload {#expected-json-payload}

Feedback endpoint-iniz ən azı aşağıdakı sahələri olan JSON body qəbul etməlidir:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Söhbət kontekstindən asılı olaraq payload-da əlavə sahələr ola bilər.

### `triage_category` Dəyərləri {#triagecategory-values}

AI triage qatı payload-u yönləndirməzdən əvvəl `triage_category` üçün aşağıdakı dəyərlərdən birini təyin edir:

| Dəyər | Məna |
|---|---|
| `factual_error` | Assistent yanlış faktiki məlumat təqdim etdi. |
| `unhelpful_answer` | Cavab texniki baxımdan düzgün idi, lakin faydalı deyildi. |
| `inappropriate_content` | Cavab istifadəçilərə göstərilməməli məzmun ehtiva edirdi. |
| `other` | Feedback məlum kateqoriyaya uyğun gəlmədi. |

### Autentifikasiya {#authentication}

Endpoint-iniz autentifikasiya tələb edirsə, **Feedback API Key** sahəsini bearer token-inizə təyin edin. Agent göndərir:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** sahəsi boşdursa, `Authorization` header-i göndərilmir.

### Feedback Toplanmasının Deaktiv Edilməsi {#disabling-feedback-collection}

Həm **Feedback Endpoint URL**, həm də **Feedback API Key** sahələrini boş saxlayın. Başbarmaq-aşağı düyməsi və feedback UI istifadəçilərə görünməyə davam edir, lakin göndərişlər heç bir xarici xidmətə yönləndirilmir.

## Brave Search API Key {#brave-search-api-key}

Həmçinin **Advanced** tabında **Brave Search API Key** sahəsi [İnternet Axtarışı](../configuration/internet-search) imkanını aktiv edir.

| Sahə | Təsvir |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-dan API açarınız. AI assistentində internet axtarışını aktiv etmək üçün tələb olunur. |

Sahə etiketi Brave Search API qeydiyyat səhifəsinə kliklənə bilən keçid ehtiva edir. İnternet axtarışını deaktiv etmək üçün boş saxlayın.

Bu funksiya üzrə son istifadəçi sənədləri üçün [İnternet Axtarışı](../configuration/internet-search) bölməsinə baxın.

## İdarə Olunan Superdav Xidməti {#managed-superdav-service}

Superdav AI Agent v1.18.0 dəstəklənən saytlar üçün idarə olunan Superdav xidmət endpoint-ləri və avtomatik bağlantı təminatını əlavə edir. Saytınız əl ilə konfiqurasiya edilmiş xidmət endpoint-i əvəzinə hosted provayderə qoşulmalı olduqda bu nəzarətlərdən istifadə edin.

| Sahə | Təsvir |
|---|---|
| **Managed Superdav Service** | Dəstəklənən saytlar üçün hosted Superdav xidmət bağlantısını aktiv edir. |
| **Provision Connection** | Avtomatik endpoint və credential təminatını başladır. Saytın idarə olunan provayderdən istifadə etməli olduğunu təsdiqlədikdən sonra bundan istifadə edin. |
| **Service Endpoint / Connection Status** | Təminatdan sonra cari endpoint-i və ya bağlantı vəziyyətini göstərir. |

Təminatdan sonra ayarları yadda saxlayın və idarə olunan xidmət iş axınlarına etibar etməzdən əvvəl bağlantı vəziyyətini yoxlayın. Təminat uğursuz olarsa, göstərilən təkrar cəhd təlimatını nəzərdən keçirin və saytın hosted provayderdən istifadə icazəsi olduğunu təsdiqləyin.

## Google Calendar Konfiqurasiyası {#google-calendar-configuration}

Superdav AI Agent v1.18.0 təqvim funksiyaları aktiv olduqda, agent konfiqurasiya edilmiş təqvimləri və tədbir detallarını oxuya bilər. Təqvim alətləri oxuma yönümlüdür və cədvəl-aware xatırlatmalar, iştirakçı izləməsi və kontakt uyğunlaşdırması üçün faydalıdır.

| Sahə | Təsvir |
|---|---|
| **Google Calendar Credentials** | Təqvim məlumatlarını oxumaq üçün tələb olunan credential-ları və ya token bağlantısını saxlayır. |
| **Calendar Selection** | Agent-in hansı konfiqurasiya edilmiş təqvimləri yoxlaya biləcəyini məhdudlaşdırır. |
| **Calendar Connection Status** | Cari credential-ların təqvimləri və tədbirləri oxuya bilib-bilmədiyini təsdiqləyir. |

Təqvim credential-larını agent-in ehtiyac duyduğu təqvimlərlə məhdud saxlayın. Vəziyyət müddəti bitmiş token göstərirsə, credential-ları yenidən qoşun və ya rotasiya edin.

## TextBee SMS Bildirişləri {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 konfiqurasiya edilmiş bildiriş iş axınları üçün TextBee-ni SMS provayderi kimi əlavə edir. SMS bildirişləri həssas və ya istifadəçiyə yönəlmiş mesajlar üçün insan təsdiqi keçidləri ilə birlikdə istifadə edilməlidir.

| Sahə | Təsvir |
|---|---|
| **TextBee API Key** | TextBee SMS provayderinə sorğuları autentifikasiya edir. |
| **TextBee Device / Sender** | Provayder tərəfindən tələb olunduqda, çıxan mesajlar üçün istifadə edilən TextBee göndəricisini və ya cihazını seçir. |
| **SMS Notifications Enabled** | Təsdiqlənmiş iş axınlarına mətn mesajı bildirişləri göndərməyə icazə verir. SMS göndərişlərinin qarşısını almaq üçün deaktiv saxlayın. |

Test mesajını yalnız administratora məxsus nömrəyə göndərin, sonra planlaşdırılmış və ya iştirakçıya yönəlmiş xatırlatmaları aktiv etməzdən əvvəl təsdiq keçidi davranışını təsdiqləyin.

## Funksiya Bayraqları {#feature-flags}

v1.9.0-da da təqdim edilən **Settings → Feature Flags** tabı əlavə funksionallıq üçün toggle açarları təqdim edir. Hər bayraq şəbəkə üzrə ya aktiv, ya da deaktivdir; hazırda hər sayt üzrə ayrıca override yoxdur.

### Funksiya Bayraqlarına Giriş {#accessing-feature-flags}

1. WordPress adminində **Gratis AI Agent → Settings** bölməsinə keçin.
2. **Feature Flags** tabına klikləyin.

### Giriş Nəzarəti Bayraqları {#access-control-flags}

| Bayraq | Varsayılan | Təsvir |
|---|---|---|
| **Administratorlarla məhdudlaşdır** | Sönülü | Aktiv edildikdə, yalnız `administrator` roluna malik istifadəçilər AI Agent çat panelini aça bilər. Bütün digər rollar bunun əvəzinə "Administratorunuzla əlaqə saxlayın" mesajını görür. |
| **Network Admins ilə məhdudlaşdır** | Sönülü | Multisite şəbəkəsində aktiv edildikdə, agentdən yalnız Super Admins istifadə edə bilər. Ayrı-ayrı sayt administratorları bloklanır. Hər ikisi aktivdirsə, "Administratorlarla məhdudlaşdır" parametrindən üstün olur. |
| **Subscriber girişinə icazə ver** | Sönülü | Aktiv edildikdə, `subscriber` roluna malik istifadəçilər çat interfeysindən istifadə edə bilər, lakin yalnız oxuma imkanları ilə məhdudlaşdırılırlar (göndəriş yaratma və ya ayar dəyişiklikləri yoxdur). |
| **Üzv olmayanlar üçün deaktiv et** | Sönülü | Ultimate Multisite üzvlük statusu ilə inteqrasiya olunur. Aktiv edildikdə, aktiv üzvlüyü olmayan saytlar üçün çat gizlədilir. |

### Brendinq bayraqları {#branding-flags}

| Bayraq | Varsayılan | Təsvir |
|---|---|---|
| **"Powered by Gratis AI Agent" altlığını gizlət** | Sönülü | Çat vidcetinin aşağı hissəsində göstərilən brendinq istinad sətrini silir. White-label tətbiqlər üçün tövsiyə olunur. |
| **Fərdi agent adı** | *(boş)* | Çat başlığında və admin menyusunda standart "Gratis AI Agent" etiketini sizin öz məhsul adınızla əvəz edir. Standartdan istifadə etmək üçün boş saxlayın. |
| **Agent seçicisini gizlət** | Sönülü | Aktiv edildikdə, istifadəçilər beş daxili agent arasında keçid edə bilməzlər. Cari agent Settings → General bölməsində standart kimi konfiqurasiya edilən agentə sabitlənir. |
| **Çat avatarı kimi sayt ikonundan istifadə et** | Sönülü | Çat vidcetinin başlığındakı standart AI ikonunu WordPress sayt ikonu ilə əvəz edir (Appearance → Customize → Site Identity altında təyin edilir). |

### Avtomatlaşdırma təhlükəsizliyi bayraqları {#automation-safety-flags}

Superdav AI Agent v1.18.0 daha təhlükəsiz avtomatlaşdırma icraları üçün insan təsdiqi keçidlərini və xatırlatma qeydlərini təqdim edir. Bu idarəetmələr quraşdırılmış paketdən asılı olaraq xüsusiyyət bayraqlarında və ya qabaqcıl avtomatlaşdırma ayarlarında görünə bilər.

| Bayraq | Varsayılan | Təsvir |
|---|---|---|
| **İnsan təsdiqini tələb et** | Tövsiyə olunur: aktiv | Həssas avtomatlaşdırmaları səlahiyyətli istifadəçi təklif olunan əməliyyatı nəzərdən keçirib təsdiqləyənədək dayandırır. |
| **Xatırlatma deduplikasiyası** | Aktiv | Göndərilmiş xatırlatmaları qeyd edir ki, təkrar cəhdlər və ya planlaşdırılmış icralar dublikat bildirişlər göndərməsin. |
| **Təqvim alətlərini aktiv et** | Konfiqurasiya edilənədək sönülü | Agentə konfiqurasiya edilmiş Google təqvimlərini və hadisələrini oxumağa icazə verir. |
| **SMS bildirişlərini aktiv et** | Konfiqurasiya edilənədək sönülü | Təsdiqlənmiş iş axınlarına giriş məlumatları saxlandıqdan sonra TextBee SMS bildirişləri göndərməyə icazə verir. |

### Dəyişikliklərin tətbiqi {#applying-changes}

Hər hansı bayrağı dəyişdirdikdən sonra **Ayarları saxla** düyməsinə klikləyin. Dəyişikliklər dərhal qüvvəyə minir — keşin təmizlənməsi və ya pluginin yenidən aktivləşdirilməsi tələb olunmur.
