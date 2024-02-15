class HomePage{


    visitHome(){
        cy.visit("http://opencart.abstracta.us");
    }

    VisitPdasPage(){
        cy.visit("http://opencart.abstracta.us/index.php?route=product/category&path=24");
    }

    viewCart() {
        cy.visit("http://opencart.abstracta.us/index.php?route=checkout/cart");    
    }

}

export default HomePage;