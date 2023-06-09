import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./HomePage";
import { LandingPage } from "./Landing";
import { ListAlltran } from "./ListAllTransaction";
import { NewPayment } from "./NewTransForm";


function App() {
  return (
    <>
    {
      (sessionStorage.getItem("auth"))?
      <>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="newtransaction" exact element={<NewPayment/>}/>
        <Route path="Display" exact element={<ListAlltran/>}/>
      </Routes>
      </BrowserRouter>
      </>
      :
      <>
      <LandingPage/>
      </>
    }
    </>
  );
}

export default App;
