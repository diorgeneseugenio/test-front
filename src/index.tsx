import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { globalCss } from '@/style/stitches.config'

import Cart from '@/pages/Cart'
import Payment from '@/pages/Payment'
import Success from '@/pages/Success'

import Container from '@/components/Container'
import StepBar from '@/components/steps/StepBar'

import StepProvider from '@/contexts/step'
import CartProvider from '@/contexts/cart'
import PaymentProvider from '@/contexts/payment'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' },
  'html, body': { height: '100%', backgroundColor: '$gray100' }
})

const Main = (): React.ReactElement => {
  globalStyles()

  return (
    <StrictMode>
      <BrowserRouter>
        <Container>
          <StepProvider>
            <CartProvider>
              <PaymentProvider>
                <>
                  <StepBar />
                  <Switch>
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/payment" exact component={Payment} />
                    <Route path="/success" exact component={Success} />
                    <Route exact path="/">
                      <Redirect to="/cart" />
                    </Route>
                  </Switch>
                </>
              </PaymentProvider>
            </CartProvider>
          </StepProvider>
        </Container>
      </BrowserRouter>
    </StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
