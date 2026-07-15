---
title: Pangaturan Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Setelan Gratis AI Agent

Layar **Setelan → Lanjutan** ing Gratis AI Agent nyedhiyakake konfigurasi tingkat administrator kanggo integrasi backend. Kaca iki ndokumentasikake penerusan umpan balik, kunci panyedhiya telusur, persiyapan layanan Superdav sing dikelola, kontrol Google Calendar, setelan SMS TextBee, lan tandha fitur saindenging jaringan.

## Ngakses Setelan {#accessing-settings}

1. Ing admin WordPress, pindhah menyang **Gratis AI Agent → Setelan**.
2. Klik tab **Lanjutan**.

## Konfigurasi Endpoint Umpan Balik {#feedback-endpoint-configuration}

Endpoint umpan balik nampa panjaluk POST saka AI agent saben pangguna ngirim umpan balik liwat tombol jempol-mudhun, banner panjaluk otomatis, utawa printah `/report-issue`.

| Kolom | Katrangan |
|---|---|
| **URL Endpoint Umpan Balik** | URL sing nampa kiriman umpan balik minangka panjaluk HTTP POST nganggo awak JSON. |
| **Feedback API Key** | bearer token sing dikirim ing `Authorization` header saben panjaluk umpan balik. Jarwakake kosong yen endpoint sampeyan ora mbutuhake autentikasi. |

### Payload JSON sing Dikarepake {#expected-json-payload}

Endpoint umpan balik sampeyan kudu nampa awak JSON kanthi paling ora kolom ing ngisor iki:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Kolom tambahan bisa ana ing payload gumantung marang konteks pacelathon.

### Nilai `triage_category` {#triagecategory-values}

Lapisan triage AI netepake salah siji nilai ing ngisor iki menyang `triage_category` sadurunge nerusake payload:

| Nilai | Tegese |
|---|---|
| `factual_error` | Asisten menehi informasi fakta sing salah. |
| `unhelpful_answer` | Tanggapan kasebut sacara teknis bener nanging ora migunani. |
| `inappropriate_content` | Tanggapan ngemot konten sing ora kudune ditampilake marang pangguna. |
| `other` | Umpan balik ora cocog karo kategori sing wis dikenal. |

### Autentikasi {#authentication}

Yen endpoint sampeyan mbutuhake autentikasi, setel kolom **Feedback API Key** menyang bearer token sampeyan. Agent ngirim:

```
Authorization: Bearer <your-api-key>
```

Yen kolom **Feedback API Key** kosong, ora ana `Authorization` header sing dikirim.

### Mateni Pangumpulan Umpan Balik {#disabling-feedback-collection}

Jarwakake kolom **URL Endpoint Umpan Balik** lan **Feedback API Key** loro-lorone kosong. Tombol jempol-mudhun lan UI umpan balik tetep katon kanggo pangguna, nanging kiriman ora diterusake menyang layanan eksternal apa wae.

## Brave Search API Key {#brave-search-api-key}

Uga ing tab **Lanjutan**, kolom **Brave Search API Key** ngaktifake kemampuan [Telusur Internet](../configuration/internet-search).

| Kolom | Katrangan |
|---|---|
| **Brave Search API Key** | Kunci API sampeyan saka dashboard pangembang Brave Search. Dibutuhake kanggo ngaktifake telusur internet ing asisten AI. |

Label kolom kalebu pranala sing bisa diklik menyang kaca ndhaptar API Brave Search. Jarwakake kosong kanggo mateni telusur internet.

Deleng [Telusur Internet](../configuration/internet-search) kanggo dokumentasi pangguna pungkasan babagan fitur iki.

## Layanan Superdav sing Dikelola {#managed-superdav-service}

Superdav AI Agent v1.18.0 nambahake endpoint layanan Superdav sing dikelola lan panyedhiyan sambungan otomatis kanggo situs sing didhukung. Gunakake kontrol iki nalika situs sampeyan kudu nyambung menyang panyedhiya hosted tinimbang endpoint layanan sing dikonfigurasi manual.

| Kolom | Katrangan |
|---|---|
| **Layanan Superdav sing Dikelola** | Ngaktifake sambungan layanan Superdav hosted kanggo situs sing didhukung. |
| **Sedyakake Sambungan** | Miwiti panyedhiyan endpoint lan kredensial otomatis. Gunakake iki sawise ngonfirmasi yen situs kudu nggunakake panyedhiya sing dikelola. |
| **Endpoint Layanan / Status Sambungan** | Nuduhake endpoint utawa kahanan sambungan saiki sawise panyedhiyan. |

Sawise panyedhiyan, simpen setelan lan verifikasi status sambungan sadurunge ngandelake alur kerja layanan sing dikelola. Yen panyedhiyan gagal, deleng pandhuan nyoba maneh sing ditampilake lan konfirmasi situs nduweni idin kanggo nggunakake panyedhiya hosted.

## Konfigurasi Google Calendar {#google-calendar-configuration}

Nalika fitur tanggalan Superdav AI Agent v1.18.0 diaktifake, agent bisa maca tanggalan sing dikonfigurasi lan rincian acara. Piranti tanggalan sipate kanggo maca lan migunani kanggo pangeling sing ngerti jadwal, tindak lanjut peserta, lan pencocokan kontak.

| Kolom | Katrangan |
|---|---|
| **Kredensial Google Calendar** | Nyimpen kredensial utawa sambungan token sing dibutuhake kanggo maca data tanggalan. |
| **Pilihan Tanggalan** | Mbatesi tanggalan sing dikonfigurasi endi wae sing bisa dipriksa dening agent. |
| **Status Sambungan Tanggalan** | Ngonfirmasi apa kredensial saiki bisa maca tanggalan lan acara. |

Jaga kredensial tanggalan supaya winates mung kanggo tanggalan sing dibutuhake agent. Sambungake maneh utawa ganti kredensial yen status nuduhake token sing wis kadaluwarsa.

## Notifikasi SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 nambahake TextBee minangka panyedhiya SMS kanggo alur kerja notifikasi sing dikonfigurasi. Notifikasi SMS kudu dipasangake karo gerbang persetujuan manungsa kanggo pesen sing sensitif utawa katon marang pangguna.

| Kolom | Katrangan |
|---|---|
| **TextBee API Key** | Ngautentikasi panjaluk menyang panyedhiya SMS TextBee. |
| **Piranti / Pangirim TextBee** | Milih pangirim utawa piranti TextBee sing digunakake kanggo pesen metu, nalika dibutuhake dening panyedhiya. |
| **Notifikasi SMS Diaktifake** | Ngidini alur kerja sing disetujoni kanggo ngirim notifikasi pesen teks. Jarwakake dipateni kanggo nyegah pangiriman SMS. |

Kirim pesen tes mung menyang nomer sing diduweni administrator, banjur konfirmasi prilaku gerbang persetujuan sadurunge ngaktifake pangeling terjadwal utawa sing katon marang peserta.

## Tandha Fitur {#feature-flags}

Uga dikenalake ing v1.9.0, tab **Setelan → Tandha Fitur** nyedhiyakake saklar toggle kanggo fungsionalitas opsional. Saben tandha bisa diaktifake utawa dipateni saindenging jaringan; saiki durung ana override saben situs.

### Ngakses Tandha Fitur {#accessing-feature-flags}

1. Ing admin WordPress, pindhah menyang **Gratis AI Agent → Setelan**.
2. Klik tab **Tandha Fitur**.

### Tandha Kontrol Akses {#access-control-flags}

| Flag | Default | Katrangan |
|---|---|---|
| **Watesi mung kanggo Administrators** | Off | Nalika diaktifake, mung pangguna kanthi peran `administrator` sing bisa mbukak panel obrolan AI Agent. Kabeh peran liyane bakal ndeleng pesen "Hubungi administrator sampeyan" minangka gantine. |
| **Watesi mung kanggo Network Admins** | Off | Nalika diaktifake ing jaringan multisite, mung Super Admins sing bisa nggunakake agent. Admin situs individu diblokir. Iki luwih diprioritasake tinimbang "Watesi mung kanggo Administrators" yen loro-lorone diaktifake. |
| **Idinake Akses Subscriber** | Off | Nalika diaktifake, pangguna kanthi peran `subscriber` bisa nggunakake antarmuka obrolan nanging diwatesi mung kemampuan maca wae (ora bisa nggawe kiriman utawa ngganti setelan). |
| **Pateni kanggo Non-Members** | Off | Nyawiji karo status keanggotaan Ultimate Multisite. Nalika diaktifake, obrolan didhelikake kanggo situs sing ora duwe keanggotaan aktif. |

### Branding Flags {#branding-flags}

| Flag | Default | Katrangan |
|---|---|---|
| **Dhelikake Footer "Powered by Gratis AI Agent"** | Off | Mbusak baris atribusi branding sing ditampilake ing sisih ngisor widget obrolan. Disaranake kanggo penerapan white-label. |
| **Jeneng Agent Kustom** | *(kosong)* | Ngganti label standar "Gratis AI Agent" ing header obrolan lan menu admin nganggo jeneng produk sampeyan dhewe. Ninggalake kosong kanggo nggunakake standar. |
| **Dhelikake Pamilih Agent** | Off | Nalika diaktifake, pangguna ora bisa ngalih antarane limang agent bawaan. Agent saiki dikunci menyang apa wae sing dikonfigurasi minangka standar ing Settings → General. |
| **Gunakake Ikon Situs minangka Avatar Obrolan** | Off | Ngganti ikon AI standar ing header widget obrolan nganggo ikon situs WordPress (disetel ing Appearance → Customize → Site Identity). |

### Automation Safety Flags {#automation-safety-flags}

Superdav AI Agent v1.18.0 ngenalake gapura persetujuan manungsa lan cathetan pangeling kanggo lakune otomasi sing luwih aman. Kontrol iki bisa katon ing feature flags utawa setelan otomasi tingkat lanjut, gumantung marang paket sing diinstal.

| Flag | Default | Katrangan |
|---|---|---|
| **Butuh Persetujuan Manungsa** | Disaranake on | Ngasoake otomasi sensitif nganti pangguna sing duwe wewenang mriksa lan ngonfirmasi tumindak sing diusulake. |
| **Dedhupikasi Pangeling** | On | Nyathet pangeling sing dikirim supaya coba maneh utawa lakon sing dijadwal ora ngirim kabar duplikat. |
| **Aktifake Piranti Calendar** | Off nganti dikonfigurasi | Ngidini agent maca Google calendars lan acara sing wis dikonfigurasi. |
| **Aktifake Kabar SMS** | Off nganti dikonfigurasi | Ngidini alur kerja sing wis disetujoni ngirim kabar TextBee SMS sawise kredensial disimpen. |

### Nerapake Owah-owahan {#applying-changes}

Klik **Save Settings** sawisé nguripake utawa mateni flag apa wae. Owah-owahan langsung ditrapake — ora perlu cache flush utawa ngaktifake ulang plugin.
