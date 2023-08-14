function formatNumberWithThousandsSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculateInvestment(rowNumber, multiplier = 60) {
    const impressionsInput = document.getElementById(`impressions${rowNumber}`);
    const investmentInput = document.getElementById(`investment${rowNumber}`);

    const impressionsValue = parseFloat(impressionsInput.value.replace(/\./g, '').replace(',', '.'));
    if (isNaN(impressionsValue)) {
        investmentInput.value = "0.00";
    } else {
        const investmentValue = impressionsValue * multiplier;
        impressionsInput.value = formatNumberWithThousandsSeparator(impressionsValue.toFixed(0));
        investmentInput.value = `R$: ${formatNumberWithThousandsSeparator(investmentValue.toFixed(2))}`;
    }
}

// Calculate all investments when the page loads
window.onload = function () {
    calculateInvestment(1);
    calculateInvestment(2);
    calculateInvestment(3, 200);
    calculateInvestment(4, 150);
    calculateInvestment(5);
    calculateInvestment(6);
    calculateInvestment(7, 200);
    calculateInvestment(8, 150);
};
