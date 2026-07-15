---
id: wu_magic_link_enforce_ip
title: Шүүлтүүр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP хаягийн баталгаажуулалтыг албадан хэрэгжүүлэх эсэхийг шүүх.

Токенуудыг өөр сүлжээнээс ажиллахыг зөвшөөрөхийн тулд false гэж тохируулна уу. Энэ нь аюулгүй байдлыг бууруулах ч ашиглахад хялбар байдлыг нэмэгдүүлнэ (жишээ нь, сүлжээ сольж буй гар утасны хэрэглэгчдэд).

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $enforce | `bool` | IP хаяг таарч байхыг албадан хэрэгжүүлэх эсэх. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) дотор 422-р мөрөнд тодорхойлсон.
