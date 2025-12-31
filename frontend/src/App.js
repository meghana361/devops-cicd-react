import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 React App running on Kubernetes</h1>
      <p>CI/CD with Docker, Jenkins, Ansible & Kubernetes</p>

      <a href="/health">Health Check</a>
    </div>
  );
}

export default App;

