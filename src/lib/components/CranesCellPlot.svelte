<script lang="ts">
import { Plot, Cell, AxisX, AxisY } from 'svelteplot';

 

import { onMount } from 'svelte';
type CraneDatum = { date: string; year: number; month: string; day: number; day_month: string; observations: number };

let data: CraneDatum[] = [];

function parseCSV(csv: string): CraneDatum[] {
  const [header, ...rows] = csv.trim().split('\n');
  const parsed: CraneDatum[] = [];
  for (const row of rows) {
    const values = row.split(',');
    let obs = +values[1];
    if (isNaN(obs)) continue;
    obs = Math.sqrt(obs); // sqrt transformation
    const date = values[0];
    const year = +date.slice(0, 4);
    const month = date.slice(5, 7);
    if (!["03","04"].includes(month)) continue;
    const day = +date.slice(8, 10);
    const day_month = `${month.padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    parsed.push({ date, year, month, day, day_month, observations: obs });
  }
  return parsed;
}

onMount(async () => {
  const res = await fetch('https://raw.githubusercontent.com/rfordatascience/tidytuesday/main/data/2025/2025-09-30/cranes.csv');
  const text = await res.text();
  data = parseCSV(text);
  // Debug: log unique months in the filtered data
  console.log('Months in data:', Array.from(new Set(data.map(d => d.month))).sort());
});
const years = Array.from(new Set(data.map(d => d.year))).sort();
const months = Array.from(new Set(data.map(d => d.month))).sort();
const days = Array.from(new Set(data.map(d => d.day))).sort();
$: day_months = Array.from(new Set(data.map(d => d.day_month))).sort((a, b) => {
  // Sort by month then day
  const [am, ad] = a.split('-').map(Number);
  const [bm, bd] = b.split('-').map(Number);
  return am !== bm ? am - bm : ad - bd;
});
</script>

<div style="background:#111; padding:0.5rem; border-radius:0.5rem; color:#fff;">
  <h2 style="margin:0 0 0.5rem 0; font-size:1.5rem; color:#fff;">Spring Crane Migration Occur Earlier</h2>
  <div style="margin-bottom:1rem; color:#fff; font-size:1rem; max-width:700px;">
    For more than 30 years (1994-2024), cranes stopping at the Lake Hornborgasjön ('Lake Hornborga') in Västergötland, Sweden have been counted from the Hornborgasjön field station in the spring and the fall as they pass by during their yearly migration.
  </div>
<Plot width={600} height={300} color={{ scheme: 'plasma', legend: true }}>
  <AxisX removeDuplicateTicks={true} data={day_months} labelStyle={{ fill: '#fff' }} />
  <AxisY title="Year" labelStyle={{ fill: '#fff' }} />
  <!-- Y grid lines and labels every 5 years -->
  {#each Array.from({length: Math.floor((2024-1995)/5)+1}, (_,i) => 1995+i*5) as yline}
    <rule y={yline} stroke="#fff" strokeWidth={0.4} x1={0} x2={day_months.length-1}></rule>
    <text x={day_months.length} y={yline} fill="#fff" font-size="12" alignment-baseline="middle" style="dominant-baseline:middle;" dx="4">{yline}</text>
  {/each}
  <Cell
    data={data}
    x="day_month"
    y="year"
    fill="observations"
    stroke="#fff"
    strokeWidth={1}
  />
  </Plot>
</div>
