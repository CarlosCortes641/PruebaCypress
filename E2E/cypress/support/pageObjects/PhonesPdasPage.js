import HomePage from "./HomePage";

class PhonesPdasPage extends HomePage{

  validarPaginaPhonesPdas(){
    cy.title().should('include', 'Phones & PDAs')
  }
  
  verificarCantidadProductos(cantidadProducto) {
    this.VisitPdasPage();
    cy.get(".product-thumb").should("have.length.gte", cantidadProducto);
  } 
  
  agregarCantidadProductos(cantidadProducto) {
    this.VisitPdasPage();

    if (cantidadProducto >= 1) {
      cy.xpath("(//button[@type='button'][contains(.,'Add to Cart')])[1]")
        .click()
        .wait(1000); // Espera opcional para que se agregue el primer producto
        
    }

    if (cantidadProducto >= 2) {
      cy.xpath("(//button[@type='button'][contains(.,'Add to Cart')])[3]")
        .click()
        .wait(1000); // Espera opcional para que se agregue el segundo producto
        
    }
    this.verificarProductoAgregado(cantidadProducto);
  }

  verificarProductoAgregado() {
    cy.contains('.alert-success', 'Success: You have added').should('be.visible')   
  }

  validarCantidadProductosCarrito(cantidadProducto){
    cy.get("#cart-total").should("contain.text", `${cantidadProducto} item(s)`);
  }

}
  
export default PhonesPdasPage;