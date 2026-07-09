---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Ito ay tumatakbo kapag ang isang domain ay naging pangunahing domain para sa isang site.

Ang aksyon na ito ay nagaganap kapag ang `primary_domain` flag ng isang domain ay itinakda sa `true`, maging ito man ay sa paglikha ng bagong pangunahing domain o sa pag-update ng isang umiiral na domain upang maging pangunahin.

## Mga Parameter {#parameters}

| Name | Type | Deskripsyon |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Ang domain na naging pangunahin. |
| $blog_id | `int` | Ang blog ID ng apektadong site. |
| $was_new | `bool` | Kung ito ba ay bagong nilikhang domain. |

### Mula pa noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) sa linya 560
