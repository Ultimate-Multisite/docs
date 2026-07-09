---
title: Administrering av system-e-poster
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# Administrere system-e-poster {#managing-system-emails}

Ultimate Multisite sender ulike system-e-poster for hendelser som registreringsbekreftelser, betalingskvitteringer og medlemskapsendringer. Du kan tilpasse disse e-postmalene slik at de matcher merkevaren din.

## Vise system-e-poster {#viewing-system-emails}

Gå til **Ultimate Multisite → Settings** og klikk på fanen **Emails** for å se e-postrelaterte innstillinger.

![Settings - fanen Emails](/img/admin/settings-emails.png)

Derfra kan du gå til siden **System Emails** for å se alle e-postmaler.

![Liste over System Emails](/img/admin/system-emails-list.png)

Du kan også redigere individuelle e-postmaler med redigeringsverktøyet for system-e-poster:

![Redigeringsverktøy for system-e-post](/img/admin/system-email-editor.png)

## Importere nye e-postmaler {#importing-new-email-templates}

Nye Ultimate Multisite-versjoner og tilleggsmoduler kan registrere nye e-postmaler. For å unngå konflikter legges ikke nye maler til automatisk — du må importere dem manuelt.

Slik importerer du nye e-postmaler:

1. Gå til siden **System Emails**
2. Klikk på knappen **Reset & Import** øverst på siden
3. Slå på alternativet **Import Emails** for å se tilgjengelige maler
4. Velg malene du vil importere, og bekreft

## Tilbakestille e-postmaler {#resetting-email-templates}

Hvis du har tilpasset en e-postmal og vil gå tilbake til standardinnholdet, har du to alternativer:

1. **Slett og importer på nytt** — Slett system-e-posten og importer den på nytt (dette sletter sendemetrikker)
2. **Tilbakestill via verktøyet** — Bruk verktøyet **Reset & Import**, slå på alternativet **Reset**, og velg e-postene du vil tilbakestille

Alternativet Reset foretrekkes, siden det bevarer sendemetrikker og andre metadata samtidig som standardinnholdet gjenopprettes.
