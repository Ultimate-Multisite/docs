---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

ಒಂದು ಡೊಮೇನ್ ಒಂದು ಸೈಟ್‌ಗೆ ಪ್ರೈಮರಿ ಡೊಮೇನ್ ಆಗುವಾಗ ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

ಹೊಸ ಪ್ರೈಮರಿ ಡೊಮೇನ್ ಅನ್ನು ರಚಿಸುವಾಗ ಅಥವಾ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಡೊಮೇನ್ ಅನ್ನು ಪ್ರೈಮರಿ ಆಗಿ ಅಪ್ಡೇಟ್ ಮಾಡುವಾಗ, ಆ ಡೊಮೇನ್‌ನ `primary_domain` ಫ್ಲ್ಯಾಗ್ ಅನ್ನು `true` ಎಂದು ಹೊಂದಿಸಿದಾಗ ಈ ಆಕ್ಷನ್ déclenche ಆಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ಪ್ರೈಮರಿ ಆಗಿರುವ ಡೊಮೇನ್. |
| $blog_id | `int` | ಪ್ರಭಾವಿತ ಸೈಟ್‌ನ ಬ್ಲಾಗ್ ID. |
| $was_new | `bool` | ಇದು ಹೊಸದಾಗಿ ರಚಿಸಲಾದ ಡೊಮೇನ್ ಆಗಿದೆಯೇ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
