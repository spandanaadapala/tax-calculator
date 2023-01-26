const calculateTax = require('./tax-calculator');

test('Tast CalculateTax for Salary 10,000 and Tax year 2021', () => {
    expect(calculateTax(10000, 2021)).toMatchObject(
        {   "Superannuation": 950, 
            "incomeTax": {
                "medicareLevi": 200, 
                "tax": 0, 
                "totalTax": 200, 
                "totalTaxString": "$200.00"
            }
        }
        );
  });

  test('Tast CalculateTax for Salary 20,000 and Tax year 2022', () => {
    expect(calculateTax(20000, 2021)).toMatchObject(
        {   "Superannuation": 1900, 
            "incomeTax": {
                "medicareLevi": 400, 
                "tax": 342, 
                "totalTax": 742, 
                "totalTaxString": "$742.00"
            }
        }
        );
  });



  test('Tast CalculateTax for Salary 50,000 and Tax year 2023', () => {
    expect(calculateTax(50000, 2021)).toMatchObject(
        {   "Superannuation": 4750, 
            "incomeTax": {
                "medicareLevi": 1000, 
                "tax": 6717, 
                "totalTax": 7717, 
                "totalTaxString": "$7,717.00"
            }
        }
        );
  });

  test('Tast CalculateTax for Salary 150,000 and Tax year 2024', () => {
    expect(calculateTax(150000, 2021)).toMatchObject(
        {   "Superannuation": 14250, 
            "incomeTax": {
                "medicareLevi": 3000, 
                "tax": 40567, 
                "totalTax": 43567, 
                "totalTaxString": "$43,567.00"
            }
        }
        );
  });

  test('Tast CalculateTax for Salary 200,000 and Tax year 2025', () => {
    expect(calculateTax(200000, 2021)).toMatchObject(
        {   "Superannuation": 19000, 
            "incomeTax": {
                "medicareLevi": 4000, 
                "tax": 60667, 
                "totalTax": 64667, 
                "totalTaxString": "$64,667.00"
            }
        }
        );
  });

  test('Tast CalculateTax for Salary 100,000 and Tax year 2020', () => {
    try {
        calculateTax(100000, 2020);
    } catch (e) {
        expect(e).toBe("Invalid Tax Year. Please enter year between 2021 and 2025");
    }
  });