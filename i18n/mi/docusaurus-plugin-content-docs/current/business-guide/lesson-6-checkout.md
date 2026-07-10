---
title: 'Akoranga 6: Te Wheako Rēhitatanga'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Akoranga 6: Te Wheako Rēhita {#lesson-6-the-signup-experience}

Ko te rere utu te wāhi ka huri te hiahia hei moni whiwhi. Ka ngaro ngā kiritaki i tētahi tukanga rēhita rangirua, whānui rānei. Ka huri mai ngā kiritaki i tētahi rere e hāngai ana ki te wāhanga mākete, e kōrero ana i tō rātou reo, ā, e māmā ana te whakamahi.

## Te Wāhi i Mutu ai Tātou {#where-we-left-off}

Kua whirihoratia ngā tātauira me ngā mahere o FitSite. Ināianei ka hanga tātou i te wheako rēhitatanga me te utu e huri ai ngā rangatira studio whakapakari tinana hei kiritaki utu.

## Te Mārama ki te Rere Rēhitatanga {#understanding-the-registration-flow}

He puka utu taumata-maha, ka taea te whakarite katoa, ngā puka utu a Ultimate Multisite. Mō FitSite, e hiahia ana tātou ki tētahi rere e:

1. Āhua nei i hangaia mō ngā pakihi whakapakari tinana
2. Kohikohi ana i ngā mea e hiahiatia ana anake
3. Kawe ana i te kiritaki ki tētahi pae e mahi ana i te tere ka taea

Tirohia [Te Rere Rēhitatanga](/user-guide/configuration/the-registration-flow) mō te tohutoro hangarau katoa.

## Te Hoahoa i te Utu FitSite {#designing-the-fitsite-checkout}

Whakatere ki **Ultimate Multisite > Puka Utu** ka waihanga i tētahi puka hou.

### Hipanga 1: Tīpakonga Mahere {#step-1-plan-selection}

Ko te mea tuatahi me kite e tētahi rangatira studio whakapakari tinana ko ngā mahere, kua whakaaturia ki ngā kupu e mārama ana rātou.

- Tāpirihia tētahi āpure **Ripanga Utu**
- Whirihorahia kia whakaatu i ngā mahere FitSite e toru katoa
- Ka puta ki konei ngā whakaahuatanga mahere i tuhia e koe i te Akoranga 5 -- me whakarite kia kōrero ēnei ki ngā hiahia pakihi whakapakari tinana, kaua ki ngā āhuatanga hangarau

:::tip He Mea Nui te Reo e Hāngai ana ki te Wāhanga Mākete
Kāore he tikanga o te "1 GB storage" ki tētahi rangatira whare whakapakari tinana. He nui te tikanga o te "Ngā mea katoa e hiahiatia ana mō tētahi paetukutuku studio ngaio." Tuhia ngā whakaahuatanga mahere ki te reo o tō kiritaki.
:::

### Hipanga 2: Tīpakonga Tātauira {#step-2-template-selection}

Whai muri i te kōwhiri i tētahi mahere, ka kōwhiri te kiritaki i tana tātauira tīmatanga.

- Tāpirihia tētahi āpure **Tīpakonga Tātauira**
- Ka tātarihia ngā tātauira e wātea ana e ai ki te mahere i tīpakohia e rātou (i whirihoratia i te Akoranga 5)
- Me whai ia tātauira i tētahi atahanga arokite e whakaatu ana i tētahi hoahoa motuhake ki te whakapakari tinana

### Hipanga 3: Waihanga Account {#step-3-account-creation}

Kia iti noa tēnei. Kohikohia anake:

- Wāhitau īmēra
- Kupuhipa
- Ingoa studio/pakihi (ka noho tēnei hei ingoa pae mā rātou)

Kaua e tono mō ngā mōhiohio kāore e hiahiatia ana i te wā rēhita. Ka whakaheke ia āpure tāpiri i ngā hurihanga kiritaki.

### Hipanga 4: Tatūnga Pae {#step-4-site-setup}

- **Taitara pae**: Whakakī-aunoa mai i te ingoa studio i tāurutia i te Hipanga 3
- **URL pae**: Hanga-aunoatia mai i te ingoa studio (hei tauira, `ironworks.fitsite.com`)

### Hipanga 5: Utu {#step-5-payment}

- Tāpirihia te āpure **Utu**
- Whirihorahia tō kuwaha utu (e taunakitia ana a [Stripe](/user-guide/payment-gateways/stripe) mō te nama ohaurunga)
- Mēnā i waihanga koe i ngā whakakikinga ota i te Akoranga 5, tāpirihia tētahi āpure **Whakakikinga Ota** i mua i te hipanga utu

### Hipanga 6: Whakaūnga {#step-6-confirmation}

- Whakaritea te karere whakaū ki te reo e hāngai ana ki te whakapakari tinana
- Hei tauira: "Kei te waihangatia tō paetukutuku studio whakapakari tinana. Ka tukuna aunoa koe ki tō pae hou ākuanei."

## Te Tāpirihia o tētahi Pana Tīpakonga Wā {#adding-a-period-selection-toggle}

Mēnā i whakaritea e koe ngā rerekētanga utu ki ō mahere (ia marama ki te ā-tau), tāpirihia tētahi āpure **Tīpakonga Wā** ki te puka utu kia taea ai e ngā kiritaki te whakawhiti i waenga i ngā wā nama. Tirohia [Ngā Puka Utu](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) mō ngā tohutohu.

## Te Whirihora Utu {#configuring-payment}

Mēnā kāore anō koe kia whakarite i tētahi kuwaha utu:

1. Whakatere ki **Ultimate Multisite > Tautuhinga > Kuwaha Utu**
2. Whāia te [aratohu tatūnga Stripe](/user-guide/payment-gateways/stripe), tō kuwaha pai ake rānei
3. Whakamātauria tētahi rere utu katoa me tētahi utu whakamātautau

Tirohia [Te Whiwhi Utu](/user-guide/payment-gateways/getting-paid) mō ngā taipitopito mō te āhua o te rere o ngā utu ki tō Account.

## Te Whakamātau i te Rere {#testing-the-flow}

I mua i te neke whakamua, whakaotihia tētahi rēhitatanga whakamātautau katoa:

1. Whakatuwheratia te puka utu ki tētahi matapihi pūtirotiro incognito/tūmataiti
2. Tīpakohia tētahi mahere
3. Kōwhiria tētahi tātauira
4. Waihangatia tētahi Account
5. Whakaotia te utu (whakamahia te aratau whakamātautau)
6. Manatokohia kua waihangatia te pae me te tātauira tika

Tirohia mēnā:

- [ ] He mārama ngā whakaahuatanga mahere, ā, e hāngai ana ki te wāhanga mākete
- [ ] Ka whakaatu ngā arokite tātauira i ngā hoahoa e tika ana mō te whakapakari tinana
- [ ] Ka tika te hanga o te URL pae mai i te ingoa studio
- [ ] Ka oti pai te tukanga utu
- [ ] Ka tau te kiritaki ki tētahi pae e mahi ana me te tātauira i tīpakohia
- [ ] Ka whakamahi ngā īmēra whakaū i te reo e hāngai ana ki te whakapakari tinana

## Te Whatunga FitSite Tae Noa ki Tēnei Wā {#the-fitsite-network-so-far}

```
Whatunga FitSite
├── WordPress Multisite (aratau subdomain)
├── Ultimate Multisite (kua whirihoratia)
├── Manaaki me te wildcard SSL + mahere rohe
├── Tātauira Pae (Studio Essential, Gym Pro, Fitness Chain)
├── Hua (Starter, Growth, Pro + Whakakikinga Ota)
├── Rere Utu
│   ├── Tīpakonga mahere me ngā whakaahuatanga e hāngai ana ki te wāhanga mākete
│   ├── Tīpakonga tātauira me ngā arokite whakapakari tinana
│   ├── Waihanga Account iti noa
│   ├── Utu mā Stripe
│   └── Whakaūnga e hāngai ana ki te whakapakari tinana
└── Kua rite mō te waitohu (akoranga e whai ake nei)
```

## Ngā Mea i Hanga e Tātou i Tēnei Akoranga {#what-we-built-this-lesson}

- **Tētahi puka utu taumata-maha** kua whakaritea mō ngā rangatira studio whakapakari tinana
- **Te reo e hāngai ana ki te wāhanga mākete** puta noa i te rere rēhita
- **He aukati iti noa** -- ko ngā āpure matua anake, he ara tere ki tētahi pae e mahi ana
- **Tuitui utu** me te manatoko whakamātautau
- **Tētahi rere mutunga-ki-te-mutunga kua whakamātauria** mai i te tīpakonga mahere ki tētahi pae e mahi ana

---

**Ka whai ake:** [Akoranga 7: Kia Riro Māu](lesson-7-branding) -- ka white-label tātou i te tūāpapa, ā, ka whakatū i a FitSite hei waitohu.
