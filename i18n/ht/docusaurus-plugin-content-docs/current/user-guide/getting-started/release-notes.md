---
title: Notis Lansman
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notis Lansman

## Vèsyon 2.13.0 — Lansman nan 2026-06-05

- Nouvo: Ajouté support pour les tenants souverains (sovereign-tenant) pour le compte client, le paiement (checkout), la facturation (billing), le site, la facture (invoice), le changement de modèle (template switching) et le mappage de domaine afin que les réseaux des tenants puissent renvoyer les clients vers le site principal pour les actions gérées.
- Nouvo: Ajouté des vérifications de renouvellement de crédentiels pour les abonnements récurrents afin que les gateways puissent désactiver le renouvellement automatique lorsque l'accord de facturation, l'abonnement ou le jeton de coffre (vault token) enregistré est manquant.
- Nouvo: Ajouté la publication en boucle de retour (loopback publishing) vérifiée par HMAC pour la création de sites en attente afin de rendre le provisionnement du paiement vers le site plus fiable sur les hôtes où les tâches en arrière-plan sont retardées.
- Nouvo: Ajouté des points d'extension développeur pour les URL SSO, les domaines de base du formulaire de paiement (checkout-form base domains) et la création automatique d'enregistrements de domaine.
- Correction : Le SSO est maintenant plus fiable à travers les domaines mappés, les visites via un broker anonyme, la déconnexion et les conflits de dépendances entre plugins.
- Correction : La création de sites en attente récupère maintenant des drapeaux de publication obsolètes (stale publish flags) et évite de laisser les clients bloqués sur l'écran de création de site.
- Correction : Les enregistrements de domaine ne sont plus créés pour les domaines de base du formulaire de paiement partagés, et les tâches en arrière-plan du fournisseur d'hôte inutilisées sont ignorées lorsqu'aucune intégration n'est active.
- Correction : Les cas limites (edge cases) comme le paiement (checkout), l'adresse de facturation, la réinitialisation de mot de passe, la vérification par e-mail, le changement de modèle, les visites guidées (tours) et le tableau de bord client ne bloquent plus les flux normaux des clients.
- Correction : Les e-mails de diffusion (broadcast emails) maintiennent désormais la confidentialité des destinataires tout en évitant les erreurs fatales SMTP/plugin lorsque les listes de destinataires ou les transports d'e-mail échouent.
- Correction : Les cas limites concernant le renouvellement des abonnements, l'affichage de l'expiration et la collecte de paiement évitent maintenant les expirations immédiates, les plantages ou les paiements requis manqués.
- Amélioré : La compatibilité avec WordPress est testée jusqu'à la version 7.0, les actifs Vue de production sont reconstruits à partir des sources npm, et la couverture de bout en bout Cypress teste maintenant davantage les flux de paiement (checkout), de configuration (setup), SSO et de passerelle (gateway).

## Versyon 2.12.0 — Lèvèli sou 2026-05-15

- Nouvo: Ajoute Hostinger (hPanel) kòm yon kontwole ki sipòte ak entegrasyon map nan domèn yo.
- Nouvo: Site Exporter kounye a jere bonba impokte rezo pou fè restorasyon sit la pi fasil sou tout rezo a.
- Rectif: Imèl BCC broadcast yo kounye a itilize yon en-tèt ki pa revele moun ki resevwa mesaj yo pou anpeche montre adrès reseptan yo.
- Rectif: Dat ekspirasyon manm la pa gen pwoblèm lè ou kayete li ak yon valè ki pa dat.
- Rectif: Mete souvan (membership) Stripe kounye a byen netwaye diskonpòt yo san fè apèl API deleteDiscount ki deja dekouvri.
- Rectif: Redireksyon SSO sou sit ki map nan domèn yo kounye a limite pou anpeche sik redireksyon ki pa fini.
- Rectif: Chwazi imaj nan wizard setup la kounye a byen mete souvan done ki anba li.
- Rectif: Site Exporter CLI kounye a kenbe chwazi sit rezo default ki kòrèk.
- Amelyore: Nou retire wp-cli ki te monte ak plugin la, sa ki fè gwosè plugin la pi piti.

## Versyon 2.11.0 — Lèvèli sou 2026-05-11

- Nouvo: Site exports yo kounye a monte yon `index.php` ki ka kòmanse tèt li, sa ki pèmèt ou mete ZIP la sou yon nou host san ou pa bezwen mete plugin separé.
- Nouvo: Export rezo la pèmèt administrate yo ekspoze tout sous-sit yo nan yon sèl archive anba paj Site Export admin la.
- Nouvo: Chwazi plan Site Templates kounye a fòse pa yon chèin geri (fallback chain), sa ki limite disponiblite template yo pou limit plan yo byen.
- Nouvo: Edit bouton checkout la bay avèt lè ou ajoute yon pwodwi san okenn chot ki obligatwa pa configure.
- Nouvo: Tab konfigirasyon Import/Export la kounye a dekri byen kijan li fonksyone epi li gen yon lyen dirèk nan Site Export tool la.

## Versyon 2.10.0 — Lèvèli sou 2026-05-05

- Nouvo: Wizard de configuration guidé PayPal pou antre kredansyèl manman ak flag OAuth pou yon konfigirasyon gateway ki senp.
- Nouvo: Panèl kliyan chanje template redizain avè card **current-template**, grid ki pèmanan, epi bouton **Reset current template**.
- Rekir: Chanje template pa fè UI anpeche sou AJAX failure ankò.
- Rekir: Etats pèmisyon chanje template yo sekirize kont aksè pa autorize.
- Rekir: Input override sit la valide anvan yo kayte.
- Rekir: Demann adrès fakturi a montre kounye a lè adrès la vid.
- Rekir: Notis de deprecation PHP 8.1 pou null-to-string rezoudi.
- Rekir: Lazy-loading sit la kounye a vini anvan init hook pou evite pwoblèm moman (timing issues).
- Rekir: Path SSO filtre yo respekte nan tout flwa login.
- Rekir: Opsyon identite sit vid yo rete pèserbe lè w kayte.

## Vèsyon 2.9.0 — Lwete sou 2026-04-30

- Nouvo: Eksport ak enpòt yon sèl sit ajoute anba **Tools > Export & Import**.
- Rekir: Fich ZIP eksport yo kounye a sèvi atravè yon endpoint telechaje ki valide.
- Rekir: Ris SQL injection ak pwoblèm kesyon nan opsyon eksport/enpòt ki nan atansyon rekeyi rezoudi.
- Rekir: Sit ki nan atansyon pa pibliye lè admin ap verifi imèl kliyan manman.
- Rekir: Rekò pending_site ki rete orpaye yo netwaye lè mank membwa.
- Rekir: Padding navigasyon settings ak ankor rechèch yo rekeyi rezoudi.
- Rekir: Sit ki nan atansyon kounye a montre premye nan vyèw All Sites la.
- Rekir: User-Agent header pwovizyon screenshot (mShots) ajoute pou evite erè 403.
- Rekir: Dependans sikil cron enpòt rezoudi.
- Amelyore: ZipArchive kounye a itilize anplis de Alchemy/Zippy pou konpatibilite pi bon.

## Vèsyon 2.8.0 — Lwete sou 2026-04-29

- Nouvo: Enable Jumper toggle ajoute nan konfigirasyon Other Options settings UI la.
- Nouvo: Kolon Status ajoute pou tables list form checkout la.
- Nouvo: Addon sunrise file loader pou custom MU-plugin sunrise extensions yo.
- Amelyore: Retire set pou rapò erè error reporting de page settings la.
- Correction: Site card paj "Thank-you" — imaj la kounye a limite epi link yo estil byen.
- Correction: Screenshot provider chanje de thum.io a WordPress.com mShots.
- Correction: Enable Registration ak Default Role kounye a mete bon default sou yon nouvo enstalasyon.
- Correction: `get_site_url()` pa retounen anpil lè domèn gen pòt (port).
- Correction: Kopi dos media yo kounye a kopi byen lè set `copy_media` la san valè.
- Correction: Object cache invalide byen apre sitemeta ekri apre network-activate.
- Correction: Domèn custom otomatikman pwove tankou primè sou verifikasyon DNS pou domèn ki gen 3 pati.
- Correction: Membership ki nan eta "Pending" sispann lè paiement ki expire la netwaye.
- Correction: Checker fòs pwomèt (Password strength checker) retounen apre prompt login anpil la desisye.
- Correction: Infinite page reload pa rete sou paj "Thank-you" lè site a deja kreye.
- Correction: Opsyon registration WP core a senkronize kounye a apre aktivasyon plugin ak kayt settings yo.
- Correction: Null expiration guard ajoute nan `calculate_expiration` pou konpatibilite PHP 8.4.
- Correction: Bloye sign-up ki duplike lè kliyan an deja gen yon membership aktif.
- Correction: Kontwòl null ajoute pou `date_expiration` nan checkout la.
- Correction: Provisioning site a fòte pi byen — limitasyon, inferans membership, pwove domèn.
- Correction: Etikèt pre-install check a korektif an "NOT Activated" lè check la échoue.
- Correction: Domèn checkout itilize pou URL verifikasyon imèl yo.
- Correction: Auto-login apre checkout lè gen okenn chat pwòp (password field).
- Correction: Membership gratis yo pa expire ankò — tretman tankou yon bagay ki dire tout tan (lifetime).

- Correction : L'étape de vérification d'email bloque la publication du site jusqu'à ce que le client ait vérifié son email.
- Correction : Le chemin de base de l'endpoint API SES v2 et la route d'identité ont été corrigés.
- Correction : Le hook `wu_inline_login_error` est maintenant émis dans le bloc de capture avant soumission.
