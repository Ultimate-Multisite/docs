---
title: 'Mësimi 3: Konfigurimi i rrjetit tuaj'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Mësimi 3: Konfigurimi i rrjetit tuaj

Koha për të ndërtuar. Në këtë mësim do të instaloni Ultimate Multisite dhe do të konfiguroni bazën e rrjetit FitSite. Çdo vendim këtu merret duke pasur parasysh nishen e fitness-it.

## Ku e lamë

Zgjodhëm studiot e fitness-it si nishen tonë dhe validuam mundësinë. Tani e kthejmë atë ide në një platformë funksionale.

## Zgjedhja e hosting-ut tuaj

Zgjedhja e hosting-ut ka më shumë rëndësi për një platformë nishe sesa për një faqe të vetme web. Ju nuk po hostoni një faqe -- po hostoni një rrjet që do të rritet në dhjetëra ose qindra faqe.

### Çfarë të kërkoni

- **Mbështetje për WordPress Multisite**: Jo të gjithë host-et e menaxhojnë mirë multisite
- **Wildcard SSL**: Thelbësore për rrjete të bazuara në nëndomene
- **Burime të shkallëzueshme**: Ju duhet hapësirë për t’u rritur pa migruar
- **Integrim me Ultimate Multisite**: Hartëzimi i automatizuar i domeneve dhe SSL kursen përpjekje të konsiderueshme operacionale

### Qasja e rekomanduar

Zgjidhni një host nga lista e [Ofruesve të përputhshëm](/user-guide/host-integrations/closte). Këta janë testuar me Ultimate Multisite dhe ofrojnë integrimet që ju duhen për hartëzimin e domeneve dhe automatizimin e SSL.

Për FitSite, do të përdorim një konfigurim me nëndomen. Kjo do të thotë se faqet e klientëve fillimisht do të shfaqen si `studioname.fitsite.com` përpara se, sipas dëshirës, të hartëzojnë domain-in e tyre.

## Instalimi i WordPress Multisite

Nëse nuk keni tashmë një instalim WordPress Multisite:

1. Instaloni WordPress te ofruesi juaj i hosting-ut
2. Ndiqni udhëzuesin [Si të instaloni WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Zgjidhni konfigurimin **me nëndomen** kur t’ju kërkohet

:::tip Pse nëndomenet?
Nëndomenet i japin secilës faqe klienti adresën e vet të veçantë (`studio.fitsite.com`) në vend të një shtegu (`fitsite.com/studio`). Kjo është më profesionale për klientët tuaj dhe shmang konfliktet e permalink-eve. Shihni [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) për një krahasim të detajuar.
:::

## Instalimi i Ultimate Multisite

Ndiqni udhëzuesin [Instalimi i Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) për të:

1. Ngarkuar dhe aktivizuar plugin-in në të gjithë rrjetin
2. Ekzekutuar [Asistentin e konfigurimit](/user-guide/getting-started/multisite-setup-wizard)

Gjatë asistentit të konfigurimit, mbani parasysh nishen FitSite:

- **Monedha**: Vendoseni te monedha që përdorin klientët tuaj të studiove të fitness-it
- **Emri i kompanisë**: "FitSite" (ose emri i markës që keni zgjedhur)
- **Logoja e kompanisë**: Ngarkoni logon e markës suaj -- kjo shfaqet në fatura dhe email-e

## Konfigurimi për nishen e fitness-it

Me Ultimate Multisite të instaluar, bëni këto zgjedhje konfigurimi specifike për nishen:

### Cilësimet e përgjithshme

Navigoni te **Ultimate Multisite > Settings** dhe konfiguroni:

- **Emri i faqes**: FitSite
- **Roli i parazgjedhur**: Administrator -- pronarëve të studiove të fitness-it u duhet kontroll i plotë mbi përmbajtjen e faqes së tyre
- **Regjistrimi**: Aktivizoni regjistrimin e përdoruesve që pronarët e studiove të mund të regjistrohen vetë

### Konfigurimi i email-it

Email-et e sistemit tuaj duhet të flasin gjuhën e nishes suaj. Navigoni te **Ultimate Multisite > Settings > Emails** dhe personalizoni:

- Zëvendësoni gjuhën gjenerike "faqja juaj e re" me mesazhe specifike për fitness
- Shembull subjekti mirëseardhjeje: "Faqja web e studios suaj të fitness-it është gati"
- Shembull trupi mirëseardhjeje: Referojuni studios së tyre, klasave dhe nisjes së punës me faqen e tyre të fitness-it

Do t’i përmirësojmë më tej këto në Mësimin 8 (Onboarding i klientëve), por vendosja e tonit tani siguron që edhe regjistrimet e hershme testuese të ndihen specifike për nishen.

### Konfigurimi i domain-it

Nëse përdorni një ofrues hosting-u të përputhshëm, konfiguroni tani hartëzimin e domain-it:

1. Navigoni te **Ultimate Multisite > Settings > Domain Mapping**
2. Ndiqni udhëzuesin e integrimit për host-in tuaj specifik
3. Testoni që nënfaqet e reja të marrin SSL automatikisht

Kjo siguron që kur të fillojmë të krijojmë shabllone dhe faqe testimi në mësimin tjetër, gjithçka të funksionojë nga fillimi në fund.

## Rrjeti FitSite deri tani

Në fund të këtij mësimi, ja çfarë keni:

```
Rrjeti FitSite
├── WordPress Multisite (modalitet me nëndomen)
├── Ultimate Multisite (i instaluar dhe i konfiguruar)
├── Hosting me wildcard SSL
├── Hartëzimi i domain-it i konfiguruar
├── Shabllone email-i specifike për nishen (fillestare)
└── Gati për shabllone faqesh (mësimi tjetër)
```

## Çfarë ndërtuam në këtë mësim

- **Një instalim funksional WordPress Multisite** në modalitet me nëndomen
- **Ultimate Multisite i instaluar** dhe i konfiguruar me branding FitSite
- **Hosting dhe SSL** të konfiguruara për një rrjet në rritje
- **Hartëzimi i domain-it** i konfiguruar për ofruesin tuaj të hosting-ut
- **Toni i email-eve specifik për nishen** i vendosur që nga dita e parë

---

**Tjetër:** [Mësimi 4: Ndërtimi i shablloneve të nishes](lesson-4-templates) -- krijojmë shabllone faqesh që pronarët e studiove të fitness-it do të duan vërtet t’i përdorin.
