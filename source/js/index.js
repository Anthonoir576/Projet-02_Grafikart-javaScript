(function() {

    let listes = document.querySelectorAll('.tabs--nav a');

    let afficherOnglet = function(value, anime) {

        if (anime === undefined) {

            anime = true;

        }

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

        /*body.querySelector('.div--content.active').classList.remove('active');

        // on ajoute la class active a la div ciblé
        body.querySelector(value.getAttribute('href')).classList.add('active'); */

        let inActiveTab = body.querySelector('.div--content.active');
        let activeTab = body.querySelector(value.getAttribute('href'));

        if (anime) {

            inActiveTab.classList.add('fade');
            inActiveTab.classList.remove('in');

            let fonction = function() {
                this.classList.remove('fade');
                this.classList.remove('active');
                activeTab.classList.add('active');
                activeTab.classList.add('fade');
                activeTab.offsetWidth;
                activeTab.classList.add('in');

                inActiveTab.removeEventListener('transitionend', fonction);
            }

            inActiveTab.addEventListener('transitionend', fonction);

            

        } else {

            activeTab.classList.add('active');    
            inActiveTab.classList.remove('active');

        };
            
    };

    for (let i = 0; i < listes.length; i++) {

        listes[i].addEventListener('click', function() {

            afficherOnglet(this)

        });

    };

    let hashChange = function (e) {
        // !a = na pas la class active (dans ce cas)
        // permet de recuperer le href et lors de lactualisation de ne pas perdre la page et rester sur la selection
        let href = window.location.hash;
        let a = document.querySelector('a[href="' + href + '"]');

        if (a !== null && !a.parentNode.classList.contains('active')) {

            afficherOnglet(a, e !== undefined)

        }
    }

    window.addEventListener('hashchange', hashChange);

    hashChange();

})();