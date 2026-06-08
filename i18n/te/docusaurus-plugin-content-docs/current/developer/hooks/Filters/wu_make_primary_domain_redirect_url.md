---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ఒక డొమైన్‌ను ప్రైమరీగా చేసిన తర్వాత వచ్చే redirect URL ని ఫిల్టర్ చేస్తుంది.

డొమైన్‌ను ప్రైమరీగా సెట్ చేసిన తర్వాత యూజర్లు ఎక్కడికి redirect కావాలి అనేది డెవలపర్‌లు కస్టమైజ్ చేయడానికి ఇది అనుమతిస్తుంది. డిఫాల్ట్‌గా, ఇది మెయిన్ సైట్‌లోని ప్రస్తుత URL కి, లేదా మార్పు చేస్తున్న సైట్ యొక్క అడ్మిన్ URL కి redirect అవుతుంది.

## పారామీటర్లు (Parameters)

| Name | Type | వివరణ |
|------|------|-------------|
| $redirect_url | `string` | డిఫాల్ట్ redirect URL. ఇది ప్రస్తుత URL (మెయిన్ సైట్ అయితే) లేదా ప్రస్తుత సైట్ యొక్క అడ్మిన్ URL అయి ఉండవచ్చు. |
| $current_site | `int` | డొమైన్ ప్రైమరీగా చేయబడుతున్న సైట్ యొక్క ID. |
| $domain | `\Domain` | ప్రైమరీగా చేయబడిన డొమైన్ ఆబ్జెక్ట్. |
| $old_primary_domains | `array` | గతంలో ప్రైమరీగా ఉన్న డొమైన్ల ID ల శ్రేణి (Array). |

### ఎప్పటి నుండి (Since)

- 2.0.0
### మూలం (Source)

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## తిరిగి ఇచ్చేది (Returns)
ఫిల్టర్ చేయబడిన redirect URL.
