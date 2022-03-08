export const APP_ROUTE = "https://app.mintables.club"

const Redirect = () => {
  if (typeof window !== "undefined") {
    // Client-side-only code
    if (window.location.pathname !== "/") {
      window.location.href = APP_ROUTE + window.location.pathname
    }
  }

  return <p></p>
}

export default Redirect