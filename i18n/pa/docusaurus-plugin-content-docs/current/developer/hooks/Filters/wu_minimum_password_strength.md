---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

ਇਸ ਫਿਲਟਰ ਨਾਲ ਲੋੜੀਂਦੀ ਘੱਟੋ-ਘੱਟ ਪਾਸਵਰਡ ਤਾਕਤ (zxcvbn ਸਕੋਰ) ਨੂੰ ਸੈੱਟ ਕਰੋ।

ਤਾਕਤ ਦੇ ਪੱਧਰ: - 0, 1: ਬਹੁਤ ਕਮਜ਼ੋਰ - 2: ਕਮਜ਼ੋਰ - 3: ਮੱਧਮ - 4: ਮਜ਼ਬੂਤ (ਡਿਫਾਲਟ)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | ਲੋੜੀਂਦਾ ਘੱਟੋ-ਘੱਟ ਤਾਕਤ ਦਾ ਪੱਧਰ। |
| $strength_setting | `string` | ਐਡਮਿਨ ਸੈਟਿੰਗ ਦਾ ਮੁੱਲ (medium, strong, super_strong)। |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
