const parent = document.querySelector('.contact-wrapper')

function contactUs() {
    parent.style.display = 'flex'
}

const elm = document.querySelector('.contact-wrapper .close')
elm.addEventListener('click', function () {
    parent.style.display = 'none'
})



function locationMap() {
    const city = {
        marrakesh: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13588.231844374504!2d-8.021693223700993!3d31.632263371155474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d931f3209%3A0x96ce34d39325c762!2sGueliz%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1650519856987!5m2!1sen!2sma",
        casablanca: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26588.63008744103!2d-7.692857781120008!3d33.59028476644086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3118fa69c5f%3A0x22a7e428b3c1eb2d!2sAin%20Diab%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1650520899143!5m2!1sen!2sma",
        rabat: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26474.394638546575!2d-6.891002830483255!3d33.959145106267854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7132b7118bfbd%3A0x2f9cad14202306ec!2sHay%20Riad%2C%20Rabat!5e0!3m2!1sen!2sma!4v1650523558848!5m2!1sen!2sma",
        tanger: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6473.0193294207065!2d-5.822910225535854!3d35.78741932384786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c78b2396efd55%3A0x6c6828b31b52f49b!2sMarshan%2C%20Tangier!5e0!3m2!1sen!2sma!4v1650521339582!5m2!1sen!2sma"
    }
    
    const [...items] = document.querySelectorAll('.box')
    const iframe = document.querySelector('#map')

    items.forEach((elm, ind, arr) => {
        elm.addEventListener('click', function () {

            for (let i = 0; i < arr.length; ++i) {
                arr[i].classList.remove('location-active')
            }
            this.classList.add('location-active')
            
            const cityName = this.attributes.city_name.value
            
            iframe.src = city[cityName]
        })
    })
}

locationMap()


const parent2 = document.querySelector('.location-wrapper')

function locationToggle() {
    parent2.style.display = 'flex'
}

function close() {
    const elm = document.querySelector('.location-wrapper .close')
    elm.addEventListener('click', function () {
        parent2.style.display = 'none'
    })
}
close()

function animate() {
    function e(e) {
        for (var t = []; e;) t.unshift(e), e = e.parentNode;
        for (let e = 0; e < t.length; e++)
            if ("avoid2" == t[e].className) return !0
    }

    function t(e, t) {
        e.getBoundingClientRect().top <= window.innerHeight && (e.classList.add(t), "P" == e.tagName && setTimeout(() => {
            e.style.visibility = "visible"
        }, 1e3)), e.getBoundingClientRect().top >= window.innerHeight && ("P" == e.tagName && (e.style.visibility = "hidden"), e.classList.remove(t))
    }
    const [...n] = document.querySelectorAll("*");
    window.addEventListener("scroll", function() {
        for (let i = 0; i < n.length; ++i)
            if (!e(n[i])) {
                if ("P" === n[i].tagName) {
                    t(n[i], "animateAll");
                    continue
                }
                if ("H1" === n[i].tagName || "H2" === n[i].tagName || "H3" === n[i].tagName) {
                    t(n[i], "animateH1");
                    continue
                }
                if ("IMG" === n[i].tagName) {
                    t(n[i], "animateIMG");
                    continue
                }
            }
    })
}
animate()