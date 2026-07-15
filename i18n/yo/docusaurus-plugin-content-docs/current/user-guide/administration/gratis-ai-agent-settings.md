---
title: Àwọn ìṣètò Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Àwọn Ètò Gratis AI Agent

Ojú-ìbojú **Àwọn Ètò → To ti ni ilọsiwaju** ninu Gratis AI Agent ń pèsè ìṣètò ìpele-alákóso fún àwọn ìṣepọ̀ backend. Ojú-ìwé yìí ṣàkọsílẹ̀ fífi feedback ránṣẹ́ síwájú, àwọn kọ́kọ́rọ́ olupèsè ìṣàwárí, ìṣètò iṣẹ́ Superdav tí a ń ṣàkóso, àwọn ìṣàkóso Google Calendar, àwọn ètò SMS TextBee, àti àwọn àmì ẹya ka gbogbo nẹ́tíwọ́ọ̀kì.

## Wíwọlé sí Àwọn Ètò {#accessing-settings}

1. Nínú abojútó WordPress, lọ sí **Gratis AI Agent → Àwọn Ètò**.
2. Tẹ taabu **To ti ni ilọsiwaju**.

## Ìṣètò Opin-ọ̀nà Feedback {#feedback-endpoint-configuration}

Opin-ọ̀nà feedback ń gba àwọn ìbéèrè POST láti ọdọ agent AI nígbàkúùgbà tí oníṣe bá fi feedback ránṣẹ́ nípasẹ̀ bọ́tìnì atanpako-sílẹ̀, àkójáde auto-prompt, tàbí àṣẹ `/report-issue`.

| Pápá | Àpèjúwe |
|---|---|
| **URL Opin-ọ̀nà Feedback** | URL tí ń gba àwọn fífi feedback ránṣẹ́ gẹ́gẹ́ bí àwọn ìbéèrè HTTP POST pẹ̀lú JSON body. |
| **Feedback API Key** | bearer token tí a fi ránṣẹ́ nínú `Authorization` header ti ìbéèrè feedback kọ̀ọ̀kan. Fi sílẹ̀ ní òfo bí opin-ọ̀nà rẹ kò bá nílò ìfàrìdí. |

### JSON Payload Tí a Retí {#expected-json-payload}

Opin-ọ̀nà feedback rẹ gbọ́dọ̀ gba JSON body pẹ̀lú ó kéré tán àwọn pápá wọ̀nyí:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Àwọn pápá míì lè wà nínú payload da lori àyíká ìjíròrò.

### Àwọn Iye `triage_category` {#triagecategory-values}

Ìpele ìtójú AI ń yàn ọ̀kan lára àwọn iye wọ̀nyí sí `triage_category` kí ó tó fi payload ránṣẹ́ síwájú:

| Iye | Ìtumọ̀ |
|---|---|
| `factual_error` | Olùrànlọ́wọ́ pèsè ìwífún òtítọ́ tí kò tọ́. |
| `unhelpful_answer` | Ìdáhùn náà tọ́ ní ti imọ̀-ẹ̀rọ ṣùgbọ́n kò wúlò. |
| `inappropriate_content` | Ìdáhùn náà ní àkóónú tí kò yẹ kí a fi hàn sí àwọn oníṣe. |
| `other` | Feedback náà kò bá ẹ̀ka tí a mọ̀ mu. |

### Ìfàrìdí {#authentication}

Bí opin-ọ̀nà rẹ bá nílò ìfàrìdí, ṣètò pápá **Feedback API Key** sí bearer token rẹ. Agent náà ń ránṣẹ́:

```
Authorization: Bearer <your-api-key>
```

Bí pápá **Feedback API Key** bá ṣófo, a kò ní fi `Authorization` header ránṣẹ́.

### Pípá Àkójọpọ̀ Feedback {#disabling-feedback-collection}

Fi pápá **URL Opin-ọ̀nà Feedback** àti **Feedback API Key** méjèèjì sílẹ̀ ní òfo. Bọ́tìnì atanpako-sílẹ̀ àti UI feedback yóò ṣì hàn sí àwọn oníṣe, ṣùgbọ́n àwọn fífi-ránṣẹ́ kò ní lọ sí iṣẹ́ ìta kankan.

## Brave Search API Key {#brave-search-api-key}

Bákan náà lórí taabu **To ti ni ilọsiwaju**, pápá **Brave Search API Key** ń jẹ́ kí agbára [Ìṣàwárí Íńtánẹ́ẹ̀tì](../configuration/internet-search) ṣiṣẹ́.

| Pápá | Àpèjúwe |
|---|---|
| **Brave Search API Key** | Kọ́kọ́rọ́ API rẹ láti dashboard olùdàgbàsókè Brave Search. Ó pọndandan láti jẹ́ kí ìṣàwárí íńtánẹ́ẹ̀tì ṣiṣẹ́ nínú olùrànlọ́wọ́ AI. |

Àkọlé pápá náà ní ìjápọ̀ tí a lè tẹ sí ojú-ìwé ìforúkọsílẹ̀ API Brave Search. Fi sílẹ̀ ní òfo láti pa ìṣàwárí íńtánẹ́ẹ̀tì.

Wo [Ìṣàwárí Íńtánẹ́ẹ̀tì](../configuration/internet-search) fún ìwé-àkọsílẹ̀ oníṣe-ìkẹyìn lórí ẹya yìí.

## Iṣẹ́ Superdav Tí a Ń Ṣàkóso {#managed-superdav-service}

Superdav AI Agent v1.18.0 ṣàfikún àwọn opin-ọ̀nà iṣẹ́ Superdav tí a ń ṣàkóso àti pípèsè ìsopọ̀ aládàáṣiṣẹ́ fún àwọn site tí a ṣe àtìlẹ́yìn fún. Lo àwọn ìṣàkóso wọ̀nyí nígbà tí site rẹ gbọ́dọ̀ sopọ̀ mọ́ olupèsè hosted dípò opin-ọ̀nà iṣẹ́ tí a ṣètò pẹ̀lú ọwọ́.

| Pápá | Àpèjúwe |
|---|---|
| **Iṣẹ́ Superdav Tí a Ń Ṣàkóso** | Ń jẹ́ kí ìsopọ̀ iṣẹ́ Superdav hosted ṣiṣẹ́ fún àwọn site tí a ṣe àtìlẹ́yìn fún. |
| **Pèsè Ìsopọ̀** | Bẹ̀rẹ̀ pípèsè opin-ọ̀nà àti ẹ̀rí ìdánimọ̀ aládàáṣiṣẹ́. Lo èyí lẹ́yìn tí o bá ti jẹ́rìí pé site náà gbọ́dọ̀ lo olupèsè tí a ń ṣàkóso. |
| **Opin-ọ̀nà Iṣẹ́ / Ipo Ìsopọ̀** | Fi opin-ọ̀nà tàbí ipo ìsopọ̀ lọwọlọwọ hàn lẹ́yìn pípèsè. |

Lẹ́yìn pípèsè, fi àwọn ètò pamọ́ kí o sì ṣàyẹ̀wò ipo ìsopọ̀ kí o tó gbẹ́kẹ̀lé àwọn ìṣàn-iṣẹ́ iṣẹ́-tí-a-ń-ṣàkóso. Bí pípèsè bá kùnà, ṣàyẹ̀wò ìtọ́nisọ́nà ìgbìyànjú-lẹẹkansi tí a fi hàn, kí o sì jẹ́rìí pé site náà ní àṣẹ láti lo olupèsè hosted.

## Ìṣètò Google Calendar {#google-calendar-configuration}

Nígbà tí àwọn ẹya kalẹ́ńdà Superdav AI Agent v1.18.0 bá ṣiṣẹ́, agent náà lè ka àwọn kalẹ́ńdà tí a ṣètò àti àwọn àlàyé ìṣẹ̀lẹ̀. Àwọn irinṣẹ́ kalẹ́ńdà dojúkọ kíkà, wọ́n sì wúlò fún àwọn ìránnilétí tó mọ ìṣètò-àkókò, ìtẹ̀lé àwọn alábàápàdé, àti ìbáramu ìbásọrọ̀.

| Pápá | Àpèjúwe |
|---|---|
| **Àwọn Ẹ̀rí Ìdánimọ̀ Google Calendar** | Ń tọ́jú àwọn ẹ̀rí ìdánimọ̀ tàbí ìsopọ̀ token tí ó nílò láti ka data kalẹ́ńdà. |
| **Yíyàn Kalẹ́ńdà** | Dín iye àwọn kalẹ́ńdà tí a ṣètò tí agent lè ṣàyẹ̀wò kù. |
| **Ipo Ìsopọ̀ Kalẹ́ńdà** | Ń jẹ́rìí bóyá àwọn ẹ̀rí ìdánimọ̀ lọwọlọwọ lè ka àwọn kalẹ́ńdà àti ìṣẹ̀lẹ̀. |

Jẹ́ kí àwọn ẹ̀rí ìdánimọ̀ kalẹ́ńdà dá dúró sí àwọn kalẹ́ńdà tí agent náà nílò. Sopọ̀ padà tàbí yí àwọn ẹ̀rí ìdánimọ̀ padà bí ipo bá tọ́ka sí token tí ó ti parí àkókò.

## Àwọn Ìfitónilétí SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 ṣàfikún TextBee gẹ́gẹ́ bí olupèsè SMS fún àwọn ìṣàn-iṣẹ́ ìfitónilétí tí a ṣètò. Àwọn ìfitónilétí SMS gbọ́dọ̀ wà pẹ̀lú àwọn ibodè ìfọwọ́sí ènìyàn fún àwọn ìfiránṣẹ́ tó ní ìfarabalẹ̀ tàbí tó dojúkọ oníṣe.

| Pápá | Àpèjúwe |
|---|---|
| **TextBee API Key** | Ń fìdí àwọn ìbéèrè sí olupèsè SMS TextBee múlẹ̀. |
| **Ẹ̀rọ / Olùránṣẹ́ TextBee** | Yan olùránṣẹ́ tàbí ẹ̀rọ TextBee tí a lò fún àwọn ìfiránṣẹ́ tí ń jáde, nígbà tí olupèsè bá nílò rẹ̀. |
| **Àwọn Ìfitónilétí SMS Ṣiṣẹ́** | Ń gba àwọn ìṣàn-iṣẹ́ tí a fọwọ́sí láyè láti fi àwọn ìfitónilétí ìfiránṣẹ́-ọ̀rọ̀ ránṣẹ́. Fi sílẹ̀ ní pípá láti dènà fífi SMS ránṣẹ́. |

Fi ìfiránṣẹ́ ìdánwò ránṣẹ́ sí nọ́mbà tí alákóso ní nìkan, lẹ́yìn náà jẹ́rìí ìwà ibodè-ìfọwọ́sí kí o tó jẹ́ kí àwọn ìránnilétí tí a ṣètò tàbí tí ó dojúkọ alábàápàdé ṣiṣẹ́.

## Àwọn Àmì Ẹya {#feature-flags}

Bákan náà tí a ṣe àgbékalẹ̀ ní v1.9.0, taabu **Àwọn Ètò → Àwọn Àmì Ẹya** ń pèsè àwọn yíyípadà toggle fún iṣẹ́ àṣàyàn. Àmì kọ̀ọ̀kan yálà ó ṣiṣẹ́ tàbí ó jẹ́ pípá ka gbogbo nẹ́tíwọ́ọ̀kì; kò sí fífi yípadà fún site kọ̀ọ̀kan ní àkókò yìí.

### Wíwọlé sí Àwọn Àmì Ẹya {#accessing-feature-flags}

1. Nínú abojútó WordPress, lọ sí **Gratis AI Agent → Àwọn Ètò**.
2. Tẹ taabu **Àwọn Àmì Ẹya**.

### Àwọn Àmì Ìṣàkóso Ìwọlé {#access-control-flags}

| Àmì | Àiyipada | Àpèjúwe |
|---|---|---|
| **Fi sí Àwọn Alákóso Nìkan** | Paa | Nígbà tí ó bá ṣiṣẹ́, àwọn oníṣe pẹ̀lú ipa `administrator` nìkan ni wọ́n lè ṣí panel ìjíròrò AI Agent. Gbogbo ipa míì yóò rí ìfiránṣẹ́ "Kan sí alákóso rẹ" dípò rẹ̀. |
| **Fi sí Àwọn Alákóso Nẹ́tíwọ́ọ̀kì Nìkan** | Paa | Nígbà tí ó bá ṣiṣẹ́ lórí nẹ́tíwọ́ọ̀kì multisite, àwọn Super Admins nìkan ni wọ́n lè lo agent náà. A dènà àwọn alákóso site kọ̀ọ̀kan. Ó ní àṣẹ ṣáájú "Fi sí Àwọn Alákóso Nìkan" bí méjèèjì bá ṣiṣẹ́. |
| **Gba Ìwọlé Alábàárà Láyè** | Paa | Nígbà tí ó bá ṣiṣẹ́, àwọn oníṣe pẹ̀lú ipa `subscriber` lè lo interface ìjíròrò ṣùgbọ́n a fi wọ́n mọ́ agbára kíkà-nìkan (kò sí ṣíṣe post tàbí yíyí àwọn ètò padà). |
| **Pa Fún Àwọn Tí Kì Í Ṣe Ọmọ Ẹgbẹ́** | Paa | Ń ṣepọ̀ pẹ̀lú ipo membership Ultimate Multisite. Nígbà tí ó bá ṣiṣẹ́, ìjíròrò yóò farapamọ́ fún àwọn site tí kò ní membership tó ń ṣiṣẹ́. |

### Àwọn Àmì Branding {#branding-flags}

| Àmì | Àiyipada | Àpèjúwe |
|---|---|---|
| **Fi Footer "Powered by Gratis AI Agent" Pamọ́** | Paa | Yọ ìlà ìtọ́kasí branding tí a fi hàn ní ìsàlẹ̀ widget ìjíròrò. A dábàá rẹ fún àwọn ìfilọlẹ̀ white-label. |
| **Orúkọ Agent Àṣà** | *(òfo)* | Rọ́pò àkọlé àiyipada "Gratis AI Agent" nínú header ìjíròrò àti menu abojútó pẹ̀lú orúkọ ọja tirẹ. Fi sílẹ̀ ní òfo láti lo àiyipada. |
| **Fi Olùyan Agent Pamọ́** | Paa | Nígbà tí ó bá ṣiṣẹ́, àwọn oníṣe kò lè yí padà láàárín àwọn agent marun tí a kọ́ sínú rẹ̀. Agent lọwọlọwọ jẹ́ fífi-dúró sí ohunkóhun tí a ṣètò gẹ́gẹ́ bí àiyipada nínú Àwọn Ètò → Gbogbogbò. |
| **Lo Àwòrán Site gẹ́gẹ́ bí Chat Avatar** | Paa | Rọ́pò àwòrán AI àiyipada nínú header widget ìjíròrò pẹ̀lú àwòrán site WordPress (tí a ṣètò lábẹ́ Ìrísí → Ṣe Àṣà → Ìdánimọ̀ Site). |

### Àwọn Àmì Ààbò Aládàáṣiṣẹ́ {#automation-safety-flags}

Superdav AI Agent v1.18.0 ṣàgbékalẹ̀ àwọn ibodè ìfọwọ́sí ènìyàn àti àwọn àkọsílẹ̀ ìránnilétí fún àwọn ìṣiṣẹ́ aládàáṣiṣẹ́ tó ní ààbò síi. Àwọn ìṣàkóso wọ̀nyí lè hàn nínú àwọn àmì ẹya tàbí àwọn ètò aládàáṣiṣẹ́ to ti ni ilọsiwaju, da lori package tí a fi sílẹ̀.

| Àmì | Àiyipada | Àpèjúwe |
|---|---|---|
| **Nílò Ìfọwọ́sí Ènìyàn** | A dábàá kí ó tan | Dá àwọn aládàáṣiṣẹ́ tó ní ìfarabalẹ̀ dúró títí tí oníṣe tí ó ní àṣẹ yóò fi ṣàyẹ̀wò tí yóò sì jẹ́rìí ìgbésẹ̀ tí a dábàá. |
| **Ìyọkúrò Àdàkọ Ìránnilétí** | Tan | Ṣe àkọsílẹ̀ àwọn ìránnilétí tí a ti fi ránṣẹ́ kí àwọn ìgbìyànjú-lẹẹkansi tàbí àwọn ìṣiṣẹ́ tí a ṣètò má bà a fi àwọn ìfitónilétí àdàkọ ránṣẹ́. |
| **Jẹ́ Kí Àwọn Irinṣẹ́ Kalẹ́ńdà Ṣiṣẹ́** | Paa títí a ó fi ṣètò | Gba agent láyè láti ka àwọn kalẹ́ńdà Google tí a ṣètò àti àwọn ìṣẹ̀lẹ̀. |
| **Jẹ́ Kí Àwọn Ìfitónilétí SMS Ṣiṣẹ́** | Paa títí a ó fi ṣètò | Gba àwọn ìṣàn-iṣẹ́ tí a fọwọ́sí láyè láti fi àwọn ìfitónilétí SMS TextBee ránṣẹ́ lẹ́yìn tí a bá ti fi àwọn ẹ̀rí ìdánimọ̀ pamọ́. |

### Lílo Àwọn Ìyípadà {#applying-changes}

Tẹ **Fi Àwọn Ètò Pamọ́** lẹ́yìn yíyí àmì kankan. Àwọn ìyípadà máa bẹ̀rẹ̀ iṣẹ́ lẹ́sẹ̀kẹsẹ̀ — kò nílò fífi cache ṣàn kúrò tàbí mímú plugin ṣiṣẹ́ padà.
