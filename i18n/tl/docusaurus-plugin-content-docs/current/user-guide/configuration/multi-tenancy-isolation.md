---
title: Paghihiwalay ng Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Paghihiwalay sa Multi-Tenancy (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 ay sumusuporta sa per-subsite database at filesystem isolation para sa mga sovereign tenant. Pinapanatili nito ang data ng tenant na hiwalay habang pinapanatili ang provisioning, billing, at administrasyon sa antas ng network.

## Estratehiya sa Paghihiwalay (Isolation strategy) {#isolation-strategy}

Gumamit ng sovereign isolation para sa mga customer na nangangailangan ng mas matibay na paghihiwalay ng data, dedicated filesystem storage, o hiwalay na host boundary.

Ang bawat sovereign tenant ay dapat magkaroon ng:

- Isang dedicated tenant database o database prefix strategy na inaprubahan para sa host.
- Isang dedicated tenant filesystem root.
- Isang entry sa tenant registry na nagmamapa (maps) sa site nito sa database, root path, hostname, at isolation model.
- Isang resulta ng migration verification bago ituring na live ang tenant.

## Pag-uugnay ng Database Host (Database host binding) {#database-host-binding}

Binago ng Version 1.2.0 ang default na pag-uugali ng same-machine host binding para sa mga sovereign install. Ang mga halaga tulad ng `localhost` ay ginagawang normal upang ang Bedrock, FrankenPHP, at containerized WordPress installs ay makapagbigay at makapagsuri ng mga permiso laban sa host string na talagang nakikita ng MySQL.

Kapag nag-configure ng isang sovereign tenant:

1. Itakda ang database host sa halaga na kailangan ng runtime ng tenant.
2. Gamitin ang `localhost` para sa local socket installs kapag inaasahan ng host ang mga lokal na koneksyon.
3. Gamitin ang `127.0.0.1` o isang service hostname lamang kapag binibigyan ng database server ng pribilehiyo ang host na iyon.
4. Patakbuhin ang migration verification pagkatapos baguhin ang host binding.

Kung nagpapakita ng mga failure sa verification, ikumpara ang mga grant ng user sa DB ng tenant laban sa naka-configure na host binding. Ang isang user na binigyan ng permiso para sa `user@localhost` ay iba sa `user@127.0.0.1` o `user@%`.

## Filesystem root {#filesystem-root}

Ang root ng tenant ay dapat maging matatag kahit mag-restart o mag-deploy. Iwasan ang mga pansamantalang mount path. Para sa mga install na gaya ng Bedrock, siguraduhin na ang tenant root ay tumuturo sa WordPress web root na inaasahan ng tenant bootstrap, hindi lang sa project root.

## Order ng Provisioning {#provisioning-order}

Para sa mga bagong sovereign tenant, gamitin ang pagkakasunod na ito:

1. Gumawa ng entry sa tenant registry.
2. Gumawa ng database at database user para sa tenant.
3. I-bootstrap ang tenant schema.
4. Mag-provision ng mga user para sa tenant.
5. I-configure ang filesystem paths ng tenant.
6. Patakbuhin ang migration verification.
7. Palitan ang routing o DNS pagkatapos maaprubahan ang verification.

Ang pagkakasunod na ito ay pumipigil sa mga tenant na hindi pa lubusang nakahiwalay na makatanggap ng traffic bago maging handa ang database writer, users, at filesystem.

## Mga Daloy ng Pamamahala ng Sovereign Customer {#sovereign-customer-management-flows}

Pinapanatili ng Ultimate Multisite v2.13.0 ang mga aksyon sa pamamahala ng customer sa main site kapag naka-enable ang sovereign mode. Maaaring tumakbo pa rin ang isang tenant bilang isang hiwalay na WordPress install, ngunit ang mga aksyong nakikita ng customer na umaasa sa network billing, membership, o shared account data ay dapat magpadala sa customer pabalik sa main site sa halip na subukang tapusin ang aksyon sa loob ng runtime ng tenant.

Ang daloy ng main site ay naaangkop para sa:

- Checkout at mga pagbabago sa plano.
- Account overview at mga aksyong profile ng customer.
- Mga update sa billing address at mga screen para sa payment management.
- Mga view ng invoice at kasaysayan ng bayad.
- Mga aksyon sa pamamahala ng site tulad ng pagdaragdag o pagtatanggal ng site.
- Pagpapalit ng template.
- Domain mapping at mga pagbabago sa primary domain.

Kapag nagsimula ang customer sa isa sa mga aksyong ito mula sa isang *sovereign tenant*, ang Ultimate Multisite ay gagawa ng kaukulang URL para sa pangunahing site at pananatilihin ang pinagmulan na tenant bilang target kapag ligtas gawin. Pinapayagan nito ang mga customer na tapusin ang itinakdang aksyon laban sa mga rekord ng network, pagkatapos ay bumalik sa konteksto ng tenant nang hindi nag-uulit ng billing o membership state sa *sovereign database*.

Para sa mga operator, ang praktikal na alituntunin ay: panatilihing available sa pangunahing site ang mga pahina para sa billing, account, checkout, invoice, template, at domain management para sa mga *sovereign network*. Maaaring mag-link ang mga tenant dashboard sa mga pahinang iyon, ngunit mananatiling pinagmulan ng katotohanan (source of truth) ang pangunahing site para sa aksyon.
