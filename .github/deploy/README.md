# Déploiement o2switch / cPanel

Le workflow `deploy-on-production.yaml` déploie le contenu statique de `build/` sur cPanel après chaque fusion sur `main`.

Ajoutez ces **secrets Actions** au dépôt GitHub avant le premier déploiement :

- `CPANEL_USER` : nom d’utilisateur cPanel.
- `CPANEL_HOST` : hôte cPanel, sans protocole.
- `CPANEL_API_TOKEN` : jeton API cPanel autorisant la liste blanche SSH.
- `SSH_KEY` : clé privée SSH associée au compte cPanel.

Les chemins et commandes non sensibles se trouvent dans `o2switch-production.env`. Mettez `REMOTE_PATH` à jour si le site n’est pas servi depuis `public_html/`.
