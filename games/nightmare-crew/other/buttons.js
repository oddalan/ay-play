function getButton( button ){ 
    addEventListener("keydown", (event) => {
        if (button === event.key){
            return true
        }
    })
}
export {getButton}