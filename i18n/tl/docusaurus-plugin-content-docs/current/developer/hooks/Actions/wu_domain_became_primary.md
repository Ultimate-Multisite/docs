---
id: wu_domain_became_primary
title: Aksyon - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Umaandar kapag ang isang domain ay naging pangunahing domain para sa isang site.

Nati-trigger ang action na ito kapag ang flag na primary_domain ng isang domain ay itinakda sa true, alinman kapag gumagawa ng bagong pangunahing domain o kapag ina-update ang umiiral na domain upang maging pangunahin.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Ang domain na naging pangunahin. |
| $blog_id | `int` | Ang blog ID ng naapektuhang site. |
| $was_new | `bool` | Kung ito ay bagong likhang domain. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) sa linya 560
