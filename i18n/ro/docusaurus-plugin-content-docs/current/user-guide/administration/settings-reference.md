---
title: Referință setări
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referință setări {#settings-reference}

Această pagină urmărește setările care afectează administrarea de zi cu zi și modificările recente de comportament în Ultimate Multisite.

## Alte opțiuni {#other-options}

Zona **Alte opțiuni** apare sub **Ultimate Multisite > Settings > Login & Registration**.

| Setare | Descriere |
|---|---|
| **Enable Jumper** | Afișează instrumentul Jumper de navigare rapidă în zona de administrare. Folosiți-l pentru a sări direct la ecranele Ultimate Multisite, obiectele de rețea și destinațiile de administrare acceptate. Dezactivați-l dacă nu doriți ca această scurtătură să fie vizibilă. |

## Raportarea erorilor și telemetrie {#error-reporting-and-telemetry}

Setarea anterioară de opt-in pentru raportarea erorilor a fost eliminată din pagina de setări. Telemetria anonimă este dezactivată și nu există niciun comutator UI pentru a o activa.

Dacă întrețineți runbook-uri interne sau capturi de ecran pentru pagina de setări, eliminați referințele la vechiul câmp de opt-in pentru raportarea erorilor, astfel încât administratorii să nu caute o setare care nu mai este prezentă.

## Setări de import/export {#importexport-settings}

Fila de setări **Import/Export** descrie ce setări controlează și trimite direct la **Ultimate Multisite > Site Export** pentru arhive de site și rețea. Folosiți fila de setări pentru configurarea importului/exportului, folosiți **Tools > Export & Import** pentru fluxul de lucru de export/import pentru un singur site și folosiți instrumentul Site Export când aveți nevoie de o arhivă completă Network Export.

## Avertizare privind soldul Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Când addon-ul Domain Seller este conectat la HostAfrica, administratorii de rețea văd acum o avertizare care poate fi închisă privind soldul scăzut, atunci când soldul contului de reseller este prea mic pentru procesarea fiabilă a înregistrărilor sau reînnoirilor de domenii.

Tratați această notificare ca pe o avertizare operațională: alimentați soldul reseller HostAfrica înainte de a accepta mai multe înregistrări de domenii plătite, apoi reveniți la setările Domain Seller sau la ecranul de monitorizare a domeniilor pentru a confirma că înregistrările și reînnoirile pot continua normal.

## Setări pentru conectorii furnizorilor AI {#ai-provider-connector-settings}

Setările pentru conectorii furnizorilor AI expun acum doar pool-urile de conturi OAuth acceptate:

| Furnizor | Flux de configurare |
|---|---|
| **Anthropic Max** | Conectați unul sau mai multe conturi Anthropic Max cu butonul OAuth. Folosiți alternativa manuală OAuth când un browser sandboxed nu poate finaliza automat redirecționarea. |
| **OpenAI ChatGPT/Codex** | Conectați conturile ChatGPT prin același flux de lucru de pool OAuth. Operațiunile acceptate de conector pot folosi apeluri de instrumente ChatGPT Codex după ce contul este conectat. |
| **Google AI Pro** | Conectați conturile Google AI Pro prin OAuth, apoi reîmprospătați conectorul dacă lista de conturi nu se actualizează imediat. |

Cursor Pro nu mai este un furnizor acceptat. Eliminați capturile de ecran interne vechi, runbook-urile sau pașii de onboarding care menționează câmpuri de configurare sau căi de conector Cursor Pro.

Când adăugați sau eliminați conturi de furnizor, introduceți o adresă de e-mail validă pentru contul care este reîmprospătat sau șters și salvați setările furnizorului înainte de a testa operațiunile susținute de conector.
