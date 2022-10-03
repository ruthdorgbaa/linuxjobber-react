import ClassRoom from './components/courses/classroom';
import { Course } from './components/courses/course';
import { Students } from './components/courses/students';
import TopicLeft from './components/courses/topics';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <ClassRoom />
    </div>
    
  );
}

export default App;
