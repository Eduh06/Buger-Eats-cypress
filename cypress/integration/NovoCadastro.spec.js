
import SignupPages from '../support/Pages/logon/SignupPages'
import Massa from '../MassadeTeste/Massa'

describe('Tela de Cadastro de Entregador', () => {

    context('Validação de Campos obrigatórios', () => {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'name', output: 'É necessário informar o CPF' },
            { field: 'name', output: 'É necessário informar o email' },
            { field: 'name', output: 'É necessário informar o CEP' },
            { field: 'name', output: 'É necessário informar o número do endereço' },
            { field: 'name', output: 'Selecione o método de entrega' },
            { field: 'name', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            SignupPages.acessarCadastro()
            SignupPages.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                SignupPages.alertMessageShouldBe(msg.output)
            })
        })

    })

    it('Usuário deve se cadastrar com Sucesso', () => {

        var entregador = Massa.entregador()
        SignupPages.acessarCadastro()
        SignupPages.fillForm(entregador)
        SignupPages.submit()

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
    })

    it('Usuário informa Cpf inválido', () => {

        var entregador = Massa.entregador()
        entregador.cpf = '0007562580u'

        SignupPages.acessarCadastro()
        SignupPages.fillForm(entregador)
        SignupPages.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
        cy.screenshot("Cpf Inválido")

    })

    it('Usuário informa e-mail inválido', () => {

        var entregador = Massa.entregador()
        entregador.email = 'teste.com.br'

        SignupPages.acessarCadastro()
        SignupPages.fillForm(entregador)
        SignupPages.submit()

        cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')
        cy.screenshot("Email inválido")
    })

    it.skip('Usuário informa CEP inválido', () => {

        var entregador = Massa.entregador()
        entregador.endereco.cep = '08900-97E'

        SignupPages.acessarCadastro()
        SignupPages.fillForm(entregador)
        SignupPages.submit()

        cy.get('#page-deliver > form > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span').should('have.text', 'Informe um CEP válido')
        cy.screenshot("CEP inválido")
    })
})