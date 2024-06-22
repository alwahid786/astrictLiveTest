export default function SquareBox({color = '#E0592A'}) {
    return (
        <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <rect width="12" height="12" fill={color} />
      </svg>
    );
  }