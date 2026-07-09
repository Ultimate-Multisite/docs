---
title: Gratis AI Agent ସେଟିଂସ
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ସେଟିଂସ୍

Gratis AI Agent ରେ **ସେଟିଂସ୍ → ଉନ୍ନତ** ସ୍କ୍ରିନ୍ backend integrations ପାଇଁ ପ୍ରଶାସକ-ସ୍ତରୀୟ configuration ଦିଏ। ଏହି ପୃଷ୍ଠାରେ feedback forwarding, search provider keys, managed Superdav service setup, Google Calendar controls, TextBee SMS settings, ଏବଂ network-wide feature flags ବିଷୟରେ ଲେଖାଯାଇଛି।

## ସେଟିଂସ୍ ପ୍ରବେଶ

1. WordPress admin ରେ, **Gratis AI Agent → ସେଟିଂସ୍** କୁ ଯାଆନ୍ତୁ।
2. **ଉନ୍ନତ** ଟ୍ୟାବ୍ କ୍ଲିକ୍ କରନ୍ତୁ।

## Feedback Endpoint Configuration

feedback endpoint, କୌଣସି user thumbs-down button, auto-prompt banner, କିମ୍ବା `/report-issue` command ମାଧ୍ୟମରେ feedback ଦାଖଲ କଲେ AI agent ଠାରୁ POST requests ଗ୍ରହଣ କରେ।

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | JSON body ସହିତ HTTP POST requests ଭାବେ feedback submissions ଗ୍ରହଣ କରୁଥିବା URL। |
| **Feedback API Key** | ପ୍ରତ୍ୟେକ feedback request ର `Authorization` header ରେ ପଠାଯାଇଥିବା bearer token। ଆପଣଙ୍କ endpoint କୁ authentication ଦରକାର ନଥିଲେ ଖାଲି ରଖନ୍ତୁ। |

### ଆଶାକରାଯାଉଥିବା JSON Payload

ଆପଣଙ୍କ feedback endpoint କମ୍ ସେ କମ୍ ନିମ୍ନଲିଖିତ fields ସହିତ JSON body ଗ୍ରହଣ କରିବା ଦରକାର:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

conversation context ଅନୁସାରେ payload ରେ ଅତିରିକ୍ତ fields ଥାଇପାରେ।

### `triage_category` ମୂଲ୍ୟଗୁଡ଼ିକ

AI triage layer payload forwarding ପୂର୍ବରୁ `triage_category` କୁ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ ଗୋଟିଏ ମୂଲ୍ୟ ଦିଏ:

| Value | Meaning |
|---|---|
| `factual_error` | assistant ଭୁଲ ତଥ୍ୟାଧାରିତ ସୂଚନା ଦେଇଥିଲା। |
| `unhelpful_answer` | response ପ୍ରାଯୁକ୍ତିକ ଭାବେ ଠିକ୍ ଥିଲା, କିନ୍ତୁ ଉପଯୋଗୀ ନଥିଲା। |
| `inappropriate_content` | response ରେ ଏମିତି content ଥିଲା ଯାହା users ଙ୍କୁ ଦେଖାଇବା ଉଚିତ ନୁହେଁ। |
| `other` | feedback କୌଣସି ଜଣାଶୁଣା category ସହିତ ମେଳ ଖାଇନଥିଲା। |

### Authentication

ଆପଣଙ୍କ endpoint କୁ authentication ଦରକାର ହେଲେ, **Feedback API Key** field ରେ ଆପଣଙ୍କ bearer token ସେଟ୍ କରନ୍ତୁ। agent ପଠାଏ:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** field ଖାଲି ଥିଲେ, କୌଣସି `Authorization` header ପଠାଯାଏ ନାହିଁ।

### Feedback Collection ବନ୍ଦ କରିବା

**Feedback Endpoint URL** ଏବଂ **Feedback API Key** ଦୁଇଟି fields ଖାଲି ରଖନ୍ତୁ। thumbs-down button ଏବଂ feedback UI users ଙ୍କୁ ଦେଖାଯାଇ ରହେ, କିନ୍ତୁ submissions କୌଣସି external service କୁ forward ହୁଏ ନାହିଁ।

## Brave Search API Key

**ଉନ୍ନତ** ଟ୍ୟାବ୍ ରେ ମଧ୍ୟ, **Brave Search API Key** field [Internet Search](../configuration/internet-search) କ୍ଷମତାକୁ ସକ୍ରିୟ କରେ।

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard ରୁ ଆପଣଙ୍କ API key। AI assistant ରେ internet search ସକ୍ରିୟ କରିବାକୁ ଆବଶ୍ୟକ। |

field label ରେ Brave Search API sign-up ପୃଷ୍ଠାକୁ ଯିବା ପାଇଁ clickable link ରହିଛି। internet search ବନ୍ଦ କରିବାକୁ ଖାଲି ରଖନ୍ତୁ।

ଏହି feature ପାଇଁ end-user documentation ନିମନ୍ତେ [Internet Search](../configuration/internet-search) ଦେଖନ୍ତୁ।

## Managed Superdav Service

Superdav AI Agent v1.18.0 supported sites ପାଇଁ managed Superdav service endpoints ଏବଂ automatic connection provisioning ଯୋଡ଼େ। ଆପଣଙ୍କ site ମାନେ manually configured service endpoint ବଦଳରେ hosted provider ସହିତ connect ହେବା ଦରକାର ହେଲେ ଏହି controls ବ୍ୟବହାର କରନ୍ତୁ।

| Field | Description |
|---|---|
| **Managed Superdav Service** | supported sites ପାଇଁ hosted Superdav service connection ସକ୍ରିୟ କରେ। |
| **Provision Connection** | automatic endpoint ଏବଂ credential provisioning ଆରମ୍ଭ କରେ। site ଟି managed provider ବ୍ୟବହାର କରିବା ଦରକାର ବୋଲି ନିଶ୍ଚିତ କରିବା ପରେ ଏହା ବ୍ୟବହାର କରନ୍ତୁ। |
| **Service Endpoint / Connection Status** | provisioning ପରେ ବର୍ତ୍ତମାନର endpoint କିମ୍ବା connection state ଦେଖାଏ। |

provisioning ପରେ, settings save କରନ୍ତୁ ଏବଂ managed-service workflows ଉପରେ ନିର୍ଭର କରିବା ପୂର୍ବରୁ connection status ଯାଞ୍ଚ କରନ୍ତୁ। provisioning ବିଫଳ ହେଲେ, ଦେଖାଯାଇଥିବା retry guidance ସମୀକ୍ଷା କରନ୍ତୁ ଏବଂ site ର hosted provider ବ୍ୟବହାର କରିବାକୁ permission ଅଛି କି ନିଶ୍ଚିତ କରନ୍ତୁ।

## Google Calendar Configuration

Superdav AI Agent v1.18.0 calendar features ସକ୍ରିୟ ହେଲେ, agent configured calendars ଏବଂ event details ପଢ଼ିପାରେ। Calendar tools ପଢ଼ିବା-କେନ୍ଦ୍ରିତ ଏବଂ schedule-aware reminders, attendee follow-up, ଏବଂ contact matching ପାଇଁ ଉପଯୋଗୀ।

| Field | Description |
|---|---|
| **Google Calendar Credentials** | calendar data ପଢ଼ିବାକୁ ଆବଶ୍ୟକ credentials କିମ୍ବା token connection ସଞ୍ଚୟ କରେ। |
| **Calendar Selection** | agent କେଉଁ configured calendars ଯାଞ୍ଚ କରିପାରିବ ସେଥିରେ ସୀମା ଲଗାଏ। |
| **Calendar Connection Status** | ବର୍ତ୍ତମାନର credentials calendars ଏବଂ events ପଢ଼ିପାରୁଛି କି ନିଶ୍ଚିତ କରେ। |

calendar credentials କୁ agent ଆବଶ୍ୟକ କରୁଥିବା calendars ପର୍ଯ୍ୟନ୍ତ ସୀମିତ ରଖନ୍ତୁ। status expired token ଦେଖାଇଲେ credentials reconnect କିମ୍ବା rotate କରନ୍ତୁ।

## TextBee SMS Notifications

Superdav AI Agent v1.18.0 configured notification workflows ପାଇଁ TextBee କୁ SMS provider ଭାବେ ଯୋଡ଼େ। sensitive କିମ୍ବା user-facing messages ପାଇଁ SMS notifications କୁ human approval gates ସହିତ ଯୋଡ଼ିବା ଉଚିତ।

| Field | Description |
|---|---|
| **TextBee API Key** | TextBee SMS provider କୁ requests authenticate କରେ। |
| **TextBee Device / Sender** | provider ଦ୍ୱାରା ଆବଶ୍ୟକ ହେଲେ outgoing messages ପାଇଁ ବ୍ୟବହୃତ TextBee sender କିମ୍ବା device ବାଛେ। |
| **SMS Notifications Enabled** | approved workflows କୁ text-message notifications ପଠାଇବାକୁ ଅନୁମତି ଦିଏ। SMS sends ରୋକିବାକୁ disabled ରଖନ୍ତୁ। |

କେବଳ administrator-owned number କୁ test message ପଠାନ୍ତୁ, ତାପରେ scheduled କିମ୍ବା attendee-facing reminders ସକ୍ରିୟ କରିବା ପୂର୍ବରୁ approval-gate behaviour ନିଶ୍ଚିତ କରନ୍ତୁ।

## Feature Flags

v1.9.0 ରେ ମଧ୍ୟ ପରିଚୟ କରାଯାଇଥିବା **ସେଟିଂସ୍ → Feature Flags** ଟ୍ୟାବ୍ optional functionality ପାଇଁ toggle switches ଦିଏ। ପ୍ରତ୍ୟେକ flag network-wide enabled କିମ୍ବା disabled ହୁଏ; ଏହି ସମୟରେ per-site override ନାହିଁ।

### Feature Flags ପ୍ରବେଶ

1. WordPress admin ରେ, **Gratis AI Agent → ସେଟିଂସ୍** କୁ ଯାଆନ୍ତୁ।
2. **Feature Flags** ଟ୍ୟାବ୍ କ୍ଲିକ୍ କରନ୍ତୁ।

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Administrators ପର୍ଯ୍ୟନ୍ତ ସୀମିତ କରନ୍ତୁ** | ବନ୍ଦ | ସକ୍ରିୟ କଲେ, କେବଳ `administrator` ଭୂମିକା ଥିବା ବ୍ୟବହାରକାରୀମାନେ AI Agent ଚାଟ୍ ପ୍ୟାନେଲ୍ ଖୋଲିପାରିବେ। ଅନ୍ୟ ସମସ୍ତ ଭୂମିକାରେ ତାହାର ବଦଳରେ "ଆପଣଙ୍କ administrator ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ" ବାର୍ତ୍ତା ଦେଖାଯିବ। |
| **Network Admins ପର୍ଯ୍ୟନ୍ତ ସୀମିତ କରନ୍ତୁ** | ବନ୍ଦ | ମଲ୍ଟିସାଇଟ୍ ନେଟୱର୍କରେ ସକ୍ରିୟ କଲେ, କେବଳ Super Admins ଏଜେଣ୍ଟ୍ ବ୍ୟବହାର କରିପାରିବେ। ପୃଥକ ସାଇଟ୍ adminମାନଙ୍କୁ ଅବରୋଧ କରାଯିବ। ଦୁଇଟି ସକ୍ରିୟ ଥିଲେ, "Administrators ପର୍ଯ୍ୟନ୍ତ ସୀମିତ କରନ୍ତୁ" ଉପରେ ଏହାକୁ ପ୍ରାଥମ୍ୟ ମିଳିବ। |
| **Subscriber ପ୍ରବେଶକୁ ଅନୁମତି ଦିଅନ୍ତୁ** | ବନ୍ଦ | ସକ୍ରିୟ କଲେ, `subscriber` ଭୂମିକା ଥିବା ବ୍ୟବହାରକାରୀମାନେ ଚାଟ୍ ଇଣ୍ଟରଫେସ୍ ବ୍ୟବହାର କରିପାରିବେ, କିନ୍ତୁ କେବଳ ପଢ଼ିବା-ମାତ୍ର କ୍ଷମତା ପର୍ଯ୍ୟନ୍ତ ସୀମିତ ରହିବେ। ପୋଷ୍ଟ୍ ସୃଷ୍ଟି କିମ୍ବା ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ ନାହିଁ। |
| **ସଦସ୍ୟ ନୁହେଁଥିବାମାନଙ୍କ ପାଇଁ ବନ୍ଦ କରନ୍ତୁ** | ବନ୍ଦ | Ultimate Multisite ସଦସ୍ୟତା ସ୍ଥିତି ସହିତ ଏକୀକୃତ ହୁଏ। ସକ୍ରିୟ କଲେ, ସକ୍ରିୟ ସଦସ୍ୟତା ନଥିବା ସାଇଟ୍‌ମାନଙ୍କ ପାଇଁ ଚାଟ୍ ଲୁଚାଯାଏ। |

### ବ୍ରାଣ୍ଡିଂ ଫ୍ଲାଗ୍‌ମାନ

| Flag | Default | Description |
|---|---|---|
| **"Powered by Gratis AI Agent" ଫୁଟର୍ ଲୁଚାନ୍ତୁ** | ବନ୍ଦ | ଚାଟ୍ widget ତଳଭାଗରେ ଦେଖାଯାଉଥିବା ବ୍ରାଣ୍ଡିଂ ଶ୍ରେୟ ଲାଇନ୍‌କୁ କାଢ଼ିଦେଇଥାଏ। white-label ଡିପ୍ଲୟମେଣ୍ଟ ପାଇଁ ସୁପାରିଶ କରାଯାଏ। |
| **Custom Agent Name** | *(ଖାଲି)* | ଚାଟ୍ header ଏବଂ admin menuରେ ଡିଫଲ୍ଟ "Gratis AI Agent" ଲେବେଲ୍‌କୁ ଆପଣଙ୍କ ନିଜ product ନାମ ସହିତ ବଦଳାଏ। ଡିଫଲ୍ଟ ବ୍ୟବହାର କରିବାକୁ ଖାଲି ଛାଡ଼ନ୍ତୁ। |
| **Agent Picker ଲୁଚାନ୍ତୁ** | ବନ୍ଦ | ସକ୍ରିୟ କଲେ, ବ୍ୟବହାରକାରୀମାନେ ପାଞ୍ଚଟି ଅନ୍ତର୍ନିହିତ agent ମଧ୍ୟରେ ବଦଳାଇପାରିବେ ନାହିଁ। Settings → General ରେ ଡିଫଲ୍ଟ ଭାବେ ଯାହା configuration ହୋଇଛି, ବର୍ତ୍ତମାନ agent ସେହିଭାବେ ସ୍ଥିର ରହିବ। |
| **ସାଇଟ୍ ଆଇକନ୍‌କୁ ଚାଟ୍ ଅଭତାର୍ ଭାବେ ବ୍ୟବହାର କରନ୍ତୁ** | ବନ୍ଦ | ଚାଟ୍ widget headerର ଡିଫଲ୍ଟ AI ଆଇକନ୍‌କୁ WordPress ସାଇଟ୍ ଆଇକନ୍ ସହିତ ବଦଳାଏ। ଏହା Appearance → Customize → Site Identity ଅଧୀନରେ ସେଟ୍ କରାଯାଏ। |

### ସ୍ୱୟଂଚାଳନ ସୁରକ୍ଷା ଫ୍ଲାଗ୍‌ମାନ

Superdav AI Agent v1.18.0 ଅଧିକ ସୁରକ୍ଷିତ ସ୍ୱୟଂଚାଳନ ଚଳାଣ ପାଇଁ ମାନବୀୟ ଅନୁମୋଦନ ଦ୍ୱାର ଏବଂ ସ୍ମରଣିକା ରେକର୍ଡ ଆଣିଛି। ଇନ୍‌ଷ୍ଟଲ୍ ହୋଇଥିବା ପ୍ୟାକେଜ୍ ଅନୁସାରେ, ଏହି ନିୟନ୍ତ୍ରଣଗୁଡ଼ିକ feature flags କିମ୍ବା advanced automation settingsରେ ଦେଖାଯାଇପାରେ।

| Flag | Default | Description |
|---|---|---|
| **ମାନବୀୟ ଅନୁମୋଦନ ଆବଶ୍ୟକ** | ସୁପାରିଶିତ ଭାବେ ଚାଲୁ | ଅଧିକୃତ ବ୍ୟବହାରକାରୀ ପ୍ରସ୍ତାବିତ କାର୍ଯ୍ୟକୁ ସମୀକ୍ଷା କରି ନିଶ୍ଚିତ କରିବା ପର୍ଯ୍ୟନ୍ତ ସମ୍ବେଦନଶୀଳ ସ୍ୱୟଂଚାଳନଗୁଡ଼ିକୁ ବିରତ କରେ। |
| **ସ୍ମରଣିକା ଡିଡୁପ୍ଲିକେସନ୍** | ଚାଲୁ | ପଠାଯାଇଥିବା ସ୍ମରଣିକାମାନଙ୍କୁ ରେକର୍ଡ କରେ, ଯାହାରୁ ପୁଣିଥରେ ଚେଷ୍ଟା କିମ୍ବା ନିର୍ଦ୍ଧାରିତ ଚଳାଣ ଡୁପ୍ଲିକେଟ୍ ସୂଚନା ପଠାଏ ନାହିଁ। |
| **କ୍ୟାଲେଣ୍ଡର୍ ଟୁଲ୍‌ଗୁଡ଼ିକ ସକ୍ରିୟ କରନ୍ତୁ** | configuration ହେବା ପର୍ଯ୍ୟନ୍ତ ବନ୍ଦ | agentକୁ configuration କରାଯାଇଥିବା Google କ୍ୟାଲେଣ୍ଡର୍ ଏବଂ ଇଭେଣ୍ଟ୍ ପଢ଼ିବାକୁ ଅନୁମତି ଦିଏ। |
| **SMS ସୂଚନା ସକ୍ରିୟ କରନ୍ତୁ** | configuration ହେବା ପର୍ଯ୍ୟନ୍ତ ବନ୍ଦ | ପ୍ରମାଣପତ୍ର ସେଭ୍ ହେବା ପରେ ଅନୁମୋଦିତ workflowମାନଙ୍କୁ TextBee SMS ସୂଚନା ପଠାଇବାକୁ ଅନୁମତି ଦିଏ। |

### ପରିବର୍ତ୍ତନ ଲାଗୁ କରିବା

କୌଣସି ଫ୍ଲାଗ୍ toggle କରିବା ପରେ **Settings ସେଭ୍ କରନ୍ତୁ** କ୍ଲିକ୍ କରନ୍ତୁ। ପରିବର୍ତ୍ତନଗୁଡ଼ିକ ତୁରନ୍ତ ପ୍ରଭାବୀ ହୁଏ — କୌଣସି cache flush କିମ୍ବା plugin ପୁନସ୍କ୍ରିୟକରଣ ଆବଶ୍ୟକ ନୁହେଁ।
