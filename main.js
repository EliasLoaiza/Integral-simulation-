    //Se toma informacion del documento HTML
    var btn = document.getElementById('buttonClick');
    var par = document.getElementById('response');
    btn.addEventListener('click', function Simulacion(){
        //Limites superior e inferior
        let lim_sup = 4; //(Se coloca un poco mas, ya que al hacer la funcion, excluye el primero)
        let lim_inf = 2;
        //Resultado matematico de la integral
        const resul_inte = 24;
        //Peticion de cantidad de experimentos
        let num_expe = Number(document.getElementById('txtExperimento').value);
        //Variables para verificar probabilidad 
        let correcto = 0;
        let incorrecto = 0;
        //Inicializacion para la sumatoria
        let Sumatoria = 0;
        for(i = 0; i < num_expe; i++){
            let random = Math.random() * (lim_sup - lim_inf) + lim_inf;
            Sumatoria = Sumatoria + ((3*random)**2) + (2*random);
            console.log(random);
            console.log(Sumatoria);
            if (Sumatoria === 24){
                correcto++;
            }
            else{
                incorrecto++;
            }
        }
        let resultado = (lim_sup-lim_inf)*Sumatoria/num_expe;
        const prob = Math.round((((correcto / num_expe) * 100) + Number.EPSILON) * 100) / 100;
        par.innerHTML = `
            Numero de experimentos realizados:  ${num_expe} <br>
            Resultado Matematico de la integral:  ${resul_inte} <br>
            Resultado dado por el Metodo de Monte Carlo:  ${resultado} <br>
            Numeros de Intentos Logrados por el Metodo de Monte Carlo:  ${correcto} <br>
            Numeros de Intentos Fallidos por el Metodo de Monte Carlo:  ${incorrecto} <br>
            Probabilidad de exito:  ${prob}%`;
    })