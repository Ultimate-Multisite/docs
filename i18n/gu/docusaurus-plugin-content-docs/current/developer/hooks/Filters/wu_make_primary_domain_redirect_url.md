---
id: wu_make_primary_domain_redirect_url
title: ફિલ્ટર - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

જ્યારે કોઈ ડોમેનને પ્રાથમિક (primary) બનાવવામાં આવે છે, ત્યારે રીડાયરેક્ટ (redirect) URL ને ફિલ્ટર કરે છે.

આ ડેવલપર્સને એ કસ્ટમાઇઝ કરવાની મંજૂરી આપે છે કે ડોમેનને પ્રાથમિક સેટ કર્યા પછી યુઝર્સને ક્યાં રીડાયરેક્ટ કરવામાં આવશે. ડિફોલ્ટ રૂપે, તે મુખ્ય સાઇટ પરના વર્તમાન URL પર, અથવા જે સાઇટમાં ફેરફાર કરવામાં આવી રહ્યો છે તેના એડમિન URL પર રીડાયરેક્ટ થાય છે.

## પેરામીટર્સ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ડિફોલ્ટ રીડાયરેક્ટ URL. કાં તો વર્તમાન URL (જો મુખ્ય સાઇટ હોય) અથવા વર્તમાન સાઇટનો એડમિન URL. |
| $current_site | `int` | જે સાઇટનું ડોમેન પ્રાથમિક બનાવવામાં આવી રહ્યું છે તેનો ID. |
| $domain | `\Domain` | જે ડોમેનને પ્રાથમિક બનાવવામાં આવ્યું છે તે ડોમેન ઓબ્જેક્ટ. |
| $old_primary_domains | `array` | એ ડોમેન ID ની એરે જે પહેલા પ્રાથમિક હતા. |

### ક્યારથી (Since) {#since}

- 2.0.0
### સ્ત્રોત (Source) {#source}

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## પરત કરે છે (Returns) {#returns}
ફિલ્ટર કરેલ રીડાયરેક્ટ URL.
