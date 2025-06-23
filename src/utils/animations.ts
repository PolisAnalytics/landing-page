export const fadeUp ={
    initial: {
        opacity:0,
        y:15
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            childrenDelay:0.3
        }
    }

}
export const variant = {
    initial :{
        opacity:0,
    },
    animate: {
        opacity:1,
        transition: {
            staggerChildren: 0.3,
            // delayChildren: 0.3
        }
    }
}