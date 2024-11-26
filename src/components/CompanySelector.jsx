import { useState } from 'react';
import companiesData from '../data/companies.json';

function CompanySelector({ onSelect, selectedCompany }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = companiesData.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="company-selector">
      <h2>Select Company</h2>
      <input
        type="text"
        placeholder="Search for a company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="companies-list">
        {filteredCompanies.map(company => (
          <div
            key={company.symbol}
            className={`company-item ${selectedCompany?.symbol === company.symbol ? 'selected' : ''}`}
            onClick={() => onSelect(company)}
          >
            <strong>{company.name}</strong>
            <span>{company.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanySelector;
