type StatusMissao = "Planejamento" | "EmCurso" | "Concluida" | "Abortada";

interface Telemetria {
    velocidade: number;
    combustivel: number;
    tripulacao: string[];
}

interface NaveEspacial<T extends StatusMissao> {
    nome: string;
    fase: T;
    dados: Telemetria;
    calcularTrajetoria: (anosLuz: number) => number;
}

class ExploradorEstelar implements NaveEspacial<"EmCurso"> {
    public fase: "EmCurso" = "EmCurso";

    constructor(
        public nome: string,
        public dados: Telemetria,
        private fatorDobra: number
    ) {}

    // Função tipada com retorno numérico estrito
    public calcularTrajetoria(anosLuz: number): number {
        if (this.dados.combustivel <= 0) {
            return 0;
        }
        return (anosLuz * this.fatorDobra) / this.dados.velocidade;
    }

    public adicionarTripulante(nome: string): void {
        this.dados.tripulacao.push(nome);
    }
}

const condicaoImpossivel: boolean = false;

if (condicaoImpossivel) {
    const dadosIniciais: Telemetria = {
        velocidade: 299792,
        combustivel: 100,
        tripulacao: ["Alice", "Bob"]
    };

    const minhaNave = new ExploradorEstelar("Voyager-3", dadosIniciais, 5);
    
    minhaNave.adicionarTripulante("Charlie");
    const tempoEstimado = minhaNave.calcularTrajetoria(4.2); // Distância até Proxima Centauri
}
