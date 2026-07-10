---
id: wu_domain_renewal_failed
title: কাৰ্য্য - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ডোমেইন পুনৰীক্ষণ (renewal) প্ৰয়াস বিফল হোৱাৰ পিছত এই অ্যাকশনটো ট্ৰিগাৰ হয়।

## পৰিটাৰী (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | পুনৰীক্ষণটোৰ কাৰণ হোৱা পেমেন্টটো। |
| $renewal_data | `array&lt;string,mixed&gt;` | পুনৰীক্ষণৰ মেটাডেটা (domain_name, years, ইত্যাদি)। |
| $error_message | `string` | ৰেজিষ্ট্ৰাৰৰ পৰা পোৱা মানৱ-পঠনযোগ্য ভুলৰ বাৰ্তা। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ফাইলৰ ৬৩০ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
