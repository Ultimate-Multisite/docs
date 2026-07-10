---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Dipicu apabila percubaan pembaharuan domain gagal.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran yang mencetuskan pembaharuan. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata pembaharuan (domain_name, years, dsb.). |
| $error_message | `string` | Mesej ralat yang boleh dibaca manusia daripada pendaftar domain. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) pada baris 630
