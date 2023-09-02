/* global Given, Then, When*/

import loginPage from '../pageobjects/loginPage'
const loginPage = new loginPage

Given("acesso o site ultima", () => {
    loginPage.acessarSite();

})

When("acesso a pagina de login", () => {
    loginPage.abraPaginaLogin();

})

Then("devo visualizar botao de conecte", () => {
    loginPage.visualizarBotaoCadastro();
})