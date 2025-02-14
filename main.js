// Code Question 1
// Entrambi i console.log stamperanno 'Double Cheese Burger'.
// E' stato creato un solo oggetto.

// Code Question 2
// Entrambi i console.log stamperanno "Salad".
// Sono stati creati due oggetti.

// Code Question 3
// Sono stati creati 3 oggetti.

// Code Question 4
// Per clonare l'oggetto chef, la scelta migliore è utilizzare lo spread(...), in quanto non ci sono oggetti annidati (che non verrebero copiati), ma invece è presente una funzione, che invece verrà copiata.
// Per clonare l'oggetto restaurant, la scelta migliore è utilizzare structuredClone(), per poter copiare correttamente anche l'oggetto annidato (address), e, al contrario di JSON.parse(JSON.stringify()), structuredClone() manterrebbe il valore di openingDate nel formato corretto.
