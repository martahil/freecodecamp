var postController;

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

function showTxt1() {
    postController = 1;
    showInfo();
}

function showTxt2() {
    postController = 2;
    showInfo();
}

function showTxt3() {
    postController = 3;
    showInfo();
}

function showTxt4() {
    postController = 4;
    showInfo();
}

function showTxt5() {
    postController = 5;
    showInfo();
}

function showTxt6() {
    postController = 6;
    showInfo();
}

function showTxt7() {
    postController = 7;
    showInfo();
}

function showTxt8() {
    postController = 8;
    showInfo();
}

function showTxt9() {
    postController = 9;
    showInfo();
}

function showTxt10() {
    postController = 10;
    showInfo();
}

function showTxt11() {
    postController = 11;
    showInfo();
}

function showTxt12() {
    postController = 12;
    showInfo();
}

function showTxt13() {
    postController = 13;
    showInfo();
}

function showTxt14() {
    postController = 14;
    showInfo();
}

function showTxt15() {
    postController = 15;
    showInfo();
}

function showTxt16() {
    postController = 16;
    showInfo();
}

function showTxt17() {
    postController = 17;
    showInfo();
}

function showTxt18() {
    postController = 18;
    showInfo();
}

function showTxt19() {
    postController = 19;
    showInfo();
}

function showTxt20() {
    postController = 20;
    showInfo();
}

function showTxt21() {
    postController = 21;
    showInfo();
}

function showInfo() {
    var text = document.getElementById(`hiddenTxt${postController}`);
    var learnMoreTxt = document.getElementById(`learnMoreTxt${postController}`);

    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';

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

        if (document.getElementById(`plusCircle${postController}`).src = "Images/plusCircle.png") {
            document.getElementById(`plusCircle${postController}`).src = "Images/minusCircle.png";
        }

    } else {
        text.style.display = 'none';
        learnMoreTxt.style.backgroundColor = '#262626';
        document.getElementById(`plusCircle${postController}`).src = "Images/plusCircle.png";
    }

}