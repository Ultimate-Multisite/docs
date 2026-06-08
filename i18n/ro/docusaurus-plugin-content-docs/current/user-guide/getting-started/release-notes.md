---
title: Note de lansare
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Note de Lansare

## Versiunea 2.12.0 — Lansată pe 15-05-2026

- Nou: Am adăugat Hostinger (hPanel) ca furnizor de găzduire suportat, cu integrarea de mapare a domeniilor.
- Nou: Site Exporter gestionează acum bundle-uri de import pentru rețea, permițând restaurarea site-urilor la nivel de rețea în mod optimizat.
- Fix: Email-urile de broadcast BCC folosesc acum un antet `undisclosed-recipients` pentru a preveni expunerea adreselor destinatarilor.
- Fix: Data de expirare a membretății nu mai este coruptă când se salvează cu o valoare care nu este o dată.
- Fix: Actualizările de membretății Stripe elimină acum corect reducerile fără a apela API-ul învechit `deleteDiscount`.
- Fix: Redirecționările SSO pe site-uri mapate la domeniul pot fi acum limitate pentru a preveni buclele infinite de redirecționare.
- Fix: Selectarea imaginii în wizard-ul de configurare actualizează acum corect modelul de date subiacent.
- Fix: CLI-ul Site Exporter păstrează acum corect selecția site-ului implicit la nivel de rețea.
- Îmbunătățit: Am eliminat `wp-cli` în pachetul plugin-ului, reducând dimensiunea plugin-ului.

## Versiunea 2.11.0 — Lansată pe 11-05-2026

- Nou: Exporturile de site includ acum un `index.php` auto-boot, astfel încât fișierul ZIP să poată fi instalat pe o găzduire nouă fără a necesita instalarea unui plugin separat.
- Nou: Exportul de rețea permite administratorilor să exporteze toate subsite-urile într-un singur arhivă, direct de pe pagina de administrare a Site Export.
- Nou: Comutarea planului de Site Templates este acum impusă printr-o lanț de fallback, restricționând corect disponibilitatea template-urilor în funcție de limitele planului.
- Nou: Editorul de formulare de checkout avertizează când se adaugă un produs fără ca un câmp obligatoriu să fie configurat.
- Nou: Tab-ul de setări Import/Export descrie acum clar domeniul său și oferă un link direct către instrumentul Site Export.

## Versiunea 2.10.0 — Lansată pe 05-05-2026

- Nou: Wizard-ul de configurare ghidat pentru PayPal, pentru introducerea manuală a credențialelor, cu o poartă de semnalizare OAuth pentru o configurare fluidă a gateway-ului.
- Nou: Panoul clienților pentru comutarea template-urilor a fost reproiectat, având o cardă cu template-ul curent, o grilă persistentă și butonul **Reset current template**.
- Fix: Comutarea template-urilor nu mai blochează interfața utilizatorului (UI) în cazul unei eșecuri AJAX.
- Fix: Stările de permisiune pentru comutarea template-urilor sunt securizate împotriva accesului neautorizat.
- Fix: Input-urile de suprascriere a site-ului sunt validate înainte de salvare.
- Fix: Prompt-ul pentru adresa de facturare este afișat acum când adresa este goală.
- Fix: Notificările de deprecare pentru `null-to-string` în PHP 8.1 au fost rezolvate.
- Fix: `Currents` este încărcat în mod lazy înainte de hook-ul `init` pentru a preveni problemele de sincronizare.
- Fix: Calea SSO filtrată este respectată în toate fluxurile de autentificare.
- Fix: Opțiunile de identitate pentru site-urile goale sunt păstrate la salvare.

## Versiunea 2.9.0 — Lansată pe 30-04-2026

- Nou: Exportul și importul pentru un singur site au fost adăugați sub **Tools > Export & Import**.
- Fix: Fișierele ZIP de export sunt acum servite printr-un endpoint de descărcare autentificat.
- Fix: Riscul de injectare SQL și problemele de interogări în exporturile/importurile în așteptare au fost corectate.
- Fix: Site-ul în așteptare nu este publicat când administratorul verifică manual email-ul clientului.
- Fix: Înregistrările `pending_site` orfane sunt curățate când membretății lipsesc.
- Fix: Padding-ul navigării de setări și navigarea cu ancoră de căutare au fost corectate.
- Fix: Site-urile în așteptare sunt afișate acum primele în vizualizarea All Sites.
- Fix: Pentru furnizorul de capturi de ecran (mShots), s-a adăugat un antet User-Agent pentru a preveni erorile 403.
- Fix: Dependența circulară a programării cron-ului de import a fost rezolvată.
- Fix: ID-urile de tură sunt normalizate în subliniare în cheile de setări ale utilizatorului.
- Îmbunătățit: Acum se folosește `ZipArchive` în locul lui Alchemy/Zippy pentru o compatibilitate mai bună.

## Versiunea 2.8.0 — Lansată pe 29-04-2026

- Nou: Toggle-ul Enable Jumper a fost adăugat în interfața de setări Other Options.
- Nou: Coloana Status a fost adăugată în tabela de listă a formularelor de checkout.
- Nou: Loader-ul de fișiere sunrise Addon pentru extensii custom de tip MU-plugin sunrise.
- Îmbunătățit: Setarea opt-in pentru raportarea erorilor a fost eliminată de pe pagina de setări.
- Fix: Cardul site-ului de pe pagina de mulțumiri — imaginea este acum limitată și link-urile sunt stilizate corect.
- Fix: Furnizorul de capturi de ecran a fost schimbat de la thum.io la WordPress.com mShots.
- Fix: Enable Registration și Default Role setează acum valorile implicite corecte la instalare nouă.
- Fix: `get_site_url()` nu returnează mai mult nimic când domeniul include un port.
- Fix: Fișierele media clonate sunt acum copiate corect când setarea `copy_media` era goală.
- Fix: Cache-ul obiectelor este invalidat corect după scrierea sitemeta-ului `network-activate`.
- Fix: Domeniul personalizat este automat promovat la primar la verificarea DNS pentru domeniile cu 3 părți.
- Fix: Membrăția în așteptare este anulată când se curăță o plată expirată.
- Fix: Verificatorul de forță a parolei este reatashat după ce prompt-ul inline de login este închis.
- Fix: Reîncărcarea paginii infinite este oprită pe pagina de mulțumiri când site-ul a fost deja creat.
- Fix: Opțiunea de înregistrare WP core este sincronizată la activarea plugin-ului și la salvarea setărilor.
- Fix: Gardul de expirare `null` a fost adăugat în `calculate_expiration` pentru compatibilitatea cu PHP 8.4.
- Fix: Înregistrările duplicate de utilizatori sunt blocate când clientul are deja o membretăție activă.
- Fix: S-a adăugat o verificare `null` pentru `date_expiration` în checkout.
- Fix: Provisionarea site-ului este îmbunătățită — limitări, inferența membretății, promovarea domeniului.
- Fix: Eticheta de status a verificării pre-instalării este corectată în NOT Activated când verificarea eșuează.
- Fix: Domeniul de checkout este folosit pentru URL-urile de verificare a email-ului.
- Fix: Auto-login după checkout când nu există câmp pentru parolă.
- Fix: Abonamentele gratuite nu mai expiră — sunt tratate ca fiind de viață.
- Fix: Poarta de verificare a email-ului păstrează publicarea site-ului până când clientul își verifică email-ul.
- Fix: Calea de bază a endpoint-ului API SES v2 și ruta de identitate au fost corectate.
- Fix: Hook-ul `wu_inline_login_error` este emis în blocul catch pre-submit.
