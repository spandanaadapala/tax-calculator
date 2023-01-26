
const getTaxRates = () => {
    return  [
        {min:0, max:18200, rate:0},
        {min:18200, max:45000, rate:19},
        {min:45000, max:120000, rate:32.5},
        {min:120000, max:180000, rate:37 },
        {min:180000 , max:10000000, rate:45 },
    ];
}

const getSuperRate = (year) => {
    const superData = [
        { "year": 2021, "super": 9.5 },
        { "year": 2022, "super": 10 },
        { "year": 2023, "super": 10.5 },
        { "year": 2024, "super": 11 },
        { "year": 2025, "super": 11.5 },
        { "year": 2026, "super": 12 },
    ];
    return superData.find(data => data.year === year);
}

const calculateTax = (salary, year) =>{

    if(year < 2021 || year > 2025){
        throw "Invalid Tax Year. Please enter year between 2021 and 2025"
    }

    let tax = 0;
    getTaxRates().forEach(taxRate => {
        if(salary > taxRate.max){
            tax+=  Math.round((taxRate.max - taxRate.min) * taxRate.rate) /100 ;
        }else if(salary >= taxRate.min){
            tax+= Math.round(((salary - taxRate.min) * taxRate.rate))/100
        }
    })

    const Superannuation =   Math.round(salary * getSuperRate(year).super)/100
    const medicareLevi =  Math.round(salary*2)/ 100;

    const totalTaxString=  (tax+ medicareLevi).toLocaleString('en-AU', {
        style: 'currency',
        currency: 'AUD',
    });

    return {
        "incomeTax": {
            tax,
            medicareLevi,
            totalTax: tax+ medicareLevi,
            totalTaxString
        },
        Superannuation
    };
}

module.exports = calculateTax;
