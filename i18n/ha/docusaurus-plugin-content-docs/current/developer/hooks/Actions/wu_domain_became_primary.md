---
id: wu_domain_became_primary
title: Aiki - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Aiki: wu_domain_became_primary

Yana faruwa lokacin da wani yanki ya zama babban yanki ga wani shafi.

Ana kunna wannan aiki lokacin da aka sa alamar primary_domain ta wani yanki zuwa true, ko dai lokacin ƙirƙirar sabon babban yanki ko lokacin sabunta wani yanki da yake akwai don ya zama babba.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Yankin da ya zama babba. |
| $blog_id | `int` | Blog ID na shafin da abin ya shafa. |
| $was_new | `bool` | Ko wannan sabon yanki ne da aka ƙirƙira. |

### Tun daga {#since}

- 2.0.0
### Tushen {#source}

An ayyana a [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) a layi 560
