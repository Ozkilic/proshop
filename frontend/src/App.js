import { Container } from 'react-bootstrap'
import { BrowserRouter as Roter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

const App = () => {
  return (
    <Roter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/Cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Roter>
  )
}

export default App
