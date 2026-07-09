---
title: Anviwònman Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent Anviwònman

Ekran **Settings → Advanced** nan Gratis AI Agent bay konfigirasyon nivo administratè pou entegrasyon backend yo. Paj sa a dokimante voye feedback, kle founisè rechèch, konfigirasyon sèvis Superdav jere, kontwòl Google Calendar, anviwònman SMS TextBee, ak drapo fonksyonalite pou tout rezo a.

## Aksede Anviwònman yo

1. Nan admin WordPress la, ale nan **Gratis AI Agent → Settings**.
2. Klike sou onglet **Advanced** la.

## Konfigirasyon Endpoint Feedback

Endpoint feedback la resevwa demann POST soti nan ajan AI a chak fwa yon itilizatè soumèt feedback atravè bouton pous-anba a, banyè auto-prompt la, oswa kòmand `/report-issue` la.

| Chan | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | URL ki resevwa soumisyon feedback yo kòm demann HTTP POST ak yon kò JSON. |
| **Feedback API Key** | Yon bearer token ki voye nan `Authorization` header chak demann feedback. Kite vid si endpoint ou a pa mande otantifikasyon. |

### Payload JSON ki Atann

Endpoint feedback ou a dwe aksepte yon kò JSON ak omwen chan sa yo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Chan adisyonèl ka prezan nan payload la selon kontèks konvèsasyon an.

### Valè `triage_category`

Kouch triage AI a bay youn nan valè sa yo pou `triage_category` anvan li voye payload la:

| Valè | Siyifikasyon |
|---|---|
| `factual_error` | Asistan an te bay enfòmasyon faktik ki pa kòrèk. |
| `unhelpful_answer` | Repons lan te teknikman kòrèk men li pa t itil. |
| `inappropriate_content` | Repons lan te gen kontni ki pa ta dwe montre itilizatè yo. |
| `other` | Feedback la pa t koresponn ak yon kategori li konnen. |

### Otantifikasyon

Si endpoint ou a mande otantifikasyon, mete chan **Feedback API Key** la ak bearer token ou. Ajan an voye:

```
Authorization: Bearer <your-api-key>
```

Si chan **Feedback API Key** la vid, yo pa voye okenn `Authorization` header.

### Dezaktive Koleksyon Feedback

Kite toude chan **Feedback Endpoint URL** ak **Feedback API Key** yo vid. Bouton pous-anba a ak UI feedback la rete vizib pou itilizatè yo, men soumisyon yo pa voye bay okenn sèvis ekstèn.

## Brave Search API Key

Epitou sou onglet **Advanced** la, chan **Brave Search API Key** la aktive kapasite [Rechèch Entènèt](../configuration/internet-search) la.

| Chan | Deskripsyon |
|---|---|
| **Brave Search API Key** | Kle API ou soti nan dashboard devlopè Brave Search la. Obligatwa pou aktive rechèch entènèt nan asistan AI a. |

Etikèt chan an gen ladan yon lyen ou ka klike pou ale nan paj enskripsyon Brave Search API a. Kite vid pou dezaktive rechèch entènèt.

Gade [Rechèch Entènèt](../configuration/internet-search) pou dokimantasyon itilizatè final sou fonksyonalite sa a.

## Sèvis Superdav Jere

Superdav AI Agent v1.18.0 ajoute endpoint sèvis Superdav jere ak pwovizyònman koneksyon otomatik pou sit ki sipòte yo. Sèvi ak kontwòl sa yo lè sit ou a ta dwe konekte ak founisè òganize a olye de yon endpoint sèvis ki konfigire manyèlman.

| Chan | Deskripsyon |
|---|---|
| **Managed Superdav Service** | Aktive koneksyon sèvis Superdav òganize a pou sit ki sipòte yo. |
| **Provision Connection** | Kòmanse pwovizyònman otomatik endpoint ak idantifyan. Sèvi ak sa apre ou fin konfime sit la ta dwe sèvi ak founisè jere a. |
| **Service Endpoint / Connection Status** | Montre endpoint aktyèl la oswa eta koneksyon an apre pwovizyònman. |

Apre pwovizyònman, sove anviwònman yo epi verifye eta koneksyon an anvan ou konte sou workflow sèvis jere yo. Si pwovizyònman echwe, revize gid rekòmanse ki parèt la epi konfime sit la gen pèmisyon pou sèvi ak founisè òganize a.

## Konfigirasyon Google Calendar

Lè fonksyonalite kalandriye Superdav AI Agent v1.18.0 yo aktive, ajan an ka li kalandriye ki konfigire yo ak detay evènman yo. Zouti kalandriye yo oryante pou lekti epi yo itil pou rapèl ki konsyan de orè, swivi patisipan, ak matche kontak.

| Chan | Deskripsyon |
|---|---|
| **Google Calendar Credentials** | Sere idantifyan oswa koneksyon token ki nesesè pou li done kalandriye. |
| **Calendar Selection** | Limite ki kalandriye ki konfigire ajan an ka enspekte. |
| **Calendar Connection Status** | Konfime si idantifyan aktyèl yo ka li kalandriye ak evènman. |

Kenbe idantifyan kalandriye yo limite ak kalandriye ajan an bezwen yo. Rekonekte oswa wotasyon idantifyan yo si eta a endike yon token ki ekspire.

## Notifikasyon SMS TextBee

Superdav AI Agent v1.18.0 ajoute TextBee kòm yon founisè SMS pou workflow notifikasyon ki konfigire yo. Notifikasyon SMS yo ta dwe makonnen ak baryè apwobasyon imen pou mesaj sansib oswa mesaj ki vizib pou itilizatè yo.

| Chan | Deskripsyon |
|---|---|
| **TextBee API Key** | Otantifye demann yo bay founisè SMS TextBee a. |
| **TextBee Device / Sender** | Chwazi ekspeditè oswa aparèy TextBee yo itilize pou mesaj k ap soti yo, lè founisè a mande sa. |
| **SMS Notifications Enabled** | Pèmèt workflow ki apwouve yo voye notifikasyon mesaj tèks. Kite dezaktive pou anpeche voye SMS. |

Voye yon mesaj tès sèlman bay yon nimewo ki pou yon administratè, apre sa konfime konpòtman baryè apwobasyon an anvan ou aktive rapèl pwograme oswa rapèl ki vizib pou patisipan yo.

## Drapo Fonksyonalite

Yo te entwodui li tou nan v1.9.0, onglet **Settings → Feature Flags** la bay bouton baskil pou fonksyonalite opsyonèl. Chak drapo swa aktive swa dezaktive pou tout rezo a; pa gen okenn ranplasman pou chak sit nan moman sa a.

### Aksede Drapo Fonksyonalite yo

1. Nan admin WordPress la, ale nan **Gratis AI Agent → Settings**.
2. Klike sou onglet **Feature Flags** la.

### Drapo Kontwòl Aksè

| Drapo | Defo | Deskripsyon |
|---|---|---|
| **Limite pou Administratè** | Off | Lè li aktive, sèlman itilizatè ki gen wòl `administrator` la ka ouvri panèl chat AI Agent lan. Tout lòt wòl yo wè yon mesaj "Kontakte administratè ou" pito. |
| **Limite pou Admin Rezo** | Off | Lè li aktive sou yon rezo multisite, sèlman Super Admins ka itilize ajan an. Admin sit endividyèl yo bloke. Sa gen priyorite sou "Limite pou Administratè" si toude aktive. |
| **Pèmèt Aksè Abòne** | Off | Lè li aktive, itilizatè ki gen wòl `subscriber` la ka itilize koòdone chat la men yo limite ak kapasite lekti-sèlman (pa gen kreyasyon pòs oswa chanjman paramèt). |
| **Dezaktive pou Moun ki Pa Manm** | Off | Entegre ak estati manm Ultimate Multisite. Lè li aktive, chat la kache pou sit ki pa gen yon manm aktif. |

### Drapo Mak

| Drapo | Defo | Deskripsyon |
|---|---|---|
| **Kache Pye Paj "Powered by Gratis AI Agent"** | Off | Retire liy atribisyon mak la ki parèt anba widget chat la. Rekòmande pou deplwaman white-label. |
| **Non Ajan Pèsonalize** | *(vid)* | Ranplase etikèt defo "Gratis AI Agent" la nan antèt chat la ak meni admin lan ak pwòp non pwodwi ou. Kite vid pou itilize defo a. |
| **Kache Chwazi Ajan an** | Off | Lè li aktive, itilizatè yo pa ka chanje ant senk ajan entegre yo. Ajan aktyèl la fikse sou sa ki konfigire kòm defo nan Settings → General. |
| **Itilize Ikòn Sit kòm Avatar Chat** | Off | Ranplase ikòn AI defo a nan antèt widget chat la ak ikòn sit WordPress la (mete anba Appearance → Customize → Site Identity). |

### Drapo Sekirite Otomatik

Superdav AI Agent v1.18.0 prezante baryè apwobasyon moun ak dosye rapèl pou ekzekisyon otomatik ki pi an sekirite. Kontwòl sa yo ka parèt nan drapo fonksyon yo oswa paramèt otomatik avanse yo, selon pake ki enstale a.

| Drapo | Defo | Deskripsyon |
|---|---|---|
| **Mande Apwobasyon Moun** | Rekòmande aktive | Mete otomatik sansib yo an poz jiskaske yon itilizatè otorize revize epi konfime aksyon yo pwopoze a. |
| **Dediplikasyon Rapèl** | On | Anrejistre rapèl ki voye yo pou tantativ ankò oswa ekzekisyon pwograme yo pa voye notifikasyon doub. |
| **Aktive Zouti Kalandriye** | Off jiskaske li konfigire | Pèmèt ajan an li kalandriye ak evènman Google ki konfigire yo. |
| **Aktive Notifikasyon SMS** | Off jiskaske li konfigire | Pèmèt workflows apwouve yo voye notifikasyon SMS TextBee apre kalifikasyon yo sove. |

### Aplike Chanjman yo

Klike **Save Settings** apre ou chanje nenpòt drapo. Chanjman yo pran efè imedyatman — pa bezwen vide kach oswa reyaktive plugin.
