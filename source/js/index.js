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

        });

    };

    let contents = document.querySelectorAll('.tabs--content div');

 

})();