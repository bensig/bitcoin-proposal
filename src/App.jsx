import { useState } from 'react';
import CompanySelector from './components/CompanySelector';
import UserForm from './components/UserForm';
import ProposalLetter from './components/ProposalLetter';
import { validateUserData } from './utils/validation';

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  return (
    <div className="app">
      <div className="wave-header-container">
        <header className="wave-header">
          <h1>Orange Wave</h1>
          <p className="mission">Creating a wave of Bitcoin adoption across public markets</p>
          <div className="manifesto">
            <p>Every proposal must be voted on by public company boards.</p>
            <p>Every vote creates awareness.</p>
            <p>Every meeting plants a seed.</p>
            <p>Together, we create the wave. 🌊</p>
          </div>
          <div className="wave-effect"></div>
        </header>
      </div>

      <div className="content-container">
        <div className="instructions">
          <h2>How It Works</h2>
          <ol>
            <li>Generate your proposal letter</li>
            <li>Print, sign, and mail it</li>
            <li>The board must vote on your proposal</li>
            <li>Share your submission to amplify the wave</li>
          </ol>
          <div className="eligibility">
            <h3>Eligibility Requirements</h3>
            <p>To submit, you must meet ONE of these SEC criteria for more than 1 year before sending a proposal:</p>
            <ul>
              <li>Own $2,000+ in company shares</li>
              <li>Own 1% of the company's securities</li>
            </ul>
          </div>
        </div>
        
        <div className="form-sections">
          <CompanySelector 
            onSelect={setSelectedCompany} 
            selectedCompany={selectedCompany} 
          />
          
          <UserForm 
            userData={userData} 
            setUserData={setUserData}
            errors={errors}
          />
        </div>

        {selectedCompany && (
          <div className="preview-section">
            <ProposalLetter 
              company={selectedCompany}
              userData={userData}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
