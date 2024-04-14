import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Homepage from './pages/Home/Homepage';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route exact path='/' element={<Homepage/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:blogpost' element={<BlogPost/>}/>
            <Route path="*" element={<NotFound />} /> 

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
