import HomePage from "./HomePage";

class ShoppingCartPage extends HomePage{
   

  validarPaginaCarrito(){
    this.viewCart();
    cy.wait(2000);
    cy.url().should('include', 'cart');
  }

  validarProductosDisponibles(){
    cy.get('.alert', { timeout: 10000 }).should('not.exist');
    cy.contains('Products marked with').should('not.exist');
  }

  validarValorTotal() {
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
  }

  procederCheckout() {
    cy.xpath("//a[contains(@class,'btn btn-primary')]").click();
  }
  
}


export default ShoppingCartPage;
