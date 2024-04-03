document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.mainContent');
    const scrollAmount = 350;

    document.querySelector('.arrow.left').addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    document.querySelector('.arrow.right').addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

function expandirTexto1() {
    var texto = document.getElementById('textoEscondido1');
    var learnMoreTxt = document.getElementById('learnMoreTxt1')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });

        if (document.getElementById("plusCircle1").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle1").src = "Images/minusCircle.png";
        }

    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';
        document.getElementById("plusCircle1").src = "Images/plusCircle.png";
    }
}

function expandirTexto2() {
    var texto = document.getElementById('textoEscondido2');
    var learnMoreTxt = document.getElementById('learnMoreTxt2')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });

        if (document.getElementById("plusCircle2").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle2").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle2").src = "Images/plusCircle.png";
    }
}

function expandirTexto3() {
    var texto = document.getElementById('textoEscondido3');
    var learnMoreTxt = document.getElementById('learnMoreTxt3')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });

        if (document.getElementById("plusCircle3").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle3").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle3").src = "Images/plusCircle.png";
    }
}

function expandirTexto4() {
    var texto = document.getElementById('textoEscondido4');
    var learnMoreTxt = document.getElementById('learnMoreTxt4')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });

        if (document.getElementById("plusCircle4").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle4").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle4").src = "Images/plusCircle.png";
    }
}

function expandirTexto5() {
    var texto = document.getElementById('textoEscondido5');
    var learnMoreTxt = document.getElementById('learnMoreTxt5')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle5").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle5").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle5").src = "Images/plusCircle.png";
    }
}

function expandirTexto6() {
    var texto = document.getElementById('textoEscondido6');
    var learnMoreTxt = document.getElementById('learnMoreTxt6')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle6").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle6").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle6").src = "Images/plusCircle.png";
    }
}

function expandirTexto7() {
    var texto = document.getElementById('textoEscondido7');
    var learnMoreTxt = document.getElementById('learnMoreTxt7')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle7").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle7").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle7").src = "Images/plusCircle.png";
    }
}

function expandirTexto8() {
    var texto = document.getElementById('textoEscondido8');
    var learnMoreTxt = document.getElementById('learnMoreTxt8')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });

        if (document.getElementById("plusCircle8").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle8").src = "Images/minusCircle.png";
        }

    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';
        document.getElementById("plusCircle8").src = "Images/plusCircle.png";
    }
}

function expandirTexto9() {
    var texto = document.getElementById('textoEscondido9');
    var learnMoreTxt = document.getElementById('learnMoreTxt9')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle9").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle9").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle9").src = "Images/plusCircle.png";
    }
}

function expandirTexto10() {
    var texto = document.getElementById('textoEscondido10');
    var learnMoreTxt = document.getElementById('learnMoreTxt10')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle10").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle10").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle10").src = "Images/plusCircle.png";
    }
}

function expandirTexto11() {
    var texto = document.getElementById('textoEscondido11');
    var learnMoreTxt = document.getElementById('learnMoreTxt11')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle11").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle11").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle11").src = "Images/plusCircle.png";
    }
}

function expandirTexto12() {
    var texto = document.getElementById('textoEscondido12');
    var learnMoreTxt = document.getElementById('learnMoreTxt12')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle12").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle12").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle12").src = "Images/plusCircle.png";
    }
}

function expandirTexto13() {
    var texto = document.getElementById('textoEscondido13');
    var learnMoreTxt = document.getElementById('learnMoreTxt13')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle13").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle13").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle13").src = "Images/plusCircle.png";
    }
}

function expandirTexto14() {
    var texto = document.getElementById('textoEscondido14');
    var learnMoreTxt = document.getElementById('learnMoreTxt14')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle14").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle14").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle14").src = "Images/plusCircle.png";
    }
}

function expandirTexto15() {
    var texto = document.getElementById('textoEscondido15');
    var learnMoreTxt = document.getElementById('learnMoreTxt15')

    if (texto.style.display === 'none' || texto.style.display === '') {
        texto.style.display = 'block';

        /*learnMoreTxt.style.backgroundColor = '#040404';
        learnMoreTxt.style.borderRadius = '12px';
        learnMoreTxt.style.padding = '12px';
        learnMoreTxt.style.width = '220px';
        learnMoreTxt.style.zIndex = '3';
        learnMoreTxt.style.position = "relative";*/

        Object.assign(learnMoreTxt.style, {
            backgroundColor: '#040404',
            borderRadius: '12px',
            paddingRight: '24px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: '3',
            position: 'relative'
        });
        
        if (document.getElementById("plusCircle15").src = "Images/plusCircle.png") {
            document.getElementById("plusCircle15").src = "Images/minusCircle.png";
        }
    } else {
        texto.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';

        document.getElementById("plusCircle15").src = "Images/plusCircle.png";
    }
}
