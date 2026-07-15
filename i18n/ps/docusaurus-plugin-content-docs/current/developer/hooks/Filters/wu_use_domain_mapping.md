---
id: wu_use_domain_mapping
title: فلټر - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

دا وټاکئ چې ایا mapping باید وکارول شي

عموماً، تاسو به وغواړئ چې یوازې فعال mappings د کارولو لپاره اجازه ورکړئ. خو که تاسو غواړئ لا پرمختللی منطق وکاروئ، یا غیر فعال domains هم mapping شي، نو دلته filter کړئ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ایا mapping باید د فعال په توګه وبلل شي؟ |
| $mapping | `\Domain` | هغه mapping چې موږ یې څېړو |
| $domain | `string` |  |

### Source {#source}

په [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) کې په 391 کرښه تعریف شوی
