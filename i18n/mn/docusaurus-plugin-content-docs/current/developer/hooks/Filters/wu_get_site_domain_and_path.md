---
id: wu_get_site_domain_and_path
title: Шүүлтүүр - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Шүүлтүүр: wu_get_site_domain_and_path

Хөгжүүлэгчдэд домэйн/замын хослолуудыг өөрчлөх боломж олгоно.

Энэ нь ямар нэг төрлийн staging шийдэл хэрэгжүүлэх, өөр серверүүд ашиглах гэх мэт олон зүйлд хэрэгтэй байж болно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $d | `object` | Домэйн болон замын түлхүүрүүдийг агуулсан одоогийн объект. |
| $path_or_subdomain | `string` | Функц руу дамжуулсан эх зам/дэд домэйн. |

### Эхэлсэн хувилбар {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) файлд 235-р мөрөнд тодорхойлсон


## Буцаана {#returns}
Домэйн болон замын түлхүүрүүдийг агуулсан объект.
