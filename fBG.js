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
            break;
        case "fBGMaquinario":
            $('#total').text(function() {
                return $('#disponivel').text();
            });
            $('.voltar').click(function() {
                window.open("./fBGfabrica.html", "_self");
            });
            $('.menos').click(function() {
                var maq = $(this).parent('div').attr('id');
                var valor = parseFloat($("#" + maq).find('.valor').text().replaceAll('.', '').replaceAll(',', ''));
                var total = parseFloat($('#total').text().replaceAll('.', '').replaceAll(',', ''));
                var qnt = parseInt($("#" + maq).find('#quantidade').text());
                $("#" + maq).find('#quantidade').text(function() {
                    if (qnt > 0) {
                        $('#total').text(function() {
                            return (total + valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                        });
                        return qnt - 1;
                    }
                });
            });
            $('.mais').click(function() {
                var maq = $(this).parent('div').attr('id');
                var qnt = parseInt($("#" + maq).find('#quantidade').text());
                $("#" + maq).find('#quantidade').text(function() {
                    return qnt + 1;
                });
                var valor = parseFloat($("#" + maq).find('.valor').text().replaceAll('.', '').replaceAll(',', ''));
                var total = parseFloat($('#total').text().replaceAll('.', '').replaceAll(',', ''));
                $('#total').text(function() {
                    return total - valor;
                })
            });

            break;
        default:
    }





    $('#voltar4').click(function() {
        window.open("./fBGfabrica.html", "_self");
    });

    $('#grande').click(function() {
        window.open("./fBGfabrica.html", "_self");
    });

    $('#continuar').click(function() {
        window.open("./fBGMaquinario.html", "_self");
    });

});