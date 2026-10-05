import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ currentPageTitle }) {
  return (
    <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', background: 'rgba(15, 23, 42, 0.6)', borderBottom: '1px solid #1e293b' }}>
      <div className="container">
        <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.875rem', flexWrap: 'wrap' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
              <Home size={15} style={{ color: '#f59e0b' }} />
              <span>Home</span>
            </Link>
          </li>

          <li style={{ color: '#64748B', display: 'flex', alignItems: 'center' }}>
            <ChevronRight size={14} />
          </li>

          <li>
            <a href="/#services" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 600 }}>
              Services
            </a>
          </li>

          <li style={{ color: '#64748B', display: 'flex', alignItems: 'center' }}>
            <ChevronRight size={14} />
          </li>

          <li style={{ color: '#f59e0b', fontWeight: 700 }}>
            <span>{currentPageTitle}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
