---
title: Khuaws cia Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# ការតភ្ជាប់ជាមួយ Hestia Control Panel {#hestia-control-panel-integration}

ការណែនាំនេះនឹងពន្យល់ពីរបៀបកំណត់រចនាសម្ព័ន្ធ Ultimate Multisite Hestia integration ដើម្បីឱ្យដែនដែលបានបិទភ្ជាប់ (mapped domains) នៅក្នុងបណ្តាញរបស់អ្នកត្រូវបានបន្ថែម (និងដកចេញ) ជា Web Domain Aliases នៅក្នុង Hestia ដោយស្វ័យប្រវត្តិ។

- សេចក្តីឯកសារ CLI របស់ Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- សេចក្តីឯកសារ REST API ផ្លូវការ: https://hestiacp.com/docs/server-administration/rest-api.html

## វាធ្វើអ្វីខ្លះ {#what-it-does}
- នៅពេលដែលដែនមួយត្រូវបានបិទភ្ជាប់នៅក្នុង Ultimate Multisite ការតភ្ជាប់នេះនឹងហៅ Hestia API ដើម្បីដំណើរការ៖
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- នៅពេលដែលការបិទភ្ជាប់ដែនត្រូវបានលុបចេញ វាដំណើរការ៖
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ជ tùy (optionally) បន្ថែម/ដកយក alias `www.` អាស្រ័យលើការកំណត់ "Auto-create www subdomain" របស់អ្នកនៅក្នុងការកំណត់ Domain Mapping។

## តម្រូវការជាមុន {#prerequisites}
- មាន Hestia Web Domain ដែលមានរួចហើយដែលបង្ហាញទៅកាន់ការដំឡើង WordPress របស់អ្នក។ ការតភ្ជាប់នេះនឹងភ្ជាប់ aliases ទៅដែនមូលដ្ឋាន (base domain) នេះ។
- បើកដំណើរការ API access របស់ Hestia។ អ្នកអាចផ្ទៀងផ្ទាត់ខ្លួនដោយប្រើលេខសម្ងាត់ ឬ API hash/token។

សូមមើលឯកសារ REST API របស់ Hestia ដើម្បីបើកដំណើរការ API access និងព័ត៌មាននៃការផ្ទៀងផ្ទាត់៖
https://hestiacp.com/docs/server-administration/rest-api.html

## ការកំណត់រចនាសម្ព័ន្ធ (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
ផ្តល់តម្លៃដូចខាងក្រោម៖

- `WU_HESTIA_API_URL` (tsoom) (required)
  - The base API endpoint, usually `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (tsoom) (required)
  - Hestia user you use for API commands (often `admin`).
- `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH` (at least one)
  - Choose one way to log in: password or API hash/token.
- `WU_HESTIA_ACCOUNT` (tsoom) (required)
  - The account (owner) of the Web Domain in Hestia; this is the first thing you need for the CLI command.
- `WU_HESTIA_WEB_DOMAIN` (tsoom) (required)
  - The existing Hestia Web Domain that runs your WordPress site (aliases will be added here).
- `WU_HESTIA_RESTART` (optional; default `yes`)
  - Whether you want to restart/reload the services after changing aliases.

You can let the wizard put these constants into `wp-config.php`, or you can set them by hand yourself.

## Verifying Setup {#verifying-setup}
- In the “Testing” step of the wizard, the plugin calls `v-list-web-domains <WU_HESTIA_ACCOUNT> json` through the API. If it gets a success response, it means the connection and login are working fine.
- After you map a domain, check in Hestia: Web > the main domain > Aliases. You should see the new alias there.

## Notes & Tips {#notes--tips}
- Make sure that `WU_HESTIA_WEB_DOMAIN` already exists and is owned by `WU_HESTIA_ACCOUNT`.
- If you need SSL (HTTPS), manage your certificates at Hestia. Right now, this setup only handles aliases.
- The plugin might also add or remove `www.<domain>` depending on how you set the Domain Mapping “www subdomain” option.

## Example API Call (cURL) {#example-api-call-curl}
This is just an example (you need to change it for your own system). Please look at the official documentation for all the exact settings.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

ສຳລັບການລຶບ (delete), ໃຫ້ໃຊ້ `cmd=v-delete-web-domain-alias` ແລະ ແຖມຄ່າ arguments ເຊັ່ນກັນ.

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#troubleshooting}
- HTTP error ຈາກ API: ກວດເບິ່ງວ່າ `WU_HESTIA_API_URL` ສາມາດເຂົ້າເຖິງໄດ້ບໍ່ ແລະ ມີ `/api` ນຳໜ້າຢູ່ບໍ່.
- ຂໍ້ຜິດພາດການຢືນຢັນຕົວຕົນ (Auth errors): ຢືນຢັນວ່າ `WU_HESTIA_API_USER` ແລະ ຄ່າໃດໜຶ່ງຂອງ `WU_HESTIA_API_PASSWORD` ຫຼື `WU_HESTIA_API_HASH` ແມ່ນຖືກຕ້ອງ.
- "Missing account/base domain" ໃນ logs: ໃຫ້ແນ່ໃຈວ່າ `WU_HESTIA_ACCOUNT` ແລະ `WU_HESTIA_WEB_DOMAIN` ໄດ້ຖືກຕັ້ງຄ່າໄວ້ ແລະ ມີຜົນໃນ Hestia ແລ້ວ.

## ເ link (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
