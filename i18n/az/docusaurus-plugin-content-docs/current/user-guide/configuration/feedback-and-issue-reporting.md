---
title: Müştəri Rəy və Problemlərin Hesabat Verilməsi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Müştəri Geri Bildirişi və Problemlərin Hesabat Edilməsi

Gratis AI Agent v1.5.0, son istifadəçilərin kömək etməyən cavablara işarə edə biləcəyi və problemləri birbaşa chat interfeysindən hesabat edə biləcəyi daxili bir geri bildiriş və problem hesabat sistemi ilə təqdim olunur. Bu sistem konsentasiya (razılıq) idarəetməsinə, avtomatik hesabat əmrinə və arxa tərəfdə AI-köməkli təsnifat (triage) funksionallığı daxildir.

## Thumbs-Down Düğməsi {#thumbs-down-button}

AI köməkçisi tərəfindən göndərilən hər bir mesajda **thumbs-down** (👎) düyməsi görünür. İstifadəçi bu düyməyə kliklədikdə, cavabı köməkçi və ya yanlış kimi işarələyə bilər.

- Düymə, hər bir köməkçi mesajının yanında, siçan kursoru yaxınlaşdıqda görünür.
- Ona klikləmək **Feedback Consent Modal** (Geri Bildiriş Razılılığı Modal) açır.
- Geri bildiriş, söhbət mövzusu və müəyyən mesajla əlaqələndirilir.

## Feedback Consent Modal {#feedback-consent-modal}

İstifadəçi thumbs-down düyməsinə kliklədikdə, hər hansı bir məlumat göndərilməzdən əvvəl bir razılılıq modalı görünür. Bu modal:

- Hansı məlumatların toplanacağını izah edir (söhbət hissəsi, brauzer konteksti).
- İstifadəçidən bu məlumatların paylaşılmasına razı olduğunu təsdiqləməsini xahiş edir.
- İstifadəçinin nəyin səhv getdiyini təsvir etməsi üçün bir sərbəst mətn sahəsi təqdim edir.
- Göndərmədən bağlamaq üçün **Cancel** (Ləğv et) seçimi verir.

İstifadəçi açıq şəkildə təsdiqləmədən əvvəl heç bir geri bildiriş qeyd olunmur.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Söhbətin sonunda, köməkçi **auto-prompt feedback banner** (avtomatik təklifli geri bildiriş şeridi) göstərə bilər — bu, sessiyanın faydalı olub-olmadığını soruşan, diqqət çəkməyən bir mesajdır.

Bu şerit, söhbət uzunluğuna və nəticə heuristikalarına əsasən avtomatik görünür. Thumbs-down düyməsi ilə eyni geri bildiriş axınına keçir. İstifadəçilər geri bildiriş vermədən şeridi bağlaya bilərlər.

## /report-issue Slash Command {#report-issue-slash-command}

İstifadəçilər chat input-una `/report-issue` yazaraq geri bildiriş axınını birbaşa işə sala bilərlər. Bu əmr:

- Dərhal Feedback Consent Modal-ı açır.
- Təsvir sahəsini cari söhbət haqqında kontekstlə ön-doldurur.
- Göndərməzdən əvvəl istifadəçilərə əlavə detallar əlavə etməyə imkan verir.

`/report-issue` əmri bütün chat modlarında (inline, floating widget, full-screen) mövcuddur.

## AI-Assisted Triage {#ai-assisted-triage}

Göndərilən geri bildirişlər, aşağıdakıları edən bir AI triage layer-ına yönləndirilir:

- Hesabatı kateqoriyalandırır (faktiki səhv, köməkçi cavab, müvafiq olmayan məzmun və s.).
- Müvafiq söhbət metadata-sını əlavə edir.
- Təsnifat xülasəsini konfiqurasiya edilmiş **Feedback Endpoint**-ə ötürür (baxın [Settings > Advanced](#settings-advanced)).

Bu, ən kritik problemləri ilk növbədə üzə çıxardaraq əl ilə nəzərdən keçirmə vaxtını azaldır.

## Settings > Advanced {#settings-advanced}

Geri bildiriş arxa tərəfini aktivləşdirmək üçün aşağıdakı sahələri **Gratis AI Agent → Settings → Advanced** altında konfiqurasiya edin:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Geri bildiriş payload-ları (JSON) ilə POST sorğuları alan URL. |
| **Feedback API Key** | Feedback təqdimatlarını autentifikasiya etmək üçün `Authorization` header-ında göndərilən Bearer token. |

Hər iki sahəni boş buraxmaq geri bildiriş toplama funksionallığını deaktiv edir. Fərdi geri bildiriş düymələri istifadəçilər üçün görünür qalır, lakin təqdimatlar ötürülməyəcək.

:::tip
Feedback endpoint-i ən azı `message_id`, `conversation_id`, `feedback_text` və `triage_category` sahələrinə malik bir JSON body qəbul etməlidir. Gözlənilən schema üçün endpoint sağlayıcınızın sənədləşməsinə baxın.
:::
