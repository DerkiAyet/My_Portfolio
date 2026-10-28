import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">
        Oops, this page doesn't exist.
      </p>
      <Link to="/" className="cosmic-button mt-2">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound