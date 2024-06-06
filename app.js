class Contador{

    static cuentaGlobal = 0

    constructor(responsable){
        this.responsable = responsable
        this.cuentaIndividual = 0
    }
    obtenerResponsable(){
        return thius.responsable
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual

    }

    static obtenerCuentaglobal(){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        this.cuentaGlobal++
    }


}

