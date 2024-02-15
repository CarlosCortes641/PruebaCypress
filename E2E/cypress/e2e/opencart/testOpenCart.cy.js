import HomePage from '../../support/pageObjects/HomePage.js';
import PhonesPdasPage from '../../support/pageObjects/PhonesPdasPage.js';
import ShoppingCartPage from '../../support/pageObjects/ShoppingCartPage.js';
import CheckoutPage from '../../support/pageObjects/CheckoutPage.js';


//Suite casos de prueba
describe('Prueba automatizada en Cypress', () => {
  const homePage = new HomePage();
  const phonesPdasPage = new PhonesPdasPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckoutPage();
  
  const cantidadProducto = 2;
    
    it("Validar página de inicio", () => {
      homePage.visitHome
    });

    it('Ir a Phones & PDAs', () => {
      homePage.irPhonesPdas
      phonesPdasPage.validarPaginaPhonesPdas
    });

    it('Verificar cantidad de productos en Phones & PDAs', () => {
      phonesPdasPage.verificarCantidadProductos(cantidadProducto);
    });

    it('Agregar productos al Carrito', () => {
      phonesPdasPage.agregarCantidadProductos(cantidadProducto);
      phonesPdasPage.verificarProductoAgregado();
      phonesPdasPage.validarCantidadProductosCarrito(cantidadProducto);
       
    });
 
    it('Visualizar el Carrito', () => {
      shoppingCartPage.validarPaginaCarrito();
      shoppingCartPage.validarProductosDisponibles();
      cy.wait(2000);
      shoppingCartPage.validarValorTotal();
      shoppingCartPage.procederCheckout();
    });

       
    it('Completar Checkout', () => {
      checkoutPage.irCheckoutPage();
      checkoutPage.checkoutComoInvitado();
      checkoutPage.ingresarDatosFacturacion();
      checkoutPage.agregarComentarioPedido();
      checkoutPage.agregarMetodoPago();
      checkoutPage.validarValorTotalPedido();
      checkoutPage.finalizarCompra();
      checkoutPage.validarMensajeCompraExitosa();
    });  
 
});

  


