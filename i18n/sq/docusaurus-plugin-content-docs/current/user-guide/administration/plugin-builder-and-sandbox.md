---
title: Ndërtues i Përgjigjetës dhe Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Ndërtuesi dhe Sandbox i Pluginit

Gratis AI Agent v1.5.0 prezanton **Sistemin e Ndërtuesit dhe Sandbox-it të Pluginit**, që lejon asistentin AI të krijojë, aktivizojë dhe menaxhojë pluginet WordPress në rrjetin tuaj — gjithçka përmes një mjedisi i sigurt dhe i izoluar sandbox.

## Përmbledhje {#overview}

Ndërtuesi i Pluginit lejon asistentin AI të shkruaj pluginet WordPress të personalizuara në përgjigje ndaj kërkesave natyrale gjuhësore. Pluginet e krijuara vlerësohen, ruhen dhe aktivizohen brenda një liri sandbox para se të ndikojnë ndonjëherë në funksionalitetin e faqes live.

Kuse raste përdorimi si:

- Krijimin e pluginëve utilit të lehtë pa angazhimin e zhvilluesve.
- Prototipimi i veçorimeve që kërkojnë hook-e WordPress ose custom post types.
- Krijimin e skripteve automatizimi me kohë të shkurtër për operacione në masë.

## Krijimi i Pluginit përmes AI {#generating-a-plugin-via-ai}

Për të krijuar një plugin, hapni ndërfaqin e bisedës Gratis AI Agent dhe përshkruani se çfarë keni nevojë. Për shembull:

> "Krijoni një plugin që shton një njoftim custom admin në dashboard."

AI do të:

1. Prodhojë kod PHP të pluginit duke përdorur gjenerimin e strukturës së kodit.
2. Vlerësojë daljen për gabime sintakse dhe modele të pa sigurta.
3. Ruajë pluginin e krijuar në magazinën sandbox.
4. Kthej një konfirmim me slug-un e pluginit dhe një butonin **Aktivizo në Sandbox**.

Ju mund ta përmirësoni rezultatin duke vazhduar në të njëjtën lloj bisede para se të aktivizoni.

## Aktivizimi i Sandbox-it {#sandbox-activation}

Aktivizimi i një pluginit të krijuar në sandbox është i veçantë nga aktivizimi i tij në rrjetin live. Sandbox-i:

- Ekzekuton pluginin në një mjedis WordPress të izoluar (wp-env).
- Përpunon çdo gabim, paralajmërim ose konflikt hook-esh PHP.
- Raportohet rezultati i aktivizimit kthesën në ndërfaqen e bisedës.

Për të aktivizuar një plugin në sandbox, klikoni butonin **Aktivizo në Sandbox** në përgjigjen e AI chat-it, ose përdorni komandën slash:

```
/activate-plugin <plugin-slug>
```

Mesazhi i statusi konfirmoj nëse aktivizimi ka sqarulluar apo dështuar. Në rast dështimi, logu i gabimeve shfaqet në thread-in e bisedës.

## Menaxhimi i Pluginëve të Generuar {#managing-generated-plugins}

Pluginët e generuar listojnë në **Gratis AI Agent → Plugin Builder → Manage Plugins**. Nga ky ekran mund të:

| Veprimi | Përshkrimi |
|---|---|
| **View source** | Kontrollo kodi të plotë të pluginit PHP. |
| **Re-activate in sandbox** | Rilanzoj kontrollin e aktivizimit në sandbox. |
| **Install on network** | Vendos (deploy) pluginin në rrjetin live (kërkon konfirmim manual). |
| **Update** | Jep një version të ri përmes AI-së, duke zëvendësuar kodin ekzistues. |
| **Delete** | Heq pluginin nga loja sandbox. E deaktivoi atë nga të gjitha faqet. |

:::warning
**Install on network** vendos pluginin e generuar në rrjetin live WordPress-in tuaj multisite. Kontrollo kodin e pluginit para se të vazhdoni. Gratis AI Agent do kërkoj konfirmim para se të përfundojë instalimin live.
:::

## Instalimi i një Plugini të Generuar në Rrjet {#installing-a-generated-plugin-on-the-network}

Kur jeni të kënaqur me një plugin në sandbox, mund ta instaloni në rrjetin live:

1. Shkoni te **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klikoni **Install on Network** pranë pluginit që dëshironi të vendosni (deployoni).
3. Konfirmojeni dialogun. Pluginit instalohet në `wp-content/plugins/` dhe aktivizohet në rrjet.

Alternativ, përdorni komandën slash në interfejsin e bisedës:

```
/install-plugin <plugin-slug>
```

## Përditësime të Pluginëve {#plugin-updates}

Për të përditësuar një plugin të generuar, përshkruani ndryshimin asistentit AI në një bisedë të re:

> "Përditësoj pluginin dashboard-notice që të shfaqet vetëm njoftimin për administratorët."

AI-ja gjeneron një version të ri, i cili shfaqet në sandbox bashkë me versionin aktual. Ju kontrolloni diff-in dhe konfirmojeni para se të aplikohet përditësimi.

## Integrimi me HookScanner {#hookscanner-integration}

Plugin Builder përdorim një **HookScanner** të integruar për të analizuar hook-et dhe filter-t e regjistruar nga çdo plugin i gjeneruar. Rezultatet e HookScanner shfaqen në përgjigjen e bisedës dhe përfshijnë:

- Action hooks të regjistruar (`add_action` thirrje).
- Filter hooks të regjistruar (`add_filter` thirrje).
- Çdo hook i gjetur në varësinë e plugin-eve (duke shkollitur direktori `vendor/` dhe `node_modules/`).

Kjo ju ndihmon të kuptoni se si vepron një plugin para se ta aktivizoni.

## Konsideratat e Sigurisë {#security-considerations}

- Plugin-et e gjeneruara ruhen veçmas nga plugin-et të instaluara manualisht dhe nuk janë të aksesueshme përmes ekranit standard të menaxhimit të plugin-eve WordPress derisa i instaloni eksplisit në rrjet.
- Sandbox-i përdor vlerimin e rrugëve (path validation) për të parandaluar kalimin në direktori kur shkruhen skedarët e plugin-eve.
- Plugin-et me thirrje funksione të rrezikshme (p.sh., `eval`, `exec`, `system`) kryhen vlerifikim dhe nuk do të aktivizohen.
