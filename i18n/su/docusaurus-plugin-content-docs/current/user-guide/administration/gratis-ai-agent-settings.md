---
title: Gratis AI Agent Setélan
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Setélan Gratis AI Agent

Layar **Settings → Advanced** dina Gratis AI Agent nyadiakeun konfigurasi tingkat administrator pikeun integrasi backend. Kaca ieu ngadokuméntasikeun pangalihan feedback, konci panyadia pilarian, panyetelan layanan Superdav anu dikokolakeun, kontrol Google Calendar, setélan SMS TextBee, jeung flag fitur sakuliah jaringan.

## Ngaksés Setélan

1. Dina admin WordPress, buka **Gratis AI Agent → Settings**.
2. Klik tab **Advanced**.

## Konfigurasi Endpoint Feedback

Endpoint feedback narima pamundut POST ti AI agent iraha waé pamaké ngirim feedback liwat tombol jempol-handap, banner auto-prompt, atawa paréntah `/report-issue`.

| Widang | Pedaran |
|---|---|
| **Feedback Endpoint URL** | URL anu narima kiriman feedback salaku pamundut HTTP POST kalayan eusi JSON. |
| **Feedback API Key** | bearer token anu dikirim dina `Authorization` header unggal pamundut feedback. Kosongkeun lamun endpoint anjeun teu merlukeun auténtikasi. |

### Payload JSON anu Dipiharep

Endpoint feedback anjeun kudu narima eusi JSON kalayan sahenteuna widang-widang ieu:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Widang tambahan bisa aya dina payload gumantung kana kontéks paguneman.

### Nilai `triage_category`

Lapisan triage AI netepkeun salah sahiji nilai di handap ieu ka `triage_category` saméméh ngalihkeun payload:

| Nilai | Harti |
|---|---|
| `factual_error` | Asistén masihan informasi faktual anu salah. |
| `unhelpful_answer` | Réspon sacara téknis bener tapi teu mangpaat. |
| `inappropriate_content` | Réspon ngandung eusi anu teu sakuduna ditingalikeun ka pamaké. |
| `other` | Feedback teu cocog jeung kategori anu dipikawanoh. |

### Auténtikasi

Lamun endpoint anjeun merlukeun auténtikasi, setel widang **Feedback API Key** kana bearer token anjeun. Agent ngirim:

```
Authorization: Bearer <your-api-key>
```

Lamun widang **Feedback API Key** kosong, euweuh `Authorization` header anu dikirim.

### Nonaktipkeun Pangumpulan Feedback

Kosongkeun boh widang **Feedback Endpoint URL** boh **Feedback API Key**. Tombol jempol-handap jeung UI feedback tetep katingali ku pamaké, tapi kiriman teu dialihkeun ka layanan éksternal mana waé.

## Brave Search API Key

Ogé dina tab **Advanced**, widang **Brave Search API Key** ngaktipkeun kamampuhan [Pilarian Internét](../configuration/internet-search).

| Widang | Pedaran |
|---|---|
| **Brave Search API Key** | API key anjeun ti dashboard pamekar Brave Search. Diperyogikeun pikeun ngaktipkeun pilarian internét dina AI assistant. |

Label widang ngawengku tautan anu bisa diklik ka kaca daptar Brave Search API. Kosongkeun pikeun nonaktipkeun pilarian internét.

Tingali [Pilarian Internét](../configuration/internet-search) pikeun dokuméntasi pamaké ahir ngeunaan fitur ieu.

## Layanan Superdav anu Dikokolakeun

Superdav AI Agent v1.18.0 nambahkeun endpoints layanan Superdav anu dikokolakeun jeung panyadiaan sambungan otomatis pikeun situs anu dirojong. Paké kontrol ieu lamun situs anjeun kudu nyambung ka panyadia hosted tibatan endpoint layanan anu dikonfigurasi sacara manual.

| Widang | Pedaran |
|---|---|
| **Managed Superdav Service** | Ngaktipkeun sambungan layanan Superdav hosted pikeun situs anu dirojong. |
| **Provision Connection** | Ngamimitian panyadiaan endpoint jeung kredénsial otomatis. Paké ieu sanggeus mastikeun situs kudu maké panyadia anu dikokolakeun. |
| **Service Endpoint / Connection Status** | Némbongkeun endpoint atawa kaayaan sambungan ayeuna sanggeus panyadiaan. |

Sanggeus panyadiaan, simpen setélan jeung pariksa status sambungan saméméh ngandelkeun alur gawé layanan-anu-dikokolakeun. Lamun panyadiaan gagal, tingali deui pituduh cobian-deui anu dipintonkeun jeung pastikeun situs boga idin pikeun maké panyadia hosted.

## Konfigurasi Google Calendar

Lamun fitur kalénder Superdav AI Agent v1.18.0 diaktipkeun, agent bisa maca kalénder anu dikonfigurasi jeung wincikan acara. Parabot kalénder berorientasi maca sarta mangpaat pikeun panginget anu sadar jadwal, tindak lanjut pamilon, jeung nyocogkeun kontak.

| Widang | Pedaran |
|---|---|
| **Google Calendar Credentials** | Nyimpen kredénsial atawa sambungan token anu diperyogikeun pikeun maca data kalénder. |
| **Calendar Selection** | Ngawatesan kalénder anu dikonfigurasi mana anu meunang dipariksa ku agent. |
| **Calendar Connection Status** | Mastikeun naha kredénsial ayeuna bisa maca kalénder jeung acara. |

Jaga kredénsial kalénder diwatesan kana kalénder anu diperyogikeun ku agent. Sambungkeun deui atawa rotasi kredénsial lamun status nunjukkeun token geus kadaluwarsa.

## Béwara SMS TextBee

Superdav AI Agent v1.18.0 nambahkeun TextBee salaku panyadia SMS pikeun alur gawé béwara anu dikonfigurasi. Béwara SMS kudu dipasangkeun jeung gerbang persetujuan manusa pikeun pesen anu sénsitip atawa nyanghareup ka pamaké.

| Widang | Pedaran |
|---|---|
| **TextBee API Key** | Ngaoténtikasi pamundut ka panyadia SMS TextBee. |
| **TextBee Device / Sender** | Milih pangirim atawa alat TextBee anu dipaké pikeun pesen kaluar, lamun diperyogikeun ku panyadia. |
| **SMS Notifications Enabled** | Ngidinan alur gawé anu disatujuan pikeun ngirim béwara pesen téks. Tinggalkeun nonaktip pikeun nyegah pangiriman SMS. |

Kirim pesen uji ngan ka nomer anu dipiboga ku administrator, tuluy pastikeun paripolah gerbang-persetujuan saméméh ngaktipkeun panginget anu dijadwalkeun atawa anu nyanghareup ka pamilon.

## Flag Fitur

Ogé diwanohkeun dina v1.9.0, tab **Settings → Feature Flags** nyadiakeun saklar toggle pikeun fungsionalitas opsional. Unggal flag boh diaktipkeun boh dinonaktipkeun sakuliah jaringan; ayeuna teu aya override per-situs.

### Ngaksés Flag Fitur

1. Dina admin WordPress, buka **Gratis AI Agent → Settings**.
2. Klik tab **Feature Flags**.

### Flag Kontrol Aksés

| Flag | Default | Pedaran |
|---|---|---|
| **Batesan ka Administrator** | Pareum | Lamun diaktipkeun, ngan pamaké jeung peran `administrator` nu bisa muka panel obrolan AI Agent. Peran séjénna bakal ningali pesen "Taroskeun ka administrator anjeun" gantina. |
| **Batesan ka Network Admins** | Pareum | Lamun diaktipkeun dina jaringan multisite, ngan Super Admins nu bisa maké agent. Admin situs individu diblokir. Ieu leuwih diutamakeun tibatan "Batesan ka Administrator" lamun duanana diaktipkeun. |
| **Idinan Aksés Subscriber** | Pareum | Lamun diaktipkeun, pamaké jeung peran `subscriber` bisa maké antarmuka obrolan tapi diwatesan kana kamampuh baca-wungkul (teu bisa nyieun tulisan atawa ngarobah setélan). |
| **Nonaktipkeun pikeun Nu Lain Anggota** | Pareum | Ngahijikeun jeung status kaanggotaan Ultimate Multisite. Lamun diaktipkeun, obrolan disumputkeun pikeun situs nu teu boga kaanggotaan aktif. |

### Flag Branding

| Flag | Default | Pedaran |
|---|---|---|
| **Sumputkeun Footer "Powered by Gratis AI Agent"** | Pareum | Miceun garis atribusi branding nu dipidangkeun di handapeun widget obrolan. Disarankeun pikeun deployment white-label. |
| **Ngaran Agent Kustom** | *(kosong)* | Ngaganti labél standar "Gratis AI Agent" dina header obrolan jeung ménu admin ku ngaran produk anjeun sorangan. Keun kosong pikeun maké standar. |
| **Sumputkeun Pamilih Agent** | Pareum | Lamun diaktipkeun, pamaké teu bisa ngalih antara lima agent bawaan. Agent ayeuna dikonci kana naon waé nu dikonfigurasi minangka standar dina Settings → General. |
| **Paké Ikon Situs minangka Avatar Obrolan** | Pareum | Ngaganti ikon AI standar dina header widget obrolan ku ikon situs WordPress (disetél dina Appearance → Customize → Site Identity). |

### Flag Kasalametan Otomatisasi

Superdav AI Agent v1.18.0 ngenalkeun gerbang persetujuan manusa jeung catetan pangéling pikeun jalan otomatisasi nu leuwih aman. Kontrol ieu bisa mucunghul dina feature flags atawa setélan otomatisasi canggih, gumantung kana pakét nu dipasang.

| Flag | Default | Pedaran |
|---|---|---|
| **Merlukeun Persetujuan Manusa** | Disarankeun hurung | Nunda otomatisasi sénsitip nepi ka pamaké nu boga wewenang marios jeung mastikeun tindakan nu diajukeun. |
| **Deduplicate Pangéling** | Hurung | Nyatet pangéling nu geus dikirim supaya usaha deui atawa jalan nu dijadwalkeun teu ngirim béwara duplikat. |
| **Aktipkeun Calendar Tools** | Pareum nepi ka dikonfigurasi | Ngidinan agent maca kalénder jeung acara Google nu geus dikonfigurasi. |
| **Aktipkeun Béwara SMS** | Pareum nepi ka dikonfigurasi | Ngidinan alur gawé nu disatujuan pikeun ngirim béwara SMS TextBee sanggeus kredensial disimpen. |

### Nerapkeun Parobahan

Klik **Save Settings** sanggeus ngarobah flag naon waé. Parobahan langsung berlaku — teu perlu cache flush atawa ngaktipkeun deui plugin.
