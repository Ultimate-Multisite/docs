---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

ਇਹ ਕਾਰਵਾਈ (action) ਉਦੋਂ ਚੱਲਦੀ ਹੈ ਜਦੋਂ ਕੋਈ pending network ਪ੍ਰਕਾਸ਼ਿਤ (published) ਹੋ ਜਾਂਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ (Parameters) {#parameters}

| ਨਾਮ (Name) | ਟਾਈਪ (Type) | ਵਰਣਨ (Description) |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | ਬਣਾਇਆ ਗਿਆ ਨੈੱਟਵਰਕ। |
| $membership | `\WP_Ultimo\Models\Membership` | ਮੈਂਬਰਸ਼ਿਪ। |
| $pending_network | `array` | ਮੂਲ pending network ਡਾਟਾ। |

### ਸਰੋਤ (Source) {#source}

ਇਹ [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) ਵਿੱਚ ਲਾਈਨ 1815 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
