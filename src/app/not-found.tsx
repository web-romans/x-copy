import Link from "next/link";

export default function NotFound() {
    return <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-neutral-600 mb-8">
            This page does not exist. Or maybe it moved.
        </p>
        <Link
            href="/"
            className="text-sm text-blue-500 transition-opacity hover:underline hover:opacity-80"
        >
            ← Back to home
        </Link>
    </div>
}
