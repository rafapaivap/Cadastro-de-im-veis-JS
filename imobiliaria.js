const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao cadastro de imóveis\n" +
        "Total de imóveis:" + imoveis.length +
        "\n\n Escolha uma opção:\n1. Novo imóvel" +
        "\n2. Listar imóveis" +
        "\n3. Sair" 
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt('Informe nome do proprietário:')
            imovel.quartos = prompt('Qtd de quartos:')
            imovel.banheiros = prompt('Qtd de banheiros:')
            imovel.garagem = prompt('Possui garagem: (Sim/Não)')

            const confirmacao = confirm(
                'Salvar este imóvel?\n' +
                '\nProprietário: ' + imovel.proprietario +
                '\nQuartos: ' + imovel.quartos + 
                '\nBanheiros: ' + imovel.banheiros +
                '\nGaragem: ' + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso')
            } else {
                alert('Voltando ao menu principal.')
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    'Imóvel ' + (i + 1) +
                    '\nProprietário: ' + imoveis[i].proprietario +
                    '\nQuartos: ' + imoveis[i].quartos +
                    '\nBanheiros: ' + imoveis[i].banheiros +
                    '\nGaragem: ' + imoveis[i].garagem  
                )
            }
            break

        case "3":
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida')
    }
} while (opcao !== "3")