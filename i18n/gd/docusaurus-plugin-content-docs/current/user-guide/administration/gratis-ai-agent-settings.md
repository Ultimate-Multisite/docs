---
title: Roghainnean Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Roghainnean Gratis AI Agent

Tha an sgrìn **Roghainnean → Adhartach** ann an Gratis AI Agent a’ toirt seachad rèiteachadh aig ìre rianaire airson amalachadh backend. Tha an duilleag seo a’ mìneachadh cur-air-adhart fios-air-ais, iuchraichean solaraiche luirg, suidheachadh seirbheis Superdav stiùirichte, smachdan Google Calendar, roghainnean SMS TextBee, agus brataichean feart thar an lìonra.

## A’ faighinn cothrom air Roghainnean {#accessing-settings}

1. Ann an rianachd WordPress, rach gu **Gratis AI Agent → Roghainnean**.
2. Briog air an taba **Adhartach**.

## Rèiteachadh Endpoint Fios-air-ais {#feedback-endpoint-configuration}

Bidh an endpoint fios-air-ais a’ faighinn iarrtasan POST bhon AI agent gach uair a chuireas cleachdaiche fios-air-ais a-steach tron phutan òrdag-sìos, a’ bhratach fèin-bhrosnachaidh, no an àithne `/report-issue`.

| Raon | Tuairisgeul |
|---|---|
| **URL Endpoint Fios-air-ais** | An URL a gheibh cuir-a-steach fios-air-ais mar iarrtasan HTTP POST le corp JSON. |
| **Feedback API Key** | bearer token a thèid a chur ann an `Authorization` header gach iarrtais fios-air-ais. Fàg bàn e mura h-eil an endpoint agad ag iarraidh dearbhadh. |

### Payload JSON ris a bheil dùil {#expected-json-payload}

Feumaidh an endpoint fios-air-ais agad gabhail ri corp JSON leis na raointean a leanas co-dhiù:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Dh’fhaodadh raointean a bharrachd a bhith an làthair anns a’ payload a rèir co-theacsa a’ chòmhraidh.

### Luachan `triage_category` {#triagecategory-values}

Sònraichidh an còmhdach triage AI aon de na luachan a leanas do `triage_category` mus cuir e am payload air adhart:

| Luach | Ciall |
|---|---|
| `factual_error` | Thug an neach-cuideachaidh seachad fiosrachadh fìrinneach ceàrr. |
| `unhelpful_answer` | Bha am freagairt ceart gu teicnigeach ach cha robh e feumail. |
| `inappropriate_content` | Bha susbaint anns an fhreagairt nach bu chòir a shealltainn do chleachdaichean. |
| `other` | Cha do fhreagair am fios-air-ais ri roinn aithnichte. |

### Dearbhadh {#authentication}

Ma tha an endpoint agad ag iarraidh dearbhadh, suidhich an raon **Feedback API Key** dhan bearer token agad. Cuiridh an agent:

```
Authorization: Bearer <your-api-key>
```

Ma tha an raon **Feedback API Key** falamh, cha tèid `Authorization` header a chur.

### A’ cur Cruinneachadh Fios-air-ais à comas {#disabling-feedback-collection}

Fàg an dà raon **URL Endpoint Fios-air-ais** agus **Feedback API Key** bàn. Bidh am putan òrdag-sìos agus UI fios-air-ais fhathast ri fhaicinn do chleachdaichean, ach cha tèid cuir-a-steach a chur air adhart gu seirbheis sam bith bhon taobh a-muigh.

## Brave Search API Key {#brave-search-api-key}

Cuideachd air an taba **Adhartach**, tha an raon **Brave Search API Key** a’ cur an comas an comais [Lorg Eadar-lìn](../configuration/internet-search).

| Raon | Tuairisgeul |
|---|---|
| **Brave Search API Key** | An iuchair API agad bho dashboard luchd-leasachaidh Brave Search. Riatanach gus lorg eadar-lìn a chur an comas san AI assistant. |

Tha bileag an raoin a’ gabhail a-steach ceangal briogail ri duilleag clàraidh Brave Search API. Fàg bàn e gus lorg eadar-lìn a chur à comas.

Faic [Lorg Eadar-lìn](../configuration/internet-search) airson sgrìobhainnean cleachdaiche dheireannaich mun fheart seo.

## Seirbheis Superdav Stiùirichte {#managed-superdav-service}

Tha Superdav AI Agent v1.18.0 a’ cur endpointan seirbheis Superdav stiùirichte agus solarachadh ceangail fèin-obrachail ris airson làraichean le taic. Cleachd na smachdan seo nuair a bu chòir don làrach agad ceangal ris an t-solaraiche aoigheachd an àite endpoint seirbheis a chaidh a rèiteachadh le làimh.

| Raon | Tuairisgeul |
|---|---|
| **Seirbheis Superdav Stiùirichte** | A’ cur ceangal seirbheis Superdav aoigheachd an comas airson làraichean le taic. |
| **Solarachadh Ceangail** | A’ tòiseachadh solarachadh fèin-obrachail endpoint agus teisteanasan. Cleachd seo às dèidh dhut dearbhadh gum bu chòir don làrach an solaraiche stiùirichte a chleachdadh. |
| **Endpoint Seirbheis / Inbhe Ceangail** | A’ sealltainn an endpoint làithreach no staid a’ cheangail às dèidh solarachaidh. |

Às dèidh solarachaidh, sàbhail na roghainnean agus dearbhaich inbhe a’ cheangail mus cuir thu earbsa ann an sruthan-obrach seirbheis stiùirichte. Ma dh’fhàilligear an solarachadh, thoir sùil air an stiùireadh ath-fheuchainn a tha air a thaisbeanadh agus dearbhaich gu bheil cead aig an làrach an solaraiche aoigheachd a chleachdadh.

## Rèiteachadh Google Calendar {#google-calendar-configuration}

Nuair a tha feartan mìosachain Superdav AI Agent v1.18.0 air an cur an comas, faodaidh an agent mìosachain rèitichte agus mion-fhiosrachadh thachartasan a leughadh. Tha innealan mìosachain stèidhichte air leughadh agus tha iad feumail airson cuimhneachain mothachail air clàr-ama, leantainn suas le luchd-frithealaidh, agus maidseadh luchd-aithne.

| Raon | Tuairisgeul |
|---|---|
| **Teisteanasan Google Calendar** | A’ stòradh nan teisteanasan no ceangal token a tha riatanach gus dàta mìosachain a leughadh. |
| **Taghadh Mìosachain** | A’ cuingealachadh dè na mìosachain rèitichte as urrainn don agent sgrùdadh. |
| **Inbhe Ceangail Mìosachain** | A’ dearbhadh an urrainn do na teisteanasan làithreach mìosachain agus tachartasan a leughadh. |

Cùm teisteanasan mìosachain cuingealaichte ris na mìosachain a tha a dhìth air an agent. Ceangail a-rithist no cuairtich teisteanasan ma tha an inbhe a’ sealltainn token a dh’fhalbh an ùine.

## Brathan SMS TextBee {#textbee-sms-notifications}

Tha Superdav AI Agent v1.18.0 a’ cur TextBee ris mar sholaraiche SMS airson sruthan-obrach brath rèitichte. Bu chòir brathan SMS a chur còmhla ri geataichean ceadachaidh daonna airson teachdaireachdan mothachail no a tha ri fhaicinn do chleachdaichean.

| Raon | Tuairisgeul |
|---|---|
| **Iuchair API TextBee** | A’ dearbhadh iarrtasan dhan t-solaraiche SMS TextBee. |
| **Inneal / Neach-cuir TextBee** | A’ taghadh an neach-cuir no an inneal TextBee a thèid a chleachdadh airson teachdaireachdan a-mach, nuair a tha sin riatanach leis an t-solaraiche. |
| **Brathan SMS Air an Comasachadh** | A’ leigeil le sruthan-obrach aontaichte brathan teachdaireachd-teacsa a chur. Fàg à comas e gus casg a chur air cur SMS. |

Cuir teachdaireachd deuchainn dìreach gu àireamh aig a bheil rianaire na shealbhadair, agus an uair sin dearbhaich giùlan a’ gheata-cheadachaidh mus cuir thu cuimhneachain chlàraichte no a tha ri fhaicinn do luchd-frithealaidh an comas.

## Brataichean Feart {#feature-flags}

Air a thoirt a-steach cuideachd ann an v1.9.0, tha an taba **Roghainnean → Brataichean Feart** a’ toirt seachad suidsichean toglaidh airson comas-gnìomh roghainneil. Tha gach bratach an dàrna cuid air a comasachadh no air a cur à comas air feadh an lìonraidh; chan eil tar-sgrìobhadh gach-làraich ann aig an àm seo.

### A’ faighinn cothrom air Brataichean Feart {#accessing-feature-flags}

1. Ann an rianachd WordPress, rach gu **Gratis AI Agent → Roghainnean**.
2. Briog air an taba **Brataichean Feart**.

### Brataichean Smachd Ruigsinneachd {#access-control-flags}

| Bratach | Bun-roghainn | Tuairisgeul |
|---|---|---|
| **Cuingich ri Administrators** | Dheth | Nuair a tha seo an comas, chan urrainn ach luchd-cleachdaidh leis an dreuchd `administrator` pannal cabadaich an AI Agent fhosgladh. Chì a h-uile dreuchd eile teachdaireachd "Cuir fios chun administrator agad" na àite. |
| **Cuingich ri Network Admins** | Dheth | Nuair a tha seo an comas air lìonra multisite, chan urrainn ach Super Admins an agent a chleachdadh. Tha admins làraich fa leth air am bacadh. Tha prìomhachas aige thairis air "Cuingich ri Administrators" ma tha an dà chuid an comas. |
| **Ceadaich ruigsinneachd do Subscriber** | Dheth | Nuair a tha seo an comas, faodaidh luchd-cleachdaidh leis an dreuchd `subscriber` an eadar-aghaidh cabadaich a chleachdadh ach tha iad cuingichte ri comasan leughaidh a-mhàin (gun chruthachadh phuist no atharraichean roghainnean). |
| **Cuir à comas do dhaoine nach eil nam buill** | Dheth | Amalgaimaichidh e le inbhe ballrachd Ultimate Multisite. Nuair a tha seo an comas, tha cabadaich falaichte do làraichean aig nach eil ballrachd ghnìomhach. |

### Brataichean branndaidh {#branding-flags}

| Bratach | Bun-roghainn | Tuairisgeul |
|---|---|---|
| **Falaich Footer "Powered by Gratis AI Agent"** | Dheth | Bheir e air falbh loidhne buileachaidh a’ bhrand a chithear aig bonn a’ widget cabadaich. Air a mholadh airson cleachdaidhean white-label. |
| **Ainm Agent gnàthaichte** | *(bàn)* | Cuiridh e an t-ainm bathair agad fhèin an àite bileag bhunaiteach "Gratis AI Agent" ann am bann-cinn na cabadaich agus ann an clàr-taice an admin. Fàg bàn e gus a’ bhun-roghainn a chleachdadh. |
| **Falaich roghnaiche an Agent** | Dheth | Nuair a tha seo an comas, chan urrainn do luchd-cleachdaidh gluasad eadar na còig agents togte. Tha an agent làithreach suidhichte ris na tha air a rèiteachadh mar bhun-roghainn ann an Settings → General. |
| **Cleachd ìomhaigh an làraich mar avatar cabadaich** | Dheth | Cuiridh e ìomhaigh làraich WordPress (suidhichte fo Appearance → Customize → Site Identity) an àite ìomhaigh AI bhunaiteach ann am bann-cinn a’ widget cabadaich. |

### Brataichean sàbhailteachd fèin-obrachais {#automation-safety-flags}

Tha Superdav AI Agent v1.18.0 a’ toirt a-steach geataichean ceadachaidh daonna agus clàran chuimhneachain airson ruithichean fèin-obrachais nas sàbhailte. Dh’fhaodadh na smachdan seo nochdadh anns na brataichean feart no anns na roghainnean fèin-obrachais adhartach, a rèir a’ phacaid a chaidh a stàladh.

| Bratach | Bun-roghainn | Tuairisgeul |
|---|---|---|
| **Feum air cead daonna** | Air a mholadh air | Cuiridh e fèin-obrachasan mothachail air stad gus an dèan neach-cleachdaidh ùghdarraichte lèirmheas agus dearbhadh air a’ ghnìomh a thathar a’ moladh. |
| **Dì-dhùblachadh chuimhneachain** | Air | Clàraichidh e cuimhneachain a chaidh a chur gus nach cuir ath-oidhirpean no ruithichean clàraichte fiosan dùblaichte. |
| **Cuir innealan mìosachain an comas** | Dheth gus am bi e air a rèiteachadh | Leigidh e leis an agent mìosachain agus tachartasan Google a chaidh a rèiteachadh a leughadh. |
| **Cuir fiosan SMS an comas** | Dheth gus am bi e air a rèiteachadh | Leigidh e le sruthan-obrach ceadaichte fiosan SMS TextBee a chur às dèidh do theisteanasan a bhith air an sàbhaladh. |

### A’ cur atharraichean an sàs {#applying-changes}

Briog air **Save Settings** às dèidh bratach sam bith a thionndadh. Thig atharraichean gu buil sa bhad — chan eil feum air glanadh cache no ath-ghnìomhachadh plugin.
