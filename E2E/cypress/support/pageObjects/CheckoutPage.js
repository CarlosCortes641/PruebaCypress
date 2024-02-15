class CheckoutPage{


    irCheckoutPage(){
        cy.visit("https://opencart.abstracta.us/index.php?route=checkout/checkout");
    }

    checkoutComoInvitado(){
        cy.xpath("//input[contains(@value,'guest')]").click()
        //Click continuar
        cy.xpath("//input[@id='button-account']").click()
    }

    ingresarDatosFacturacion(){
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
            //Click continuar
            cy.get('#button-guest').click();
            
        });

    }

    agregarComentarioPedido(){
        cy.fixture('infoUsers').then(function(testdata) {
            cy.xpath("//textarea[contains(@name,'comment')]").type(testdata.comment);
            })
            //CLick en continue
            cy.xpath("//input[@id='button-shipping-method']").click() 
    }

    agregarMetodoPago(){
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
    }

    validarValorTotalPedido() {
        let product1Value;
        let product2Value;
        let subtotalValue;
        let FlatValue;
        let TotalValue;
      
        cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(5)').invoke('text').then((texto) => {
          product1Value = parseFloat(texto.trim().replace('$', ''));
        });
      
        cy.get('.table-responsive > .table > tbody > :nth-child(2) > :nth-child(5)').invoke('text').then((texto) => {
          product2Value = parseFloat(texto.trim().replace('$', ''));
        });
      
        cy.get('tfoot > :nth-child(1) > :nth-child(2)').invoke('text').then((texto) => {
          subtotalValue = parseFloat(texto.trim().replace('$', ''));
        });
      
        cy.get('tfoot > :nth-child(2) > :nth-child(2)').invoke('text').then((texto) => {
          FlatValue = parseFloat(texto.trim().replace('$', ''));
        });
      
        cy.get('tfoot > :nth-child(3) > :nth-child(2)').invoke('text').then((texto) => {
          TotalValue = parseFloat(texto.trim().replace('$', ''));
         
          expect(subtotalValue).to.equal(product1Value + product2Value);
          const expectedTotal = subtotalValue + FlatValue;
          expect(TotalValue).to.equal(expectedTotal);
        });
    }

    finalizarCompra(){
        cy.xpath("//input[@id='button-confirm']").click()
    }

    validarMensajeCompraExitosa(){
        //Finalizar la compra hasta la confirmación: "Your order has been placed!"
        cy.contains('Your order has been placed!') // Verificar si el mensaje está presente en el HTML
       .should('be.visible'); // Asegurarse de que el mensaje sea visible en la página
    }


}

export default CheckoutPage;