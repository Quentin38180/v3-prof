let angle = 90
let angle_min = 45
let angle_max = 125
let pas = 2
let pause_ms = 20
let etat_affichage = ""
servos.P1.setAngle(angle)
function afficher_si_changement(nouvel_etat: string) {
    
    if (nouvel_etat != etat_affichage) {
        etat_affichage = nouvel_etat
        if (nouvel_etat == "monte") {
            basic.showArrow(ArrowNames.North)
        } else if (nouvel_etat == "descend") {
            basic.showArrow(ArrowNames.South)
        } else {
            basic.clearScreen()
        }
        
    }
    
}

basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        afficher_si_changement("monte")
        angle = angle + pas
        if (angle > angle_max) {
            angle = angle_max
        }
        
        servos.P1.setAngle(angle)
        basic.pause(pause_ms)
    } else if (input.buttonIsPressed(Button.B)) {
        afficher_si_changement("descend")
        angle = angle - pas
        if (angle < angle_min) {
            angle = angle_min
        }
        
        servos.P1.setAngle(angle)
        basic.pause(pause_ms)
    } else {
        afficher_si_changement("'stop")
        basic.pause(20)
    }
    
})
