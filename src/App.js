import ClientPage from './components/ClientPage';
import ExternalSupervisor from './components/ExternalSupervisor';
import InternalSupervisor from './components/InternalSupervisor';
import LandingPage from './components/LandingPage';
import MembersPage from './components/MembersPage';
import ProblemPage from './components/ProblemPage';
import ReportPage from './components/ReportPage';

const App = () => {
  return (
    <div>
      <LandingPage/>
      <ProblemPage/>
      <ClientPage/>
      <MembersPage/>
      <ReportPage/>
    </div>
  );
}

export default App;
