document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function () {
        const faturamento = parseFloat(document.getElementById('faturamento').value);
        const ifoodMachine = document.getElementById('ifoodMachine').checked;
        const freeDelivery = document.getElementById('freeDelivery').checked;
        const subsidy = parseFloat(document.getElementById('subsidy').value);

        let ifoodExpense = 0;
        let yourModelExpense = 0;

        // Cálculo da despesa com iFood Full Service
        ifoodExpense = faturamento * 0.27;
        if (ifoodMachine) {
            ifoodExpense += faturamento * 0.03;
        }
        if (freeDelivery) {
            ifoodExpense += faturamento * 0.03;
        }

        // Cálculo da despesa com seu modelo
        yourModelExpense = faturamento * 0.15;

        // Apresenta os resultados na interface
        document.getElementById('ifoodExpense').textContent = ifoodExpense.toFixed(2);
        document.getElementById('yourModelExpense').textContent = yourModelExpense.toFixed(2);
    });
});
