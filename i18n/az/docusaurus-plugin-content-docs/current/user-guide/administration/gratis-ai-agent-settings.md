---
title: Pulsuz AI Agent Ayarları
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Ayarları

Gratis AI Agent-dəki **Ayarlar → Advanced** ekranı, v1.5.0-dan etibarən əlavə edilmiş arxa tərəf inteqrasiyaları üçün administrator səviyyəli konfiqurasiya təmin edir. Bu səhifə **Geri Bildiriş Endpoint** sahələrini və onların gözlənilən formatını təsvir edir.

## Ayarlara Daxil Olmaq

1. WordPress admin panelində **Gratis AI Agent → Settings** yolunu izləyin.
2. **Advanced** tabına klikləyin.

## Geri Bildiriş Endpoint Konfiqurasiyası

Geri bildiriş endpoint-i, istifadəçi aşağı göstərici düyməsi, avtomatik prompt banner-i və ya `/report-issue` əmri vasitəsilə geri bildiriş göndərdikdə, AI agent-indən POST sorğuları alır.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | JSON bədəni ilə HTTP POST sorğuları şəklində geri bildiriş göndərən URL. |
| **Feedback API Key** | Hər bir geri bildiriş sorğusunun `Authorization` başlığında göndərilən bir bearer token. Endpoint-iniz autentifikasiya tələb etmirsə, boş buraxın. |

### Gözlənilən JSON Yüklənməsi

Geri bildiriş endpoint-iniz ən azı aşağıdakı sahələri ehtiva edən bir JSON bədəni qəbul etməlidir:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Qiymətlərlə bağlı cavab yanlış idi.",
  "triage_category": "factual_error"
}
```

Əlavə sahələr, söhbət kontekstinə bağlı olaraq, yüklənmədə mövcud ola bilər.

### `triage_category` Dəyərləri

AI triaj layəri, yüklənməni ötürməzdən əvvəl `triage_category` üçün aşağıdakı dəyərlərdən birini təyin edir:

| Value | Meaning |
|---|---|
| `factual_error` | Asistent yanlış faktiki məlumat verib. |
| `unhelpful_answer` | Cavab texniki olaraq düzdür, lakin faydalı deyil. |
| `inappropriate_content` | Cavab istifadəçilərə göstərilməməli olan məzmun ehtiva edir. |
| `other` | Geri bildiriş tanınan bir kateqoriyaya uyğun gəlmir. |

### Autentifikasiya

Endpoint-iniz autentifikasiya tələb edirsə, **Feedback API Key** sahəsini bearer token-inizlə təyin edin. Agent aşağıdakıları göndərir:

```
Authorization: Bearer <your-api-key>
```

Əgər **Feedback API Key** sahəsi boşdursa, heç bir `Authorization` başlığı göndərilmir.

### Geri Bildiriş Toplamağı Bağlamaq

**Feedback Endpoint URL** və **Feedback API Key** sahələrini boş buraxın. Aşağı göstərici düyməsi və geri bildiriş UI-si istifadəçilər üçün görünür qalır, lakin göndərilən məlumat heç bir xarici servislə ötürülmür.

## Brave Search API Key

**Advanced** tabında yerləşən **Brave Search API Key** sahəsi [Internet Search](../configuration/internet-search) funksionallığını aktivləşdirir.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard-unuzdan alınan API açarı. AI asistentində internet axtarışını aktivləşdirmək üçün tələb olunur. |

Sahə etiketi, Brave Search API qeydiyyat səhifəsinə keçid edən bir link ehtiva edir. İnternet axtarışını deaktiv etmək üçün boş buraxın.

Bu funksionallıq haqqında son istifadəçi sənədləstirməsi üçün [Internet Search](../configuration/internet-search) bölümünə baxın.

## Xüsusiyyət Bayraqları (Feature Flags)

v1.9.0-da da təqdim edilmiş olan **Settings → Feature Flags** tabı, isteğe bağlı funksionallıq üçün açılıb-bağlanma düymələri təmin edir. Hər bir bayraq ya bütün sistemdə aktivdir ya da deaktivdir; hazırda sayt başına əlavə tənzimləmə yoxdur.

### Xüsusiyyət Bayraqlarına Daxil Olmaq

1. WordPress admin panelində **Gratis AI Agent → Settings** yolunu izləyin.
2. **Feature Flags** tabına klikləyin.

### Giriş Nəzarəti Bayraqları

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Aktivləşdirildikdə, yalnız `administrator` rolu olan istifadəçilər AI Agent chat panelini aça bilər. Digər bütün rollar bunun əvəzinə "Administratorunuzla əlaqə saxlayın" mesajını görürlər. |
| **Restrict to Network Admins** | Off | Multisite şəbəkəsində aktivləşdirildikdə, yalnız Super Adminlər agentdən istifadə edə bilər. Fərdi sayt administratorları bloklanır. Hər ikisi aktivdirsə, "Restrict to Administrators" üzərində üstünlük təşkil edir. |
| **Allow Subscriber Access** | Off | Aktivləşdirildikdə, `subscriber` rolu olan istifadəçilər chat interfeysindən istifadə edə bilər, lakin yalnız oxumaqla məhdudlaşırlar (məqalə yaratmaq və ya ayarları dəyişdirmək yoxdur). |
| **Disable for Non-Members** | Off | Ultimate Multisite üzvlük statusu ilə inteqrasiya olunur. Aktivləşdirildikdə, aktiv üzvlüyü olmayan saytlarda chat gizlənir. |

### Brendinq Bayraqları

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Chat widget-ının alt hissəsində göstərilən brendinq atributiv xəttini aradan qaldırır. White-label tətbiqlər üçün tövsiyə olunur. |
| **Custom Agent Name** | *(blank)* | Chat başlığında və admin menyusunda standart "Gratis AI Agent" etiketini öz məhsul adınızla əvəz edir. Standartdan istifadə etmək üçün boş buraxın. |
| **Hide Agent Picker** | Off | Aktivləşdirildikdə, istifadəçilər beş daxili agent arasında keçid edə bilməzlər. Hazırkı agent, Settings → General-də standart kimi konfiqurasiya edilən agentə sabitlənir. |
| **Use Site Icon as Chat Avatar** | Off | Chat widget başlığındakı standart AI ikonunu WordPress sayt ikonu ilə əvəz edir (Appearance → Customize → Site Identity altında təyin edilir). |

### Dəyişiklikləri Tətbiq Etmək

Hər hansı bir bayraqı açılıb-bağlanmadan sonra **Save Settings** düyməsinə klikləyin. Dəyişikliklər dərhal qüvvəyə minir — cache təmizləmə və ya plugin-i yenidən aktivləşdirmə tələb olunmur.
