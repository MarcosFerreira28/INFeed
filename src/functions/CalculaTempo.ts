export default function CalculaTempo(dataPostagem: string): string {
    const horaPostagem = new Date(dataPostagem);
    const agora = new Date();
    const hora = Math.floor((agora.getTime() - horaPostagem.getTime()) / 1000 / 60 / 60);
    let tempo = "";
    if (hora < 1){
        tempo = "menos de 1h";
    }else if (hora < 24) {
        tempo = `${hora}h`;
    }else {
        tempo = `${Math.floor(hora / 24)}d`;
    }
    return tempo;
}