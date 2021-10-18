    //Declaração dos objetos da tabela
    var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
    var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
    var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
    var Moisés = { nome: "Moisés", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

    // Função para calcular os pontos
    function calculaPontos(jogador) {
        var pontos = jogador.vitorias * 3 + jogador.empates;
        return pontos;
    }

        rafa.pontos = calculaPontos(rafa);
        paulo.pontos = calculaPontos(paulo);
        gui.pontos = calculaPontos(gui);
        Moisés.pontos = calculaPontos(Moisés);

    var jogadores = [rafa, paulo, gui, Moisés];
    //Função que exibe automáticamente os jogadores na tela
    function exibeJogadoresNaTela(jogadores) {
        var elemento = "";
            for (var i = 0; i < jogadores.length; i++) {
                elemento += "<tr><td>" + jogadores[i].nome + "</td>";
                elemento += "<td>" + jogadores[i].vitorias + "</td>";
                elemento += "<td>" + jogadores[i].empates + "</td>";
                elemento += "<td>" + jogadores[i].derrotas + "</td>";
                elemento += "<td>" + jogadores[i].pontos + "</td>";
                elemento +="<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
                elemento +="<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
                elemento +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
                elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
    }

    exibeJogadoresNaTela(jogadores);

    //Função para adicionar Vitória
    function adicionarVitoria(i) {
        var jogador = jogadores[i];
        jogador.vitorias++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
    }

     //Função para adicionar Empate
     function adicionarEmpate(i) {
        var jogador = jogadores[i];
        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
    }

    //Função para adicionar Derrota
    function adicionarDerrota(i) {
        var jogador = jogadores[i];
        jogador.derrotas++;
        exibeJogadoresNaTela(jogadores);
    }
    