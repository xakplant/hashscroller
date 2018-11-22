var hashScroller = function (obj) {
    this.bs = obj.hash;
    this.b = document.querySelector('a[href*="'+ this.bs +'"]');
    var hs = this;
    this.b.addEventListener('click', function(event){
        if(event.target.pathname === window.location.pathname){
            event.preventDefault();
            window.scrollTo({
                top: document.getElementById(hs.bs).offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
    window.addEventListener('load', function(event){
        if(document.getElementById(window.location.hash.replace('#', '')) !== null){
            var offset = document.getElementById(window.location.hash.replace('#', '')).offsetTop;
            if(offset !== null){
                window.scrollTo({
                    top: offset - 80,
                    behavior: "smooth"
                });
            }
        }

    });
    window.addEventListener('hashchange', function(event){
        if(document.getElementById(window.location.hash.replace('#', '')) !== null){
            var offset = document.getElementById(window.location.hash.replace('#', '')).offsetTop;
            if(offset !== null){
                window.scrollTo({
                    top: offset - 80,
                    behavior: "smooth"
                });
            }
        }
    });

};
