"use client";
import { useState } from "react";

const products = [
  { id: "tee_short", name: "Unisex Short Sleeve — AS Colour 5001", apparel: true },
  { id: "tee_long", name: "Unisex Long Sleeve — Comfort Colors 6014", apparel: true },
  { id: "tank", name: "Unisex Tank Top — Bella+Canvas 3480", apparel: true },
  { id: "tote", name: "Canvas Carry-All Tote", apparel: false },
  { id: "cup", name: "Ceramic Research Mug", apparel: false },
];
const designs = [
  { group: "Chemical Skeletal Structures", options: [
    { id: "ibogaine", name: "12-Methoxyibogamine" },
    { id: "lsd", name: "N,N-Diethyl-d-lysergamide" },
    { id: "dmt", name: "N,N-Dimethyltryptamine" },
  ] },
  { group: "Physics & Mathematics Equations", options: [
    { id: "schrodinger", name: "Schrödinger Equation" },
    { id: "heisenberg", name: "Heisenberg Uncertainty" },
    { id: "maxwell", name: "Maxwell’s Equations" },
    { id: "second_law", name: "Second Law of Thermodynamics" },
  ] },
  { group: "Scientists", options: [{ id: "curie", name: "Marie Curie (Vintage Laboratory Portrait)" }] },
];

export function MerchLab() {
  const [item, setItem] = useState("tee_short");
  const [design, setDesign] = useState("ibogaine");
  const [size, setSize] = useState("M");
  const [capacity, setCapacity] = useState("11 oz");
  const product = products.find(p => p.id === item)!;
  const artwork = designs.flatMap(g => g.options).find(d => d.id === design)!;
  return <div id="snr-merch-lab">
    <h2>Research Merchandise Lab</h2>
    <p className="snr-subtitle">Select your apparel style or accessory and scientific front print. Print-on-demand fulfillment is planned.</p>
    <div className="snr-grid">
      <div className="snr-form-pane">
        <div className="snr-field">
          <label htmlFor="snr-item-type">1. Item type</label>
          <select id="snr-item-type" value={item} onChange={e => setItem(e.target.value)}>
            {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div className="snr-field">
          <label htmlFor="snr-design-select">2. Front design</label>
          <select id="snr-design-select" value={design} onChange={e => setDesign(e.target.value)}>
            {designs.map(g => <optgroup key={g.group} label={g.group}>{g.options.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}</optgroup>)}
          </select>
        </div>
        {product.apparel && <div className="snr-field">
          <label htmlFor="snr-size-select">3. Apparel size</label>
          <select id="snr-size-select" value={size} onChange={e => setSize(e.target.value)}>
            {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>}
        {item === "cup" && <div className="snr-field">
          <label htmlFor="snr-mug-capacity">3. Mug capacity</label>
          <select id="snr-mug-capacity" value={capacity} onChange={e => setCapacity(e.target.value)}><option>11 oz</option><option>15 oz</option></select>
        </div>}
        {item === "tote" && <p>One size — dimensions to be confirmed.</p>}
        <button type="button" className="snr-submit-btn" disabled aria-describedby="snr-checkout-note">Checkout not yet available</button>
        <p id="snr-checkout-note" className="snr-specs-footer">Printful and checkout are not connected. This preview does not place or save an order.</p>
        <div className="snr-specs-footer">Proposed specifications: 12-pointed Star logo at the outer back neck on apparel; 300 DPI artwork. Product availability, sizes, print method, and final placement require supplier confirmation.</div>
      </div>
      <div className="snr-preview-pane" aria-live="polite" aria-atomic="true">
        <span className="snr-preview-tag">Design concept · Artwork pending</span>
        <div id="snr-preview-content">{artwork.name}</div>
        <p id="snr-preview-caption">{product.name}<br />{product.apparel ? size : item === "cup" ? capacity : "One size"}</p>
        <p className="snr-specs-footer">Selection preview only. Final print artwork has not been uploaded.</p>
      </div>
    </div>
  </div>;
}
