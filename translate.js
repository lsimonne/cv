var theme = {
	main_color: "#43D1AF",
	bg_color: "#F7F7F7",
	button_color: "rgb(230, 230, 230)",//"#e6e6e6",
	border_style: "solid 2px black"
};

var default_lang = "fr";

var pdf_resume = {
	en: "dl/Louise\ Simonneau_CV_EN2017.pdf",
	fr: "dl/Louise\ Simonneau_CV_FR2017.pdf"
}

var dictEn = {

		// about me
		tooltips: {
			skills_nav: "Skills",
			ed_nav: "Education",
			hobs_nav: "Hobbies",
			exp_nav: "Experience",
		},
		down_button: "DOWNLOAD MY RESUME",
		ed_title: "EDUCATION",
		deg: "Degree in ",
		tsm: "(Translation studies)",
		cine: "Film Studies",
		pcem: "(1st year of Medical Studies)",
		bac: "Scientific Baccalaur&eacuteat with highest honours",
		skills_title: "SKILLS",
		info: "Programming languages and tools",
		unix: "UNIX Environment",
		lang: "Languages",
		french: "French - mother tongue",
		english: "English - fluent, spoken and written",
		sp: "Spanish - intermeditate",
		comp_adj: "Fast learner, adaptable, independent, meticulous",
		exp_title: "WORK AND ASSOCIATIVE EXPERIENCE",
		kiron_pos: "Volunteer - Computer Science Curriculum equivalence analysis",
		recept: "Receptionist",
		transperfect: "Project Management Intern",
		speedb: "General assistant",
		bnb: "Bed & Breakfast employee",
		horizon: "Work placement coordinator for French students",
		london: "London (UK)",
		ireland: "Ireland",
		since_nov: "since November 2016",
		jan: "January",
		feb: "February",
		march_june: "March - June 2015",
		apr: "April",
		may: "May",
		june: "June",
		jul: "July",
		aug: "August",
		sept: "September",
		oct: "October",
		nov: "November",
		dec: "December",
		hobbies_title: "HOBBIES",
		hiking: "hiking",
		travels: "Travels",
		music: "mucic (guitar)",
		reading: "reading",
		descr_42: "42 is a coding school based on peer-learning: no classes, no teachers, a totally project-oriented programme. \
					Throughout this course, I acquired the basics of computer programming \
					(in C, PHP, HTLM, CSS, Javascript), as well as good coding practices \
					(clean code, unit testing) and useful tools (UNIX working environment, Git), \
					in a very short time. I also developed my abilities to adapt and learn quickly, during the selection (C) and training (PHP) \"piscines\" \
					(\"pools\", month long intensive courses).",
		title_melex: "Master 1 M&eacutetiers du Lexique et de la Traduction",
		title_lea: "Licence Langues &Eacutetrang&egraveres Appliqu&eacutees, parcours Traduction Sp&eacutecialis&eacutee Multilingue",
		descr_lea: "",
		title_cine: "Licence Arts, parcours &Eacutetudes cin&eacutematographiques",
		descr_cine: "",
		title_med: "Premier Cycle des &Eacutetudes M&eacutedicales 1",
		title_bac: "Baccalaur&eacuteat Scientifique, sp&eacutecialit&eacute Math&eacutematiques, mention Tr&egraves Bien"
};

	var dictFr = {

		tooltips: {
			skills_nav: "Comp\xE9tences",
			ed_nav: "Formation",
			hobs_nav: "Divers",
			exp_nav: "Exp\xE9rience",
		},
		down_button: "T&EacuteL&EacuteCHARGER MON CV",
		ed_title: "FORMATION",
		deg: "Licence",
		tsm: "parcours Traduction Sp&eacutecialis&eacutee Multilingue",
		cine: "ALL parcours &Eacutetudes Cin&eacutematographiques",
		pcem: "",
		bac: "Baccalaur&eacuteat Scientifique, mention Tr&egraves Bien",
		skills_title: "COMP&EacuteTENCES",
		info: "Programmation: langages et outils",
		unix: "Environnement UNIX",
		lang: "Langues",
		french: "",
		english: "Anglais courant",
		sp: "Espagnol scolaire",
		comp_adj: "Adaptabilit&eacute, rapidit&eacute d'apprentissage, rigueur, autonomie",
		exp_title: "EXP&EacuteRIENCE PROFESSIONNELLE ET ASSOCIATIVE",
		kiron_pos: "B&eacuten&eacutevole - Analyse d'&eacutequivalences de formations en Inforamtique",
		recept: "R&eacuteceptionniste",
		transperfect: "Stagiaire en gestion de projet de traduction",
		speedb: "Standardiste",
		bnb: "Employ&eacutee de Bed & Breakfast",
		horizon: "Coordinatrice de stages pour des lyc&eacuteens fran&ccedilais",
		london: "Londres (RU)",
		ireland: "Irlande",
		since_nov: "depuis novembre 2016",
		jan: "Janvier",
		feb: "F&eacutevrier",
		march_june: "mars - juin 2015",
		apr: "Avril",
		may: "Mai",
		june: "Juin",
		jul: "Juillet",
		aug: "Ao&ucirc",
		sept: "Septembre",
		oct: "Octobre",
		nov: "Novembre",
		dec: "D&eacutecembre",
		hobbies_title: "CENTRES D'INT&EacuteR&EcircT",
		hiking: "randonn&eacute",
		travels: "Voyages",
		music: "musique (guitare)",
		reading: "",
		descr_42: "42 est une école de programmation informatique basée \
					sur le peer-learning: pas de cours, pas de profs, un cursus 100% pratique et projet. \
					Cette formation m'a permis d'acquérir les notions fondamentales de la programmation \
					(en C, PHP, HTLM, CSS, Javascript), ainsi que d'en conna&icirctre les bonnes pratiques \
					(clean code, tests unitaires) et les outils essentiels (environnement UNIX, Git), \
					et ce en tr&egraves peu de temps. J'y ai &eacutegalement développ&eacute mes capacit&eacutes\
					d'adaptabilit&eacute et d'apprentissage rapide, &agrave travers les piscines \
					(un mois de formation intensive) de s&eacutelection en C, et de formation en PHP.",
		title_melex: "Master 1 M&eacutetiers du Lexique et de la Traduction",
		title_lea: "Licence Langues &Eacutetrang&egraveres Appliqu&eacutees, parcours Traduction Sp&eacutecialis&eacutee Multilingue",
		descr_lea: "blabla approfondissement de mon anglais, + bureautique (excel) + confrontation aux problemes concrets du metier de traducteur",
		title_cine: "Licence Arts, parcours &Eacutetudes cin&eacutematographiques",
		descr_cine: "formation theorique en histoire et esthetique du cine, + relations cine autres formes artistiques, ouverture au monde de l'art , culture ecriture",
		title_med: "Premier Cycle des &Eacutetudes M&eacutedicales 1",
		title_bac: "Baccalaur&eacuteat Scientifique, sp&eacutecialit&eacute Math&eacutematiques, mention Tr&egraves Bien",
		title_kiron: "B&eacuten&eacutevole, analyse d'&eacutequivalences de formations en Informatique",
		descr_kiron: "Kiron France est une association qui vise à faciliter l'accès à l'éducation supérieure aux\
					 personnes réfugiées et aux demandeurs d'asile, à travers un système hybride de formation.\
					 L'étudiant réalise la première étape de son cursus en ligne via des MOOCs, \
					 et intègre ensuite l’une de nos universités partenaires directement en Licence 2 \
					 grâce à l’accréditation de leur formation.\
					 </br>Mon rôle au sein de Kiron France est de trouver des équivalences de \
					 modules entre les formations de nos universités partenaires et le cursus Informatique Kiron."
};

function translate(dict) {
	var ref;
	var el;
	var text;

	for (ref in dict) {
		el = document.getElementById(ref);
		text = dict[ref];
		if (el)
			el.innerHTML = text;
	}
	for (ref in dict["tooltips"]) {
		el = document.getElementById(ref);
			text = dict["tooltips"][ref];
			if (el)
				el.setAttribute("data-original-title", text);
	}
}

function setLang(lang) {
	var en = document.getElementById("en");
	var fr = document.getElementById("fr");
	var download = document.getElementById("down_button");

	switch (lang) {
		case "en":
			translate(dictEn);
			fr.style.border = "none";
			en.style.border = theme.border_style;
			en.style.fontWeight = "bolder";
			download.setAttribute("href", pdf_resume.en);
			$("#sm_down_button").attr("href", pdf_resume.en);
			break ;
		case "fr":
			translate(dictFr);
			en.style.border = "none";
			fr.style.border = theme.border_style;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", pdf_resume.fr);
			$("#sm_down_button").attr("href", pdf_resume.fr);
			break ;
		default:
			translate(dictFr);
			en.style.border = "none";
			fr.style.border = theme.border_style;
			fr.style.fontWeight = "bolder";
			download.setAttribute("href", pdf_resume.fr);
			$("#sm_down_button").attr("href", pdf_resume.fr);
	}
}

function changeLang(lang) {
	var lang_el = document.getElementById(lang);

	if (lang_el.style.border != "solid 2px black")
	{
		setLang(lang);
		window.localStorage.setItem("lang", lang);
	}
}

window.onload = function () {

setLang(window.localStorage.getItem("lang"));
document.getElementById("en").addEventListener("click", function() {
	changeLang("en");
});
document.getElementById("fr").addEventListener("click", function() {
	changeLang("fr");
});
};
