#Projet number one !
Sur ce projet, nous allons voir les bases, c'est a dires, les fonctions, leur utilites, quand en faire et quand ne pas en faire, voir le differents type de variables suite a la norme ES6 (Ecmascript 6) [let, var, const]

## En route
Bien, pour commencer vous aller INSTALLER [SUBLIME TEXT 3](https://download.sublimetext.com/sublime_text_3_build_3126_x64.tar.bz2) parce que apres tout on est pas que des pigeons comme RETY !!! donc oublier la merde de GEDIT (WARNING : si vous avez deja un IDE favoris qui supporte le JS gardez le :) ).
Ensuite allez a cette adresse sur Firefox [GITHUB](https://github.com/join?source=header-home) -> Vous allez vous creer un compte avec nom_premiereLettrePrenom -> e.g : saison_a pour Alexandre Saison ou encore grelaud_l pour Lucas Grelaud

##Intro a GIT
Git est ce qu'on appelle un gestionnaire de Versionning pour ceux qui ne le saurais pas ... (On a tous ete noob un jour xD ), il permet a nous (Dev, Lead Dev, Project Manager) de pouvoir se partager du code de maniere soit OPEN SOURCE soit en private quand on est dans une Start-Up ou dans une compagnie.
JE vous demanderai ainsi de toujours rendre vos projets et/ou TP sur votre GIT Perso
### Command a savoir
- git add [--all] --> ajoute un fichier dans une liste temporaire a push sur votre repo
- git commit [-m msg] -> defini un message de COMMIT => c'est a dire un message general de ce que vous envoyez sur votre repo
- git push [origin master] -> envoyer sur votre repo tout le contenu de la liste temporaire
- git branch -> savoir sur quelle branch vous etes et celles disponible -> vous verrez plus en detail au fur et a mesure de ce cours
- git checkout [-b new_branch] selected_branch -> permet de changer de branch ou d'en creer une si le flag -b est ajouter a votre ligne de commande
- git reset -> si vous avez ajouter un mauvais fichier a votre liste temporaire ou un fichier que vous ne vouliez pas encore ajouter => entraine un clean total de la list
-  git clone -> clone/copy de maniere local un repo stocke sur Github ou Gitlab ou encore Gist soit n'importe quelle application de Versionning  

###Les Branch
Pour faire simple, vous devez les prendre comme des sous repo plus ou moins speciaux ou sinon vous pensez l'arbre comme etant le projet final, et les branch comme des parties intrinseques au projet qui une fois rassembler sur le tronc (La branch master) forme la release du projet -> LE PROJET FINI !!

###Les Commits
Les commits sont des bouts de mise a jour d'un code entier ils sont la pour pouvoir en cas de panne ou d'erreur dans le code pouvoir faire un retour en arriere, ils peuvent ainsi aussi servir de backup lorsque certaines features de votre application sont finie ou si des parties importantes de code vous semble parfaites et que vous voulez garder un checkpoint avant d'attaquer un point sensible de votre architecture...
Un commit se represente ainsi comme dit precedement, comme une liste de fichier mis a jours par vos petite mimines suivit d'un header -> comme une entete qui se definit comme un message de commit, c'est a dire un message que vous ecrivez qui vous permet de savoir en un coup d'oeuil les modifications apporter et/ou les ajout/suppression de fichier de votre repo.

### Push et Pull
Alors la c'est assez simple Push->Pousser et Pull->Tirer Ainsi imaginer ceci comme
```bash
$MON_PC->GIT == PUSH
GIT->$MON_PC == PULL
```

du coup vous vous doutez que une fois commit vous allez push sur votre repo ce qui enverra votre commit (Bien Effectivement cela necessite bien evidement un COMMIT minimum au prealable) sur le repo stocke sur l'INTERNET
Quand au pull c'est quand vous voulez atteindre une mise a jour du repo stocke sur github de votre repo -> utilise souvent en team

##Premier clone, premier commit, premier push
Bien maintenant que vous etes des "ROIS" de git je vais vous demander de cloner ce [REPO](http://www.github.com/Rand-IA/Introduction_JS) sur votre machine !!
Une fois fini vous allez vous rendre dans DAY_1 pour acceder a ces fichier afin de prendre le fichier index.html

### La balise script
Bon. on attaque tout ca ! ouvrez une balise script comme cela :
```html
	<script>
		/*
			Ton Code JS se met ICI !!! e.g : console.log("Hello World")
		*/
	</script>
```

bien du coup vous aller inscrire la premiere expression ou ligne de code que vous devez connaitre :
```javascript
	console.log("Hello World");
```

Cette ligne de commande pernet de "logger" sur la console de votre navigateur ce que vous voulez, ainsi vous pouvez logger un objet JS(JSON) ou encore une fonction ou encore une String quelquonque. 
Vous apprendrez par la suite que le console.log ba c'est la vie et que on l'utilise enormement

##Premiere fonction
Bien, les logs c'est bien mais tout seul ca sert a rien, nous voila donc a faire nos premiere fonctions.
Ce qu'il faut savoir c'est que en JS, le typage est implicite, pour faire simple vous ne donnez jamais de type a vos variable il vous suffit donc pour l'instant de savoir que toute declaration de variable commence par var.
Pour ce qui est des fonction rien de mieux qu'un exemple
```javascript

	function maFonction(arg1, arg2) {
		 console.log(arg1,arg2);
	}

```
cette fonction s'appelle donc maFonction et prend deux arguments, (RAPPEL : le typage est implicite, ne donner pas de type a vos variable), pour finir, vous l'aurez compris cette simple fonction log sur la console de Firefox le contenu de arg1 et de arg2

### ATTENTION
Il vous faut savoir la difference entre la concatenation et l'ajout de paramettre sur un log :
- Dans le cas le la concatenation on utilisera le + : 
```javascript
	var hello = "Hello ";
	console.log(hello + "World !") // Affiche Hello World !
```
- Dans le cas de l'ajout de paramettre on utilise le ',' il est utiliser quand on veut loger deux Objets ou vars pour avoir plus d'info.
```javascript
	var obj = {
	    key : "value"
	};
	console.log("Un objet JS =" + obj); // Affiche Un objet JS = [Object]
	console.log("Un objet JS =" , obj); // Affiche Un objet JS = obj{key : "value"}
```
Si vous ne comprenez toujours pas la difference ce n'est pas trop grave pour l'instant je vous demande juste de vous rappeller que les deux cas sont possibles

## First Project
### Exo 1
Votre mission si vous l'acceptez, sera de me faire une fonction qui une fois loggée ecrira ce que prend la fonction en paramettre !
### Exo 2
Bien maintenant que savez comment faire, je pense que vous avez compris le log et les fonction nous allons voir comment faire un semblant d'objet en JS
Un objet en JS n'est rien d'autre qu'une fonction stockee dans une variable, ainsi la fonction sera ce qu'on appelle le constructeur et le nom de variable sera le nom de l'objet
Voici un exemple
```javascript

var Rety = function(arg) {
    this._arg = arg
}

var UselessPerson = new Rety("Hello");

```
