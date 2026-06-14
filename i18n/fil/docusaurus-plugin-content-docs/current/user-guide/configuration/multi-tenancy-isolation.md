---
title: Paghihiwalay ng Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 ay sumusu suporta per-subsite database at filesystem isolation para sa mga sovereign tenants. Pinapanatili nito ang data ng tenant na hiwalay habang pinapanatili ang network-level provisioning, billing, at administration.

## Isolation strategy

Gumamit ng sovereign isolation para sa mga customer na nangangailangan ng mas matibay na paghihiwalay ng data, dedicated filesystem storage, o isang hiwalay na host boundary.

Ang bawat sovereign tenant ay dapat magkaroon ng:

- Isang dedicated tenant database o database prefix strategy na inaprubahan para sa host.
- Isang dedicated tenant filesystem root.
- Isang tenant registry entry na nagmamapa sa site nito sa database, root path, hostname, at isolation model.
- Isang migration verification result bago ituring na live ang tenant.

## Database host binding

Binago ng Version 1.2.0 ang default same-machine host binding behavior para sa mga sovereign install. Ang mga halaga tulad ng `localhost` ay ginagawang normal para sa Bedrock, FrankenPHP, at containerized WordPress installs upang magbigay at mag-verify ng mga permiso laban sa host string na nakikita ng MySQL.

Kapag nag-configure ng isang sovereign tenant:

1. Itakda ang database host sa halaga na kailangan ng tenant runtime.
2. Gamitin ang `localhost` para sa local socket installs kapag inaasahan ng host ang mga lokal na koneksyon.
3. Gamitin ang `127.0.0.1` o isang service hostname lamang kapag binibigyan ng database server ng pribilehiyo ang host na iyon.
4. Patakbuhin ang migration verification pagkatapos baguhin ang host binding.

Kung nagpapakita ng mga failure ang verification, ikumpara ang mga grant ng user sa DB ng tenant laban sa naka-configure na host binding. Ang isang user na binigyan ng permiso para sa `user@localhost` ay iba sa `user@127.0.0.1` o `user@%`.

## Filesystem root

Dapat maging matatag ang tenant root kahit mag-restart o mag-deploy. Iwasan ang mga pansamantalang mount path. Para sa Bedrock-style installs, siguraduhin na ang tenant root ay tumuturo sa WordPress web root na inaasahan ng tenant bootstrap, hindi lang sa project root.

## Order ng Provisioning

Para sa mga bagong sovereign tenants, gamitin ang pagkakasunod na ito:

1. Gumawa ng entry sa tenant registry.
2. Gumawa ng database at database user para sa tenant.
3. I-bootstrap ang tenant schema.
4. Mag-provision ng mga user para sa tenant.
5. I-configure ang filesystem paths ng tenant.
6. Patakbuhin ang migration verification.
7. Palitan ang routing o DNS pagkatapos maaprubahan ang verification.

Ang pagkakasunod na ito ay pumipigil sa mga tenant na hindi pa lubusang naihiwalay na tumanggap ng traffic bago maging handa ang database writer, users, at filesystem.

## Mga Daloy ng Pamamahala ng Sovereign Customer

Pinapanatili ng Ultimate Multisite v2.13.0 ang mga aksyon sa pamamahala ng customer sa main site kapag naka-enable ang sovereign mode. Maaaring tumakbo pa rin ang isang tenant bilang isang hiwalay na WordPress install, ngunit ang mga aksyong nakikita ng customer na umaasa sa network billing, membership, o shared account data ay dapat magpadala sa customer pabalik sa main site sa halip na subukang tapusin ang aksyon sa loob ng runtime ng tenant.

Ang daloy ng main-site ay naaangkop sa:

- Checkout at pagbabago ng plano.
- Account overview at mga aksyong profile ng customer.
- Pag-update ng billing address at mga screen para sa payment management.
- Mga view ng invoice at kasaysayan ng bayad.
- Mga aksyon sa pamamahala ng site tulad ng pagdaragdag o pagtanggal ng site.
- Pagpapalit ng template.
- Domain mapping at mga pagbabago sa primary domain.

Kapag ang customer ay nagsimula ng isa sa mga aksyong ito mula sa isang sovereign tenant, ang Ultimate Multisite ay gagawa ng kaukulang URL ng main-site at magpapanatili ng source tenant bilang return target kapag ligtas gawin ito. Pinapayagan nito ang mga customer na tapusin ang pamamahala (managed action) laban sa network records, pagkatapos ay bumalik sa konteksto ng tenant nang hindi nag-uulit ng billing o membership state sa sovereign database.

Para sa mga operator, ang praktikal na panuntunan ay: panatilihing available sa main site ang mga pahina para sa billing, account, checkout, invoice, template, at domain-management para sa mga sovereign network. Maaaring mag-link ang tenant dashboards sa mga pahinang iyon, ngunit mananatiling source of truth (pinagmulan ng katotohanan) ang main site para sa aksyon.
