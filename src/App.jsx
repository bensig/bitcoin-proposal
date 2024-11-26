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
      <header>
        <h1>Corporate Bitcoin Investment Proposal Generator</h1>
        <p className="subtitle">Create a professional proposal letter for your company's board to consider investing in Bitcoin.</p>
      </header>

      <div className="instructions">
        <h2>Getting Started</h2>
        <p>To submit this proposal, you must meet ONE of the following SEC criteria:</p>
        <ul>
          <li>Own at least $2,000 in market value, or 1% of the company's shares</li>
          <li>Have held these shares for at least 1 year before submission</li>
        </ul>
        <p>Follow these steps to generate your letter:</p>
        <ol>
          <li>Select your company from the list below</li>
          <li>Fill in your contact information</li>
          <li>Review your letter and download the PDF</li>
        </ol>
      </div>

      <div className="content-container">
        <section className="company-section">
          <CompanySelector 
            onSelect={setSelectedCompany} 
            selectedCompany={selectedCompany} 
          />
        </section>

        <section className="user-section">
          <UserForm 
            userData={userData} 
            setUserData={setUserData}
            errors={errors}
          />
        </section>

        {selectedCompany && (
          <section className="letter-section">
            <ProposalLetter 
              company={selectedCompany}
              userData={userData}
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
