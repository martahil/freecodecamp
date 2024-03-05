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
            /*marginRigth: '24px',
            paddingRighth: '25px',
            paddingLeft: '24px',
            paddingTop: '12px',
            paddingBottom: '12px',*/
            // width: '440px',
            // zIndex: '3',
            // position: 'relative'
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
            /*paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            // width: '440px',
            zIndex: '3',
            position: 'relative'*/
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
            /*paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            // width: '440px',
            zIndex: '3',
            position: 'relative'*/
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
            /*paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            // width: '440px',
            zIndex: '3',
            position: 'relative'*/
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
            /*paddingRigth: '12px',
            paddingLeft: '24px',
            paddingTop: '10px',
            paddingBottom: '10px',
            // width: '440px',
            zIndex: '3',
            position: 'relative'*/
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


