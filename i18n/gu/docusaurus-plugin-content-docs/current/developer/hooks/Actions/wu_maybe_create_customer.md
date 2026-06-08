---
id: wu_maybe_create_customer
title: ક્રિયા - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

જ્યારે ગ્રાહક ઉમેરાય છે, ત્યારે પ્લગઇન ડેવલપર્સને વધારાની કામગીરી (functionality) કરવાની મંજૂરી આપે છે.

ઉદાહરણ તરીકે, અહીં અમે ગ્રાહકને મુખ્ય સાઇટના યુઝર તરીકે ઉમેરવા માટેના હૂક્સ (hooks) ઉમેરીએ છીએ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | જે ગ્રાહકને કદાચ બનાવવામાં આવ્યો હોય. |
| $checkout | `\Checkout` | વર્તમાન ચેકઆઉટ ક્લાસ. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
