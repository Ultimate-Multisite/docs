---
title: Ngā Tautuhinga Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Tautuhinga Gratis AI Agent

Ko te mata **Tautuhinga → Arā Atu Anō** i Gratis AI Agent e whakarato ana i te whirihoranga taumata-kaiwhakahaere mō ngā whakaurunga tuarongo. Ka tuhi tēnei whārangi i te tuku whakamua urupare, ngā kī kaiwhakarato rapu, te whakarite ratonga Superdav whakahaerehia, ngā mana Google Calendar, ngā tautuhinga SMS TextBee, me ngā haki āhuatanga puta noa i te whatunga.

## Te Uru ki ngā Tautuhinga

1. I te whakahaere WordPress, haere ki **Gratis AI Agent → Tautuhinga**.
2. Pāwhiritia te ripa **Arā Atu Anō**.

## Whirihoranga Pūwāhi Urupare

Ka whiwhi te pūwāhi urupare i ngā tono POST mai i te kaiāwhina AI i ngā wā katoa ka tuku urupare tētahi kaiwhakamahi mā te pātene koromatua-ki-raro, te kara akiaki-aunoa, te whakahau `/report-issue` rānei.

| Āpure | Whakaahuatanga |
|---|---|
| **URL Pūwāhi Urupare** | Te URL ka whiwhi i ngā tukunga urupare hei tono HTTP POST me tētahi tinana JSON. |
| **Feedback API Key** | He bearer token ka tukuna ki te `Authorization` header o ia tono urupare. Waiho kia wātea mēnā kāore tō pūwāhi e tono motuhēhēnga. |

### Kawenga JSON e Tūmanakohia Ana

Me whakaae tō pūwāhi urupare ki tētahi tinana JSON me ēnei āpure e whai ake nei, i te iti rawa:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Ka noho pea he āpure anō i roto i te kawenga, e ai ki te horopaki o te kōrerorero.

### Uara `triage_category`

Ka tautapa te paparanga whakarōpū AI i tētahi o ngā uara e whai ake nei ki `triage_category` i mua i te tuku whakamua i te kawenga:

| Uara | Tikanga |
|---|---|
| `factual_error` | I tukuna e te kaiāwhina he pārongo meka hē. |
| `unhelpful_answer` | I tika ā-hangarau te whakautu, engari kāore i whaihua. |
| `inappropriate_content` | I roto i te whakautu he ihirangi kāore e tika kia whakaaturia ki ngā kaiwhakamahi. |
| `other` | Kāore te urupare i ōrite ki tētahi kāwai e mōhiotia ana. |

### Motuhēhēnga

Mēnā e tono motuhēhēnga ana tō pūwāhi, tautuhia te āpure **Feedback API Key** ki tō bearer token. Ka tuku te kaiāwhina:

```
Authorization: Bearer <your-api-key>
```

Mēnā he wātea te āpure **Feedback API Key**, kāore he `Authorization` header e tukuna.

### Te Mono i te Kohinga Urupare

Waiho kia wātea ngā āpure **URL Pūwāhi Urupare** me **Feedback API Key** e rua. Ka kitea tonu te pātene koromatua-ki-raro me te UI urupare e ngā kaiwhakamahi, engari kāore ngā tukunga e tukuna whakamua ki tētahi ratonga waho.

## Brave Search API Key

Kei te ripa **Arā Atu Anō** hoki, ka whakahohe te āpure **Brave Search API Key** i te āheinga [Rapu Ipurangi](../configuration/internet-search).

| Āpure | Whakaahuatanga |
|---|---|
| **Brave Search API Key** | Tō kī API mai i te papatohu kaiwhakawhanake Brave Search. E hiahiatia ana hei whakahohe i te rapu ipurangi i roto i te kaiāwhina AI. |

Kei roto i te tapanga āpure he hononga pāwhiri ki te whārangi rēhita API Brave Search. Waiho kia wātea hei mono i te rapu ipurangi.

Tirohia [Rapu Ipurangi](../configuration/internet-search) mō ngā tuhinga kaiwhakamahi-mutunga mō tēnei āhuatanga.

## Ratonga Superdav Whakahaerehia

Ka tāpiri a Superdav AI Agent v1.18.0 i ngā pūwāhi ratonga Superdav whakahaerehia me te whakarato hononga aunoa mō ngā pae e tautokona ana. Whakamahia ēnei mana ina me hono tō pae ki te kaiwhakarato manaaki, kaua ki tētahi pūwāhi ratonga kua whirihorahia ā-ringa.

| Āpure | Whakaahuatanga |
|---|---|
| **Ratonga Superdav Whakahaerehia** | Ka whakahohe i te hononga ratonga Superdav manaaki mō ngā pae e tautokona ana. |
| **Whakarato Hononga** | Ka tīmata i te whakarato pūwāhi me ngā taipitopito tuakiri aunoa. Whakamahia tēnei i muri i te whakaū me whakamahi te pae i te kaiwhakarato whakahaerehia. |
| **Pūwāhi Ratonga / Tūnga Hononga** | Ka whakaatu i te pūwāhi o nāianei, i te āhua hononga rānei i muri i te whakarato. |

I muri i te whakarato, tiakina ngā tautuhinga, ā, manatoko i te tūnga hononga i mua i te whakawhirinaki ki ngā rerengamahi ratonga-whakahaerehia. Mēnā ka rahua te whakarato, arotakengia ngā tohutohu ngana-anō kua whakaaturia, ā, whakaūngia kei te pae te whakaaetanga ki te whakamahi i te kaiwhakarato manaaki.

## Whirihoranga Google Calendar

Ina whakahohea ngā āhuatanga maramataka Superdav AI Agent v1.18.0, ka taea e te kaiāwhina te pānui i ngā maramataka kua whirihorahia me ngā taipitopito takahanga. He mea anga-ki-te-pānui ngā taputapu maramataka, ā, he whaihua mō ngā whakamaumahara mōhio-ki-te-wātaka, te whai-ake i ngā kaiuru, me te whakaōrite hoapā.

| Āpure | Whakaahuatanga |
|---|---|
| **Ngā Taipitopito Tuakiri Google Calendar** | Ka rokiroki i ngā taipitopito tuakiri, i te hononga token rānei e hiahiatia ana hei pānui raraunga maramataka. |
| **Kōwhiringa Maramataka** | Ka whakawhāiti ko ēhea ngā maramataka kua whirihorahia ka āhei te kaiāwhina ki te tirotiro. |
| **Tūnga Hononga Maramataka** | Ka whakaū mēnā ka taea e ngā taipitopito tuakiri o nāianei te pānui maramataka me ngā takahanga. |

Puritia ngā taipitopito tuakiri maramataka kia whāiti ki ngā maramataka e hiahiatia ana e te kaiāwhina. Hono anō, hurihia rānei ngā taipitopito tuakiri mēnā ka tohu te tūnga kua pau te token.

## Whakamōhiotanga SMS TextBee

Ka tāpiri a Superdav AI Agent v1.18.0 i a TextBee hei kaiwhakarato SMS mō ngā rerengamahi whakamōhiotanga kua whirihorahia. Me takirua ngā whakamōhiotanga SMS ki ngā kūaha whakaaetanga tangata mō ngā karere tairongo, kanohi-ki-te-kaiwhakamahi rānei.

| Āpure | Whakaahuatanga |
|---|---|
| **Kī API TextBee** | Ka motuhēhē i ngā tono ki te kaiwhakarato SMS TextBee. |
| **Pūrere / Kaituku TextBee** | Ka tīpako i te kaituku, i te pūrere TextBee rānei e whakamahia ana mō ngā karere puta, ina hiahiatia e te kaiwhakarato. |
| **Kua Whakahohea ngā Whakamōhiotanga SMS** | Ka tuku i ngā rerengamahi kua whakaaetia kia tuku whakamōhiotanga karere-kuputuhi. Waiho kia monokia hei ārai i ngā tukunga SMS. |

Tukuna he karere whakamātautau ki tētahi tau nā te kaiwhakahaere anake, kātahi ka whakaū i te whanonga kūaha-whakaaetanga i mua i te whakahohe i ngā whakamaumahara kua whakaritea, kanohi-ki-ngā-kaiuru rānei.

## Haki Āhuatanga

I whakaurua hoki i v1.9.0, ka whakarato te ripa **Tautuhinga → Haki Āhuatanga** i ngā pana takahuri mō ngā mahi kōwhiringa. Ka whakahohea, ka monokia rānei ia haki puta noa i te whatunga; kāore he takahitanga ā-pae i tēnei wā.

### Te Uru ki ngā Haki Āhuatanga

1. I te whakahaere WordPress, haere ki **Gratis AI Agent → Tautuhinga**.
2. Pāwhiritia te ripa **Haki Āhuatanga**.

### Haki Mana Uru

| Kara | Taunoa | Whakaahuatanga |
|---|---|---|
| **Whakawhāiti ki ngā Administrators** | Weto | Ina whakakāngia, ko ngā kaiwhakamahi anake whai tūranga `administrator` ka āhei ki te whakatuwhera i te paewhiri kōrerorero AI Agent. Ka kite kē ētahi atu tūranga katoa i tētahi karere "Whakapā atu ki tō administrator". |
| **Whakawhāiti ki ngā Network Admins** | Weto | Ina whakakāngia i runga i tētahi whatunga multisite, ko ngā Super Admins anake ka āhei ki te whakamahi i te agent. Ka aukatihia ngā kaiwhakahaere pae takitahi. Ka noho matua ake i te "Whakawhāiti ki ngā Administrators" mēnā ka whakakāngia ngā mea e rua. |
| **Whakaae Urunga Subscriber** | Weto | Ina whakakāngia, ka āhei ngā kaiwhakamahi whai tūranga `subscriber` ki te whakamahi i te atanga kōrerorero, engari ka herea ki ngā āheinga pānui-anake (kāore he waihanga whakairinga, he panoni tautuhinga rānei). |
| **Monokia mō ngā Hunga ehara i te Mema** | Weto | Ka tūhono ki te tūnga mematanga Ultimate Multisite. Ina whakakāngia, ka hunaia te kōrerorero mō ngā pae kāore he mematanga hohe. |

### Ngā Kara Waitohu

| Kara | Taunoa | Whakaahuatanga |
|---|---|---|
| **Hunaia te Hiku "Powered by Gratis AI Agent"** | Weto | Ka tango i te rārangi tohu waitohu e whakaaturia ana ki raro o te widget kōrerorero. E taunakitia ana mō ngā whakatinanatanga white-label. |
| **Ingoa Agent Ritenga** | *(pātea)* | Ka whakakapi i te tapanga taunoa "Gratis AI Agent" i te pane kōrerorero me te tahua admin ki tō ake ingoa hua. Waiho kia pātea hei whakamahi i te taunoa. |
| **Hunaia te Kaitīpako Agent** | Weto | Ina whakakāngia, kāore ngā kaiwhakamahi e taea te whakawhiti i waenga i ngā agent e rima kua hangaia ki roto. Ka ū te agent o nāianei ki te mea kua whirihoratia hei taunoa i Settings → General. |
| **Whakamahia te Ata Pae hei Avatar Kōrerorero** | Weto | Ka whakakapi i te ata AI taunoa i te pane widget kōrerorero ki te ata pae WordPress (kua tautuhia i raro i Appearance → Customize → Site Identity). |

### Ngā Kara Haumaru Aunoatanga

Ka whakauru a Superdav AI Agent v1.18.0 i ngā kūaha whakaaetanga tangata me ngā pūkete whakamaumahara mō ngā rere aunoatanga haumaru ake. Ka puta pea ēnei mana ki roto i ngā kara āhuatanga, i ngā tautuhinga aunoatanga matatau rānei, e ai ki te mōkihi kua tāutatia.

| Kara | Taunoa | Whakaahuatanga |
|---|---|---|
| **Me Whai Whakaaetanga Tangata** | E taunakitia ana kia kā | Ka whakatārewa i ngā aunoatanga tairongo kia arotake, kia whakaū rā anō tētahi kaiwhakamahi whai mana i te hohenga kua whakaarotia. |
| **Whakakotahitanga Whakamaumahara Tārua-kore** | Kā | Ka tuhi i ngā whakamaumahara kua tukuna kia kore ai ngā ngana anō, ngā rere kua whakaritea rānei e tuku whakamōhiotanga tārua. |
| **Whakahohe Utauta Maramataka** | Weto kia whirihoratia rā anō | Ka tuku i te agent kia pānui i ngā maramataka Google me ngā takahanga kua whirihoratia. |
| **Whakahohe Whakamōhiotanga SMS** | Weto kia whirihoratia rā anō | Ka tuku i ngā rerengamahi kua whakaaetia kia tuku whakamōhiotanga SMS TextBee i muri i te tiakanga o ngā taipitopito takiuru. |

### Te Hoatu Panonitanga

Pāwhiritia **Tiaki Tautuhinga** i muri i te whakawhiti i tētahi kara. Ka whai mana ngā panonitanga i taua wā tonu — kāore e hiahiatia he cache flush, he whakahohe anō i te plugin rānei.
