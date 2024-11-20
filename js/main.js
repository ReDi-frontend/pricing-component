const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment"]');
const elsPrisingPlanValue = document.querySelectorAll('.plan-currency-value');


elsPaymentPeriodRadio.forEach(el => {
    el.addEventListener('change', () => {
        const period = el.value;
        if (period === 'monthly') {
            elsPrisingPlanValue.forEach( function (elPrise){
                elPrise.textContent = elPrise.closest('.prising-plan').dataset.monthly;
            });
        }
        else if (period === 'annually') {
            elsPrisingPlanValue.forEach( function (elPrise){
                elPrise.textContent = elPrise.closest('.prising-plan').dataset.annually;
            });
        }
    });
})
