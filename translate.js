var theme = {
	mainColor: "#43D1AF",
	bgColor: "#F7F7F7",
	buttonColor: "rgb(230, 230, 230)",
	borderStyle: "solid 2px black"
};

const DEFAULT_LANG = "fr";

var pdfResume = {
	en: "dl/Louise\ Simonneau_CV_EN2017.pdf",
	fr: "dl/Louise\ Simonneau_CV_FR2017.pdf"
};

var dict = {

		tooltips: {
	 		skillsNav: {en: "Skills", fr: "Comp\xE9tences"},
			edNav: {en: "Education", fr: "Formation"},
			hobsNav: {en: "Hobbies", fr: "Divers"},
			expNav: {en: "Experience", fr: "Exp\xE9rience"},
		},
		downButton: {en: "DOWNLOAD MY RESUME", fr: "T&EacuteL&EacuteCHARGER MON CV"},
		jobDescr: {en: "", fr: "Développeuse en herbe"},
		moocsTitle: {en: "ONLINE EDUCATION", fr: "FORMATION EN LIGNE"},
		edTitle: {en: "EDUCATION", fr: "FORMATION"},
		skillsTitle: {en: "SKILLS", fr: "COMP&EacuteTENCES"},
		programming: {en: "Programming", fr: "Programmation"},
		tools: {en: "Tools", fr: "Outils"},
		unix: {en: "UNIX Environment", fr: "Environnement UNIX"},
		lang: {en: "Languages", fr: "Langues"},
		french: {en: "French - mother tongue", fr: ""},
		english: {en: "English - fluent, spoken and written", fr: "Anglais courant"},
		sp: {en: "Spanish - intermeditate", fr: "Espagnol scolaire"},
		compAdj: {en: "Fast learner, adaptable, independent, meticulous", fr: "Adaptabilit&eacute, rapidit&eacute d'apprentissage, rigueur, autonomie"},
		expTitle: {en: "WORK AND ASSOCIATIVE EXPERIENCE", fr: "EXP&EacuteRIENCE PROFESSIONNELLE ET ASSOCIATIVE"},
		london: {en: "London (UK)", fr: "Londres (RU)"},
		ireland: {en: "Ireland", fr: "Irlande"},
		since: {en: "since", fr: "depuis"},
		months: {
			jan: {en: "January", fr: "janvier"},
			feb: {en: "February", fr: "f&eacutevrier"},
			march: {en: "March", fr: "mars"},
			apr: {en: "April", fr: "avril"},
			may: {en: "May", fr: "mai"},
			june: {en: "June", fr: "juin"},
			jul: {en: "July", fr: "juillet"},
			aug: {en: "August", fr: "ao&ucirct"},
			sept: {en: "September", fr: "septembre"},
			oct: {en: "October", fr: "octobre"},
			nov: {en: "November", fr: "novembre"},
			dec: {en: "December", fr: "d&eacutecembre"},
		},
		titleAgile: {en: "Software Processes and Agile Practices, University of Alberta",
					fr: "\"Software Processes and Agile Practices\", Universit&eacute d'Alberta"},
		descrAgile: {en: "", fr: ""},
		titleJava: {en: "", 
					fr: "Initiation &agrave la programmation \n Introduction &agrave la programmation orient&eacutee objet en Java, &Eacutecole Polytechnique de Lausanne"},
		descrJava: {en: "", fr: ""},
		descr42: { en: "42 is a coding school based on peer-learning: no classes, no teachers, a totally project-oriented programme. " +
					"Throughout this course, I acquired the basics of computer programming " +
					"(in C, PHP, HTLM, CSS, Javascript), as well as good coding practices " +
					"(clean code, unit testing) and useful tools (UNIX working environment, Git), " +
					"in a very short time. I also developed my abilities to adapt and learn quickly, during the selection (C) and training (PHP) \"piscines\" " +
					"(\"pools\", month long intensive courses).", 
					fr: "42 est une école de programmation informatique basée " +
					"sur le peer-learning: pas de cours, pas de professeurs, un cursus 100% pratique et projet. " +
					"Cette formation m'a permis d'acquérir les notions fondamentales de la programmation " +
					"(en C, PHP, HTLM, CSS, Javascript), ainsi que d'en conna&icirctre les bonnes pratiques " +
					"(clean code, tests unitaires) et les outils essentiels (environnement UNIX, Git), " +
					"et ce en tr&egraves peu de temps. J'y ai &eacutegalement développ&eacute mes capacit&eacutes " +
					"d'adaptabilit&eacute et d'apprentissage rapide, &agrave travers les piscines " +
					"(un mois de formation intensive) de s&eacutelection en C, et de formation en PHP."},
		titleMelex: {en: "Master 1 M&eacutetiers du Lexique et de la Traduction", fr: "Master 1 M&eacutetiers du Lexique et de la Traduction"},
		descrMelex: {en: "", fr: ""},
		titleLea: {en: "Degree in LEA (Translation studies)", 
					fr: "Licence Langues &Eacutetrang&egraveres Appliqu&eacutees, parcours Traduction Sp&eacutecialis&eacutee Multilingue"},
		descrLea: {en: "", 
					fr: "Cette ann&eacute m'a permis d'approfondir ma connaissance de la langue et de la culture anglaises. " +
						"La formation comprenait &eacutegalement une introduction au Web (&eagrave travers Adobe Dreamworks)"},
		titleCine: {en: "Degree in film studies", fr: "Licence Arts, parcours &Eacutetudes cin&eacutematographiques"},
		descrCine: {en: "",
					fr: "formation theorique en histoire et esthetique du cine, + relations cine autres formes artistiques, " +
					 	"ouverture au monde de l'art , culture ecriture"},
		titleMed: {en: "PCEM 1 (1st year of medical studies)", fr: "Premier Cycle des &Eacutetudes M&eacutedicales 1"},
		titleBac: {en: "Scientific Baccalaur&eacuteat, with Highest Honours", 
					fr: "Baccalaur&eacuteat Scientifique, sp&eacutecialit&eacute Math&eacutematiques, mention Tr&egraves Bien"},
		titleKiron: {en: "Volunteer - Computer Science Curriculum equivalence analysis", 
					fr: "B&eacuten&eacutevole, analyse d'&eacutequivalences de formations en Informatique"},
		descrKiron: {en: "Kiron France is an NGO that offers a hybrid education system aimed at helping refugees " +
					"and asylum seekers access higher education. " +
					"After a year of learning online through MOOCs, Kiron students " +
					"are transfered to the second year of one of Kiron's partner Universities " +
					"</br> As a volunteer at Kiron France, my role was to match Kiron Computer Science modules " +
					"with partner universities modules.", 
					 fr: "Kiron France est une association qui vise à faciliter l'accès à l'éducation supérieure aux " +
					"personnes réfugiées et aux demandeurs d'asile, à travers un système hybride de formation. " +
					"L'étudiant réalise la première étape de son cursus en ligne via des MOOCs, " +
					"et intègre ensuite l’une de nos universités partenaires directement en Licence " +
					"grâce à l’accréditation de leur formation. " +
					"</br>Mon rôle au sein de Kiron France est de trouver des équivalences de " +
					"modules entre les formations de nos universités partenaires et le cursus Informatique Kiron."},
		titleCes: {en: "Receptionist", fr: "R&eacuteceptionniste"},
		descrCes: {en: "", fr: "Accueil et orientation des groupes, ?"},
		titleTrans: {en: "Project Management Intern", fr: "Stagiaire en gestion de projet de traduction"},
		descrTrans: {en: "My tasks in this multinational translation company were to prepare documents for translating " +
					"(utilisation de la suite office), relecture finale, " +
					"contact avec les traducteurs", 
					fr: "Au sein de cette multinationale des services de traduction, mes tâches consistaient à " +
					 "pr&eacuteparer les documents pour la traduction (utilisation de la suite Office), effectuer la relecture finale " +
					 "//// RETROUVER RAPPORT DE STAGE ////"},
		titleSpeedb: {en: "General assistant", fr: "Standardiste"},
		descrSpeedb: {en: "", fr: ""},
		titleStoneh: {en: "Bed & Breakfast employee", fr: "Employ&eacutee de Bed & Breakfast"},
		descrStoneh: {en: "Paul Auster quote?", fr: "CITATIION PAUL AUSTER?" +
						"Apr&egraves avoir valid&eacute ma licence, et n'ayant toujours pas trouv&eacute ma voie, " +
						"je d&eacutecide de partir &agrave l'aventure au Canada et aux Etats-Unis. " +
						"Apr&egraves trois mois en tant qu'employ&eacutee de Bed & Breakfast"},
		titleHoriz: {en: "Work placement coordinator for French students", fr: "Coordinatrice de stages pour des lyc&eacuteens fran&ccedilais"},
		descrHoriz: {en: "", 
					fr: ""},
		hobbiesTitle: {en: "HOBBIES", fr: "CENTRES D'INT&EacuteR&EcircT"},
		hikingText: {en: "hiking", fr: "randonn&eacutee"},
		travelsText: {en: "travelling", fr: "voyages"},
		musicText: {en: "music (guitar)", fr: "musique (guitare)"},
		readingText: {en: "reading", fr: "lecture"}
};


function translate(lang) {
	var ref;
	var el;
	var text;

	for (ref in dict) {
		if ({}.hasOwnProperty.call(dict, ref)) {
			el = document.getElementById(ref);
			text = dict[ref][lang];
			if (el) {
				el.innerHTML = text;
			}
		}
	}
	for (ref in dict.tooltips) {
		if ({}.hasOwnProperty.call(dict["tooltips"], ref)){
			el = document.getElementById(ref);
			text = dict["tooltips"][ref][lang];
			if (el) {
				el.setAttribute("data-original-title", text);
			}
		}
	}
	for (ref in dict["months"]) {
		if ({}.hasOwnProperty.call(dict["months"], ref)) {
			elements = document.getElementsByClassName(ref);
			if (elements) {
				text = dict["months"][ref][lang];
				for (i = 0; i < elements.length; i++) {
					elements[i].innerHTML = text;
				}
			}
		}
	}
}

function setLang(lang) {
	var en = document.getElementById("en");
	var fr = document.getElementById("fr");
	var download = document.getElementById("downButton");

	switch (lang) {
		case "en":
			translate("en");
			fr.style.border = "none";
			en.style.border = theme.borderStyle;
			en.style.fontWeight = "bolder";
			download.setAttribute("href", pdfResume.en);
			$("#sm_down_button").attr("href", pdfResume.en);
			break ;
		case "fr":
			translate("fr");
			en.style.border = "none";
			fr.style.border = theme.borderStyle;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", pdfResume.fr);
			$("#sm_down_button").attr("href", pdfResume.fr);
			break ;
		default:
			translate(dictFr);
			en.style.border = "none";
			fr.style.border = theme.borderStyle;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", pdfResume.fr);
			$("#sm_down_button").attr("href", pdfResume.fr);
	}
}

function changeLang(lang) {
	var lang_el = document.getElementById(lang);

	if (lang_el.style.border !== "solid 2px black")
	{
		setLang(lang);
		if (can_access_storage())
			window.localStorage.setItem("lang", lang);
	}
}

function can_access_storage() {
    try {
        localStorage.setItem("__test", "data");
    } catch (e) {
        return false;
    }
    return true;
}

window.onload = function () {

if (can_access_storage())
	setLang(window.localStorage.getItem("lang"));
else
	setLang(DEFAULT_LANG);

document.getElementById("en").addEventListener("click", function() {
	changeLang("en");
});
document.getElementById("fr").addEventListener("click", function() {
	changeLang("fr");
});
};
