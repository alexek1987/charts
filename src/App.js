import "./App.css";
import ApexChart from "./ApexChart";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="app container">
      <h1 className="text-center">Säljstatistik</h1>

      {loading ? (
        <h1>LOADING...</h1>
      ) : user ? (
        <ApexChart />
      ) : (
        <div className="mt-5 text-center">
          <button className="mt-4 btn btn-primary" onClick={signIn}>
            Logga in med Google
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
