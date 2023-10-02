import { createSignal } from 'solid-js';
import { fetchAnalyticsData } from './api';

function App() {
  const [data, setData] = createSignal<any>(null);
  const [error, setError] = createSignal<any>(null);

  const apiKey = import.meta.env.API_KEY || "";
  const from = "2023-08-04";
  const to = "2023-09-04";
  const categoryValue = ["44c0823fbdf0aed3fa2d6357", "3742b06f9e13c9ea22a8d599"];

  // Fetch data on component mount
  (async () => {
    try {
      const result = await fetchAnalyticsData(apiKey, from, to, categoryValue);
      setData(result);
    } catch (err) {
      setError(err);
    }
  })();

  return (
    <div>
      {error() && error().message && <p>Error: {error().message}</p>}
      {data() && (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
