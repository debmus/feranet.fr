# Bash : Les conditions

## Structure : if
```bash
if [ test_1 ] ; then
  echo "premier test vérifié"  
elif [ test_2 ]
  echo "second test vérifié"  
else
  echo "test non vérifié"  
fi
```

## Structure :  case
```bash
case VARIABLE in
  "mot1")
    echo "mot 1"
    ;;
  "mot2")
    echo "mot 2"
    ;;
  "mot3")
    echo "mot 3"
    ;;
  *)
    echo "Aucun mot"
    ;;
esac
```

## Symboles de test
|:computer:|:page_facing_up:|
|-|-|
|`&&`| et | 
|`||`| où |
|`!`| inverser |

## Test : Chaînes de caractères
|:computer:|:page_facing_up:|
|-|-|
|`$chaine1 = chaine2`| Vérifie si les deux chaînes sont identiques | 
|`$chaine1 != $chaine2`| Vérifie si les deux chaînes sont différentes |
|`-z $chaine`| Vérifie si la chaîne est vide |
|`-n $chaine`| Vérifie si la chaîne est non vide |

## Test : Nombres
|:computer:|:page_facing_up:|
|-|-|
|`$num1 -eq $num2`| Vérifie si les nombres sont égaux (EQual) |
|`$num1 -ne $num2`| Vérifie si les nombres sont différents (No Equal)|
|`$num1 -lt $num2`| Vérifie si num1 est inférieur ( < ) à num2 (Lower Than) |
|`$num1 -le $num2`| Vérifie si num1 est inférieur ou égal ( <= ) à num2 (Lower or Equal) |
|`$num1 -gt $num2`| Vérifie si num1 est supérieur ( > ) à num2 (Greater Than) |
|`$num1 -ge $num2`| Vérifie si num1 est supérieur ou égal ( >= ) à num2 (Greater or Equal) |

## Test : Fichiers
|:computer:|:page_facing_up:|
|-|-|
|`-e $nomfichier`| Vérifie si le fichier existe |
|`-d $nomfichier`| Vérifie si le fichier est un répertoire |
|`-f $nomfichier`| Vérifie si le fichier est un fichier |
|`-L $nomfichier`| Vérifie si le fichier est un lien symbolique |
|`-r $nomfichier`| Vérifie si le fichier est lisible |
|`-w $nomfichier`| Vérifie si le fichier est modifiable |
|`-x $nomfichier`| Vérifie si le fichier est exécutable |
|`$fichier1 -nt $fichier2`| Vérifie si fichier1 est plus récent que fichier2 (Newer Than) |
|`$fichier1 -ot $fichier2`| Vérifie si fichier1 est plus vieux que fichier2 (Older Than) |
