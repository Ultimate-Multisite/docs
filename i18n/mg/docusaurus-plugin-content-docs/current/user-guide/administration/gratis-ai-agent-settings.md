---
title: Fikirana Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Fikirana Gratis AI Agent

Ny efijery **Settings → Advanced** ao amin’ny Gratis AI Agent dia manome fikirakirana amin’ny ambaratongan’ny mpitantana ho an’ny fampidirana backend. Ity pejy ity dia mandrakitra ny fandefasana feedback, ny fanalahidin’ny mpamatsy fikarohana, ny fananganana tolotra Superdav tantanana, ny fanaraha-maso Google Calendar, ny fikirana SMS TextBee, ary ny feature flags manerana ny tambajotra.

## Fidirana amin’ny Settings

1. Ao amin’ny fitantanana WordPress, mandehana any amin’ny **Gratis AI Agent → Settings**.
2. Tsindrio ny tabilao **Advanced**.

## Fikirakirana Feedback Endpoint

Ny feedback endpoint dia mandray fangatahana POST avy amin’ny AI agent isaky ny misy mpampiasa mandefa feedback amin’ny alalan’ny bokotra thumbs-down, ny sora-baventy auto-prompt, na ny baiko `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Ny URL mandray fandefasana feedback ho fangatahana HTTP POST miaraka amin’ny vatana JSON. |
| **Feedback API Key** | bearer token alefa ao amin’ny `Authorization` header isaky ny fangatahana feedback. Avelao ho banga raha tsy mitaky fanamarinana ny endpoint-nao. |

### Entana JSON Andrasana

Ny feedback endpoint-nao dia tsy maintsy manaiky vatana JSON misy farafahakeliny ireto fields manaraka ireto:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Mety hisy fields fanampiny ao amin’ny payload arakaraka ny toe-javatra amin’ny resaka.

### Sanda `triage_category`

Ny sosona fanasokajiana AI dia manendry iray amin’ireto sanda manaraka ireto amin’ny `triage_category` alohan’ny handefasana ny payload:

| Value | Meaning |
|---|---|
| `factual_error` | Nanome fampahalalana ara-zava-misy diso ilay mpanampy. |
| `unhelpful_answer` | Marina ara-teknika ny valiny fa tsy nahasoa. |
| `inappropriate_content` | Nisy votoaty tsy tokony haseho amin’ny mpampiasa tao amin’ny valiny. |
| `other` | Tsy nifanaraka tamin’ny sokajy fantatra ny feedback. |

### Fanamarinana

Raha mitaky fanamarinana ny endpoint-nao, apetraho amin’ny bearer token-nao ny field **Feedback API Key**. Mandefa izao ny agent:

```
Authorization: Bearer <your-api-key>
```

Raha banga ny field **Feedback API Key**, dia tsy alefa ny `Authorization` header.

### Famonoana ny Fanangonana Feedback

Avelao ho banga avokoa ny fields **Feedback Endpoint URL** sy **Feedback API Key**. Mbola hita amin’ny mpampiasa ny bokotra thumbs-down sy ny UI feedback, fa tsy alefa any amin’ny tolotra ivelany ny fandefasana.

## Brave Search API Key

Ao amin’ny tabilao **Advanced** ihany koa, ny field **Brave Search API Key** dia mamela ny fahaizana [Fikarohana Internet](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Ny API key-nao avy amin’ny dashboard mpamorona Brave Search. Ilaina mba hampandeha ny fikarohana internet ao amin’ny mpanampy AI. |

Ahitana rohy azo tsindriana mankany amin’ny pejy fisoratana anarana Brave Search API ny marika field. Avelao ho banga mba hamonoana ny fikarohana internet.

Jereo ny [Fikarohana Internet](../configuration/internet-search) ho an’ny tahirin-kevitra ho an’ny mpampiasa farany momba ity endri-javatra ity.

## Tolotra Superdav Tantanina

Superdav AI Agent v1.18.0 dia manampy endpoint tolotra Superdav tantanina sy provisioning fifandraisana mandeha ho azy ho an’ny site tohanana. Ampiasao ireto fanaraha-maso ireto rehefa tokony hifandray amin’ny mpamatsy nampiantranoina ny site-nao fa tsy amin’ny service endpoint voakirakira tanana.

| Field | Description |
|---|---|
| **Managed Superdav Service** | Mamela ny fifandraisana amin’ny tolotra Superdav nampiantranoina ho an’ny site tohanana. |
| **Provision Connection** | Manomboka provisioning endpoint sy credential mandeha ho azy. Ampiasao ity rehefa avy nanamarina fa tokony hampiasa ilay mpamatsy tantanana ny site. |
| **Service Endpoint / Connection Status** | Mampiseho ny endpoint ankehitriny na ny toetry ny fifandraisana aorian’ny provisioning. |

Aorian’ny provisioning, tehirizo ny settings ary hamarino ny toetry ny fifandraisana alohan’ny hiankinana amin’ny workflows managed-service. Raha tsy mahomby ny provisioning, avereno jerena ny torolalana retry aseho ary hamarino fa manana alalana hampiasa ilay mpamatsy nampiantranoina ny site.

## Fikirakirana Google Calendar

Rehefa alefa ny endri-javatra kalandrie Superdav AI Agent v1.18.0, dia afaka mamaky kalandrie voakirakira sy antsipirian’ny hetsika ny agent. Mifantoka amin’ny famakiana ny fitaovana kalandrie ary ilaina amin’ny fampahatsiahivana mahalala fandaharam-potoana, fanarahana mpanatrika, ary fampifandraisana contact.

| Field | Description |
|---|---|
| **Google Calendar Credentials** | Mitahiry ny credentials na fifandraisana token ilaina hamakiana angona kalandrie. |
| **Calendar Selection** | Mametra izay kalandrie voakirakira azon’ny agent zahana. |
| **Calendar Connection Status** | Manamarina raha afaka mamaky kalandrie sy hetsika ny credentials ankehitriny. |

Tazomy ho voafetra amin’ireo kalandrie ilain’ny agent ihany ny calendar credentials. Ampifandraiso indray na ahodino ny credentials raha manondro token lany daty ny status.

## Fampandrenesana SMS TextBee

Superdav AI Agent v1.18.0 dia manampy TextBee ho mpamatsy SMS ho an’ny workflows fampandrenesana voakirakira. Tokony hampiarahina amin’ny vavahadin’ny fankatoavan’olombelona ny fampandrenesana SMS ho an’ny hafatra saro-pady na atrehin’ny mpampiasa.

| Field | Description |
|---|---|
| **TextBee API Key** | Manamarina ny fangatahana mankany amin’ny mpamatsy SMS TextBee. |
| **TextBee Device / Sender** | Mifidy ny mpandefa na fitaovana TextBee ampiasaina amin’ny hafatra mivoaka, rehefa takian’ny mpamatsy. |
| **SMS Notifications Enabled** | Mamela workflows nankatoavina handefa fampandrenesana hafatra an-tsoratra. Avelao ho maty mba hisorohana fandefasana SMS. |

Mandefasa hafatra fitsapana amin’ny laharana an’ny mpitantana ihany, avy eo hamarino ny fitondran-tenan’ny approval-gate alohan’ny hamelana fampahatsiahivana voalahatra na atrehin’ny mpanatrika.

## Feature Flags

Nampidirina ihany koa tao amin’ny v1.9.0, ny tabilao **Settings → Feature Flags** dia manome switch toggle ho an’ny fiasa tsy voatery. Ny flag tsirairay dia na alefa na vonoina manerana ny tambajotra; tsy misy override isaky ny site amin’izao fotoana izao.

### Fidirana amin’ny Feature Flags

1. Ao amin’ny fitantanana WordPress, mandehana any amin’ny **Gratis AI Agent → Settings**.
2. Tsindrio ny tabilao **Feature Flags**.

### Flags Fanaraha-maso Fidirana

| Saina | Default | Famaritana |
|---|---|---|
| **Ferana ho an'ny Administrators** | Off | Rehefa alefa, ireo mpampiasa manana ny andraikitra `administrator` ihany no afaka manokatra ny tontonana resaka AI Agent. Ny andraikitra hafa rehetra kosa dia mahita hafatra hoe "Mifandraisa amin'ny administrator anao". |
| **Ferana ho an'ny Network Admins** | Off | Rehefa alefa amin'ny tambajotra multisite, ny Super Admins ihany no afaka mampiasa ilay agent. Voasakana ny admins an'ny site tsirairay. Manan-danja kokoa noho ny "Ferana ho an'ny Administrators" raha samy alefa izy roa. |
| **Avelao ny fidiran'ny Subscriber** | Off | Rehefa alefa, ny mpampiasa manana ny andraikitra `subscriber` dia afaka mampiasa ny interface resaka saingy voafetra amin'ny fahaiza-manao famakiana fotsiny (tsy misy famoronana lahatsoratra na fanovana settings). |
| **Atsaharo ho an'ny Tsy Mpikambana** | Off | Mifandray amin'ny sata maha-mpikambana ao amin'ny Ultimate Multisite. Rehefa alefa, afenina ho an'ireo site tsy manana maha-mpikambana mavitrika ny resaka. |

### Saina momba ny Marika

| Saina | Default | Famaritana |
|---|---|---|
| **Afeno ny Footer "Powered by Gratis AI Agent"** | Off | Manala ny andalana fanondroana marika aseho eo amin'ny faran'ny widget resaka. Soso-kevitra ho an'ny fametrahana white-label. |
| **Anaran'ny Agent Natao Manokana** | *(banga)* | Manolo ny marika "Gratis AI Agent" default ao amin'ny lohatenin'ny resaka sy ny menu admin amin'ny anaran'ny vokatrao manokana. Avelao ho banga raha hampiasa ny default. |
| **Afeno ny Mpifantina Agent** | Off | Rehefa alefa, tsy afaka mifamadika eo amin'ireo agent dimy efa tafiditra ny mpampiasa. Ny agent ankehitriny dia raikitra amin'izay voaomana ho default ao amin'ny Settings → General. |
| **Ampiasao ho Avatar Resaka ny Kisary Site** | Off | Manolo ny kisary AI default ao amin'ny lohatenin'ny widget resaka amin'ny kisary site WordPress (apetraka eo ambanin'ny Appearance → Customize → Site Identity). |

### Saina momba ny Fiarovana ny Automatisation

Superdav AI Agent v1.18.0 dia mampiditra vavahadin'ny fankatoavan'olombelona sy firaketana fampahatsiahivana ho an'ny fampandehanana automatisation azo antoka kokoa. Mety hiseho ao amin'ny feature flags na settings mandroso momba ny automatisation ireo fanaraha-maso ireo, arakaraka ny fonosana napetraka.

| Saina | Default | Famaritana |
|---|---|---|
| **Mitaky Fankatoavan'olombelona** | Recommended on | Mampiato automatisations saro-pady mandra-pandinika sy hanamafisan'ny mpampiasa nahazo alalana ny hetsika atolotra. |
| **Fanesorana Dika Mitovy amin'ny Fampahatsiahivana** | On | Mirakitra ny fampahatsiahivana nalefa mba tsy handefasan'ny retries na fampandehanana voalahatra fampandrenesana miverimberina. |
| **Alefaso ny Fitaovana Calendar** | Off mandra-pamboarina | Mamela ny agent hamaky calendars sy hetsika Google voaomana. |
| **Alefaso ny Fampandrenesana SMS** | Off mandra-pamboarina | Mamela workflows nankatoavina handefa fampandrenesana TextBee SMS rehefa voatahiry ny credentials. |

### Fampiharana Fanovana

Tsindrio **Save Settings** rehefa avy mamadika saina iray. Mihatra avy hatrany ny fanovana — tsy ilaina ny cache flush na ny famerenana mampihetsika ny plugin.
