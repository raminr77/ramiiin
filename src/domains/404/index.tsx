import Link from "next/link";

export function NotFoundPage() {
  return (
    <div>
      <h3>404 - Not Found</h3>
      <Link href='/'>[ Home Page ]</Link>
    </div>
  );
}
