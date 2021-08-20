describe ('Orders Form', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    const nameInput =()=> cy.get('input[name=name]')
    const marinaraInput =()=> cy.get('input[name=marinara]')
    const pestoInput =()=> cy.get('input[name=pesto]')
    const tomatoInput =()=> cy.get('input[name=tomato]')
    const alfredoInput =()=> cy.get('input[name=alfredo]')
    const btnInput =()=> cy.get('button[id="order-button"]')

    describe('mvp test',()=>{
        
        it('test that you can add text to the box',()=>{
            nameInput()
                .should('have.value','')
                .type('Testing')
                .should('have.value', 'Testing')
        })

        it('test that you can select multiple sauces',()=>{
            marinaraInput()
                .check({force:true})
                .should('have.value', 'on')
            pestoInput()
                .check({force:true})
                .should('have.value', 'on')
            tomatoInput()
                .check({force:true})
                .should('have.value', 'on')
            alfredoInput()
                .check({force:true})
                .should('have.value', 'on')
            
        })

        it('test that you can submit the form', () =>{
            btnInput().should('not.be.disabled')
        })

    })