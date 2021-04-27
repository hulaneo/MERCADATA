$(document).ready(function() {
    var x = document.getElementsByClassName("pagina");
    switch (x[0].id) {
        case "fBGLogIn":
            $('#entrar').click(function() {
                window.open("./fBGSecondMenu.html", "_self");
            });
            break;
        case "fBGSecondMenu":
            $('#entrar').click(function() {
                window.open("./fBGSelecaoFabrica.html", "_self");
            });
            $('.voltar').click(function() {
                window.open("./fBGLogIn.html", "_self");
            });
            break;
        case "fBGSelecaoFabrica":
            $('.voltar').click(function() {
                window.open("./fBGSecondMenu.html", "_self");
            });
            break;
        case "fBGfabrica":
            $('.voltar').click(function() {
                window.open("./fBGSelecaoFabrica.html", "_self");
            });
            $('#continuar').click(function() {
                window.open("./fBGMaquinario.html", "_self");
            });
            break;
        case "fBGMaquinario":
            $('#disponivel').text(function() {
                return parseInt($('#disponivel').attr('value')).toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
            })
            $('#total').text(function() {
                return parseInt($('#total').attr('value')).toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
            })
            $('.voltar').click(function() {
                window.open("./fBGfabrica.html", "_self");
            });
            $('.menos').click(function() {
                var maq = $(this).parent('div').attr('id');
                var qnt = parseInt($("#" + maq).find('#quantidade').text());
                var valor = parseInt($("#" + maq).find('.valor').text().replaceAll('.', '').replaceAll(',', '').slice(0, -2));
                var total = parseInt($('#total').attr('value'));
                var valorTotal = parseFloat(total - valor);
                $("#" + maq).find('#quantidade').text(function() {
                    if (qnt > 0) {
                        $('#total').text(function() {
                            return valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
                        });
                        $('#total').attr('value', valorTotal)
                        negPos();
                        return qnt - 1;
                    }
                });
            });
            $('.mais').click(function() {
                var maq = $(this).parent('div').attr('id');
                var qnt = parseInt($("#" + maq).find('#quantidade').text());
                var valor = parseInt($("#" + maq).find('.valor').text().replaceAll('.', '').replaceAll(',', '').slice(0, -2));
                var total = parseInt($('#total').attr('value'));
                var valorTotal = parseFloat(total + valor);
                $("#" + maq).find('#quantidade').text(function() {
                    return qnt + 1;
                });
                $('#total').text(function() {
                    return valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
                })
                $('#total').attr('value', valorTotal)
                negPos();
            });


            function negPos() {
                if (parseInt($('#total').attr('value')) <= parseInt($('#disponivel').attr('value'))) {
                    return $('#total').attr('class', 'centro positivo')
                } else {
                    return $('#total').attr('class', 'centro negativo')
                }
            }

            break;
        default:
    }
});