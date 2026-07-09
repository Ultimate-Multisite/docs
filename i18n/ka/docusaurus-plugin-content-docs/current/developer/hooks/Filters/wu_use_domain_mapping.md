---
id: wu_use_domain_mapping
title: ფილტრი - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# ფილტრი: wu_use_domain_mapping {#filter-wuusedomainmapping}

განსაზღვრავს, უნდა გამოიყენებოდეს თუ არა mapping

ჩვეულებრივ, გსურთ დაუშვათ მხოლოდ აქტიური mapping-ების გამოყენება. თუმცა, თუ გსურთ უფრო მოწინავე ლოგიკის გამოყენება, ან არააქტიური დომენების mapping-ის დაშვებაც, უბრალოდ აქ გაფილტრეთ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $is_active | `bool` | უნდა ჩაითვალოს თუ არა mapping აქტიურად? |
| $mapping | `\Domain` | mapping, რომელსაც ვამოწმებთ |
| $domain | `string` |  |

### წყარო {#source}

განსაზღვრულია [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391)-ში, ხაზზე 391
