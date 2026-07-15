---
title: Mipangilio ya Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Mipangilio ya Gratis AI Agent

Skrini ya **Mipangilio → Ya Kina** katika Gratis AI Agent hutoa usanidi wa kiwango cha msimamizi kwa miunganisho ya backend. Ukurasa huu unaelezea utumaji mbele wa maoni, funguo za watoa huduma wa utafutaji, usanidi wa huduma ya Superdav inayosimamiwa, vidhibiti vya Google Calendar, mipangilio ya SMS ya TextBee, na alama za vipengele za mtandao mzima.

## Kufikia Mipangilio {#accessing-settings}

1. Katika msimamizi wa WordPress, nenda kwenye **Gratis AI Agent → Mipangilio**.
2. Bofya kichupo cha **Ya Kina**.

## Usanidi wa Kiingilio cha Maoni {#feedback-endpoint-configuration}

Kiingilio cha maoni hupokea maombi ya POST kutoka kwa agent wa AI kila mtumiaji anapotuma maoni kupitia kitufe cha dole gumba chini, bango la kidokezo-otomatiki, au amri ya `/report-issue`.

| Sehemu | Maelezo |
|---|---|
| **URL ya Kiingilio cha Maoni** | URL inayopokea mawasilisho ya maoni kama maombi ya HTTP POST yenye mwili wa JSON. |
| **Feedback API Key** | bearer token inayotumwa katika `Authorization` header ya kila ombi la maoni. Acha wazi ikiwa kiingilio chako hakihitaji uthibitishaji. |

### Mzigo wa JSON Unaotarajiwa {#expected-json-payload}

Kiingilio chako cha maoni lazima kikubali mwili wa JSON wenye angalau sehemu zifuatazo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Sehemu za ziada zinaweza kuwepo katika mzigo kulingana na muktadha wa mazungumzo.

### Thamani za `triage_category` {#triagecategory-values}

Tabaka la uchambuzi wa awali wa AI huweka mojawapo ya thamani zifuatazo kwa `triage_category` kabla ya kutuma mzigo mbele:

| Thamani | Maana |
|---|---|
| `factual_error` | Msaidizi alitoa taarifa za kihalisia zisizo sahihi. |
| `unhelpful_answer` | Jibu lilikuwa sahihi kiufundi lakini halikuwa na manufaa. |
| `inappropriate_content` | Jibu lilikuwa na maudhui ambayo hayapaswi kuonyeshwa kwa watumiaji. |
| `other` | Maoni hayakulingana na kategoria inayojulikana. |

### Uthibitishaji {#authentication}

Ikiwa kiingilio chako kinahitaji uthibitishaji, weka sehemu ya **Feedback API Key** kuwa bearer token yako. Agent hutuma:

```
Authorization: Bearer <your-api-key>
```

Ikiwa sehemu ya **Feedback API Key** ni tupu, hakuna `Authorization` header inayotumwa.

### Kuzima Ukusanyaji wa Maoni {#disabling-feedback-collection}

Acha sehemu zote mbili za **URL ya Kiingilio cha Maoni** na **Feedback API Key** wazi. Kitufe cha dole gumba chini na UI ya maoni hubaki kuonekana kwa watumiaji, lakini mawasilisho hayatumwi mbele kwa huduma yoyote ya nje.

## Brave Search API Key {#brave-search-api-key}

Pia kwenye kichupo cha **Ya Kina**, sehemu ya **Brave Search API Key** huwezesha uwezo wa [Utafutaji wa Intaneti](../configuration/internet-search).

| Sehemu | Maelezo |
|---|---|
| **Brave Search API Key** | API key yako kutoka kwenye dashboard ya wasanidi ya Brave Search. Inahitajika ili kuwezesha utafutaji wa intaneti katika msaidizi wa AI. |

Lebo ya sehemu inajumuisha kiungo kinachobofyekika kwenda kwenye ukurasa wa kujisajili wa Brave Search API. Acha wazi ili kuzima utafutaji wa intaneti.

Tazama [Utafutaji wa Intaneti](../configuration/internet-search) kwa nyaraka za mtumiaji wa mwisho kuhusu kipengele hiki.

## Huduma ya Superdav Inayosimamiwa {#managed-superdav-service}

Superdav AI Agent v1.18.0 huongeza viingilio vya huduma ya Superdav inayosimamiwa na utoaji wa muunganisho otomatiki kwa tovuti zinazoungwa mkono. Tumia vidhibiti hivi wakati tovuti yako inapaswa kuunganishwa na mtoa huduma mwenyeji badala ya kiingilio cha huduma kilichosanidiwa kwa mikono.

| Sehemu | Maelezo |
|---|---|
| **Huduma ya Superdav Inayosimamiwa** | Huwezesha muunganisho wa huduma ya Superdav mwenyeji kwa tovuti zinazoungwa mkono. |
| **Toa Muunganisho** | Huanzisha utoaji otomatiki wa kiingilio na vitambulisho. Tumia hili baada ya kuthibitisha kuwa tovuti inapaswa kutumia mtoa huduma anayesimamiwa. |
| **Kiingilio cha Huduma / Hali ya Muunganisho** | Huonyesha kiingilio cha sasa au hali ya muunganisho baada ya utoaji. |

Baada ya utoaji, hifadhi mipangilio na thibitisha hali ya muunganisho kabla ya kutegemea mtiririko wa kazi wa huduma-inayosimamiwa. Ikiwa utoaji utashindwa, pitia mwongozo wa kujaribu tena unaoonyeshwa na uthibitishe kuwa tovuti ina ruhusa ya kutumia mtoa huduma mwenyeji.

## Usanidi wa Google Calendar {#google-calendar-configuration}

Wakati vipengele vya kalenda vya Superdav AI Agent v1.18.0 vimewezeshwa, agent anaweza kusoma kalenda zilizosanidiwa na maelezo ya matukio. Zana za kalenda zimeelekezwa kwenye usomaji na ni muhimu kwa vikumbusho vinavyozingatia ratiba, ufuatiliaji wa washiriki, na ulinganishaji wa anwani.

| Sehemu | Maelezo |
|---|---|
| **Vitambulisho vya Google Calendar** | Huhifadhi vitambulisho au muunganisho wa token unaohitajika kusoma data ya kalenda. |
| **Uteuzi wa Kalenda** | Huzuia ni kalenda zipi zilizosanidiwa ambazo agent anaweza kukagua. |
| **Hali ya Muunganisho wa Kalenda** | Huthibitisha ikiwa vitambulisho vya sasa vinaweza kusoma kalenda na matukio. |

Weka vitambulisho vya kalenda vikiwa vimezuiliwa kwa kalenda ambazo agent anahitaji. Unganisha upya au zungusha vitambulisho ikiwa hali inaonyesha token iliyoisha muda.

## Arifa za SMS za TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 huongeza TextBee kama mtoa huduma wa SMS kwa mitiririko ya kazi ya arifa iliyosanidiwa. Arifa za SMS zinapaswa kuunganishwa na milango ya idhini ya binadamu kwa ujumbe nyeti au unaoonekana kwa watumiaji.

| Sehemu | Maelezo |
|---|---|
| **TextBee API Key** | Huthibitisha maombi kwa mtoa huduma wa SMS wa TextBee. |
| **Kifaa / Mtumaji wa TextBee** | Huchagua mtumaji au kifaa cha TextBee kinachotumika kwa ujumbe unaotoka, inapohitajika na mtoa huduma. |
| **Arifa za SMS Zimewezeshwa** | Huruhusu mitiririko ya kazi iliyoidhinishwa kutuma arifa za ujumbe wa maandishi. Acha ikiwa imezimwa ili kuzuia utumaji wa SMS. |

Tuma ujumbe wa majaribio kwa namba inayomilikiwa na msimamizi pekee, kisha thibitisha tabia ya lango la idhini kabla ya kuwezesha vikumbusho vilivyoratibiwa au vinavyoonekana kwa washiriki.

## Alama za Vipengele {#feature-flags}

Pia kilichoanzishwa katika v1.9.0, kichupo cha **Mipangilio → Alama za Vipengele** hutoa swichi za kuwasha/kuzima kwa utendaji wa hiari. Kila alama ama imewezeshwa au imezimwa katika mtandao mzima; hakuna ubatilishaji wa kila tovuti kwa wakati huu.

### Kufikia Alama za Vipengele {#accessing-feature-flags}

1. Katika msimamizi wa WordPress, nenda kwenye **Gratis AI Agent → Mipangilio**.
2. Bofya kichupo cha **Alama za Vipengele**.

### Alama za Udhibiti wa Ufikiaji {#access-control-flags}

| Bendera | Chaguo-msingi | Maelezo |
|---|---|---|
| **Zuia kwa Administrators** | Imezimwa | Inapowezeshwa, ni watumiaji walio na jukumu la `administrator` pekee wanaoweza kufungua paneli ya gumzo ya AI Agent. Majukumu mengine yote yanaona ujumbe wa "Wasiliana na msimamizi wako" badala yake. |
| **Zuia kwa Network Admins** | Imezimwa | Inapowezeshwa kwenye mtandao wa multisite, ni Super Admins pekee wanaoweza kutumia agent. Wasimamizi wa tovuti binafsi huzuiwa. Hutangulia "Zuia kwa Administrators" ikiwa zote zimewezeshwa. |
| **Ruhusu Ufikiaji wa Subscriber** | Imezimwa | Inapowezeshwa, watumiaji walio na jukumu la `subscriber` wanaweza kutumia kiolesura cha gumzo lakini wanadhibitiwa kwa uwezo wa kusoma pekee (hakuna uundaji wa machapisho au mabadiliko ya mipangilio). |
| **Zima kwa Wasio Wanachama** | Imezimwa | Huunganishwa na hali ya uanachama ya Ultimate Multisite. Inapowezeshwa, gumzo hufichwa kwa tovuti ambazo hazina uanachama unaotumika. |

### Bendera za Chapa {#branding-flags}

| Bendera | Chaguo-msingi | Maelezo |
|---|---|---|
| **Ficha Kijachini cha "Powered by Gratis AI Agent"** | Imezimwa | Huondoa mstari wa utambuzi wa chapa unaoonyeshwa chini ya chat widget. Inapendekezwa kwa utekelezaji wa white-label. |
| **Jina Maalum la Agent** | *(tupu)* | Hubadilisha lebo chaguo-msingi ya "Gratis AI Agent" kwenye kichwa cha gumzo na menyu ya msimamizi kwa jina lako mwenyewe la bidhaa. Acha tupu ili kutumia chaguo-msingi. |
| **Ficha Kiteuzi cha Agent** | Imezimwa | Inapowezeshwa, watumiaji hawawezi kubadili kati ya agent watano waliopo ndani. Agent wa sasa hubaki kuwa ule wowote uliosanidiwa kama chaguo-msingi katika Settings → General. |
| **Tumia Ikoni ya Tovuti kama Avatar ya Gumzo** | Imezimwa | Hubadilisha ikoni chaguo-msingi ya AI kwenye kichwa cha chat widget kwa ikoni ya tovuti ya WordPress (iliyowekwa chini ya Appearance → Customize → Site Identity). |

### Bendera za Usalama wa Uendeshaji Kiotomatiki {#automation-safety-flags}

Superdav AI Agent v1.18.0 huanzisha malango ya idhini ya binadamu na rekodi za vikumbusho kwa ajili ya miendeshaji ya kiotomatiki salama zaidi. Vidhibiti hivi vinaweza kuonekana katika feature flags au mipangilio ya juu ya uendeshaji kiotomatiki, kulingana na kifurushi kilichosakinishwa.

| Bendera | Chaguo-msingi | Maelezo |
|---|---|---|
| **Hitaji Idhini ya Binadamu** | Inapendekezwa kuwashwa | Husitisha automations nyeti hadi mtumiaji aliyeidhinishwa akague na kuthibitisha kitendo kilichopendekezwa. |
| **Uondoaji wa Vikumbusho Vilivyorudiwa** | Imewashwa | Hurekodi vikumbusho vilivyotumwa ili majaribio ya kurudia au miendeshaji iliyoratibiwa isitume arifa zilizorudiwa. |
| **Wezesha Zana za Kalenda** | Imezimwa hadi isanidiwe | Humruhusu agent kusoma kalenda na matukio ya Google yaliyosanidiwa. |
| **Wezesha Arifa za SMS** | Imezimwa hadi zisanidiwe | Huruhusu workflows zilizoidhinishwa kutuma arifa za SMS za TextBee baada ya credentials kuhifadhiwa. |

### Kutumia Mabadiliko {#applying-changes}

Bofya **Save Settings** baada ya kubadili bendera yoyote. Mabadiliko huanza kufanya kazi mara moja — hakuna kuondoa cache au kuwasha upya plugin kunakohitajika.
