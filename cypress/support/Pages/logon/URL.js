
//class loginDados {

 //   acessarLogin(){
  //      cy.viewport(1440, 900)
   //     cy.visit('https://buger-eats-qa.vercel.app/');   
   // }
    
   // preencherLogin(){
   //     cy.fixture('Login').then((login) => {
  //           cy.get('#username').type(login.username)  
   //     }) 

   //     cy.fixture('Login').then((login) => {
  //          cy.get('#password').type(login.password,{log:false})  
  //          cy.get('.col-md-12.mb-2 > #btn-grad').click()
  //      })
  //  }
//}    
  //  export default new loginDados();


//class URL {
    
//    acessarCadastro(){
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')  
 //   }
//}
export default new URL();
