---
id: wu_domain_became_primary
title: Mahinga - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Ka whakakāngia ina riro tētahi rohe hei rohe matua mō tētahi pae.

Ka whakaohohia tēnei action ina tautuhia te haki primary_domain o tētahi rohe ki te true, ahakoa i te waihanga rohe matua hou, i te whakahou rānei i tētahi rohe tīariari kia riro hei matua.

## Ngā Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Te rohe i riro hei matua. |
| $blog_id | `int` | Te blog ID o te pae kua pāngia. |
| $was_new | `bool` | Mēnā he rohe hou tēnei kua waihangatia. |

### Mai i {#since}

- 2.0.0
### Pūtake {#source}

Kua tautuhia ki [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) i te rārangi 560
