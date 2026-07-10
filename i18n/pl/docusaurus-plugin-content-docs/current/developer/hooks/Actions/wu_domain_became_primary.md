---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Wyzwala się, gdy domena staje się domeną główną dla witryny.

Akcja ta jest wyzwalana, gdy flaga `primary_domain` domeny zostanie ustawiona na `true` – zarówno podczas tworzenia nowej domeny głównej, jak i podczas aktualizacji istniejącej domeny, aby stała się ona główną.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domena, która stała się główną. |
| $blog_id | `int` | ID witryny, której dotyczy zmiana. |
| $was_new | `bool` | Czy jest to nowo utworzona domena. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) w linii 560
