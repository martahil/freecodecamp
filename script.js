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
            paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '440px',
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
            paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '440px',
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
            paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '440px',
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


