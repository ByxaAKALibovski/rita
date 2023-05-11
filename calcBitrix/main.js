window.addEventListener('load', function(){
    let el = document.querySelectorAll('.calc__hover');
    let flagVersia = false;
    let flagTarif = false;

    for(let i = 0; i < el.length; i++){
        el[i].onclick = function(){
            if(el[i].hasAttribute('data-versia')){
                if(flagVersia && el[i].getAttribute('data-veria') == 1){
                    document.querySelector('.tarif__body').innerHTML = `
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="1">
                                <p class="fs-14 fw-400">
                                    Бесплатный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/infinity.png" alt="Пользователей">
                                            <img src="media/infinityW.png" alt="Пользователей">
                                        </div>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            5
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    Бесплатно
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="2">
                                <p class="fs-14 fw-400">
                                    Базовый
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            5
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-5">
                                            24
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    2 490 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="3">
                                <p class="fs-14 fw-400">
                                    Стандартный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            50
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            100
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    6 990 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="4">
                                <p class="fs-14 fw-400">
                                    Профессиональный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            100
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            1 024
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    13 990 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                    `;
                }
                if(flagVersia && el[i].getAttribute('data-veria') == 2){
                    document.querySelector('.tarif__body').innerHTML = `
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="1">
                                <p class="fs-14 fw-400">
                                    Бесплатный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/infinity.png" alt="Пользователей">
                                            <img src="media/infinityW.png" alt="Пользователей">
                                        </div>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            5
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    Бесплатно
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="2">
                                <p class="fs-14 fw-400">
                                    Базовый
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            5
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-5">
                                            24
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    2 490 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="3">
                                <p class="fs-14 fw-400">
                                    Стандартный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            50
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            100
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    6 990 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                        <div class="calc__card">
                            <div class="calc-c__body calc__hover pointer" data-tarif="4">
                                <p class="fs-14 fw-400">
                                    Профессиональный
                                </p>
                                <div class="w-100 d-f j-sa">
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            100
                                        </p>
                                        <div class="img__block m-2">
                                            <img class="img__b" src="media/personal.png" alt="Пользователей">
                                            <img src="media/personalW.png" alt="Пользователей">
                                        </div>
                                    </div>
                                    <div class="d-f a-c">
                                        <p class="fs-16 fw-500 p-2">
                                            1 024
                                        </p>
                                        <p class="fs-16 fw-500 p-2">
                                            Гб
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-c__title w-100 d-f j-c">
                                <p class="fw-600 fs-18">
                                    13 990 <span class="fs-16 fw-500">₽/мес.</span>
                                </p>
                            </div>
                        </div>
                    `;
                }
                if (flagVersia){
                    for(let j = 0; j < el[i].classList.length; j++){
                        if (el[i].classList[j] == 'calc__select'){
                            el[i].classList.remove('calc__select');
                            flagVersia = false;
                            return;
                        }
                    }

                    let dV = document.querySelectorAll('.calc__hover[data-versia]');

                    for (let q = 0; q < dV.length; q++){
                        for(let d = 0; d < dV[q].classList.length; d++){
                            if (dV[q].classList[d] == 'calc__select'){
                                dV[q].classList.remove('calc__select');
                            }
                        }
                    }
                }
                flagVersia = true;
            }
            if(el[i].hasAttribute('data-tarif')){
                if (flagTarif){
                    for(let j = 0; j < el[i].classList.length; j++){
                        if (el[i].classList[j] == 'calc__select'){
                            el[i].classList.remove('calc__select');
                            flagTarif = false;
                            return;
                        }
                    }

                    let dT = document.querySelectorAll('.calc__hover[data-tarif]');

                    for (let q = 0; q < dT.length; q++){
                        for(let d = 0; d < dT[q].classList.length; d++){
                            if (dT[q].classList[d] == 'calc__select'){
                                dT[q].classList.remove('calc__select');
                            }
                        }
                    }
                }
                flagTarif = true;
            }
            for(let j = 0; j < el[i].classList.length; j++){
                if (el[i].classList[j] == 'calc__select'){
                    el[i].classList.remove('calc__select');
                    return;
                }
            }
            el[i].classList.add('calc__select');
        }
    }
});