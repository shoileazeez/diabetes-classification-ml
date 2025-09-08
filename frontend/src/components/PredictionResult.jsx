import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const PredictionResult = ({ result }) => {
  if (!result) return null;

  const probability = parseFloat(result.probability) || 0;

  // Chart data: just to have a continuous X axis from 0 to 100
  const riskData = Array.from({ length: 101 }, (_, i) => ({
    percent: i,
    value: i,
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-2">Prediction Results</h2>
      <p>
        <strong>Risk Probability:</strong> {probability}%
      </p>
      <p>
        <strong>Risk Level:</strong> {result.risk_level}
      </p>
      <p>
        <strong>Prediction:</strong> {result.prediction}
      </p>
      <p>
        <strong>Confidence:</strong> {result.confidence}%
      </p>
      <p className="text-xs mt-2 text-gray-500">
        This is an AI prediction tool for informational purposes only. Please consult a healthcare
        professional.
      </p>

      {/* Risk Chart */}
      <div className="mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={riskData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="percent"
              type="number"
              domain={[0, 100]}
              tickFormatter={(tick) => `${tick}%`}
            />
            <YAxis hide />
            <Tooltip formatter={(value) => `${value}%`} />

            {/* Color Ranges */}
            <ReferenceArea x1={0} x2={30} y1={0} y2={100} fill="#22c55e" fillOpacity={0.2} />
            <ReferenceArea x1={30} x2={70} y1={0} y2={100} fill="#eab308" fillOpacity={0.2} />
            <ReferenceArea x1={70} x2={100} y1={0} y2={100} fill="#ef4444" fillOpacity={0.2} />

            {/* Actual Probability Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              dot={false}
              isAnimationActive={false}
            />
            <ReferenceArea
              x1={probability}
              x2={probability}
              y1={0}
              y2={100}
              stroke="#2563eb"
              strokeWidth={3}
              fillOpacity={0}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PredictionResult;
