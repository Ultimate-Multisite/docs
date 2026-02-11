---
id: wu_domain_became_primary
title: Azione - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Azione: wu_domain_became_primary

Si attiva quando un dominio diventa il dominio principale di un sito.

Questa azione viene attivata quando il flag primary_domain di un dominio viene impostato su true, sia durante la creazione di un nuovo dominio principale sia durante l'aggiornamento di un dominio esistente per renderlo principale.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Il dominio che è diventato principale. |
| $blog_id | `int` | L'ID del blog del sito interessato. |
| $was_new | `bool` | Se si tratta di un dominio appena creato. |

### Da

- 2.0.0

### Fonte

Definito in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) alla riga 560
