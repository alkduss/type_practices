"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Engeener"] = 1] = "Engeener";
    Role[Role["Teacher"] = 2] = "Teacher";
})(Role || (Role = {}));
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal, role) {
        this.puedePelear = false;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.role = role;
    }
    Avenger.prototype.Imprimir = function () {
        console.log(this.role);
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "Avengers", "Nicolas Grutts", Role.Doctor);
antman.Imprimir();
