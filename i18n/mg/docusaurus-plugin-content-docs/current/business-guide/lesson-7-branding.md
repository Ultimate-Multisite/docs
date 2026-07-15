---
title: 'Lesona 7: Ataovy ho anao'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesona 7: Ataovy Ho Anao Manokana

Tsy tokony hahatsapa mihitsy ny mpanjifanao fa mampiasa "plugin WordPress sasantsasany" izy ireo. Tokony hahatsapa izy ireo fa mampiasa FitSite -- sehatra iray naorina ho an'ny indostrian'izy ireo. Ity lesona ity dia miresaka marika, white-labeling, ary ny fomba hahatonga ilay sehatra ho toy ny vokatra.

## Izay Nijanontsika {#where-we-left-off}

Manana fikorianan'ny checkout miasa ny FitSite izay mitondra ny tompon'ny studio fanaovana fanatanjahan-tena manomboka amin'ny fisafidianana plan ka hatramin'ny tranonkala velona. Ankehitriny dia ataontsika hahatsapa ho toy ny vokatra mirindra sy manana marika ny traikefa manontolo.

## Domain an'ny Sehatrao {#your-platform-domain}

Ny fototry ny marikao dia ny domain-nao. Ho an'ny FitSite:

- **Domain fototra**: `fitsite.com` (tranonkala marketing-nao sy fototry ny tambajotra)
- **Tranonkalan'ny mpanjifa**: `studioname.fitsite.com` (subdomains)
- **Domain manokana**: Afaka mampifandray ny domain-ny manokana ny mpanjifa ao amin'ny plan Growth sy Pro

### Fametrahana ny Domain-nao {#setting-up-your-domain}

1. Soraty ara-dalàna ny domain an'ny sehatrao
2. Tondroy any amin'ny mpamatsy hosting-nao izany
3. Amboary ny wildcard DNS (`*.fitsite.com`) ho an'ny subdomains an'ny mpanjifa
4. Ataovy azo antoka fa mavitrika ny wildcard SSL

Jereo ny [Fomba Fanamboarana Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) ho an'ny torolalana amin'ny antsipiriany.

## White-Labeling ny Traikefan'ny Admin {#white-labeling-the-admin-experience}

Rehefa miditra ao amin'ny Dashboard-n'ny tranonkalany ny tompon'ny studio fanaovana fanatanjahan-tena, dia tokony hahita ny marikao izy ireo, fa tsy marika WordPress na Ultimate Multisite.

### Pejy Login Manokana {#custom-login-page}

Ataovy manokana ny pejy login WordPress mba hampiseho:

- Ny logo FitSite-nao
- Sary lafika mifanaraka amin'ny fanatanjahan-tena
- Ny lokon'ny marikao

### Marika amin'ny Dashboard {#dashboard-branding}

Ampiasao ny addon [Admin Page Creator](/addons/admin-page-creator) na CSS manokana mba:

- Hanoloana ny logo WordPress amin'ny logo FitSite-nao
- Hanamboarana ny rafitra lokon'ny admin hifanaraka amin'ny marikao
- Hanampiana widget Dashboard manokana misy rohy haingana sy loharanom-panampiana manokana ho an'ny fanatanjahan-tena

### Pejy Admin Manokana {#custom-admin-pages}

Diniho ny famoronana pejy admin manokana izay mampiseho ireo hetsika mifandraika indrindra amin'ny tompon'ny studio fanaovana fanatanjahan-tena:

- "Ovay ny Fandaharam-pianaranao"
- "Havaozy ny Mombamomba ny Mpanazatra"
- "Jereo ny Tranonkalanao"

Mampihena ny elanelam-pianarana izany amin'ny fametrahana ireo hetsika mifandraika amin'ny sehatra manokana eo anoloana sy afovoany fa tsy alevina ao amin'ny menu WordPress mahazatra.

## Fametrahana Marika amin'ny Fifandraisanao {#branding-your-communications}

Ny email, invoice, ary fampandrenesana rehetra dia tokony hanamafy ny marikao.

### Email-n'ny Rafitra {#system-emails}

Mandehana any amin'ny **Ultimate Multisite > Settings > Emails** ary ataovy manokana ny email-n'ny rafitra rehetra:

- **Anarana From**: FitSite
- **Email From**: hello@fitsite.com
- **Template email**: Ampiasao ny lokon'ny marikao sy ny logo
- **Fiteny**: Manokana ho an'ny fanatanjahan-tena hatrany

Email lehibe tokony hatao manokana:

| Email | Dika Ankapobeny | Dika FitSite |
|-------|----------------|-----------------|
| Tongasoa | "Vonona ny tranonkalanao vaovao" | "Velona ny tranonkalan'ny studio fanaovana fanatanjahan-tenanao" |
| Receipt fandoavam-bola | "Voaray ny fandoavam-bola" | "Voamarina ny fandoavam-bola subscription FitSite" |
| Hifarana ny trial | "Hifarana tsy ho ela ny trial-nao" | "Hifarana afaka 3 andro ny trial FitSite-nao -- tazomy ho velona ny tranonkalan'ny studio-nao" |

### Invoices {#invoices}

Ataovy manokana ny template invoice miaraka amin'ny:

- Ny logo FitSite-nao sy ny lokon'ny marikao
- Ny antsipirian'ny orinasanao
- Anaran'ny vokatra manokana ho an'ny fanatanjahan-tena (fa tsy ID plan ankapobeny)

## Ny Tranonkala Atrehin'ny Mpanjifa {#the-customer-facing-site}

Mila tranonkala marketing mivarotra ilay sehatra ny domain fototrao (`fitsite.com`). Misaraka amin'ny admin tambajotra Ultimate Multisite izany -- izy no endrika ampahibemaso amin'ny orinasanao.

Pejy lehibe:

- **Pejy fandraisana**: Tolotra sanda mazava ho an'ny orinasa fanatanjahan-tena
- **Endri-javatra**: Izay ataon'ny FitSite, amin'ny teny fanatanjahan-tena
- **Vidiny**: Ny plan telo anananao miaraka amin'ny fampitahana endri-javatra manokana amin'ny sehatra
- **Ohatra**: Asehoy ireo tranonkala naorina teo amin'ilay sehatra
- **Hisoratra anarana**: Rohy mankany amin'ny form checkout-nao

:::tip Afaka ny Ho Tranonkala ao amin'ny Tambajotra ny Tranonkala Marketing-nao
Mamoròna ny tranonkala marketing-nao ho tranonkala iray ao anatin'ny tambajotranao manokana. Izany dia mamela anao hitantana azy avy amin'ilay Dashboard iray ihany ary mampiseho ny fahaizan'ny sehatrao manokana.
:::

## Domain Manokana ho an'ny Mpanjifa {#custom-domain-for-customers}

Ho an'ny mpanjifa ao amin'ny plan izay ahitana domain manokana, soraty mazava ny dingana:

1. Manoratra na mamindra ny domain-ny any amin'ny registrar ny mpanjifa
2. Manavao DNS ny mpanjifa mba hanondro any amin'ny sehatrao (omeo ny records marina)
3. Ultimate Multisite no mitantana ny domain mapping sy SSL

Mamoròna lahatsoratra fanampiana na fidirana knowledge base manokana ho an'ity dingana ity, nosoratana ho an'ny tompon'ny studio fanaovana fanatanjahan-tena tsy teknika.

## Ny Tambajotra FitSite Hatreto {#the-fitsite-network-so-far}

```
Tambajotra FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (voaamboatra + nasiana marika)
├── Domain an'ny Sehatra (fitsite.com + wildcard SSL)
├── Template Tranonkala (Studio Essential, Gym Pro, Fitness Chain)
├── Vokatra (Starter, Growth, Pro + Order Bumps)
├── Fikorianan'ny Checkout (manokana amin'ny sehatra, voasedra)
├── Marika
│   ├── Pejy login manokana
│   ├── Dashboard admin misy marika
│   ├── Email-n'ny rafitra manokana amin'ny sehatra
│   ├── Invoices misy marika
│   └── Tranonkala marketing ao amin'ny fitsite.com
└── Vonona ho an'ny fikorianan'ny onboarding (lesona manaraka)
```

## Izay Naorintsika Tamin'ity Lesona Ity {#what-we-built-this-lesson}

- **Domain an'ny sehatra sy DNS** voaamboatra ho an'ny traikefa misy marika
- **Admin white-labeled** miaraka amin'ny marika FitSite manerana azy
- **Fifandraisana natao manokana** -- email, invoices, ary fampandrenesana rehetra mifanaraka amin'ny marika
- **Tranonkala marketing** izay mivarotra FitSite amin'ny tompon'ny studio fanaovana fanatanjahan-tena
- **Antontan-taratasy domain manokana** ho an'ny mpanjifa maniry ny domain-ny manokana

---

**Manaraka:** [Lesona 8: Onboarding ny Mpanjifa](lesson-8-onboarding) -- hamolavola ny traikefa izay manova ny fisoratana anarana vaovao ho mpanjifa mavitrika sy faly isika.
