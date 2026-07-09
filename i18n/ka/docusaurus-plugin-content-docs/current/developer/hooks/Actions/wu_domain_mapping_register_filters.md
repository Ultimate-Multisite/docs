---
id: wu_domain_mapping_register_filters
title: ქმედება - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

ზოგიერთი plugin შეინახავს URL-ს მანამდე, სანამ mapping აქტიური გახდებოდა, ან URL-ებს ააგებს განსხვავებული წესით, რომელიც ზემოთ მოცემულ filters-ში არ შედის.

ასეთ შემთხვევებში გვინდა დამატებითი filters-ის დამატება. გადაცემული მეორე parameter არის mangle_url callback. გირჩევთ, ეს filter პირდაპირ არ გამოიყენოთ. ამის ნაცვლად გამოიყენეთ Domain_Mapping::apply_mapping_to_url method.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | ეს object. |

### Since {#since}

- 2.0.0
### Source {#source}

განსაზღვრულია [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530)-ში, ხაზზე 530
