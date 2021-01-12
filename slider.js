class Slide {
    constructor(id){
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.mainThumb = document.querySelector('.slide-thumb');
        this.active = 0;  //e dime cila eshte aktive
        this.start();
        
    }

    // Metoda që identifikon se cili imazh është aktualisht aktiv
    activeSlide(index){
        this.active = index;
        // Dy rreshtat më poshtë => Heq të gjithë imazhet e pranishme dhe shton vetëm atë aktiv në veçanti -> i dobishëm për kur klikoni te tjetri ose te i mëparshmi
        this.items.forEach(item => item.classList.remove('active')); //zbatohet vetem elem aktiv 
        this.items[index].classList.add('active'); // Shtoni klasen "aktive" ne imazhin specifik

        // selekton te gjitha
        this.allThumbs = document.querySelectorAll('.slide-thumb > *');
        
        // Shtoni klasen aktive qe me navigu me arrows sipas rreshqitesit aktiv.
        this.allThumbs.forEach(item => item.classList.remove('active-thumb')); // Hiqni të gjithë si aktivë dhe më pas zbatojeni vetëm një
        this.allThumbs[index].classList.add('active-thumb');
    }

    prev(){
        //// Do të jetë në gjendje të kthejë një diapozitivë nëse aktivi është më i madh se 0, nëse është i ndryshëm, tregoni artikullin e fundit në grup
        if(this.active > 0) {
            this.activeSlide(this.active - 1);
        } else{
            this.activeSlide(this.items.length - 1);
        }
    }

    next(){
    // Kontrolloni nëse e keni arritur artikullin e fundit në diapozitiv
        if(this.active < this.items.length - 1) { // - 1 pse pozicionet e artikujve në grup fillojnë nga 0. Nëse keni 4 diapozitivë, numëruesi do të rritet vetëm në 3 = 0,1,2,3
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    navButtons(){
        const prevBtn = this.slide.querySelector('.slide-prev');
        prevBtn.addEventListener('click', this.prev);
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next); // Kur një ngjarje kalon brenda një klase direkt në addEventListener, kjo e metodës humbet referencën e saj
    }

    showAlert(indeksi){
        alert('Clique no índice: '+indeksi);
    }

    showThumbs(){
        // Trego gishtat e mëdhenj sipas numrit të artikujve (diapozitivët)
        for(var i = 0; i < this.items.length; i++){
           this.mainThumb.innerHTML += "<div class='thumb'></div>";
        }
    }

    clickThumb(){
        for(let i = 0; i < this.allThumbs.length; i++){
            //// Unë shtova ngjarjen e klikimit në secilin gisht. Klikimi do të thërrasë funksionin activeSlide, duke kaluar pozicionin e elementit që keni klikuar
            this.allThumbs[i].addEventListener('click', () => this.activeSlide(i) );
        }
    }
    
    // Çfarë dua të ngarkoj kur filloj klasën
    start(){
        this.items = this.slide.querySelectorAll('.slide-items > *'); // Përzgjedhja e të gjithë elementeve (artikujve) që ekzistojnë në rrëshqitës
        this.showThumbs();
        this.activeSlide(0);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this); // Kjo për këtë të kësaj metode gjithmonë i referohet objektit të klasës
        this.navButtons();
        this.clickThumb();
    }

}

new Slide('slide');