const RiskGuide = () => (
  <div className="bg-gray-50 p-4 rounded-lg shadow mt-6">
    <h2 className="text-lg font-semibold mb-2">Risk Level Guide</h2>
    <p>Understanding the three-tier risk assessment system:</p>
    <ul className="mt-2 space-y-2">
      <li><span className="text-green-600 font-semibold">Low Risk (0-30%)</span></li>
      <li><span className="text-yellow-600 font-semibold">Medium Risk (30-70%)</span></li>
      <li><span className="text-red-600 font-semibold">High Risk (70-100%)</span></li>
    </ul>
  </div>
);

export default RiskGuide;
