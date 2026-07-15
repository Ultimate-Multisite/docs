---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Bir domen əsas (primary) edildikdən sonra yönləndirmə (redirect) URL-sini tənzimləyir.

Developerlara, bir domen uğurla əsas olaraq təyin edildikdən sonra istifadəçilərin haraya yönləndiriləcəyini özlərləri təyin etməyə imkan verir. Default olaraq, bu, əsas saytdakı cari URL-ə və ya dəyişdirilən saytın admin URL-ə yönləndirir.

## Parametrlər {#parameters}

| Ad | Tip | Təsvir |
|------|------|-------------|
| $redirect_url | `string` | Default yönləndirmə URL-si. Ya cari URL (əgər əsas saytdırsa) və ya mövcud saytın admin URL-si. |
| $current_site | `int` | Domeni əsas edildiyi saytın ID-si. |
| $domain | `\Domain` | Əsas edilmiş domen obyekti. |
| $old_primary_domains | `array` | Əvvəllər əsas olan domenlərin ID-lərinin massivi. |

### Nə vaxtdən {#since}

- 2.0.0
### Mənbə {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) faylında 639-cu sətirdə təyin edilmişdir.

## Nə qaytarır {#returns}
Tənzimlənmiş yönləndirmə URL-si.
