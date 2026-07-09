---
id: wu_should_create_domain_record_for_site
title: Шүүлтүүр - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Шүүлтүүр: wu_should_create_domain_record_for_site

Шинээр үүсгэсэн сайтын домэйн бичлэгийг Ultimate Multisite үүсгэх эсэхийг шүүнэ.

Хамтын checkout-form суурь домэйн, дотоод хост, эсвэл өөр интеграц тусад нь удирдах домэйн ашигладаг сайтуудад автоматаар домэйн бичлэг үүсгэхийг хориглох эсвэл хойшлуулахын тулд энэ шүүлтүүрийг ашиглана уу.

## Параметрүүд

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Домэйн бичлэгийг үүсгэх эсэх. |
| $site | `WP_Site` | Шинээр үүсгэсэн сайтын объект. |

### Хувилбараас

- 2.13.0

### Эх сурвалж

`inc/functions/domain.php` дотор тодорхойлогдсон.


## Буцаах утга

Домэйн бичлэгийг үүсгэх эсэхийг илэрхийлэх Boolean.
