import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { BookList } from "./component/BookList";
import Home from "./component/Home";
import { BookForm } from "./component/BookForm";
import Login from "./component/Login";
import RouteGuard from "./component/RootGuard";
import Signup from "./component/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<RouteGuard isPrivate>
          <BookList />
        </RouteGuard>} />
        <Route path="/add-book" element={<RouteGuard isPrivate><BookForm /></RouteGuard>} />
        <Route path="/login" element={<RouteGuard ><Login /></RouteGuard>} />
        <Route path="/register" element={<RouteGuard ><Signup /></RouteGuard>} />
      </Routes>
    </Router>
  );
}

export default App;
