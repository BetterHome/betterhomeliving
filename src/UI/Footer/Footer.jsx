import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer>
        Better Home Living © 2024
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
        <Link to="/TermsOfUse">Terms of Use</Link>
    </footer>
  )
}
