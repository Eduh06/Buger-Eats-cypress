

class SignupPages {

    acessarCadastro() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
    }

    fillForm(entregador) {
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)


        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button]').click()
        cy.get(':nth-child(4) > :nth-child(1) > input').type(entregador.endereco.numero)
        cy.get(':nth-child(4) > :nth-child(2) > input').type(entregador.endereco.complemento)

        cy.contains('.delivery-method li', entregador.metodoDeEntrega).click()//seleciona o metodo de entrega e clica 

        let fixtureFiles = [
            'cnh-digital.jpg',
        ]
        let uploadFile = 'input[accept^="image"]'
        cy.get(uploadFile).attachFile(fixtureFiles[0])
    }

    submit() {
        cy.get('.button-success').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPages
