---
id: wu_make_primary_domain_redirect_url
title: Filtr - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtr: wu_make_primary_domain_redirect_url

Domenni asosiy qilib belgilagandan keyin yo‘naltirish URLini filtrlaydi.

Dasturchilarga domen muvaffaqiyatli asosiy sifatida o‘rnatilgandan keyin foydalanuvchilar qayerga yo‘naltirilishini moslashtirish imkonini beradi. Odatiy holatda asosiy saytdagi joriy URLga yoki o‘zgartirilayotgan saytning admin URLiga yo‘naltiradi.

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $redirect_url | `string` | Odatiy yo‘naltirish URLi. Joriy URL (agar asosiy sayt bo‘lsa) yoki joriy saytning admin URLi. |
| $current_site | `int` | Domeni asosiy qilinayotgan sayt IDsi. |
| $domain | `\Domain` | Asosiy qilingan domen obyekti. |
| $old_primary_domains | `array` | Avval asosiy bo‘lgan domenlar IDlari massivi. |

### Dan beri

- 2.0.0
### Manba

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) faylida, 639-qatorda aniqlangan


## Qaytaradi
Filtrlangan yo‘naltirish URLi.
