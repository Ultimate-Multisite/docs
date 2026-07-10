---
id: wu_should_create_domain_record_for_site
title: فلٹر - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

یہ فلٹر کرتا ہے کہ آیا Ultimate Multisite کو نئی بنائی گئی site کے لیے domain record بنانا چاہیے۔

اس فلٹر کو ان sites کے لیے خودکار domain-record creation روکنے یا مؤخر کرنے کے لیے استعمال کریں جو shared checkout-form base domain، internal host، یا ایسا domain استعمال کرتی ہیں جسے کوئی دوسری integration الگ سے manage کرے گی۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | آیا domain record بنایا جانا چاہیے۔ |
| $site | `WP_Site` | نئی بنائی گئی site object۔ |

### Since {#since}

- 2.13.0

### Source {#source}

`inc/functions/domain.php` میں defined ہے۔


## Returns {#returns}

Boolean جو یہ ظاہر کرتا ہے کہ domain record بنانا ہے یا نہیں۔
