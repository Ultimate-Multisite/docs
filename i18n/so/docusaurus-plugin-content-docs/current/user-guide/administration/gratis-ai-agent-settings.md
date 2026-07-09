---
title: Dejinta Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Settings {#gratis-ai-agent-settings}

Shaashadda **Settings → Advanced** ee Gratis AI Agent waxay bixisaa habayn heer-maamuleed oo loogu talagalay isku-xirnaanta backend. Boggan wuxuu diiwaangeliyaa gudbinta feedback, furayaasha bixiyaha raadinta, dejinta adeegga Superdav la maamulo, kontaroollada Google Calendar, dejinta TextBee SMS, iyo feature flags-ka shabakadda oo dhan.

## Gelitaanka Settings {#accessing-settings}

1. Gudaha maamulka WordPress, tag **Gratis AI Agent → Settings**.
2. Guji tab-ka **Advanced**.

## Habaynta Endpoint-ka Feedback {#feedback-endpoint-configuration}

Endpoint-ka feedback wuxuu ka helaa codsiyada POST AI agent mar kasta oo isticmaale soo gudbiyo feedback isagoo adeegsanaya badhanka thumbs-down, boodhka auto-prompt, ama amarka `/report-issue`.

| Field | Sharaxaad |
|---|---|
| **Feedback Endpoint URL** | URL-ka hela gudbinnada feedback ahaan codsiyo HTTP POST oo leh JSON body. |
| **Feedback API Key** | bearer token lagu diro `Authorization` header ee codsi kasta oo feedback ah. Ka tag madhan haddii endpoint-kaagu uusan u baahnayn xaqiijin. |

### JSON Payload La Filayo {#expected-json-payload}

Endpoint-kaaga feedback waa inuu aqbalaa JSON body leh ugu yaraan field-yadan soo socda:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Field-yo dheeraad ah ayaa ku jiri kara payload-ka iyadoo ku xiran macnaha wada hadalka.

### Qiimayaasha `triage_category` {#triagecategory-values}

Lakabka kala-saarista AI wuxuu u qoondeeyaa mid ka mid ah qiimayaasha soo socda `triage_category` ka hor inta aan payload-ka la gudbin:

| Qiime | Macne |
|---|---|
| `factual_error` | Kaaliyuhu wuxuu bixiyay macluumaad xaqiiqo ahaan khaldan. |
| `unhelpful_answer` | Jawaabtu farsamo ahaan way saxnayd laakiin ma ahayn mid waxtar leh. |
| `inappropriate_content` | Jawaabtu waxay ka koobnayd nuxur aan habboonayn in la tuso isticmaalayaasha. |
| `other` | Feedback-ku kuma habboonayn qayb la yaqaan. |

### Xaqiijin {#authentication}

Haddii endpoint-kaagu u baahan yahay xaqiijin, dhig field-ka **Feedback API Key** inuu noqdo bearer token-kaaga. Agent-ku wuxuu diraa:

```
Authorization: Bearer <your-api-key>
```

Haddii field-ka **Feedback API Key** uu madhan yahay, `Authorization` header lama diro.

### Curyaaminta Uruurinta Feedback {#disabling-feedback-collection}

Ka tag field-yada **Feedback Endpoint URL** iyo **Feedback API Key** labadaba madhan. Badhanka thumbs-down iyo feedback UI weli way u muuqanayaan isticmaalayaasha, laakiin gudbinnada looma gudbiyo adeeg dibadeed.

## Brave Search API Key {#brave-search-api-key}

Sidoo kale tab-ka **Advanced**, field-ka **Brave Search API Key** wuxuu awood-siisaa awoodda [Raadinta Internetka](../configuration/internet-search).

| Field | Sharaxaad |
|---|---|
| **Brave Search API Key** | API key-gaaga ka socda dashboard-ka horumariyaha Brave Search. Waxaa loo baahan yahay si loo awood-siiyo raadinta internetka ee AI assistant-ka. |

Calaamadda field-ka waxaa ku jira xiriiriye la gujin karo oo taga bogga is-diiwaangelinta Brave Search API. Ka tag madhan si aad u curyaamiso raadinta internetka.

Eeg [Raadinta Internetka](../configuration/internet-search) si aad u hesho dukumeenti loogu talagalay isticmaalaha-dhammaadka oo ku saabsan sifadan.

## Adeegga Superdav La Maamulo {#managed-superdav-service}

Superdav AI Agent v1.18.0 wuxuu ku darayaa endpoints adeegga Superdav la maamulo iyo bixinta xiriir otomaatig ah oo loogu talagalay bogagga la taageero. Isticmaal kontaroolladan marka boggaagu uu ku xirmayo bixiyaha la martigeliyay halkii laga isticmaali lahaa endpoint adeeg gacanta lagu habeeyay.

| Field | Sharaxaad |
|---|---|
| **Managed Superdav Service** | Wuxuu awood-siisaa xiriirka adeegga Superdav la martigeliyay ee bogagga la taageero. |
| **Provision Connection** | Wuxuu bilaabaa bixinta otomaatigga ah ee endpoint iyo aqoonsiyada. Isticmaal tan ka dib markaad xaqiijiso in boggu isticmaalo bixiyaha la maamulo. |
| **Service Endpoint / Connection Status** | Wuxuu muujiyaa endpoint-ka hadda jira ama xaaladda xiriirka ka dib bixinta. |

Ka dib bixinta, kaydi settings oo xaqiiji xaaladda xiriirka ka hor intaadan ku tiirsanaan socod-hawleedyo adeeg la maamulo. Haddii bixintu fashilanto, dib u eeg tilmaamaha isku-dayga mar kale ee la muujiyay oo xaqiiji in boggu leeyahay oggolaansho uu ku isticmaalo bixiyaha la martigeliyay.

## Habaynta Google Calendar {#google-calendar-configuration}

Marka sifooyinka kalandarka Superdav AI Agent v1.18.0 la awood-siiyo, agent-ku wuxuu akhrin karaa kalandarrada la habeeyay iyo faahfaahinta dhacdooyinka. Qalabka kalandarku wuxuu u janjeeraa akhris wuxuuna waxtar u leeyahay xusuusiyeyaasha jadwalka ka warqaba, daba-galka ka-qaybgalayaasha, iyo is-waafajinta xiriirrada.

| Field | Sharaxaad |
|---|---|
| **Google Calendar Credentials** | Wuxuu kaydiyaa aqoonsiyada ama xiriirka token ee loo baahan yahay si loo akhriyo xogta kalandarka. |
| **Calendar Selection** | Wuxuu xaddidaa kalandarrada la habeeyay ee agent-ku baari karo. |
| **Calendar Connection Status** | Wuxuu xaqiijiyaa in aqoonsiyada hadda jira ay akhrin karaan kalandarro iyo dhacdooyin. |

Ku xaddid aqoonsiyada kalandarka kalandarrada agent-ku u baahan yahay oo keliya. Dib u xir ama beddel aqoonsiyada haddii xaaladdu muujiso token dhacay.

## Ogeysiisyada TextBee SMS {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 wuxuu ku darayaa TextBee oo ah bixiye SMS oo loogu talagalay socod-hawleedyo ogeysiis oo la habeeyay. Ogeysiisyada SMS waa in lagu lammaaniyaa albaabbo oggolaansho bini’aadan oo loogu talagalay farriimaha xasaasiga ah ama isticmaalayaasha u muuqda.

| Field | Sharaxaad |
|---|---|
| **TextBee API Key** | Wuxuu xaqiijiyaa codsiyada loo diro bixiyaha TextBee SMS. |
| **TextBee Device / Sender** | Wuxuu doortaa diraha ama qalabka TextBee ee loo isticmaalo farriimaha baxaya, marka bixiyuhu u baahdo. |
| **SMS Notifications Enabled** | Wuxuu u oggolaadaa socod-hawleedyo la ansixiyay inay diraan ogeysiisyo farriin-qoraal ah. Ka tag curyaan si looga hortago dirista SMS. |

U dir farriin tijaabo ah kaliya lambar uu leeyahay maamule, ka dibna xaqiiji hab-dhaqanka albaabka oggolaanshaha ka hor intaadan awood-siin xusuusiyeyaasha jadwalaysan ama kuwa ka-qaybgalayaasha u muuqda.

## Feature Flags {#feature-flags}

Sidoo kale lagu soo bandhigay v1.9.0, tab-ka **Settings → Feature Flags** wuxuu bixiyaa beddelayaal daar/demi ah oo loogu talagalay shaqeyn ikhtiyaari ah. Flag kasta waa la awood-siiyay ama waa la curyaamiyay shabakadda oo dhan; waqtigan ma jiro ka-dhaafid bog kasta gaar u ah.

### Gelitaanka Feature Flags {#accessing-feature-flags}

1. Gudaha maamulka WordPress, tag **Gratis AI Agent → Settings**.
2. Guji tab-ka **Feature Flags**.

### Flags-ka Xakamaynta Gelitaanka {#access-control-flags}

| Calan | Caadiga | Sharaxaad |
|---|---|---|
| **Ku koob Maamulayaasha** | Dansan | Marka la hawlgaliyo, kaliya isticmaalayaasha leh doorka `administrator` ayaa furi kara guddiga wada sheekaysiga AI Agent. Dhammaan doorarka kale waxay halkii ka arkaan fariinta "La xiriir maamulahaaga". |
| **Ku koob Network Admins** | Dansan | Marka lagu hawlgaliyo shabakad multisite ah, kaliya Super Admins ayaa isticmaali kara agent-ka. Maamulayaasha site-yada gaarka ah waa la xannibaa. Waxay mudnaan ka leedahay "Ku koob Maamulayaasha" haddii labadaba la hawlgaliyo. |
| **Ogolow Gelitaanka Subscriber** | Dansan | Marka la hawlgaliyo, isticmaalayaasha leh doorka `subscriber` waxay isticmaali karaan interface-ka wada sheekaysiga laakiin waxay ku xaddidan yihiin awoodaha akhris-kaliya (ma jiro abuuris qoraal ama beddelidda dejimaha). |
| **Dami Non-Members** | Dansan | Waxay la midoobaysaa xaaladda xubinimada Ultimate Multisite. Marka la hawlgaliyo, wada sheekaysiga waa laga qariyaa site-yada aan lahayn xubinimo firfircoon. |

### Calamada Branding {#branding-flags}

| Calan | Caadiga | Sharaxaad |
|---|---|---|
| **Qari Footer-ka "Powered by Gratis AI Agent"** | Dansan | Waxay ka saartaa khadka aqoonsiga branding ee lagu muujiyo hoosta widget-ka wada sheekaysiga. Waxaa lagu talinayaa deployments white-label ah. |
| **Magaca Agent-ka Gaarka ah** | *(madhan)* | Waxay ku beddeshaa calaamadda caadiga ah ee "Gratis AI Agent" ee header-ka wada sheekaysiga iyo menu-ga admin magacaaga product-ka. Ka tag madhan si loo isticmaalo kan caadiga ah. |
| **Qari Agent Picker** | Dansan | Marka la hawlgaliyo, isticmaalayaashu ma kala beddeli karaan shanta agent ee ku dhex dhisan. Agent-ka hadda wuxuu ku go'an yahay waxa loo habeeyay inuu yahay caadiga Settings → General. |
| **U isticmaal Astaanta Site-ka sidii Avatar-ka Wada Sheekaysiga** | Dansan | Waxay ku beddeshaa astaanta AI ee caadiga ah ee header-ka widget-ka wada sheekaysiga astaanta WordPress site (oo lagu dejiyo Appearance → Customize → Site Identity). |

### Calamada Badbaadada Automation-ka {#automation-safety-flags}

Superdav AI Agent v1.18.0 wuxuu soo bandhigayaa albaabbada oggolaanshaha bini'aadamka iyo diiwaannada xusuusinta si automation-yadu u socdaan si ammaan badan. Xakamayntan waxay ka muuqan kartaa feature flags ama dejimaha automation-ka horumarsan, iyadoo ku xiran package-ka la rakibay.

| Calan | Caadiga | Sharaxaad |
|---|---|---|
| **U baahan Oggolaansho Bini'aadam** | Lagu talinayo in uu shidan yahay | Waxay hakisaa automation-yada xasaasiga ah ilaa isticmaale la oggolyahay uu dib u eego oo xaqiijiyo ficilka la soo jeediyay. |
| **Ka-hortagga Ku-celcelinta Xusuusinta** | Shidan | Waxay diiwaangelisaa xusuusinnada la diray si isku-dayada mar kale ama socodsiinnada jadwalaysan aysan u dirin ogeysiisyo nuqul ah. |
| **Hawlgeli Qalabka Calendar** | Dansan ilaa la habeeyo | Waxay u oggolaanaysaa agent-ka inuu akhriyo Google calendars iyo dhacdooyinka la habeeyay. |
| **Hawlgeli Ogeysiisyada SMS** | Dansan ilaa la habeeyo | Waxay u oggolaanaysaa workflows la ansixiyay inay diraan ogeysiisyada TextBee SMS ka dib marka credentials la kaydiyo. |

### Codsashada Isbeddellada {#applying-changes}

Guji **Kaydi Dejimaha** ka dib markaad beddesho calan kasta. Isbeddelladu isla markiiba way dhaqan galaan — looma baahna cache flush ama dib-u-hawlgelineed plugin.
