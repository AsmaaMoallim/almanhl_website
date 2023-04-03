<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
    name: 'MainVueComponent',
    data() {
        return {
            classToAnimate: null,
            classToAnimate: 'floatUp',
            options: {
                // root: null,
                // rootMargin: "150px 0px -200px 0px",
            },
            // observer: new IntersectionObserver((entries) => {
            //     entries.forEach((element) => {
            //         element.target.classList.toggle(this.classToAnimate, element.isIntersecting);
            //         // if (element.isIntersecting) {
            //         //     this.observer.unobserve;
            //         // }
            //     }, this.options);
            // })

        };
    },
    methods: {

        // animate(classToObserve) {
        //     const elementList = document.querySelectorAll(classToObserve);
        //     // this.observer.observe(elementList)
        //     // console.log(classToObserve ,this.observer)
        //     elementList.forEach((element) => {
        //         this.observer.observe(element);
        //     });
        // },

    },



}
</script>

<style>
@keyframes floatUp {
    0% {
        transform: translatey(30px);
        opacity: 0;
    }

    100% {
        transform: translatey(0px);
        opacity: 1;
    }
}
</style>


