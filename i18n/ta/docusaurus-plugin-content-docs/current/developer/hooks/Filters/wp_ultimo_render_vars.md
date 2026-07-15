---
id: wp_ultimo_render_vars
title: வடிகட்டி - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Plugin உருவாக்குநர்கள் (developers) உலகளவில் (globally) ரெண்டர் சூழலுக்கு (render context) கூடுதல் மாறிகளை (variable) சேர்க்க இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | ரெண்டர் அழைப்பால் அனுப்பப்படும் மாறிகளைக் கொண்ட அணி (Array). |
| $view | `string` | ரெண்டர் செய்யப்பட வேண்டிய வியூவின் (view) பெயர். |
| $default_view | `string` | மாற்று வியூவின் (fallback_view) பெயர். |

### எப்போது இருந்து (Since) {#since}

- 2.0.0
### ஆதாரம் (Source) {#source}

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) என்ற இடத்தில், 31-வது வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது (Returns) {#returns}
