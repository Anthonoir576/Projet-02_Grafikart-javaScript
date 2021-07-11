(function() {

    let listes = document.querySelectorAll('.tabs--nav a');

    for (let i = 0; i < listes.length; i++) {

        listes[i].addEventListener('click', function(e) {

            // verifie si le liens et deja active
            if (this.parentNode.classList.contains('active')) {

                return false

            }

            // Supprimer la class active
            let navigation = this.parentNode.parentNode.parentNode

            navigation.querySelector('.tabs--nav .active').classList.remove('active');

            // créer la nouvelle class active
            this.parentNode.classList.add('active');

            // on enleve la class active a la div pour la faire disparaitre
            let body = document.body

            body.querySelector('.div--content.active').classList.remove('active');

            // on ajoute la class active a la div ciblé
            body.querySelector(this.getAttribute('href')).classList.add('active'); 

        });

    };

    let contents = document.querySelectorAll('.tabs--content div');

 

})();