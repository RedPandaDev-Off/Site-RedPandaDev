import ElectricBorder from './ElectricBorder';
import React from 'react';

interface TarifCardProps {
  title: string;
  price: string;
  options: string[];
  color?: string;
}

const TarifCard: React.FC<TarifCardProps> = ({ title, price, options, color = '#ff9900' }) => (
  <ElectricBorder color={color} style={{ width: 340, minHeight: 300, padding: 0 }}>
    <div style={{ width: '100%', padding: 24, color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>{title}</h2>
      <div style={{ fontWeight: 'bold', fontSize: '2rem', color, marginBottom: 12 }}>{price}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {options.map((opt, i) => (
          <li key={i} style={{ marginBottom: 8, fontSize: '1rem', fontWeight: 400 }}>{opt}</li>
        ))}
      </ul>
    </div>
  </ElectricBorder>
);

export default TarifCard;
