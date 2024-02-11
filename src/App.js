
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogForm from './components/BlogForm';
// import YourExistingBlogComponent from './components/YourExistingBlog';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogForm />
      {/* <YourExistingBlogComponent/> */}
      <div className='content'>

      </div>
    </div>
  );
}

export default App;
