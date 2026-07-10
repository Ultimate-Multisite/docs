---
id: wu_page_load
title: ક્રિયા - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

પ્લગઇન ડેવલપર્સને અમારા પેજીસ પર વધારાના હૂક્સ (hooks) ઉમેરવાની મંજૂરી આપે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | આ પેજની ID. |
| $page_hook | `string` | આ પેજનો પેજ હૂક. |
| $admin_page | `self` | પેજ ઇન્સ્ટન્સ. |

### Since {#since}

- 1.8.2
- 2.0.4: ત્રીજો પેરામીટર ઉમેર્યો: પેજ ઇન્સ્ટન્સ.
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) માં લાઇન 318 પર વ્યાખ્યાયિત.
