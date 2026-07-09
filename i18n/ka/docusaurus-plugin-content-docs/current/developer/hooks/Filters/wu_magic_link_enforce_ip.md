---
id: wu_magic_link_enforce_ip
title: ფილტრი - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

გაფილტრეთ, უნდა იძულებით ამოქმედდეს თუ არა IP მისამართის გადამოწმება.

დააყენეთ false-ზე, რათა token-ებმა იმუშაოს სხვადასხვა ქსელიდან. ეს ამცირებს უსაფრთხოებას, მაგრამ ზრდის გამოყენებადობას (მაგ., მობილური მომხმარებლებისთვის, რომლებიც ქსელებს ცვლიან).

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | უნდა იძულებით ამოქმედდეს თუ არა IP მისამართის დამთხვევა. |

### მას შემდეგ {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422)-ში, ხაზზე 422
