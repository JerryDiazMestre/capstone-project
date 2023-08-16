import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import SubHeader from './components/SubHeader';

export default function Home() {
  return (
    <main>
        <Header />
        <div className='container'>
          <SubHeader />
        </div>
    </main>
  )
}
