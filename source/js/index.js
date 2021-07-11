(function() {

    let listes = document.querySelectorAll('.tabs--nav a');

    let afficherOnglet = function(value) {

        // verifie si le liens et deja active
        if (value.parentNode.classList.contains('active')) {

            return false

        }

        // Supprimer la class active
        let navigation = value.parentNode.parentNode.parentNode

        navigation.querySelector('.tabs--nav .active').classList.remove('active');

        // créer la nouvelle class active
        value.parentNode.classList.add('active');

        // on enleve la class active a la div pour la faire disparaitre
        let body = document.body

        body.querySelector('.div--content.active').classList.remove('active');

        // on ajoute la class active a la div ciblé
        body.querySelector(value.getAttribute('href')).classList.add('active'); 

    };

    for (let i = 0; i < listes.length; i++) {

        listes[i].addEventListener('click', function() {

            afficherOnglet(this)

        });

    };

    // !a = na pas la class active (dans ce cas)
    // permet de recuperer le href et lors de lactualisation de ne pas perdre la page et rester sur la selection
    let href = window.location.hash;
    let a = document.querySelector('a[href="' + href + '"]');

    if (a !== null && !a.parentNode.classList.contains('active')) {

        afficherOnglet(a)

    }

})();