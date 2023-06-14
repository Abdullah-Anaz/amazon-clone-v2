import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51NBPYVAY77S8ouiJVMpxfTRyOtCacvrrV7GszEhD56FgXf0whDvTvVwjNipWNJFdnIT9UhCfiVJY4mlGI44W2Mgx001WUdMxH0"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={[<Header key={"header"} />, <Home key={"home"} />]}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={[<Header key={"header"} />, <Checkout key={"checkout"} />]}
          />
          <Route
            path="/payment"
            element={[
              <Header key={"header"} />,
              <Elements stripe={promise}>
                <Payment key={"payment"} />
              </Elements>,
            ]}
          />

          <Route
            path="/orders"  
            element={[<Header key={"header"} />, <Orders key={"orders"} />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
