angle = 90
angle_min = 45
angle_max = 125
pas = 2
pause_ms = 20
etat_affichage = ""

servos.P1.set_angle(angle)

def afficher_si_changement(nouvel_etat):
    global etat_affichage
    if nouvel_etat != etat_affichage:
        etat_affichage = nouvel_etat

        if nouvel_etat == "monte":
            basic.show_arrow(ArrowNames.NORTH)
        elif nouvel_etat == "descend":
            basic.show_arrow(ArrowNames.SOUTH)
        else:
            basic.clear_screen()

def on_forever():
    global angle

    if input.button_is_pressed(Button.A):
        afficher_si_changement("monte")
    
        angle = angle + pas
        if angle > angle_max:
            angle = angle_max
        servos.P1.set_angle(angle)
        basic.pause(pause_ms)

    elif input.button_is_pressed(Button.B):
        afficher_si_changement("descend")

        angle = angle - pas
        if angle < angle_min:
            angle = angle_min
        servos.P1.set_angle(angle)
        basic.pause(pause_ms)
    else:
        afficher_si_changement("'stop")
        basic.pause(20)

basic.forever(on_forever)