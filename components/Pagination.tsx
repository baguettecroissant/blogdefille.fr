import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '4rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      {currentPage > 1 ? (
        <Link href={`${baseUrl}?page=${currentPage - 1}`} className="pagination-btn" style={btnStyle}>
          &laquo; Précédent
        </Link>
      ) : (
        <span className="pagination-btn disabled" style={{ ...btnStyle, opacity: 0.5, cursor: 'not-allowed' }}>
          &laquo; Précédent
        </span>
      )}

      {pages.map(page => (
        <Link 
          key={page} 
          href={`${baseUrl}?page=${page}`}
          className={`pagination-number ${currentPage === page ? 'active' : ''}`}
          style={{
             ...numberStyle,
             ...(currentPage === page ? activeStyle : {})
          }}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link href={`${baseUrl}?page=${currentPage + 1}`} className="pagination-btn" style={btnStyle}>
          Suivant &raquo;
        </Link>
      ) : (
        <span className="pagination-btn disabled" style={{ ...btnStyle, opacity: 0.5, cursor: 'not-allowed' }}>
          Suivant &raquo;
        </span>
      )}
    </div>
  );
}

const btnStyle = {
  padding: '0.5rem 1rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
};

const numberStyle = {
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
};

const activeStyle = {
  background: 'var(--accent)',
  color: 'white',
  borderColor: 'var(--accent)',
};
