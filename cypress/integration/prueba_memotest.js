/// <reference types="Cypress" />


const URL = 'http://192.168.1.139:8080/memotest/memotest.html';
const CANT_CUADROS = 8;

describe('Prueba memotest', () => {

    it('Visita la página index', () => {
        cy.visit(URL)

        
    })

    
    it('Comprueba la cantidad de cuadros', () => {
        
        cy.get('.cuadro').should('have.length', CANT_CUADROS)
    })


it('Comprueba que los cuadros sean aleatorios', () => {

    let clasesOriginales = [];
    let clasesNuevas = [];

    cy.get('.cuadro').then($cuadrosOriginales => {

        $cuadrosOriginales.each(function(i, $cuadroOriginal) {
            clasesOriginales.push($cuadroOriginal)
        }) // esto cierra el each de $cuadrosoriginales

        cy.visit(URL);

        

    }) // esto cierra el primer get, el de cuadros originales

    cy.get('.cuadro').then($cuadrosNuevos => {
        $cuadrosNuevos.each(function(i, $cuadroNuevo) {
            clasesNuevas.push($cuadroNuevo)
        }) // esto cierra el each de $cuadrosNuevos
    }) // esto cierra el segundo get, el de cuadros nuevos

    cy.wrap(clasesOriginales).should('not.deep.equal', clasesNuevas);

}) //esto cierra el it

}); // esto es del describe


describe('Comprueba la mecánica del juego', () => {

    let mapaDePares, listaDePares;

    it('elige una combinación errónea', () => {
        cy.get('.cuadro').then(cuadros => {
            mapaDePares = obtenerParesDeCuadros(cuadros);
            console.log(mapaDePares)
            listaDePares = Object.values(mapaDePares);
            console.log(listaDePares)
            listaDePares[0][0].click();
            listaDePares[1][0].click();

            cy.get('.cuadro').should('have.length', CANT_CUADROS);
        }) // cierra el get de cuadros
    }) // cierra el it de la combinacion erronea

    it('resuelve el juego', () => {

        
        listaDePares.forEach( par => {
            cy.get(par[0]).click();
            cy.get(par[1]).click();
        })

        cy.get('.cuadro').should('have.length', 0);
        cy.get('strong').contains('FIN').should('be.visible');
        
    }) // cierra el it de resuelve el juego









}) // cierra describe


function obtenerParesDeCuadros(cuadros) {
    const pares = {};

    cuadros.each((i, cuadro) => {
        console.log(cuadro.className)
        const claseColor = cuadro.className.replace('cuadro cell', '');
        console.log(claseColor)

        if (pares[claseColor]) {
            pares[claseColor].push(cuadro);
        } else {
            pares[claseColor] = [cuadro];
        }

    }) // cierra el each

    console.log(pares);
    return pares;
}