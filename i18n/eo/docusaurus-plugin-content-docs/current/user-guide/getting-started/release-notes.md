---
title: Elirenotoj
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Versi 2.13.0 — Elire la 5-a de Junon 2026

- Nova: Aggiunti suporto per tenant sovrèni (sovereign-tenant) por la conta del cliente, il checkout, la fatturazione, il sito, lo scambio di template e la mappatura dei domini, così le reti dei tenant possono indirizzare i clienti indietro al sito principale per azioni gestite.
- Nova: Aggiunti controlli di credenziali per il rinnovo delle abbonamenti ricorrenti, in modo che i gateway possano disabilitare il rinnovo automatico quando manca un accordo di fatturazione salvato, un abbonamento o un token vault.
- Nova: Aggiunto publishing loopback verificato con HMAC per la creazione di siti in sospeso, per rendere più affidabile l'approvvigionamento del sito durante i ritardi dei lavori in background sugli host dove questi sono in ritardo.
- Nova: Aggiunti punti di estensione per URL SSO, domini base del modulo di checkout e creazione automatica di record di dominio.
- Correzione: L'SSO è più affidabile tra i domini mappati, le visite anonime al broker, la disconnessione (logout) e i conflitti di dipendenza tra plugin.
- Correzione: La creazione di siti in sospeso ora si riprende da flag di pubblicazione obsoleti ed evita di lasciare gli utenti bloccati sullo schermo di creazione del sito.
- Correzione: I record di dominio non vengono più creati per i domini base del modulo di checkout condivisi, e i lavori in background inutilizzati dei provider host vengono saltati quando non c'è un'integrazione attiva.
- Correzione: Casi limite come il checkout, l'indirizzo di fatturazione, la reimpostazione della password, la verifica dell'email, lo scambio di template, i tour e il dashboard del cliente non bloccano più i flussi normali degli utenti.
- Correzione: Le email broadcast ora mantengono gli destinatari privati evitando errori fatali SMTP/plugin quando le liste dei destinatari o i trasporti della posta falliscono.
- Correzione: I casi limite relativi ai rinnovi delle abbonamenti, alla visualizzazione delle scadenze e alla raccolta dei pagamenti evitano ora esaurimenti immediati, crash o mancati pagamenti richiesti.
- Migliorato: La compatibilità con WordPress è testata fino alla versione 7.0, gli asset Vue di produzione vengono ricostruiti dalle fonti npm e la copertura end-to-end di Cypress esegue ora più flussi di checkout, setup, SSO e gateway.

## Versio 2.12.0 — Liberata la 15-v-05-2026 {#version-2130--released-on-2026-06-05}

- Nova: Hostinger (hPanel) agitat kiel suportita hosto providanto, kun akompanita domeno mappado integracioj
- Nova: Site Exporter nun maneble nunc import bundles de retojn por simpligita restoracion de site-monda
- Fix: BCC broadcast emailak nun uzas header "undisclosed-recipients" por prevenadon eksponi adres recipient
- Fix: Data de expirado de membraj ne estas nun korupita, kiam saveas kun ne data valoro
- Fix: Stripe membrajo aktualizoj nunc klarig kore diskonto sen uzado de la deprecata API deleteDiscount
- Fix: SSO redirektoj sur domeno mappitaj site nunc limigita por preveni infinitajn redirektaj loop'a
- Fix: Selektado de imago en wizard de setup nun aktualizas korrekt la bazan de datum data model
- Fix: Site Exporter CLI nun konservas la korrekta default selekto de retojn sito

## Versio 2.11.0 — Liberata la 11-v-05-2026 {#version-2120--released-on-2026-05-15}

- Nova: Site exportoj nunc bundles self-bootan `index.php`, tiel ZIP posible instali sur nova hosto sen aparte plugin instalo
- Nova: Retoj exportas permetas administratorojn exporti ĉiuj subsitejn en unu arkivo de la adminpaja Site Export
- Nova: Permito la togglo Plan Site Templates nunc estas forta per fallback chain, kore limigante disponibilitan templaton por limitajn planojn
- Nova: Redaktoro de formuloj checkout aviras, kiam produkto aldonas sen konfigura requira kampo
- Nova: Tabo de ŝanĝoj Import/Export nun klarigas sian rangon kaj linkas direkte al la Site Export tool

## Versio 2.10.0 — Liberata la 05-v-05-2026 {#version-2110--released-on-2026-05-11}

- Nova: PayPal gvidita setup wizard por manula kredentialen inputo kun OAuth flag gate por konfiguraciu de gateway senplu.
- Nova: Template switch pane kliento redizajnu per la card current-template, grid persistanta kaj butono **Reset current template**.
- Fix: Template switching ne plu blokas la UI sur AJAX ne funkcias.
- Fix: Permesilaj statoj de template switch sekurita kontra neautoriza capa.
- Fix: Inputo override de sita validita antes de salvado.
- Fix: Prompt de fakturaj adreso nun estas montrita, kiam adreso estas vakto.
- Fix: PHP 8.1 deprecation notices null-al string resolvita.
- Fix: Current lazy-loaded antaŭ init hook por preveni tempo problemo.
- Fix: Filtra SSO parto respektita sur ĉiuj login flujos.
- Fix: Vakva sita identeco opcio konservita pri salvado.

## Versio 2.9.0 — Eliretiĝita en 2026-04-30 {#version-2100--released-on-2026-05-05}

- Nova: Exportado kaj importado de unua sita aldatita sub **Tools > Export & Import**.
- Fix: ZIP filoj exporti nun servita per autentikita download endpointo.
- Fix: Risko injekcio SQL kaj problemo kun kviero en pending export/import kviero korektita.
- Fix: Pending sita ne eliretiĝas, kiam admin manula verifikas kreditan elektronikon.
- Fix: Orphaned pending_site rekordoj limigita kiam membraco mankas.
- Fix: Padding de navigado de ŝanĝi ŝanĝi kaj ankra navigado de serĉo korektita.
- Fix: Pending sitoj nun montrit la unue en la All Sites vido.
- Fix: Screenshot providanto (mShots) User-Agent header aldatita por preveni 403 erarojn.
- Fix: Import cron jadwal ciro dependeco resolvita.
- Fix: Tour IDs normaligita al underscore en user settings chajnoj.
- Plibritita: ZipArchive nun uzita en loko de Alchemy/Zippy por pli bona kompatibiliteto.

## Versio 2.8.0 — Eliretiĝita en 2026-04-29 {#version-290--released-on-2026-04-30}

- Nova: Aktive Jumper toggle ajoutata al UI de parametrat "Other Options".
- Nova: Kolonuma status shtu data list table de formoj checkout agdat.
- Nova: Aggiun file loader sunrise addon por ekstenzoj custom MU-plugin sunrise.
- Privalorata: Eliminita la parametro opt-in de raportado erorjil de la pagu de parametroj.
- Rectificata: Kartaj sita de la pagu "Thank-you" — imago estas kontraina kaj linkoj estas stilita ĝuste.
- Rectificata: Providanto de screenshot ŝanĝita de thum.io al WordPress.com mShots.
- Rectificata: Aktiva Registriĝo kaj Default Rolo nun setas ĝustajn defaultojn pri nova instalado.
- Rectificata: `get_site_url()` nun ne retornos vides, kiam domeno inkluzas porton.
- Rectificata: Klonado de media filoj nun kopas ĝuste, kiam parametro `copy_media` estis vida.
- Rectificata: Objekto cache estas invalidita ĝuste post network-activate sitemeta skribado.
- Rectificata: Domeno auto-promovita al primara sur DNS verifikado por 3-partaj domenoj.
- Rectificata: Pendentaj aĉetoj estas kancelita, kiam ekspirita pago estas limigita.
- Rectificata: Kontrolisto de forta laŭvorto de ŝlosilo rebound post dismisado de prompt de login in-line.
- Rectificata: Infinitaj pagaj reŝarĝoj estas ĉesitita sur la pagu "thank-you" kiam la sita estas déjà kreita.
- Rectificata: WP core registriĝo opcio sincronita pri plugin aktiva kaj parametroj savado.
- Rectificata: Null expiration guard ajutita en `calculate_expiration` por kompatibilitaj PHP 8.4.
- Rectificata: Duplikataj registrioj blokita, kiam la kliento déjà havas aktivan aĉetajn rizos.
- Rectificata: Null kontrolaj ajutita por `date_expiration` en checkouto.
- Rectificata: Provisionado de sita fortigita — limigoj, inferenco de aĉetoj, domeno promovado.
- Rectificata: Etiketo status pre-instalado ĝuste setita al NE Aktiva kiam kontrolado ne sukcesas.
- Rectificata: Domeno de checkoutu uzata por URL-oj de verifikado de e-mailoj.
- Rectificata: Auto-login post checkouto, kiam ne estas prezentita la kampio de ŝlosilo.
- Rectificata: Libera aĉetoj nun ne ekspiras — traktita kiel vivaj.

- Rekto: La verifikado de e-mail blokas la publikadon de la sita ĝis kiam la kliento konfirmo sian e-mailon.
- Rekto: La bazaj kurso kaj identeco de la SES v2 API endpoint estis korektitaj.
- Rekto: La hook `wu_inline_login_error` emitita en la blokado de pre-submiti estis korektita.
