enum Role{
  Doctor,
  Engeener,
  Teacher
}
class Avenger {
  nombre: string;
  equipo: string;
  nombreReal: string;
  puedePelear: boolean = false;
  role:Role;
  
  constructor(nombre:string, equipo:string, nombreReal:string, role:Role){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    this.role = role;
  }

  Imprimir(){
    console.log(this.role);
  }
}

let antman:Avenger = new Avenger("Antman", "Avengers","Nicolas Grutts", Role.Doctor);
antman.Imprimir();
