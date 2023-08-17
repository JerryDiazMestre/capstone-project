import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import Quizzes from './components/Quizzes';
export default function Home() {
  return (
    <main>
        <Header />
        <div className='container'>
            <SubHeader />
        </div>
        <div className='container'>
            <Quizzes />
        </div>
    </main>
  )
}
