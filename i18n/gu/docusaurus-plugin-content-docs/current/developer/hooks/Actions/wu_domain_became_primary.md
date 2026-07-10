---
id: wu_domain_became_primary
title: ક્રિયા - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

જ્યારે કોઈ ડોમેન સાઇટ માટે મુખ્ય ડોમેન (primary domain) બને છે ત્યારે આ એક્શન ટ્રિગર થાય છે.

આ એક્શન ત્યારે ટ્રિગર થાય છે જ્યારે કોઈ ડોમેનનો `primary_domain` ફ્લેગ `true` પર સેટ થાય છે, પછી ભલે તે નવો મુખ્ય ડોમેન બનાવવાનો હોય કે હાલના ડોમેનને મુખ્ય ડોમેન બનાવવાનો હોય.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | જે ડોમેન મુખ્ય બન્યું. |
| $blog_id | `int` | અસરગ્રસ્ત સાઇટનો બ્લોગ ID. |
| $was_new | `bool` | શું આ એક નવો બનાવેલો ડોમેન છે. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
