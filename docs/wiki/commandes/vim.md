# Commandes : Vim

## Se déplacer dans le texte
|:computer:|:page_facing_up:|
|-|-|
|`0`| Se déplacer en début de ligne |
|`$`| Se déplacer en fin de ligne |
|`w`| Se déplacer de mot en mot vers la droite |
|`b`| Se déplacer de mot en mot vers la gauche |
|`G`| Se déplacer à la fin du fichier |
|`gg`| Se déplacer au début du fichier |

## Effacer du texte
|:computer:|:page_facing_up:|
|-|-|
|`dw`| Effacer un mot |
|`d2w`| Effacer 2 mots |
|`d4`| Effacer 4 caractères |
|`dd`| Effacer une ligne |
|`6dd`| Effacer 6 lignes |
|`d0`| Effacer du curseur jusqu'au début de la ligne |
|`d$`| Effacer du curseur jusqu'à la fin de la ligne |

## Copier et coller du texte
|:computer:|:page_facing_up:|
|-|-|
|`yw`| Copier un mot |
|`y2w`| Copier 2 mots |
|`yy`| Copier la ligne |
|`y4`| Copier 4 lignes |
|`p`| Coller une ligne ou un mot |
|`6p`| Coller 6 fois une ligne ou un mot |

## Annuler des modifications
|:computer:|:page_facing_up:|
|-|-|
|`u`| Annuler les actions précédentes |
|`U`| Annuler tous les changements sur une ligne |
|<kbd>CTRL</kbd> + <kbd>R</kbd> | Annuler l'annulation |

## Enregistrer, quitter, rechercher, etc.
|:computer:|:page_facing_up:|
|-|-|
|`/`| Rechercher un mot |
|`:w`| Enregistrer |
|`:q`| Quitter ou `:q!` Pour forcer la fermeture |
|`:wq`| Enregistrer puis quitter |
|`vim -x fichier`| Créer un fichier avec un mot de passe |
|`:X`| Changer le mot de passe |

:::tip Conseil
- Pour la recherche d'un mot, faire <kbd>ENTRER</kbd> pour valider
- <kbd>n</kbd> pour rechercher en avant 
- <kbd>MAJ</kbd> + <kbd>n</kbd> pour rechercher en arrière
:::