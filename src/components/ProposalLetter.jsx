import { useRef } from 'react';
import { format } from 'date-fns';
import { Margin, usePDF } from 'react-to-pdf';

function ProposalLetter({ company, userData }) {
  const { toPDF, targetRef } = usePDF({
    filename: `bitcoin-proposal-${company?.name?.toLowerCase().replace(/\s+/g, '-')}.pdf`,
    page: {
      margin: Margin.NONE,
      format: 'letter',
    }
  });

  return (
    <div className="letter">
      <h2>Your Letter Preview</h2>
      
      <div className="letter-content" ref={targetRef}>
        <div className="pdf-content">
          <div className="sender-info">
            <strong>{userData.name}</strong><br />
            {userData.address}<br />
            {userData.city}, {userData.state} {userData.zip}<br />
            {userData.email}<br />
            {userData.phone}
          </div>

          <div className="date">
            {format(new Date(), 'MMMM d, yyyy')}
          </div>

          <div className="recipient-info">
            <strong>Board of Directors</strong><br />
            {company.name}<br />
            {company.address}<br />
            {company.city}, {company.state} {company.zip}
          </div>

          <div className="subject">
            <strong>Subject: Shareholder Proposal for Assessment of Investing in Bitcoin</strong>
          </div>

          <div className="letter-body">
            <p>Dear Members of the Board,</p>

            <p>I am a shareholder of {company.name} and am writing to submit the following shareholder proposal for consideration at the upcoming Annual General Meeting.</p>

            <p><strong>Proposal: Assessment of Investing in Bitcoin</strong></p>

            <p><strong>Proposal Request:</strong></p>

            <p>I propose that {company.name}'s Board of Directors conduct an assessment to determine if diversifying the Company's balance sheet by including Bitcoin is in the best long-term interests of shareholders.</p>

            <p><strong>Supporting Statement:</strong><br />
            In periods of sustained inflation, a company's financial stability is influenced not only by its operational success but also by how effectively it manages its assets to preserve their value. Traditional investment vehicles, such as government securities and corporate bonds, may no longer outpace inflation. Therefore, it is prudent for companies to explore and consider diversifying their balance sheets with inflation-hedging assets such as Bitcoin.</p>

            <p>As of [most recent quarter/year], {company.name} holds a significant portion of its assets in traditional securities, which may be underperforming relative to inflation. Bitcoin, as a decentralized digital asset, has demonstrated a strong track record as a hedge against inflation. As of November 25, 2024, Bitcoin has increased by 151.57% YTD, significantly outperforming traditional asset classes such as corporate bonds. Over the past five years, Bitcoin has surged by 1,144.57%, outperforming many traditional investments and highlighting its potential as an asset class for diversification.</p>

            <p>For instance, companies like MicroStrategy, which has incorporated Bitcoin into their balance sheet, have seen their stock outperform peers. The increasing institutional adoption of Bitcoin, including major firms like BlackRock, which offers a Bitcoin ETF, further demonstrates the potential benefits of Bitcoin as an asset class for corporations.</p>

            <p>While Bitcoin is more volatile than traditional assets, companies should not dismiss it entirely. A small allocation—just 1% or less—could serve as an inflation hedge without jeopardizing the company's overall financial stability.</p>

            <div className="resolved-section">
              <p><strong>Resolved:</strong><br />
              Shareholders request that the Board conduct an assessment to determine whether diversifying the Company's balance sheet by including Bitcoin is in the best long-term interests of shareholders.</p>
            </div>

            <div className="page-break">
              <p className="thank-you">Thank you for considering this proposal. I believe that it offers a forward-thinking approach to managing corporate assets, and I look forward to hearing your thoughts.</p>

              <div className="references">
                <p><strong>References:</strong></p>
                <ol>
                  <li>US Inflation Calculator, <a href="https://www.usinflationcalculator.com/inflation/annual-averages-for-rate-of-inflation">https://www.usinflationcalculator.com/inflation/annual-averages-for-rate-of-inflation</a></li>
                  <li>MarketWatch, <a href="https://www.marketwatch.com/story/true-inflation-may-have-peaked-in-late-2022-at-18-and-still-hovers-around-8-cc89ea6b">https://www.marketwatch.com/story/true-inflation-may-have-peaked-in-late-2022-at-18-and-still-hovers-around-8-cc89ea6b</a></li>
                  <li>Bitcoin Market Data, <a href="https://coinmarketcap.com/currencies/bitcoin/">https://coinmarketcap.com/currencies/bitcoin/</a></li>
                  <li>Corporate Bond Yields, <a href="https://ycharts.com/indicators/us_coporate_aaa_effective_yield">https://ycharts.com/indicators/us_coporate_aaa_effective_yield</a></li>
                  <li>MicroStrategy vs. {company.name} Stock Comparison, <a href="https://www.google.com/finance/quote/MSTR:NASDAQ">https://www.google.com/finance/quote/MSTR:NASDAQ</a></li>
                </ol>
              </div>

              <div className="signature-section">
                <p>Sincerely,</p>
                <div className="signature-line">
                  <div className="line">_____________________________</div>
                  <div className="signature-name"><strong>{userData.name}</strong></div>
                </div>
                <div className="signature-line">
                  <div className="line">_____________________________</div>
                  <div className="signature-date">Date</div>
                </div>
                <div className="shareholder-title">
                  <strong>Shareholder of {company.name}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="letter-actions">
        <button onClick={toPDF} className="download-button">
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default ProposalLetter;
