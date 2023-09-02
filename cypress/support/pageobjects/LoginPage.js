import LoginElements from '../elements/LoginElements'
const LoginElements = new LoginElements
const url = Cypress.config("baseUrl")

class loginPage {
    //Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
    //clica no botão que acessa a página de login do site
    abraPaginaLogin(){
        cy.visit(LoginElements.botaoLogin())
    }
    //verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoCadastro(){
        //  cy.get(loginElements.botaoConecte()).should('conecte-se')
        
        cy.get(LoginElements.botaoConecte())
         .invoke('attr', 'value')
         .should('eq', 'conecte-se')
    }

}

export default loginPage;