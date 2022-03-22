function calculaSalario(qtdeCarrosVendidos, valorTotalVendas){
    let comissaoDasVendas = qtdeCarrosVendido *100 + valorTotalVendas * 0,05
    let salarioComComissao = 2000 + comissaoDasVendas

    return salarioComComissao
}