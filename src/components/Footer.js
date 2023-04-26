import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrLinkp justify-content-between Linklign-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex Linklign-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decorLinktion-none lh-1">
          </Link>
          <span className="text-muted">© 2023 Beens Bar, Inc</span>
        </div>

      </footer>
    </div>
  )
}
