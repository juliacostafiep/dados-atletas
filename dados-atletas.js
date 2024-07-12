class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome=nome;
        this.idade=idade;
        this.peso=peso;
        this.altura=altura;
        this.notas=notas;
    }
    calculaCategoria(){
        if(11>=this.idade && this.idade>=9){
            return "Categoria: Infantil";
        }else if(13>=this.idade && this.idade>=12){
            return "Categoria: Juvenil";
        }else if(15>=this.idade && this.idade>=14){
            return "Categoria: Intermediário";
        }else if(30>=this.idade && this.idade>=16){
            return "Categoria: Adulto";
        }else if(this.idade>30 && this.idade<9){
            return "Categoria: Sem categoria";
        }
    }
    calculaIMC(){
        let imc=this.peso/(this.altura*this.altura);
        return `IMC: ${imc}`
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`;
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`;
    }
    obtemAlturaAtleta(){
        return `Idade: ${this.altura}`;
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`;
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`;
    }
    obtemMediaValida(){
        let nota=this.notas.map(function(n){
            return n;
        });
        nota=nota.sort(function (a, b) {
            return a - b;
        });
        let novo=nota.slice(1,4);
        let soma=0;
        novo.forEach(function(n){
            soma=soma+n;
        })
        let media=soma/novo.length;
        return `Média válida: ${media}`;

        }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.calculaCategoria());
console.log(atleta.calculaIMC());
console.log(atleta.obtemMediaValida());
