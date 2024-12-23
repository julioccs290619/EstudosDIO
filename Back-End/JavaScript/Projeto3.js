// Definição da classe Heroi
class Heroi {
    // Construtor que inicializa os atributos do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem personalizada
    atacar() {
      let ataque;
      // Define o ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "realizou um ataque básico";
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de utilização da classe
  const heroi1 = new Heroi("Arthas", 25, "guerreiro");
  const heroi2 = new Heroi("Merlin", 150, "mago");
  const heroi3 = new Heroi("Kenshin", 30, "ninja");
  
  // Realizando ataques
  heroi1.atacar(); // Saída: O guerreiro Arthas atacou usando espada
  heroi2.atacar(); // Saída: O mago Merlin atacou usando magia
  heroi3.atacar(); // Saída: O ninja Kenshin atacou usando shuriken