#[Jour 1](http://www.youtube.com/watch?v=9_4lxnUyJLE)
##Les premices

Salut a toi petit S1 !! Te voila dans ce premier cours de Javascript, qui te permettra surement de pouvoir plus que defoncer le prochain controle de notre tant aime Mario ;)
La pedagogie ici, est simple : 
	- Plus c'est dur, plus tu en bave, plus fier tu en sortira !
	- Pour toute question RAPPEL : UTILISEZ LES MAN ou les DOCUMENTATION MISE A DISPOSITION SUR L'INTERNET !! (oui je sais c'est degeu mais on dit l'internet...)
	- Ma methodologie d'apprentissage risque de sembler a celle d'EPITECH (Ceux qui me connaissent vous diront... normal venant de lui) , c'est simple comme precept : dur pour les etudiants mais pouvant permetre d'atteindre un niveau non negligable par le biais de fabuleux projets.
	- On ne REMET PAS A LA NORME !!!! ON CODE A LA NORME !!!
	- Avant tout cela bien sur, car c'est le plus important ENJOY sinon sans ca vous tiendrez jamais dans l'info

##La NORME
###Explications Jean-Pierre ??
Ah ba oui c'est bien beau de vous demander de coder a la norme mais en fait... c'est quoi la norme ??
Un norme en soit c'est comme une RFC en reseau, c'est pour moi comme une sorte de protocole de communication entre programmeur !! c'est ce qui permet a n'importe quel programmeur ou dev de comprendre de votre code sans avoir a vous ping a la gueule toutes les deux seconde pour avoir une info sur l'utilisation de votre function ou je ne sais quel variable quelle soit global ou local.
Pour mon cours je choisi de prendre ma NORME personnel, qui a pu faire ses preuves. Ainsi pour les curieux, elle est a 90% de norme CPP (C++), pour 10% de perso.
Voici donc LA NORME :

###La NORME
####Les variables
une variable ne fait pas comme RETY peut le dire 20km de long OMG, si tu as besoin de deux fois d'un meme nom de variables, soit tu sais pas coder et en fait tu fait de la duplication de code donc -> FAIT UNE FONCTION !! Sinon tu peux soit chercher un synonime (il y en a toujours un qui convient), soit t'en battre les corrones, me pisser a la gueule et faire ton nom de 20km... mais viens pas me saouler si je te corrige pas une partie incomprise ou que j'ai la flemme de lire

Attention, je vais vous apprendre des concepts que vous apprendrez au S2, qu'on appelle OBJET, n'ayez pas peur c'est cool et simple, ainsi je vous parlerai dans certain cas non plus de variable mais d'attributs qui sont en fait des variables mais qui definissent l'objet créé. CES ATTRIBUTS COMMENCENT INLASSABLEMENT PAR UN UNDERSCORE (CE MACHIN LA -> _ ).

####Les points virgules
en JS (Javascript) les point virgules on s'en ballec mais... pas moi je suis reste nostalgique et de toute facon la plupart des langages fonctionnent encore avec des ';'

####Les fonctions
une fonction je la veux comme ca

function doSomething() {
	// CODE
	return (var);
}

c'est a dire que je vous demande les accolades comme ca pour tout les cas (Les if/else switch et toutes les conneries), une indentations parfaite (4 espaces), et des parenthese pour les return 

####Les classes (Les objets)
je les veux sous le meme pattern :
```javascript
class Object {

	function constructor(args...) {
		this._name = "Object";
		this._callback = function(args) {
			var yolo;
			if(yolo.length <= 0) throw new Error("VOILA MON ERREUR");
			if(args !== undifined)
				return (42);
			else 
				return ("CA MARCHE PAS !");
		}
	}

	static function log(msg) {
		console.log("[LOG] "+ msg);
	} 

	function doSomething(args, next) {
		if(args[0].length == 1) 
			next(this._callack);
		else
			next(function() {
				console.log("Hello World");
			});
	}

	function getName() {
		return (this._name);
	}

	function getCallback() {
		return (this._callback);
	}
}
```

Pour faire simple le constructeur en premier, les fonctions statiques en deuxiemes pour pouvoir les voir rappidement, puis les fonctions usuelles, et pour finir les getter et setter en fin de tete.
Je veux un espacement entre chaque fonctions pas deux ni trois seulement un, et une indentation parfaite