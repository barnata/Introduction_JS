#TP 2
## Premices
Hello tout le monde, la derniere fois, nous avons vu les bases du JS, petit rappel : les variables, les logs, et les fonctions.
Cette semaine, nous allons encore voir les console.log mais dans la pratique, car comme je vous le disais les logs, on va en faire par millier, deja pour toujours avoir un oeuil sur ce qu'on fait mais aussi tout simplement pour debug les fonctions.
Nous allons donc devoir manipuler le [DOM](https://fr.wikipedia.org/wiki/Document_Object_Model) (Document Object Model) qui represente votre page HTML sous forme de Nodes, comme de multiples entites qui composent la page, ainsi pour faire simple prenez une Node comme une balise generique sans TYPE ou le type est contenu dans un ensemble tel {p, div, form, h1, h2 ...}, Le but de ce TP aura ainsi pour finalitee de faire un petit site intenet avec seulement une architecture base de html et que du JS

nous partirons ainsi avec cette structure :
```html
<!DOCTYPE html>
<html>
	<head>
		<title>TP2 -> Intro DOM</title>
		<meta charset='UTF-8'>
	</head>

	<body>
		<div id='app'></div>
	</body>
</html>
```

##Exo 1
La derniere fois je vous ai demander de mettre tout votre code JS dans une balise script, mais vous vous doutez que si on devait mettre tout le code JS dans ces balises, ca deviendrait assez galere de s'y retrouver... ainsi nous allons maintenant separer notre code JS de notre code HTML dans des fichiers .js.
Dans la balise body, apres la div nous allons rajouter la balise script auquel nous allons donner un nouvelle attriut src de ce type
```html
	<script type='text/javascript' src='JS/app.js'></script>
```

A partir de maintenant je ne veux voir que du code JS dans des fichiers js !!
Faites quelques fonctions de votre choix et utilisez les pour voir si tout marche encore bien

**WARNING** : Nouveaute, je vais vous demander maintenant, de choisir vos types de variables, c'est a dire pour rappel qu'il existe var : const : let (depuis EcmaScript 6) donc je vous conseil de faire un tour sur le breviaire pour en comprendre un peu plus sur les choix a faire.

Voici quand meme un petit exemple sans explications pour les plus perspicaces.

```javascript
	const PI = 3.14159
	var string = "124113";
	function getFirstLetterAsNumber (input_string) {
		 let intern_value = 42;
		 var return_value = input_string[0] - '0';
		 if(return_value == intern_value) return (return_value);
		 else return (PI);
	}
	var ret = getFirstLetterAsNumber(string);
	console.log(ret); // prints 3.14159
```

##Exo 2
Nous allons maintenant attaquer le DOM afin de creer le nouveau Facebook ... non je rigole bien sur que non, mais on verra qu'on peut faire un truc sympas avec seulement une masnipulation du DOM
voici donc deux fonctions que vous allez utiliser tout le temps a vous de le comprendre avec des manipulation, pensez a les utiliser les manipuler et comprendre par vous meme ce qu'ils font
```javascript
	document.getElementByID(id_elem);
	document.createElement(TYPE_ELEM);
	(* type of Node).appendChild(*:Node);
```
###RAPPEL
penser au seul et unique
```javascript
	console.log(*);
```
###Exo 2+
Pour cet exercice, on va pouvoir mettre en place ce qu'on a deja vu avec les fonctions... vous devez avoir compris que peu importe ce que vous creez vous faites toujours plus ou moins la meme chose, creer un nouel element, puis lui ajouter du texte et pour teminer l'ajouter a la node Parent voulue.
Vous allez donc, creer un nouveau fichier functions.js et y creer toutes les fontions necessaires a la creation de contenu.

Une fois terminé, appelez vos fonctions dans votre premier fichier app.js afin de garder un code propre et separe.

##Exo 3
Pour cet exercice, je vous demanderai de trouver par vous meme AVEC LES MANS ET LES DOCS de JavaScript par exemple la [MDN de Mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript) comment ajouter une image en JS puis me faire un mini site de presentation avec que des fonctions (Il faudra surement creer une nouvelle fonction pour la gestion d'images :) )

Pour ceux qui se poseraient cependant la question, je vous rassure, je resterai quand meme a disposition pour ceux qui ne comprennent vraiment pas, cet exercice ayant pour but de vous apprendre a chercher par vous meme, malgre tout, je vous rappel que moi aussi a mon epoque j'ai du a certains moments m'aider d'Internet, alors disons que je serai pour vous ce que Internet fut pour moi :)

##Exo 4
Nous allons voir dans cette partie quelque chose de necessaire en JS, les evenements !!!
il en existe par dixaines, mais nous ne verrons que les plus connus et simple a manipuler, soit le click, et le hover.
Ce qu'il faut savoir c'est qu'un evenement ne peut etre attrapé (catch) que sur des elements du DOM, ainsi il vous faut stocker votre element comme votre div dans une variable JS.
La derniere chose a savoir c'est que tout evenement commence par 'on' suivit de l'evenement. Nous auront donc comme exemple l'evenement onClick.
Dans cet exercice, je vous demande alors de creer un bouton en JS, de l'ajouter a votre div#app et faire en sorte a ce que un popup s'ouvre demandant si on a 18ans qui suivant la reponse raffichera un autre popup si oui disant que on peut acceder au site, sinon ajoute une div avec un message d'interdiction 
Rappel :
````javascript
	function alert(*); // Affiche un popup
	function confirm(*); // retourne un boolean et affiche un popup 
```
