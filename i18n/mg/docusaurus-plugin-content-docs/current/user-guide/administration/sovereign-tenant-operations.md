---
title: Asa ny Fandraisana Asa An'ny Mpanofa Mahery
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Fiasa ho Mpanjaka (Sovereign Tenant Operations) {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manampanarina fitaovana ho an'ny mpanjaka (sovereign tenants): ireo subsites izay miasa amin'ny database, root filesystem, ary routing context manokana azy nefa mbola hita avy amin'ny administrator an'ny tambajotra iainana.

Ampiasao ity pejy ity rehefa mitantana toerana mpanjaka voafetra (isolated customer sites), fifindrana toerana lavitra (remote-site handoffs), na fiovana izay manova subsite mahazatra ho infra mpanjaka.

## Inona no miova ho an'ny administrator {#what-changes-for-administrators}

- **Autologin an'ny tenant tsy misy fampahalalana (Stateless tenant autologin)** — Afaka mitohy amin'ny tenant mpanjaka ianao nefa tsy mila miankina amin'ny session state miandry ela. Ny SSO token dia manana faritra voafetra, mifototra amin'ny loharano (origin-pinned), miaro ny fampitahana indray (replay-protected), ary voafetra ho fotoana fohy fotsiny.
- **Routing mahafantatra ny mpanjaka (Sovereign-aware routing)** — Ireo tambajotra voafetra taloha sy ireo tenant mpanjaka dia mandeha amin'ny lalan'ny site router mitovy, izay mampihena ny fahasamihafana eo amin'ny fanombohana (bootstrap differences) eo amin'ireo instalasiona voafetra sy vaovao.
- **Toerana fiovana voamarina (Verified migration state)** — Ny famakafakana ny fiovana dia manamarina ny fanomezana fitaovana ho an'ny mpampiasa, ny zo hanoratra database, ny sata amin'ny queue drain, ary ny tsy fisian'ny tabilao taloha alohan'ny handinihana fa vita tanteraka ny tenant.
- **Fandavana (teardown) azo antoka kokoa** — Ny fandavana mpanjaka dia manala ireo fampahalalana an'ilay tenant tsara izao, ka tsy misy fidirana amin'ny database taloha aorian'ny fanesorana azy.

## Fandikana (Visiting) ny tenant mpanjaka {#visiting-a-sovereign-tenant}

1. Afaka miditra ao amin'ny **Network Admin > Ultimate Multisite > Sites**.
2. Safidio ny tenant mpanjaka tianao.
3. Ampiasao ny **Visit (SSO)** raha misy, fa aza mankany amin'ny kopiana teny anarana na famoronana kaonty administrator vonjy taitra.

Ny fomba fidinana dia mamorona token fidirana fohy ho an'io tenant io ary manatsara ny zava-nitranga SSO ao amin'ny audit trail an'ilay tenant. Raha tsy mandeha tsara ilay bokotra, jereo raha mifanaraka ny domain an'ilay tenant amin'ny instalasiona tokony ho hita ary raha afaka miantso ny endpoint SSO an'ny lafiny tambajotra iainana ny tenant.

## Fandaharam-potoana (Checklist) ho an'ny asa lavitra (Remote-site operations checklist) {#remote-site-operations-checklist}

Alohan'ny hanovana tenant mpanjaka na remote, dia avereno fanamarinana ireto:

Ny domain an'ny mpanofa (tenant) dia mitondra any amin'ilay host izay manana ny rakitra (filesystem) an'ilay mpanofa.
Ny host an'ilay database an'ilay mpanofa dia mifanaraka amin'ny fifandraisana host (host binding) voafetra ho an'io fametrahana io.
Ny baiko fanamarinana ny migrasana (migration verification commands) dia mandalo ho an'ilay mpanofa.
Ny toerana fampiasana (queues) migrasana tsy mitovy fotoana (async migration queues) dia atao fafana alohan'ny hanaovana fiovana amin'ny DNS na fananana (ownership).
Ny mpitantana an'ilay mpanofa dia voaomana nandritra ny migrasana ary afaka miditra amin'ny alalan'ny SSO.

## Fandefasana ireo mpanofa sohy (sovereign tenants) {#deleting-sovereign-tenants}

Ny fandefasana mpanofa sohy dia manimba. Fantaro aloha ny sata sy ny fanondroana (backup and export status), avy eo dia esory amin'ny antontan-taratasy fitantanana toerana (site management screen). Ny dingana 1.2.0 dia manala ny fampahalalana an'ny database an'ilay mpanofa ho an'ny fanadiovana, saingy tokony hanamarina ao ihany ny mpitantana fa vita sy nisy ireo mpampiasa database sy ireo folder eo amin'ny host rehefa mampiasa panel hosting ivelany.

:::warning
Aza manala mpanofa sohy raha mbola mandeha ny fanamarinana migrasana na raha misy asa fampitsoana tsy mitovy fotoana (async push jobs) voarakitra. Andramo aloha ny famaranana ny fanamarinana mba tsy hanesorana ireo fampahalalana ilaina amin'ny asa mbola miandry.
:::
