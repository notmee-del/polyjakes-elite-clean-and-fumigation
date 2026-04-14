'use client';

export default function BookNowButton() {
  return (
    <a
      href="/dashboard/book"
      style={{ 
        backgroundColor: '#22c55e',
        color: 'black',
        fontWeight: 'bold',
        padding: '12px 24px',
        borderRadius: '12px',
        textDecoration: 'none',
        fontSize: '14px',
        display: 'inline-block'
      }}
    >
      Book Now
    </a>
  );
}