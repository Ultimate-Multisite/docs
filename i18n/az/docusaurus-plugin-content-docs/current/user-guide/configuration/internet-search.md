---
title: İnternet Axtarışı
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet Axtarışı

Gratis AI Agent v1.5.0, söhbət zamanı AI asistentinin vebdən müasir məlumatları əldə etməsinə imkan verən bir **İnternet Axtarışı** funksionallığı əlavə edir. Bu funksiya [Brave Search API](https://brave.com/search/api/) və ya [Tavily API](https://tavily.com/) vasitəsilə işləyir.

## Necə İşləyir

İnternet axtarışı aktivləşdirildikdə, asistent müəyyən edir ki, sual cari və ya xarici məlumat tələb edir (məsələn, son xəbərlər, canlı qiymətlər və ya modelin təlimat kəsindən bəri dəyişmiş ola biləcək sənədlər) və avtomatik olaraq konfiqurasiya edilmiş axtarış provayudyerinizə sorğu göndərir.

Nəticələr real vaxt rejimində əldə edilir və cavab yaratmaqdan əvvəl asistentin kontekstinə daxil edilir. Asistent, suala cavab vermək üçün axtarış nəticələrindən istifadə etdiyini bildirir.

## İnternet Axtarışını Aktivləşdirmək

İnternet axtarışı, seçdiyiniz axtarış provayudyerindən bir API açarı tələb edir. Konfiqurasiya etmək üçün:

1. **Gratis AI Agent → Settings → Advanced** yolunu izləyin.
2. **Internet Search Provider** açılır menyusunu tapın və ya **Brave Search** və ya **Tavily** seçin.
3. API açarınızı müvafiq sahəyə daxil edin. Hər sahənin yanında qeydiyyat linkləri göstərilir.
4. **Save Settings** düymasına basın.

Açar yadda saxlandığı zaman, İnternet Axtarışı funksionallığı avtomatik olaraq asistent üçün mövcəd olur.

## Brave Search

### Brave Search API Açarı Almaq

1. [Brave Search API səhifəsinə](https://brave.com/search/api/) daxil olun.
2. Bir plan üçün qeydiyyatdan keçin. Aylıq sorğu limiti ilə pulsuz bir səviyyə mövcuddur.
3. API açarınızı Brave Search developer dashboard-undan kopyalayın.
4. Bunu Gratis AI Agent ayarları içindəki **Brave Search API Key** sahəsinə yapışdırın.

### İstifadə Limitləri

İstifadə, Brave Search tərəfindən edilən sorğu sayına əsasən hesablanır. Axtarış başlatan hər bir AI cavabı bir sorğu hesab edilir. Təngsiz ödənişlərdən yayınmaq üçün istifadəinizi [Brave Search developer dashboard](https://brave.com/search/api/) vasitəsilə izləyin.

## Tavily

Superdav AI Agent v1.10.0, daha zəngin axtarış nəticələri və təkmil tədqiqat imkanları təklif edən alternativ bir internet axtarışı provayudyeri kimi **Tavily** əlavə edir.

### Tavily API Açarı Almaq

1. [Tavily API səhifəsinə](https://tavily.com/) daxil olun.
2. Bir hesab üçün qeydiyyatdan keçin. Aylıq sorğu limiti ilə pulsuz bir səviyyə mövcuddur.
3. API açarınızı Tavily dashboard-undan kopyalayın.
4. Bunu Gratis AI Agent ayarları içindəki **Tavily API Key** sahəsinə yapışdırın.

### İstifadə Limitləri

İstifadə, Tavily tərəfindən edilən API çağırışlarının sayına əsasən hesablanır. Axtarış başlatan hər bir AI cavabı bir çağırış hesab edilir. Təngsiz ödənişlərdən yayınmaq üçün istifadəinizi [Tavily dashboard](https://tavily.com/) vasitəsilə izləyin.

## İnternet Axtarışını Dezaktivləşdirmək

API açarını aktiv axtarış provayudyeri sahəsindən silin və yadda saxlayın. İnternet Axtarışı funksionallığı asistentə artıq təklif edilməyəcək.

:::note
İnternet axtarışı cavablara gecikmə (latency) əlavə edir, çünki asistent cavab yaratmadan əvvəl axtarış nəticlərini gözləməlidir. Vaxta həssas istifadə halları üçün, real vaxt axtarışının lazım olub-olmadığını və ya asistentin daxili biliklərinin kifayət edib-etmədiyini nəzərdən keçirin.
:::
