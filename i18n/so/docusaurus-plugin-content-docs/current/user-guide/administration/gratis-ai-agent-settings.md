---
title: Dejinta Agenta AI bilaash ah
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Deebiyaha AI Agent ee Bilaashka ah

Farsamada **Settings → Advanced** (Deebiyaha → Sare) ee Gratis AI Agent waxay bixisaa qorshe-qaabinta heerka maamulayaasha ee isdhaafsiga dalka dambe (backend integrations) oo lagu soo bandhigay v1.5.0. Boggan wuxuu sharxayaa qaybaha **Feedback Endpoint** iyo qaabka ay la filayo inay u noqdaan.

## Helitaanka Settings-ka

1. Admin-ka WordPress-ka, tag **Gratis AI Agent → Settings**.
2. Guji tab-ka **Advanced** (Sare).

## Qorshe-qaabinta Feedback Endpoint

Feedback endpoint-ku wuxuu qaataa codsiyada POST ah ee ka yimaada AI agent-ka marka isticmaaluhu u soo gudbo fikradaha iyadoo la isticmaalayo badhka "thumbs-down" (inay ka horreysay), banner-ka auto-prompt, ama amarka `/report-issue`.

| Goobta | Sharaxaad |
|---|---|
| **Feedback Endpoint URL** | URL-ka uu qaadan doono warbixinnada (feedback submissions) iyadoo la isticmaalayo HTTP POST requests oo leh body JSON. |
| **Feedback API Key** | Bearer token-ka lagu soo dirayo header-ka `Authorization` ee request-ka warbixinta kasta. Haddii endpoint-kaaga uusan u baahnayn aqoonsi (authentication), sii u dhig faafaa'iix (leave blank). |

### JSON Payload-ga La Filaya
Endpoint-kaaga warbixinta waa inuu qaataa body JSON oo leh ugu yaraan qaybaha soo socda:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jawaabta waxay ahayd mid khaldan oo ku saabsan qiimaha.",
  "triage_category": "factual_error"
}
```

Waxaa laga yaabaa in la soo diri doonaan qaybo kale oo payload-ka ah iyadoo ku xiran macnaha wada hadalka (conversation context).

### Qaybaha `triage_category` ee La Filaya

Darabka AI (AI triage layer) wuxuu si hore u koobnaa mid ka mid ah qiimaha soo socda `triage_category` inta badan ka hor inta u dirayo macluumaadka:

| Qiimaha | Macnaha |
|---|---|
| `factual_error` | Caawiyaha wuxuu bixiyay macluumaad aan sax ahayn. |
| `unhelpful_answer` | Jawaabtu waxay ahaanaysay si farsamo ay saxayd laakiin ma faa'iido badan tahay. |
| `inappropriate_content` | Jawaabta waxay ka koobnayd waxyaabo aan loo muuqan karin isticmaalayaasha. |
| `other` | Warbixinta (feedback) ma ahan mid la ogaatay. |

### Xaqiijinta (Authentication)

Haddii endpoint-kaaga u baahan in la xaqiijiyo (authentication), ku qor **Feedback API Key** qaybtaada token-kaaga bearer. Agent-ku wuxuu dirayaa:

```
Authorization: Bearer <your-api-key>
```

Haddii qaybta **Feedback API Key** ay faafiddo, ma jirto header-ka `Authorization` la dirin.

### Xiritaanka Soo Ururinta Warbixinta (Disabling Feedback Collection)

URL-ka **Feedback Endpoint** iyo **Feedback API Key**-ga iska dhig oo faa'iido la'aan. Badhanka "thumbs-down" (oo si toos ah loo fahmi karo) iyo interface-ka feedback-ka ayaa weli u muuqda isticmaalayaasha, laakiin waxa laga dirayaa adeegyo dibadda ah.

## Brave Search API Key

Sidoo kale, tab-ka **Advanced**-ka, qaybta **Brave Search API Key** waxay kuu oggolaanaysaa awoodda [Internet Search](../configuration/internet-search).

| Field | Sharaxaad |
|---|---|
| **Brave Search API Key** | Furaha (API key) ee aad ka helay dashboard-ka developer-ka Brave Search. Waa loo baahan yahay si loo furayo internet search-ka AI assistant-ka. |

Magaca qaybta waxaa ku jira xiriir la riixayo (clickable link) oo ah bogga kaydinta (sign-up page) ee API-ga Brave Search. Iska dhig mid faa'iido la'aan si aad u xirto internet search-ka.

Waxaad ka heli kartaa dukumentiyadda isticmaalayaasha (end-user documentation) ee ku saabsan astaantaas [Internet Search](../configuration/internet-search).

## Feature Flags

Waxaa la soo bandhigay v1.9.0, qaybta **Settings → Feature Flags** waxay bixisaa badhalka (toggle switches) oo aad ku shaqayn karto waxyaabaha laga dooran karo ama loo baahan yahay. Flag kasta wuxuu yahay mid la furay (enabled) ama la xiray (disabled) dhammaan network-ka; hadda ma jirto fursad lagu dib u beddelo si gaar ah oo aad u samayn karto qaybta website-kaaga.

### Lagu helid Feature Flags

1. Admin-ka WordPress-ka, tag **Gratis AI Agent → Settings**.
2. Guji tab-ka **Feature Flags**.

### Flagga Xakamaynta Helitaanka (Access Control Flags)

| Flag | Default | Sharaxaad |
|---|---|---|
| **Restrict to Administrators** | Off | Haddii la furay, macmiilada leh oo kaliya kuwa leh role-ka `administrator` ayaa awood u leh inay furayaan dashboard-ka AI Agent chat. Kuwa kale ee roollada waxay arkaan fariin "La xiriir administrator-kaaga". |
| **Restrict to Network Admins** | Off | Haddii la furay shirkad isku-xiran (multisite network), kaliya Super Admins ayaa isticmaali kara agent-ka. Admin-ka qaybta site-ka gaarka ah waa la xannibiayaa. Haddii labada flag-gaas la furay, kan "Restrict to Administrators" wuxuu ka horjeeda kan kale. |
| **Allow Subscriber Access** | Off | Haddii la furay, macmiilada leh oo leh role-ka `subscriber` waxay isticmaali karaan interface-ka chat, laakiin waxaa laga xannibiayaa awoodda akhrinta kaliya (ma jiraan wax abuura post ama beddelidde settings). |

| **Ka xirta dadka aan yihiin xubnaha** | Fiiro-gaar ah (Off) | Waxay la xiriirtaa xaaladda xubnaha ee Ultimate Multisite. Marka laga saarto, wicitaanka (chat) waxaa lagu qarinayaa goobaha aan lahayn xubnaha socda. |

### Calaamadda Sumcadda (Branding Flags)

| Flag | Default | Sharaxaad |
|---|---|---|
| **Ka qabso "Powered by Gratis AI Agent" Footer** | Off | Waxay ka saartaa xariiqda calaamadda lagu sheegayo inuu yahay "Gratis AI Agent" ee muuqata hooska widget-ka wicita. Waa la talinaya in la isticmaalo haddii aad rabto inaad si gaar ah u soo bandhigdo magacaaga (white-label). |
| **Magaca Agenta Gaarka ah** | *(boos)* | Waxay beddeshaa calaamadda default ee "Gratis AI Agent" ee lagu qorayo madaxa wicita iyo menu-ga admin-ka magacaaga dhabta ah. Haddii aad u dhigto boos, waxaad isticmaali kartaa kan asalka ah (default). |
| **Ka qabso Doorka Agenta** | Off | Marka la furayo, dadka ma heli karaan isbeddel ka dhexe agintii labada dhow ee la bilaabay. Agintii hadda jira waxaa lagu xiraya waxa laga dhigay default-ka ku yahay Settings → General. |
| **Isticmaal Icon-ka Website-ka sidii Avatar-ka Wicita** | Off | Waxay beddeshaa icon-ka AI-ga asalka ah ee madaxa wicita iyadoo la isticmaalayo icon-ka website-ka WordPress (oo lagu dejiyo Appearance → Customize → Site Identity). |

### Isticmaalka Isbeddellada

Marka aad u beddesho qaybta (flag) kasta, sii **Save Settings** igula riix. Isbeddelladu isla markiiba waxay shaqaynayaan—ma loo baahnayn in la nadiifiyo cache-ka ama la dib u shoro plugin-ka.
