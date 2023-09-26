export function mascaraMoeda(event: any) {
    const onlyDigits = event.target.value
        .split('')
        .filter((s: any) => /\d/.test(s))
        .join('')
        .padStart(3, '0');
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2);
    event.target.value = maskCurrency(digitsFloat);
}
  
function maskCurrency(valor: any, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
    }).format(valor);
}
