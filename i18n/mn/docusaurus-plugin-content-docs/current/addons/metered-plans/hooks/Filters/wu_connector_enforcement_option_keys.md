---
id: wu_connector_enforcement_option_keys
title: Шүүлтүүр - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Шүүлтүүр: wu_connector_enforcement_option_keys

Үндсэн сайтаас мөрдүүлэх AI provider option key-үүдийн жагсаалтыг шүүнэ.

Тусгай эсвэл гуравдагч талын AI provider plugin-уудын option key-үүдийг нэмснээр тэдгээрийн тохиргоо дэд сайтууд дээр мөн үндсэн сайтаас өвлөгдөнө.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $keys | `string[]` | Мөрдүүлэх option key нэрс (динамикаар илрүүлсэн connector key-үүд болон EXTRA_PROVIDER_OPTIONS-ыг аль хэдийн агуулна). |

### Хувилбараас {#since}

- 1.2.0
### Эх сурвалж {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206)-д 206-р мөрөнд тодорхойлсон.
