 
describe('Pruebas automatizadas en Cypress', () => {
    
     
    it("Validar página de inicio", () => {
      cy.visit("http://opencart.abstracta.us") 
      cy.title().should('include', 'Your Store')
    })

    it('Ir a Phones & PDAs', () => {
      cy.visit("http://opencart.abstracta.us")
      cy.xpath("(//a[contains(., 'Phones & PDAs')])[1]").click();
    })

    it('Verificar si hay al menos 2 productos', () => {
      cy.visit("http://opencart.abstracta.us/index.php?route=product/category&path=24")
      cy.get(".product-thumb").should("have.length.gte", 2);
    })

    it('Agregar 2 productos al carrito y comprarlos', () => {
      cy.visit("http://opencart.abstracta.us/index.php?route=product/category&path=24")
      
      // Agregar el primer producto al carrito
      cy.xpath("(//button[@type='button'][contains(.,'Add to Cart')])[1]").click();
      cy.wait(2000)
      cy.get(':nth-child(1) > .product-thumb > :nth-child(2) > .caption > .price').invoke('text').then((text) => {
        const product1Value = text.trim();
        // Aquí puedes hacer lo que necesites con el valor del producto 1
        // Por ejemplo, puedes imprimirlo en la consola
        console.log(product1Value);
      });
      // Verificar mensaje que se agregro el producto correctamente
      cy.contains('.alert-success', 'Success: You have added').should('be.visible')
      
      // Agregar el segundo producto al carrito
      cy.xpath("(//button[@type='button'][contains(.,'Add to Cart')])[3]").click();
      cy.wait(2000)
      cy.get(':nth-child(3) > .product-thumb > :nth-child(2) > .caption > .price').invoke('text').then((text) => {
        const product2Value = text.trim();
        // Aquí puedes hacer lo que necesites con el valor del producto 1
        // Por ejemplo, puedes imprimirlo en la consola
        console.log(product2Value);
      });
      cy.contains('.alert-success', 'Success: You have added').should('be.visible')
     
      // Verifica el número de elementos en el carrito
      cy.get("#cart-total").should("contain.text", "2 item(s)");
      
      cy.get('#top-links').contains('Shopping Cart').click();
      cy.url().should('include', 'route=checkout/cart');
      //Verificar que no se presente la aletra que los productos no estan disponibles
      cy.get('.alert', { timeout: 10000 }).should('not.exist');
      cy.contains('Products marked with').should('not.exist');

      
      //Validar precios
        let product1Value;
        let product2Value;
        let subtotalValue;
        let EcoTaxValue;
        let VatValue;
        let TotalValue;
      
          cy.get('tbody > :nth-child(1) > :nth-child(6)').invoke('text').then((texto) => {
             product1Value = parseFloat(texto.trim().replace('$', ''));
          });
      
          cy.get('tbody > :nth-child(2) > :nth-child(6)').invoke('text').then((texto) => {
             product2Value = parseFloat(texto.trim().replace('$', ''));
          });
      
          cy.get('.col-sm-4 > .table > tbody > :nth-child(1) > :nth-child(2)').invoke('text').then((texto) => {
            subtotalValue = parseFloat(texto.trim().replace('$', ''));
          });
      
          cy.get('.col-sm-4 > .table > tbody > :nth-child(2) > :nth-child(2)').invoke('text').then((texto) => {
             EcoTaxValue = parseFloat(texto.trim().replace('$', ''));
          });
      
          cy.get('.col-sm-4 > .table > tbody > :nth-child(3) > :nth-child(2)').invoke('text').then((texto) => {
             VatValue = parseFloat(texto.trim().replace('$', ''));
          });
      
          cy.get('.col-sm-4 > .table > tbody > :nth-child(4) > :nth-child(2)').invoke('text').then((texto) => {
            TotalValue = parseFloat(texto.trim().replace('$', ''));
            
            
            const expectedTotal = subtotalValue + EcoTaxValue + VatValue;
            expect(TotalValue).to.equal(expectedTotal);
            expect(TotalValue).to.equal(product1Value + product2Value);
          });
      


      // Continuar a Checkout
      cy.get('.pull-right > .btn').click();
      
      //Step 1: Checkout Options
      
      // Guest Checkout (como invitado)
      cy.xpath("//input[contains(@value,'guest')]").click()

      //Click continuar
      cy.xpath("//input[@id='button-account']").click()

      //Step 2: Billing Details
      //Detalles de facturación
      cy.fixture('infoUsers').then(function(testdata) {
        
      cy.get('#input-payment-firstname').type(testdata.firstname);
      cy.get('#input-payment-lastname').type(testdata.lastname);
      cy.get('#input-payment-email').type(testdata.email);
      cy.get('#input-payment-telephone').type(testdata.telephone);
      cy.get('#input-payment-address-1').type(testdata.address);
      cy.get('#input-payment-city').type(testdata.city);
      cy.get('#input-payment-postcode').type(testdata.postcode);
      cy.get('#input-payment-country').select(testdata.country);
      cy.get('#input-payment-zone').select(testdata.zone);
      cy.get('#button-guest').click();
      
    });
    //Step 4: Delivery Method
    //Add Comments
    cy.fixture('infoUsers').then(function(testdata) {
    cy.xpath("//textarea[contains(@name,'comment')]").type(testdata.comment);
    })
    //CLick en continue
    cy.xpath("//input[@id='button-shipping-method']").click()

    //Step 5: Payment Method
    //Seleccionar Cash On Delivery
    cy.get('input[value="cod"]').check();

    // Validar que el checkbox Cash On Delivery esté marcado
    cy.get('input[value="cod"]').should('be.checked');
    cy.fixture('infoUsers').then(function(testdata) {
    cy.xpath("(//textarea[@name='comment'])[2]").clear().type(testdata.payment);
    })
    //Check Terms & Conditions
    cy.get('.pull-right > [type="checkbox"]').check();
    //Click en continuar
    cy.xpath("//input[@id='button-payment-method']").click()
    
    //Step 6: Confirm Order
    //Validar valor final compra
    let product1ValueFinal;
    let product2ValueFinal
    let subtotalValueFinal;
    let FlatValue;
    let TotalValueFinal;
    
    cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(5)').invoke('text').then((texto) => {
      product1ValueFinal = parseFloat(texto.trim().replace('$', ''));
    });

    cy.get('.table-responsive > .table > tbody > :nth-child(2) > :nth-child(5)').invoke('text').then((texto) => {
      product2ValueFinal = parseFloat(texto.trim().replace('$', ''));
    });
    
    cy.get('tfoot > :nth-child(1) > :nth-child(2)').invoke('text').then((texto) => {
      subtotalValueFinal = parseFloat(texto.trim().replace('$', ''));
    });
      
    cy.get('tfoot > :nth-child(2) > :nth-child(2)').invoke('text').then((texto) => {
      FlatValue = parseFloat(texto.trim().replace('$', ''));
    });
      
    cy.get('tfoot > :nth-child(3) > :nth-child(2)').invoke('text').then((texto) => {
      TotalValueFinal = parseFloat(texto.trim().replace('$', ''));
     
      
      expect(subtotalValueFinal).to.equal(product1ValueFinal + product2ValueFinal);
      const expectedTotal = subtotalValueFinal + FlatValue;
      expect(TotalValueFinal).to.equal(expectedTotal);
    });
    
    //Click en confirmar compra
    cy.xpath("//input[@id='button-confirm']").click()
    
     
       
    //Finalizar la compra hasta la confirmación: "Your order has been placed!"
    cy.contains('Your order has been placed!') // Verificar si el mensaje está presente en el HTML
    .should('be.visible'); // Asegurarse de que el mensaje sea visible en la página

  });

})

    
    
    
 
 
