---
title: Paghiwalay sa Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Paghi sa Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 nagsuporta na kini sa per-subsite database ug filesystem isolation para sa mga soberanong tenant. Nagpabiling lahi ang datos sa tenant samtang gipadayon ang network-level provisioning, billing, ug administrasyon.

## Isolation strategy {#isolation-strategy}

Gamita ang sovereign isolation para sa mga customer nga nanginahanglan og mas lig-on nga paghiwalay sa datos, dedicated filesystem storage, o usa ka lain nga host boundary.

Ang matag soberanong tenant kinahanglan adunay:

- Usa ka dedikadong tenant database o database prefix strategy nga gi-approve alang sa host.
- Usa ka dedikadong tenant filesystem root.
- Usa ka entry sa tenant registry nga nag-mapa sa site ngadto sa iyang database, root path, hostname, ug isolation model.
- Usa ka migration verification result sa dili pa kini itandi nga live ang tenant.

## Database host binding {#database-host-binding}

Ang Version 1.2.0 nagbag-o sa default same-machine host binding behavior para sa mga sovereign install. Ang mga value sama sa `localhost` ma-normalize aron ang Bedrock, FrankenPHP, ug containerized WordPress installs makahatag ug makasusi og permissions batok sa host string nga tinuod nga makita sa MySQL.

Kung mag-configure ka og soberanong tenant:

1. Ihitabo ang database host ngadto sa value nga gikinahanglan sa tenant runtime.
2. Gamita ang `localhost` para sa local socket installs kung ang host naghulat og local connections.
3. Gamita ang `127.0.0.1` o usa ka service hostname lamang kung ang database server naghatag og privileges niini nga host.
4. Isagawa ang migration verification human sa pag-usab sa host binding.

Kung ang verification report nagpakita og grant failures, itandi ang mga user grants sa tenant DB ngadto sa gikatakng host binding. Ang usa ka user nga gihatag alang sa `user@localhost` lahi sa `user@127.0.0.1` o `user@%`.

## Filesystem root {#filesystem-root}

Kinahanglan nga ang tenant root magpabilin nga stable bisan unsa pa ka-restart ug deployment. Iwasan ang mga temporary mount path. Para sa Bedrock-style installs, siguruha nga ang tenant root nagtudlo sa WordPress web root nga gipaabot sa tenant bootstrap, dili lang sa project root.

## Provisioning order {#provisioning-order}

Para sa bag-ong sovereign tenants, gamita kining order:

1. Paghimo sa tenant registry entry.
2. Paghimo sa tenant database ug database user.
3. Bootstrap ang tenant schema.
4. Pag-provision sa mga tenant users.
5. Pagsulod (Configure) sa mga filesystem paths sa tenant.
6. Pag-run sa migration verification.
7. Pag-switch sa routing o DNS human na mapasa ang verification.

Kini nga order nagpugong sa mga tenant nga bahin pa lang gipaghiwalay dili makadawat og traffic sa dili pa andam ang database writer, users, ug filesystem.

## Sovereign customer management flows {#sovereign-customer-management-flows}

Ang Ultimate Multisite v2.13.0 nagpabilin sa mga aksyon sa pagdumala sa customer sa main site kung ang sovereign mode aktibo. Ang usa ka tenant mahimong mag-run isip isolated WordPress install, apan ang mga aksyon nga nakabase sa network billing, membership, o shared account data kinahanglan ipadala balik sa customer sa main site imbes nga sulayi kini makompleto sa sulod mismo sa tenant runtime.

Ang flow sa main site naglakip sa:

- Checkout ug mga kausaban sa plano.
- Account overview ug mga aksyon sa customer profile.
- Mga update sa billing address ug mga screen para sa payment management.
- Mga view sa invoice ug payment history.
- Mga aksyon sa pagdumala sa site sama sa pagdadagdag o pagtanggal og site.
- Template switching.
- Domain mapping ug mga kausaban sa primary-domain.

Kung magsugod ang customer sa usa niini nga mga lihok gikan sa usa ka sovereign tenant, ang Ultimate Multisite maghimo sa katumbas nga URL sa main-site ug magpadala sa source tenant isip return target kung luwas kini pagbuhaton. Kini nagtugot sa mga customer nga makompleto ang gi-manage nga aksyon batok sa network records, dayon mobalik sa konteksto sa tenant nga dili magduplika sa billing o membership state sa sovereign database.

Para sa mga operator, ang praktikal nga lagda mao: paningkamutan nga magpabilin nga available ang mga pahina sa billing, account, checkout, invoice, template, ug domain-management sa main site alang sa mga sovereign network. Ang tenant dashboards mahimong maglink niini nga mga pahina, apan ang main site nagpabilin nga source of truth para sa aksyon.
